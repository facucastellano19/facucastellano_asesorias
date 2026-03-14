import { motion, type Variants } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  features?: string[];
  variant?: "service" | "problem";
  icon?: React.ReactNode;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Card = ({
  title,
  description,
  features,
  variant = "service",
  icon,
}: CardProps) => {
  const isService = variant === "service";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className={`group relative bg-white/[0.02] border border-white/5 flex flex-col h-full w-full overflow-hidden
        ${isService ? "p-10 rounded-[40px] hover:border-brand-red/40" : "flex-row items-start p-6 rounded-2xl gap-5 hover:bg-white/[0.04]"}`}
    >
      {isService && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Contenedor del Icono */}
      <div
        className={`flex items-center justify-center rounded-2xl shrink-0 transition-all duration-500 relative z-10
        ${isService ? "w-12 h-12 bg-brand-red/10 text-brand-red mb-8" : "w-10 h-10 bg-white/5 text-brand-red group-hover:bg-brand-red/10"}`}
      >
        {icon || (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>

      {/* Contenido de Texto */}
      <div className="flex flex-col flex-grow relative z-10 w-full">
        <h3
          className={`font-black italic uppercase tracking-tight text-white hyphens-auto break-words
          ${isService ? "text-2xl mb-4" : "text-lg mb-1"}`}
          style={{ hyphens: 'auto' }}
        >
          {title}
        </h3>

        <p
          className={`text-gray-400 leading-relaxed font-medium hyphens-auto break-words
          ${isService ? "text-sm mb-8" : "text-xs"}`}
          style={{ hyphens: 'auto' }}
        >
          {description}
        </p>

        {isService && features && (
          <ul className="mt-auto space-y-3 pt-2">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-xs font-bold text-gray-300 uppercase tracking-widest"
              >
                <span className="w-1 h-1 rounded-full bg-brand-red shadow-[0_0_8px_rgba(185,28,28,0.4)]" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Card;