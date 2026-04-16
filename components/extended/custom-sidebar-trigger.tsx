import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
// Extending the Button component to create a CustomSidebarTrigger component.

// This approach allows the CustomSidebarTrigger component to inherit all the functionality
// and props of the Button component while extending it with custom behavior
// (like the icon prop).
type CustomSidebarTriggerProps = React.ComponentProps<typeof Button> & {
  icon?: React.ReactNode;
};

export function CustomSidebarTrigger({
  icon,
  className,
  onClick,
  ...props
}: CustomSidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {icon}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
