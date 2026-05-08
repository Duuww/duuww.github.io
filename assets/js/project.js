AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "某出海网络/智能硬件产品无障碍合规评估",
    cardImage: "assets/images/project-page/router.jpg",
    rule: "EN 301 549 Chapter 5 Hardware、Chapter 9 Web、Chapter 10 Non-web Documents、Chapter 11 Software、Chapter 12 Documentation and Support Services；相关 WCAG 2.2 A/AA 成功准则。",
    product: "web、Hardware",
    country: "EU / Germany",
    description: "EU ICT Accessibility Compliance Assessment: Hardware, Software & Documentation",
    role: "无障碍合规测试执行人员 / 线上客户技术支持。负责依据 EN 301 549 和 WCAG 2.2 执行测试，记录问题、提供标准依据和整改建议，并在客户会议中解释测试发现。",
    range: "设备物理控件、状态反馈、Web 管理界面、软件交互流程、用户说明书及辅助功能支持说明。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、Accessibility Tree、颜色对比度工具、截图/录屏工具、合规检查表。",
    frage: "硬件状态提示只依赖视觉、Web管理界面部分控件名称无法传递正确意义、键盘焦点顺序异常、部分控件缺少焦点、颜色对比度不足、说明书文档结构不完整、缺少相应的无障碍声明。",
    out: "问题清单、复现步骤、截图/录屏、涉及标准依据、整改建议、复测记录、最终交付报告。",
    end: "参与客户线上答疑，解释问题影响和对应标准要求；根据客户修复版本执行复测并更新问题状态。"
  },
  {
    title: "某出海网络/智能硬件产品无障碍合规评估",
    cardImage: "assets/images/project-page/router.jpg",
    rule: "EN 301 549 Chapter 5 Hardware、Chapter 9 Web、Chapter 10 Non-web Documents、Chapter 11 Software、Chapter 12 Documentation and Support Services；相关 WCAG 2.2 A/AA 成功准则。",
    product: "web、Hardware",
    country: "EU / Germany",
    description: "EU ICT Accessibility Compliance Assessment: Hardware, Software & Documentation",
    role: "无障碍合规测试执行人员 / 线上客户技术支持。负责依据 EN 301 549 和 WCAG 2.2 执行测试，记录问题、提供标准依据和整改建议，并在客户会议中解释测试发现。",
    range: "设备物理控件、状态反馈、Web 管理界面、软件交互流程、用户说明书及辅助功能支持说明。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、Accessibility Tree、颜色对比度工具、截图/录屏工具、合规检查表。",
    frage: "硬件状态提示只依赖视觉、Web管理界面部分控件名称无法传递正确意义、键盘焦点顺序异常、部分控件缺少焦点、颜色对比度不足、说明书文档结构不完整、缺少相应的无障碍声明。",
    out: "问题清单、复现步骤、截图/录屏、涉及标准依据、整改建议、复测记录、最终交付报告。",
    end: "参与客户线上答疑，解释问题影响和对应标准要求；根据客户修复版本执行复测并更新问题状态。"
    },
  {
    title: "某出海网络/智能硬件产品无障碍合规评估",
    cardImage: "assets/images/project-page/router.jpg",
    rule: "EN 301 549 Chapter 5 Hardware、Chapter 9 Web、Chapter 10 Non-web Documents、Chapter 11 Software、Chapter 12 Documentation and Support Services；相关 WCAG 2.2 A/AA 成功准则。",
    product: "web、Hardware",
    country: "EU / Germany",
    description: "EU ICT Accessibility Compliance Assessment: Hardware, Software & Documentation",
    role: "无障碍合规测试执行人员 / 线上客户技术支持。负责依据 EN 301 549 和 WCAG 2.2 执行测试，记录问题、提供标准依据和整改建议，并在客户会议中解释测试发现。",
    range: "设备物理控件、状态反馈、Web 管理界面、软件交互流程、用户说明书及辅助功能支持说明。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、Accessibility Tree、颜色对比度工具、截图/录屏工具、合规检查表。",
    frage: "硬件状态提示只依赖视觉、Web管理界面部分控件名称无法传递正确意义、键盘焦点顺序异常、部分控件缺少焦点、颜色对比度不足、说明书文档结构不完整、缺少相应的无障碍声明。",
    out: "问题清单、复现步骤、截图/录屏、涉及标准依据、整改建议、复测记录、最终交付报告。",
    end: "参与客户线上答疑，解释问题影响和对应标准要求；根据客户修复版本执行复测并更新问题状态。"
  },
  {
    title: "某出海网络/智能硬件产品无障碍合规评估",
    cardImage: "assets/images/project-page/router.jpg",
    rule: "EN 301 549 Chapter 5 Hardware、Chapter 9 Web、Chapter 10 Non-web Documents、Chapter 11 Software、Chapter 12 Documentation and Support Services；相关 WCAG 2.2 A/AA 成功准则。",
    product: "web、Hardware",
    country: "EU / Germany",
    description: "EU ICT Accessibility Compliance Assessment: Hardware, Software & Documentation",
    role: "无障碍合规测试执行人员 / 线上客户技术支持。负责依据 EN 301 549 和 WCAG 2.2 执行测试，记录问题、提供标准依据和整改建议，并在客户会议中解释测试发现。",
    range: "设备物理控件、状态反馈、Web 管理界面、软件交互流程、用户说明书及辅助功能支持说明。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、Accessibility Tree、颜色对比度工具、截图/录屏工具、合规检查表。",
    frage: "硬件状态提示只依赖视觉、Web管理界面部分控件名称无法传递正确意义、键盘焦点顺序异常、部分控件缺少焦点、颜色对比度不足、说明书文档结构不完整、缺少相应的无障碍声明。",
    out: "问题清单、复现步骤、截图/录屏、涉及标准依据、整改建议、复测记录、最终交付报告。",
    end: "参与客户线上答疑，解释问题影响和对应标准要求；根据客户修复版本执行复测并更新问题状态。"
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, rule, product, country, description, role, range, tool, frage, out, end }) => {
    output += `       
        <div
          class="column project-card card"
          style="margin: 15px"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <div class="project-card-wrapper">
            <!-- 卡片图片区域 -->
            <div
              class="project-card-cover"
              style="background: url(${cardImage}) center / cover no-repeat;"
            >
              <button class="project-card-badge js-open-project-detail" type="button">
                项目案例
              </button>
            </div>

            <!-- 卡片默认信息 -->
            <div class="project-card-body">
              <h1 class="project-card-title">
                ${title}
              </h1>

              <div class="project-card-tags">
                <span class="project-card-tag">
                  产品：${product}
                </span>

                <span class="project-card-tag">
                  地区：${country}
                </span>
              </div>

              <div class="project-card-standard">
                EN 301 549 + WCAG 2.2 A/AA
              </div>
            </div>

            <!-- 点击后展示的浮层 -->
            <div class="project-detail-modal">
              <div class="project-detail-mask js-close-project-detail"></div>

              <div class="project-detail-panel" role="dialog" aria-modal="true">
                <button class="project-detail-close js-close-project-detail" type="button">
                  ×
                </button>

                <div class="project-detail-header">
                  <div
                    class="project-detail-image"
                    style="background: url(${cardImage}) center / cover no-repeat;"
                  ></div>

                  <div class="project-detail-summary">
                    <h2>${title}</h2>

                    <div class="project-detail-tags">
                      <span>
                        
                        产品：${product}
                      </span>

                      <span>

                        地区：${country}
                      </span>

                      <span>

                        EN 301 549 + WCAG 2.2 A/AA
                      </span>
                    </div>
                  </div>
                </div>

                <div class="project-detail-list">
                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>适用标准</span>
                    </div>
                    <div class="project-detail-value">${rule}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>产品类型</span>
                    </div>
                    <div class="project-detail-value">${product}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>目标市场</span>
                    </div>
                    <div class="project-detail-value">${country}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>角色</span>
                    </div>
                    <div class="project-detail-value">${role}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>测试范围</span>
                    </div>
                    <div class="project-detail-value">${range}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>工具</span>
                    </div>
                    <div class="project-detail-value">${tool}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>主要问题</span>
                    </div>
                    <div class="project-detail-value">${frage}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>交付产出</span>
                    </div>
                    <div class="project-detail-value">${out}</div>
                  </div>

                  <div class="project-detail-row">
                    <div class="project-detail-label">

                      <span>后续支持</span>
                    </div>
                    <div class="project-detail-value">${end}</div>
                  </div>
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
document.addEventListener("click", function (event) {
  const openBtn = event.target.closest(".js-open-project-detail");
  const closeBtn = event.target.closest(".js-close-project-detail");

  if (openBtn) {
    const card = openBtn.closest(".project-card");
    const modal = card.querySelector(".project-detail-modal");

    // 记录原本属于哪个卡片，方便关闭后放回去
    modal.__projectCard = card;

    // 移动到 body 下面，避免被卡片父级 transform / overflow 影响
    document.body.appendChild(modal);

    modal.classList.add("is-open");
    document.body.classList.add("project-modal-open");
  }

  if (closeBtn) {
    const modal = closeBtn.closest(".project-detail-modal");

    modal.classList.remove("is-open");
    document.body.classList.remove("project-modal-open");

    // 关闭后放回原卡片里，避免下次找不到
    if (modal.__projectCard) {
      modal.__projectCard
        .querySelector(".project-card-wrapper")
        .appendChild(modal);
    }
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document
      .querySelectorAll(".project-detail-modal.is-open")
      .forEach(function (modal) {
        modal.classList.remove("is-open");

        if (modal.__projectCard) {
          modal.__projectCard
            .querySelector(".project-card-wrapper")
            .appendChild(modal);
        }
      });

    document.body.classList.remove("project-modal-open");
  }
});
