AOS.init();

// MOOCs Cards

const moocs1 = document.querySelector(".moocs1");
const moocscards1 = [
  {
    title: "W3Cx WAI0.1x 修课证明",
    cardImage: "assets/images/education-page/c1.jpg",
  },
  {
    title: "DHS Section 508 Trusted Tester",
    cardImage: "assets/images/education-page/c2.jpg",

  },
  {
    title: "NVDA Expert",
    cardImage: "assets/images/education-page/c3.jpg",
  },
  {
    title: "HarmonyOS Developer Advanced Certification",
    cardImage: "assets/images/education-page/c4.jpg",
  },

];

const moocs2 = document.querySelector(".moocs2")
// const moocscards2 =[
//   {
//     title: "NVDA Expert",
//     cardImage: "assets/images/education-page/c3.jpg",
//   },
//   {
//     title: "HarmonyOS应用开发者高级认证",
//     cardImage: "assets/images/education-page/c4.jpg",
//   },
// ]

const showCards = () => {
  let output = "";
  moocscards1.forEach(
    ({ title, cardImage }) =>
      (output += `        
        <div class="col-12 col-md-6 column mooc-column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image" alt="${title} certificate">     
                  <div class="content-details fadeIn-bottom">
                    <a href=""><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
