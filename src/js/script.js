// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");

lightbox.showModal ();

lightbox.addEventListener("click", function() {
  lightbox.close();
});

