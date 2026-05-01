//VIDEO BG

function loadVideoForDesktop() {
  if (window.innerWidth >= 1200) {
    const container = document.getElementById("videoContainer");
    if (!container) return;

    // Prevent multiple insertions
    if (container.querySelector("video")) return;

    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("id", "bgVideo");

    const source = document.createElement("source");
    source.src = "media/videos/website_bg.webm";
    source.type = "video/webm";

    video.appendChild(source);
    container.appendChild(video);
  }
}

// Wait for DOM to load before executing
document.addEventListener("DOMContentLoaded", loadVideoForDesktop);

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
  let fields = document.querySelectorAll(".itemDot");
  let container = document.querySelector(".dotCircle");
  let width = container.offsetWidth;
  radius = width / 2.5;

  let height = container.offsetHeight;
  let angle = 0,
    step = (2 * Math.PI) / fields.length;

  fields.forEach(function (field, index) {
    let x = Math.round(
      width / 2 + radius * Math.cos(angle) - field.offsetWidth / 2
    );
    let y = Math.round(
      height / 2 + radius * Math.sin(angle) - field.offsetHeight / 2
    );

    field.style.left = x + "px";
    field.style.top = y + "px";
    angle += step;

    field.addEventListener("click", function () {
      rotateToTop(index);
      resetRotationCounter();
    });
  });

  function rotateToTop(index) {
    let rotationDegree = 360 - index * (360 / fields.length);
    container.style.transform = "rotate(" + rotationDegree + "deg)";
    container.style.transition = "2s";

    fields.forEach(function (item) {
      item.style.transform = "rotate(" + -rotationDegree + "deg)";
      item.style.transition = "1s";
    });

    fields.forEach(function (item, i) {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });

    document.querySelectorAll(".CirItem").forEach(function (cirItem) {
      cirItem.classList.remove("active");
    });
    document.querySelector(".CirItem" + (index + 1)).classList.add("active");
  }

  function resetRotationCounter() {
    clearInterval(intervalId);
    let index = Array.from(fields).indexOf(
      document.querySelector(".itemDot.active")
    );

    intervalId = setInterval(function () {
      index = (index + 1) % fields.length;
      rotateToTop(index);
    }, 5000);
  }

  // Initial rotation setup
  resetRotationCounter();
});

//DP360 VIDEO
function loadYouTubeIframe(container) {
  const videoId = container.getAttribute('data-video-id');
  const iframe = document.createElement('iframe');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
  iframe.setAttribute('title', 'YouTube video');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay;');
  iframe.setAttribute('allowfullscreen', '');
  container.innerHTML = '';
  container.appendChild(iframe);
}

