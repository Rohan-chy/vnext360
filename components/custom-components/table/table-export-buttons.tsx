'use client';

import {
  handleCopyTable,
  handleDownloadCsv,
  handleDownloadExcel,
  handleDownloadPdf,
  handlePrintTable,
} from '@/utils/TableUtils';
import {
  Copy,
  FileDown,
  FileSpreadsheet,
  FileText,
  Printer,
} from 'lucide-react';
import { Table } from '@tanstack/react-table';
import ExportButton from './export-button';

interface TableExportButtonsProps<TData> {
  table: Table<TData>;
}

const TableExportButtons = <TData,>({
  table,
}: TableExportButtonsProps<TData>) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <ExportButton
        onClick={() => handleCopyTable(table)}
        icon={<Copy />}
        label="Copy"
      />
      <ExportButton
        onClick={() => handleDownloadCsv(table)}
        icon={<FileText />}
        label="CSV"
      />
      <ExportButton
        onClick={() => handleDownloadExcel(table)}
        icon={<FileSpreadsheet />}
        label="Excel"
      />
      <ExportButton
        onClick={() => handleDownloadPdf(table)}
        icon={<FileDown />}
        label="PDF"
      />
      <ExportButton
        onClick={handlePrintTable}
        icon={<Printer />}
        label="Print"
      />
    </div>
  );
};

export default TableExportButtons;
