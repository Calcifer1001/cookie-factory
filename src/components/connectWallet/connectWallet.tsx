import NearComponent from './components/nearComponent';
import NarwalletsComponent from './components/narwalletsComponent';
import styled from 'styled-components';

export default function ConnectWallet() {
    return (
        <CenterDiv>
            <NearComponent />
            <NarwalletsComponent />
        </CenterDiv>
    );
};

const CenterDiv = styled.div`
    display: flex;
    padding-top:20px;
    padding-bottom:20px;
    justify-content: center;
    align-items: center;
`