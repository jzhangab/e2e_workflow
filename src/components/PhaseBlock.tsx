import { useState } from 'react';
import type { Phase } from '../types';
import Card from './Card';

interface PhaseBlockProps {
  phase: Phase;
  index: number;
}

export default function PhaseBlock({ phase, index }: PhaseBlockProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`phase${expanded ? '' : ' collapsed'}`}
      data-phase={phase.phase}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="phase-header">
        <div className="phase-badge" onClick={() => setExpanded((v) => !v)}>
          <span className="num">{phase.num}</span> {phase.label}
        </div>
      </div>
      <div className="cards">
        {phase.items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
