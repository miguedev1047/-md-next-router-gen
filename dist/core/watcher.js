import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';
import { createConfig, getBoilerplate } from '../helpers/index.js';
const FILES_ON_VIEW = [
    'page.tsx',
    'layout.tsx',
    'route.ts',
    'page.jsx',
    'layout.jsx',
    'route.js',
];
export function startWatcher() {
    const { appDir } = createConfig();
    const watcher = chokidar.watch(`${appDir}/**/*.{ts,tsx}`, {
        // eslint-disable-next-line no-useless-escape
        ignored: /(^|[\/\\])\../,
        persistent: true,
    });
    watcher.on('add', (filePath) => {
        const fileName = path.basename(filePath);
        if (!FILES_ON_VIEW.includes(fileName))
            return;
        const content = fs.readFileSync(filePath, 'utf8').trim();
        if (content.length > 0)
            return;
        const boilerplate = getBoilerplate(fileName, filePath);
        if (boilerplate) {
            fs.writeFileSync(filePath, boilerplate);
            console.log(`✨ Route filled in: ${filePath}`);
        }
    });
}
//# sourceMappingURL=watcher.js.map