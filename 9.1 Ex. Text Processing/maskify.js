function  maskify (cc) {
   let newStr = '';
   
   if (cc.length >= 4) {
      for (let i in cc) {
      newStr += cc[i].replace(cc[i], '#');
      }
   } else {
      return cc;
   }
   newStr = newStr.slice(0, -4);
   newStr += cc.slice(-4);
   return newStr;
}
console.log(maskify("4556364607935616"));