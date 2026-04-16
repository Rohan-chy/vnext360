import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Textarea } from '@/components/ui/textarea';
import {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
} from 'react-hook-form';

const saveScrollPosition = () => ({
  scrollTop: window.scrollY,
  scrollLeft: window.scrollX,
});

const restoreScrollPosition = (position: {
  scrollTop: number;
  scrollLeft: number;
}) => {
  window.scrollTo(position.scrollLeft, position.scrollTop);
};

interface FormTextAreaProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  value?: PathValue<TFieldValues, Path<TFieldValues>>;
  disabled?: boolean;
  className?: string;
  moduleKey?: string;
  error?: FieldError;
  placeholder?: string;
}

export function FormTextArea<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  value,
  disabled = false,
  className,
  moduleKey,
  error,
  placeholder,
}: FormTextAreaProps<TFieldValues>) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = (element: HTMLTextAreaElement) => {
    if (element) {
      element.style.height = 'auto'; // Reset height
      element.style.height = `${element.scrollHeight}px`; // Set height based on scrollHeight
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      const element = textareaRef.current;
      const currentScrollPosition = saveScrollPosition(); // Save scroll position

      if (moduleKey === 'Doctor Examiner Note') {
        element.style.height = '57px';
      } else if (moduleKey === 'Investigation') {
        element.style.height = '15px';
      } else if (moduleKey === 'Final Summary') {
        element.style.height = '120px';
      } else if (moduleKey === 'Review') {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
      } else {
        adjustHeight(element);
      }

      restoreScrollPosition(currentScrollPosition); // Restore scroll position
    }
  }, [value, moduleKey]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const currentScrollPosition = saveScrollPosition();
        restoreScrollPosition(currentScrollPosition);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLTextAreaElement;
      target.setSelectionRange(0, 0); // Select text without scrolling
    };

    if (textareaRef.current) {
      const allTextareas = document.querySelectorAll('textarea');
      if (allTextareas[0] === textareaRef.current) {
        textareaRef.current.setSelectionRange(0, 0);
      }

      textareaRef.current.addEventListener('focus', handleFocus);
    }

    return () => {
      textareaRef.current?.removeEventListener('focus', handleFocus);
    };
  }, []);

  const hasError = error ? 'border-red-500 border-2' : '';
  // const placeholderClass = placeholder == "Nil" ?  "text-gray-500" : "text-black";

  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={value}
      disabled={disabled}
      render={({ field }) => {
        const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
          field.onChange(event);
          adjustHeight(event.target);
        };

        return (
          <FormItem>
            <FormControl>
              <Textarea
                // moduleKey={moduleKey} // Removed as it is not a valid attribute for <textarea>
                readOnly={disabled}
                placeholder={placeholder || label || ''}
                {...field}
                ref={textareaRef}
                onInput={handleInput}
                className={clsx(className, hasError)}
                // className={clsx(className, hasError,placeholderClass)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
