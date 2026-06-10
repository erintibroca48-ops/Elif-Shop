export const metadata = {
  title: "Punime Dore të Personalizuara | Elif Shop",
  description:
    "Punime artizanale të realizuara me kujdes. Unaza për meshkuj dhe femra, pllaka për varëse me personalizim dhe krijime unike që shndërrojnë çdo ide në kujtim të veçantë.",
};

export default function PunimeDoreLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}