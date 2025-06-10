import { IBasicTemplate } from "../src/interfaces/IBasicTemplate";
import { BasicTemplate } from "../src/models/basicTemplate";

const baseDir = ".";

const exampleTemplate: IBasicTemplate = {
  name: "MyApplication",
  type: "folder",
  children: [
    {
      name: "main.ts",
      type: "file",
      content: `import { startApp } from './core/startup';

startApp();`,
    },
    {
      name: "config",
      type: "folder",
      children: [
        {
          name: "env.ts",
          type: "file",
          content: `export const ENV = {
  PORT: 3000,
  NODE_ENV: 'development',
};`,
        },
        {
          name: "logger.ts",
          type: "file",
          content: `export const log = (message: string) => {
  console.log('[LOG]', message);
};`,
        },
      ],
    },
    {
      name: "core",
      type: "folder",
      children: [
        {
          name: "app.ts",
          type: "file",
          content: `export const initApp = () => {
  console.log('App initialized.');
};`,
        },
        {
          name: "startup.ts",
          type: "file",
          content: `import { initApp } from './app';

export const startApp = () => {
  console.log('Starting application...');
  initApp();
};`,
        },
      ],
    },
    {
      name: "services",
      type: "folder",
      children: [
        {
          name: "userService.ts",
          type: "file",
          content: `export const getUser = (id: number) => {
  return { id, name: 'User Name' };
};`,
        },
        {
          name: "authService.ts",
          type: "file",
          content: `export const login = (username: string, password: string) => {
  return username === 'admin' && password === '1234';
};`,
        },
      ],
    },
    {
      name: "utils",
      type: "folder",
      children: [
        {
          name: "dateHelper.ts",
          type: "file",
          content: `export const getCurrentDate = (): string => {
  return new Date().toISOString();
};`,
        },
        {
          name: "stringHelper.ts",
          type: "file",
          content: `export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};`,
        },
      ],
    },
    {
      name: "types",
      type: "folder",
      children: [
        {
          name: "user.ts",
          type: "file",
          content: `export interface User {
  id: number;
  name: string;
  email: string;
}`,
        },
        {
          name: "auth.ts",
          type: "file",
          content: `export interface AuthResponse {
  token: string;
  expiresIn: number;
}`,
        },
      ],
    },
    {
      name: "tests",
      type: "folder",
      children: [
        {
          name: "userService.test.ts",
          type: "file",
          content: `import { getUser } from '../services/userService';

console.log(getUser(1));`,
        },
        {
          name: "authService.test.ts",
          type: "file",
          content: `import { login } from '../services/authService';

console.log(login('admin', '1234'));`,
        },
      ],
    },
    {
      name: "README.md",
      type: "file",
      content: `# MyApplication

Este é um projeto de exemplo em TypeScript.`,
    },
    {
      name: "tsconfig.json",
      type: "file",
      content: `{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "include": ["./"]
}`,
    },
    {
      name: ".gitignore",
      type: "file",
      content: `node_modules/
dist/
.env`,
    },
  ],
};

export const basicExampleTemplate = new BasicTemplate(exampleTemplate, baseDir);
