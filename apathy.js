const heroImg = document.getElementById("heroImg1");
const hero = document.getElementById("hero1");
const heroImg2 = document.getElementById("heroImg2");
const hero2 = document.getElementById("hero2");
const heroImg3 = document.getElementById("heroImg3");
const hero3 = document.getElementById("hero3");
const heroImg4 = document.getElementById("heroImg4");
const hero4 = document.getElementById("hero4");
const heroImg5 = document.getElementById("heroImg5");
const hero5 = document.getElementById("hero5");
const heroImg6 = document.getElementById("heroImg6");
const hero6 = document.getElementById("hero6");

hero.addEventListener("mouseenter", () => {
  heroImg.style.transform = "rotate(180deg)";
});
hero.addEventListener("mouseleave", () => {
  heroImg.style.transform = "rotate(0deg)";
});

hero2.addEventListener("mouseenter", () => {
  heroImg2.style.transform = "rotate(-135deg)";
});
hero2.addEventListener("mouseleave", () => {
  heroImg2.style.transform = "rotate(0deg)";
});
hero3.addEventListener("mouseenter", () => {
  heroImg3.style.transform = "rotate(180deg)";
});
hero3.addEventListener("mouseleave", () => {
  heroImg3.style.transform = "rotate(0deg)";
});
hero4.addEventListener("mouseenter", () => {
  heroImg4.style.transform = "rotate(135deg)";
});
hero4.addEventListener("mouseleave", () => {
  heroImg4.style.transform = "rotate(0deg)";
});
hero5.addEventListener("mouseenter", () => {
  heroImg5.style.transform = "rotate(-135deg)";
});
hero5.addEventListener("mouseleave", () => {
  heroImg5.style.transform = "rotate(0deg)";
});
hero6.addEventListener("mouseenter", () => {
  heroImg6.style.transform = "rotate(135deg)";
});
hero6.addEventListener("mouseleave", () => {
  heroImg6.style.transform = "rotate(0deg)";
});
