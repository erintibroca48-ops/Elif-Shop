export const metadata = {
  title: "Ora për Meshkuj dhe Femra | Elif Shop",
  description:
    "Zbuloni koleksionin e orëve për meshkuj dhe femra në Elif Shop. Modele elegante, sportive dhe moderne që kombinojnë cilësinë, stilin dhe funksionalitetin.",
};

export default function OraLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}