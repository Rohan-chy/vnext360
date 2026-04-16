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
  // FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Options } from '@/types/options';
import { ComboboxButton } from '../extended/combobox-button';

interface Combobox2Props {
  items: Options[];
  placeholder?: string;
  label?: string;
  name: string;
  value?: string;
  form?: any;
  className?: string;
  disabled?: boolean;
  isRequired?: boolean;
  labelField?: string;
}

export function Combobox2({
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
}: Combobox2Props) {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [dropdownWidth, setDropdownWidth] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (buttonRef.current) {
      setDropdownWidth(`${buttonRef.current.offsetWidth}px`);
    }
  }, [open]);

  return (
    <FormField
      control={form?.control}
      name={name}
      defaultValue={value}
      render={({ field }) => {
        // Normalize both values to string for matching label and selection
        const normalizedFieldValue = String(field.value ?? '');
        return (
          <FormItem className={cn('w-full', className)}>
            {/* {label && <FormLabel>{label}</FormLabel>} */}
            <div className="relative">
              {label && (
                // <FormLabel>
                <span
                  className={cn(
                    'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2',
                    'origin-left scale-100 bg-background px-1 text-xs text-muted-foreground',
                    'transition-all',
                    {
                      'top-1 -translate-y-3 scale-75':
                        field.value !== null &&
                        field.value !== undefined &&
                        field.value !== '' &&
                        field.value !== '00000000-0000-0000-0000-000000000000',
                    }
                  )}
                >
                  {label}{' '}
                  {isRequired && (
                    <span className={`${isRequired ? 'text-red-500' : ''}`}>
                      *
                    </span>
                  )}
                </span>
                // </FormLabel>
              )}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <ComboboxButton
                      variant="outline"
                      role="Combobox2"
                      aria-expanded={open}
                      ref={buttonRef}
                      disabled={disabled}
                      // className={`w-[200px] justify-between ${className}`}
                      className={cn(
                        'px-3 py-1 justify-between h-9 w-full text-sm text-black hover:bg-white hover:text-black  dark:border-white rounded-sm',
                        'focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none',
                        open && 'ring-1 ring-blue-500 border-blue-500',
                        // width,

                        className
                        // error ? "border-red-500 border-2" : ""
                      )}
                    >
                      {/* <span>
                        {field.value
                          ? items.find((item) => item.value === field.value)
                              ?.label
                          : placeholder || ''}
                      </span> */}
                      <span>
                        {field.value !== null &&
                        items.find(
                          (item) => String(item.value) === normalizedFieldValue
                        )?.label !== 'Select'
                          ? items.find(
                              (item) =>
                                String(item.value) === normalizedFieldValue
                            )?.label
                          : placeholder}
                      </span>

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </ComboboxButton>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  style={{ width: dropdownWidth }}
                  className={cn('p-0', className)}
                >
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No items found.</CommandEmpty>
                      <CommandGroup>
                        {items.map((item) => (
                          <CommandItem
                            key={item.value}
                            value={String(item.value)} // Always string here for cmdk
                            onSelect={() => {
                              if (labelField) {
                                form.setValue(name, item.value, {
                                  shouldValidate: true,
                                  shouldDirty: true,
                                });
                                form.setValue(labelField, item.label, {
                                  shouldValidate: true,
                                  shouldDirty: true,
                                });
                              } else {
                                // fallback: set main name
                                form.setValue(name, item.value, {
                                  shouldValidate: true,
                                  shouldDirty: true,
                                });
                              }

                              setOpen(false);
                            }}
                            className="text-[12px]"
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                field.value === item.value
                                  ? // normalizedFieldValue === String(item.value)
                                    'opacity-100'
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
