AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "信息无障碍工程师/Accessibility QA Engineer",
    aria_label:"深圳市信息无障碍研究会",
    cardImage: "assets/images/experience-page/link.jpg",
    place: "深圳市信息无障碍研究会",
    time: "(8.30, 2024 - 至今)",
    desp: "<li>负责Web网页无障碍测试，覆盖海外与国内项目，依据 WCAG 2.1/2.2、EN 301 549、Section 508 等标准开展人工评估与合规验证。</li><li>参与公司首个美国网站无障碍业务，负责测试用例编写、人工评估、问题报告输出、客户会议答疑及整改建议跟进，推动项目闭环。</li><li>多次参与海外电商官网无障碍合规测试，输出Section 508、WCAG、EN301 549相关测试结果与整改建议并交付，协助客户推进合规整改并降低风险。</li><li>参与国产手机系统及头部App 的无障碍专项测试，覆盖读屏可用性、焦点顺序、控件语义与操作路径验证等场景。</li><li>参与公司官网维护与无障碍优化，修复现网官网部分无障碍问题，并与同事共同完成新版官网的无障碍化重构开发，涉及语义化结构、ARIA 标注、焦点管理、色彩对比度优化等。</li><li>负责部分老旧数据内容重构、页面逻辑处理及数据库相关处理，并参与新版官网无障碍化方案开发与验证。</li><li>参与公司现有无障碍问题解决方案的更新，曾在江西分公司负责组建首个无障碍工程师团队。</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, aria_label }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image" alt="${aria_label}"/>
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