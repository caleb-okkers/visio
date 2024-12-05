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

    // Function to update the active slide and indicator
    function updateActiveSlide() {
        // Remove the active class from all slides and indicators
        slides.removeClass('active');
        indicators.removeClass('active');

        // Add active class to the current slide and its corresponding indicator
        slides.eq(currentIndex).addClass('active');
        indicators.eq(currentIndex).addClass('active');

        // Move the slider by updating the transform property
        const offset = -currentIndex * 100;
        $(".slider").css("transform", `translateX(${offset}%)`);
    }

    // Indicators functionality
    indicators.each((index, indicator) => {
        $(indicator).click(function () {
            currentIndex = index; // Update the current index based on the clicked indicator
            updateActiveSlide(); // Call the function to update the active slide and indicator
        });
    });

    // Next button functionality (slider controls)
    $(".next").click(function () {
        // Increment currentIndex, wrap around if it exceeds the number of slides
        currentIndex = (currentIndex + 1) % slides.length;
        updateActiveSlide(); // Call the function to update the active slide and indicator
    });

    // Optional: Previous button functionality (if you have a previous button)
    $(".prev").click(function () {
        // Decrement currentIndex, wrap around if it goes below 0
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateActiveSlide(); // Call the function to update the active slide and indicator
    });

    // Optional: Auto-advance slides and update indicators every 3 seconds (if needed)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length; // Increment index and loop around
        updateActiveSlide(); // Call the function to update the active slide and indicator
    }, 7000); // 7 seconds interval for auto-sliding
});

  