const BracketLink = ({ href, onClick, children, as = 'a' }) => {
  const Tag = as;
  const props = as === 'a' ? { href } : { onClick, type: 'button' };

  return (
    <Tag
      {...props}
      className="inline-flex items-center gap-3 text-sm font-bold tracking-widest
        text-current transition-opacity hover:opacity-60"
    >
      <span className="h-4 w-px bg-current" />
      {children}
      <span className="h-4 w-px bg-current" />
    </Tag>
  );
};

export default BracketLink;