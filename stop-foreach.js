// Como parar um foreach
let arr = [1,2,3,4,5,6]

arr.forEach((item, index) => {
    console.log(item)
    if(index === 2)
        arr.splice(index, arr.length - index)
})

console.log(arr)
