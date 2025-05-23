function Check(word){
    let match = new Set()
for(let char of word){
    if(match.has(char)){
        return char
    }
    match.add(char)

}

}
console.log(Check("abccbaacz"))
console.log(Check("nwcn"))