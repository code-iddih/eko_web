
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// dots.js

// Function to generate random movement and size for dots
function randomizeDotMovement(dot) {
  // Random horizontal and vertical movements
  const randomX = Math.random() * 4000 - 2000; // (horizontal movement)
  const randomY = Math.random() * 4000 - 3000; // (vertical movement, upwards)
  const randomX2 = Math.random() * 4000 - 1000; // horizontal movement
  const randomY2 = Math.random() * 5000 - 5000; // upward movement

  // Random dot size (range from 2px to 6px)
  const randomSize = Math.random() * 4 + 2; 

  // Sets the random values for the CSS animation and size
  dot.style.setProperty('--random-x', randomX + 'px');
  dot.style.setProperty('--random-y', randomY + 'px');
  dot.style.setProperty('--random-x2', randomX2 + 'px');
  dot.style.setProperty('--random-y2', randomY2 + 'px');
  dot.style.setProperty('--dot-size', randomSize + 'px');
}

// Function to create dots and apply random movement
function createDots() {
  const container = document.getElementById('dots-container');
  
  // Increases the number of dots to 2000 (or more as desired)
  for (let i = 0; i < 3000; i++) { 
      const newDot = document.createElement('div');
      newDot.classList.add('dot');
      container.appendChild(newDot);
      randomizeDotMovement(newDot);
  }
}

// Initialize the dots creation
createDots();
