import { TemplateValidationError } from "../exceptions/TemplateValidationError";
import { IBasicTemplate } from "../interfaces/IBasicTemplate";

const INVALID_CHARS_REGEX = /[<>:"/\\|?*\x00-\x1F]/;

export function templateValidation(
  template: IBasicTemplate,
  pathTrace: string[] = [],
) {
  const fullPath = [...pathTrace, template.name].join("/");

  // 1. Nome obrigatório e válido
  if (!template.name || typeof template.name !== "string") {
    throw new TemplateValidationError(
      `Node at "${fullPath}" must have a valid 'name'.`,
    );
  }

  if (INVALID_CHARS_REGEX.test(template.name)) {
    throw new TemplateValidationError(
      `Invalid characters in node name "${fullPath}".`,
    );
  }

  // 2. Tipo válido
  if (template.type !== "file" && template.type !== "folder") {
    throw new TemplateValidationError(
      `Node "${fullPath}" has invalid type "${template.type}".`,
    );
  }

  // 3. Validação específica por tipo
  if (template.type === "file") {
    if (template.children) {
      throw new TemplateValidationError(
        `'file' type node "${fullPath}" must not have children.`,
      );
    }
  }

  if (template.type === "folder") {
    if ("content" in template && template.content) {
      throw new TemplateValidationError(
        `'folder' type node "${fullPath}" must not have content.`,
      );
    }
  }

  // 4. Validação recursiva dos filhos
  if (template.children && template.type === "folder") {
    const namesSet = new Set<string>();

    for (const child of template.children) {
      if (namesSet.has(child.name)) {
        throw new TemplateValidationError(
          `Duplicate child name "${child.name}" in folder "${fullPath}".`,
        );
      }
      namesSet.add(child.name);

      templateValidation(child, [...pathTrace, template.name]);
    }
  }
}
