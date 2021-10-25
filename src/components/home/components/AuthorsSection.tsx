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
                        <Author name={Authors.author1.Name} text={Authors.author1.Description}/>
                        <Author name={Authors.author2.Name} text={Authors.author2.Description}/>
                        <Author name={Authors.author3.Name} text={Authors.author3.Description}/>
                        <Author name={Authors.author4.Name} text={Authors.author4.Description}/>
                        <Author name={Authors.author5.Name} text={Authors.author5.Description}/>
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