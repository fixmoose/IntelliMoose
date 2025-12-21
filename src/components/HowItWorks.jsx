import { FaArrowRight } from 'react-icons/fa';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Smart Glasses',
    description: 'Camera, microphone, earpiece. Simple input/output device—no complex electronics to break or replace.',
    icon: '👓'
  },
  {
    number: '02',
    title: 'Processing Unit',
    description: 'Compact computer mounted on cap/helmet or belt. Handles connection and processing.',
    icon: '🔧'
  },
  {
    number: '03',
    title: 'AI Engine',
    description: 'Claude, Gemini, or local LLM analyzes what you see, understands your question, searches your manuals.',
    icon: '🧠'
  },
  {
    number: '04',
    title: 'Instant Answer',
    description: 'Voice response in your ear with the exact information you need, exactly when you need it.',
    icon: '💬'
  }
];

const example = [
  { step: 1, text: "You're looking at a communication terminal with multiple colored wires" },
  { step: 2, text: 'You ask: "Hey Spotee, which color goes in first?"' },
  { step: 3, text: 'Camera captures the terminal, AI references the uploaded manual' },
  { step: 4, text: 'Voice responds: "Start with red, then blue, then purple. Red carries the primary signal."' }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="content">
        <h2 className="section-heading">
          How IntelliMoose Works
        </h2>

        <div className="architecture">
          {steps.map((step, index) => (
            <div key={index} className="arch-step">
              <div className="arch-card glass-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="arrow-connector">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="example-section glass-card">
          <h3 className="example-title">Real-World Example</h3>
          <div className="example-steps">
            {example.map((item, index) => (
              <div key={index} className="example-step">
                <div className="example-number">{item.step}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
