// Toggle mobile menu visibility
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}


  $(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100;
        $(".slider").css("transform", `translateX(${offset}%)`);
    }

    $(".next").click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    // Auto-slide every 5 seconds
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 8000);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const slider = document.querySelector(".slider");
//   const slides = document.querySelectorAll(".slide");
//   const prevButton = document.querySelector(".prev");
//   const nextButton = document.querySelector(".next");

//   let currentIndex = 0;

//   const updateButtons = () => {
//       // Hide the previous button if on the first slide
//       prevButton.style.visibility = currentIndex === 0 ? "hidden" : "visible";

//       // Hide the next button if on the last slide
//       nextButton.style.visibility = currentIndex === slides.length - 1 ? "hidden" : "visible";
//   };

//   const moveSlider = () => {
//       const offset = -currentIndex * 100; // Move by 100% for each slide
//       slider.style.transform = `translateX(${offset}%)`;
//       updateButtons();
//   };

//   prevButton.addEventListener("click", () => {
//       if (currentIndex > 0) {
//           currentIndex--;
//           moveSlider();
//       }
//   });

//   nextButton.addEventListener("click", () => {
//       if (currentIndex < slides.length - 1) {
//           currentIndex++;
//           moveSlider();
//       }
//   });

//   // Initialize the slider
//   updateButtons();
// });

