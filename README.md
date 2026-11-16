# koishi-plugin-theme-lxgw-wenkai

[![npm](https://img.shields.io/npm/v/koishi-plugin-theme-lxgw-wenkai)](https://www.npmjs.com/package/koishi-plugin-theme-lxgw-wenkai)
[![License: MIT AND OFL-1.1](https://img.shields.io/badge/License-MIT%20AND%20OFL--1.1-blue.svg)](LICENSE)

极速切片版 [霞鹜文楷 (LXGW WenKai)](https://github.com/lxgw/LxgwWenKai) 全局控制台字体与**新中式现代天青·水墨配色主题**插件，专为 Koishi 控制台 WebUI 设计。

## ✨ 特性

### 📸 效果预览

#### 浅色主题 · 霞鹜天青（现代蓝白）

![浅色主题 · 霞鹜天青](https://cdn.jsdelivr.net/gh/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai@main/docs/images/preview/light.png)

#### 深色主题 · 霞鹜夜墨（暗黑天青）

![深色主题 · 霞鹜夜墨](https://cdn.jsdelivr.net/gh/VincentZyuApps/koishi-plugin-theme-lxgw-wenkai@main/docs/images/preview/dark.png)

- 🌸 **无缝适配**：一键开启，无缝覆盖 Koishi 控制台所有卡片、侧边栏、表单输入框、按钮与 Markdown 渲染。
- ⚡ **极速切片**：基于 `@free-fonts/lxgw-wenkai` 的 Unicode 256 切片 WOFF2 字体，按需拉取微小分片（数 KB），零等待秒开。
- 🎨 **新中式现代配色 (v0.2.0)**：
  - **霞鹜天青（现代蓝白黑）**：灵感源自《滕王阁序》“落霞与孤鹜齐飞，秋水共长天一色”，长天蓝与纯净墨黑白底的极简高雅组合。
  - **秋水长天（竹青水墨）**：灵动清雅的翠竹青墨绿配色。
  - **全自动白天/黑夜双模适配**：跟随系统或在外观设置中自由切换浅色/深色主题。
  - **自定义专属色彩**：支持通过 `role('color')` 交互式拾色器微调你的专属主色调，保存即时热生效。

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

你也可以在控制台左下角 **「外观设置」** 的浅色/深色主题下拉菜单中直接选择：
- **浅色主题**：`霞鹜天青 (现代蓝白)` / `秋水长天 (竹青雅致)`
- **深色主题**：`霞鹜夜墨 (暗黑天青)` / `秋水长天 (翡翠夜墨)`

## 📄 开源许可

本项目采用**代码与字体双重开源许可（Dual / Hybrid License）**：

- **插件代码（TypeScript / SCSS）**：采用 [MIT License](LICENSE) 许可开源。
- **霞鹜文楷字体**：基于 [SIL Open Font License 1.1](OFL.txt) 授权发行。
  - Copyright 2021-2026 [LXGW](https://github.com/lxgw/LxgwWenKai)
  - Copyright 2020 [The Klee Project Authors](https://github.com/fontworks-fonts/Klee)
