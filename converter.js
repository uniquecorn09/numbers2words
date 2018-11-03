const atomicNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fivteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tenthExceptions = [ false, "twen", "thir", "for", "fif", false, false, "eigh", false]
const tensPotency = ["hundred", "thousand", "million", "billion"]
const BASE = 10;


const combineNumberWords = (num) => {
    let numberWord =  "";
    let digitCount = num.toString().length;
    let op = Math.pow(BASE, digitCount-1);
    let digit = Math.floor(num/op);
    let next = num%op;

    if(digitCount < 3){
        if(num < 20)
            numberWord = atomicNumbers[num]
        else
            numberWord = (tenthExceptions[digit-1] ? tenthExceptions[digit-1] : atomicNumbers[digit])+ "ty" + (next != 0 ? "-"+atomicNumbers[next]: "")

    }

    if(digitCount === 3){
        numberWord = atomicNumbers[digit]+" "+tensPotency[digitCount-3]+ (next != 0 ? (" and "+combineNumberWords(next)) : "");
    }

    if (digitCount > 3){
        let fak = Math.floor((digitCount-1)/3);
        let pow = 3*fak;
        let div = Math.pow(BASE, pow);
        let prefix = Math.floor(num/div);
        let suffix = num%div;
        numberWord = combineNumberWords(prefix)+" "+tensPotency[fak] + (suffix != 0 ? " "+combineNumberWords(suffix) : "");
    }
    return numberWord;
}
const numberToWord = (num) => {
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
    convert: numberToWord
  };