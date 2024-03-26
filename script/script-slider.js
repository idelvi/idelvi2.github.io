let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  setInterval(() => {
    changeSlide(1);
  }, 10000); // Cambiar cada 5 segundos