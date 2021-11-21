import NavbarItem from './NavbarItem';
import ConnectWalletButton from './ConnectWalletButton';
import "../assets/navbar.css";

const Navbar = (props: Record<string, any>) => {
    return(
        <nav className="nav-wrapper">
            <div className="max-width">
                <div className="nav-container">
                    <div className="nav-left">
                        <a href="/"><img src="../assets/cookie-logo.png" alt="logo.png"/></a>
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
                    </div>
                    <ConnectWalletButton
                        displayText="Connect Wallet"
                    />
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
