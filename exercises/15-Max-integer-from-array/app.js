var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
let maxNum = 0;

for (let num of myArray)
    if (num > maxNum)
        maxNum = num;
console.log(maxNum);