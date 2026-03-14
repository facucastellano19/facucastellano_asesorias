import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section id="faq" className="py-16 md:py-20 bg-brand-black">
      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase italic mb-4 block">
            {t("faq.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            {t("faq.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {Array.isArray(faqs) &&
            faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between text-left transition-colors hover:bg-white/[0.04]"
                >
                  <span className="text-lg font-bold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-brand-red">
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
