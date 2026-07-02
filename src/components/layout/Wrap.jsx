export default function Wrap({ children, className = '' }) {
  return <div className={`wrap ${className}`}>{children}</div>
}
