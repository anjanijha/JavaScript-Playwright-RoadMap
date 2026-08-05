function countEachWord(str: string) :void{
    const words=str.split(" ");
    const map= new Map<string,number>();
    for(const word of words){
        map.set(word,(map.get(word)?? 0)+1);
    }
    for(const[word,count] of map){
        console.log(`The word : ${word} with : ${count}`);
    }
}
countEachWord("Anjani Kumar Anjani Jha Kumar Jha Jha Jha");