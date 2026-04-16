'use client';
import {
  Availability,
  Doctor,
  DoctorFilters,
} from '../../domain/findDoctor.schema';

import React, { useMemo, useState } from 'react';
import { DoctorCard } from './DoctorCard';
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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Form, FormLabel } from '@/components/ui/form';
import { FormField, FormItem, FormControl } from '@/components/ui/form';
import {
  associatedHospitalOptions,
  availabilityOptions,
  experienceOptions,
  genderOptions,
  ratingOptions,
  specializationOptions,
} from '../../application/utils/options';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

export const PRIMARY = '#0D6641';

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Anjali Sharma',
    specialization: 'Cardiologist',
    experience: 12,
    availability: 'Weekdays',
    rating: 4.8,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Dr. Rohan Verma',
    specialization: 'Dermatologist',
    experience: 8,
    availability: 'All Days',
    rating: 4.5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Dr. Sneha Koirala',
    specialization: 'Pediatrician',
    experience: 10,
    availability: 'Weekends',
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 4,
    name: 'Dr. Sneha Koirala',
    specialization: 'Pediatrician',
    experience: 10,
    availability: 'Weekends',
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  {
    id: 5,
    name: 'Dr. Ram Yadav',
    specialization: 'Pediatrician',
    experience: 10,
    availability: 'All Days',
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    id: 6,
    name: 'Dr. Shekhar Koirala',
    specialization: 'Dermatologist',
    experience: 8,
    availability: 'Weekends',
    rating: 3,
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
];

const DoctorsList: React.FC = () => {
  const form = useForm();
  return (
    <section className="flex flex-col gap-2">
      {/* Filters */}
      <Card className="w-full p-0">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-2">
            <div className="flex justify-between rounded-t bg-green-800 w-full text-white text-left px-2">
              <Form {...form}>
                <form className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              {genderOptions.map((option) => (
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
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Experience" />
                            </SelectTrigger>
                            <SelectContent>
                              {experienceOptions.map((option) => (
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
                  <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Specialization" />
                            </SelectTrigger>
                            <SelectContent>
                              {specializationOptions.map((option) => (
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
                            <SelectTrigger className="w-full">
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
                            <SelectTrigger className="w-full">
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
            <AccordionContent className="px-2 bg-green-800 text-white rounded-b">
              <Form {...form}>
                <form className="flex items-center gap-5">
                  <FormLabel className="flex items-center">
                    Associated Top Hospitals
                  </FormLabel>

                  {associatedHospitalOptions?.map((option) => {
                    return (
                      <FormField
                        key={option}
                        control={form.control}
                        name="orbitopathyProgressOverPast2Month"
                        render={({ field }) => {
                          return (
                            <FormLabel
                              htmlFor={`orbitopathyProgressOverPast2Month-${option}`}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                checked={field.value === option}
                                id={`orbitopathyProgressOverPast2Month-${option}`}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? option : ''); //unchecked will set it to empty string
                                }}
                              />
                              <span>{option}</span>
                            </FormLabel>
                          );
                        }}
                      />
                    );
                  })}
                  <FormField
                    name="fees"
                    control={form.control}
                    render={({ field }) => (
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col gap-4"
                        >
                          <FormItem className="flex items-center gap-3">
                            <RadioGroupItem value="0-500" id="fees-0-500" />
                            <FormLabel htmlFor="fees-0-500">
                              NPR 0 - Rs.500
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3">
                            <RadioGroupItem value="500+" id="fees-500" />
                            <FormLabel htmlFor="fees-500">
                              Above Rs.500
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3">
                            <RadioGroupItem value="1000+" id="fees-1000" />
                            <FormLabel htmlFor="fees-1000">
                              Above Rs.1000
                            </FormLabel>
                          </FormItem>

                          <FormItem className="flex items-center gap-3">
                            <RadioGroupItem value="1500+" id="fees-1500" />
                            <FormLabel htmlFor="fees-1500">
                              Above Rs.1500
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </form>
              </Form>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* Doctor Grid */}
      {DOCTORS.length === 0 ? (
        <p className="text-center text-gray-500">
          No doctors match the selected filters.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </section>
  );
};

export default DoctorsList;
