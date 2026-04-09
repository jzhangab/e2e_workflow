import { useState } from 'react';
import { useFilter } from '../context/FilterContext';
import type { CardItem } from '../types';

const ICONS: Record<string, string> = {
  regulatory: '\ud83d\udccb',
  clinical: '\ud83c\udfe5',
  cmc: '\u2697\ufe0f',
  nonclinical: '\ud83d\udd2c',
  data: '\ud83d\udcca',
  commercial: '\ud83d\udcbc',
  safety: '\ud83d\udee1\ufe0f',
};

interface CardProps {
  item: CardItem;
}

export default function Card({ item }: CardProps) {
  const { activeFilter, searchQuery } = useFilter();
  const [loading, setLoading] = useState(false);

  const matchesCat = activeFilter === 'all' || item.cat === activeFilter;
  const text = `${item.title} ${item.desc} ${item.tags.join(' ')}`.toLowerCase();
  const matchesSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
  const dimmed = !(matchesCat && matchesSearch);

  async function handleDownload() {
    if (loading) return;
    setLoading(true);
    try {
      const { generatePdf } = await import('../pdf/generator');
      await generatePdf(item.id);
    } catch (err) {
      console.error('[PDF generation failed]', item.id, err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`card${dimmed ? ' dimmed' : ''}`}
      data-cat={item.cat}
      onClick={handleDownload}
    >
      {loading && (
        <div className="card-loading-overlay">
          <div className="card-spinner" />
        </div>
      )}
      <div className="card-title">
        <span className="icon">{ICONS[item.cat] || '\ud83d\udcc4'}</span>
        {item.title}
      </div>
      <div className="card-desc">{item.desc}</div>
      <div className="card-tags">
        {item.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
