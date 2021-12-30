import styled from 'styled-components';

const Answer = (props: Record<string, any>) => {
    return(
        <div>
            <AnswerStyle dangerouslySetInnerHTML={{__html: props.displayText}}/>
        </div>
    );
}

const AnswerStyle = styled.p``

export default Answer;