function mobileSearchVisible() {
  document
    .getElementById("header-overlap")
    .setAttribute("style", "display: block");
}

function mobileSearchCancel() {
  document
    .getElementById("header-overlap")
    .setAttribute("style", "display: none");
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 991) mobileSearchCancel();
});
