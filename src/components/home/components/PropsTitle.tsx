import styled from 'styled-components';

const PropsTitle = (props: Record<string, any>) => {
    return(
        <PropsTitleCSS>
            <a>{props.displayText}</a>
        </PropsTitleCSS>
    );
}

const PropsTitleCSS = styled.div``

export default PropsTitle;