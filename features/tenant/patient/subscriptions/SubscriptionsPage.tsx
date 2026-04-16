'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Subscription } from './domain/subscription.schema';
import { SubscriptionCard } from './presentation/SubscriptionCard';
import { H4 } from '@/components/custom-components/typography/H4';
import { CustomButton } from '@/components/extended/extended-button';

const SubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: '1',
      planName: 'Premium Health Plan',
      description: 'Advanced medicine reminders & pharmacy tracking',
      price: 9.99,
      billingCycle: 'Monthly',
      nextBillingDate: '2026-04-01',
      status: 'Active',
      features: [
        'Unlimited Medicine Reminders',
        'Nearby Pharmacy Tracking',
        'Priority Support',
      ],
    },
    {
      id: '2',
      planName: 'Family Health Plan',
      description: 'Manage health reminders for the entire family',
      price: 19.99,
      billingCycle: 'Monthly',
      nextBillingDate: '2026-04-12',
      status: 'Active',
      features: [
        'Up to 5 family members',
        'Shared reminders',
        'Health reports',
      ],
    },
  ]);

  const handleCancelSubscription = (id: string) => {
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: 'Canceled' } : sub))
    );
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <H4>My Subscriptions</H4>
        <div className="absolute right-6 top-6">
          <CustomButton>
            <PlusIcon className="w-4 h-4" />
            Browse Plans
          </CustomButton>
        </div>
      </div>
      <div className="pt-6">
        <SubscriptionCard
          subscriptions={subscriptions}
          onCancel={handleCancelSubscription}
        />
      </div>
    </div>
  );
};

export default SubscriptionsPage;
