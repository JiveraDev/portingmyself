const header = document.querySelector("header");


window.addEventListener("scroll", () => {
  skillsCounter();
});

// nav para d magalaw
function stickyNavbar(){
  header.classList.toggle("scrolled", pageYOffset > 0)
  
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

// scroll animation
let sr = ScrollReveal({
  duration:1000,
  distance:"60px"
})
sr.reveal('.showcase_area', {origin: "top",delay: 600});
sr.reveal('.showcase_area .subheading', {origin: "left",delay: 600});
sr.reveal('.showcase_area .text', {origin: "left",delay: 400});
sr.reveal('.showcase_area .cta', {origin: "bottom",delay:1000});
sr.reveal(".showcase-image", {origin: "top", delay: 700});
sr.reveal('.showcase_area .heading', {origin: "left",delay: 500});
sr.reveal('.about .about-info', {origin: "left"});
sr.reveal('.about .about-grid', {origin: "right"});
 //

 