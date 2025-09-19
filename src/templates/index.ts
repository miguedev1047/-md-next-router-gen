import { TemplateContext } from '../types/index.js'

export const createPageTemplate = ({ dirName }: TemplateContext) =>
  `export default function PageComponent() {
  return <div>Hello from "/${dirName}"</div>
}
`

export const createLayoutTemplate = ({ isTypescript }: TemplateContext) =>
  isTypescript
    ? `export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
`
    : `export default function LayoutComponent({ children }) {
  return <main>{children}</main>
}
`

export const createTemplateTemplate = ({ isTypescript }: TemplateContext) =>
  isTypescript
    ? `export default function TemplateComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
`
    : `export default function TemplateComponent({ children }) {
  return <main>{children}</main>
}
`

export const createDefaultTemplate = ({
  dirName,
  isTypescript,
}: TemplateContext) =>
  isTypescript
    ? `export default async function Default({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return  <div>Hello from "/${dirName}"</div>
}`
    : `export default async function Default({ params }) {
  return  <div>Hello from "/${dirName}"</div>
}`

export const createRouteTemplate = ({ dirName }: TemplateContext) =>
  `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET> Hello from: '/${dirName}'!" });
}

export async function POST() {
  return NextResponse.json({ message: "POST> Hello from: '/${dirName}'!" });
}

export async function PUT() {
  return NextResponse.json({ message: "PUT> Hello from: '/${dirName}'!" });
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE> Hello from: '/${dirName}'!" });
}
`

export const createLoadingTemplate = ({ dirName }: TemplateContext) =>
  `export default function LoadingComponent() {
  return <div>Loading from "/${dirName}"...</div>
}
`

export const createErrorTemplate = ({ isTypescript }: TemplateContext) =>
  isTypescript
    ? `'use client'

export default function ErrorComponent({ error }: { error: Error }) {
  return <div>Error: {error.message}</div>
}
`
    : `'use client'

export default function ErrorComponent({ error }) {
  return <div>Error: {error.message}</div>
}
`
