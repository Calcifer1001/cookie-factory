import styled from 'styled-components';
import Wallet from './Wallet';
import NearImage from '../assets/near-logo-black.svg';

const NearComponent  = (props: Record<string, any>) => {
    return(
        <CenterBlock>
            <a href='https://es.wikipedia.org/wiki/Harry_Potter'>
                <Wallet src={NearImage} alt={'logo.png'}/>
                Near Web Wallet
            </a>
        </CenterBlock>
    );
};

const CenterBlock = styled.div`
    display: inline-block;
    text-align: center;
`

export default NearComponent;