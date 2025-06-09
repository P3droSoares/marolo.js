import { IBasicTemplate } from "../interfaces/IBasicTemplate";
import { TemplatePlugin } from "../plugins/templatePlugin";

export class BasicTemplate extends TemplatePlugin {
  private template: IBasicTemplate;
  public baseDir: string;

  constructor(template: IBasicTemplate, baseDir: string) {
    super(template, baseDir);
    this.template = template;
    this.baseDir = baseDir;
  }

  resolve(): IBasicTemplate {
    return this.template;
  }
}
