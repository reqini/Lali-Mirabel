import './Deliverables.css';

interface DeliverableType {
  icon: string;
  title: string;
  description: string;
}

interface DeliverablesProps {
  title: string;
  description: string;
  types: DeliverableType[];
}

export function Deliverables({ title, description, types }: DeliverablesProps) {
  return (
    <section className="deliverables">
      <div className="deliverables__container">
        <div className="deliverables__header">
          <h2 className="deliverables__title">{title}</h2>
          <p className="deliverables__description">{description}</p>
        </div>

        <div className="deliverables__grid">
          {types.map((type, index) => (
            <div key={index} className="deliverables__item">
              <div className="deliverables__icon">{type.icon}</div>
              <h3 className="deliverables__item-title">{type.title}</h3>
              <p className="deliverables__item-description">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
