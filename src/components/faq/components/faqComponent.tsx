import { FAQs } from "../../../common/resource";
import Question from "./Question";
import Answer from "./Answer";

const FaqComponent = (props: Record<string, any>) => {
    return(
        <div>
            {FAQs.basicData.map(faq => (
                <div>
                    <Question displayText={faq.question} />
                    <Answer displayText={faq.answer} />
                </div>
            ))}
        </div>
    );
};

export default FaqComponent;