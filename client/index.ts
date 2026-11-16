import { Context } from '@koishijs/client'
import './style.scss'

export default (ctx: Context) => {
  // 注册内置预设主题到 Koishi 控制台外观设置
  ctx.theme({
    id: 'lxgw-blue-light',
    name: '霞鹜天青 (现代蓝白)',
  })

  ctx.theme({
    id: 'lxgw-blue-dark',
    name: '霞鹜夜墨 (暗黑天青)',
  })

  ctx.theme({
    id: 'lxgw-autumn-light',
    name: '秋水长天 (竹青雅致)',
  })

  ctx.theme({
    id: 'lxgw-autumn-dark',
    name: '秋水长天 (翡翠夜墨)',
  })

  // 监听插件配置热更新，支持通过插件配置强制指定配色或自定义拾色
  ctx.console?.addListener?.('theme-lxgw-wenkai/update-style', (data: { preset?: string; customLight?: string; customDark?: string }) => {
    if (!data) return
    const root = document.documentElement
    if (data.preset === 'custom') {
      if (data.customLight) {
        root.style.setProperty('--k-color-primary', data.customLight)
      }
    }
  })
}
