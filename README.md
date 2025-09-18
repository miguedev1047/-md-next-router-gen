# next-router-gen

**next-router-gen** is a developer tool for Next.js projects using the **App Router**. It watches your `app/` (or `src/app/`) directory in real time and automatically generates boilerplate code for `page.tsx`, `layout.tsx`, and `route.ts` files when they are created empty.

This saves you time from writing repetitive code structures manually.

## ✨ Features

- Detects whether your project uses `./app` or `./src/app`.
- Supports **TypeScript**.
- Real-time **file watching**.
- Auto-generates boilerplate for:
  - `page.tsx`
  - `layout.tsx`
  - `route.ts`,
  - `error.ts`,
  - `loading.ts`,
- Configuration file `next-router-gen.config.json` is automatically created.

## 📦 Installation

```bash
npm install -D next-router-gen
```

With Yarn:

```bash
yarn add -D next-router-gen
```

With Bun:

```bash
bun add next-router-gen -dev
```

## 🚀 Usage

Run the watcher in your Next.js project:

```bash
npx next-router-gen
```

Keep it running while you develop. Whenever you create an empty file (`page.tsx`, `layout.tsx`, `route.ts`, `loading.ts` or `error.ts`), the boilerplate will be inserted automatically.

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

## 📂 Generated Config

When running for the first time, a file called `next-router-gen.config.json` will be generated:

```json
{
  "appDir": "./src/app",
}
```

## 🛠 Scripts (recommended)

In your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "routes:watch": "@md/next-router-gen"
  }
}
```

Run them together in two terminals:

```bash
npm run dev
npm run routes:watch
```

## 📌 Roadmap

- Add CLI subcommands (`init`, `watch`, `generate`).
- Allow custom boilerplate templates via configuration.

## 📄 License

MIT © 2025
