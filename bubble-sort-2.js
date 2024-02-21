const numbers = require("./database")

const verifySwap = {
    asc: (item, nextItem) => item > nextItem? true : false,
    desc: (item, nextItem) => item < nextItem? true : false
}

function bubbleSort(order, list)
{
    let aux = 0
    let swap = false
    for (let index = 0; index <= list.length - 2; index++)
    {
        if (verifySwap[order](list[index], list[index+1]))
        {
            swap = true
            aux = list[index]
            list[index] = list[index+1]
            list[index+1] = aux
        }
        if (index == list.length - 2)
        {
            if (!swap)
            {
               continue
            }
            index = -1
            swap = false
        }
    }
    return list
}

console.log(bubbleSort("desc", numbers))
console.log(bubbleSort("asc", numbers))