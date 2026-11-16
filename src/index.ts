import { Context, Schema } from 'koishi'
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'

export const name = 'theme-lxgw-wenkai'
export const inject = ['console']

export interface Config {}
export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.console.addEntry(process.env.KOISHI_BASE ? [
    process.env.KOISHI_BASE + '/dist/index.js',
    process.env.KOISHI_BASE + '/dist/style.css',
  ] : {
    dev: resolve(__dirname, '../client/index.ts'),
    prod: resolve(__dirname, '../dist'),
  })
}
