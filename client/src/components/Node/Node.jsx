

const Node = (props) => {
    const { className, onClick} = props;

    return (
        <div
            className={className}
            onClick={(e) => {

                onClick(e);
            }}
        />
    )
}

export default Node;

// if a node a node is clicked (and it doesn't have a className of visited or node-wall), check neighbor nodes to see if one adjacent node has a className of currentPosition

// if true: remove node-current from neighbor &&  set className of node to node-current.
