const fixedXor = (val1, val2) => {
  let outString = "";
  function hexToBin(val) {
    return val.split("").map( s => {
      return ("0000"+parseInt(s,16).toString(2)).slice(-4)
    });
  }

  const bInt1 = hexToBin(val1).join("");
  const bInt2 = hexToBin(val2).join("");
  
  for (var i = 0; i < bInt1.length; i++) {
    if(bInt1[i] /1 === bInt2[i] /1){
      outString += "0";
    } else {
      outString += "1";
    }
  }

  return outString.replace(/\w{4}/g, chunk => {
    return parseInt(chunk,2).toString(16)
  })
}

console.log(fixedXor("1c0111001f010100061a024b53535009181c","686974207468652062756c6c277320657965"))
console.log("746865206b696420646f6e277420706c6179")

module.exports = fixedXor;
