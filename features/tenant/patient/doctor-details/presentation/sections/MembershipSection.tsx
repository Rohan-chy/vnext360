const MembershipSection = ({ doctor }: any) => {
  return (
    <>
      {doctor.memberships?.map((member: string, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition"
        >
          {member}
        </div>
      ))}
    </>
  );
};

export default MembershipSection;
