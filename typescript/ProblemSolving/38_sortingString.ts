function sortingString(str: string): void {
    const chars =str.split("");
    for(let i=0;i<chars.length;i++){
        for(let j=i+1;j<chars.length;j++){
            if(chars[i]>chars[j]){
                let temp=chars[i];
                chars[i]=chars[j];
                chars[j]=temp;
            }
        }
    }
    console.log(`The sorted string : ${chars.join("")}`);
}
sortingString("fedcba");