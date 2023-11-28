const header = document.getElementById("header");
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
document.addEventListener("scroll", () => {
  if (!isInViewport(header)) {
    document.getElementById("arrowContainer").style.display = "flex";
  } else {
    document.getElementById("arrowContainer").style.display = "none";
  }
});

document.getElementById("arrowContainer").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
