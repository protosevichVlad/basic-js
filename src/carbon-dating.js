const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity == undefined ||
     typeof(sampleActivity) != 'string' ||
     /[a-z]/i.test(sampleActivity) || 
     (Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY)){
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  let result = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result); 
};
