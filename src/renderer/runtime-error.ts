import type { RuntimeStatus } from '../shared/contracts'

const runtimeFailurePrefixes = [
  '官方 DSH 启动失败（退出码 ',
  '官方 DSH 在规定时间内未返回本地访问地址',
  '无法启动官方 DSH 进程'
]

export function isDshRuntimeFailure(status: RuntimeStatus, error: string | null): error is string {
  return status === 'failed' && error !== null && runtimeFailurePrefixes.some((prefix) => error.startsWith(prefix))
}

export function dshRuntimeFailureDetail(error: string): string {
  const separator = error.indexOf('：')
  return separator >= 0 ? error.slice(separator + 1).trim() : ''
}
