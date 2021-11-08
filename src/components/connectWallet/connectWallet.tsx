import NearComponent from './components/nearComponent';
import NarwalletsComponent from './components/narwalletsComponent';
import styled from 'styled-components';

export default function ConnectWallet() {
    return (
        <CenterBlock>
            <NearComponent />
            <NarwalletsComponent />
        </CenterBlock>
    );
};

const CenterBlock = styled.div`
    display: inline-block;
    text-align: center;
`