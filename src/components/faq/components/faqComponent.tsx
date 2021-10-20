import faqsText from "../textfiles/faqsText";
import Question from "./Question";
import Answer from "./Answer";

const FaqComponent = (props: Record<string, any>) => {
    return(
        <div>
            {
                faqsText['questions'].map((question,i) => {
                    return(
                        <div className={i % 2 == 0 ? 'even' : 'odd'}>
                            <Question displayText={question} />
                            <Answer displayText={faqsText['answers'][i]} />
                        </div>
                    )
            })}
        </div>
    );
};

export default FaqComponent;