import "../assets/authors.css";

const Author = (props: Record<string, any>) => {
    return(
        <div className="author-column">
            <img alt="logo.png" />
            <div className='authors-name'>
                <a>{props.name}</a>
            </div>
            <div className='authors-text'>
                <a>{props.text}</a>
            </div>
        </div>
    );
}

export default Author;

