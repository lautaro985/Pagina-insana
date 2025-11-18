window.onload = () => {
  let currentIndex = 0;
  const track = document.querySelector('.carrusel'); 
  const totalItems = document.querySelectorAll('.contenido').length;

  const topPanel = document.getElementById('top-panel');
  const openPanelBtn = document.getElementById('open-panel');
  const closePanelBtn = document.getElementById('close-panel');

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlide();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlide();
  });

  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      else currentIndex = (currentIndex + 1) % totalItems;
      updateSlide();
      isDragging = false;
    }
  });

  openPanelBtn.addEventListener('click', () => {
    topPanel.style.height = '80vh';
    topPanel.classList.add('open');
  });

  closePanelBtn.addEventListener('click', () => {
    topPanel.style.height = '0';
    topPanel.classList.remove('open');
  });
};

document.addEventListener("mousemove", (e) => {
  const luz = document.querySelector(".luz-linterna");
  if (!luz) return;
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
  let fade = setInterval(() => {
    vol += 0.02;
    pasos.volume = vol;
    if (vol >= 1) clearInterval(fade);
  }, 300);
}

function iniciarPasosAleatorios() {
  setInterval(() => {
    if (Math.random() < 0.20) reproducirPasosMisteriosos();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", iniciarPasosAleatorios);
