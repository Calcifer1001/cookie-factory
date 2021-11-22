import styled from 'styled-components';

const PropsText = (props: Record<string, any>) => {
    return(
          <p>{props.displayText}</p>
    );
};

export default PropsText;