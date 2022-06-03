function uniqueValues(arr){
    if(arr.length == 0) return 0
    var i = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

uniqueValues([1, 2, 3, 4, 5, 6, 4, 4, 5, 6])