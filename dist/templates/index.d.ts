import { TemplateContext } from '../types/index.js';
export declare const createPageTemplate: ({ dirName }: TemplateContext) => string;
export declare const createLayoutTemplate: ({ isTypescript }: TemplateContext) => "export default function LayoutComponent({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return <main>{children}</main>\n}\n" | "export default function LayoutComponent({ children }) {\n  return <main>{children}</main>\n}\n";
export declare const createTemplateTemplate: ({ isTypescript }: TemplateContext) => "export default function TemplateComponent({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return <main>{children}</main>\n}\n" | "export default function TemplateComponent({ children }) {\n  return <main>{children}</main>\n}\n";
export declare const createDefaultTemplate: ({ dirName, isTypescript, }: TemplateContext) => string;
export declare const createRouteTemplate: ({ dirName }: TemplateContext) => string;
export declare const createLoadingTemplate: ({ dirName }: TemplateContext) => string;
export declare const createErrorTemplate: ({ isTypescript }: TemplateContext) => "'use client'\n\nexport default function ErrorComponent({ error }: { error: Error }) {\n  return <div>Error: {error.message}</div>\n}\n" | "'use client'\n\nexport default function ErrorComponent({ error }) {\n  return <div>Error: {error.message}</div>\n}\n";
//# sourceMappingURL=index.d.ts.map