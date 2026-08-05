function numberOfDuplicateWord(str: string):void{
        const words= str.split(" ");
        const map= new Map<string,number>();
        for(const word of words){
            map.set(word,(map.get(word)?? 0)+1);
        }
        for(const[word,count] of map){
            if(count>1){
                console.log(`The word ${word} with count : ${count}`);
            }
        }
}
numberOfDuplicateWord("Anjani Kumar Jha Jha Kumar Kumar");