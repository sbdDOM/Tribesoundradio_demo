  // Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


//var btnShow =  document.getElementById('details');
//btnShow.addEventListener('click', buttonClick);
//var btnShow =  document.getElementById('detailsMobile').addEventListener('click', buttonClick);
function buttonClick(){
    var show = document.getElementById("half");
    var full = document.getElementById("full");
    if (show.style.display === "none") {
        show.style.display = "inline";
        full.style.display = "none";
    } else {
        show.style.display = "none";
        full.style.display = "inline";
    }

    var shows = document.getElementById("halfs");
    var fulls = document.getElementById("fulls");
    if (shows.style.display === "none") {
        shows.style.display = "inline";
        fulls.style.display = "none";
    } else {
        shows.style.display = "none";
        fulls.style.display = "inline";
    }
}

//var btnShow =  document.getElementById('detailsFull').addEventListener('click', buttonClickz);
//var btnShow =  document.getElementById('detailsFullMobile').addEventListener('click', buttonClickz);
function buttonClickz(){
    var show = document.getElementById("half");
    var full = document.getElementById("full");
    if (full.style.display === "none") {
        full.style.display = "inline";
        show.style.display = "none";
    } else {
        full.style.display = "none";
        show.style.display = "inline";
    }

    var shows = document.getElementById("halfs");
    var fulls = document.getElementById("fulls");
    if (fulls.style.display === "none") {
        fulls.style.display = "inline";
        shows.style.display = "none";
    } else {
        fulls.style.display = "none";
        shows.style.display = "inline";
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlide");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 5000); // Change image every 2 seconds
}

let mobileSlideIndex = 0;
showMobileSlides();

function showMobileSlides() {
let i;
let mobileSlides = document.getElementsByClassName("mobileSlide");
for (i = 0; i < mobileSlides.length; i++) {
    mobileSlides[i].style.display = "none";
}
mobileSlideIndex++;
if (mobileSlideIndex > mobileSlides.length) {mobileSlideIndex = 1}
mobileSlides[mobileSlideIndex-1].style.display = "block";
setTimeout(showMobileSlides, 5000); // Change image every 2 seconds
}

