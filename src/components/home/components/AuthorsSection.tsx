import "../assets/common.css";
import styled from 'styled-components';
import { Authors } from '../../../common/resource';

import Author from "./Author";

const AuthorsSection = (props: Record<string, any>) => {
        return (
            <div>
                <div className="row">
                    <AuthorTitle>
                        <a>Cookie Makers</a>
                    </AuthorTitle>
                </div>
                <div>
                    <div className="row">
                        {Authors.basicData.map(author => (
                            <Author name={author.Name} text={author.Description} src={author.src}/>
                        ))}
                    </div>
                </div>
            </div>
        );
};

const AuthorTitle = styled.div`
        font-family: Verdana;
        color: purple;
        font-size: 300%;
        background-color: lightskyblue;
        text-align: center;
        padding: 2%
`

export default AuthorsSection;