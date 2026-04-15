# Wei Wang Portfolio | 个人作品集网站

> A bilingual personal portfolio website built for GitHub Pages deployment.  
> 一个适合部署在 GitHub Pages 上的中英双语个人作品集网站。

---

## 📖 Overview | 项目简介

**English**  
This project is a static personal portfolio website designed to present professional experience, selected projects, education, research, and technical skills in a clean and accessible format. It is built with standard front-end technologies and can be deployed directly to GitHub Pages without any build step.

**中文**  
这是一个静态个人作品集网站，用于展示个人经历、项目成果、教育背景、研究方向以及技术能力。项目基于标准前端技术构建，无需额外构建流程，可直接部署到 GitHub Pages。

---

## ✨ Features | 项目特点

**English**
- Fully static website with no build process required
- Multi-page structure with shared navigation and footer
- Responsive design for desktop and mobile devices
- Smooth visual effects and animated interactions
- GitHub Pages friendly deployment
- Focused sections for experience, projects, research, education, and technical skills
- Custom 404 page for better navigation experience

**中文**
- 纯静态网站，无需构建流程
- 多页面结构，统一导航栏与页脚设计
- 响应式布局，兼容桌面端与移动端
- 包含动画效果与交互视觉元素
- 适合直接部署到 GitHub Pages
- 内容覆盖经历、项目、研究、教育与技术栈等模块
- 提供自定义 404 页面，提升访问体验

---

## 🧩 Pages | 页面组成

**English**
- `index.html` — Home / Introduction
- `experience.html` — Work Experience
- `projects.html` — Project Showcase
- `research.html` — Applied AI / Research
- `techstack.html` — Tech Stack
- `education.html` — Education
- `404.html` — Custom Not Found Page

**中文**
- `index.html` — 首页 / 个人介绍
- `experience.html` — 工作经历
- `projects.html` — 项目展示
- `research.html` — 应用 AI
- `techstack.html` — 技术栈
- `education.html` — 教育背景
- `404.html` — 自定义 404 页面

---

## 🗂️ Project Structure | 项目结构

```text
.
├─ index.html
├─ experience.html
├─ projects.html
├─ research.html
├─ techstack.html
├─ education.html
├─ 404.html
├─ assets/
│  ├─ css/
│  ├─ js/
│  ├─ images/
│  └─ docs/
└─ .github/
```

---

## 🛠️ Tech Stack | 技术栈

**English**
- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- jQuery
- AOS / animation libraries
- GitHub Pages

**中文**
- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- jQuery
- AOS / 动画库
- GitHub Pages

---

## 🚀 Local Preview | 本地预览

**English**  
This project does not require a build process. You can open `index.html` directly in a browser, but using a local static server is recommended.

**中文**  
本项目无需构建即可运行。你可以直接在浏览器中打开 `index.html`，但更推荐使用本地静态服务器进行预览。

### Example | 示例

```bash
python -m http.server 8000
```

Then open / 然后访问：

```text
http://localhost:8000
```

---

## 🌐 Deployment on GitHub Pages | 部署到 GitHub Pages

### Case 1: Username repository | 情况 1：用户名主页仓库

If the repository name is:

```text
Duuww.github.io
```

The site URL will be:

```text
https://duuww.github.io/
```

如果仓库名称为 `Duuww.github.io`，网站将直接发布到：

```text
https://duuww.github.io/
```

### Case 2: Normal repository | 情况 2：普通仓库

For example, if the repository name is:

```text
portfolio
```

The site URL will be:

```text
https://duuww.github.io/portfolio/
```

如果仓库名称是普通项目名（例如 `portfolio`），网站地址将为：

```text
https://duuww.github.io/portfolio/
```

### Deployment Steps | 部署步骤

**English**
1. Push the project to GitHub.
2. Open **Settings > Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Save and wait for deployment to complete.

**中文**
1. 将项目推送到 GitHub 仓库。
2. 打开 **Settings > Pages**。
3. 将 **Source** 设置为 **Deploy from a branch**。
4. 选择：
   - 分支：`main`
   - 目录：`/ (root)`
5. 保存后等待 GitHub 完成部署。

---

## 📝 Notes | 说明

**English**
- This project can be published directly from the repository root.
- Before deployment, check content consistency, social links, `robots.txt`, and any placeholder text.
- If you later add a custom domain, remember to configure the `CNAME` file and DNS records.

**中文**
- 本项目可以直接从仓库根目录发布。
- 在正式上线前，建议检查页面内容一致性、社交链接、`robots.txt` 以及是否仍存在占位文本。
- 如果后续需要绑定自定义域名，请补充配置 `CNAME` 文件与 DNS 记录。

---

## 📄 License | 许可证

**English**  
This project follows the license included in the repository.

**中文**  
本项目遵循仓库中所附带的许可证说明。

---

## 🙌 Acknowledgement | 说明补充

**English**  
This repository is intended as a personal portfolio site for showcasing professional background, technical capabilities, and selected work.

**中文**  
本仓库主要用作个人作品集展示，用于呈现专业背景、技术能力与代表性项目成果。
