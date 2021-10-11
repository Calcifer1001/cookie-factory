const PropsText = (props: Record<string, any>) => {
    return(
        <div className='props-text'>
            <a>{props.displayText}</a>
        </div>
    );
}

export default PropsText;