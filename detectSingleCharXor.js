var testLines = require("./challenge1-4.js");
var XorCypher = require("./singleByteXorCypher");

function detectSingleCharCypher(strArr) {
  
  const weight = { E: 1, T: 1, A: 1, O: 1, I: 1, N: 1, S: 1, R: 1, H: 1, D: 1, L: 1, U: 1, C: 1, M: 1, F: 1, Y: 1, W: 1, G: 1, P: 1, B: 1, V: 1, K: 1, X: 1, Q: 1, J: 1, Z: 1}

  var best  = ""
  bestScore = 0;
  strArr.forEach((l) => {
    var str  = XorCypher(l);
    console.log(str);
    var score = str.split("").reduce((sum, c) => {
      return weight[c] ? sum + weight[c] : sum;
    } , 0)
   if (score > bestScore) {
      best = str;
      bestScore = score;
    }
  })

  return best;

}

module.exports = detectSingleCharCypher;
