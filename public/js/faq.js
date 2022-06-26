this.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) =>
    question.addEventListener("click", () => {
      if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active");
      } else {
        questions.forEach((question) =>
          question.parentNode.classList.remove("active")
        );
        question.parentNode.classList.add("active");
      }
    })
  );
});

// loader
$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".loaderbox").delay(1000).fadeOut("slow");
});
