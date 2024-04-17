type VectorTextProps = {
  text: string;
};
export default function VectorText({ text }: VectorTextProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="bg-neutral-50 lg:bg-neutral-400  h-0.5 flex-1" />
      <p className="text-neutral-50 lg:text-neutral-400 font-roboto font-normal text-base">
        {text}
      </p>
      <span className="bg-neutral-50 lg:bg-neutral-400 h-0.5 flex-1" />
    </div>
  );
}
