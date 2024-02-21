const numbers = require("./database")

function getMinor(list, newList)
{
    let minorIndex = 0;    
    let first =true
    for (let x = 0; x <= list.length-1; x++)
    {
        if (list[x] !== null)
        {
            if (first)
            { 
                minorIndex = x
                first = false;
            }
            if (list[x] < list[minorIndex])
            {
                minorIndex = x
            }
        }
    }
    const value = list[minorIndex]
    list[minorIndex] = null;
    return value
}

function selectionSort(list)
{
    let minorValue = 0;
    let newList = [];
    while (newList.length < list.length)
    {        
        minorValue = getMinor(list, newList)
        newList.push(minorValue);
    }
    console.log(newList)
}

selectionSort(numbers);