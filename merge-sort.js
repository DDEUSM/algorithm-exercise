const numbers = require("./database")

const conditional = (item1, item2, order) => order === "asc"? item1 < item2 : item1 > item2

function mergeSort(list, order)
{
    if (list.length === 1) 
    {
        return list
    }
    const middleIndex = Math.floor(Math.round((list.length-1) / 2))
    const left = [...list].slice(0, middleIndex) 
    const right = [...list].slice(middleIndex, )
    const stack1 = mergeSort(left, order) 
    const stack2 = mergeSort(right, order)
    const newList = []
    while (newList.length != list.length)
    {
        if (!stack1.length)
        {
            newList.push(stack2.shift())
        }
        else if (!stack2.length)
        {
            newList.push(stack1.shift())
        }
        else if (stack1[0] === stack2[0])
        {
            newList.push(stack1.shift(), stack2.shift())
        }
        else if (conditional(stack1[0], stack2[0], order))
        {
            newList.push(stack1.shift())
        }
        else
        {
            newList.push(stack2.shift())
        }
       
    }
    return newList
}

console.log(mergeSort(numbers, "desc"))
console.log(mergeSort(numbers, "asc"))

module.exports = mergeSort