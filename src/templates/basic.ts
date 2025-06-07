import { TemplateNode } from "@/models/scaffold";

export const basicTemplate: TemplateNode = {
  name: "MyComponent",
  type: "folder",
  children: [
    {
      name: "index.tsx",
      type: "file",
    },
    {
      name: "styles.ts",
      type: "file",
    },
    {
      name: "hooks",
      type: "folder",
      children: [{ name: "useExample.ts", type: "file" }],
    },
  ],
};
