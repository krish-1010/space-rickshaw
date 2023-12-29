interface HeadingProps {
  heading: String;
}

export default function Heading({ heading }: HeadingProps) {
  return (
    <div>
      <h1 className="text-base md:text-2xl xl:text-4xl text-center mt-8">
        {heading}
      </h1>
    </div>
  );
}
