const Node = (props) => {
    const { className, onClick} = props;

    return (
        <div
            className={className}
            onClick={(e) => {
                console.log(props.nodePosition)
                onClick(e)
            }}
        />
    )
}

export default Node;