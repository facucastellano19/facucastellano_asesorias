import { useTranslation } from "react-i18next";
import Button from "../common/Button";

const Navbar = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-black border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="font-black text-xl tracking-tighter uppercase italic cursor-pointer"
        >
          <span className="text-gray-400">Facu</span>
          <span className="text-red-700 ml-1">Castellano</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors italic"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            className="!py-2 !px-5 text-sm md:text-base scale-90 md:scale-100"
            onClick={() => window.open("https://wa.link/tsue0x", "_blank")}
          >
            {t("navbar.contact")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
