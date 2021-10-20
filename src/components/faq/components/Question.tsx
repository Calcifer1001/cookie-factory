const Question = (props: Record<string, any>) => {
    return(
        <div>
            <a>{props.displayText}</a>
        </div>
    );
}

export default Question;