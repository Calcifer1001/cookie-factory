import NavbarItem from './NavbarItem';
import ConnectWalletButton from './ConnectWalletButton';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../home/Home";
import Minting from '../minting/Minting';
import Market from '../market/Market';
import FAQ from '../faq/FAQ';

const Navbar = (props) => {
    return(
        <div>
            <img alt="logo.png"/>
            <NavbarItem 
                displayText="Home"
                href="/"
            />  
            <NavbarItem 
                displayText="Minting"
                href="/minting"
            />            
            <NavbarItem 
                displayText="Market"
                href="/market"
            />
            <NavbarItem 
                displayText="FAQ"
                href="/faq"
            />
            <ConnectWalletButton
                displayText="Connect Wallet"
            />
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/minting">
                        <Minting/>
                    </Route>
                    <Route exact path="/market">
                        <Market/>
                    </Route>
                    <Route exact path="/faq">
                        <FAQ/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}


export default Navbar;
