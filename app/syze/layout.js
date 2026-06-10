export const metadata = {
  title: "Syze për Meshkuj dhe Femra | Elif Shop",
  description:
    "Syze moderne për meshkuj dhe femra me dizajne elegante dhe cilësi të lartë. Gjeni modelin perfekt që plotëson stilin tuaj në Elif Shop.",
};

export default function SyzeLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}