export default function Logo({ 
  className = "", 
  invert = false 
}: { 
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src="/logo.png"
      alt="Sasuma Spices Logo"
      className={`object-contain transition-all duration-500 ${
        invert ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
}
