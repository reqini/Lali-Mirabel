import './WorkProcess.css';

interface WorkStep {
  number: number;
  title: string;
  description: string;
}

interface WorkProcessProps {
  title: string;
  description: string;
  steps: WorkStep[];
}

export function WorkProcess({ title, description, steps }: WorkProcessProps) {
  return (
    <section className="work-process">
      <div className="work-process__container">
        <div className="work-process__header">
          <h2 className="work-process__title">{title}</h2>
          <p className="work-process__description">{description}</p>
        </div>

        <div className="work-process__timeline">
          {steps.map((step, index) => (
            <div key={index} className="work-process__step">
              <div className="work-process__step-number">
                <span>{step.number}</span>
              </div>
              <div className="work-process__step-content">
                <h3 className="work-process__step-title">{step.title}</h3>
                <p className="work-process__step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="work-process__connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
