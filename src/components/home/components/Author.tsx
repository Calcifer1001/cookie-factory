import styled from 'styled-components';

const Author = (props: Record<string, any>) => {
    return(
        <div>
            <AuthorColumn>
                <img src={props.src} alt="logo.png" />
                <AuthorName>
                    <h3>{props.name}</h3>
                </AuthorName>
                <AuthorText>
                    <p>{props.text}</p>
                </AuthorText>
            </AuthorColumn>
        </div>
        );
}

export const AuthorName = styled.div``

export const AuthorText = styled.div``

export const AuthorColumn = styled.div``

export default Author;