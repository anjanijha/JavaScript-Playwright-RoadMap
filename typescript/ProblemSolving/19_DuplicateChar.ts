function DuplicateChar(str: string) :void{
    const map= new Map<string,number>();
    for(const ch of str){
        map.set(ch,(map.get(ch)?? 0)+1);
    }
    for(const[char,count] of map){
        if(count>1)
        console.log(`The char : ${char} with : ${count}`);
    }
}
DuplicateChar("Anjani");