import styled from 'styled-components';

const PropsTitle = (props: Record<string, any>) => {
    return(
        <h2>{props.displayText}</h2>
    );
}

export default PropsTitle;