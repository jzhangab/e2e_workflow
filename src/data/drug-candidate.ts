export const DRUG = {
  name: 'Velanexor',
  code: 'VLX-4070',
  fullName: 'Velanexor (VLX-4070)',
  mechanism: 'Selective allosteric inhibitor of KRAS G12C',
  mechanismDetail: 'VLX-4070 binds covalently to the switch II pocket of KRAS G12C in its GDP-bound (inactive) state, locking the protein in an inactive conformation and preventing GTP loading and downstream RAF/MEK/ERK signaling.',
  indication: 'KRAS G12C-mutant non-small cell lung cancer (NSCLC)',
  indicationShort: 'NSCLC',
  route: 'Oral',
  formulation: 'Film-coated tablet',
  doses: ['50mg', '100mg', '200mg', '400mg', '600mg'],
  recommendedDose: '400mg QD',
  mtd: '600mg QD (DLT: Grade 3 hepatotoxicity)',
  sponsor: 'Velantis Therapeutics, Inc.',
  sponsorAddress: '200 Innovation Drive, Cambridge, MA 02142',
} as const;

// Study identifiers
export const STUDIES = {
  phase1: { id: 'VLX-4070-001', title: 'A Phase 1, Open-Label, Dose-Escalation and Dose-Expansion Study of VLX-4070 in Patients with Advanced KRAS G12C-Mutant Solid Tumors', startDate: '2023-09-15', endDate: '2024-12-20', patients: 68 },
  phase1Food: { id: 'VLX-4070-002', title: 'A Phase 1, Open-Label, Crossover Study to Evaluate the Effect of Food on the Pharmacokinetics of VLX-4070 in Healthy Volunteers', startDate: '2024-02-10', endDate: '2024-05-18', patients: 24 },
  phase2: { id: 'VLX-4070-003', title: 'A Phase 2, Open-Label Study of VLX-4070 in Patients with Previously Treated KRAS G12C-Mutant NSCLC (BEACON-Lung)', startDate: '2024-06-01', endDate: '2025-08-30', patients: 146 },
  phase3: { id: 'VLX-4070-004', title: 'A Phase 3, Randomized, Open-Label Study of VLX-4070 versus Docetaxel in Previously Treated Patients with KRAS G12C-Mutant NSCLC (LUMINOS-1)', startDate: '2025-01-15', endDate: '2026-06-30', patients: 560 },
  ole: { id: 'VLX-4070-005', title: 'An Open-Label Extension Study of VLX-4070 in Patients Who Completed Prior VLX-4070 Studies', startDate: '2025-03-01', endDate: 'Ongoing', patients: 89 },
} as const;

// Regulatory identifiers
export const REGULATORY = {
  indNumber: '156789',
  ndaNumber: '217834',
  indFiledDate: '2023-06-15',
  fastTrackDate: '2023-08-20',
  breakthroughDate: '2025-04-10',
  priorityReviewDate: '2026-03-01',
  ndaFiledDate: '2026-02-15',
  approvalDate: '2026-09-15',
  pdufa: '2026-09-15',
} as const;

// Key efficacy data
export const EFFICACY = {
  phase1: { orr: '23%', dcrPercent: '68%', medianDor: '5.4 months', note: 'In dose-escalation cohort (all tumor types)' },
  phase2: { orr: '42%', crRate: '3.4%', prRate: '38.6%', dcr: '81%', medianPfs: '7.8 months', medianOs: '14.2 months', medianDor: '8.1 months' },
  phase3: { pfsHr: '0.58', pfsCI: '0.47-0.72', pfsP: '<0.0001', medianPfsVlx: '7.4 months', medianPfsDoc: '4.1 months', osHr: '0.72', osCI: '0.58-0.89', osP: '0.002', medianOsVlx: '15.8 months', medianOsDoc: '10.4 months', orrVlx: '39.8%', orrDoc: '12.5%' },
} as const;

// Key safety data
export const SAFETY = {
  commonAEs: [
    { event: 'Diarrhea', allGrade: '34%', grade3Plus: '4.2%' },
    { event: 'Nausea', allGrade: '28%', grade3Plus: '1.8%' },
    { event: 'Fatigue', allGrade: '24%', grade3Plus: '3.1%' },
    { event: 'ALT increased', allGrade: '22%', grade3Plus: '8.0%' },
    { event: 'AST increased', allGrade: '20%', grade3Plus: '6.5%' },
    { event: 'Decreased appetite', allGrade: '18%', grade3Plus: '1.2%' },
    { event: 'Vomiting', allGrade: '16%', grade3Plus: '1.5%' },
    { event: 'Peripheral edema', allGrade: '12%', grade3Plus: '0.8%' },
    { event: 'QTc prolongation', allGrade: '8%', grade3Plus: '2.1%' },
    { event: 'Rash', allGrade: '7%', grade3Plus: '0.5%' },
  ],
  discontinuationRate: '12.4%',
  saeRate: '18.6%',
  deathsRelated: '0.4%',
  hepatotoxicityNote: 'Grade 3+ hepatotoxicity (ALT/AST >5x ULN) observed in 8.0%/6.5% of patients; managed with dose modification and monitoring per hepatotoxicity management algorithm.',
  qtcNote: 'QTc prolongation >60ms from baseline in 2.1%; ECG monitoring recommended.',
} as const;

// Companion diagnostic
export const CDX = {
  name: 'VelaDx KRAS G12C NGS Assay',
  partner: 'Genomic Precision, Inc.',
  technology: 'Next-generation sequencing (NGS)',
  submissionType: 'PMA',
  pmaNumber: 'P260012',
} as const;

// Key dates timeline
export const TIMELINE = {
  targetIdComplete: '2021-06-30',
  leadOptComplete: '2022-03-15',
  preclinicalComplete: '2023-05-30',
  indFiled: '2023-06-15',
  indEffective: '2023-07-15',
  phase1Start: '2023-09-15',
  phase1Complete: '2024-12-20',
  phase2Start: '2024-06-01',
  phase2Complete: '2025-08-30',
  phase3Start: '2025-01-15',
  phase3Interim: '2025-12-15',
  phase3Complete: '2026-06-30',
  ndaFiled: '2026-02-15',
  adcomDate: '2026-07-22',
  approvalDate: '2026-09-15',
} as const;
