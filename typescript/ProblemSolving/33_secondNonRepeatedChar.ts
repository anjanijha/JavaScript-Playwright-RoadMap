function secondNonRepeatedChar(str: string): void {
    const map = new Map<string, number>();
    for (const ch of str) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }
     let count = 0;

     for(let i=str.length-1;i>=0;i--){
        const char=str[i];
        if(map.get(char)===1){
          console.log(`The last Non-Repeated Character is: ${char}`);
          break;  
        }
     }

    for (const ch of str) {
        if (map.get(ch) === 1) {
            count++;
            if(count==2)
            {
            console.log(`The 2nd Non-Repeated Character is: ${ch}`);
            return;
            }
        }
    }
    console.log("No 2nd non-repeated character found.");
}
secondNonRepeatedChar("Anjani");


