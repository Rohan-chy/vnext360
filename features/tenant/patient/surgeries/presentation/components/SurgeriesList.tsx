'use client';

import React from 'react';
import { Surgery } from '../../domain/surgeries.schema';
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
  specialtyOptions,
  locationOptions,
} from '../../application/utils/options';
import { SurgeryCard } from './SurgeriesCard';

export const PRIMARY = '#0D6641';

export const SURGERIES: Surgery[] = [
  {
    id: 1,
    hospitalName: 'Nobel Hospital',
    location: 'Biratnagar',
    contactNumber: '9800000001',
    specialties: ['Cardiology', 'Orthopedics'],
    operatingRooms: 5,
    emergencySupport: true,
    availability: 'All Days',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400',
  },
  {
    id: 2,
    hospitalName: 'Birat Teaching Hospital',
    location: 'Biratnagar',
    contactNumber: '9800000002',
    specialties: ['Neurology', 'Pediatrics'],
    operatingRooms: 4,
    emergencySupport: false,
    availability: 'Weekdays',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400',
  },
  {
    id: 3,
    hospitalName: 'Grande International Hospital',
    location: 'Kathmandu',
    contactNumber: '9800000003',
    specialties: ['Cardiology', 'Oncology'],
    operatingRooms: 8,
    emergencySupport: true,
    availability: 'All Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
  },
];

const SurgeriesList: React.FC = () => {
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
                  {/* Specialty */}
                  <FormField
                    control={form.control}
                    name="specialty"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              {specialtyOptions.map((option) => (
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

      {/* Surgery Grid */}
      {SURGERIES.length === 0 ? (
        <p className="text-center text-gray-500">
          No surgeries match the selected filters.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SURGERIES.map((surgery) => (
            <SurgeryCard key={surgery.id} surgery={surgery} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SurgeriesList;
