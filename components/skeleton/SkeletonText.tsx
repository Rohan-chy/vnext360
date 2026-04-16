import { SkeletonBox } from './SkeletonBox';

export const SkeletonText = ({ lines = 1 }: { lines?: number }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          height={12}
          width={i === lines - 1 ? '60%' : '100%'} // last line shorter
        />
      ))}
    </div>
  );
};
