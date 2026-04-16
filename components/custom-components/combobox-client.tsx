'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Options } from '@/types/options';

interface ComboboxProps {
  items: Options[];
  placeholder?: string;
  label?: string;
  name: string;
  value?: string;
  form: any;
  className?: string;
  disabled?: boolean;
  isRequired?: boolean;
  labelField?: string;
}

export function ComboboxClient({
  items,
  placeholder,
  label,
  name,
  value,
  form,
  className,
  disabled = false,
  isRequired = false,
  labelField,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [dropdownWidth, setDropdownWidth] = React.useState<string>();

  React.useEffect(() => {
    if (buttonRef.current) {
      setDropdownWidth(`${buttonRef.current.offsetWidth}px`);
    }
  }, [open]);

  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={value}
      render={({ field }) => {
        const hasError = form?.formState?.errors?.[name];

        return (
          <FormItem className={cn('w-full', className)}>
            <div className="relative">
              {/* Floating Label */}
              {label && (
                <span
                  className={cn(
                    'absolute left-3 px-1 text-xs transition-all duration-200 z-10',
                    field.value || disabled
                      ? '-top-2.5 bg-white dark:bg-black'
                      : 'top-2.5 text-muted-foreground'
                  )}
                >
                  {label}
                  {isRequired && <span className="text-red-500"> *</span>}
                </span>
              )}

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      ref={buttonRef}
                      type="button"
                      role="combobox"
                      aria-expanded={open}
                      disabled={disabled}
                      className={cn(
                        'w-full h-10 px-3 py-2 text-sm font-normal justify-between rounded-md border bg-background',

                        // text color fix
                        'text-foreground',

                        // hover fix
                        'hover:bg-background hover:text-foreground',

                        'border-input',
                        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',

                        disabled &&
                          'border-gray-300 cursor-not-allowed bg-gray-100',

                        hasError && 'border-red-500 border-2',

                        className
                      )}
                    >
                      <span className="truncate text-left text-foreground">
                        {field.value
                          ? items.find((item) => item.value === field.value)
                              ?.label
                          : placeholder || ''}
                      </span>

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent
                  style={{ width: dropdownWidth }}
                  className="p-0 rounded-md border shadow-md"
                >
                  <Command>
                    <CommandInput placeholder="Search..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No items found.</CommandEmpty>

                      <CommandGroup>
                        {items.map((item) => (
                          <CommandItem
                            key={item.value}
                            value={String(item.value)} 
                            className="text-sm"
                            onSelect={() => {
                              if (labelField) {
                                form.setValue(name, item.value, {
                                  shouldValidate: true,
                                });
                                form.setValue(labelField, item.label, {
                                  shouldValidate: true,
                                });
                              } else {
                                form.setValue(name, item.value, {
                                  shouldValidate: true,
                                });
                              }

                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                field.value === item.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            {item.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </div>
          </FormItem>
        );
      }}
    />
  );
}
