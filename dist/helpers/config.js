import fs from 'fs';
import path from 'path';
export function detectAppDir() {
    const root = process.cwd();
    const appPath = path.join(root, 'app');
    const srcAppPath = path.join(root, 'src', 'app');
    if (fs.existsSync(appPath))
        return './app';
    if (fs.existsSync(srcAppPath))
        return './src/app';
    throw new Error('❌ Can"t found default paths: ["./app", "./src/app"]');
}
export const appDir = detectAppDir();
//# sourceMappingURL=config.js.map