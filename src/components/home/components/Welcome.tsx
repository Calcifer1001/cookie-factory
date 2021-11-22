import React from 'react';
import HeroCookie1 from '../assets/0.png';
import HeroCookie2 from '../assets/2.png';
import HeroCookie3 from '../assets/3.png';

export default function Welcome() {
    return <div className="max-width">
        <div className="hero-container align-center">
          <div className="flex-row">
            <img src={HeroCookie1} className="hero-cookie"/>
            <img src={HeroCookie2} className="hero-cookie"/>
            <img src={HeroCookie3} className="hero-cookie"/>
          </div>
          <h1>Hungry for cookies?</h1>
          <p>Get some of the 3,600 unique cookie NFT. Have them until you are full.</p>
        </div>
    </div>;
}