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
console.log(canPay([4,2,5], 10));