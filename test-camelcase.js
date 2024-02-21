function splitWord(type, word){
    let wordArray = word.split("")
    return wordArray.reduce((newText, char, index) => {
        if (type === "C" && index < 1)
             return newText += char.toLowerCase()
        if (type === "M" && (char === "(" || char === ")")) 
            return newText += ""      
        return char === char.toUpperCase()? newText += " "+char.toLowerCase() : newText += char        
    }, "")
}

function combineWord(type, word){
    let wordArray = word.split(" ")
    return wordArray.reduce((newText, currentWord, index) => {
        if ((type != "C") && index < 1)
            return newText += currentWord
        if (type === "M" && index === wordArray.length - 1)
            return newText += currentWord.slice(0,1).toUpperCase()+currentWord.slice(1,)+"()"
        return newText += currentWord.slice(0,1).toUpperCase()+currentWord.slice(1,)
    }, "")
}

function camelCaseOrSplit(file, operation, type, word){
    const functions = {
        "S": splitWord,
        "C": combineWord
    }
    const lines = file.split("\n")
    return functions[operation](type, word)
}

function main(){
    console.log(camelCaseOrSplit("C", "C", "hello my world"))
}

main()