# 📦 Marolo.js - Usage Tutorial

This is a basic guide to help you get started with **Marolo.js**, an extensible library for generating folder and file structures using declarative templates with support for custom plugins.

---

## ✅ Requirements

* Node.js installed
* TypeScript (optional but recommended)
* A project with a basic folder structure

---

## 🚀 Installation

Install the package via NPM:

```bash
npm install marolo.js
```

---

## 🧐 Concept

Marolo.js works with **declarative templates** and allows you to create **custom plugins** to generate specific structures like React components, Node.js structures, and much more.

---

## 🔧 Basic Usage Example

```ts
import { MaroloJs } from "marolo.js";
import { exampleTemplate } from "./template.example";

MaroloJs.scaffold(exampleTemplate);
```

---

## 🏗️ Template Construction Example

```ts
import { IBasicTemplate, BasicTemplate } from "marolo.js";

const baseDir = ".";

const exampleTemplate: IBasicTemplate = {
  name: "MyApp",
  type: "folder",
  children: [
    {
      name: "index.ts",
      type: "file",
      content: `console.log('Hello from Marolo.js');`,
    },
    {
      name: "utils",
      type: "folder",
      children: [
        {
          name: "math.ts",
          type: "file",
          content: `export const sum = (a: number, b: number) => a + b;`,
        },
      ],
    },
  ],
};

export const basicExampleTemplate = new BasicTemplate(exampleTemplate, baseDir);
```

---

## 🤝 Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📝 License

MIT

---

GitHub: [https://github.com/P3droSoares/marolo.js](https://github.com/P3droSoares/marolo.js)
