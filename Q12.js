function Check(word){
for(let i =0 ; i<word.length ; i++){
    if(word[i-1] === word[i] ){
        return word[i]
    }
}}
console.log(Check( "abccbaacz"))