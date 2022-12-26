const main = document.querySelector("main");
const info = document.querySelector(".info");

document.querySelector(".hide-popup").addEventListener("click", () => {
  main.classList.remove("popup-visible");
});

document.querySelector(".show-popup").addEventListener("click", () => {
  main.classList.toggle("popup-visible");
});

info.addEventListener("click", (e) => {
  !e.target.classList.contains("show-popup") &&
    main.classList.remove("popup-visible");
});
