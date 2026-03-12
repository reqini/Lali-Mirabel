import { motion } from "framer-motion";
import "./Stats.css";

interface Feature {
  title: string;
  description: string;
}

interface CustomQuoteContent {
  title: string;
  description: string;
  features: Feature[];
  processTitle: string;
  steps: string[];
  cta: {
    text: string;
    link: string;
  };
}

interface StatsProps {
  content: CustomQuoteContent;
}

export function Stats({ content }: StatsProps) {
  return (
    <motion.section
      className="customQuote"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="customQuote__header">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="customQuote__features">
        {content.features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="customQuote__card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="customQuote__process">
        <h3>{content.processTitle}</h3>

        <ol>
          {content.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="customQuote__cta">
        <motion.a
          href="https://wa.me/5491164225499?text=Hola%20Lali%2C%20estuve%20viendo%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20recibir%20un%20presupuesto%20personalizado%20para%20crear%20contenido%20UGC%20para%20mi%20marca.%20%C2%BFPodemos%20hablar%20sobre%20la%20idea%20y%20los%20objetivos%20de%20la%20campa%C3%B1a%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="customQuote__cta-button"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          {content.cta.text}
        </motion.a>
      </div>
    </motion.section>
  );
}
