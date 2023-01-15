const slides = document.getElementsByTagName("img"),
  slide_left = document.getElementById("prev-btn"),
  slide_right = document.getElementById("next-btn");

let slideIndex = 0;

function showSlide(n) {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[n].style.display = "inline-block";
}
showSlide(slideIndex);

function nextSlide(event) {
  if (slideIndex == slides.length - 1) {
    slide_right.style.display = "none";
    showSlide(slideIndex);
  } else {
    slideIndex++;
    slide_left.style.display = "inline-block";
    showSlide(slideIndex);
  }
}
slide_right.addEventListener("click", nextSlide);

function previousSlide(event) {
  if (slideIndex == 0) {
    slide_left.style.display = "none";
    showSlide(slideIndex);
  } else {
    slideIndex--;
    slide_right.style.display = "inline-block";
    showSlide(slideIndex);
  }
}
slide_left.addEventListener("click", previousSlide);
