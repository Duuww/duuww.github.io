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
      "A smart browser color picker enforcing WCAG 1.4.3 standards. Features a unique boundary-snapping algorithm that guarantees 100% accessible color contrast. | 基于 WCAG 标准的智能无障碍取色器，独创边界吸附算法，确保配色 100% 合规",
    absbox: "absPopup1",
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
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div>                     
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
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
