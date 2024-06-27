let h1texts = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];

let ptexts = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
              "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
              "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];

let images = ["./assets/desktop-image-hero-1.jpg", "./assets/desktop-image-hero-2.jpg", "./assets/desktop-image-hero-3.jpg"];

let currentIndex=0; //tracking the current progress
updateinfo(0); //being on the first slide

window.setInterval(function () { updateinfo(1);}, 30000); //automatic slideshow moving to the next slide every 30s

function updateinfo(n) {
    currentIndex += n; 
    if (currentIndex < 0) currentIndex += 3; //if index<0 go from the 1 slide to the 3 slide
    let i = currentIndex % 3; //current slides always between 0 and 2
    
    //making the prev slide img and text fade
    document.querySelectorAll(".above .arrows")[0].style.opacity = "0";
    document.querySelectorAll(".above .parts")[0].style.opacity = "0";

    //executing the code after 600milliseconds
    setTimeout(function () {
      document.querySelectorAll(".above .arrows ")[0].style.backgroundImage = "url(" + images[i] + ")";
      document.querySelectorAll(".above .parts h1")[0].innerText = h1texts[i];
      document.querySelectorAll(".above .parts p")[0].innerText = ptexts[i];
      document.querySelectorAll(".above .arrows ")[0].style.opacity = "1";
      document.querySelectorAll(".above .parts")[0].style.opacity = "1";
    }, 400);
}

