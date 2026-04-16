'use client';
import { useEffect, useRef, useState } from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import {
  layoutSidebarButtons,
  canvasFullSize,
} from '@grapesjs/studio-sdk-plugins';
import '@grapesjs/studio-sdk/style';

// Import React renderer plugin for the editor
import rendererReact from '@grapesjs/studio-sdk-plugins/dist/rendererReact';

// Import React renderer for the project JSON
import { reactRendererConfig } from '../../application/utils/reactRendererConfig';
import { customBlocksPlugin } from '../../application/utils/customBlocksPlugin';
import { useCreatePage } from '../../application/usecases/useCreatePage';
import { usePutPage } from '../../application/usecases/usePutPage';
import { exportPage } from '../../application/utils/exportPage';
import { useGetPage } from '../../application/usecases/useGetPage';
import { useDeletePage } from '../../application/usecases/useDeletePage';
import { removePage } from '../../application/utils/removePage';
import { loadPages } from '../../application/utils/loadPages';
import { homePageData } from '../../application/utils/homePage';

export default function PageBuilder() {
  const editorRef = useRef<any>(null);
  const [editorReady, setEditorReady] = useState(false);

  const { isLoading } = useGetPage();
  const data = homePageData;
  const { mutate: createPage } = useCreatePage();
  const { mutate: updatePage } = usePutPage();
  const { mutate: deletePage } = useDeletePage();

  useEffect(() => {
    if (!editorReady) return;
    if (isLoading) return;
    if (!data?.data?.length) {
      editorRef.current?.load(); // fallback
      return;
    }

    const loaded = loadPages(editorRef.current, data.data);

    if (!loaded) {
      editorRef.current.load();
    }
  }, [editorReady, data, isLoading]);

  const handleExport = () => {
    const editor = editorRef.current;
    if (!editor) {
      console.error('Editor not ready');
      return;
    }

    try {
      exportPage({
        editor,
        createPage,
        updatePage,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handlePreview = () => {
    window.open('/client', '_blank');
  };

  return (
    <div style={{ height: '100vh' }}>
      <button
        onClick={handleExport}
        style={{
          position: 'absolute',
          top: 16,
          right: 400,
          zIndex: 9999,
          padding: '4px 4px',
          background: '#4f46e5',
          color: '#fff',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Publish
      </button>
      <button
        onClick={handlePreview}
        style={{
          position: 'absolute',
          top: 16,
          right: 460,
          zIndex: 9999,
          padding: '4px 4px',
          border: '1px solid #4f46e5',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Preview
      </button>

      <StudioEditor
        options={{
          licenseKey: `${process.env.NEXT_PUBLIC_GRAPESJS_LICENSEKEY}`,
          project: { type: 'react' },
          layout: layoutSidebarButtons.createLayoutConfig(),
          gjsOptions: {
            storageManager: {
              type: 'local',
              autosave: true,
              autoload: false,
              stepsBeforeSave: 1,
            },
          },

          onReady: async (editor) => {
            editorRef.current = editor;
            setEditorReady(true);

            editor.addStyle(`
              * {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                  "Helvetica Neue", sans-serif !important;
              }
            `);

            removePage({
              // delete page from grapesjs
              editor,
              deletePage,
            });
          },

          plugins: [
            rendererReact.init(reactRendererConfig),
            canvasFullSize,
            customBlocksPlugin, // custom components as blocks
          ],
        }}
      />
    </div>
  );
}
