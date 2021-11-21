import "../assets/common.css";
import PropsTitle from "./PropsTitle";
import PropsText from "./PropsText";

const PropsSection = (props: Record<string, any>): JSX.Element => {
    if (props.align == 'left') {
        return (
            <div className="max-width">
                <div className="row">
                    <div className="column">
                        <PropsTitle
                            displayText={props.title}
                        />
                        <PropsText
                            displayText={props.text}
                        />
                    </div>
                    <div className="column">
                        <img alt="logo.png" />
                    </div>
                </div>
            </div>
        ); 
    } else if (props.align == 'right') {
        return (
            <div className="max-width">
                <div className="row">
                    <div className="column">
                        <img alt="logo.png" />
                    </div>
                    <div className="column">
                        <PropsTitle
                            displayText={props.title}
                        />
                        <PropsText
                            displayText={props.text}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return <div></div>;
};

export default PropsSection;