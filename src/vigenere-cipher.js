class VigenereCipheringMachine {
    flag = true;

    constructor(arg=true){
        this.flag = arg
    }

    encrypt(str, key) {
        if(str === undefined || key === undefined){
            throw Error();
        }
        if(!this.flag){
            str = str.split('').reverse().join('');
        }
        let counter_no_letter = 0;
        let result = '';
        str = str.toUpperCase();
        key = key.toUpperCase();
        for(let i = 0; i < str.length; i++){
            if(/^[a-z]$/i.test(str[i])) result += String.fromCharCode((str.charCodeAt(i) - 130 + key.charCodeAt((i - counter_no_letter) % key.length)) % 26 + 65);
            else{
                counter_no_letter++;
                result += str[i];
            } 
        }
        return result;
    }

    decrypt(str, key) {
        if(str === undefined || key === undefined){
            throw Error();
        }
        if(!this.flag){
            str = str.split('').reverse().join('');
        }
        let counter_no_letter = 0;
        let result = '';
        str = str.toUpperCase();
        key = key.toUpperCase();
        for(let i = 0; i < str.length; i++){
            if(/^[a-z]$/i.test(str[i])) result += String.fromCharCode((str.charCodeAt(i) + 26 - key.charCodeAt((i - counter_no_letter) % key.length)) % 26 + 65);
            else{
                counter_no_letter++;
                result += str[i];
            } 
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;
// let a = new VigenereCipheringMachine();
// console.log(a.encrypt('attack at dawn!', 'alphonse'))