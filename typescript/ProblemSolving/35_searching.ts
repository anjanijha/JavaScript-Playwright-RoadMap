function searching(arr: number[],search: number): void {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===search){
            console.log(`The element :${search} is found at index of :${i}`);
            break;
        }
    }
    }
searching([1,2,3,4,6,8,0],4);