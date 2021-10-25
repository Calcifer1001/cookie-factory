import styled from 'styled-components';

const PropsText = (props: Record<string, any>) => {
    return(
        <PropsTextCSS>
            <a>{props.displayText}</a>
        </PropsTextCSS>
    );
};

const PropsTextCSS = styled.div`
    font-family: Arial;
    color: darkorchid;
    font-size: 100%;
    background-color: lightblue;
    padding : 5%;
`

export default PropsText;