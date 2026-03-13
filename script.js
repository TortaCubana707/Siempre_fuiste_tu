/* MENSAJE DE BIENVENIDA */
const mensaje = document.getElementById("mensajeEntrada");

window.addEventListener("load", () => {
  if (mensaje) {
    mensaje.innerText = "Hola amor ❤️ tengo algo especial para ti";
    setTimeout(() => {
      mensaje.style.opacity = "1";
    }, 500);
    setTimeout(() => {
      mensaje.style.opacity = "0";
    }, 5000);
  }
});

/* CARTA */
const sobre = document.getElementById("sobre");

if (sobre) {
  sobre.addEventListener("click", () => {
    sobre.classList.toggle("abierto");
    crearCorazones();
  });
}

/* MUSICA */
const playBtn = document.getElementById("playBtn");
const musica = document.getElementById("musica");

if (playBtn && musica) {
  playBtn.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      playBtn.innerText = "⏸️ Pausar música";
    } else {
      musica.pause();
      playBtn.innerText = "▶️ Reproducir música";
    }
  });
}

/* CONTADOR DE TIEMPO */
const contador = document.getElementById("contador");

/* Fecha correcta: año, mes-1, día, hora, min, seg */
const fechaInicio = new Date(2024, 7, 9, 9, 15, 0).getTime();

function actualizarContador() {
  if (!contador) return;

  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;

  if (diferencia < 0) return; // evita NaN si la fecha es futura

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML =
    dias + " días 💖 " +
    horas + " horas 💕 " +
    minutos + " minutos 💗 " +
    segundos + " segundos juntos";
}

/* ejecutar inmediatamente y actualizar cada segundo */
actualizarContador();
setInterval(actualizarContador, 1000);

/* ANIMACION SCROLL */
const elementos = document.querySelectorAll(".reveal");

function mostrarElementos() {
  const alturaVentana = window.innerHeight;
  elementos.forEach(el => {
    const distancia = el.getBoundingClientRect().top;
    if (distancia < alturaVentana - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", () => requestAnimationFrame(mostrarElementos));
mostrarElementos();

/* BOTON SORPRESA */
const sorpresaBtn = document.getElementById("sorpresaBtn");
const sorpresa = document.getElementById("sorpresa");

if (sorpresaBtn && sorpresa) {
  sorpresaBtn.addEventListener("click", () => {
    sorpresa.classList.toggle("visible");
    crearCorazones();
  });
}

/* CORAZONES FLOTANDO */
function crearCorazones() {
  for (let i = 0; i < 10; i++) {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "100vh";
    corazon.style.fontSize = (20 + Math.random() * 20) + "px";
    corazon.style.opacity = "0.8";
    corazon.style.pointerEvents = "none";
    corazon.style.transition = "3s";
    corazon.style.zIndex = "999";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.style.transform =
        "translateY(-120vh) rotate(" + Math.random() * 360 + "deg)";
      corazon.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      corazon.remove();
    }, 3000);
  }
}

/* EFECTO ROMANTICO EN IMAGENES */
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.08) rotate(1deg)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

/* MENSAJES ROMANTICOS ALEATORIOS */
const mensajesRomanticos = [
  "💖 Eres lo mejor que me ha pasado",
  "🌹 Gracias por estar en mi vida",
  "✨ Contigo todo es más bonito",
  "💞 Me haces muy feliz",
  "❤️ Siempre quiero estar contigo"
];

document.body.addEventListener("click", e => {
  if (Math.random() < 0.2) {
    const msg = document.createElement("div");
    msg.innerText = mensajesRomanticos[Math.floor(Math.random() * mensajesRomanticos.length)];
    msg.style.position = "fixed";
    msg.style.left = e.clientX + "px";
    msg.style.top = e.clientY + "px";
    msg.style.background = "#ff4d88";
    msg.style.color = "white";
    msg.style.padding = "8px 14px";
    msg.style.borderRadius = "10px";
    msg.style.fontSize = "14px";
    msg.style.opacity = "0";
    msg.style.transition = "1s";
    msg.style.pointerEvents = "none";
    msg.style.zIndex = "1000";

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = "1";
      msg.style.transform = "translateY(-40px)";
    }, 10);

    setTimeout(() => {
      msg.remove();
    }, 2000);
  }
});
