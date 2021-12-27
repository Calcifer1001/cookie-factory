import './countdown.css';
import React from 'react';  

// function component
//@ts-ignore
const AnimatedCard = ({ animation, digit }) => {
    return(
      <div className={`flipCard ${animation}`}>
        <span>{digit}</span>
      </div>
    );
  };
  
  // function component
  //@ts-ignore
  const StaticCard = ({ position, digit }) => {
    return(
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  };
  
  // function component
  //@ts-ignore
  const FlipUnitContainer = ({ digit, shuffle, unit }) => {	
    
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit - 1;
  
    // to prevent a negative value
    if ( unit !== 'hours') {
      previousDigit = previousDigit === -1 
        ? 59 
        : previousDigit;
    } else {
      previousDigit = previousDigit === -1 
        ? 23 
        : previousDigit;
    }
  
    // add zero
    if ( currentDigit < 10 ) {
      currentDigit = `0${currentDigit}`;
    } 
    if ( previousDigit < 10 ) {
      //@ts-ignore
      previousDigit = `0${previousDigit}`;
    }
  
    // shuffle digits
    const digit1 = shuffle 
      ? previousDigit 
      : currentDigit;
    const digit2 = !shuffle 
      ? previousDigit 
      : currentDigit;
  
    // shuffle animations
    const animation1 = shuffle 
      ? 'fold' 
      : 'unfold';
    const animation2 = !shuffle 
      ? 'fold' 
      : 'unfold';
  
    return(
      <div className={'flipUnitContainer'}>
        <StaticCard 
          position={'upperCard'} 
          digit={currentDigit} 
          />
        <StaticCard 
          position={'lowerCard'} 
          digit={previousDigit} 
          />
        <AnimatedCard 
          digit={digit1}
          animation={animation1}
          />
        <AnimatedCard 
          digit={digit2}
          animation={animation2}
          />
      </div>
    );
  };
  
  // class component
  //@ts-ignore
  class FlipClock extends React.Component {
      
    //@ts-ignore
    constructor(props) {
          super(props);
          this.state = {
              hours: 0,
              hoursShuffle: true,
              minutes: 0,
              minutesShuffle: true,
              seconds: 0,
              secondsShuffle: true
          };
      }
    
      componentDidMount() {
        //@ts-ignore
          this.timerID = setInterval(
              () => this.updateTime(),
              50
          );
      }
    
      componentWillUnmount() {
        //@ts-ignore
          clearInterval(this.timerID);
      }
    
      updateTime() {
          // get new date
          const time = new Date;
          // set time units
          const hours = time.getHours();
          const minutes = time.getMinutes();
          const seconds = time.getSeconds();
          // on hour chanage, update hours and shuffle state
          //@ts-ignore
          if( hours !== this.state.hours) {
            //@ts-ignore
              const hoursShuffle = !this.state.hoursShuffle;
              this.setState({
                  hours,
                  hoursShuffle
              });
          }
          // on minute chanage, update minutes and shuffle state
          //@ts-ignore
          if( minutes !== this.state.minutes) {
            //@ts-ignore
              const minutesShuffle = !this.state.minutesShuffle;
              this.setState({
                  minutes,
                  minutesShuffle
              });
          }
          // on second chanage, update seconds and shuffle state
          //@ts-ignore
          if( seconds !== this.state.seconds) {
            //@ts-ignore
              const secondsShuffle = !this.state.secondsShuffle;
              this.setState({
                  seconds,
                  secondsShuffle
              });
          }
      }
    
      render() {
      
      // state object destructuring
          const { 
            //@ts-ignore
        hours, 
        //@ts-ignore
        minutes, 
        //@ts-ignore
        seconds, 
        //@ts-ignore
        hoursShuffle,
        //@ts-ignore 
        minutesShuffle, 
        //@ts-ignore
        secondsShuffle 
      } = this.state;
          
      return(
              <div className={'flipClock'}>
                  <FlipUnitContainer 
                      unit={'days'}
                      digit={1} 
                      shuffle={hoursShuffle} 
                      />
                  <FlipUnitContainer 
                      unit={'hours'}
                      digit={5} 
                      shuffle={hoursShuffle} 
                      />
                  <FlipUnitContainer 
                      unit={'minutes'}
                      digit={minutes} 
                      shuffle={minutesShuffle} 
                      />
                  <FlipUnitContainer 
                      unit={'seconds'}
                      digit={seconds} 
                      shuffle={secondsShuffle} 
                      />
              </div>
          );
      }
  }
  
  // function component
  const Header = () => {
    return(
      <header>
        <h1></h1>
      </header>
    );
  };
  
  // function component
  const Countdown = () => {
    return (
      <div>
        <Header />
        <FlipClock/>
      </div>
    );
  };

  export default Countdown;