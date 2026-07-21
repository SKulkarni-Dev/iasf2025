const slides = [
  {
    image: "images/g2.jpg",
    heading: "Innovation & Sustainability Forum",
    text: "Empowering students through innovation, leadership, mentorship and sustainable engineering."
  },
  {
    image: "images/pic2.jpg",
    heading: "Connecting Future Engineers",
    text: "Building a collaborative ecosystem for learning, research and impact."
  },
  {
    image: "images/pic3.jpg",
    heading: "Learn. Lead. Inspire.",
    text: "Creating opportunities beyond classrooms through projects, workshops and community outreach."
  }
];

let current = 0;

const image = document.getElementById("carouselImage");
const heading = document.getElementById("carouselHeading");
const text = document.getElementById("carouselText");

function changeSlide() {

    current = (current + 1) % slides.length;

    image.style.opacity = "0";

    setTimeout(() => {

        image.src = slides[current].image;
        heading.innerHTML = slides[current].heading;
        text.innerHTML = slides[current].text;

        image.style.opacity = "1";

    }, 400);
}

image.style.transition = "opacity .4s ease";

setInterval(changeSlide, 5000);

// ----------------------
// Glass Navbar
// ----------------------

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("navbar-scrolled");

        navLinks.forEach(link => {
            link.classList.remove("text-white");
            link.classList.add("text-slate-700");
        });

    } else {

        navbar.classList.remove("navbar-scrolled");

        navLinks.forEach(link => {
            link.classList.remove("text-slate-700");
            link.classList.add("text-white");
        });

    }

});