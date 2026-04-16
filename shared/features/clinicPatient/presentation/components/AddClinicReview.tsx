'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useState } from 'react';
import clsx from 'clsx';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useAddClinicReview } from '../hooks/review/useAddClinicReview';
import {
  AddClinicReviewSchema,
  addClinicReviewSchema,
} from '../schema/addClinicReview.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { H5 } from '@/components/custom-components/typography/H5';

interface Props {
  clinicId: string;
}

export default function AddClinicReview({ clinicId }: Props) {
  const form = useForm<AddClinicReviewSchema>({
    resolver: zodResolver(addClinicReviewSchema),
    defaultValues: {
      review: '',
    },
  });

  const { mutate: addClinicReview, isPending } = useAddClinicReview();

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const onSubmit = (data: AddClinicReviewSchema) => {
    if (rating === 0) {
      form.setError('review', {
        type: 'manual',
        message: 'Please provide rating',
      });
      return;
    }
    const payload = {
      review: data.review,
      rating,
      clinicId,
    };

    addClinicReview(payload, {
      onSuccess: () => {
        form.reset();
        setRating(0);
      },
    });
  };

  return (
    <div className="w-full space-y-2 p-4 border rounded-xl shadow-sm">
      <H5>Write a Review</H5>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {/* Rating */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="text-2xl"
                >
                  <span
                    className={clsx(
                      'transition-colors',
                      (hover || rating) >= star
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    )}
                  >
                    ★
                  </span>
                </button>
              );
            })}
          </div>

          <FormTextArea
            form={form}
            name="review"
            placeholder="Write your experience..."
            className="border border-black"
          />

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
