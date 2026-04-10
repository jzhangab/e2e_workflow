import { usePreview } from '../context/PreviewContext';

const ICONS: Record<string, string> = {
  regulatory: '\ud83d\udccb',
  clinical: '\ud83c\udfe5',
  cmc: '\u2697\ufe0f',
  nonclinical: '\ud83d\udd2c',
  data: '\ud83d\udcca',
  commercial: '\ud83d\udcbc',
  safety: '\ud83d\udee1\ufe0f',
};

export default function PreviewPanel() {
  const { selectedCard, selectCard } = usePreview();

  if (!selectedCard) {
    return (
      <div className="preview-panel preview-empty">
        <div className="preview-empty-content">
          <div className="preview-empty-icon">\ud83d\udcc4</div>
          <p>Click any document card to preview it here</p>
        </div>
      </div>
    );
  }

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${selectedCard.id}.pdf`;

  function handleDownload() {
    if (!selectedCard) return;
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = `${selectedCard.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="preview-panel">
      <div className="preview-header">
        <div className="preview-title-row">
          <span className="preview-icon">{ICONS[selectedCard.cat] || '\ud83d\udcc4'}</span>
          <h3 className="preview-title">{selectedCard.title}</h3>
        </div>
        <div className="preview-actions">
          <button className="preview-btn preview-download-btn" onClick={handleDownload} title="Download PDF">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v9M4.5 7.5 8 11l3.5-3.5M3 14h10" />
            </svg>
            Download
          </button>
          <button className="preview-btn preview-close-btn" onClick={() => selectCard(null)} title="Close preview">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>
      </div>
      <div className="preview-meta">
        <span className={`preview-cat-badge preview-cat-${selectedCard.cat}`}>{selectedCard.cat}</span>
        <div className="preview-tags">
          {selectedCard.tags.map((tag) => (
            <span className="preview-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="preview-body">
        <iframe
          key={selectedCard.id}
          src={pdfUrl}
          className="preview-iframe"
          title={`Preview: ${selectedCard.title}`}
        />
      </div>
    </div>
  );
}
