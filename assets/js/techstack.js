AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/Vue.js.png",
    langName:"Vue",
    langDesc:"<li>Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.</li>"
  },
  {
    langImage:"assets/images/techstack-page/nvda.jpg",
    langName:"NVDA",
    langDesc:"<li>NVDA is a free and open-source screen reader for Windows that enables blind and visually impaired users to access and interact with their computers using text-to-speech and braille displays.</li>"
  },
  {
    langImage:"assets/images/techstack-page/talkback.jpg",
    langName:"TalkBack",
    langDesc:"<li>TalkBack is a built-in one for Android devicesScreen reader。 TalkBack provides you with voice feedback to ensure you can use your mobile device even with limited vision.</li>"
  },
  {
    langImage:"assets/images/techstack-page/voiceover.jpg",
    langName:"VoiceOver",
    langDesc:"<li>VoiceOver is a gesture-based screen reader on iPhone that provides spoken descriptions of everything on your screen, enabling users to navigate without seeing the display.</li>"
  },
  {
    langImage:"assets/images/techstack-page/narrator.jpg",
    langName:"Narrator",
    langDesc:"<li>Windows Narrator is a lightweight screen-reading tool. It reads aloud things on your screen—text and interface elements—makes it easier to interact with links and buttons, and even provides descriptions of images.</li>"
  },
  {
    langImage:"assets/images/techstack-page/axe-core.jpg",
    langName:"Axe-core",
    langDesc:"<li>Axe is an accessibility testing engine for websites and other HTML-based user interfaces. </li>"
  },
    {
    langImage:"assets/images/techstack-page/lighthouse.jpg",
    langName:"LightHouse",
    langDesc:"<li>Lighthouse has audits for performance, accessibility, progressive web apps, SEO, and more.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
