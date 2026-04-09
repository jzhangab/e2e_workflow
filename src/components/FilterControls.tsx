import { useFilter } from '../context/FilterContext';
import type { DocumentCategory } from '../types';

const FILTERS: Array<{ value: 'all' | DocumentCategory; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'regulatory', label: 'Regulatory' },
  { value: 'clinical', label: 'Clinical' },
  { value: 'cmc', label: 'CMC' },
  { value: 'nonclinical', label: 'Nonclinical' },
  { value: 'data', label: 'Data / Biostats' },
  { value: 'commercial', label: 'Commercial / HEOR' },
  { value: 'safety', label: 'Safety / PV' },
];

export default function FilterControls() {
  const { activeFilter, setActiveFilter } = useFilter();

  return (
    <div className="controls">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
          onClick={() => setActiveFilter(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
