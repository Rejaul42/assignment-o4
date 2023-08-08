function findAddress(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) === true) {
        return 'Please enter an object'
    }
    else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        const fullAddress = street + ',' + house + ', ' + society;
        return fullAddress;
    }
}
const address = {street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(address))