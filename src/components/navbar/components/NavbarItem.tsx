const NavbarItem = (props: Record<string, any>) => {
    return(
        <a href={props["href"]}>{props["displayText"]}</a>
    );
}

export default NavbarItem;