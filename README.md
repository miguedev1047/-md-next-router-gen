# next-router-gen

**next-router-gen** is a developer tool for Next.js projects using the **App Router**. It watches your `app/` (or `src/app/`) directory in real time and automatically generates boilerplate code for `page`, `layout`, `template`, `default`, `loading`, `error`, and `route` files when they are created empty.

This saves you time from writing repetitive code structures manually.

## 📷 Showcase
![Watch the full demo](/src/assets/showcase.gif)

## ✨ Features

- Detects whether your project uses `./app` or `./src/app`.
- Supports **TypeScript** & **JavaScript**.
- Real-time **file watching**.
- Auto-generates boilerplate for:
  - `page.tsx`
  - `layout.tsx`
  - `template.tsx`
  - `default.tsx`
  - `error.tsx`,
  - `loading.tsx`
  - `route.ts`,

## 📦 Installation

With npm:

```bash
npm install -D next-router-gen
```

With Yarn:

```bash
yarn add -D next-router-gen
```

With Bun:

```bash
bun add next-router-gen -d
```

## 🚀 Usage

Run the watcher in your Next.js project:

```bash
npx next-router-gen
```

Keep it running while you develop. Whenever you create an empty file (`page.tsx`, `layout.tsx`, `template.tsx`, `default.tsx`, `loading.tsx`, `error.tsx`, or `route.ts`), the boilerplate will be inserted automatically.

## ⚙️ Example

1. You create:

```bash
src/app/home/page.tsx
```

2. The file is auto-filled with:

```tsx
export default function Page() {
  return <div>home page</div>
}
```

## 🛠 Scripts (recommended)

In your `package.json`:

```json
{
  "scripts": {
    "dev": "next-router-gen" // This use --turbo by default ✅
  }
}
```

## 📌 Roadmap

- Add CLI subcommands (`init`, `watch`, `generate`).
- Allow custom boilerplate templates via configuration.

## 📄 License

MIT © 2025
