const $like = document.querySelector("#like");
$like.addEventListener("click", () => ($like.style.color = "blue"));
const $value = document.querySelector("#footerID");
$value.innerHTML += new Date().getFullYear();