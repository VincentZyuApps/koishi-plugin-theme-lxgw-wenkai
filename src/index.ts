import { Context, Schema } from 'koishi'
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'

export const name = 'theme-lxgw-wenkai'
export const inject = ['console']

export interface Config {
  colorPreset: 'default' | 'lxgw-blue' | 'lxgw-autumn' | 'custom'
  customLightColor?: string
  customDarkColor?: string
}

export const Config: Schema<Config> = Schema.intersect([
  Schema.object({
    colorPreset: Schema.union([
      Schema.const('default').description('Koishi 原版配色（仅应用霞鹜文楷字体）'),
      Schema.const('lxgw-blue').description('霞鹜天青（现代蓝白黑 · 示范图落霞长天风格）'),
      Schema.const('lxgw-autumn').description('秋水长天（青翠水墨 · 示范图竹青雅致风格）'),
      Schema.const('custom').description('自定义专属主色调（展开拾色器）'),
    ]).default('lxgw-blue').description('主题配色方案预设'),
  }).description('基础配色设置'),
  Schema.union([
    Schema.object({
      colorPreset: Schema.const('custom'),
      customLightColor: Schema.string().role('color').default('#0077c8').description('浅色模式主色调 (Light Primary Color)'),
      customDarkColor: Schema.string().role('color').default('#38bdf8').description('深色模式主色调 (Dark Primary Color)'),
    }).description('自定义色彩微调'),
    Schema.object({}),
  ]),
]) as Schema<Config>

export function apply(ctx: Context, config: Config) {
  ctx.inject(['console'], (ctx) => {
    // 优先通过整合包内部工作区路径暴露，解决符号链接逃逸导致的 Vite outside allow list 问题
    const entryDir = resolve(ctx.baseDir, 'node_modules/koishi-plugin-theme-lxgw-wenkai')
    ctx.console.addEntry(process.env.KOISHI_BASE ? [
      process.env.KOISHI_BASE + '/dist/index.js',
      process.env.KOISHI_BASE + '/dist/style.css',
    ] : {
      dev: resolve(entryDir, 'dist'), // 直接使用预打包产物，毫秒级即时生效且无沙箱限制
      prod: resolve(entryDir, 'dist'),
    })

    // 广播当前配置给控制台前端，实现即时热更新生效
    const syncStyle = () => {
      ctx.console.broadcast('theme-lxgw-wenkai/update-style', {
        preset: config.colorPreset,
        customLight: config.customLightColor,
        customDark: config.customDarkColor,
      })
    }

    ctx.on('ready', () => {
      syncStyle()
    })
  })
}
