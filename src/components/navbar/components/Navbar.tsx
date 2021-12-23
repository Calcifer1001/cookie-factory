import NavbarItem from "./NavbarItem";
import ConnectWalletButton from "./ConnectWalletButton";
import "../assets/navbar.css";
import CookieLogo from "../assets/cookie-logo-final.svg";

const Navbar = (props: Record<string, any>) => {
  return (
    <nav className="nav-wrapper">
      <div className="max-width">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/">
              <img
                src={CookieLogo}
                alt="Cookie Factory"
                className="cookie-logo"
              />
            </a>
            <NavbarItem displayText="Minting" href="/minting" />
            <NavbarItem displayText="FAQ" href="/faq" />
            <NavbarItem displayText="Market" href="/market" />
          </div>
          <ConnectWalletButton displayText="Connect Wallet" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
