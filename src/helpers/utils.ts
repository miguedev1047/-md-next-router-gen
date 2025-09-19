import path from 'path'

export function getRouteSegment(filePath: string) {
  const normalized = filePath.split(path.sep).join('/')
  const [_, withoutApp] = normalized.split('app/')
  const dir = withoutApp?.replace(/\/[^/]+$/, '')
  return dir || ''
}
