$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Desarrollor de Software", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Desarrollor de Software", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      /*  1000:{
                items: 3,
                nav: false
            } */
    },
  });
});

function sendMail_v1() {
 
  var tempParams = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    from_subject: document.getElementById("from_subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("portafolio_web", "template_portafolio_web", tempParams)
    .then(function (res) {
      // console.log(res.status);
      if (res.status == "200") {
        document.getElementById("from_name").value = "";
        document.getElementById("from_email").value = "";
        document.getElementById("from_subject").value = "";
        document.getElementById("message").value = "";
        document.getElementById("respuesta").style.display = "block";
     
      }
    });
}


function sendMail() {
  // $("div_mail *").prop("disabled", true);
   var tempParams = {
     from_name: document.getElementById("from_name").value,
     from_email: document.getElementById("from_email").value,
     from_subject: document.getElementById("from_subject").value,
     message: document.getElementById("message").value,
   };
   console.log("envio de correo");
   console.log(document.getElementById("from_name").value);
     if((document.getElementById("from_name").value == "") || (document.getElementById("from_email").value == "") || ( document.getElementById("from_subject").value == "") || (document.getElementById("message").value == ""))
     {
       document.getElementById("respuesta_error").style.display = "block";
     }
     else{
       emailjs
       .send("portafolio_web", "template_portafolio_web", tempParams)
       .then(function (res) {
         //console.log(res.status);
          if (res.status == "200") {
             document.getElementById("from_name").value = "";
             document.getElementById("from_email").value = "";
             document.getElementById("from_subject").value = "";
             document.getElementById("message").value = "";
             document.getElementById("respuesta").style.display = "block";
           //$("div_mail *").prop("disabled", false);
         } 
       });
     }
 }
