import { markdownToHtml } from "../lib/markdownToHtml";
import { ErmintrudeOptions } from "../types";

export const ermintrude = (options: ErmintrudeOptions) => {
  const { pages } = options;
  const pageData = pages.map((page) => {
    const { path, template, data } = page;
    const transformedData = {
      markdown: data.content,
      html: markdownToHtml(data.content),
    };
    return {
      path,
      template,
      data,
      transformedData,
    };
  });
  //   const templateData = templates.map((template) => {
  //     const { path, data } = template;
  //     return {
  //       path,
  //       data,
  //     };
  //   });
  const data = {
    pageData,
    // templateData,
  };
  return data;
};
