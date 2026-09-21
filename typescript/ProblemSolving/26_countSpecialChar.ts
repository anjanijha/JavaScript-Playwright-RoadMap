const str = "Anjani@#$$#$#KumarJha"
    let upper: number=0;
    let lower: number=0;
    let digit: number=0;
    let special: number =0;
    for(const ch of str){
        if(ch>='a'&&ch<='z')
            lower++;
        else if(ch>='A'&&ch<='Z')
            upper++;
        else if(ch>='0'&&ch<='9')
            digit++;
        else
            special++;
        
    }
    console.log(`The total special charater is : ${special}`)