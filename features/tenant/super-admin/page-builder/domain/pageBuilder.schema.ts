export type Asset = {
  src: string;
  [key: string]: any; // other optional fields
};

export type Page = {
  id: string;
  name: string;
  backendId?: string;
  [key: string]: any; // other page props
};

export type Project = {
  dataSources: any[];
  assets: Asset[];
  styles: any[];
  pages: Page[];
  symbols: any[];
  custom: { projectType: string };
};
