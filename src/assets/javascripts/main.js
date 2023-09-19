document.addEventListener("DOMContentLoaded", () => {
  // Seu código JavaScript aqui
  const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
});
