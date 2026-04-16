import { Asset } from '../../domain/pageBuilder.schema';

export const loadPages = (editor: any, records: any[]) => {
  if (!records?.length) return false; // no backend data

  const project = {
    dataSources: [],
    assets: [] as Asset[],
    styles: [],
    pages: [],
    symbols: [],
    custom: { projectType: 'web' },
  };

  records.forEach((record) => {
    const grapes = JSON.parse(record.grapesData);

    grapes.assets?.forEach((asset: Asset) => {
      if (!project.assets.find((a) => a.src === asset.src)) {
        project.assets.push(asset);
      }
    });

    project.styles.push(...(grapes.styles || []));

    const page = grapes.pages?.find(
      (p: any) => p.name === record.slug || p.name === record.name
    );

    if (!page) return;

    page.id = page.id || `page-${record.id}`;
    page.name = record.name;
    page.backendId = record.id;

    project.pages.push(page);
  });

  if (!project.pages.length) return false;

  editor.loadProjectData(project);

  const firstPage = editor.Pages.getAll()[0];
  if (firstPage) editor.Pages.select(firstPage);

  return true; // backend loaded
};
