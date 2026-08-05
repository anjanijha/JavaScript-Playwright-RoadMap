function SeachingFromThreeArray(arr1: number[],arr2: number[],arr3: number[]) :void{
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            for(let k=0;k<arr3.length;k++){
            if(arr1[i]==arr2[j]&&arr2[j]==arr3[k]){
          console.log(`The common elements in three array is : ${arr1[i]}`);
            }
        }
    }
    
}
}
SeachingFromThreeArray([1,2,3,4],[4,5,6,7,8],[4,9]);