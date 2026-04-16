import { SkeletonCard } from '@/components/skeleton/SkeletonCard';

export const SpecialitiesSliderSkeleton = () => {
  return (
    <section style={{ padding: '0 16px' }}>
      <h2 style={{ fontSize: 22, fontWeight: 700 }}>Specialities</h2>

      <div style={{ display: 'flex', gap: 40 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  );
};
