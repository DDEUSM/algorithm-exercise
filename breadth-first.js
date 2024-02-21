

function breadthFirst(graph, start, target)
{
    let currentNodeName
    const verifiedNodes = {}
    const toVerified = [{nodeName: start, connectionCount: 0, way: []}]
    for (let index = 0; Object.values(verifiedNodes).length <= Object.entries(graph).length; index++)
    {
        currentNodeName = toVerified[index].nodeName
        if (currentNodeName === target)
        {
            verifiedNodes[currentNodeName] = toVerified[index] // para acessar um array, é O(1), porém para redimensionar o array é mais custoso
            break;
        }
        if (graph[currentNodeName])
        {
            // o filter vai executar em tempo O(n)
            toVerified.push(...graph[currentNodeName].filter((node => 
            {
                if (!(Object.keys(verifiedNodes).includes(node.nodeName)))
                {
                    return node.way? node.way.push(...toVerified[index].way, currentNodeName) 
                    : node.way = [...toVerified[index].way, currentNodeName]
                }                
            })))
        }
        verifiedNodes[currentNodeName] = toVerified[index]
    }
    let minorWayToTarget
    for (let node of toVerified) // tempo de execução O(n)
    {
        if (node.nodeName === target && (!minorWayToTarget || node.way.length < minorWayToTarget.way.length))
        {
            minorWayToTarget = node 
        }
    }
    return minorWayToTarget
}

function main()
{
    const graph = {
        "a": [{ nodeName: "b", ancestor: "a" }, { nodeName: "c", ancestor: "a"}, { nodeName: "g", ancestor: "a"}],
        "b": [{ nodeName: "a", ancestor: "b" }, { nodeName: "c", ancestor: "b"}, { nodeName: "e", ancestor: "b"}],
        "c": [{ nodeName: "a", ancestor: "c"}, { nodeName: "b", ancestor: "c"}, { nodeName: "d", ancestor: "c"}, { nodeName: "f", ancestor: "c" }],
        "d": [{ nodeName: "c", ancestor: "d"}, { nodeName: "e", ancestor: "d"}, { nodeName: "f", ancestor: "d"}],
        "e": [{ nodeName: "b", ancestor: "e"}, { nodeName: "d", ancestor: "e"}, { nodeName: "f", ancestor: "e"}, { nodeName: "g", ancestor: "e"}],
        "f": [{ nodeName: "d", ancestor: "f"}, { nodeName: "e", ancestor: "f"}, { nodeName: "c", ancestor: "f"}, { nodeName: "g", ancestor: "f"}],
        "g": [{ nodeName: "e", ancestor: "g"}, { nodeName: "a", ancestor: "g"}, { nodeName: "f", ancestor: "g"}]
    }
    console.log(breadthFirst(graph, "a", "f"))
}

main()