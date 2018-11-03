const atomicNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fivteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tensDigits = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
const tensPotency = ["hundred", "thousand", "million", "billion", "trillion"]
const BASE = 10;

const combineNumberWords = (num) => {
    let numberWord =  "";
    let digitCount = num.toString().length;
    let op = Math.pow(BASE, digitCount-1);
    let firstDigit = Math.floor(num/op);
    let restDigits = num%op;

    if(digitCount < 3){
        if(num < 20)
            numberWord = atomicNumbers[num]
        else
            numberWord = tensDigits[firstDigit-2] + (restDigits != 0 ? "-"+atomicNumbers[restDigits]: "")
    }

    if(digitCount === 3){
        numberWord = atomicNumbers[firstDigit] + " " + tensPotency[digitCount-3] + (restDigits != 0 ? (" and "+combineNumberWords(restDigits)) : "");
    }

    if (digitCount > 3){
        let fak = Math.floor((digitCount-1)/3);
        let pow = 3*fak;
        let div = Math.pow(BASE, pow);
        let prefix = Math.floor(num/div);
        let suffix = num%div;
        numberWord = combineNumberWords(prefix) + " " + tensPotency[fak] + (suffix != 0 ? " "+combineNumberWords(suffix) : "");
    }
    return numberWord;
}

const convert = (num) => {
    console.log("Converting " +num+" ...")
    let result = "";
    if(num < 0 ){
        result = "minus ";
        num*=(-1)
    }
    result += combineNumberWords(num);
    console.log("RESULT: "+result);
    return result;
}

module.exports = {
    convert: convert
  };