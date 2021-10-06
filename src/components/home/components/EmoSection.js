import "../assets/emotion.css";
import EmoTitle from '../components/EmoTitle.js';
import EmoText from "./EmoText";


const EmoSection = (props) => {
    return(
        <div class="row">
            <div class="column">
                <EmoTitle
                    displayText="Cookies are pretty fun!"
                />
                <EmoText
                    displayText="Bueno, vamos a ver que sale de esto fafñafñjafjfjfñlafjlaf añjfajffjlasf afsjñafjñafjñlsafjaf fdjañsfjfljasflñf afjñlafjlafjañsfjafff asñlfjfjjfñlf"
                />
            </div>
            <div class="column">
                <img alt="logo.png"/>
            </div>
        </div>
    );
}

export default EmoSection;