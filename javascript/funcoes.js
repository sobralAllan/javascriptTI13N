//Declaração de variáveis
let num1 = 0;
let num2 = 0;
let resultado = 0;
let i = 0;
let msg = "";

//Criação de funções
function coletar(){
    num1 = prompt("Informe um número: ");
    num2 = prompt("Informe outro número: "); 
}//fim do coletar

//Coleta o dado aqui
coletar();
//Devolvendo o resultado no console
function soma(){
    //Chamando o método coletar
    resultado = parseFloat(num1) + parseFloat(num2);
    return resultado;
}//fim da função soma

function subtracao(){
    resultado = parseFloat(num1) - parseFloat(num2);
    return resultado;
}//fim da função subtração

function divisao(){
    if(num2 <= 0){
        resultado = "Impossível dividir por zero!";
    }else{
        resultado = parseFloat(num1) / parseFloat(num2);
    }
    return resultado;
}//fim da função divisão

function multiplicacao(){
    resultado = parseFloat(num1) * parseFloat(num2);
    return resultado;
}//fim da função multiplicação

function tabuada(){
    console.log("Tabuaba do " + num1 + ": \n");
    for(i=0;i<=10;i++){
        msg += num1 + " * " + i + " = " + (parseFloat(num1) * parseFloat(i)) + "\n";
    }
    console.log(msg + "\n");
    //Zeranddoooooo a variável msg
    msg = "";
    
    console.log("Tabuada do " + num2 + ": \n");
    for(i=0;i<=10;i++){
        msg += num2 + " * " + i + " = " + (parseFloat(num2) * parseFloat(i)) + "\n";
    }
    console.log(msg + "\n");
}//fim do método

function raiz(){
    if(num1 < 0){
        console.log("Impossível calcular raiz de número negativo!");
    }else{
        resultado = Math.sqrt(num1);
        console.log("A raiz do número " + num1 + " é: " + resultado);
    }

    if(num2 < 0){
        console.log("Impossível calcular raiz de número negativo!");
    }else{
        resultado = Math.sqrt(num2);
        console.log("A raiz de " + num2 + " é: " + resultado);
    }
}//fim do método

function potencia(){
    resultado = Math.pow(num1, num2);
    return resultado;
}//fim do método

function bhaskara(){

}//fim do método

//Mostrar o dado
console.log("O resultado da soma é: " + soma());
console.log("O resultado da subtração é: " + subtracao());
console.log("O resultado da divisão é: " + divisao());
console.log("O resultado da multiplicação é: " + multiplicacao());
tabuada();
raiz();
console.log("O resultado da potência é: " + potencia());