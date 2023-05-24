function pegaDados(){
    //função que consegue resgatar o valor dos inputs
    var inputX = document.getElementById('X').value;
    var inputY = document.getElementById('Y').value;

    //verificando se os campos estão preenchidos
    if((inputX == "") || (inputY == "")){
      alert("Preencha todos os campos para continuar...");
    }else{
      //console.log(inputX);
      //console.log(inputY);    
      var auxX = inputX.split(',');
      var auxY = inputY.split(',');


      //verificando se a quantidade de numeros digitados são iguais
      if(auxX.length != auxY.length){
        alert("A quantidade de numeros em X deve ser igual em Y");
      }else{
        var returnX = new Array();
        var returnY = new Array();
    
        //transformando os valores resgatados em numeros
        for(var i=0; i < auxX.length; i++){
          returnX.push(parseInt(auxX[i]));
          returnY.push(parseInt(auxY[i]));
        }
    
        return{
            returnX,
            returnY
        };
      }
    }

    
}

function Limpar(){
    //função que limpa os dados digitados
    document.getElementById('X').value = "";
    document.getElementById('Y').value = "";
    document.getElementById('resposta').innerHTML = "";
}

function Calcular(){

    var dados = pegaDados();

    console.log(dados.returnX);
    console.log(dados.returnY);

    var x = dados.returnX;//new Array(1,2,-1,0)//dados.returnX;
    var y = dados.returnY;//new Array(1,3,2,-1)//dados.returnY;
  
    //0,5 e 1

    const n = Math.min(x.length, y.length);
    // Calcular as somas dos valores
    let SomaX = 0;
    let SomaY = 0;
    let SomaXY = 0;
    let SomaXX = 0;
  
    for (let i = 0; i < n; i++) {
      SomaX += x[i];
      SomaY += y[i];
      SomaXY += x[i] * y[i];
      SomaXX += x[i] * x[i];
    }
  
    // Calcular os coeficientes da regressão
    const angular = (n * SomaXY - SomaX * SomaY) / (n * SomaXX - SomaX * SomaX);
    const linear = ((SomaY - angular * SomaX) / n);
    console.log(angular);
    console.log(linear);

    // Y = linear +/- angular * X
    ExibeResultado(angular, linear);
}

function ExibeResultado(angular, linear){
  var exibicao = document.getElementById('resposta');

  exibicao.innerHTML = "";
  if(angular >= 0){ //verifico se ele é positivo
    exibicao.innerHTML = '<p style="margin-top: 2%; font-weight: bold" align="center">Y=' + linear + '+' + angular + 'X</p>';
  }else{
    exibicao.innerHTML = '<p style="margin-top: 2%; font-weight: bold" align="center">Y=' + linear + '-' + angular + 'X</p>';
  }
  

}

function testinha(){
  alert("testinhaaa");
}