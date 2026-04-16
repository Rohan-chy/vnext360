'use client';

import React from 'react';
import { Pharmacy } from '../../domain/pharmacy.schema';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import {
  availabilityOptions,
  ratingOptions,
  serviceOptions,
  locationOptions,
} from '../../application/utils/options';
import { PharmacyCard } from './PharmacyCard';

export const PRIMARY = '#0D6641';

export const PHARMACIES: Pharmacy[] = [
  {
    id: 1,
    name: 'Nobel Pharmacy',
    location: 'Biratnagar',
    contactNumber: '9800000001',
    licenseNumber: 'LIC-001',
    services: ['Prescription Medicines', 'OTC Medicines'],
    isOpen24Hours: true,
    homeDelivery: true,
    availability: 'All Days',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
  },
  {
    id: 2,
    name: 'Koshi Pharmacy',
    location: 'Biratnagar',
    contactNumber: '9800000002',
    licenseNumber: 'LIC-002',
    services: ['OTC Medicines'],
    isOpen24Hours: false,
    homeDelivery: true,
    availability: 'Weekdays',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400',
  },
  {
    id: 3,
    name: 'CityCare Pharmacy',
    location: 'Kathmandu',
    contactNumber: '9800000003',
    licenseNumber: 'LIC-003',
    services: ['Prescription Medicines', 'Vaccination'],
    isOpen24Hours: true,
    homeDelivery: false,
    availability: 'All Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400',
  },
];

const PharmacyList: React.FC = () => {
  const form = useForm();

  return (
    <section className="flex flex-col gap-2">
      {/* Filters */}
      <Card className="w-full p-0">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-2">
            <div className="flex justify-between rounded-t bg-green-800 w-full text-white px-2">
              <Form {...form}>
                <form className="flex items-center gap-2">
                  {/* Service */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Location */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent>
                              {locationOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Rating */}
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Ratings" />
                            </SelectTrigger>
                            <SelectContent>
                              {ratingOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Availability */}
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Availability" />
                            </SelectTrigger>
                            <SelectContent>
                              {availabilityOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              <AccordionTrigger>All Filters</AccordionTrigger>
            </div>

            <AccordionContent className="px-2 bg-green-800 text-white rounded-b"></AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* Pharmacy Grid */}
      {PHARMACIES.length === 0 ? (
        <p className="text-center text-gray-500">
          No pharmacies match the selected filters.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PHARMACIES.map((pharmacy) => (
            <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PharmacyList;
