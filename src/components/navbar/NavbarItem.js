const NavbarItem = (props) => {
    return(
        <div>
            <a href={props.href}>{props.displayText}</a>
        </div>
    );
}

export default NavbarItem;