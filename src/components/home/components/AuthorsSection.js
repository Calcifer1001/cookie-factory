import "../assets/common.css";
import "../assets/authors.css";
import AuthorsTitle from "./AuthorsTitle";
import Author from "./Author";

import author1Text from "../textfiles/author1";
import author2Text from "../textfiles/author2";
import author3Text from "../textfiles/author3";
import author4Text from "../textfiles/author4";
import author5Text from "../textfiles/author5";

const AuthorsSection = (props) => {
        return (
            <div>
                <div class="row">
                    <AuthorsTitle
                        displayText='Cookie Makers'
                    />
                </div>
                <div class="row">
                    <Author name='Author 1' name='Cookie Maker 1' text={author1Text}/>
                    <Author name='Author 2' name='Cookie Maker 2' text={author2Text}/>
                    <Author name='Author 3' name='Cookie Maker 3' text={author3Text}/>
                    <Author name='Author 4' name='Cookie Maker 4' text={author4Text}/>
                    <Author name='Author 5' name='Cookie Maker 5' text={author5Text}/>
                </div>
            </div>
        );
};

export default AuthorsSection;