var valor;
function botao(num){
    valor = document.calc.visor.value += num;

}

var reset
function reseta(num){
    reset = document.calc.visor.value = "";
}

var igual
function calcula(num) {
    igual = eval(valor);
    document.calc.visor.value = igual.toLocaleString("pt-Br"); 
}
