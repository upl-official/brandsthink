//LOTTIE ANIMATION

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'), // Required
    path: './media/animated_svg/logo_animation_main.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })
  
  //TRANSITION
  
  function transition() {
    var screen = document.getElementById("loadingScreen");
    screen.classList.toggle("loadingScreen");
    document.getElementsByTagName('body')[0].style.overflowY = 'none';
  }
  
  function loadWithTransition(url) {
    transition();
    link = url;
    window.location = link;
    delete url;
  }
  
  // MOUSE
  
  const mouse = document.getElementById("mouse_circle");
  
  document.addEventListener("mousemove", (e) => {
    const height = mouse.offsetHeight;
    const width = mouse.offsetWidth;
  
    if (
      e.target.classList.contains("mouse_2") ||
      e.target.tagName === "A" ||
      e.target.tagName === "BUTTON" ||
      e.target.parentNode.tagName === "BUTTON"
    ) {
      mouse.classList.add("big");
    } else {
      mouse.classList.remove("big");
    }
  
    requestAnimationFrame(() => {
      const adjustedX = e.pageX - width / 2;
      const adjustedY = e.pageY - height / 2 - window.scrollY; // Consider scroll offset
  
      mouse.style.left = `${adjustedX}px`;
      mouse.style.top = `${adjustedY}px`;
    });
  });
  
  //PARALLAX HOME
  
  // Function to handle the parallax effect
  function parallax() {
    const parallaxContainer = document.getElementById("home_page_illus");
    const parallaxContent = document.querySelector("#home_page_illus > div");
  
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
  
    // Adjust the position of the content
    parallaxContent.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  
    // Adjust the position of the background images independently
    const bgTopPosition = scrollPosition * 0.6;
    const bgBottomPosition = scrollPosition * 0.1;
  
    parallaxContainer.style.backgroundPosition = `50% ${bgTopPosition}px, 50% ${bgBottomPosition}px`;
  
    // Request the next animation frame
    requestAnimationFrame(parallax);
  }
  
  // Attach the initial call to set the initial positions
  parallax();
  
  
  // SERVICES CIRCLE
  
  document.addEventListener("DOMContentLoaded", function () {
    let intervalId;
    let radius = 200;
    let fields = document.querySelectorAll('.itemDot');
    let container = document.querySelector('.dotCircle');
    let width = container.offsetWidth;
    radius = width / 2.5;
  
    let height = container.offsetHeight;
    let angle = 0,
      step = (2 * Math.PI) / fields.length;
  
    fields.forEach(function (field, index) {
      let x = Math.round(width / 2 + radius * Math.cos(angle) - field.offsetWidth / 2);
      let y = Math.round(height / 2 + radius * Math.sin(angle) - field.offsetHeight / 2);
  
      field.style.left = x + 'px';
      field.style.top = y + 'px';
      angle += step;
  
      field.addEventListener('click', function () {
        rotateToTop(index);
        resetRotationCounter();
      });
    });
  
    function rotateToTop(index) {
      let rotationDegree = 360 - (index * (360 / fields.length));
      container.style.transform = 'rotate(' + rotationDegree + 'deg)';
      container.style.transition = '2s';
  
      fields.forEach(function (item) {
        item.style.transform = 'rotate(' + (-rotationDegree) + 'deg)';
        item.style.transition = '1s';
      });
  
      fields.forEach(function (item, i) {
        item.classList.remove('active');
        if (i === index) {
          item.classList.add('active');
        }
      });
  
      document.querySelectorAll('.CirItem').forEach(function (cirItem) {
        cirItem.classList.remove('active');
      });
      document.querySelector('.CirItem' + (index + 1)).classList.add('active');
    }
  
    function resetRotationCounter() {
      clearInterval(intervalId);
      let index = Array.from(fields).indexOf(document.querySelector('.itemDot.active'));
      
      intervalId = setInterval(function () {
        index = (index + 1) % fields.length;
        rotateToTop(index);
      }, 5000);
    }
  
    // Initial rotation setup
    resetRotationCounter();
  });
  
  //NAV HIGHLIGHTER
  
  document.addEventListener('DOMContentLoaded', function () {
    var resizeTimer;
  
    // Function to highlight the active navigation item
    function highlightActiveNavItem() {
      var navItems = document.querySelectorAll('#header_list > li');
      var activeNavItem = null;
      navItems.forEach(function (item) {
        if (item.textContent.trim().toUpperCase() === pageTitle.toUpperCase()) {
          activeNavItem = item;
        }
      });
  
      if (activeNavItem) {
        var highlighter = document.getElementById('highlighter');
        highlighter.style.width = activeNavItem.offsetWidth + 'px';
        highlighter.style.transform = 'translateX(' + (activeNavItem.offsetLeft - window.scrollX) + 'px)';
      }
    }
  
    // Highlight the active navigation item when the page loads
    highlightActiveNavItem();
  
    // Update the highlighting when the window is resized
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        highlightActiveNavItem();
      }, 500); // 1 second delay
    });
  
    // Update the highlighting when the window is scrolled
    window.addEventListener('scroll', function () {
      highlightActiveNavItem();
    });
  });
  
  // Function to highlight clicked navigation item
  function loadWithTransition(url) {
    transition();
    link = url;
    window.location = link;
    delete url;
  
    // Highlight the clicked navigation item
    var clickedNavItem = event.target;
    var highlighter = document.getElementById('highlighter');
    highlighter.style.width = clickedNavItem.offsetWidth + 'px';
    highlighter.style.transform = 'translateX(' + (clickedNavItem.offsetLeft - window.scrollX) + 'px)';
  }