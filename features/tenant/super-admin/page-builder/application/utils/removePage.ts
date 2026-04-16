/** Delete page from backend first, then remove from GrapesJS */
export const removePage = ({
  editor,
  deletePage,
}: {
  editor: any;
  deletePage: Function;
}) => {
  const originalRemove = editor.Pages.remove.bind(editor.Pages);

  editor.Pages.remove = async (page: any, options: any = {}) => {
    const backendId = page.get('backendId');

    if (backendId) {
      try {
        await deletePage({ id: backendId });
      } catch (err) {
        console.error('Backend delete failed', err);
        return;
      }
    }

    originalRemove(page, options);
  };
};
