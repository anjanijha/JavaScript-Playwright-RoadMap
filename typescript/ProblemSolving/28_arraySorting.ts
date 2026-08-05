function arraySorting(arr: number[]) :void{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(`The sorted array is : ${arr}`);
}
arraySorting([12,3,5,8,9,6,2]);
