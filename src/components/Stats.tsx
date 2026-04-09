import { PHASES } from '../data/phases';

export default function Stats() {
  const totalCards = PHASES.reduce((sum, p) => sum + p.items.length, 0);

  return (
    <div className="stats">
      {totalCards} documents &amp; datasets across {PHASES.length} phases
    </div>
  );
}
