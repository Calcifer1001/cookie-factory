const PropsTitle = (props: Record<string, any>) => {
    return(
        <div className='props-title'>
            <a>{props.displayText}</a>
        </div>
    );
}

export default PropsTitle;