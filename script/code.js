// Toggle mobile menu visibility
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
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
    }, 5000);
});
