# koishi-plugin-theme-lxgw-wenkai

[![npm](https://img.shields.io/npm/v/koishi-plugin-theme-lxgw-wenkai)](https://www.npmjs.com/package/koishi-plugin-theme-lxgw-wenkai)
[![GitHub](https://img.shields.io/github/license/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai)](https://github.com/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai/blob/main/LICENSE)

极速切片版 [霞鹜文楷 (LXGW WenKai)](https://github.com/lxgw/LxgwWenKai) 全局控制台字体主题插件，专为 Koishi 控制台 WebUI 设计。

## ✨ 特性

- 🌸 **无缝适配**：一键开启，无缝覆盖 Koishi 控制台所有卡片、侧边栏、表单输入框、按钮与 Markdown 渲染。
- ⚡ **极速切片**：基于 `@free-fonts/lxgw-wenkai` 的 Unicode 256 切片 WOFF2 字体，首屏仅需加载数 KB 切片，按需请求，告别动辄数十兆的完整字体下载延迟。
- 🎨 **开箱即用**：零额外配置，安装并启用后刷新控制台即可享受文楷的高级书法质感。

## 📦 安装与使用

在你的 Koishi 项目根目录下运行：

```bash
# npm
npm install koishi-plugin-theme-lxgw-wenkai

# yarn
yarn add koishi-plugin-theme-lxgw-wenkai
```

然后在 `koishi.yml` 启用即可：

```yaml
plugins:
  theme-lxgw-wenkai:
```

## 📄 开源许可

本项目采用 [MIT License](LICENSE) 许可开源。字体遵循 SIL Open Font License 1.1。
