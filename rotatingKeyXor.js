const rotatingKeyXor = (cypher, message) => {

return message.split("")
    .map((_,i) => message.charCodeAt(i) ^ cypher.charCodeAt(i%cypher.length))
    .map(n => ("0000000" + n.toString(2)).slice(-8))
    .map(n => (00 + parseInt(n,2).toString(16)).slice(-2))
    .join("");
}

console.log(rotatingKeyXor("ICE","Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal"));
console.log("0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b202831652863263");


module.exports = rotatingKeyXor;