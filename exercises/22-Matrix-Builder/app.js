// Code goes here
const matrixBuilder = (int) => {
    let arr = []
    let matrix = []
    for (let i = 0; i < int; i++){
        arr.push(1);
    }
    for (let i = 0; i < int; i++){
        matrix.push(arr);
    }
    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))