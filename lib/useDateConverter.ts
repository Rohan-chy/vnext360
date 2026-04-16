import { useEffect, useRef } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';
import { CreateDoctorFormValues } from '@/features/tenant/super-admin/doctor/domain/createDoctor.schema';

export function useDebouncedDateConverter(
  watch: UseFormWatch<CreateDoctorFormValues>,
  setValue: UseFormSetValue<CreateDoctorFormValues>,
  delay = 300 // debounce delay in ms
) {
  const dobAd = watch('dateOfBirth');
  const dobBs = watch('dateOfBirthNp');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const updatingRef = useRef<'ad' | 'bs' | null>(null);

  useEffect(() => {
    if (!dobAd || updatingRef.current === 'bs') return;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dobAd)) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      try {
        updatingRef.current = 'ad';
        const bs = adToBs(dobAd);
        setValue('dateOfBirthNp', bs, { shouldValidate: true });
      } catch (error) {
        console.error('AD → BS conversion failed', error);
      } finally {
        updatingRef.current = null;
      }
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [dobAd, setValue, delay]);

  useEffect(() => {
    if (!dobBs || updatingRef.current === 'ad') return;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dobBs)) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      try {
        updatingRef.current = 'bs';
        const ad = bsToAd(dobBs);
        setValue('dateOfBirth', ad, { shouldValidate: true });
      } catch (error) {
        console.error('BS → AD conversion failed', error);
      } finally {
        updatingRef.current = null;
      }
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [dobBs, setValue, delay]);
}
