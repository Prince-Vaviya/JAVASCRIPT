function sum(...nums){
    let sum = 0
    for(let x in nums){
        sum += nums[x];
    }
    console.log(sum);
}

sum(1, 2, 3, 4)