import styled from 'styled-components';
import Wallet from './Wallet';
import NarwalletsImage from '../assets/narwallets-logo.svg';

const NarwalletsComponent  = (props: Record<string, any>) => {
    return(
        <CenterBlock>
            <a href='https://es.wikipedia.org/wiki/Harry_Potter'>
                <Wallet src={NarwalletsImage} alt={'logo.png'}/>
                Narwallets <br/>
                chrome-extension
            </a>
        </CenterBlock>
    );
};

const CenterBlock = styled.div`
    display: inline-block;
    text-align: center;
`

export default NarwalletsComponent;