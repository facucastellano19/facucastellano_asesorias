import { useTranslation } from "react-i18next";
import Button from "../common/Button";
import heroImg from "../../assets/facundo_hero.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center bg-brand-black overflow-hidden">
      {/* VISTA DESKTOP */}
      <div className="hidden md:flex w-full max-w-[1400px] mx-auto px-10 items-center justify-between gap-24 z-10 pt-20 pb-16">
        {/* Lado Izquierdo */}
        <div className="w-1/2 flex flex-col items-start">
          <div className="mb-6">
            <span className="px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-bold tracking-widest uppercase italic">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-[100px] lg:text-[120px] font-black leading-[0.8] tracking-tighter mb-8 uppercase italic">
            {t("hero.title_white_1")} {t("hero.title_white_2")} <br />
            <span className="text-brand-red">{t("hero.title_red")}</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-lg mb-12 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex gap-6">
            <Button variant="primary" className="!px-10 !py-5 text-lg">
              {t("hero.cta_main")}
            </Button>
            <Button variant="outline" className="!px-10 !py-5 text-lg">
              {t("hero.cta_secondary")}
            </Button>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 relative flex justify-center items-center z-10 pt-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-red/3 blur-[90px] rounded-full z-0 pointer-events-none" />

          <div className="relative w-full max-w-[580px] h-[70vh] overflow-hidden rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-brand-dark-gray border border-white/5">
            <img
              src={heroImg}
              alt="Facundo Castellano"
              className="w-full h-full object-cover object-[center_30%]"
            />

            {/* 1. Degradado Izquierdo */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brand-black/60 to-transparent z-10" />

            {/* 2. Degradado Derecho */}
            <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-brand-black/60 to-transparent z-10" />

            {/* 3. Degradado Inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-black/60 to-transparent z-10" />

            {/* 4. Degradado Superior */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-black/40 to-transparent z-10" />
          </div>
        </div>
      </div>

      {/* VISTA MOBILE */}
      <div className="md:hidden flex flex-col justify-end min-h-[100dvh] w-full relative">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            className="w-full h-full object-cover object-[center_15%]"
            alt="Coach"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent via-5%" />
        </div>

        <div className="relative z-10 px-6 pb-6 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.8] mb-3 italic uppercase tracking-tighter">
            {t("hero.title_white_1")} {t("hero.title_white_2")} <br />
            <span className="text-brand-red">{t("hero.title_red")}</span>
          </h1>

          <p className="text-gray-300 text-[11px] mb-5 max-w-[280px] leading-tight uppercase tracking-wider">
            {t("hero.description")}
          </p>

          <div className="flex flex-col gap-2 w-full max-w-[280px]">
            <Button variant="primary" className="!py-3 !text-xs uppercase">
              {t("hero.cta_main")}
            </Button>
            <Button variant="outline" className="!py-3 !text-xs uppercase">
              {t("hero.cta_secondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
