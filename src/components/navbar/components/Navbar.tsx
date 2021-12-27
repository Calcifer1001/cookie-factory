import NavbarItem from "./NavbarItem";
import ConnectWalletButton from "./ConnectWalletButton";
import "../assets/navbar.css";
import CookieLogo from '../assets/cookie-logo-final.svg';
import Countdown from './Countdown';

const Navbar = (props: Record<string, any>) => {
    return(
        <div>
            <nav className="nav-wrapper">
                <div className="max-width">
                    <div className="nav-container">
                        <div className="nav-left">
                            <a href="/"><img src={CookieLogo} alt="Cookie Factory" className="cookie-logo"/></a>
                            <NavbarItem 
                                displayText="Minting"
                                href="http://localhost:1234"
                            />            
                            <NavbarItem 
                                displayText="FAQ"
                                href="/faq"
                            />
                            <NavbarItem 
                                displayText="Market"
                                href="http://localhost:61015"
                            />
                        </div>
                        {/* <ConnectWalletButton
                            displayText="Connect Wallet"
                        /> */}
                    </div>
                </div>
            </nav>
            {/* <Countdown/> */}
            {/* <Countdown date='2021-12-10T00:00:00' /> */}
        </div>
    );
}


export default Navbar;
