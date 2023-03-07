import * as ejs from "ejs";
import * as fs from "fs";
import * as marked from "marked";

function generatePage(data: PageData): string {
  // Read the EJS template
  const template = fs.readFileSync(data.template, "utf8");

  // Read the Markdown file and convert it to HTML
  const markdown = fs.readFileSync(data.markdown, "utf8");
  const html = marked(markdown);

  // Generate the sidebar HTML
  const sidebarItems = data.data.sidebar.map(
    (item) => `<li><a href="${item.url}">${item.text}</a></li>`
  );
  const sidebarHtml = `<ul>${sidebarItems.join("")}</ul>`;

  // Render the EJS template with the data
  const renderedHtml = ejs.render(template, {
    sidebar: sidebarHtml,
    content: html,
  });

  return renderedHtml;
}
