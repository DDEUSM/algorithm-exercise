const mergeSort = require("./merge-sort")
const numbers = mergeSort(require("./database"), "asc")

function binarySearch(list, seekValue, leftLimitIndex = 0, rightLimitIndex = 0)
{
    let middleIndex = Math.floor((rightLimitIndex + leftLimitIndex) / 2)
    if (list[middleIndex] === seekValue)
    {
        return {value: list[middleIndex], at: middleIndex}
    }
    else if ((rightLimitIndex - leftLimitIndex) === 0)
    {
        return {}
    }
    else if (list[middleIndex] > seekValue)
    {
        rightLimitIndex = middleIndex - 1
    }
    else
    {
        leftLimitIndex = middleIndex + 1
    }
    return binarySearch(list, seekValue, leftLimitIndex, rightLimitIndex)
}
console.log(binarySearch(numbers, 12, 0, numbers.length-1))