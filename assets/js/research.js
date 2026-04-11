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
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "极简 AI 语音全能助手",
    authors:
      "Wei Wang",
    researchYr: 2026,
    citebox: "popup2",
    image: "assets/images/research-page/ai_stt_tts.jpg",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title: "LocalTranslate",
    authors:
      "Wei Wang",
    researchYr: 2026,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
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
