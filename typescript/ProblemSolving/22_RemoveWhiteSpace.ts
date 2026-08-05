function RemoveWhiteSpace(str: string) :void{
    let newStr="";
    for(const ch of str){
        if(ch!==' '){
            newStr=newStr+ch;
        }
    }
    console.log(`new String is : ${newStr}`);
}
RemoveWhiteSpace("Anj an i ");