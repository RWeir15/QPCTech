export function QPCLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="QPCTech Logo"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c4.425 0 8.24-2.404 10.392-5.999l-4.597-2.654A6.002 6.002 0 0112 18a6 6 0 116-6h6C24 5.373 18.627 0 12 0z"
        fill="hsl(var(--primary))"
      ></path>
      <text
        x="30"
        y="18"
        fontFamily="'Barlow Semi Condensed', sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="currentColor"
      >
        QPCTech
      </text>
    </svg>
  );
}
