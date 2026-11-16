import { Context } from 'koishi'
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'
import { Config } from './config'

export const name = 'theme-lxgw-wenkai'
export const inject = ['console']

export { Config } from './config'
export { usage } from './usage'

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
