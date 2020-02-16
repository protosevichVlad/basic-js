module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)){
    return false;
  }
  let result = '';
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) == "string"){
      let j = 0;
      while (!/^[a-z]$/i.test(members[i][j])){
        j++;
      }
      result = result + members[i][j].toUpperCase();
    }
  }
  return result.split('').sort().join('');
};
