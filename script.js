/* contador */

const fechaInicio = new Date("2025-08-09");

function actualizarContador(){

const ahora = new Date();
const diferencia = ahora - fechaInicio;

const dias = Math.floor(diferencia/(1000*60*60*24));
const horas = Math.floor((diferencia/(1000*60*60))%24);
const minutos = Math.floor((diferencia/(1000*60))%60);

document.getElementById("contador").innerHTML =
dias+" días "+horas+" horas "+minutos+" minutos ❤️";

}

setInterval(actualizarContador,1000);


/* abrir carta */

const sobre=document.getElementById("sobre");

sobre.addEventListener("click",()=>{
sobre.classList.toggle("abierto");
});


/* musica */

const btnPlay=document.getElementById("playBtn");
const musica=document.getElementById("musica");

let reproduciendo=false;

btnPlay.addEventListener("click",()=>{

if(!reproduciendo){

musica.play();
btnPlay.innerText="⏸️ Pausar música";
reproduciendo=true;

}else{

musica.pause();
btnPlay.innerText="▶️ Reproducir música";
reproduciendo=false;

}

});


/* sorpresa */

document.getElementById("sorpresaBtn").addEventListener("click",()=>{

document.getElementById("sorpresa").classList.add("visible");

});


/* animaciones scroll */

function reveal(){

const elements=document.querySelectorAll(".reveal");

elements.forEach(el=>{

const top=el.getBoundingClientRect().top;
const windowHeight=window.innerHeight;

if(top<windowHeight-100){
el.classList.add("visible");
}

});

}

window.addEventListener("scroll",reveal);
reveal();


/* mensajes romanticos al entrar */

const mensajes=[
"💖 Hola amor, hice esta página para ti",
"❤️ Cada momento contigo es especial",
"💌 Eres la persona más importante para mí",
"🌸 Gracias por estar en mi vida",
"✨ Contigo todo es mejor",
"💕 Te amo muchísimo"
];

const mensajeAleatorio=mensajes[Math.floor(Math.random()*mensajes.length)];

const mensajeDiv=document.getElementById("mensajeEntrada");

mensajeDiv.innerText=mensajeAleatorio;

setTimeout(()=>{
mensajeDiv.style.opacity=1;
},500);

setTimeout(()=>{
mensajeDiv.style.opacity=0;
},5000);
