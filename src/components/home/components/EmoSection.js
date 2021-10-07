import "../assets/emotion.css";
import EmoTitle from '../components/EmoTitle.js';
import EmoText from "./EmoText";


const EmoSection = (props) => {
    if (props.align == "left") {
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
    } else if (props.align == "right") {
        return(
            <div class="row">
                <div class="column">
                    <img alt="logo.png"/>
                </div>
                <div class="column">
                    <EmoTitle
                        displayText="Cookies are pretty fun!"
                    />
                    <EmoText
                        displayText="Bueno, vamos a ver que sale de esto fafñafñjafjfjfñlafjlaf añjfajffjlasf afsjñafjñafjñlsafjaf fdjañsfjfljasflñf afjñlafjlafjañsfjafff asñlfjfjjfñlf"
                    />
                </div>
            </div>
        );
    }
}

export default EmoSection;