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
      if (deltaX > 0) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      } else {
        currentIndex = (currentIndex + 1) % totalItems;
      }
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


  document.addEventListener('click', (event) => {
    if (!topPanel.contains(event.target) && !openPanelBtn.contains(event.target) && topPanel.style.height === '60vh') {
      topPanel.style.height = '0';
      topPanel.classList.remove('open');
    }
  });
};