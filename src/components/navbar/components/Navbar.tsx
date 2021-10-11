import NavbarItem from './NavbarItem';
import ConnectWalletButton from './ConnectWalletButton';
import "../assets/navbar.css";



const Navbar = (props: Record<string, any>) => {
    return(
        <div>
            <div className="flex-row">
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
            </div>
            
        </div>
    );
}


export default Navbar;
