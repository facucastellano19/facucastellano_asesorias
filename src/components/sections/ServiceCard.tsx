import { motion, type Variants } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServiceCard = ({ title, description, features }: ServiceCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group relative bg-white/[0.02] p-12 rounded-[32px] border border-white/5 hover:border-brand-red/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(185,28,28,0.1)]">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      <h3 className="text-3xl font-black mb-5 italic uppercase tracking-tighter text-white relative z-10">
        {title}
      </h3>

      <p className="text-gray-400 text-base leading-relaxed mb-10 font-medium relative z-10">
        {description}
      </p>

      <ul className="mt-auto space-y-4 relative z-10">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 text-sm font-bold text-gray-300 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_10px_rgba(185,28,28,0.3)]" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
