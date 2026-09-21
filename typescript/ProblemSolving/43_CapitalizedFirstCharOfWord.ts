const str="anjani kumar jha"
const chs=str.split("")
for(let i=0;i<chs.length;i++){
    chs[0]=chs[0].toUpperCase();
    if(chs[i]===' '){
        chs[i+1]=chs[i+1].toUpperCase();
    }
}

const result=chs.join("");
console.log(`The new String is : ${result}`)