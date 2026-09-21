const arr=[1,2,3,4,5,6,7,8];
    let i=0;
    let j=arr.length-1
    while(i<j){
        if(arr[i]%2===0){
            i++;
        }
        else if(arr[j]%2===1){
            j--;
        }
        else{
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
    }
    console.log(`The new arr : ${arr}`);