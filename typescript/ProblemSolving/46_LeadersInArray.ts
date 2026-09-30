const arr=[2,3,4,1,6,7,8,9,1,2,3,4]     
     
     for (let i = 0; i < arr.length; i++) {
            let j;
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] <= arr[j])
                    break;
            }
            if (j == arr.length)
                console.log(`${arr[i]} `);
        }