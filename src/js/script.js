// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");

lightbox.addEventListener("click", function() {
  lightbox.close();
}); 

const images = document.querySelectorAll("img");   

images.forEach(image=> {
    image.addEventListener("click", function() {
       const fullImg = image.dataset.fullImg;
       const imgElement = lightbox.querySelector("img");
        imgElement.src = fullImg;
        lightbox.showModal();
    });
    });





