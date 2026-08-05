function duplicateNumber(nums: number[]) :number{
    /*       
    1St Approach:
    for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return nums[i];
                }
            }
          }*/
    
         //2nd Approach:
    const sets= new Set<Number>();
    for(const num of nums){
        if(sets.has(num)){
            return num;
        }
        sets.add(num)
    }
    return -1;
}

const dupNum= duplicateNumber([1,2,3,4,5,5,7]);
console.log(`The duplicate number is : ${dupNum}`);