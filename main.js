const display = document.getElementById("showScreen");
const numberButtons = document.getElementsByClassName("number");
const reset = document.getElementById("reset");
const del = document.getElementById("DEL");
const operador = document.getElementById("operador");
const rest = document.getElementById("rest");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const resultado = document.getElementById("resultado");


let flag = 0;

function showDisplay(n){
    const actual = display.textContent;
    if (actual != '0.0'){
        let show = actual + n;
        display.textContent = show;
        flag = 0;
    }else{
        display.textContent = n;
    }
}

function putOperator(n){
    if (n == '+' || n == '-' || n == '*' || n == '/'){
        if (flag == 0){
            let actual = display.textContent;
            let show = actual + n;
            display.textContent = show;
            flag = 1; 
        }
    }
}

operador.onclick = function(){
    const valorOperador = operador.innerText;
    putOperator(valorOperador);
}
rest.onclick = function(){
    putOperator("-");
}
mult.onclick = function(){
    putOperator("*");
}
div.onclick = function(){
    putOperator("/");
}

for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[index].addEventListener('click', function(event){
    const value = event.target.innerText;
    showDisplay(value);
    });
}


reset.onclick = function(){
    display.textContent = "0.0";
}

del.onclick = function(){
    const inScreen = display.textContent;
    let index = inScreen.length;
    let newStr;
    if (index > 1){
        newStr = inScreen.slice(0, inScreen.length - 1);
        display.textContent = newStr;
    }else{
        display.textContent = "0.0";    
    }
}

resultado.onclick = function(){
    let actual = display.textContent;
    let operacion = eval(actual);
    display.textContent = operacion;
}