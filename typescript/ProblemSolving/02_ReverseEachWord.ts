    let str="Anjani Kumar Jha"
    const words= str.split(" ");
    let revWords="";
    for(const word of words){
        let revWord="";
        for(let i=word.length-1;i>=0;i--){
            revWord=revWord+word[i];
        }
      revWords=revWords+revWord +" ";
    }
    console.log(`The reverse of each word in string : ${revWords}`);
