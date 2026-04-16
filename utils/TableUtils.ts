import { Table } from '@tanstack/react-table';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const handleCopyTable = <TData>(table: Table<TData>) => {
  const visibleRows = table.getRowModel().rows;
  const visibleColumns = table
    .getAllLeafColumns()
    .filter((c) => c.getIsVisible());
  // create TSV or CSV string
  const header = visibleColumns.map((col) => col.id).join('\t');
  const body = visibleRows.map((row) =>
    row
      .getVisibleCells()
      .map((cell) => cell.getValue())
      .join('\t')
  );
  const textToCopy = [header, ...body].join('\n');
  navigator.clipboard.writeText(textToCopy).then(() => {
    toast.success('Copy to clipboard', {
      description: `${visibleRows.length} rows and ${visibleColumns.length} columns copied to clipboard`,
      duration: 3000,
    });
  });
};

export const handleDownloadCsv = <TData>(table: Table<TData>) => {
  const visibleRows = table.getRowModel().rows;
  const visibleColumns = table
    .getAllLeafColumns()
    .filter((c) => c.getIsVisible());
  // extract data
  const header = visibleColumns.map((col) => col.id);
  const body = visibleRows.map((row) =>
    row.getVisibleCells().map((cell) => {
      const val = cell.getValue();
      // Escape quotes and commas
      return val !== null && val !== undefined
        ? `"${String(val).replace(/"/g, '""')}"`
        : '';
    })
  );
  const csvContent = [header, ...body].map((e) => e.join(',')).join('\n');
  // create a blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'table-data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  toast.success('CSV File Downloaded', {
    description: 'Your table data has been saved as table-data.csv',
    duration: 2000,
  });
};

export const handleDownloadExcel = <TData>(table: Table<TData>) => {
  const visibleRows = table.getRowModel().rows;
  const visibleColumns = table
    .getAllLeafColumns()
    .filter((c) => c.getIsVisible());
  // extract data
  const header = visibleColumns.map((col) => col.id);
  const body = visibleRows.map((row) =>
    row.getVisibleCells().map((cell) => {
      const val = cell.getValue();
      return val !== null && val !== undefined ? String(val) : '';
    })
  );
  // create worksheet and workbook
  const ws = XLSX.utils.aoa_to_sheet([header, ...body]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Table Data');
  // Export to file
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], {
    type: 'application/octet-stream',
  });
  saveAs(dataBlob, 'table-data.xlsx');
  toast.success('Excel File Downloaded', {
    description: 'Your table data has been saved as table-data.xlsx',
    duration: 2000,
  });
};

export const handleDownloadPdf = <TData>(table: Table<TData>) => {
  const visibleRows = table.getRowModel().rows;
  const visibleColumns = table
    .getAllLeafColumns()
    .filter((c) => c.getIsVisible());
  // extract header & body
  const header = visibleColumns.map((col) => col.id);
  const body = visibleRows.map((row) =>
    row.getVisibleCells().map((cell) => {
      const val = cell.getValue();
      return val !== null && val !== undefined ? String(val) : '';
    })
  );
  const doc = new jsPDF('l', 'pt', 'a4'); // landscape for more space
  doc.setFontSize(14);
  doc.text('Patient Registrations', 40, 30);

  autoTable(doc, {
    head: [header],
    body: body,
    startY: 50,
    styles: {
      fontSize: 9,
      cellPadding: 4,
      overflow: 'linebreak',
      cellWidth: 'wrap', // wrap long content
    },
    headStyles: {
      fillColor: [66, 135, 245],
      textColor: 255,
      halign: 'center',
    },
    theme: 'grid',
    //Dynamic width handling
    tableWidth: 'auto', // shrink to fit content
  });
  doc.save('table-data.pdf');
  toast.success('PDF File Downloaded', {
    description: 'Your table data has been saved as table-data.pdf',
    duration: 2000,
  });
};

// using Browser APIS(window.print()) for printing
export const handlePrintTable = () => {
  const tableElement = document.getElementById('data-table');
  if (!tableElement) return;

  const newWindow = window.open('', '_blank');
  newWindow?.document.write(`
      <html>
      <head>
      <title>Print Table</title>
      <style>
      table {border-collapse:collapse;width:100%;font-size:12px;}
      th,td{border:1px solid #ccc;padding:6px;text-align:left;}
      th{background-color:#bfdbfe ;}
       /* Hide sort icons during print */
        .sort-icon { display: none !important; }
      </style>
      </head>
      <body>
      ${tableElement.outerHTML}
      </body>
      </html>
      `);
  newWindow?.document.close();
  newWindow?.print();
};
