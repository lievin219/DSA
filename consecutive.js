function consecutive(characters) {
    let result = '';
    let sum = 1

    for (let i = 1; i < characters.length; i++) {
        if (characters[i] === characters[i - 1]) {
            sum++;
        } else {
            result = result + characters[i - 1] + sum;
            sum = 1;
        }
    }

   
    result = result + characters[characters.length - 1] + sum;

    return result;
}

console.log(consecutive('aabbcc'));