import styled from 'styled-components';

const Question = (props: Record<string, any>) => {
    return(
        <div>
            <QuestionStyle>{props.displayText}</QuestionStyle>
        </div>
    );
}

const QuestionStyle = styled.h1`
        font-family: Verdana;
        color: purple;
        font-size: 100%;
        background-color: lightskyblue;
        text-align: center;
        padding: 2%
`

export default Question;