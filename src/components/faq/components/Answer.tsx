import styled from 'styled-components';

const Answer = (props: Record<string, any>) => {
    return(
        <div>
            <AnswerStyle> {props.displayText} </AnswerStyle>
        </div>
    );
}

const AnswerStyle = styled.h2`
        font-family: Verdana;
        color: purple;
        font-size: 100%;
        background-color: lightskyblue;
        text-align: center;
        padding: 2%
`

export default Answer;