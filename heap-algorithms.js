class Heap
{
    heapList
    constructor (list) {
        this.heapList = list
    }

    static createHeap (list, heapType)
    {
        let listAdapted = Heap.adaptListToHeap(list)
        return new Heap(listAdapted)
    }

    priorityDequeue ()
    {
        if (list.length > 0)
        {
            let newList =  this.heapList
            const lastValue = newList[newList.length - 1] 
            newList[0] = lastValue
            newList.pop()
            this.heapList = Heap.adaptListToHeap(newList)
        }
        return this.heapList
    }

    static adaptListToHeap (list)
    {
        function compareFn (a, b)
        {
            return list[a] - list[b]
        }

        function verifyChildrens(majorSonIndex, dadIndex, sequenceIndexes)
        {
            const indexList = Heap.getSons(majorSonIndex, list).filter(grandChild => grandChild).sort(compareFn) // pego os netos
            const majorGrandChildIndex = indexList[indexList.length - 1] // pego o maior neto
            if (majorGrandChildIndex === 0 || majorGrandChildIndex > 1) // verifico se o maior ou o menor neto existem
            {
                if (list[dadIndex] > list[majorGrandChildIndex]) // verifico se o índice do maior neto é um número válido e se é menor que o avô
                {
                    return swap(sequenceIndexes)
                } 
                else
                {
                    verifyChildrens(majorGrandChildIndex, dadIndex, sequenceIndexes.concat([majorGrandChildIndex]))
                }
            }
            else
            {
                swap(sequenceIndexes)
            }
        }

        function swap(sequenceIndexes)
        {
            let finalIndex = sequenceIndexes.length - 1
            let firstIndex = sequenceIndexes[0]
            for (let index = finalIndex; index > 0; index --)
            {
                let currentIndex = sequenceIndexes[index]
                let aux = list[currentIndex]
                list[currentIndex] = list[firstIndex]
                list[firstIndex] = aux  
            }
        }

        if (list.length < 3)
        {
            return list.sort(compareFn)
        }

        let finalDad = Math.floor((list.length - 1) / 2) - 1 // Sempre o resultado desta fórmula será o último nodo com filhos
        for (let dadIndex = finalDad; dadIndex >= 0; dadIndex--)
        {
            const arr = Heap.getSons(dadIndex, list).filter(sonIndex => sonIndex)
            const indexList = arr.sort(compareFn)
            const majorIndex = indexList[indexList.length - 1] // pegando o índice do maior filho
            if (majorIndex === 0 || majorIndex > 0 ) // verifico se o maior o índice do maior filho é number
            {
                if (list[majorIndex] > list[dadIndex]) // verifico se o pai é menor que o seu maior filho
                {
                    verifyChildrens(majorIndex, dadIndex, [dadIndex, majorIndex])
                }
            }
        } 
        return list
    }

    static getSons(dadIndex, list)
    {
        const leftSonConst = 1
        const rightSonConst = 2
        return  [leftSonConst, rightSonConst].map(sonConst => {
            let index = (2 * dadIndex) + sonConst 
            return list[index]? index : null 
        })
    }

    getDad(sonIndex, list)
    {
        const index = Math.floor((sonIndex - 1) / 2)
        return list[index]
    }
}

const list = [4,2,8,7,1,5,3,6,10]

const heap = Heap.createHeap(list, "max")
console.log(heap.getDad(7, heap.heapList))
console.log(heap.getDad(8, heap.heapList))
console.log(heap.priorityDequeue())
