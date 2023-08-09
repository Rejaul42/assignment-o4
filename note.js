function cubeNumber(number) {
    if(typeof number !== 'number' || number < 0){
        return 'Please enter a positive number'
    }
    else{
        const cube = number * number * number;
        return cube;
    }
}



function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please enter a string'
    }
    else{
        if(string1.includes(string2) === true){
            return true;
        }
        else{
            return false;
        }
}
}



function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return 'Please enter an array';
    }
    else if(arr.length !== 2){
        return 'Please enter two length of array'
    }
    else if(typeof arr[0] !== 'number' || typeof arr[1] !== 'number'){
        return 'Please enter an array of number'
    }
    else{
        for(let i = 0; i <arr.length; i++){
            if(arr[0] >= 0 && arr[1] >= 0){
                if(arr[0] < arr[1]){
                    const value1 = arr[0];
                    arr[0] = arr[1];
                    arr[1] = value1;
                    return arr;
                }
                else if(arr[0] > arr[1]){
                    return arr;
                }
                else if(arr[0] === arr[1]){
                    return 'equal'
                }
            }
            else{
                return 'Invalid input'
            }
        }
    }
}



function findAddress(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) === true) {
        return 'Please enter an object'
    }
    else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        const fullAddress = street + ',' + house + ',' + society;
        return fullAddress;
    }
}



function canPay(changeArray, totalDue) {
    if(Array.isArray(changeArray) === false || typeof totalDue !== 'number'){
        return 'Please enter an array and a number type input'
    }
    else if(changeArray.length === 0){
        return 'Please enter an array of number'
    }
    else{
        let totalCoin = 0;
        for(let item of changeArray){
            if(typeof item === 'number'){
                totalCoin = totalCoin + item;
            }
            else{
                return 'Please enter an array of number'
            }
        }
        if(totalCoin >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}