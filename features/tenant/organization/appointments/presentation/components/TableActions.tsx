import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { X } from 'lucide-react';
import { useCancelAppointment } from '../../application/useCancelAppointment';

const ActionButtons = ({ appointmentId }: { appointmentId: string }) => {
  const { mutateAsync: cancelBooking, isPending: cancelPending } =
    useCancelAppointment();

  return (
    <div className="flex items-center gap-2">
      {/* Postponed */}
      {/* <AppTooltip content="Postponed">
        <DeleteAlert
          action="postponed"
          variant="default"
          icon={ClockIcon}
          tooltip="Postponed Request"
          disabled={loading}
          onClick={() => updateStatus(schedule, 2)}
        />
      </AppTooltip> */}

      {/* Accepted */}
      {/* <AppTooltip content="Accept">
        <DeleteAlert
          action="accept"
          variant="default"
          icon={CheckIcon}
          tooltip="Accept Request"
          disabled={loading}
          onClick={() => updateStatus(schedule, 3)}
        />
      </AppTooltip> */}

      {/* Rejected */}
      <DeleteAlert
        action="Cancel"
        icon={X}
        tooltip="Cancel Appointment"
        disabled={cancelPending}
        onClick={() => cancelBooking(appointmentId)}
      />
    </div>
  );
};

export default ActionButtons;
