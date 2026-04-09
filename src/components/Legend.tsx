const LEGEND_ITEMS = [
  { color: '#f59e0b', label: 'Regulatory' },
  { color: '#3b82f6', label: 'Clinical' },
  { color: '#10b981', label: 'CMC' },
  { color: '#ef4444', label: 'Nonclinical' },
  { color: '#8b5cf6', label: 'Data / Biostats' },
  { color: '#ec4899', label: 'Commercial / HEOR' },
  { color: '#f97316', label: 'Safety / PV' },
];

export default function Legend() {
  return (
    <div className="legend">
      {LEGEND_ITEMS.map((item) => (
        <div className="legend-item" key={item.label}>
          <div className="legend-dot" style={{ background: item.color }} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
