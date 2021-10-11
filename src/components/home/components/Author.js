import "../assets/authors.css";

const Author = (props) => {
    return(
        <div class="author-column">
            <img alt="logo.png" />
            <div class='authors-name'>
                <a>{props.name}</a>
            </div>
            <div class='authors-text'>
                <a>{props.text}</a>
            </div>
        </div>
    );
}

export default Author;

