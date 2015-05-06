// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um _handler_ de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

var playButton = document.getElementById('rolar'),
    dicesResult = document.getElementById('resultado'),
    resultContent = document.getElementById('recipienteResultados'),
    dicesSum = 0,
    dicesQuantity = [0, 0, 0, 0, 0, 0],
    dicesValue = "",
    dicesMaximum = [4, 6, 8, 10, 12, 20];

    playButton.addEventListener('click', function(e){
      resultContent.classList.remove('oculto');
      getQuantity();
      generateValues();
      dicesResult.innerHTML = dicesValue;
      finishPlay();
    });

var getQuantity = function(){
  var inputs = document.getElementsByTagName('input');
  for(i=0; i < inputs.length; i++){
    dicesQuantity[i] = parseInt(inputs[i].value);
  }
}

var generateValues = function(){
  for(i=0; i < dicesQuantity.length; i++){
    for(j=0; j < dicesQuantity[i]; j++){
      var dicePlayed = rollDice(dicesMaximum[i]);
      dicesValue += " + ";
      dicesValue += dicePlayed;
      dicesSum += dicePlayed;
    }
  }
dicesValue += " = " + dicesSum;
dicesValue = dicesValue.replace(" + ", "")
}

var rollDice = function(facesQuantity){
  return Math.ceil(Math.random() * facesQuantity);
}


var finishPlay = function(){
  dicesSum = 0;
  dicesQuantity = [0, 0, 0, 0, 0, 0];
  dicesValue = "";
}