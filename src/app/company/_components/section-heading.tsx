type SectionHeadingProps = {
  text: string;
};
export default function SectionHeading({ text }: SectionHeadingProps) {
  return <h4 className="font-sans font-bold text-gray-700 lg:text-lg">{text}</h4>;
}
