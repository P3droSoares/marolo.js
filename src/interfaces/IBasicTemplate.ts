export interface IBasicTemplate {
  name: string;
  type: ChildrenType;
  children?: IBasicTemplate[];
  content?: string;
}

export type ChildrenType = "file" | "folder";
