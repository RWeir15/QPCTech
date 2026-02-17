import Image from "next/image";

export function QPCLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://www.qpctech.com/wp-content/uploads/2024/03/cropped-QPCTech-logo.png"
      alt="QPCTech Logo"
      width={240}
      height={128}
      className={className}
      priority
    />
  );
}
