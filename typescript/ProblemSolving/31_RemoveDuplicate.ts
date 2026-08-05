function RemoveDuplicate(nums: number[]) :void{
    const sets= new Set<number>();
    for(const num of nums){
            sets.add(num);
    }
    console.log(`The new sets : ${[...sets]}`);
}
RemoveDuplicate([1,2,4,2,6,8,9,5,4,3,2,1]);