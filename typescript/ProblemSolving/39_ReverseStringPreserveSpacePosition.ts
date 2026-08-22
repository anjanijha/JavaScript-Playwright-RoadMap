function ReverseStringPreserveSpacePosition (str : string):string{
        let i=0;
        let j=str.length-1;
        const chs= str.split("");
        while(i<j){
            if(str[i]===" "){
                i++;
            }
            else if(str[j]===" "){
                j--;
            }
            else{
                let temp=chs[i];
                chs[i]=chs[j];
                chs[j]=temp;
                i++;
                j--;
            }
        }
        return chs.join("");
}
let rev= ReverseStringPreserveSpacePosition ("Anjani Kumar Jha");
console.log(`The reverse of the string: ${rev}`);