function goForm(event) {
  event.preventDefault();
  let $ = document.querySelector.bind(document);

  function calculateIMC() {
    let weigth = parseFloat($("#weigth").value);
    let height = parseFloat($("#heigth").value);

    let imc = weigth / Math.pow(height, 2);

    return imc.toFixed(2);
  }

  let imc = calculateIMC();
  let result = $("#result");

  let lowWeight = imc < 18.5;
  let normalWeight = imc >= 18.5 && imc <= 24.9;
  let overWeight = imc >= 25 && imc <= 29.9;
  let obesityOne = imc >= 30 && imc <= 34.9;
  let obesityTwo = imc >= 35 && imc <= 39.9
  let obesityThree = imc > 40;
  
  if(lowWeight) {
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Abaixo do peso`;
  } 
  else if(normalWeight){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Peso normal`;
  }
  else if(overWeight){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Acima do peso (sobrepeso)`;
  }
  else if(obesityOne){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Obesidade I`;
  }
  else if(obesityTwo){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Obesidade II`;
  }
  else if(obesityThree){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Obesidade III`;
  }
}
