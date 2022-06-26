
// scrollAppear;
function scrollAppear() {
  var controlTitle = document.querySelectorAll(".control-title");
  var screenPosition = window.innerHeight / 1.1;
    for (let i = 0; i < controlTitle.length; i++) {
      let introPosition = controlTitle[i].getBoundingClientRect().top;      
      //controlTitle
      if (introPosition < screenPosition) {
        controlTitle[i].classList.add("intro-appear");
      } else {
        controlTitle[i].classList.remove("intro-appear");
      }
    }
}
window.addEventListener("scroll", scrollAppear);
// loader
$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".loaderbox").delay(1000).fadeOut("slow");
});

//scrollBUtton
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
