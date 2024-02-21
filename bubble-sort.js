const numbers = require("./database")

function BubbleSort(order, list)
{
    let aux = 0;
    let x = 0;
    let swap = false;
    let limit = list.length - 2;
    do
    {        
        if (list[x] > list[x+1])
        {            
            swap = true
            aux = list[x]
            list[x] = list[x+1]
            list[x+1] = aux
            console.log("troca")
        }
        if (x === limit)
        {
            if (swap === false)
            {
                break;
            }
            else
            {
                x = 0;
                swap = false
                continue
            }
        }
        x++;
    }
    while(true)
    console.log(list)
}

BubbleSort("asc", numbers)