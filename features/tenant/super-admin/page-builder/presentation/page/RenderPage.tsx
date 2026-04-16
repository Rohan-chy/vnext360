'use client';
import { useEffect, useRef, useState } from 'react';
import { RenderProject } from '@grapesjs/studio-sdk-plugins/dist/rendererReact/rendererProject';
import { useIframeRenderer } from '../../application/utils/useIframeRenderer';
import { reactRendererConfig } from '../../application/utils/reactRendererConfig';
import { useGetPage } from '../../application/usecases/useGetPage';
import { homePageData } from '../../application/utils/homePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function RenderWebPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const reactRoot = useIframeRenderer(iframeRef);

  const [projectData, setProjectData] = useState<any>(null);
  const [pageId, setPageId] = useState('');

  // const { data } = useGetPage();
  const data = homePageData;
  // console.log(data)

  useEffect(() => {
    if (!data?.data?.length) return;

    const page = data.data[0];
    const grapesProject = JSON.parse(page.grapesData);
    setProjectData(grapesProject);

    if (grapesProject.pages?.length) {
      setPageId(grapesProject.pages[0].id);
    }
  }, [data]);

  const queryClient = new QueryClient();
  // Render React content inside iframe
  useEffect(() => {
    if (!reactRoot || !projectData) return;

    reactRoot.render(
      <QueryClientProvider client={queryClient}>
        <RenderProject
          projectData={projectData}
          config={reactRendererConfig}
          pageId={pageId}
        />
      </QueryClientProvider>
    );
  }, [reactRoot, projectData, pageId]);

  // Resize iframe based on content
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!iframe.contentWindow || !iframe.contentDocument) return;
      const doc = iframe.contentDocument;
      iframe.style.height = doc.body.scrollHeight + 'px';
    });

    if (iframe.contentDocument?.body) {
      resizeObserver.observe(iframe.contentDocument.body);
    }

    return () => resizeObserver.disconnect();
  }, [projectData]);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: '100%',
        height: '0', // will grow automatically
        border: 'none',
        display: 'block',
      }}
      scrolling="no"
    />
  );
}
