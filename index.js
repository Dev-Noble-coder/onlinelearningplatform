const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".main-nav");
const body = document.querySelector("main");
const remove = document.querySelector('.cancel')
document.body.addEventListener("click", (event) => {
    if (hamburger.contains(event.target)) {
      sidebar.classList.toggle("opennow");
    } else if (!sidebar.contains(event.target)) {
      sidebar.classList.remove("opennow");
    }
  });
  remove.addEventListener("click", (event) => {
    sidebar.classList.remove('opennow')
})