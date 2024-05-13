function domReady(f) {
  if (document.readyState === "complete") {
    f();
  } else {
    document.addEventListener("DOMContentLoaded", f);
  }
}

var fonction = function () {
  console.log("Document HTML prêt !");
  const containerHeight = document.querySelector(".container").clientHeight;
  const imgLeft = document.querySelector(".left img");
  console.log(containerHeight);
  imgLeft.setAttribute("height", containerHeight);
};

domReady(fonction);
