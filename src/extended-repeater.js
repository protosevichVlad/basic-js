module.exports = function repeater(str, options) {
    str = String(str);
    if(options.separator === undefined) options.separator = '+';
    if(options.additionSeparator === undefined) options.additionSeparator = '|'; 
    if(options.repeatTimes === undefined) options.repeatTimes = 1;
    if(options.addition === undefined) options.addition = '';
    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    options.addition = String(options.addition);
    let result = '';
    for( let i = 0; i < options.repeatTimes; i++){
        result += str;
        for(let j = 0; j < options.additionRepeatTimes - 1; j++){
            result += options.addition + options.additionSeparator;
        }
        result += options.addition
        result += options.separator;
    }
    return result.slice(0, -options.separator.length);
};
