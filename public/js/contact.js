// loader
$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".loaderbox").delay(1000).fadeOut("slow");
});

$().ready(()=>{
  $(".contact-from").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true
      },
      subject: {
        required: true
      },

      message: {
        required: true
      }
    },
    messages: {
      email: {
        required: "*Email is required.",
        email: "*Email must include @."
      },
      name: {
        required: "*Name is required."
      },
      subject: {
        required: "*Subject is required."
      },

      message: {
        required: "*Message is required."
      }
    }
  });
});

// $("form").submit(function(e){
//   e.preventDefault();
// });