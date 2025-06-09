import { IBasicTemplate } from "@/interfaces/IBasicTemplate";

export abstract class TemplatePlugin {
  public baseDir: string;

  constructor(template: IBasicTemplate, baseDir: string) {}
  abstract resolve(): IBasicTemplate;
}
