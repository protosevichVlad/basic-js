module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let array_with_depth_arrays = [1];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] instanceof Array){
                array_with_depth_arrays.push(this.calculateDepth(arr[i])+1);
            }
        }
        return Math.max(...array_with_depth_arrays)
    }
};