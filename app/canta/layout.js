export const metadata = {
  title: "Çanta dhe Kuleta | Elif Shop",
  description:
    "Çanta elegante për meshkuj dhe kuleta moderne për femra. Produkte cilësore që kombinojnë stilin, prakticitetin dhe elegancën për përdorim të përditshëm.",
};

export default function CantaLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}