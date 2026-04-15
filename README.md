# Wei Wang Portfolio

这是一个基于纯静态 HTML/CSS/JS 的个人主页项目，适合直接发布到 GitHub Pages。

## 本地预览

这是纯静态站点，不需要额外构建。

直接双击 `index.html` 可以查看基础效果，但更建议用本地静态服务器预览，避免部分资源或脚本在 `file://` 环境下表现不一致。

如果你本机装了 Python，可以在项目根目录运行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 发布到 GitHub Pages

### 方式一：仓库名为 `Duuww.github.io`

如果你的仓库名就是：

```text
Duuww.github.io
```

那么发布后访问地址就是：

```text
https://duuww.github.io/
```

操作步骤：

1. 把当前项目推送到 `Duuww.github.io` 仓库。
2. 打开 GitHub 仓库页面。
3. 进入 `Settings`。
4. 找到 `Pages`。
5. 在 `Build and deployment` 里选择：
   `Source: Deploy from a branch`
6. Branch 选择：
   `main`
   Folder 选择：
   `/ (root)`
7. 保存后等待 GitHub 部署完成。

### 方式二：仓库名为普通项目仓库

如果仓库名不是 `Duuww.github.io`，例如：

```text
portfolio
```

那么发布地址通常是：

```text
https://duuww.github.io/portfolio/
```

操作步骤与上面相同：

1. 推送代码到目标仓库。
2. 打开仓库 `Settings > Pages`。
3. 选择：
   `Deploy from a branch`
4. 选择：
   `main` 分支
   `/ (root)` 目录
5. 保存并等待部署。

这个项目当前使用的基本都是相对路径，正常情况下可以直接用于 GitHub Pages。

## 发布前建议检查

上线前建议确认下面几项：

1. `robots.txt` 不要继续保留 `Disallow: /`，否则搜索引擎不会收录站点。
2. 首页和各子页面的文案是否已经全部替换成你自己的内容。
3. 邮箱、GitHub、未来的 LinkedIn 等社交入口是否正确。
4. 简历 PDF 是否已经替换为你自己的版本。
5. 项目页、经历页、研究页是否还存在乱码或模板残留文案。

## 自定义域名

如果未来你要绑定自己的域名，例如：

```text
www.example.com
```

可以在仓库根目录新增一个 `CNAME` 文件，文件内容只写你的域名，例如：

```text
www.example.com
```

然后在：

```text
Settings > Pages
```

里确认 GitHub Pages 已经识别该域名，并去域名服务商处配置对应的 DNS 记录。

## 当前项目特点

1. 这是纯静态站点，没有构建流程。
2. GitHub Pages 直接发布仓库根目录即可。
3. 当前仓库里的 `.github/workflows` 不是这个主页站点的发布流程，可以先忽略。

