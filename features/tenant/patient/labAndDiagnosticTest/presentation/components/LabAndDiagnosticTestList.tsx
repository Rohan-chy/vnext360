'use client';

import React from 'react';
import { Lab } from '../../domain/labAndDiagnosticTest.schema';
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
  testOptions,
  locationOptions,
} from '../../application/utils/options';
import { LabAndDiagnosticCard } from './LabAndDiagnosticTestCard';

export const PRIMARY = '#0D6641';

export const LABS: Lab[] = [
  {
    id: 1,
    name: 'Nobel Lab & Diagnostics',
    location: 'Biratnagar',
    contactNumber: '9800000001',
    testsOffered: ['Blood Test', 'MRI', 'X-Ray'],
    reportDelivery: ['Online', 'Pickup'],
    accredited: true,
    availability: 'All Days',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
  },
  {
    id: 2,
    name: 'Koshi Diagnostics',
    location: 'Biratnagar',
    contactNumber: '9800000002',
    testsOffered: ['Ultrasound', 'Blood Test'],
    reportDelivery: ['Pickup'],
    accredited: false,
    availability: 'Weekdays',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400',
  },
  {
    id: 3,
    name: 'CityCare Lab',
    location: 'Kathmandu',
    contactNumber: '9800000003',
    testsOffered: ['CT Scan', 'Blood Test', 'Vaccination'],
    reportDelivery: ['Online'],
    accredited: true,
    availability: 'All Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400',
  },
];

const LabAndDiagnosticList: React.FC = () => {
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
                  {/* Tests/Services */}
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
                              <SelectValue placeholder="Test / Service" />
                            </SelectTrigger>
                            <SelectContent>
                              {testOptions.map((option) => (
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

      {/* Lab Grid */}
      {LABS.length === 0 ? (
        <p className="text-center text-gray-500">
          No labs match the selected filters.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((lab) => (
            <LabAndDiagnosticCard key={lab.id} lab={lab} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LabAndDiagnosticList;
