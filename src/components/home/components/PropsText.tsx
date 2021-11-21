import styled from 'styled-components';

const PropsText = (props: Record<string, any>) => {
    return(
        <PropsTextCSS>
            <a>{props.displayText}</a>
        </PropsTextCSS>
    );
};

const PropsTextCSS = styled.div``

export default PropsText;