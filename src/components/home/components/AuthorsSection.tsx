import "../assets/common.css";
import "../assets/authors";
import { AuthorTitle } from "../assets/authors";
import Author from "./Author";

import { getAutorList } from "../textfiles/authorsText";

let authorList = getAutorList();

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
                        {
                            authorList.map( (element, i) => {
                                return <Author name={'Cookie Maker ' + (i+1)} text={element}/>        
                            })
                        }
                        
                    </div>
                </div>
            </div>
        );
};

export default AuthorsSection;