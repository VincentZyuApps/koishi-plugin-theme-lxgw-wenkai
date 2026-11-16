const pkg = require('../package.json')

const KOISHI_LOGO_BASE64 = 'data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABU0lEQVR42p2UQSsFYRSGnxnqLuytKWKpKFkQNsS%2FsOHPWPADLCmxU5S7UzYWNrJR7lYiRF2FeWzOMKZ7mXHqNNP5vvP2nu%2B850CY2lP4X1K31ZbaDm%2BpO%2Bpyp5wfAXVEPfRvO1JHf4AVQGbUh7j4EZ4VkrNCXPVRnf3CUBN1SH2KC28VGOV3ntRhNclZHdcAKYM11QR1oVBOXctzFlNgBTC8qmXxPQEegbVeYApIgJT6tg%2F0AdMp0B%2FBpCabK2AAmAAa%2F2GRBft1oBFPkqTAba7LCiAfQC9wClwAY1HJHepuiO29Yrsf1Dn1uiDU3RTYCtTkl1Leg8k9MB4NGgReI28rV3azgyCz0og01Xl1Uz1QX8uCTELm3UbkTF1VJ9Wr0tn3iBSGdjYG0XivE3VN3VD31PM4a3cc2tIGGI0VkTO7rLxGuiy25ejmjfqsvkSXui62TxaK03td4FXTAAAAAElFTkSuQmCC'

export const usage = `
> 💡 推荐前往 <a href="https://github.com/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai" target="_blank">GitHub</a> 或 <a href="https://gitee.com/vincent-zyu/koishi-plugin-theme-lxgw-wenkai" target="_blank">Gitee</a> 阅读 README，体验更好。

> **<a href="https://github.com/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai/blob/main/CHANGELOG.md" target="_blank">📖 查看完整更新日志 →</a>**

<p align="center">
  <img src="https://socialify.git.ci/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai/image?custom_language=CSS&description=1&font=Bitter&forks=1&issues=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff3%2FKoishi.js_Logo.png&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Auto" alt="koishi-plugin-theme-lxgw-wenkai" width="100%">
</p>

<h1>🌸 koishi-plugin-theme-lxgw-wenkai</h1>
<h2>🎯 当前插件版本：v\${pkg.version}</h2>

<p>
  <a href="https://www.npmjs.com/package/koishi-plugin-theme-lxgw-wenkai" target="_blank">
    <img src="https://img.shields.io/npm/v/koishi-plugin-theme-lxgw-wenkai?style=flat-square&logo=npm" alt="npm version">
  </a>
  <a href="https://npm-stat.com/charts.html?package=koishi-plugin-theme-lxgw-wenkai" target="_blank">
    <img src="https://img.shields.io/npm/dm/koishi-plugin-theme-lxgw-wenkai?style=flat-square&logo=npm" alt="npm downloads">
  </a>
  <br>
  <a href="https://github.com/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://gitee.com/vincent-zyu/koishi-plugin-theme-lxgw-wenkai" target="_blank">
    <img src="https://img.shields.io/badge/Gitee-C71D23?style=for-the-badge&logo=gitee&logoColor=white" alt="Gitee">
  </a>
  <br>
  <a href="https://forum.koishi.xyz/t/topic/xxxxx" target="_blank">
    <img src="https://img.shields.io/badge/Koishi%20Forum-xxxxx-5546A3?style=for-the-badge&logo=\${KOISHI_LOGO_BASE64}&logoColor=white" alt="Koishi Forum">
  </a>
  <a href="https://qm.qq.com/q/ZHj33L5cuC" target="_blank">
    <img src="https://img.shields.io/badge/QQ群-1085190201-12B7F5?style=flat-square&logo=qq&logoColor=white" alt="QQ群">
  </a>
</p>

<h2>💬 交流反馈</h2>
<p>🐛 Bug 反馈 / 💡 建议 / 👨‍💻 插件开发交流，欢迎加群：</p>
<p><del>💬 插件使用问题 / 🐛 Bug反馈 / 👨‍💻 插件开发交流，欢迎加入QQ群：<b>259248174</b>   🎉（这个群G了）</del></p> 
<p>💬 插件使用问题 / 🐛 Bug反馈 / 👨‍💻 插件开发交流，欢迎加入QQ群：<b>1085190201</b> 🎉</p>
<p>💡 在群里直接艾特我，回复的更快哦~ ✨</p>

<hr>

<h2>🎨 使用与配置指南</h2>
<p>极速切片版 <b>霞鹜文楷 (LXGW WenKai)</b> 全局控制台字体与<b>新中式现代天青·水墨配色主题</b>插件，专为 Koishi 控制台 WebUI 设计。</p>

<h3>1. 控制台外观选择</h3>
<p>安装并启用本插件后，前往控制台左下角 <b>「外观设置」</b> 的主题下拉框，即可直接切换：</p>
<ul>
  <li><b>浅色主题</b>：<code>霞鹜天青 (现代蓝白)</code> / <code>秋水长天 (竹青雅致)</code></li>
  <li><b>深色主题</b>：<code>霞鹜夜墨 (暗黑天青)</code> / <code>秋水长天 (翡翠夜墨)</code></li>
</ul>

<h3>2. 插件参数与自定义色彩</h3>
<p>你可以在本插件的配置表单中直接选择预设色彩方案，或者选择 <b>自定义</b> 并通过拾色器选取心仪的主题色彩，修改即时热重载生效！</p>
`
