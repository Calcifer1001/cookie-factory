import styled from 'styled-components';

const Question = (props: Record<string, any>) => {
    return(
        <div>
            <QuestionStyle>{props.displayText}</QuestionStyle>
        </div>
    );
}

const QuestionStyle = styled.h2`
    font-weight: 500;
`

export default Question;