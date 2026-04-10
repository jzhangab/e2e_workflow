/**
 * PDF Generation Build Script
 *
 * Generates static PDF files for all 92 document cards in the clinical
 * development workflow. Run with: npm run generate-pdfs
 *
 * Uses the same jsPDF template functions as the browser-side generator,
 * but outputs to files instead of triggering downloads.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { PHASES } from '../src/data/phases.js';
import { getDocumentContent } from '../src/data/documents/index.js';
import {
  createDocument,
  addCoverPage,
  addTableOfContents,
  renderSections,
  addPageNumbers,
  addWatermark,
} from '../src/pdf/templates/base-template.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'pdfs');

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const cardIds = PHASES.flatMap((phase) => phase.items.map((item) => item.id));
  console.log(`Generating ${cardIds.length} PDFs into ${OUT_DIR}...\n`);

  let success = 0;
  let failed = 0;

  for (const cardId of cardIds) {
    try {
      const content = getDocumentContent(cardId);

      const doc = createDocument();
      addCoverPage(doc, content);
      doc.addPage();
      addTableOfContents(doc, content.sections);
      doc.addPage();
      renderSections(doc, content.sections);
      addPageNumbers(doc, content);
      addWatermark(doc);

      const pdfBuffer = doc.output('arraybuffer');
      const filePath = join(OUT_DIR, `${cardId}.pdf`);
      await writeFile(filePath, Buffer.from(pdfBuffer));

      success++;
      console.log(`  [${String(success).padStart(2)}/${cardIds.length}] ${cardId}.pdf`);
    } catch (err) {
      failed++;
      console.error(`  FAILED: ${cardId}`, err);
    }
  }

  console.log(`\nDone. ${success} generated, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

main();
