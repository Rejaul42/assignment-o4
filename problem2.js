function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please enter a string'
    }
    else{
        if(string1.toLowerCase().includes(string2.toLowerCase()) === true){
            return true;
        }
        else{
            return false;
        }
}
}
const str1 = 'Javascript';
const str2 = 'acR'
console.log(matchFinder(str1, str2))