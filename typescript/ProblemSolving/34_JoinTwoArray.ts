function JoinTwoArray(arr1: number[],arr2: number[]): void {
    let tolLen= arr1.length+arr2.length;
    const mergeArr: number[]=[];
    for(let i=0;i<arr1.length;i++){
        mergeArr[i]=arr1[i];
    }
        for(let i=0;i<arr2.length;i++){
        mergeArr[arr1.length+i]=arr2[i];
    }
        
        console.log(mergeArr);
    }
JoinTwoArray([1,2,3,4],[5,6,7,8]);