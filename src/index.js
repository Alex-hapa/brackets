module.exports = function check(str, bracketsConfig) {
  let newStr = str.split('');
  for (let i = 0; i < newStr.length; i++) {
    bracketsConfig.forEach((el) => {
      if (el[0].indexOf(newStr[i]) >= 0 && el[1].indexOf(newStr[i + 1]) >= 0) {
       newStr.splice(i, 2);
       i = -1;
      };
    });
  };
  return newStr.length === 0 ? true : false;// your solution
}
