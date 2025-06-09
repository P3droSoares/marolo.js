export interface IBasicTemplate {
  name: string;
  type: "file" | "folder";
  children?: IBasicTemplate[];
  content?: string;
}
