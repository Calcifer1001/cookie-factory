const AuthorsTitle = (props: Record<string, any>) => {
    return(
        <div className='authors-title'>
            <a>{props.displayText}</a>
        </div>
    );
}

export default AuthorsTitle;