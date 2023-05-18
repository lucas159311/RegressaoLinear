function pegaDados(){
    //função que consegue resgatar o valor dos inputs
    var inputX = document.getElementById('X').value;
    var inputY = document.getElementById('Y').value;

    //console.log(inputX);
    //console.log(inputY);    

    var returnX = inputX.split(',');
    var returnY = inputY.split(',');

    return{
        returnX,
        returnY
    };
}

function Limpar(){
    //função que limpa os dados digitados
    document.getElementById('X').value = "";
    document.getElementById('Y').value = "";
    document.getElementById('resposta').innerHTML = "";
}

function Calcular(){

    pegaDados();
    /*
    var x = new Array(1,2,-1,0)//dados.returnX;
    var y = new Array(1,3,2,-1)//dados.returnY;

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
    const linear = (SomaY - angular * SomaX) / n;
    console.log(angular);
    console.log(linear);
    return {
      angular: angular,
      linear: linear
    };
    */
}