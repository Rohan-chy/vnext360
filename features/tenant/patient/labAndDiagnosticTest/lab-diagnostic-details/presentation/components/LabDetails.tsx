import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { labDetails } from '../../application/utils/labDetails';

const LabDetails = () => {
  const labInfo = labDetails;
  return (
    <Accordion type="single" collapsible className="space-y-2 mt-5">
      {labInfo?.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all data-[state=open]:shadow-md"
        >
          <AccordionTrigger className="px-4 sm:px-6 py-3 text-left text-sm sm:text-base font-semibold text-[#214994] hover:no-underline">
            {item.title}
          </AccordionTrigger>

          <AccordionContent className="px-4 sm:px-6 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default LabDetails;
