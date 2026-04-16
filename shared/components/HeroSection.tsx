'use client';
import React, { useState } from 'react';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const HeroSection = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center p-2 gap-2">
      <Command className="rounded-lg border-black border shadow-md w-1/5">
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <CommandInput placeholder="search location..." />
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Kathmandu</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Pokhara</span>
                </CommandItem>
                <CommandItem>
                  <Calculator />
                  <span>Biratnagar</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </PopoverContent>
        </Popover>
      </Command>
      <Command className="rounded-lg border border-black  shadow-md w-1/5">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <CommandInput placeholder="search doctor,hospitals..." />
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Hospital Suggestions">
                <CommandItem>
                  <span>Nobel Hospital</span>
                </CommandItem>
                <CommandItem>
                  <span>Birat Medical</span>
                </CommandItem>
                <CommandItem>
                  <span>Koshi hospital</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Doctor Suggestions">
                <CommandItem>
                  <span>Dr. Rohan</span>
                </CommandItem>
                <CommandItem>
                  <span>Dr. Arjun</span>
                </CommandItem>
                <CommandItem>
                  <span>Dr. Ajay</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </PopoverContent>
        </Popover>
      </Command>
    </div>
  );
};

export default HeroSection;
