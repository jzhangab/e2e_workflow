import { PHASES } from '../data/phases';
import PhaseBlock from './PhaseBlock';

export default function Timeline() {
  return (
    <div className="timeline">
      {PHASES.map((phase, i) => (
        <PhaseBlock key={phase.phase} phase={phase} index={i} />
      ))}
    </div>
  );
}
