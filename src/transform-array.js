module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error();
    }
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '--discard-next'){
            i += 2;
            continue;
        }else if(arr[i] == '--discard-prev'){
            result.pop();
        }else if(arr[i] == '--double-next'){
            result.push(arr[i + 1]);
        }else if(arr[i] == '--double-prev'){
            result.push(arr[i - 1]);
        }else result.push(arr[i]);
    }
    return result;
};
