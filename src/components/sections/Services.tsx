import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import Card from "../common/Card";
import { UserCheck, Calendar, MessageCircle, Video } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "user-check": <UserCheck size={28} />,
  calendar: <Calendar size={28} />,
  "message-circle": <MessageCircle size={28} />,
  video: <Video size={28} />,
};

const Services = () => {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    features: string[];
    icon: string;
  }>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-brand-black relative">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase italic mb-4 block">
            {t("services.subtitle")}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            {t("services.title")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-[1100px] mx-auto justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Array.isArray(services) &&
            services.map((service, index) => (
              <Card
                key={index}
                variant="service"
                title={service.title}
                description={service.description}
                features={service.features}
                icon={iconMap[service.icon]}
              />
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full max-w-[900px] bg-[#9b111e] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-2 leading-tight tracking-tighter">
              {t("services.cta_title")}
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium max-w-md">
              {t("services.cta_description")}
            </p>
          </div>

          <a
            href="https://wa.link/tsue0x"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group bg-white text-[#9b111e] font-black uppercase italic px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap text-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.48 5.228 3.48 8.404c0 6.556-5.332 11.888-11.888 11.888-2.012 0-3.986-.511-5.741-1.483l-6.242 1.638zm5.921-4.435c1.614.96 3.447 1.468 5.319 1.468 5.727 0 10.388-4.661 10.388-10.388 0-2.775-1.081-5.384-3.045-7.348s-4.573-3.045-7.343-3.045c-5.727 0-10.388 4.661-10.388 10.388 0 1.933.539 3.82 1.56 5.45l-1.028 3.754 3.857-1.011zm11.767-7.013c-.134-.224-.493-.359-.134-.224z" />
            </svg>
            {t("services.cta_button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
