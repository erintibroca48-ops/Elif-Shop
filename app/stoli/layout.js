export const metadata = {
  title: "Stoli dhe Bizhuteri | Elif Shop",
  description:
    "Zbuloni unaza, varëse, byzylykë dhe vathë argjendi ose bizhu sipas preferencës suaj. Stoli elegante për meshkuj dhe femra për çdo rast dhe stil.",
};

export default function StoliLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}