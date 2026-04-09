import {
  createDocument,
  addCoverPage,
  addTableOfContents,
  renderSections,
  addPageNumbers,
  addWatermark,
} from './templates/base-template';
import type { DocumentContent } from '../types';

/**
 * Generate and download a PDF for the given card ID.
 *
 * Workflow:
 *  1. Resolve document content from the registry (falls back to a placeholder).
 *  2. Build the PDF: cover page, table of contents, body sections.
 *  3. Apply running headers/footers and watermark across all pages.
 *  4. Trigger a browser download.
 */
export async function generatePdf(cardId: string): Promise<void> {
  // Lazy-import document content so tree-shaking can still work for the
  // data module and we avoid a circular dependency at module parse time.
  const { getDocumentContent } = await import('../data/documents');
  const content: DocumentContent = getDocumentContent(cardId);

  if (!content) {
    console.error(`[pdf-generator] No content found for card: ${cardId}`);
    return;
  }

  // ---- Build the PDF ----
  const doc = createDocument();

  // Page 1 - Cover
  addCoverPage(doc, content);

  // Page 2 - Table of Contents
  doc.addPage();
  addTableOfContents(doc, content.sections);

  // Page 3+ - Body content
  doc.addPage();
  renderSections(doc, content.sections);

  // Post-render passes (headers, footers, page numbers, watermark)
  addPageNumbers(doc, content);
  addWatermark(doc);

  // ---- Download ----
  const safeName = (str: string) =>
    str.replace(/[^a-zA-Z0-9-]/g, '_').replace(/_+/g, '_');

  const filename = [
    safeName(content.documentNumber),
    safeName(content.documentTitle.slice(0, 40)),
  ].join('_') + '.pdf';

  doc.save(filename);
}
