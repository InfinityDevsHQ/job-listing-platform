type HelpTextProps = {
  text: string;
  className?: string;
};
export default function HelpText({ text, className }: HelpTextProps) {
  return <p className={`text-xs text-red-500 gap-1 ${className}`}>{text}</p>;
}
