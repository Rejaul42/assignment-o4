function cubeNumber(number) {
    if(typeof number !== 'number' || number < 0){
        return 'Please enter a positive number'
    }
    else{
        const cube = number * number * number;
        return cube;
    }
}
console.log(cubeNumber(0))