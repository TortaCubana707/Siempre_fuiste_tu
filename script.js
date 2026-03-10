/* contador */

const fechaInicio = new Date("2025-08-09");

function actualizarContador(){

const ahora = new Date();
const diferencia = ahora - fechaInicio;

const dias = Math.floor(diferencia / (1000*60*60*24));
const horas = Math.floor((diferencia/(1000*60*60)) % 24);
const minutos = Math.floor((diferencia/(1000*60)) % 60);

document.getElementById("contador").innerHTML =
dias + " días " + horas + " horas " + minutos + " minutos 💕";

}

setInterval(actualizarContador,1000);


/* corazones flotando */

function crearCorazon(){

const corazon = document.createElement("div");
corazon.classList.add("corazon");
corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";
corazon.style.fontSize=(Math.random()*20+10)+"px";

document.querySelector(".corazones").appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},6000);

}

setInterval(crearCorazon,500);


/* animacion scroll */

function revelar(){

const elementos=document.querySelectorAll(".reveal");

elementos.forEach(el=>{

const top=el.getBoundingClientRect().top;
const altura=window.innerHeight;

if(top<altura-100){
el.classList.add("visible");
}

});

}

window.addEventListener("scroll",revelar);

revelar();


/* boton secreto */

const boton=document.getElementById("botonSecreto");

boton.addEventListener("click",()=>{

document.getElementById("mensajeSecreto").innerText =
"Eres la mejor persona que ha llegado a mi vida ❤️";

});
