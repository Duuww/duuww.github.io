AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "某品牌运动相机商城美国网页",
    cardImage: "assets/images/project-page/sportcamra.png",
    description: "ADA Section508。产出、解决并回归162个PC端bug，帮助客户应对ADA诉讼",
    time: "2025.9.17-2025.9.24"
  },
  {
    title: "某手表商城德国网页",
    cardImage: "assets/images/project-page/watchphone.jpg",
    description: "EN 301 549。产出、解决并回归100个PC端bug，后续线上会议答疑，完成欧盟出海合规",
    time: "2025.8.15-2025.8.27 & 2025.9.26-2025.10.31 "
  },
  {
    title: "某PDF编辑器Windows桌面应用",
    cardImage: "assets/images/project-page/pdfreader.jpg",
    description:
      "WCAG 2.2 & EN 301 549。产出、解决并回归95个桌面端bug，后续线上会议答疑，完成欧盟出海合规",
    time: "2025.12.5-2026.12.19"
  },
  {
    title: "某知名手办美国网页",
    cardImage: "assets/images/project-page/miku.png",
    description: "WCAG 2.2 & Section508。产出、解决并回归296个iOS端及PC端bug，全程飞书群答疑，完成美国ADA合规",
    time: "2025.7.28-2025.7.30 & 2025.8.8-2025.8.14"
    },
  {
    title: "某头部电商商城德国网页",
    cardImage: "assets/images/project-page/shopping.jpg",
    description: "WCAG 2.2 & EN 301 549。产出并解决165个PC端bug",
    time: "2026.3.31-2026.4.10",
  },
  {
    title: "某知名路由器、笔记本的硬件、配置网页、电子说明书",
    cardImage: "assets/images/project-page/router.jpg",
    description: "WCAG 2.2 & EN 301 549。产出、解决、答疑并回归47个PC端bug，10个电子说明书bug，完成欧盟出海合规",
    time: "2025.10.20-2025.10.30"
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, time }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header"></div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title">${title}<span>${ time }</span></h1>                
                </div>
                <div class="menu-content">                
                  <span>${ description }</span>          
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
