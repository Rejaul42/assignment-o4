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
            if(arr[0] > 0 && arr[1] > 0){
                if(arr[0] < arr[1]){
                    return arr.reverse();
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
console.log(sortMaker([30, -30]))