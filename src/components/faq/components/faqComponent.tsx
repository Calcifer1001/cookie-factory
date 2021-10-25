import { FAQs } from "../../../common/resource";
import Question from "./Question";
import Answer from "./Answer";

const FaqComponent = (props: Record<string, any>) => {
    return(
        <div>
            <Question displayText={FAQs.QA1.question} />
            <Answer displayText={FAQs.QA1.answer} />
            <Question displayText={FAQs.QA2.question} />
            <Answer displayText={FAQs.QA2.answer} />
        </div>
    );
};

export default FaqComponent;