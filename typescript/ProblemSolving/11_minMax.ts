function minMax(arr: number[]) :void{
    let max: number=arr[0];
    let min: number=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log(`The Min is : ${min} and the max is : ${max}`);
}
minMax([1,2,3,4,5,5,7]);