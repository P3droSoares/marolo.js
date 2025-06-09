import { IBasicTemplate } from "../interfaces/IBasicTemplate";
import { BasicTemplate } from "../models/basicTemplate";

const demo: IBasicTemplate = {
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

export const demoTemplate = new BasicTemplate(demo, ".");
