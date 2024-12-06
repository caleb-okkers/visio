// Toggle mobile menu visibility
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;
    const navOverlay = document.createElement('div');
    navOverlay.classList.add('nav-overlay');
  
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");
  
    // Prevent scrolling when the menu is open
    if (navLinks.classList.contains('active')) {
      body.style.overflow = 'hidden';
      document.body.appendChild(navOverlay);
      navOverlay.addEventListener('click', toggleMenu);
    } else {
      body.style.overflow = 'auto';
      const existingOverlay = document.querySelector('.nav-overlay');
      if (existingOverlay) {
        existingOverlay.remove();
      }
    }
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
  
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(event.target) && 
        !hamburger.contains(event.target)) {
      toggleMenu();
    }
  });
  
  // Slider jQuery functionality
  $(document).ready(function () {
    const slides = $(".slide");
    const indicators = $(".indicator");
    let currentIndex = 0;


    function updateActiveSlide() {
        slides.removeClass('active');
        indicators.removeClass('active');

        slides.eq(currentIndex).addClass('active');
        indicators.eq(currentIndex).addClass('active');

        const offset = -currentIndex * 100;
        $(".slider").css("transform", `translateX(${offset}%)`);
    }

    // Indicators functionality
    indicators.each((index, indicator) => {
        $(indicator).click(function () {
            currentIndex = index;
            updateActiveSlide();
        });
    });

    // Next button functionality (slider controls)
    $(".next").click(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateActiveSlide();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length; // Increment index and loop around
        updateActiveSlide(); 
    }, 7000); 
});

// Set the current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();