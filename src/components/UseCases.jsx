import { FaBolt, FaSnowflake, FaCar, FaHardHat, FaNetworkWired, FaCog } from 'react-icons/fa';
// import sampleUse1 from '../assets/sample use 1.png';
// import sampleUse2 from '../assets/sample use2.png';
// import sampleUse3 from '../assets/sample use 3.png';
// import exampleAnswer from '../assets/exapmle answer.png';
import './UseCases.css';

const useCases = [
  {
    icon: <FaBolt />,
    title: 'Electricians',
    question: '"Is this connector supposed to be 1/2 inch or 3/4?"',
    answer: '"Use 3/4 inch. Code requires it for exterior applications over 20 amps."',
    color: '#f59e0b'
  },
  {
    icon: <FaSnowflake />,
    title: 'HVAC Technicians',
    question: '"What\'s the refrigerant charge for this model?"',
    answer: '"This unit requires 6.5 lbs of R-410A. Check the compressor label to verify."',
    color: '#06b6d4'
  },
  {
    icon: <FaCar />,
    title: 'Auto Mechanics',
    question: '"What\'s the torque spec for this bolt?"',
    answer: '"75 ft-lbs for the cylinder head bolts. Tighten in a star pattern."',
    color: '#ef4444'
  },
  {
    icon: <FaHardHat />,
    title: 'General Contractors',
    question: '"What\'s the spacing requirement for these joists?"',
    answer: '"16 inches on center for residential floor joists in this application."',
    color: '#f59e0b'
  },
  {
    icon: <FaNetworkWired />,
    title: 'Network Installers',
    question: '"Show me the T-568B wiring standard"',
    answer: '"Orange-white, orange, green-white, blue, blue-white, green, brown-white, brown."',
    color: '#8b5cf6'
  },
  {
    icon: <FaCog />,
    title: 'Industrial Maintenance',
    question: '"How do I reset this PLC?"',
    answer: '"Press and hold the reset button for 5 seconds. LED will flash amber twice."',
    color: '#10b981'
  }
];

const UseCases = () => {
  return (
    <section className="use-cases" id="use-cases">
      <div className="content">
        <h2 className="section-heading">
          Built For The Professionals Who Build Our World
        </h2>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="use-case-card glass-card"
            >
              <div className="use-case-header">
                <div className="use-case-icon" style={{ color: useCase.color }}>
                  {useCase.icon}
                </div>
                <h3>{useCase.title}</h3>
              </div>

              <div className="conversation">
                <div className="question">
                  <div className="chat-bubble user">
                    <span className="label">YOU</span>
                    <p>{useCase.question}</p>
                  </div>
                </div>

                <div className="answer">
                  <div className="chat-bubble ai">
                    <span className="label">SPOTEE AI</span>
                    <p>{useCase.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="visual-examples">
          <h3 className="examples-title">See It In Action</h3>
          <p className="examples-subtitle">Real-world scenarios from the perspective of IntelliMoose</p>

          <div className="examples-grid">
            <div className="example-card glass-card">
              <p>Identifying wire terminals and color codes</p>
            </div>

            <div className="example-card glass-card">
              <p>Reading component labels and specifications</p>
            </div>

            <div className="example-card glass-card">
              <p>Inspecting equipment and getting instant guidance</p>
            </div>

            <div className="example-card glass-card featured">
              <p>AI provides clear, step-by-step instructions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
