const ConnectWalletButton = (props: Record<string, any>) => {
    return(
            <input value={props.displayText} type="button" onClick={()=> window.open("/connectWallet","_self")}/>
    );
}

export default ConnectWalletButton;