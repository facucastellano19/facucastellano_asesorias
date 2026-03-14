import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import Card from "../common/Card";
import {
  Scale,
  TrendingDown,
  Activity,
  Frown,
  HelpCircle,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  scale: <Scale size={24} />,
  "trending-down": <TrendingDown size={24} />,
  activity: <Activity size={24} />,
  frown: <Frown size={24} />,
  "help-circle": <HelpCircle size={24} />,
  clock: <Clock size={24} />,
};

const Problems = () => {
  const { t } = useTranslation();

  const problems = t("problems.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="problems"
      className="py-16 md:py-20 bg-brand-black overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl"
        >
          <span className="text-brand-red font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase italic mb-6 block">
            {t("problems.subtitle")}
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9]">
            <span className="block">{t("problems.title_1")}</span>
            <span className="text-brand-red block">
              {t("problems.title_red")}
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((prob, index) => (
            <Card
              key={index}
              variant="problem"
              title={prob.title}
              description={prob.description}
              icon={iconMap[prob.icon]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
