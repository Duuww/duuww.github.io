AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "信息无障碍工程师/Accessibility QA Engineer",
    cardImage: "assets/images/experience-page/link.jpg",
    place: "深圳市信息无障碍研究会",
    time: "(8.30, 2024 - 至今)",
    desp: "<li>负责Web网页无障碍测试，覆盖海外与国内项目，依据 WCAG 2.1/2.2、EN 301 549、Section 508 等标准开展人工评估与合规验证。</li><li>参与公司首个美国网站无障碍业务，负责测试用例编写、人工评估、问题报告输出、客户会议答疑及整改建议跟进，推动项目闭环。</li><li>多次参与海外电商官网无障碍合规测试，输出Section 508、WCAG、EN301 549相关测试结果与整改建议并交付，协助客户推进合规整改并降低风险。</li><li>参与国产手机系统及头部App 的无障碍专项测试，覆盖读屏可用性、焦点顺序、控件语义与操作路径验证等场景。</li><li>参与公司官网维护与无障碍优化，修复现网官网部分无障碍问题，并与同事共同完成新版官网的无障碍化重构开发，涉及语义化结构、ARIA 标注、焦点管理、色彩对比度优化等。</li><li>负责部分老旧数据内容重构、页面逻辑处理及数据库相关处理，并参与新版官网无障碍化方案开发与验证。</li><li>参与公司现有无障碍问题解决方案的更新，曾在江西分公司负责组建首个无障碍工程师团队。</li><li>熟悉Windows UIA、iOS UIAccessibility、Android AccessibilityService无障碍接口，理解各大屏幕阅读器操作逻辑。</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
