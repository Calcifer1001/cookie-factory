const Answer = (props: Record<string, any>) => {
    return(
        <div>
            <a>{props.displayText}</a>
        </div>
    );
}

export default Answer;