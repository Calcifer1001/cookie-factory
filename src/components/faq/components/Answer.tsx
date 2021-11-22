import styled from 'styled-components';

const Answer = (props: Record<string, any>) => {
    return(
        <div>
            <AnswerStyle> {props.displayText} </AnswerStyle>
        </div>
    );
}

const AnswerStyle = styled.h2``

export default Answer;