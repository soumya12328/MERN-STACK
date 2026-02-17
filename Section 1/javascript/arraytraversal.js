const nums = [4, 7, 9, 1, 3, 2];

//for loop

for (let i of nums) {
    console.log(i);
}

console.log('for Each function');


nums.forEach((n) => {
    console.log(n);
    
})

const newNums = nums.map((n) => {
    return n**2;
});

console.log(newNums);

const prices = [2300, 4500, 1200, 9000, 3000];

// add 18% GST to each price

const gstPrices = prices.map((p) => {
    return p+p*0.18;

})
console.log(gstPrices);
