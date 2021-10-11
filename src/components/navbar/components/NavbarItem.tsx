const NavbarItem = (props: Record<string, any>) => {
    return(
        <div>
            <a href={props["href"]}>{props["displayText"]}</a>
        </div>
    );
}

export default NavbarItem;