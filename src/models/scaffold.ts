import fs from "fs";
import path from "path";

export function scaffold(template: TemplateNode, basePath = ".") {
  const currentPath = path.join(basePath, template.name);

  if (template.type === "folder") {
    fs.mkdirSync(currentPath, { recursive: true });
    template.children?.forEach((child) => scaffold(child, currentPath));
  } else if (template.type === "file") {
    let content = "";

    fs.writeFileSync(currentPath, content);
  }
}

export type TemplateNode = {
  name: string;
  type: "file" | "folder";
  children?: TemplateNode[];
};
