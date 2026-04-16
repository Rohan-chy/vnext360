import { SkeletonAvatar } from './SkeletonAvatar';
import { SkeletonText } from './SkeletonText';

export const SkeletonCard = () => {
  return (
    <div
      style={{
        width: 180,
        padding: 16,
        borderRadius: 20,
        background: '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <SkeletonAvatar size={44} />

      <SkeletonText lines={2} />
    </div>
  );
};
