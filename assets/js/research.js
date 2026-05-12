/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "WCAG智能取色器",
    authors:
      "Wei Wang",
    researchYr: 2026,
    citebox: "popup1",
    image: "assets/images/research-page/colorpicker.jpg",
    abstract:
      "helps users generate WCAG-compliant color contrast combinations under selected WCAG 1.4.3 parameters. | 基于 WCAG 标准的智能无障碍取色器，独创边界吸附算法，确保配色满足1.4.3 / 1.4.11",
    absbox: "absPopup1",
    addresse: "https://github.com/Duuww/wcag-color-picker",
    frage: "设计/前端难以快速判断颜色对比度是否符合 WCAG。",
    tech: ["chrome Extension API", "Html5", "CSS3", "Canvas 2D API"],
    solution: "基于 EyeDropper API、Canvas 2D、WCAG 对比度公式、字号/字重阈值达到实时预览、阈值切换、边界吸附。"
  },

  {
    title: "AI 语音全能助手",
    authors:
      "Wei Wang",
    researchYr: 2026,
    citebox: "popup2",
    image: "assets/images/research-page/ai_stt_tts.jpg",
    abstract:
      "A lightweight AI voice assistant built with FastAPI, Web Speech API, and Edge-TTS for speech-to-text and text-to-speech. | 基于 FastAPI、Web Speech API 和 Edge-TTS 的轻量级 AI 语音助手，支持语音识别、文本编辑、语音合成与 MP3 下载。",
    absbox: "absPopup2",
    addresse:"https://github.com/Duuww/STT-TTS",
    frage: "轻量级 AI 语音助手，解决了“语音转文字”和“文字转语音”的基础需求，一键生成可播放或下载的 MP3 音频",
    tech: ["HTML5", "CSS3","JavaScript", "Web Speech API", "python", "FastAPI", "edge-TTS"],
    solution: "通过Web Speech API 实现实时语音识别；通过 FastAPI 提供后端 TTS 接口；再调用 edge-tts 进行高质量语音合成，返回 MP3 音频供在线播放或下载"
  },

  {
    title: "LocalTranslate",
    authors:
      "Wei Wang",
    researchYr: 2026,
    citebox: "popup3",
    image: "assets/images/research-page/translate.jpg",
     abstract:
     "一个基于 LibreTranslate 的本地离线浏览器翻译插件，支持中文、英文、德文、西班牙文互译，界面简洁，调用本地服务完成翻译。| A lightweight browser extension for local translation powered by LibreTranslate, supporting Chinese, English, German, and Spanish with a simple popup UI and local API integration.",
    absbox: "absPopup3",
    addresse: "https://github.com/Duuww/LocalTranslate",
    frage: "一个本地离线浏览器翻译插件，解决了在线翻译可能带来的隐私泄露问题，只会发送到本机运行的翻译服务，不上传云端",
    tech: ["HTML5", "CSS3","JavaScript", "chrome Extension API", "LibreTranslate"],
    solution: "插件作为浏览器前端界面，收集用户输入和语言选择，调用本地 LibreTranslate API 完成翻译"
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      researchYr,
      absbox,
      abstract,
      addresse,
      frage,
      tech,
      solution,

    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
              <td class="imgCol">
                  <img src="${image}" class="rImg">
              </td>

              <td class="researchTitleName project-card-content">
                  <div class="img-div">
                      <span class="imgResponsive">
                          <img src="${image}" class="imgRes">
                      </span>
                  </div>

                  <div class="project-header">
                      <div>
                          <a href="#0" class="paperTitle project-title">${title}</a>
                          <div class="authors">${authors}</div>
                          <div class="researchY">${researchYr}</div>
                      </div>
                  </div>

                  <div class="project-summary">
                      <div class="project-info-block">
                          <span class="project-info-label">Problem</span>
                          <p>
                              ${frage}
                          </p>
                      </div>

                      <div class="project-info-block">
                          <span class="project-info-label">Tech Stack</span>
                          <div class="tech-tags">
                              ${tech.map(item => `<span>${item}</span>`).join("")}
                          </div>
                      </div>

                      <div class="project-info-block">
                          <span class="project-info-label">Highlight</span>
                          <p>${solution}
                          </p>
                      </div>
                  </div>

                  <!-- 底部：按钮区 -->
                  <div class="project-actions">
                      <a 
                          href="${addresse}" 
                          class="button button-accent button-small project-github-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="${title} on github"
                      >
                          GitHub
                      </a>

                      <button 
                          class="button button-accent button-small button-abstract" 
                          type="button" 
                          data-toggle="collapse" 
                          data-target="#${absbox}" 
                          aria-expanded="false" 
                          aria-controls="${absbox}"
                      >
                          ABSTRACT
                      </button>
                  </div>

                  <!-- 展开内容 -->
                  <div id="${absbox}" class="collapse project-abstract" aria-labelledby="headingTwo">
                      <div class="card-body">
                          ${abstract}
                      </div>
                  </div>
              </td>
          </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
