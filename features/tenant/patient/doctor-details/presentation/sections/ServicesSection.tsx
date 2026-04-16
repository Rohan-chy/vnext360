export default function ServicesSection({ doctor }: any) {
  return (
    <>
      {doctor.services?.map((service: string, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition flex items-center justify-center font-medium"
        >
          {service}
        </div>
      ))}
    </>
  );
}
