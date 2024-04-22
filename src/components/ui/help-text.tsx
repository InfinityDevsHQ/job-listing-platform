type HelpTextProps = {
  text: string;
  colorClass?: string;
};
export default function HelpText({ text, colorClass }: HelpTextProps) {
  return (
    <p className={`text-xs gap-1 ${colorClass ? "" : "text-red-500"}`}>
      {text}
    </p>
  );
}
