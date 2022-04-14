// var preços = []

// function adicionar () {
//   res.innerHTML = `O produto ${preços.length + 1} foi adicionado`

//   preços.push(preçoFinal)

//   console.log(preços)

//   document.getElementById("tempo").value = ""
//   document.getElementById("qtdtxt").value = ""
//   document.getElementById("pot").value = ""
// }

function calcular() {

  var res = document.getElementById("res");

  var qtdtxt = document.getElementById("qtdtxt");
  var qtd = Number(qtdtxt.value);

  var tempo = document.getElementById("tempo");
  tempo = Number(tempo.value);

  var pot = document.getElementById("pot");
  pot = Number(pot.value);

  var preçoDoKWh = document.getElementById("preçoDoKWh");
  preçoDoKWh = Number(preçoDoKWh.value);

  // var ddp = document.getElementById("ddp");
  // ddp = Number(ddp.value);

  // var corrente = pot / ddp
  // var resistencia = ddp / corrente

  var preçoFinal = 30 * qtd * tempo * pot * (1 / 1000) * preçoDoKWh;

  res.innerHTML = `Esse produto gastará R$${preçoFinal.toFixed(2)} no final do mês`;
}