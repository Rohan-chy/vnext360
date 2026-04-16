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

interface ComboboxProps {
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

export function Combobox({
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
        // console.log(field);
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
                    'absolute left-1.5 top-[1.75] dark:bg-black transition-all duration-200 ease-in-out transform bg-white px-1 text-[12px]',
                    {
                      '-top-2.5  dark:bg-black z-10':
                        (field.value !== null &&
                          field.value !== undefined &&
                          field.value !== '') ||
                        disabled,
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
                      role="combobox"
                      aria-expanded={open}
                      ref={buttonRef}
                      disabled={disabled}
                      // className={`w-[200px] justify-between ${className}`}
                      className={cn(
                        'p-1 justify-between h-6 w-full text-[12px] font-bold text-black hover:text-black bg-white hover:bg-white border-black dark:border-white rounded-sm',
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
                        {field.value != null
                          ? items.find(
                              (item) =>
                                String(item.value) === normalizedFieldValue
                            )?.label
                          : placeholder || ''}
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
