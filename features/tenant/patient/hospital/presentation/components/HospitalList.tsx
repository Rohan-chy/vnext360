'use client';

import React from 'react';
import { Availability, Hospital } from '../../domain/hospital.schema';
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
  departmentOptions,
  locationOptions,
  bedCapacityOptions,
} from '../../application/utils/options';
import { HospitalCard } from './HospitalCard';

export const PRIMARY = '#0D6641';
export const HOSPITALS: Hospital[] = [
  {
    id: 1,
    name: 'Nobel Hospital',
    location: 'Biratnagar',
    departments: ['Cardiology', 'Orthopedics'],
    bedCapacity: 150,
    availability: 'All Days',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400',
  },
  {
    id: 2,
    name: 'Birat Teaching Hospital',
    location: 'Biratnagar',
    departments: ['Pediatrics', 'Neurology'],
    bedCapacity: 200,
    availability: 'Weekdays',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400',
  },
  {
    id: 3,
    name: 'Koshi Hospital',
    location: 'Biratnagar',
    departments: ['Dermatology', 'Emergency'],
    bedCapacity: 100,
    availability: 'Weekends',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400',
  },
  {
    id: 4,
    name: 'Grande International Hospital',
    location: 'Kathmandu',
    departments: ['Cardiology', 'Oncology', 'Neurology'],
    bedCapacity: 250,
    availability: 'All Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
  },
  {
    id: 5,
    name: 'Manipal Teaching Hospital',
    location: 'Pokhara',
    departments: ['Orthopedics', 'Pediatrics', 'Emergency'],
    bedCapacity: 300,
    availability: 'All Days',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400',
  },
  {
    id: 6,
    name: 'Norvic International Hospital',
    location: 'Kathmandu',
    departments: ['Cardiology', 'Gastroenterology'],
    bedCapacity: 180,
    availability: 'Weekdays',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400',
  },
];

const HospitalList: React.FC = () => {
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
                  {/* Department */}
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departmentOptions.map((option) => (
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

                  {/* Bed Capacity */}
                  <FormField
                    control={form.control}
                    name="bedCapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Bed Capacity" />
                            </SelectTrigger>
                            <SelectContent>
                              {bedCapacityOptions.map((option) => (
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

      {/* Hospital Grid */}
      {HOSPITALS.length === 0 ? (
        <p className="text-center text-gray-500">
          No hospitals match the selected filters.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HOSPITALS.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HospitalList;
