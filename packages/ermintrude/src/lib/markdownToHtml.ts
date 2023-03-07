import marked from "marked";
import fs from "fs";

export const markdownToHtml = (filePath) => {
  const markdown = fs.readFileSync(filePath, "utf8");
  const html = marked(markdown);
  return html;
};
