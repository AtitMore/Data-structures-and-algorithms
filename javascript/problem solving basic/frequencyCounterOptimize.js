function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    var firstFrequencyCounter = {};
    var secondFrequencyCounter = {};

    for(val of arr1){
        firstFrequencyCounter[val] = (firstFrequencyCounter[val] || 0) + 1;
    }

    for(val of arr2){
        secondFrequencyCounter[val] = (secondFrequencyCounter[val] || 0) + 1;
    }

    for(key in firstFrequencyCounter) {
        if(!(key ** 2 in secondFrequencyCounter)) {
            return false;
        }

        if(secondFrequencyCounter[key ** 2] !== firstFrequencyCounter[key]) {
            return false;
        }
    }

    return true
}

same([1, 2, 3], [4, 1, 9]);
