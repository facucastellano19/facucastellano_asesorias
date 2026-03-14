import { useTranslation } from "react-i18next";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-12 pb-8">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <p className="text-brand-red uppercase text-xs tracking-[0.3em] font-bold italic mb-2">
              Fitness Coach
            </p>
            <p className="text-gray-500 text-sm font-medium max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end">
            <h4 className="text-white/30 font-bold uppercase tracking-widest text-[10px] italic">
              {t("footer.social_title")}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/facucastellano.fit"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/in/facundocastellano"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.link/tsue0x"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[9px] uppercase font-bold tracking-[0.2em]">
            © {currentYear} Facundo Castellano. {t("footer.rights")}
          </p>
          <div className="h-px w-8 bg-brand-red/20 hidden md:block" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
