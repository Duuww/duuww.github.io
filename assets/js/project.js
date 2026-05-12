AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "某出海电商/官网美国无障碍合规评估",
    cardImage: "assets/images/project-page/sportcamra.png",
    rule: "Section 508 ICT Testing Baseline / DHS Trusted Tester；WCAG A/AA 相关要求。",
    product: "Web、App",
    country: "EN / America",
    role: "无障碍合规测试执行人员 / 客户技术支持。依据 Section 508 ICT Testing Baseline 和 DHS Trusted Tester 方法执行测试，协助客户理解问题原因及整改方向。",
    range: "首页、登录/注册、商品详情、购物车、结算流程、个人中心、消息中心、商品对比、商品搜索、移动端适配等页面。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、ANDI、颜色对比度工具、截图/录屏工具、SCRT。",
    frage: "大量轮播图无法进行停止轮播、大量有意义的视频未添加脚本信息或字幕、商品链接未准确描述、商品图片缺少相应替代文本、颜色对比度不足、表格部分缺少相应的结构信息、菜单未适配键盘交互操作、存在仅能通过鼠标悬浮展开的内容",
    out: "测试问题记录、问题复现步骤、标准依据、整改建议、客户答疑材料、复测记录、最终交付报告输入。",
    end: "支持客户开发团队定位问题并解释整改方向；对修复内容进行复测，确认部分问题关闭并记录遗留风险。"
  },
  {
    title: "某出海电商/官网欧盟无障碍合规评估",
    cardImage: "assets/images/project-page/shopping.jpg",
    rule: "EN 301 549 Chapter 9 Web、Chapter 11 Software；相关 WCAG 2.2 A/AA 成功准则。",
    product: "Web、App",
    country: "EU / Germany",
    role: "无障碍合规测试执行人员 / 线上客户技术支持。负责依据 EN 301 549 和 WCAG 2.2 执行测试，记录问题及对应问题截图并提供相应修改建议，填写相关的合规评估表，协助客户完成整改及复测上线",
    range: "首页、登录/注册、商品详情、购物车、结算流程、表单、弹窗、导航菜单、图片链接、商品列表、移动端等关键页面。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、Accessibility Tree、颜色对比度工具、截图/录屏工具、合规检查表。",
    frage: "部分图片缺少对应的替代文本、部分控件图标存在对比度不足、部分内容仅通过颜色传达意义、存在部分冗余焦点、评论模块存在控件状态缺失、部分内容存在未适配移动端、部分内容放大后存在内容遮盖与缺失",
    out: "问题清单、复现步骤、截图/录屏、涉及标准依据、整改建议、复测记录、Web整体评估表、App整体评估表、最终交付报告输入。",
    end: "参与客户线上答疑，解释标准要求以及如何整改；根据客户修复批次，同时推进执行新链路的测试与问题回归并更新问题状态。"
    },
  {
    title: "某出海网络/智能硬件产品欧盟无障碍合规评估",
    cardImage: "assets/images/project-page/router.jpg",
    rule: "EN 301 549 Chapter 5 Hardware、Chapter 9 Web、Chapter 10 Non-web Documents、Chapter 11 Software、Chapter 12 Documentation and Support Services；相关 WCAG 2.2 A/AA 成功准则。",
    product: "Web、Hardware",
    country: "EU / Germany",
    role: "无障碍合规测试执行人员 / 线上客户技术支持。负责依据 EN 301 549 和 WCAG 2.2 执行测试，记录问题、提供标准依据和整改建议，并在客户会议中解释测试发现。",
    range: "设备物理控件、灯光/声音/触觉 状态反馈、Web 管理界面、软件交互流程、按键可识别性、用户说明书及辅助功能支持说明等。",
    tool: "NVDA、键盘-only 操作、浏览器开发者工具、Accessibility Tree、颜色对比度工具、截图/录屏工具、合规检查表。",
    frage: "硬件状态提示只依赖视觉、Web管理界面部分控件名称无法传递正确意义、键盘焦点顺序异常、部分控件缺少焦点、颜色对比度不足、说明书文档结构不完整、缺少相应的无障碍声明。",
    out: "问题清单、复现步骤、截图/录屏、涉及标准依据、整改建议、复测记录、最终交付报告输入。",
    end: "参与客户线上答疑，解释问题影响和对应标准要求；根据客户修复版本执行复测并更新问题状态。"
  },
    {
    title: "某国产手机系统/应用无障碍适配评估",
    cardImage: "assets/images/project-page/phone.png",
    rule: "工信部无障碍标准GB/T 37668-2019；相关 WCAG 2.2 A/AA 成功准则。",
    product: "国产手机系统、App",
    country: "CN / China",
    role: "无障碍测试执行人员 / 技术答疑支持。负责在移动端系统环境下执行无障碍测试，记录系统功能与典型场景中的可访问性问题，并支持客户会议答疑。",
    range: "系统设置、无障碍设置、系统应用、通知、弹窗、灵动岛、输入流程、读屏交互、手势操作、字体缩放、高对比度/显示增强相关功能。",
    tool: "TalkBack、屏幕放大、android studio、系统字体缩放、键盘/外接设备操作、截图/录屏工具",
    frage: "读屏朗读顺序异常、控件标签不清晰、动态状态变化未被读屏提示、字体放大后布局遮挡、手势操作缺少替代方式、错误提示不明确、颜色对比度不足、手势缺少适配、操作方式不符合提示信息等",
    out: "问题清单、复现路径、截图/录屏、整改建议、会议答疑说明、复测记录。",
    end: "参与客户线上周会，解释问题影响和用户场景；根据修复版本进行复测或更新问题状态。"
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, rule, product, country, role, range, tool, frage, out, end }, index) => {
    const dialogTitleId = `project-detail-title-${index}`;
    output += `       
        <div
          class="column project-card card"
          style="margin: 15px"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-delay="300"
          data-aos-duration="600"
          role="main"
        >
          <div class="project-card-wrapper">
            <!-- 卡片图片区域 -->
            <div
              class="project-card-cover"
              style="background: url(${cardImage}) center / cover no-repeat;"
            >
              <button class="project-card-badge js-open-project-detail" type="button" aria-label="查看${title}案例详情">
                查看案例详情
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

              <div class="project-detail-panel" role="dialog" aria-modal="true" aria-labelledby="${dialogTitleId}">
                <button class="project-detail-close js-close-project-detail" type="button" aria-label="关闭浮层">
                  ×
                </button>

                <div class="project-detail-header">
                  <div
                    class="project-detail-image"
                    style="background: url(${cardImage}) center / cover no-repeat;"
                  ></div>

                  <div class="project-detail-summary">
                    <h2 id="${dialogTitleId}">${title}</h2>

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

const projectModalFocusableSelector = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(", ");

function getProjectModalFocusableElements(modal) {
  return Array.from(modal.querySelectorAll(projectModalFocusableSelector)).filter(function (element) {
    return !element.hasAttribute("inert") && element.offsetParent !== null;
  });
}

function setProjectModalBackgroundInert(activeModal, isInert) {
  Array.from(document.body.children).forEach(function (element) {
    if (element === activeModal) {
      return;
    }

    if (isInert) {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    } else {
      element.inert = false;
      element.removeAttribute("aria-hidden");
    }
  });
}

function openProjectModal(modal, trigger) {
  const openModal = document.querySelector(".project-detail-modal.is-open");

  if (openModal && openModal !== modal) {
    closeProjectModal(openModal);
  }

  modal.__projectTrigger = trigger;
  modal.__projectCard = trigger.closest(".project-card");
  document.body.appendChild(modal);

  document.body.appendChild(modal);

  modal.classList.add("is-open");
  document.body.classList.add("project-modal-open");
  setProjectModalBackgroundInert(modal, true);

  const focusableElements = getProjectModalFocusableElements(modal);
  const initialFocusTarget =
    modal.querySelector(".project-detail-close") ||
    focusableElements[0] ||
    modal.querySelector(".project-detail-panel");

  if (initialFocusTarget && !initialFocusTarget.hasAttribute("tabindex")) {
    initialFocusTarget.setAttribute("tabindex", "-1");
  }

  if (initialFocusTarget) {
    initialFocusTarget.focus();
  }
}

function closeProjectModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  document.body.classList.remove("project-modal-open");
  setProjectModalBackgroundInert(modal, false);

  if (modal.__projectCard) {
    modal.__projectCard
      .querySelector(".project-card-wrapper")
      .appendChild(modal);
  }

  if (modal.__projectTrigger) {
    modal.__projectTrigger.focus();
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

document.addEventListener(
  "click",
  function (event) {
    const openBtn = event.target.closest(".js-open-project-detail");
    const closeBtn = event.target.closest(".js-close-project-detail");

    if (openBtn) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const card = openBtn.closest(".project-card");
      const modal = card.querySelector(".project-detail-modal");
      openProjectModal(modal, openBtn);
      return;
    }

    if (closeBtn) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const modal = closeBtn.closest(".project-detail-modal");
      closeProjectModal(modal);
    }
  },
  true
);

document.addEventListener(
  "keydown",
  function (event) {
    const modal = document.querySelector(".project-detail-modal.is-open");

    if (!modal) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeProjectModal(modal);
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = getProjectModalFocusableElements(modal);

      event.stopImmediatePropagation();

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!modal.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  },
  true
);
