import { MaroloJs } from "@/index";
import { basicTemplate } from "@/templates/basic";

test("Gerar esquema de arquivos e pasta com Forge", () => {
  MaroloJs.scaffold(basicTemplate, "./gasola-app");
});
