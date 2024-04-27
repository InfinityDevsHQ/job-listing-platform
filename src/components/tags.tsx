type Tags = {
  python?: boolean;
  django?: boolean;
  sql?: boolean;
  git?: boolean;
};

export default function Tags({ python, django, sql, git }: Tags) {
  return (
    <div className="flex items-center gap-4">
      {python && (
        <span className="tag bg-light-orange text-deep-orange">Python</span>
      )}
      {django && (
        <span className="tag bg-light-green text-deep-green">Django</span>
      )}
      {sql && <span className="tag bg-light-purple text-deep-purple">SQL</span>}
      {git && <span className="tag bg-light-red text-deep-red">Git</span>}
    </div>
  );
}
