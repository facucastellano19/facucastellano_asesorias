import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    features: string[];
  }>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-black relative">
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
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
