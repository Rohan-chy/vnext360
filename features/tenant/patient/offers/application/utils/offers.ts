export type Offer = {
  id: number;
  title: string;
  description: string;
  category: string;
  discount: string;
  image: string;
};

export const offerCategories = [
  'All',
  'Doctor',
  'Lab',
  'Pharmacy',
  'Surgery',
  'Membership',
];

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Flat 50% Off Full Body Checkup',
    description: 'Comprehensive blood test package at discounted price.',
    category: 'Lab',
    discount: '50% OFF',
    image:
      'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Online Consultation at ₹99',
    description: 'Consult top doctors online at affordable price.',
    category: 'Doctor',
    discount: '₹99',
    image:
      'https://images.pexels.com/photos/4173256/pexels-photo-4173256.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: '20% Off on Medicines',
    description: 'Get discount on all prescription medicines.',
    category: 'Pharmacy',
    discount: '20% OFF',
    image:
      'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Knee Replacement Package',
    description: 'Complete surgery package with post-care support.',
    category: 'Surgery',
    discount: 'Save ₹15,000',
    image:
      'https://images.pexels.com/photos/4163413/pexels-photo-4163413.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Health Prime Membership',
    description: 'Free consultations + Free delivery for 1 year.',
    category: 'Membership',
    discount: '30% OFF',
    image:
      'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
