function entrar(){
    document.getElementById('infos').style.display = "flex";
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');

    document.getElementById('infonome').innerHTML = `${nome.value}`;
    document.getElementById('infoemail').innerHTML = `${email.value}`;

    nome.value ="";
    email.value = "";

    document.getElementById('header').style.display = "none";
    document.querySelector('hr').style.display = "none";
}
function sair(){
document.getElementById('infos').style.display ="none";
document.getElementById('header').style.display = "flex";
document.querySelector('hr').style.display = "block";



}

function exibirImc(){
document.getElementById('infos').style.display = "none";
document.getElementById('imc').style.display = "flex";
}

function calcImc(){
document.getElementById('infosImc').style.display = "flex";
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');

document.getElementById('infopeso').innerHTML =`PESO: ${peso.value}`;
document.getElementById('infoaltura').innerHTML = `ALTIRA: ${altura.value}`;

let result = (peso.value / (altura.value * altura.value)).toFixed(2); 

if( result < 18.5 ){

document.getElementById('infoimc').style.cssText = "color:blue;background:#FFF;"
document.getElementById('infoimc').innerHTML = `${result}`;

document.getElementById('resultado').innerHTML = "Você está MUITO abaixo do peso";

}
else if(result > 18.5 && result < 25){

document.getElementById('infoimc').style.color = "green"
document.getElementById('infoimc').innerHTML = `${result}`;

document.getElementById('resultado').innerHTML = "Você está no peso ideal";

}
else if(result >= 25){
document.getElementById('infoimc').style.color = "red"
document.getElementById('infoimc').innerHTML = `${result}`;

document.getElementById('resultado').innerHTML = "Você está MUITO acima do peso";
}

peso.value = "";
altura.value = "";
}

function voltar(){
document.getElementById('infos').style.display = "flex";
document.getElementById('imc').style.display = "none";
}
function voltarR(){
document.getElementById('infos').style.display = "flex";
document.getElementById('relogio').style.display = "none";
}

const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerHTML = `${formatTime(hours)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    sec.innerHTML = `${formatTime(seconds)}`;

}, 1000);

function formatTime(time){
    return time < 10 ? "0" + time : time;
}

function clock(){
    document.getElementById('relogio').style.display = "flex";
    document.getElementById('infos').style.display = "none";
}

const value = document.querySelector('#value');

function onIncrement(){
    value.innerHTML = `${parseInt(value.innerText) + 1}`;
}

function onDecrement(){
    value.innerHTML = `${parseInt(value.innerText) - 1}`;
}


