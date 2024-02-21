const numbers = require("./database")

function quickSort(list)
{
    if (list.length > 1)
    {
        let left = []
        let right = []
        let equals = []
        const pivotIndex = Math.floor(Math.round(Math.random() * (list.length - 1)))
        for (let index = 0; index <= list.length-1; index++)
        {
            if (list[index] < list[pivotIndex])
            {
                left.push(list[index])
            }
            else if (list[index] > list[pivotIndex])
            {
                right.push(list[index])
            }
            else if (index != pivotIndex)
            {
                equals.push(list[index])
            }
        }        
        return quickSort(left).concat(list[pivotIndex]).concat(equals).concat(quickSort(right))
    }   
    return list
}

console.log(quickSort(numbers))