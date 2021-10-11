import "../assets/props.css";
import PropsTitle from "./PropsTitle.js";
import PropsText from "./PropsText";


const PropsSection = (props) => {
    if (props.align == 'left') {
        return (
            <div class="row">
                <div class="column">
                    <PropsTitle
                        displayText={props.title}
                    />
                    <PropsText
                        displayText={props.text}
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
                        displayText={props.title}
                    />
                    <PropsText
                        displayText={props.text}
                    />
                </div>
            </div>
        );
    }
};

export default PropsSection;