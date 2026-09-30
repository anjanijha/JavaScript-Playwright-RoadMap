const str="Anjani Kumar Jha"        
        const words=str.split(" ")
        let rev=""
        for (const word of words) {
            let revWord = "";
            if (word==="Kumar"){
                for (let j = word.length - 1; j >= 0; j--) {
                    revWord = revWord + word[j];
                }
                rev=rev+revWord+" ";
            } else {
                rev=rev+word+" "
            }
        }
        console.log(`The reverse middle words in String : ${rev}`);