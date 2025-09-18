import path from 'path';
export function getBoilerplate(fileName, filePath) {
    const dirName = path.basename(path.dirname(filePath)) || 'app';
    const isTypescript = fileName.endsWith('.ts') || fileName.endsWith('.tsx');
    const templates = {
        page: () => `export default function Page() {
  return <div>${dirName} page</div>
}
`,
        layout: () => isTypescript
            ? `export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>
}
`
            : `export default function Layout({ children }) {
  return <main>{children}</main>
}
`,
        route: () => `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from ${dirName}" });
}
`,
        loading: () => `export default function Loading() {
  return <div>Loading ${dirName}...</div>
}
`,
        error: () => isTypescript
            ? `export default function Error({ error }: { error: Error }) {
  return <div>Error: {error.message}</div>
}
`
            : `export default function Error({ error }) {
  return <div>Error: {error.message}</div>
}
`,
    };
    const baseName = fileName.split('.')[0];
    return templates[baseName]?.() || '';
}
//# sourceMappingURL=boilerplate.js.map