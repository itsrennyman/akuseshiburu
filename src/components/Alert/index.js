export function Alert({ children, className, style }) {
  return (
    <div role="alert" className={className} style={style}>
      {children}
    </div>
  );
}
