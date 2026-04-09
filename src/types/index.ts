export type DocumentCategory = 'regulatory' | 'clinical' | 'cmc' | 'nonclinical' | 'data' | 'commercial' | 'safety';
export type PhaseKey = 'discovery' | 'preclinical' | 'ind' | 'phase1' | 'phase2' | 'phase3' | 'nda' | 'launch';
export type TemplateType = 'report' | 'regulatory' | 'data' | 'safety' | 'commercial';

export interface TableData {
  title?: string;
  headers: string[];
  rows: string[][];
  footnotes?: string[];
}

export interface ListData {
  items: string[];
  ordered?: boolean;
}

export interface DocumentSection {
  heading: string;
  level: 1 | 2 | 3;
  paragraphs?: string[];
  tables?: TableData[];
  lists?: ListData[];
}

export interface DocumentContent {
  documentTitle: string;
  documentNumber: string;
  version: string;
  date: string;
  sponsor: string;
  sections: DocumentSection[];
}

export interface DocumentConfig {
  templateType: TemplateType;
  filename: string;
  content: DocumentContent;
}

export interface CardItem {
  id: string;
  title: string;
  desc: string;
  cat: DocumentCategory;
  tags: string[];
}

export interface Phase {
  phase: PhaseKey;
  label: string;
  num: string;
  items: CardItem[];
}
