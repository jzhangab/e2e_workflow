import { jsPDF } from 'jspdf';
import autoTableModule from 'jspdf-autotable';
import type { DocumentContent, DocumentSection, TableData, ListData } from '../../types';

// Handle CJS/ESM interop: in bundlers autoTableModule is the function directly,
// in Node ESM it may be wrapped as { default: fn }.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const autoTable: typeof autoTableModule = typeof (autoTableModule as any).default === 'function' ? (autoTableModule as any).default : autoTableModule;

// ---------------------------------------------------------------------------
// Page geometry (A4 portrait, millimetres)
// ---------------------------------------------------------------------------
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN = 20;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN;
const HEADER_HEIGHT = 12; // space reserved for the running header
const FOOTER_HEIGHT = 14; // space reserved for the running footer
const BODY_TOP = MARGIN + HEADER_HEIGHT;
const BODY_BOTTOM = PAGE_HEIGHT - MARGIN - FOOTER_HEIGHT;

// ---------------------------------------------------------------------------
// Colour palette (pharmaceutical / professional)
// ---------------------------------------------------------------------------
const NAVY: [number, number, number] = [26, 54, 93]; // #1a365d
const WHITE: [number, number, number] = [255, 255, 255];
const LIGHT_GRAY: [number, number, number] = [247, 250, 252]; // #f7fafc
const MID_GRAY: [number, number, number] = [160, 174, 192];
const TEXT_BLACK: [number, number, number] = [30, 30, 30];
const WATERMARK_GRAY: [number, number, number] = [220, 220, 220];
const RULE_GRAY: [number, number, number] = [200, 200, 210];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Ensure current Y is within printable body. If not, add a page and reset. */
function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > BODY_BOTTOM) {
    doc.addPage();
    return BODY_TOP;
  }
  return y;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Create a fresh A4 portrait PDF document. */
export function createDocument(): jsPDF {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  doc.setFont('Helvetica');
  return doc;
}

// ---------------------------------------------------------------------------
// Cover Page
// ---------------------------------------------------------------------------

export function addCoverPage(doc: jsPDF, content: DocumentContent): void {
  // -- "CONFIDENTIAL" top banner --
  doc.setFontSize(9);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(...NAVY);
  doc.text('CONFIDENTIAL', PAGE_WIDTH / 2, MARGIN, { align: 'center' });

  // -- Sponsor name --
  const sponsorY = 60;
  doc.setFontSize(14);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(...NAVY);
  doc.text(content.sponsor.toUpperCase(), PAGE_WIDTH / 2, sponsorY, { align: 'center' });

  // -- Horizontal rule --
  const ruleY = sponsorY + 6;
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.6);
  doc.line(MARGIN + 20, ruleY, PAGE_WIDTH - MARGIN - 20, ruleY);

  // -- Document title (large, centred, possibly multi-line) --
  const titleY = ruleY + 22;
  doc.setFontSize(22);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(...TEXT_BLACK);
  const titleLines: string[] = doc.splitTextToSize(content.documentTitle, CONTENT_WIDTH - 20);
  doc.text(titleLines, PAGE_WIDTH / 2, titleY, { align: 'center' });

  // -- Metadata block --
  const metaStartY = titleY + titleLines.length * 10 + 18;
  doc.setFontSize(11);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(...TEXT_BLACK);

  const metaLines = [
    `Document Number: ${content.documentNumber}`,
    `Version: ${content.version}`,
    `Date: ${content.date}`,
  ];
  metaLines.forEach((line, i) => {
    doc.text(line, PAGE_WIDTH / 2, metaStartY + i * 7, { align: 'center' });
  });

  // -- Footer notice --
  doc.setFontSize(9);
  doc.setFont('Helvetica', 'bolditalic');
  doc.setTextColor(...MID_GRAY);
  doc.text(
    'CONFIDENTIAL \u2014 Do Not Distribute',
    PAGE_WIDTH / 2,
    PAGE_HEIGHT - MARGIN,
    { align: 'center' },
  );
}

// ---------------------------------------------------------------------------
// Running Header / Footer (applied after all content pages are rendered)
// ---------------------------------------------------------------------------

export function addHeader(doc: jsPDF, content: DocumentContent): void {
  const sponsor = content.sponsor;
  const docNum = content.documentNumber;

  doc.setFontSize(8);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(...MID_GRAY);
  doc.text(sponsor, MARGIN, MARGIN + 4);
  doc.text(docNum, PAGE_WIDTH - MARGIN, MARGIN + 4, { align: 'right' });

  // thin rule
  doc.setDrawColor(...RULE_GRAY);
  doc.setLineWidth(0.25);
  doc.line(MARGIN, MARGIN + 6, PAGE_WIDTH - MARGIN, MARGIN + 6);
}

export function addFooter(doc: jsPDF, pageNum: number, totalPages: string): void {
  const y = PAGE_HEIGHT - MARGIN + 2;
  doc.setFontSize(8);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(...MID_GRAY);
  doc.text('CONFIDENTIAL', PAGE_WIDTH / 2, y, { align: 'center' });
  doc.text(`Page ${pageNum} of ${totalPages}`, PAGE_WIDTH - MARGIN, y, { align: 'right' });
}

// ---------------------------------------------------------------------------
// Table of Contents
// ---------------------------------------------------------------------------

export function addTableOfContents(doc: jsPDF, sections: DocumentSection[]): void {
  let y = BODY_TOP;

  // Title
  doc.setFontSize(16);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(...NAVY);
  doc.text('Table of Contents', MARGIN, y);
  y += 10;

  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.4);
  doc.line(MARGIN, y, MARGIN + 60, y);
  y += 8;

  // Track section counters for numbering
  let l1 = 0;
  let l2 = 0;

  sections.forEach((section) => {
    if (section.level > 2) return; // only include level 1 & 2

    y = ensureSpace(doc, y, 7);

    if (section.level === 1) {
      l1 += 1;
      l2 = 0;
      doc.setFontSize(11);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(...TEXT_BLACK);
      const prefix = `${l1}`;
      doc.text(`${prefix}    ${section.heading}`, MARGIN, y);
    } else {
      l2 += 1;
      doc.setFontSize(10);
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(...TEXT_BLACK);
      const prefix = `${l1}.${l2}`;
      doc.text(`${prefix}    ${section.heading}`, MARGIN + 8, y);
    }

    // Dotted leader + placeholder page (will be "...")
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...MID_GRAY);
    doc.text('...', PAGE_WIDTH - MARGIN, y, { align: 'right' });

    y += 6;
  });
}

// ---------------------------------------------------------------------------
// Section Rendering (main content)
// ---------------------------------------------------------------------------

export function renderSections(doc: jsPDF, sections: DocumentSection[], startY?: number): void {
  let y = startY ?? BODY_TOP;

  // Track section numbering
  let l1 = 0;
  let l2 = 0;
  let l3 = 0;

  for (const section of sections) {
    // Update numbering
    if (section.level === 1) {
      l1 += 1;
      l2 = 0;
      l3 = 0;
    } else if (section.level === 2) {
      l2 += 1;
      l3 = 0;
    } else {
      l3 += 1;
    }

    // --- Heading ---
    const headingPrefix =
      section.level === 1
        ? `${l1}`
        : section.level === 2
          ? `${l1}.${l2}`
          : `${l1}.${l2}.${l3}`;

    const headingText = `${headingPrefix}  ${section.heading}`;

    if (section.level === 1) {
      // Level-1 headings always start on a new area with some breathing room
      y = ensureSpace(doc, y, 20);
      if (y > BODY_TOP + 10) y += 6; // extra gap before L1
      doc.setFontSize(14);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(...NAVY);
    } else if (section.level === 2) {
      y = ensureSpace(doc, y, 14);
      y += 3;
      doc.setFontSize(12);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(...NAVY);
    } else {
      y = ensureSpace(doc, y, 12);
      y += 2;
      doc.setFontSize(11);
      doc.setFont('Helvetica', 'bolditalic');
      doc.setTextColor(...TEXT_BLACK);
    }

    const headingLines: string[] = doc.splitTextToSize(headingText, CONTENT_WIDTH);
    for (const line of headingLines) {
      y = ensureSpace(doc, y, 6);
      doc.text(line, MARGIN, y);
      y += 6;
    }
    y += 2; // small gap after heading

    // --- Paragraphs ---
    if (section.paragraphs) {
      doc.setFontSize(10);
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(...TEXT_BLACK);

      for (const para of section.paragraphs) {
        const lines: string[] = doc.splitTextToSize(para, CONTENT_WIDTH);
        for (const line of lines) {
          y = ensureSpace(doc, y, 5);
          doc.text(line, MARGIN, y);
          y += 4.5;
        }
        y += 3; // paragraph spacing
      }
    }

    // --- Lists ---
    if (Array.isArray(section.lists)) {
      for (const list of section.lists) {
        y = renderList(doc, list, y);
        y += 2;
      }
    }

    // --- Tables ---
    if (section.tables) {
      for (const table of section.tables) {
        y = ensureSpace(doc, y, 30); // tables need decent space
        y = renderTable(doc, table, y);
        y += 4;
      }
    }
  }
}

// ---------------------------------------------------------------------------
// List Rendering
// ---------------------------------------------------------------------------

function renderList(doc: jsPDF, list: ListData, startY: number): number {
  let y = startY;
  const indent = MARGIN + 6;
  const textWidth = CONTENT_WIDTH - 6;

  doc.setFontSize(10);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(...TEXT_BLACK);

  list.items.forEach((item, idx) => {
    const bullet = list.ordered ? `${idx + 1}.` : '\u2022';
    const bulletWidth = list.ordered ? 6 : 3;
    const lines: string[] = doc.splitTextToSize(item, textWidth - bulletWidth);

    for (let i = 0; i < lines.length; i++) {
      y = ensureSpace(doc, y, 5);
      if (i === 0) {
        doc.text(bullet, indent - bulletWidth, y);
      }
      doc.text(lines[i], indent + 1, y);
      y += 4.5;
    }
    y += 1.5; // item spacing
  });

  return y;
}

// ---------------------------------------------------------------------------
// Table Rendering
// ---------------------------------------------------------------------------

export function renderTable(doc: jsPDF, table: TableData, startY: number): number {
  let y = startY;

  // Table title
  if (table.title) {
    y = ensureSpace(doc, y, 10);
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(...TEXT_BLACK);
    const titleLines: string[] = doc.splitTextToSize(table.title, CONTENT_WIDTH);
    for (const line of titleLines) {
      doc.text(line, MARGIN, y);
      y += 4.5;
    }
    y += 2;
  }

  // Render with autoTable
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    head: [table.headers],
    body: table.rows,
    styles: {
      font: 'Helvetica',
      fontSize: 9,
      cellPadding: 2.5,
      lineColor: [200, 200, 210],
      lineWidth: 0.15,
      textColor: TEXT_BLACK,
      overflow: 'linebreak',
    },
    headStyles: {
      fillColor: NAVY,
      textColor: WHITE,
      fontStyle: 'bold',
      halign: 'left',
    },
    alternateRowStyles: {
      fillColor: LIGHT_GRAY,
    },
    tableLineColor: [200, 200, 210],
    tableLineWidth: 0.15,
    theme: 'grid',
  });

  // Get final Y from autoTable
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalY: number = (doc as any).lastAutoTable?.finalY ?? y + 30;
  y = finalY + 2;

  // Footnotes
  if (table.footnotes && table.footnotes.length > 0) {
    doc.setFontSize(8);
    doc.setFont('Helvetica', 'italic');
    doc.setTextColor(...MID_GRAY);
    for (const fn of table.footnotes) {
      y = ensureSpace(doc, y, 4);
      const fnLines: string[] = doc.splitTextToSize(fn, CONTENT_WIDTH);
      for (const line of fnLines) {
        doc.text(line, MARGIN, y);
        y += 3.5;
      }
    }
  }

  return y;
}

// ---------------------------------------------------------------------------
// Page Numbers (post-render pass)
// ---------------------------------------------------------------------------

export function addPageNumbers(doc: jsPDF, content?: DocumentContent): void {
  const totalPages = doc.getNumberOfPages();
  const totalStr = String(totalPages);

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Skip header/footer on page 1 (cover page)
    if (i === 1) continue;

    if (content) {
      addHeader(doc, content);
    }
    addFooter(doc, i, totalStr);
  }
}

// ---------------------------------------------------------------------------
// Watermark (post-render pass)
// ---------------------------------------------------------------------------

export function addWatermark(doc: jsPDF): void {
  const totalPages = doc.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(54);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(...WATERMARK_GRAY);

    // Save graphics state, rotate, draw, restore
    doc.saveGraphicsState();
    // @ts-expect-error jsPDF GState constructor not typed
    doc.setGState(new doc.GState({ opacity: 0.08 }));

    // Draw diagonal text using translate + rotate
    const cx = PAGE_WIDTH / 2;
    const cy = PAGE_HEIGHT / 2;

    doc.text('CONFIDENTIAL', cx, cy, {
      align: 'center',
      angle: 45,
    });

    doc.restoreGraphicsState();
  }
}
