import { Schema } from 'koishi'

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
    ]).role('radio').default('lxgw-blue').description('主题配色方案预设'),
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
