function validAnagram(string1, string2) {
    if(string1.length !== string2.length){
        return false;
    }

    var obj = {}

    for(var i = 0; i<string1.length; i++){
        let letter = string1[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }

    for(var i = 0; i<string2.length; i++){
        let letter = string2[i]
       
        if(!obj[letter]) {
            return false;
        } else {
            obj[letter] -= 1;
        }
    }

    return true;
}

// validAnagram('', '');
// validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
// validAnagram('rat', 'car');
// validAnagram('awesome', 'awesom');
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');
// validAnagram('qwerty', 'qeywrt');
// validAnagram('texttwisttime', 'timetwisttext');
