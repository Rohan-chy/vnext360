//method to filter out assests used in this page
const filterAssetsForPage = (editor: any, page: any) => {
  const usedAssets: any[] = [];
  const allAssets = editor.AssetManager.getAll();

  const gatherAssets = (components: any[]) => {
    components.forEach((cmp: any) => {
      if (cmp.attributes?.src) {
        const asset = allAssets.find((a: any) => a.src === cmp.attributes.src);
        if (asset && !usedAssets.find((a) => a.src === asset.src)) {
          usedAssets.push(asset);
        }
      }
      if (cmp.components?.length) gatherAssets(cmp.components);
    });
  };

  page.get('frames')?.forEach((frame: any) => {
    gatherAssets(frame.component?.components || []);
  });

  return usedAssets;
};

//payload maker
export const buildPagePayload = (editor: any, page: any) => {
  const pageName = page.get('name') || 'Untitled Page';
  const frames = page.get('frames') || [];

  const projectData = {
    dataSources: [],
    assets: filterAssetsForPage(editor, page), // only assets used in this page
    styles: editor.getStyle(),
    pages: [
      {
        ...page.toJSON(), // only the selected page
        frames,
      },
    ],
    symbols: editor.getComponents(),
    custom: editor.getProjectData().custom || {},
  };

  return {
    id: page.get('backendId'),
    name: pageName,
    slug: pageName.toLowerCase().replace(/\s+/g, '-'),
    grapesData: JSON.stringify(projectData),
    isPublished: true,
  };
};

// export const buildPagePayload = (editor: any, page: any) => {
//     const pageName = page.get("name") || "Untitled Page";

//     return {
//         id: page.get("backendId"),
//         name: pageName,
//         slug: pageName.toLowerCase().replace(/\s+/g, "-"),
//         grapesData: JSON.stringify(editor.getProjectData()),
//         isPublished: true,
//     };
// };

export const exportPage = ({
  editor,
  createPage,
  updatePage,
}: {
  editor: any;
  createPage: Function;
  updatePage: Function;
}) => {
  const page = editor.Pages.getSelected();
  if (!page) throw new Error('No page selected');

  const payload = buildPagePayload(editor, page);
  const backendId = page.get('backendId');

  if (backendId) {
    updatePage(payload);
  } else {
    createPage(payload);
  }
};
