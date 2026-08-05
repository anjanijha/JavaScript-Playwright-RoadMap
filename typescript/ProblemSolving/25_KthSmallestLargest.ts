function KthSmallestLargest(arr: number[]) :void{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(`The 2nd Highest number is : ${arr[arr.length-2]}`);
    console.log(`The 1st Highest number is : ${arr[arr.length-1]}`);
        console.log(`The 2nd smallest number is : ${arr[1]}`);
    console.log(`The 1st smallest number is : ${arr[0]}`);
}
KthSmallestLargest([1,10,13,56,80,8]);