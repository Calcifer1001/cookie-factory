import styled from 'styled-components';

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

export const AuthorName = styled.div`
    font-family: Arial;
    color: darkorchid;
    font-size: 150%;
    background-color: lightblue;
    text-align: center;
    padding : 5%;
`

export const AuthorText = styled.div`
    font-family: Arial;
    color: darkorchid;
    font-size: 100%;
    background-color: lightblue;
    padding : 5%;
`

export const AuthorColumn = styled.div`
    float: left;
    width: 20%;
`

export default Author;