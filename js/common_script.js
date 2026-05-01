//TRANSITION
document.addEventListener("DOMContentLoaded", function () {
  transition();
});
function transition() {
  var screen = document.getElementById("loadingScreen");
  screen.classList.toggle("loadingScreen");
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

// function loadWithTransition(url) {
//   transition();
//   link = url;
//   window.location = link;
//   delete url;
// }

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

//NAV HIGHLIGHTER

document.addEventListener("DOMContentLoaded", function () {
  var resizeTimer;

  // Function to highlight the active navigation item
  function highlightActiveNavItem() {
    var navItems = document.querySelectorAll("#header_list > li");
    var activeNavItem = null;
    navItems.forEach(function (item) {
      if (item.textContent.trim().toUpperCase() === pageTitle.toUpperCase()) {
        activeNavItem = item;
      }
    });

    if (activeNavItem) {
      var highlighter = document.getElementById("highlighter");
      highlighter.style.width = activeNavItem.offsetWidth + "px";
      highlighter.style.transform =
        "translateX(" + (activeNavItem.offsetLeft - window.scrollX) + "px)";
    }
  }

  // Highlight the active navigation item when the page loads
  highlightActiveNavItem();

  // Update the highlighting when the window is resized
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      highlightActiveNavItem();
    }, 500); // 1 second delay
  });

  // Update the highlighting when the window is scrolled
  window.addEventListener("scroll", function () {
    highlightActiveNavItem();
  });

  // NAV BAR SECOND

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var element = document.getElementById("header");
    if (scrollPosition > 500) {
      document.getElementById("moveUpBtn").classList.add("moveUpBtnVisible");
      element.classList.add("header_scrolled"); // Add your class name here, for example 'scrolled'
      setTimeout(function () {
        highlightActiveNavItem();
      }, 500); // Adjust the delay time (in milliseconds) as needed
    } else {
      document.getElementById("moveUpBtn").classList.remove("moveUpBtnVisible");
      element.classList.remove("header_scrolled");
      setTimeout(function () {
        highlightActiveNavItem();
      }, 500);
    }
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
  var highlighter = document.getElementById("highlighter");
  highlighter.style.width = clickedNavItem.offsetWidth + "px";
  highlighter.style.transform =
    "translateX(" + (clickedNavItem.offsetLeft - window.scrollX) + "px)";
}

//TOUCH DETECTION

if ("ontouchstart" in window || navigator.maxTouchPoints) {
  var mouseCircle = document.getElementById("mouse_circle");
  if (mouseCircle) {
    mouseCircle.classList.add("touchscreen");
  }
}
