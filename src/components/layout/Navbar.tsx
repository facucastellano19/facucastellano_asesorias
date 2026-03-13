import { useTranslation } from "react-i18next";
import Button from "../common/Button";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-10 h-20 flex items-center justify-between">
        <div className="font-black text-xl tracking-tighter uppercase italic">
          <span className="text-gray-400">Facu</span>
          <span className="text-red-700 ml-1">Castellano</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            className="!py-2 !px-5 text-sm md:text-base scale-90 md:scale-100"
          >
            {t("navbar.contact")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
