const calculateIMC = (weigth, height) => {
  let imc = weigth / Math.pow(height, 2);
  return imc.toFixed(2);
}

module.exports = calculateIMC;