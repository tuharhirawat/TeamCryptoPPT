

// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentSlide = 0;

// function showSlide(index) {
//   // Hide all slides
//   slides.forEach(slide => slide.style.display = 'none');
  
//   // Show the selected slide
//   slides[index].style.display = 'block';
// }

// // Show the first slide
// showSlide(currentSlide);

// // Handle Previous Button
// prevBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// });

// // Handle Next Button
// nextBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// });



let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

function changeSlide(direction) {
  const newSlide = currentSlide + direction;

  if (newSlide >= 0 && newSlide < slides.length) {
    currentSlide = newSlide;
    showSlide(currentSlide);
  }
}

prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));

showSlide(currentSlide);
