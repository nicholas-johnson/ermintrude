export interface PageData {
  path: string;
  template: string;
  data: {
    content: string | string[];
  };
  transformedData: {
    markdown?: string;
    html?: string;
  };
}
