const ConsultantQA = ({ doctor }: any) => {
  return (
    <>
      {doctor.consultantQA?.map((qa: any, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition"
        >
          <p className="font-semibold text-[#0D6641]">Q: {qa.question}</p>
          <p className="text-gray-700">A: {qa.answer}</p>
        </div>
      ))}
    </>
  );
};

export default ConsultantQA;
