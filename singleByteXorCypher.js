const singleByteXorCyper = (hexString) => {

const weight = { E: 1, T: 1, A: 1, O: 1, I: 1, N: 1, S: 1, R: 1, H: 1, D: 1, L: 1, U: 1, C: 1, M: 1, F: 1, Y: 1, W: 1, G: 1, P: 1, B: 1, V: 1, K: 1, X: 1, Q: 1, J: 1, Z: 1}

  function hexToBin(val) {
    return val.split("").map( s => {
      return ("0000"+parseInt(s,16).toString(2)).slice(-4)
    });
  }

  let baseBin = hexToBin(hexString).join("")
    .replace(/\w{8}/g ,(bytes) => parseInt(bytes,2) + ",")
    .split(",");

  baseBin.pop();

  let topStr = [];
  topStr.weight = 0;
  for (var i = 0; i < 256; i++) {
    let strArr = baseBin.map( c => String.fromCharCode(c ^ i));
    let strWeight = strArr.reduce((sum, c) => {
      return weight[c.toUpperCase()] ? sum + weight[c.toUpperCase()] : sum;
    } , 0)

    if (strWeight > topStr.weight) {
      topStr = strArr;
      topStr.weight = strWeight;
    }

  }

  return topStr.join("");
}

module.exports = singleByteXorCyper;