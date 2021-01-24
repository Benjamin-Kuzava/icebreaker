

const Node = (props) => {
    const { className, onClick} = props;

    return (
        <div
            className={className}
            onClick={(e) => {
                let i = props.nodeI;
                let k = props.nodeK;
                console.log(`i: ${i} k: ${k}`)
                
                // if (grid[i + 1][k])
                onClick(e);
            }}
        />
    )
}

export default Node;

// if a node a node is clicked (and it doesn't have a className of visited or node-wall), check neighbor nodes to see if one adjacent node has a className of currentPosition

// if true: remove node-current from neighbor &&  set className of node to node-current.
