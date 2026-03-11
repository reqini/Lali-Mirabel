import './ServicesForBrands.css';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface ServicesForBrandsProps {
  title: string;
  description: string;
  items: ServiceItem[];
}

export function ServicesForBrands({ title, description, items }: ServicesForBrandsProps) {
  return (
    <section className="services-brands">
      <div className="services-brands__container">
        <div className="services-brands__header">
          <h2 className="services-brands__title">{title}</h2>
          <p className="services-brands__description">{description}</p>
        </div>

        <div className="services-brands__grid">
          {items.map((item, index) => (
            <div key={index} className="services-brands__card">
              <div className="services-brands__icon">{item.icon}</div>
              <h3 className="services-brands__card-title">{item.title}</h3>
              <p className="services-brands__card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
