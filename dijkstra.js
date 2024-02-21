
function dijkstra(graph,  start)
{
    const execTable = {}    
    const verifiedNodes = []
    let minorNode = start
    while(true)
    {
        const neighbors = graph[minorNode]
        neighbors.forEach((neighbor, index) => 
        {
            if (!execTable[neighbor.nodeName] || (execTable[neighbor.nodeName] && neighbor.cost < execTable[neighbor.nodeName].cost))
            {
                execTable[neighbor.nodeName] = {
                    nodeName: neighbor.nodeName,
                    ancestor: neighbor.ancestor,
                    cost: neighbor.ancestor === start? neighbor.cost : neighbor.cost + execTable[neighbor.ancestor].cost
                }
            }
        })
        verifiedNodes.push(minorNode)
        let nextMinor = null
        for (let [nodeName, node] of Object.entries(execTable))
        {
            if ((nextMinor == null && !verifiedNodes.includes(nodeName)) || (!verifiedNodes.includes(nodeName) && node.cost < nextMinor.cost))
            {
                nextMinor = node
            }
        }
        if (!nextMinor) 
        {
            break;
        }
        minorNode = nextMinor.nodeName
    }
    return execTable
}

function main()
{
    const graph = {
        "a": [
            { nodeName: "b", ancestor: "a", cost: 2},
            { nodeName: "c", ancestor: "a", cost: 3},
            { nodeName: "d", ancestor: "a", cost: 4}
        ],
        "b": [
            { nodeName: "e", ancestor: "b", cost: 10}
        ],
        "c": [
            { nodeName: "e", ancestor: "c", cost: 7}
        ],
        "d": [
            { nodeName: "c", ancestor: "d", cost: 0},
            { nodeName: "e", ancestor: "d", cost: 3}
        ],
        "e": []
    }

    const result = dijkstra(graph, "a")
    console.log(result)
}

main()