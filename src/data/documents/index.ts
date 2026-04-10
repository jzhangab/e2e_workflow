// ---------------------------------------------------------------------------
// Document Registry — Public API
//
// Re-exports from registry.ts (which holds the actual map) and triggers
// side-effect imports of all phase content files to populate the registry.
// ---------------------------------------------------------------------------

export { registerDocument, getDocumentContent, getRegisteredIds } from './registry';

// ---------------------------------------------------------------------------
// Auto-import phase content modules
//
// Each phase file calls registerDocument() at module level. Importing them
// here ensures the registry is populated when any consumer imports from
// this barrel module.
// ---------------------------------------------------------------------------

import './phase-discovery';
import './phase-preclinical';
import './phase-ind';
import './phase1';
import './phase2';
import './phase3';
import './phase-nda';
import './phase-launch';
