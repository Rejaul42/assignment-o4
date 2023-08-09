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
const str1 = 'Javascript';
const str2 = 'scr'
console.log(matchFinder(str1, str2))