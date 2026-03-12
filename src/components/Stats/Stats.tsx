import { motion } from "framer-motion";
import "./Stats.css";

export function Stats() {
  const features = [
    {
      title: "Estrategia personalizada",
      description: "Analizo tu marca, objetivos y audiencia antes de proponer cualquier solución.",
    },
    {
      title: "UX pensada para conversión",
      description: "Diseño experiencias que no solo se ven bien, sino que convierten.",
    },
    {
      title: "Desarrollo optimizado",
      description: "Código rápido, escalable y pensado para crecer junto a tu proyecto.",
    },
    {
      title: "Solución a medida",
      description: "Cada proyecto es único. Nada de plantillas genéricas.",
    },
  ];

  const steps = [
    "Me contás tu idea",
    "Analizo necesidades",
    "Recibís propuesta personalizada",
  ];

  return (
    <motion.section
      className="customQuote"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="customQuote__header">
        <h2>Presupuesto personalizado</h2>
        <p>
          Cada proyecto tiene necesidades diferentes. Analizo tu marca y creo
          una propuesta a medida para lograr el mayor impacto posible.
        </p>
      </div>

      <div className="customQuote__features">
        {features.map((feature, i) => (
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
        <h3>Cómo funciona</h3>
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="customQuote__cta">
        <motion.a
          /* href="https://wa.me/5491164225499?text=Hola%20Lali%2C%20quiero%20consultar%20sobre%20un%20presupuesto%20para%20contenido%20UGC" */
          href="https://wa.me/5491164225499?text=Hola%20Lali%2C%20estuve%20viendo%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20recibir%20un%20presupuesto%20personalizado%20para%20crear%20contenido%20UGC%20para%20mi%20marca.%20%C2%BFPodemos%20hablar%20sobre%20la%20idea%20y%20los%20objetivos%20de%20la%20campa%C3%B1a%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="customQuote__cta-button"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar presupuesto por WhatsApp
        </motion.a>
      </div>
    </motion.section>
  );
}
