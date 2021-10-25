import styled from 'styled-components';

const PropsTitle = (props: Record<string, any>) => {
    return(
        <PropsTitleCSS>
            <a>{props.displayText}</a>
        </PropsTitleCSS>
    );
}

const PropsTitleCSS = styled.div`
    font-family: Verdana;
    color: purple;
    font-size: 300%;
    background-color: lightskyblue;
    text-align: center;
    padding: 2%
`

export default PropsTitle;