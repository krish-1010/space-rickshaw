import Member from "../components/Member";

interface Persons {
  name: String;
  role: String;
  experience: String;
  image: String;
}

interface TeamProps {
  persons: Persons[];
}

export default function Team({ persons }: TeamProps) {
  console.log(persons);

  return (
    <div className="flex mt-8 flex-col gap-10 justify-center items-center ">
      <h1>Our Team</h1>
      <Member details={persons[0]} />
      <Member details={persons[1]} />
      <Member details={persons[2]} />
    </div>
  );
}
