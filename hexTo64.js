module.exports = function (hexString){
  return new Buffer(hexString,'hex').toString('base64');
};
