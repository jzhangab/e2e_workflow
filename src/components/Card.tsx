import { useFilter } from '../context/FilterContext';
import { usePreview } from '../context/PreviewContext';
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
  const { selectedCard, selectCard } = usePreview();

  const matchesCat = activeFilter === 'all' || item.cat === activeFilter;
  const text = `${item.title} ${item.desc} ${item.tags.join(' ')}`.toLowerCase();
  const matchesSearch = !searchQuery || text.includes(searchQuery.toLowerCase());
  const dimmed = !(matchesCat && matchesSearch);
  const isSelected = selectedCard?.id === item.id;

  function handleClick() {
    selectCard(isSelected ? null : item);
  }

  function handleDownload(e: React.MouseEvent) {
    e.stopPropagation();
    const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${item.id}.pdf`;
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = `${item.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div
      className={`card${dimmed ? ' dimmed' : ''}${isSelected ? ' selected' : ''}`}
      data-cat={item.cat}
      onClick={handleClick}
    >
      <button className="card-download" onClick={handleDownload} title="Download PDF">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v9M4.5 7.5 8 11l3.5-3.5M3 14h10" />
        </svg>
      </button>
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
