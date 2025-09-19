import path from 'path';
export function getRouteSegment(filePath) {
    const normalized = filePath.split(path.sep).join('/');
    const [_, withoutApp] = normalized.split('app/');
    const dir = withoutApp?.replace(/\/[^/]+$/, '');
    return dir || '';
}
//# sourceMappingURL=utils.js.map