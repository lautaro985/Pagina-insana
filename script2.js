function abrirMenu() {
  document.getElementById("sidebar").style.width = "250px";
  document.querySelector(".open-img").style.display = "none";

  // La linterna ya NO se apaga, solo seguimos iluminando
}

function cerrarMenu() {
  document.getElementById("sidebar").style.width = "0";
  document.querySelector(".open-img").style.display = "block";
}
document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animacion-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  elementos.forEach(el => observer.observe(el));
  
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => cerrarMenu());
  });
});

// 🔦 LINTERNA QUE SIGUE AL CURSOR
document.addEventListener("mousemove", (e) => {
  const luz = document.querySelector(".luz-linterna");
  luz.style.setProperty("--x", `${e.clientX}px`);
  luz.style.setProperty("--y", `${e.clientY}px`);
});
// 🔊 SONIDO GLOBAL PARA CUALQUIER CLICK
document.addEventListener("click", () => {
  const sonidos = [
    document.getElementById("sonido1"),
    document.getElementById("sonido2"),
    document.getElementById("sonido3")
  ];

  // sonido aleatorio
  const s = sonidos[Math.floor(Math.random() * sonidos.length)];
  
  s.currentTime = 0; // reiniciar por si se repite rápido
  s.play();
});
function reproducirPasosMisteriosos() {
    const pasos = document.getElementById("pasos");

    // aseguramos que siempre arranque desde el principio
    pasos.currentTime = 0; 
    pasos.volume = 0.1; // empieza muy lejos
    pasos.play();

    // efecto de aumento gradual
    let vol = 0.1;
    let intervalo = setInterval(() => {
        vol += 0.02;

        if (vol >= 1) {
            clearInterval(intervalo);
        } else {
            pasos.volume = vol;
        }
    }, 300); // sube cada 300 ms
}

// reproduce pasos de forma aleatoria cada cierto tiempo
function iniciarPasosAleatorios() {
    setInterval(() => {
        // 20% de probabilidad de que suene
        if (Math.random() < 0.20
      ) {
            reproducirPasosMisteriosos();
        }
    }, 5000); // cada 5 segundos evalúa si reproducir
}

document.addEventListener("DOMContentLoaded", iniciarPasosAleatorios);
