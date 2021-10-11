import "../assets/props.css";
import PropsTitle from './PropsTitle.js';
import PropsText from "./PropsText";


const PropsSection = (props) => {
    if (props.align == 'left') {
        return (
            <div class="row">
                <div class="column">
                    <PropsTitle
                        displayText="Cookies are pretty fun!"
                    />
                    <PropsText
                        displayText="Bueno, vamos a ver que sale de esto fafñafñjafjfjfñlafjlaf añjfajffjlasf afsjñafjñafjñlsafjaf fdjañsfjfljasflñf afjñlafjlafjañsfjafff asñlfjfjjfñlf"
                    />
                </div>
                <div class="column">
                    <img alt="logo.png" />
                </div>
            </div>
        ); 
    } else if (props.align == 'right') {
        return (
            <div class="row">
                <div class="column">
                    <img alt="logo.png" />
                </div>
                <div class="column">
                    <PropsTitle
                        displayText="Cookies are pretty fun!"
                    />
                    <PropsText
                        displayText="Bueno, vamos a ver que sale de esto fafñafñjafjfjfñlafjlaf añjfajffjlasf afsjñafjñafjñlsafjaf fdjañsfjfljasflñf afjñlafjlafjañsfjafff asñlfjfjjfñlf"
                    />
                </div>
            </div>
        );
    }
};

export default PropsSection;