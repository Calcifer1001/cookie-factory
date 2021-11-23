import { FAQs } from "../../../common/resource";
import Question from "./Question";
import Answer from "./Answer";

const FaqComponent = (props: Record<string, any>) => {
    return(
        <section className="faq-section max-width two-col-grid">
            {FAQs.basicData.map(faq => (
                <div>
                    <Question displayText={faq.question} />
                    <Answer displayText={faq.answer} />
                </div>
            ))}
        </section>
    );
};

export default FaqComponent;