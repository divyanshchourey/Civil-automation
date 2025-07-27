import React, { useEffect, useRef, useState } from 'react';
import '../styles/FactsFigures.css';

const figures = [
  { value: 25, label: 'Years in Architectural & Structural Consultancy' },
  { value: 5000, label: 'Telecom Sites Completed' },
  { value: 1000, label: 'Valuation and Estimation Work Done' },
  { value: 25, label: "Cad training Software's available for Students & Professionals" },
];

const FactsFigures: React.FC = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(figures.map(() => 0));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    const durations = [1200, 1200, 1200, 1200];
    const steps = 60;
    const increments = figures.map((fig, i) => fig.value / steps);
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setCounts((prev) =>
        prev.map((count, i) =>
          frame < steps ? Math.round(increments[i] * frame) : figures[i].value
        )
      );
      if (frame >= steps) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="facts-figures-container" ref={sectionRef}>
      <h2 className="facts-figures-title">FACTS & FIGURES</h2>
      <div className="facts-figures-grid">
        {figures.map((fig, i) => (
          <div className="facts-figures-item" key={i}>
            <div className="facts-figures-number">{counts[i].toLocaleString()}</div>
            <div className="facts-figures-label">{fig.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsFigures; 