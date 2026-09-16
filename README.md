# 宦银个人作品集

这是一个基于 Vite 和原生 JavaScript 构建的个人作品集网站，用于展示个人简介、教育经历、实践经历、技能、作品和联系方式。

## 本地运行

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:5173/
```

## 构建生产版本

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

## 内容更新

主要内容集中在：

```text
src/data/portfolio.js
```

可以在这里更新：

- 个人资料和简介
- 教育背景与实践经历
- 技能列表
- 项目标题、介绍和标签
- 图片、视频、音频和外部链接
- 联系方式

## 图片和视频资源

本地媒体文件放在：

```text
src/images/
```

添加本地资源后，在 `src/data/portfolio.js` 中使用对应路径，例如：

```js
{
  type: 'video',
  src: '/src/images/我的视频.mp4'
}
```

支持的媒体类型包括：

- `image`
- `video`
- `audio`
- `link`

## 项目结构

```text
507/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.js
    ├── styles.css
    ├── data/
    │   └── portfolio.js
    └── images/
```

## Git 保存与提交

查看修改：

```bash
git status
```

保存 README 和网页最新修改：

```bash
git add README.md src package.json index.html vite.config.js
git commit -m "Update portfolio and README"
git push origin main
```

提交后，README 会显示在 GitHub 仓库首页，网页代码和说明也会一起保存。
