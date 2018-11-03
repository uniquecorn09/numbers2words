const atomicNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fivteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tenthExceptions = [ false, "twen", "thir", "for", "fif", false, false, "eigh", false]
const tensPotency = ["hundred", "thousand", "million", "billion"]
const MOD = 10;


const combineNumberWords = (num) => {
    let numberWord =  "";
    //number of digits
    let length = num.toString().length;
    //tens potency
    let op = Math.pow(MOD, length-1);
    //first digit 
    let digit = Math.floor(num/op);
    //rest digits
    let next = num%op;
    // console.log("POTENCY: "+op)
    // console.log("DIGIT: " +digit)
    // console.log("NEXT: "+next)
    if(length < 3){
        if(num < 20)
        //all individual numbers 
            numberWord = atomicNumbers[num]
        else
            numberWord = (tenthExceptions[digit-1] ? tenthExceptions[digit-1] : atomicNumbers[digit])+ "ty" + (next != 0 ? "-"+atomicNumbers[next]: "")

    }
    if(length === 3){
        numberWord = atomicNumbers[digit]+" "+tensPotency[length-3]+ (next != 0 ? (" and "+combineNumberWords(next)) : "");
    }
    if (length >= 4){
        //splits all steps of one tens potency (thousand = 1 , million = 2, ...)
        let fak = Math.floor((length-1)/3);
        //calculate divisor to split number into pre- and suffix (120 . 143)
        let pow = 3*fak;
        let div = Math.pow(MOD, pow);
        let prefix = Math.floor(num/div);
        let suffix = num%div;
        // console.log("POW: "+pow)
        // console.log("DIV: " +div)
        // console.log("PREFIX: "+prefix)
        // console.log("SUFFFIX: "+suffix)
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