import { AuthorName, AuthorText, AuthorColumn } from "../assets/authors";

const Author = (props: Record<string, any>) => {
    return(
        <div>
            <AuthorColumn>
                <img alt="logo.png" />
                <AuthorName>
                    <a>{props.name}</a>
                </AuthorName>
                <AuthorText>
                    <a>{props.text}</a>
                </AuthorText>
            </AuthorColumn>
        </div>
        );
}

export default Author;

