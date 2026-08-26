let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide navbar
    navbar.style.top = "-80px"; // adjust to your navbar height
  } else {
    // Scrolling up → show navbar
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
});

// Modal Functions
function openModal() {
  document.getElementById("eventModal").style.display = "block";
}

function closeModal() {
  document.getElementById("eventModal").style.display = "none";
}

// Countdown Timer
const countdownElement = document.getElementById("countdown");
const eventDate = new Date("Feb 13, 2026 19:30:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "Event Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

/*====================== scroll reveal ======================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".fromTop", { origin: "top" });
ScrollReveal().reveal(".fromBottom", { origin: "bottom" });
ScrollReveal().reveal(".fromLeft", {
  origin: "left",
});
ScrollReveal().reveal(".fromRight", { origin: "right" });
