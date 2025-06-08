export type BasicTemplate = {
  name: string;
  type: "file" | "folder";
  children?: BasicTemplate[];
};
