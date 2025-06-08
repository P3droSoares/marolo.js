import { TemplateValidationError } from "@/exceptions/TemplateValidationError";
import { BasicTemplate } from "@/types/templates/BasicTemplate";
import fs from "fs";
import path from "path";

export function scaffold(template: BasicTemplate, basePath = ".") {
  const currentPath = path.join(basePath, template.name);

  if (template.type === "folder") {
    fs.mkdirSync(currentPath, { recursive: true });
    template.children?.forEach((child) => scaffold(child, currentPath));
  } else if (template.type === "file") {
    if (template.children) {
      throw new TemplateValidationError(
        "'file' type nodes must not have children.",
      );
    }

    let content = "";

    fs.writeFileSync(currentPath, content);
  }
}
