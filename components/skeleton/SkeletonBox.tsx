export const SkeletonBox = ({ width, height }: any) => (
  <div
    style={{
      width,
      height,
      backgroundColor: '#e5e7eb',
      borderRadius: 8,
      animation: 'pulse 1.5s infinite',
    }}
  />
);
