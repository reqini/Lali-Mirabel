import { motion } from 'framer-motion';
import './Contact.css';

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  phone?: string;
  instagram: string;
  image?: string;
}

interface ContactProps {
  content: ContactContent;
}

export function Contact({ content }: ContactProps) {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact__wrapper">
        {/* Foto lado izquierdo (Desktop) */}
        {content.image && (
          <motion.div
            className="contact__photo-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact__photo-container">
              <img src={content.image} alt="Lali Mirabel" className="contact__photo" />
              <div className="contact__photo-gradient"></div>
            </div>
          </motion.div>
        )}

        {/* Contenido lado derecho */}
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact__header">
            <div className="contact__badge">Let's collaborate</div>
            <h2 className="contact__title">{content.title}</h2>
            <p className="contact__description">{content.description}</p>
          </div>

          <div className="contact__cta-section">
            <p className="contact__cta-label">Elige tu forma de contactar:</p>
            
            <div className="contact__links">
              <motion.a
                href={`mailto:${content.email}`}
                className="contact__button contact__button--email"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <div className="contact__button-label">Email</div>
                  <div className="contact__button-value">{content.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/5491164225499?text=Hola%2C%20quiero%20consultar%20sobre%20tus%20servicios%20de%20contenido%20UGC`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button contact__button--whatsapp"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961 6.966 6.966 0 009.741 6.368l.459-.24 4.817 1.264-1.289-4.703.279-.452a6.956 6.956 0 001.055-3.837c0-3.859-3.136-6.999-6.999-6.999" />
                </svg>
                <div>
                  <div className="contact__button-label">WhatsApp</div>
                  <div className="contact__button-value">{content.phone}</div>
                </div>
              </motion.a>

              <motion.a
                href={content.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button contact__button--instagram"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.25 2c-2.05 0-3.55 1.5-3.55 3.55v8.5c0 2.05 1.5 3.55 3.55 3.55h8.5c2.05 0 3.55-1.5 3.55-3.55v-8.5c0-2.05-1.5-3.55-3.55-3.55h-8.5z M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z M17.5 6.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                </svg>
                <div>
                  <div className="contact__button-label">Instagram</div>
                  <div className="contact__button-value">@lalimirabel</div>
                </div>
              </motion.a>

              <motion.a
                href="https://tiktok.com/@lalimirabel"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button contact__button--tiktok"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.5-.05z" />
                </svg>
                <div>
                  <div className="contact__button-label">TikTok</div>
                  <div className="contact__button-value">@lalimirabel</div>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="contact__footer-text">
            <p>Te responderé en menos de 24 horas 💖</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
