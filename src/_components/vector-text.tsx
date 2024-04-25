type VectorTextProps = {
  text: string;
};
export default function VectorText({ text }: VectorTextProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-0.5 flex-1 bg-neutral-50 lg:bg-neutral-300" />
      <p className="text-base text-neutral-50 lg:text-neutral-400">{text}</p>
      <span className="h-0.5 flex-1 bg-neutral-50 lg:bg-neutral-300" />
    </div>
  );
}
