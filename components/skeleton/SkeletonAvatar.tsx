import { SkeletonBox } from './SkeletonBox';

export const SkeletonAvatar = ({ size = 40 }: { size?: number }) => {
  return (
    <SkeletonBox width={size} height={size} style={{ borderRadius: '50%' }} />
  );
};
