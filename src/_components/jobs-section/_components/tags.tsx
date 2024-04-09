type Tags = {
  python?: boolean;
  django?: boolean;
  sql?: boolean;
  git?: boolean;
};
export default function Tags({ python, django, sql, git }: Tags) {
  return (
    <div className="flex gap-4">
      {python && (
        <span className="tag bg-[#FFEDB6] text-[#BD5B00]">Python</span>
      )}
      {django && (
        <span className="tag bg-[#C6E2C5] text-[#2A7B29]">Django</span>
      )}
      {sql && <span className="tag bg-[#E3E6FF] text-{#3B4786]">SQL</span>}
      {git && <span className="tag bg-[#FFC7C7] text-[#9A3535]">Git</span>}
    </div>
  );
}
