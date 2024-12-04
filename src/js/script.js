// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const images = document.querySelectorAll("[data-full-img]");

lightbox.addEventListener("click", function() {
  lightbox.close();
}); 

images.forEach(image=> {
    image.addEventListener("click", function() {
       const fullImg = image.dataset.fullImg;
       const imgElement = lightbox.querySelector("img");
        imgElement.src = fullImg;
        lightbox.showModal();
    });
    });





