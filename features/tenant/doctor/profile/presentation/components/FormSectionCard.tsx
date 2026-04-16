export function FormSectionCard({ title, children }: any) {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-visible">
      {/* Header */}
      <div className="px-4 py-2 font-semibold text-lg bg-gray-50 text-primary">
        {title}
      </div>

      {/* Body */}
      <div className="p-5 bg-gray-50 space-y-6">{children}</div>
    </div>
  );
}
