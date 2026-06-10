export const metadata = {
  title: "Parfume | Elif Shop",
  description:
    "Tek Elif Shop do të gjeni parfume vajore me mbushje dhe parfume të gatshme për meshkuj dhe femra. Aromë afatgjatë, cilësi e lartë dhe çmime të arsyeshme për çdo preferencë.",
};

export default function ParfumeLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}