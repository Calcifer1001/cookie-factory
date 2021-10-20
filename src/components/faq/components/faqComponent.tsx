import faqsText from "../textfiles/faqsText";

const FaqComponent = (props: Record<string, any>) => {
    return(
        <div>
            <div> 
                {
                    faqsText.map((element, i) => {
                    return (
                        <h1></h1> 
                    )
                    })
                }
            </div>
        </div>
    );
};

export default FaqComponent;