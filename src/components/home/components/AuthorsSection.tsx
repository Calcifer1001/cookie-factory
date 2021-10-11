import "../assets/common.css";
import "../assets/authors.css";
import AuthorsTitle from "./AuthorsTitle";
import Author from "./Author";

import { getAutorList } from "../textfiles/authorsText";

let authorList = getAutorList();

const AuthorsSection = (props: Record<string, any>) => {
        return (
            <div>
                <div className="row">
                    <AuthorsTitle
                        displayText='Cookie Makers'
                    />
                </div>
                <div className="row">
                    
                    {
                        authorList.map( (element, i) => {
                            return <Author name={'Cookie Maker ' + (i+1)} text={element}/>        
                        })
                    }
                    
                </div>
            </div>
        );
};

export default AuthorsSection;