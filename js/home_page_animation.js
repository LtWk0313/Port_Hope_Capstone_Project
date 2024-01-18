var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var initialMouseY;
var initialMouseX;
var rotationDegree = 0;

    function rotateImage(event) {
      if (initialMouseY === undefined) {
        initialMouseY = event.clientY;
      }
      if (initialMouseX === undefined) {
        initialMouseX = event.clientX;
      }
      
      var deltaY = event.clientY - initialMouseY;
      var deltaX = event.clientX - initialMouseX;
      rotationDegree = (deltaY+deltaX)/1.5; // Adjust the rotation speed as needed

      var image = document.getElementById('ferris_wheel_upper');
      image.style.top = '190px';
      image.style.left = '290px';
      image.style.transform = 'rotate(' + rotationDegree + 'deg)';
    }

    function resetRotation() {
      initialMouseY = undefined;
      initialMouseX = undefined;
      rotationDegree = 0;

      var image = document.getElementById('ferris_wheel_upper');
      image.style.transform = 'rotate(0deg)';
    }