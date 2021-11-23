import styled from 'styled-components';

const Question = (props: Record<string, any>) => {
    return(
        <div>
            <QuestionStyle>{props.displayText}</QuestionStyle>
        </div>
    );
}

const QuestionStyle = styled.h2``

export default Question;