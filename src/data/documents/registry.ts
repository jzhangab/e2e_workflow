import type { DocumentContent } from '../../types';

// ---------------------------------------------------------------------------
// Document Registry
//
// Separated from index.ts to avoid circular dependency issues when phase
// content files import registerDocument while index.ts also imports them.
// ---------------------------------------------------------------------------

const registry: Record<string, DocumentContent> = {};

/** Register a document so it can be retrieved by card ID. */
export function registerDocument(id: string, content: DocumentContent): void {
  registry[id] = content;
}

/** Retrieve document content by card ID. Returns a placeholder if not found. */
export function getDocumentContent(cardId: string): DocumentContent {
  const doc = registry[cardId];
  if (doc) return doc;
  return createFallbackDocument(cardId);
}

/** List all registered card IDs (useful for debugging). */
export function getRegisteredIds(): string[] {
  return Object.keys(registry);
}

// ---------------------------------------------------------------------------
// Fallback / placeholder
// ---------------------------------------------------------------------------

function createFallbackDocument(cardId: string): DocumentContent {
  const title = cardId
    .replace(/[-_]/g, ' ')
    .replace(/phase\s*\d+/i, (m) => m.toUpperCase())
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

  return {
    documentTitle: title || 'Untitled Document',
    documentNumber: `DOC-${cardId.toUpperCase().slice(0, 12).replace(/[^A-Z0-9]/g, '')}`,
    version: '1.0',
    date: '2026-01-15',
    sponsor: 'Velantis Therapeutics, Inc.',
    sections: [
      {
        heading: 'Document Placeholder',
        level: 1,
        paragraphs: [
          'This document is under development. Content will be provided in a future update.',
          'Please contact the Regulatory Affairs team for the latest draft.',
        ],
      },
    ],
  };
}
