interface MemberProps {
  details: {
    name: String;
    role: String;
    experience: String;
    image: String;
  };
}

export default function Member({ details }: MemberProps) {
  return (
    <div className="flex flex-col md:flex-row w-[80%] gap-10 items-center bg-neutral-900 bg-opacity-60 pt-4 pb-4 ">
      <div className="flex flex-col min-w-[15%] gap-2 justify-center items-left text-center">
        <div>{details.name}</div>
        <div>{details.role}</div>
      </div>
      <div className="max-w-[80%] text-justify md:max-w-[70%]">
        {details.experience}
      </div>
      <div className="min-w-[15%]">{details.image}</div>
    </div>
  );
}
