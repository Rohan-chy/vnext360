import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CalendarIcon,
  CreditCardIcon,
  CheckCircleIcon,
  XCircleIcon,
} from 'lucide-react';
import { Subscription } from '../domain/subscription.schema';

interface Props {
  subscriptions: Subscription[];
  onCancel: (id: string) => void;
}

export const SubscriptionCard: React.FC<Props> = ({
  subscriptions,
  onCancel,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {subscriptions.map((sub) => (
        <Card key={sub.id} className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{sub.planName}</CardTitle>

              {sub.status === 'Active' ? (
                <Badge className="bg-green-600">Active</Badge>
              ) : (
                <Badge variant="destructive">Canceled</Badge>
              )}
            </div>

            <CardDescription>{sub.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Price */}
            <div className="flex items-center gap-2 text-lg font-semibold">
              <CreditCardIcon className="w-4 h-4" />${sub.price} /{' '}
              {sub.billingCycle}
            </div>

            {/* Billing */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="w-4 h-4" />
              Next Billing: {sub.nextBillingDate}
            </div>

            {/* Features */}
            <div className="space-y-2">
              {sub.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-green-600" />
                  {feature}
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="outline">Manage</Button>

            {sub.status === 'Active' && (
              <Button
                variant="destructive"
                onClick={() => onCancel(sub.id)}
                className="flex items-center gap-2"
              >
                <XCircleIcon className="w-4 h-4" />
                Cancel
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
