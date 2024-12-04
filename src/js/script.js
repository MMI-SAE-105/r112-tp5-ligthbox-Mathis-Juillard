// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");

lightbox.showModal ();

lightbox.addEventListener("click", function() {
  lightbox.close();
}); 

const lightboxImg = document.querySelectorAll("img");   

images.forEach(image=> {
    image.addEventListener("click", function() {
       const fullImg = image.dataset.fullImg;
       const imgElement = document.querySelector("#lightbox img");
        lightboxImg.src = image.src;
        lightbox.showModal();
    });
    }





