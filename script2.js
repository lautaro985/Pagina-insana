function abrirMenu() {
  document.getElementById("sidebar").style.width = "250px";
  document.querySelector(".open-img").style.display = "none";
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
  }, { threshold: 0.5 });

  elementos.forEach(el => observer.observe(el));
  
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => cerrarMenu());
  });
});

document.addEventListener("mousemove", (e) => {
  const luz = document.querySelector(".luz-linterna");
  luz.style.setProperty("--x", `${e.clientX}px`);
  luz.style.setProperty("--y", `${e.clientY}px`);
});

document.addEventListener("click", () => {
  const sonidos = [
    document.getElementById("sonido1"),
    document.getElementById("sonido2"),
    document.getElementById("sonido3")
  ];

  const s = sonidos[Math.floor(Math.random() * sonidos.length)];
  s.currentTime = 0;
  s.play();
});

function reproducirPasosMisteriosos() {
  const pasos = document.getElementById("pasos");
  pasos.currentTime = 0; 
  pasos.volume = 0.1;
  pasos.play();

  let vol = 0.1;
  let intervalo = setInterval(() => {
    vol += 0.02;

    if (vol >= 1) {
      clearInterval(intervalo);
    } else {
      pasos.volume = vol;
    }
  }, 300);
}

function iniciarPasosAleatorios() {
  setInterval(() => {
    if (Math.random() < 0.20) {
      reproducirPasosMisteriosos();
    }
  }, 5000);
}

document.addEventListener("DOMContentLoaded", iniciarPasosAleatorios);
