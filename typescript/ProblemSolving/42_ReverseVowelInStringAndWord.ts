const str="Anjani Kumar Jha"

const words=str.split(" ");
let revVolInWord="";
let revVolInString="";
for(const word of words){
    revVolInWord=revVol(word,0,word.length-1);
    revVolInString=revVolInString+revVolInWord+ " ";
}
console.log(`The new String is : ${revVolInString}`);

function revVol(str:string,i:number,j:number){
    const chs=str.split("")
    while(i<j){
        if(!isVolwel(chs[i])){
            i++;
        }else if(!isVolwel(chs[j])){
            j--;
        }else{
            let temp=chs[i];
            chs[i]=chs[j];
            chs[j]=temp;
            i++;
            j--;
        }
    }
    return chs.join("");
}

function isVolwel(ch:any){
    return ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||
        ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U'  
}