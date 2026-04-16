import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PencilIcon, CreditCardIcon, Trash2Icon } from 'lucide-react';
import { PaymentMethod } from '../../domain/paymentMethods.schema';

interface PaymentCardsProps {
  paymentMethods: PaymentMethod[];
  onEdit: (method: PaymentMethod) => void;
  onDelete: (id: string) => void;
}

export const PaymentCards: React.FC<PaymentCardsProps> = ({
  paymentMethods,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {paymentMethods.map((card) => (
        <Card key={card.id} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCardIcon className="w-5 h-5" />
              <span>{card.cardType}</span>
            </CardTitle>
            <CardAction className="space-x-2">
              <Button size="sm" variant="outline" onClick={() => onEdit(card)}>
                <PencilIcon className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDelete(card.id)}
              >
                <Trash2Icon className="w-4 h-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="font-mono text-lg">{card.cardNumber}</p>
            <p>Card Holder: {card.cardHolderName}</p>
            <p>Expiry: {card.expiryDate}</p>
            {card.billingAddress && (
              <p>Billing Address: {card.billingAddress}</p>
            )}
            {card.isDefault && (
              <p className="text-green-600 font-semibold">Default Card</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
