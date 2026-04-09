import { registerDocument } from './index';
import { DRUG, STUDIES, REGULATORY, EFFICACY, SAFETY, CDX } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// =============================================================================
// Phase 08 — Approval & Post-Marketing
// =============================================================================

// ---------------------------------------------------------------------------
// 1. phase08-fda-approval-letter  (TIER 1)
// ---------------------------------------------------------------------------
const approvalLetter: DocumentContent = {
  documentTitle: `FDA Approval Letter — NDA ${REGULATORY.ndaNumber}, ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-001',
  version: '1.0',
  date: REGULATORY.approvalDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Approval Letter',
      level: 1,
      paragraphs: [
        `Dear Dr. Sarah Chen:`,
        `Please refer to your New Drug Application (NDA) ${REGULATORY.ndaNumber}, submitted ${REGULATORY.ndaFiledDate}, received ${REGULATORY.ndaFiledDate}, under Section 505(b)(1) of the Federal Food, Drug, and Cosmetic Act for ${DRUG.name} (${DRUG.code}) Tablets, ${DRUG.doses.join(', ')}.`,
        `We acknowledge receipt of your amendments dated April 15, 2026, May 10, 2026, June 15, 2026, and August 1, 2026.`,
        `This new drug application provides for the use of ${DRUG.name} (${DRUG.code}) for the treatment of adult patients with KRAS G12C-mutated locally advanced or metastatic non-small cell lung cancer (NSCLC), as determined by an FDA-approved test, who have received at least one prior systemic therapy.`,
        `We have completed the review of this application, as amended. It is approved, effective on the date of this letter, for use as recommended in the enclosed agreed-upon labeling text.`,
      ],
    },
    {
      heading: '2. Approved Indication',
      level: 1,
      paragraphs: [
        `${DRUG.name} is indicated for the treatment of adult patients with KRAS G12C-mutated locally advanced or metastatic non-small cell lung cancer (NSCLC), as determined by an FDA-approved test, who have received at least one prior systemic therapy.`,
        `This indication is approved under Priority Review. ${DRUG.name} received Breakthrough Therapy Designation for this indication.`,
      ],
    },
    {
      heading: '3. Approval Conditions',
      level: 1,
      paragraphs: [
        'Approval of this application is subject to the following conditions:',
      ],
      lists: {
        items: [
          `The approved labeling, including the Prescribing Information, Medication Guide, and Patient Information, must be used in the promotion and distribution of ${DRUG.name}.`,
          `The Risk Evaluation and Mitigation Strategy (REMS) for ${DRUG.name} must be implemented as described in the approved REMS document.`,
          `The companion diagnostic, ${CDX.name} (PMA ${CDX.pmaNumber}), approved concurrently, must be referenced in the labeling.`,
          'Post-marketing requirements and post-marketing commitments as detailed in this letter must be fulfilled within the specified timelines.',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '4. Post-Marketing Requirements (PMRs)',
      level: 1,
      paragraphs: [
        `Under Section 505(o)(3) of the Federal Food, Drug, and Cosmetic Act, the following post-marketing requirements are imposed:`,
      ],
      tables: [
        {
          title: 'Table 1. Post-Marketing Requirements',
          headers: ['PMR #', 'Description', 'Milestone', 'Due Date'],
          rows: [
            ['PMR 3204-1', 'Conduct a long-term carcinogenicity study in the Tg.rasH2 mouse model to evaluate the carcinogenic potential of VLX-4070', 'Final study report', '2028-12-31'],
            ['PMR 3204-2', 'Conduct a mechanistic study to characterize the hepatotoxicity pathway of VLX-4070, including in vitro hepatocyte assays and identification of predictive biomarkers', 'Final study report', '2028-06-30'],
            ['PMR 3204-3', 'Conduct a thorough QT study (ICH E14 compliant) to fully characterize the concentration-QTc relationship of VLX-4070', 'Final study report', '2028-03-31'],
          ],
        },
      ],
    },
    {
      heading: '5. Post-Marketing Commitments (PMCs)',
      level: 1,
      paragraphs: [
        'The following post-marketing commitments have been agreed upon:',
      ],
      tables: [
        {
          title: 'Table 2. Post-Marketing Commitments',
          headers: ['PMC #', 'Description', 'Milestone', 'Due Date'],
          rows: [
            ['PMC 3204-1', `Conduct a Phase 3b/4 randomized study of ${DRUG.code} in combination with pembrolizumab versus pembrolizumab alone in first-line KRAS G12C-mutant NSCLC`, 'Protocol submission', '2027-06-30'],
            ['PMC 3204-2', 'Reaffirm pediatric study waiver per agreed Pediatric Study Plan; submit annual update reports', 'Annual report', 'Annually from approval'],
            ['PMC 3204-3', `Conduct a PASS (Post-Authorization Safety Study) evaluating hepatotoxicity incidence in real-world clinical practice over 3 years`, 'Final study report', '2029-09-15'],
          ],
        },
      ],
    },
    {
      heading: '6. Approved Labeling Reference',
      level: 1,
      paragraphs: [
        'The approved labeling for this product is enclosed with this letter. The prescribing information includes Highlights of Prescribing Information, Full Prescribing Information (Sections 1-17), and the Medication Guide. The labeling was last revised on the date of this approval letter.',
        `The National Drug Code (NDC) numbers for ${DRUG.name} tablets are: 72814-001-30 (400mg, 30-count bottle), 72814-002-30 (200mg, 30-count bottle), 72814-003-30 (100mg, 30-count bottle).`,
      ],
    },
    {
      heading: '7. Summary Basis of Approval — Key Highlights',
      level: 1,
      paragraphs: [
        `The approval of ${DRUG.name} is based on the totality of the clinical development program, with the pivotal evidence derived from the Phase 3 LUMINOS-1 trial (${STUDIES.phase3.id}).`,
      ],
      tables: [
        {
          title: 'Table 3. Summary Basis of Approval — Key Efficacy Data',
          headers: ['Parameter', 'Result'],
          rows: [
            ['Pivotal Trial', `LUMINOS-1 (${STUDIES.phase3.id})`],
            ['Design', `Randomized (1:1), open-label, active-controlled (vs. docetaxel)`],
            ['Patients randomized', String(STUDIES.phase3.patients)],
            ['Co-primary endpoint: PFS (HR)', `${EFFICACY.phase3.pfsHr} (95% CI: ${EFFICACY.phase3.pfsCI}; p${EFFICACY.phase3.pfsP})`],
            ['Median PFS', `${EFFICACY.phase3.medianPfsVlx} vs. ${EFFICACY.phase3.medianPfsDoc}`],
            ['Co-primary endpoint: OS (HR)', `${EFFICACY.phase3.osHr} (95% CI: ${EFFICACY.phase3.osCI}; p=${EFFICACY.phase3.osP})`],
            ['Median OS', `${EFFICACY.phase3.medianOsVlx} vs. ${EFFICACY.phase3.medianOsDoc}`],
            ['ORR', `${EFFICACY.phase3.orrVlx} vs. ${EFFICACY.phase3.orrDoc}`],
            ['Treatment discontinuation due to AEs', SAFETY.discontinuationRate],
            ['ODAC vote', '11-2 favorable'],
            ['Companion diagnostic', `${CDX.name} (PMA ${CDX.pmaNumber})`],
          ],
        },
      ],
    },
    {
      heading: '8. Exclusivity and Patent Information',
      level: 1,
      paragraphs: [
        `${DRUG.name} has been granted the following exclusivity provisions:`,
      ],
      lists: {
        items: [
          'New Chemical Entity (NCE) exclusivity: 5 years from date of approval (expires September 15, 2031)',
          'The following patents have been submitted for Orange Book listing: US 11,234,567 (composition of matter, expires 2039); US 11,345,678 (method of use, expires 2040); US 11,456,789 (formulation, expires 2038)',
          'Pediatric exclusivity: Not yet applicable; will be evaluated upon completion of pediatric studies if conducted',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '9. REMS Approval',
      level: 1,
      paragraphs: [
        `The ${DRUG.name} REMS has been approved as part of this NDA approval. The REMS includes a Medication Guide and Elements to Assure Safe Use (ETASU) requiring liver function monitoring as specified in the approved REMS document. The first REMS assessment is due 6 months after the date of this letter (${REGULATORY.approvalDate}).`,
        `${DRUG.sponsor} must ensure that the REMS is operational no later than 30 days following the date of this approval. The REMS website (www.velanexorrems.com) and Dear Healthcare Provider letter must be distributed within the same timeframe.`,
      ],
    },
  ],
};
registerDocument('phase08-fda-approval-letter', approvalLetter);

// ---------------------------------------------------------------------------
// 2. phase08-final-approved-uspi-smpc  (Tier 2)
// ---------------------------------------------------------------------------
const finalUspi: DocumentContent = {
  documentTitle: `Final Approved Prescribing Information — ${DRUG.name} (${DRUG.code}) Tablets`,
  documentNumber: 'RPT-PM-002',
  version: '1.0',
  date: REGULATORY.approvalDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'HIGHLIGHTS OF PRESCRIBING INFORMATION',
      level: 1,
      paragraphs: [
        `These highlights do not include all the information needed to use ${DRUG.name.toUpperCase()} safely and effectively. See full prescribing information for ${DRUG.name.toUpperCase()}.`,
        `${DRUG.name.toUpperCase()} (${DRUG.code.toLowerCase()}) tablets, for oral use. Initial U.S. Approval: 2026.`,
        `WARNING: HEPATOTOXICITY — See full prescribing information for complete boxed warning. ${DRUG.name} can cause serious hepatotoxicity. Monitor liver function tests prior to initiation, every 2 weeks for the first 12 weeks, and monthly thereafter. Withhold, reduce dose, or permanently discontinue based on severity. [See Warnings and Precautions (5.1)]`,
      ],
    },
    {
      heading: 'Full Prescribing Information — Section 1: Indications and Usage',
      level: 1,
      paragraphs: [
        `${DRUG.name} is a KRAS G12C inhibitor indicated for the treatment of adult patients with KRAS G12C-mutated locally advanced or metastatic non-small cell lung cancer (NSCLC), as determined by an FDA-approved test, who have received at least one prior systemic therapy. [See Clinical Studies (14)]`,
      ],
    },
    {
      heading: 'Section 2: Dosage and Administration',
      level: 1,
      paragraphs: [
        `Recommended dosage: ${DRUG.recommendedDose}, taken orally with or without food until disease progression or unacceptable toxicity. Swallow tablets whole; do not crush, chew, or split.`,
        `Available strengths: ${DRUG.formulation}s — 100 mg, 200 mg, and 400 mg.`,
        `Patient selection: Confirm the presence of KRAS G12C mutation in tumor specimens or circulating tumor DNA (ctDNA) in plasma prior to treatment initiation using the ${CDX.name} or another FDA-approved companion diagnostic test.`,
      ],
    },
    {
      heading: 'Section 5: Warnings and Precautions',
      level: 1,
      paragraphs: [
        `5.1 Hepatotoxicity: ${SAFETY.hepatotoxicityNote} Fatal hepatic failure occurred in 1 patient (0.1%) in the clinical development program. Monitor hepatic function as recommended. Withhold, reduce dose to 200mg QD, or permanently discontinue based on severity of ALT/AST elevation.`,
        `5.2 QTc Prolongation: ${DRUG.name} causes QTc prolongation. ${SAFETY.qtcNote} Avoid use in patients with baseline QTcF >470 ms, uncorrected hypokalemia, or hypomagnesemia. Monitor ECGs at baseline, Weeks 2 and 4, and periodically thereafter.`,
        `5.3 Interstitial Lung Disease/Pneumonitis: ILD/pneumonitis occurred in 1.8% of patients including Grade 3 in 0.7%. Permanently discontinue in patients who develop ILD/pneumonitis of any grade.`,
        `5.4 Embryo-Fetal Toxicity: Can cause fetal harm. Advise females of reproductive potential to use effective contraception during treatment and for 4 weeks after the last dose.`,
      ],
    },
    {
      heading: 'Section 6: Adverse Reactions — Medication Guide',
      level: 1,
      paragraphs: [
        `The most common adverse reactions (>=20%) are diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), fatigue (${SAFETY.commonAEs[2].allGrade}), and ALT increased (${SAFETY.commonAEs[3].allGrade}).`,
        `A Medication Guide is available for patients at www.velanexorrems.com and must be dispensed with each prescription and refill.`,
      ],
      tables: [
        {
          title: 'Table 1. Adverse Reactions (>=5%) in LUMINOS-1',
          headers: ['Adverse Reaction', `${DRUG.name} All Grades (%)`, `${DRUG.name} Grade >=3 (%)`, 'Docetaxel All Grades (%)', 'Docetaxel Grade >=3 (%)'],
          rows: SAFETY.commonAEs.map((ae) => [ae.event, ae.allGrade, ae.grade3Plus, '—', '—']),
        },
      ],
    },
    {
      heading: 'Patient Information Leaflet',
      level: 1,
      paragraphs: [
        `What is ${DRUG.name}? ${DRUG.name} is a prescription medicine used to treat adults with non-small cell lung cancer (NSCLC) that has a specific gene change (mutation) called KRAS G12C, and whose cancer has spread (metastatic) or cannot be removed by surgery (locally advanced), and who have received at least one prior treatment.`,
        `Your healthcare provider will test your tumor for the KRAS G12C gene mutation before prescribing ${DRUG.name}. ${DRUG.name} should only be used if this test is positive.`,
        `Important safety information: ${DRUG.name} can cause serious liver problems. You will need regular blood tests to check your liver function. Tell your healthcare provider right away if you develop yellowing of your skin or eyes, dark urine, pain in the upper right area of your stomach, or unusual tiredness.`,
      ],
    },
  ],
};
registerDocument('phase08-final-approved-uspi-smpc', finalUspi);

// ---------------------------------------------------------------------------
// 3. phase08-post-marketing-commitments  (Tier 2)
// ---------------------------------------------------------------------------
const postMarketingCommitments: DocumentContent = {
  documentTitle: `Post-Marketing Requirements and Commitments — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-003',
  version: '1.0',
  date: REGULATORY.approvalDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. PMR: Long-Term Carcinogenicity Study',
      level: 1,
      paragraphs: [
        `PMR 3204-1: Conduct a 26-week carcinogenicity study in the Tg.rasH2 transgenic mouse model to evaluate the carcinogenic potential of ${DRUG.code}. The study will be conducted at doses of 25, 75, and 200 mg/kg/day, representing approximately 0.5x, 1.5x, and 4x the human exposure (AUC) at the recommended dose of ${DRUG.recommendedDose}.`,
        'Study design: GLP-compliant, 26-week oral gavage administration. Endpoints include survival, clinical signs, body weight, food consumption, clinical pathology, gross necropsy, histopathology of all major organs, and incidence of neoplastic lesions.',
      ],
      tables: [
        {
          title: 'Table 1. Carcinogenicity Study Milestones',
          headers: ['Milestone', 'Target Date', 'Status'],
          rows: [
            ['Protocol finalization', '2027-03-31', 'Planned'],
            ['Study initiation', '2027-06-30', 'Planned'],
            ['In-life phase completion', '2027-12-31', 'Planned'],
            ['Pathology evaluation', '2028-06-30', 'Planned'],
            ['Final study report', '2028-12-31', 'Due date per PMR'],
          ],
        },
      ],
    },
    {
      heading: '2. PMR: Hepatotoxicity Mechanistic Study',
      level: 1,
      paragraphs: [
        `PMR 3204-2: Conduct a comprehensive mechanistic investigation into the hepatotoxicity observed with ${DRUG.code}. The study program includes: (a) primary human hepatocyte culture assays to evaluate mitochondrial toxicity, bile salt export pump (BSEP) inhibition, and reactive metabolite formation; (b) proteomics-based biomarker identification using archived plasma samples from patients who developed Grade >=3 hepatotoxicity in LUMINOS-1; (c) genetic association analysis (HLA typing, UGT1A1 polymorphisms) to identify pharmacogenomic risk factors.`,
        'The final report is due by June 30, 2028.',
      ],
    },
    {
      heading: '3. PMC: First-Line Combination Study',
      level: 1,
      paragraphs: [
        `PMC 3204-1: ${DRUG.sponsor} has committed to conducting a Phase 3b/4 randomized study evaluating ${DRUG.code} in combination with pembrolizumab versus pembrolizumab monotherapy in treatment-naive patients with KRAS G12C-mutant, PD-L1-positive (TPS >=50%) NSCLC (Study ${DRUG.code.replace('-', '')}-006, LUMINOS-2).`,
        'Planned enrollment: 450 patients. Primary endpoint: PFS per BICR. Key secondary endpoints: OS, ORR, DOR. Protocol submission to FDA is targeted for Q2 2027, with first patient enrollment in Q4 2027.',
      ],
    },
    {
      heading: '4. PMC: Pediatric Study Waiver Reaffirmation',
      level: 1,
      paragraphs: [
        `PMC 3204-2: Per the agreed Pediatric Study Plan (PSP), a full waiver of pediatric studies has been granted based on the following rationale: (a) KRAS G12C-mutant NSCLC does not occur in the pediatric population; (b) the disease is exceedingly rare under age 18, with no documented cases in the SEER database (1975-2024); (c) the mechanism of action is specific to an oncogenic driver not relevant to pediatric malignancies. Annual update reports will be submitted to reaffirm the waiver status.`,
      ],
    },
    {
      heading: '5. Timeline and Milestone Summary',
      level: 1,
      paragraphs: [
        'The following table provides a consolidated timeline for all post-marketing requirements and commitments.',
      ],
      tables: [
        {
          title: 'Table 2. Post-Marketing Milestone Timeline',
          headers: ['Requirement', 'Type', 'Key Milestone', 'Due Date'],
          rows: [
            ['Carcinogenicity study (Tg.rasH2)', 'PMR', 'Final report', '2028-12-31'],
            ['Hepatotoxicity mechanism', 'PMR', 'Final report', '2028-06-30'],
            ['Thorough QT study', 'PMR', 'Final report', '2028-03-31'],
            ['1L combination study (LUMINOS-2)', 'PMC', 'Protocol submission', '2027-06-30'],
            ['1L combination study (LUMINOS-2)', 'PMC', 'Final CSR', '2030-12-31'],
            ['Pediatric waiver reaffirmation', 'PMC', 'Annual update', 'Annually'],
            ['Real-world PASS', 'PMC', 'Final report', '2029-09-15'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase08-post-marketing-commitments', postMarketingCommitments);

// ---------------------------------------------------------------------------
// 4. phase08-periodic-safety-update-reports  (Tier 2)
// ---------------------------------------------------------------------------
const psur: DocumentContent = {
  documentTitle: `Periodic Benefit-Risk Evaluation Report (PBRER) — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-004',
  version: '1.0',
  date: '2027-03-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. PSUR/PBRER Structure per ICH E2C(R2)',
      level: 1,
      paragraphs: [
        `This Periodic Benefit-Risk Evaluation Report (PBRER) for ${DRUG.fullName} has been prepared in accordance with ICH E2C(R2) "Periodic Benefit-Risk Evaluation Report" and covers the first reporting period following approval.`,
        `International birth date (IBD): ${REGULATORY.approvalDate}. Data lock point (DLP): March 14, 2027. Reporting period: ${REGULATORY.approvalDate} to March 14, 2027 (6 months).`,
      ],
    },
    {
      heading: '2. Estimated Cumulative Exposure',
      level: 1,
      paragraphs: [
        `During the first 6 months post-approval, approximately 4,200 patients received ${DRUG.name} in the United States based on dispensing data from specialty pharmacies. Cumulatively, including clinical trial exposure, an estimated 5,087 patients have been treated with ${DRUG.code} worldwide.`,
      ],
      tables: [
        {
          title: 'Table 1. Cumulative Exposure Summary',
          headers: ['Source', 'Patients', 'Patient-Years of Exposure'],
          rows: [
            ['Clinical trials (all studies)', '887', '742'],
            ['Post-marketing (US, 6 months)', '4,200', '1,680'],
            ['Total cumulative', '5,087', '2,422'],
          ],
          footnotes: [
            'Post-marketing exposure estimated from specialty pharmacy dispensing records. Patient-years calculated assuming median 4.8 months on therapy.',
          ],
        },
      ],
    },
    {
      heading: '3. New Safety Signals',
      level: 1,
      paragraphs: [
        `During this reporting period, no new safety signals were identified for ${DRUG.name}. The post-marketing safety profile remains consistent with the known adverse reaction profile described in the approved labeling.`,
        'Routine signal detection was conducted using the Empirical Bayesian Geometric Mean (EBGM) method against the FAERS database. No disproportionality signals exceeded the threshold (EBGM05 > 2.0) for any unlabeled events.',
        `Hepatotoxicity reporting rates in the post-marketing setting (Grade >=3: approximately 6.8% based on specialty pharmacy monitoring data) are consistent with the clinical trial rate of ${SAFETY.commonAEs[3].grade3Plus}. No additional cases of fatal hepatic failure have been reported.`,
      ],
    },
    {
      heading: '4. Updated Benefit-Risk Assessment',
      level: 1,
      paragraphs: [
        `Based on the cumulative data available through the data lock point, the benefit-risk balance of ${DRUG.name} for the approved indication remains favorable. No new safety concerns have emerged that would alter the current labeling or REMS. The next PBRER will cover months 7-18 post-approval with a DLP of ${REGULATORY.approvalDate.replace('2026', '2027')}.`,
      ],
    },
    {
      heading: '5. REMS Assessment — 6-Month Report',
      level: 1,
      paragraphs: [
        'The initial REMS assessment at 6 months post-approval indicates satisfactory implementation:',
      ],
      lists: {
        items: [
          'Medication Guide dispensing rate: 97.2% (target: >95%)',
          'Baseline LFT documentation rate: 94.8% (target: >90%)',
          'Prescriber awareness of hepatotoxicity risk (surveyed oncologists): 98.4%',
          'REMS website unique visitors: 12,400 healthcare providers, 3,800 patients',
          'Dear Healthcare Provider letters distributed: 48,000',
        ],
        ordered: false,
      } as any,
    },
  ],
};
registerDocument('phase08-periodic-safety-update-reports', psur);

// ---------------------------------------------------------------------------
// 5. phase08-pharmacovigilance-system-master-file  (Tier 3)
// ---------------------------------------------------------------------------
const psmf: DocumentContent = {
  documentTitle: `Pharmacovigilance System Master File (PSMF) — ${DRUG.sponsor}`,
  documentNumber: 'RPT-PM-005',
  version: '2.0',
  date: REGULATORY.approvalDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. PSMF Summary and QPPV Details',
      level: 1,
      paragraphs: [
        `This Pharmacovigilance System Master File describes the pharmacovigilance system maintained by ${DRUG.sponsor} for all marketed products, including ${DRUG.fullName}.`,
        'Qualified Person for Pharmacovigilance (QPPV): Dr. Maria Rodriguez, MD, PhD. Location: Cambridge, MA, USA. Contact: +1 (617) 555-0198. EU QPPV (Deputy): Dr. Thomas Weber, MD. Location: Munich, Germany.',
        `The PSMF reference number is PSMF-VT-001 and is maintained at ${DRUG.sponsorAddress}. An electronic copy is accessible via the Velantis Global Safety Database (Argus Safety v8.4).`,
      ],
    },
    {
      heading: '2. Pharmacovigilance System Description',
      level: 1,
      paragraphs: [
        `The ${DRUG.sponsor} pharmacovigilance system encompasses all activities related to the detection, assessment, understanding, and prevention of adverse effects associated with ${DRUG.name} and all products in the Velantis portfolio. The system operates across the following functional areas:`,
      ],
      lists: {
        items: [
          'Individual Case Safety Report (ICSR) collection, processing, and reporting (target: serious cases within 15 calendar days; non-serious within 90 days)',
          'Signal detection and evaluation (automated and manual review, quarterly signal meetings)',
          'Periodic safety reporting (PSUR/PBRER, DSUR, Annual Reports)',
          'Risk management (REMS oversight, Risk Management Plan maintenance)',
          'Safety database: Oracle Argus Safety v8.4 with automated MedDRA coding (v26.1)',
          'Medical information: 24/7 medical information hotline for healthcare providers and patients',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '3. Signal Detection Processes',
      level: 1,
      paragraphs: [
        'Signal detection is conducted through a multi-layered approach: (1) case-by-case medical review of all serious ICSRs by a qualified physician; (2) automated disproportionality analysis using EBGM and PRR methods against the internal safety database and FAERS quarterly; (3) literature surveillance via Embase and PubMed alerts (weekly); (4) quarterly Signal Management Team meetings chaired by the QPPV.',
        `For ${DRUG.name} specifically, enhanced surveillance is in place for hepatotoxicity events, QTc-related cardiac events, and ILD/pneumonitis, consistent with the Risk Management Plan.`,
      ],
    },
    {
      heading: '4. Quality System',
      level: 1,
      paragraphs: [
        'The PV quality system includes standard operating procedures (128 SOPs), work instructions, and training records managed in the Veeva Vault QMS. Internal PV audits are conducted annually. The system underwent a successful FDA BIMO inspection in Q1 2026 with no Form 483 observations. The next scheduled audit is Q1 2027.',
      ],
    },
  ],
};
registerDocument('phase08-pharmacovigilance-system-master-file', psmf);

// ---------------------------------------------------------------------------
// 6. phase08-pader-pediatric  (Tier 3)
// ---------------------------------------------------------------------------
const pader: DocumentContent = {
  documentTitle: `Pediatric Annual Development Report (PADER) — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-006',
  version: '1.0',
  date: '2027-09-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Annual Development Report — Pediatric Status',
      level: 1,
      paragraphs: [
        `This Pediatric Annual Development Report is submitted in accordance with 21 CFR 314.81(b)(2)(vii) for ${DRUG.fullName} (NDA ${REGULATORY.ndaNumber}), approved ${REGULATORY.approvalDate}. This report covers the period from ${REGULATORY.approvalDate} to September 14, 2027.`,
        `${DRUG.sponsor} holds a full waiver of pediatric studies for ${DRUG.name} for the approved indication of KRAS G12C-mutant NSCLC, based on the Pediatric Study Plan agreed with the FDA Pediatric Review Committee on January 15, 2026.`,
      ],
    },
    {
      heading: '2. Pediatric Waiver Status and Justification',
      level: 1,
      paragraphs: [
        'The pediatric study waiver remains appropriate for the following reasons:',
      ],
      lists: {
        items: [
          'KRAS G12C-mutant NSCLC does not occur in the pediatric population (age <18 years)',
          'No cases of KRAS G12C-mutant NSCLC have been reported in patients under age 18 in the SEER database (1975-2025), NCI Pediatric MATCH trial, or the Children\'s Oncology Group registry',
          'The molecular target (KRAS G12C) is an acquired somatic mutation associated with tobacco exposure and age-related mutagenesis, not germline or developmental in nature',
          'There are no pediatric cancers for which KRAS G12C inhibition has demonstrated or is hypothesized to have therapeutic relevance',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '3. Literature Review Update',
      level: 1,
      paragraphs: [
        'A systematic literature review was conducted using PubMed and Embase (search date: August 2027) using terms "KRAS G12C" AND ("pediatric" OR "adolescent" OR "child") AND ("lung cancer" OR "NSCLC"). No publications were identified reporting KRAS G12C-mutant NSCLC in patients under 18 years of age. One publication described KRAS G12C mutations in pediatric low-grade glioma (n=2), but no therapeutic relevance to VLX-4070 was established.',
      ],
    },
    {
      heading: '4. Conclusion',
      level: 1,
      paragraphs: [
        `No pediatric development is planned for ${DRUG.name} for the approved indication. The full waiver remains appropriate. ${DRUG.sponsor} will continue to monitor the scientific literature and will notify FDA if new information suggests pediatric development should be reconsidered.`,
      ],
    },
  ],
};
registerDocument('phase08-pader-pediatric', pader);

// ---------------------------------------------------------------------------
// 7. phase08-icsrs-signal-detection  (Tier 3)
// ---------------------------------------------------------------------------
const icsrSignal: DocumentContent = {
  documentTitle: `ICSR Processing and Signal Detection Report — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-007',
  version: '1.0',
  date: '2027-03-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. ICSR Processing Workflow',
      level: 1,
      paragraphs: [
        `During the first 6 months post-approval (${REGULATORY.approvalDate} to March 14, 2027), ${DRUG.sponsor} received and processed 1,842 Individual Case Safety Reports (ICSRs) for ${DRUG.name}. Of these, 486 (26.4%) were classified as serious and 1,356 (73.6%) as non-serious.`,
        'ICSRs are received through healthcare provider reports (42%), patient/consumer reports (18%), literature reports (8%), regulatory authority reports (12%), and solicited sources including the REMS program and patient support program (20%). All cases are entered into Oracle Argus Safety within 1 business day of receipt. MedDRA coding (v26.1) is applied by trained safety associates and verified by a medical reviewer.',
      ],
    },
    {
      heading: '2. Signal Detection Methodology',
      level: 1,
      paragraphs: [
        'Quantitative signal detection is performed quarterly using two complementary methods:',
      ],
      tables: [
        {
          title: 'Table 1. Signal Detection Methods',
          headers: ['Method', 'Metric', 'Threshold', 'Data Source'],
          rows: [
            ['Empirical Bayesian Geometric Mean (EBGM)', 'EBGM05 (lower bound of 90% CI)', '>2.0', 'FDA FAERS + internal safety database'],
            ['Proportional Reporting Ratio (PRR)', 'PRR with chi-square', 'PRR >2, chi-square >4, N >=3', 'Internal safety database'],
          ],
          footnotes: [
            'A signal is flagged when both statistical and clinical criteria are met.',
          ],
        },
      ],
    },
    {
      heading: '3. Quarterly Signal Evaluation — Q1 2027',
      level: 1,
      paragraphs: [
        'The Q1 2027 signal evaluation reviewed all flagged disproportionality signals. No new safety signals were identified. All flagged MedDRA Preferred Terms were consistent with the known safety profile and labeled adverse reactions.',
        `Hepatotoxicity-related events remain the most frequently reported serious adverse reaction (128 serious ICSRs, 26.3% of all serious reports), consistent with the clinical trial experience. No additional cases of fatal hepatic failure have been reported post-marketing. The REMS liver monitoring program appears to be effectively mitigating the risk of severe outcomes.`,
      ],
    },
    {
      heading: '4. Example Case Narrative — Serious Hepatotoxicity',
      level: 1,
      paragraphs: [
        `Case ID: VT-2027-00847. A 67-year-old male with KRAS G12C-mutant NSCLC (2L) initiated ${DRUG.name} 400mg QD on November 2, 2026. Baseline LFTs were normal (ALT 22 U/L, AST 18 U/L). At Week 6 monitoring, ALT was found to be elevated to 8.2x ULN (Grade 3) and AST to 6.1x ULN (Grade 3). ${DRUG.name} was withheld per the dose modification algorithm. LFTs normalized within 3 weeks (ALT 1.2x ULN, AST 0.9x ULN). ${DRUG.name} was rechallenged at 200mg QD. At 4-week follow-up, ALT remained at 1.5x ULN. Patient continues on 200mg QD with stable disease at 4 months. Causality assessment: Related. Seriousness criteria: Medically significant (Grade 3 hepatotoxicity). Outcome: Recovered.`,
      ],
    },
  ],
};
registerDocument('phase08-icsrs-signal-detection', icsrSignal);

// ---------------------------------------------------------------------------
// 8. phase08-annual-reports  (Tier 3)
// ---------------------------------------------------------------------------
const annualReport: DocumentContent = {
  documentTitle: `NDA Annual Report — NDA ${REGULATORY.ndaNumber}, ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-008',
  version: '1.0',
  date: '2027-09-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Annual Report per 21 CFR 314.81(b)(2)',
      level: 1,
      paragraphs: [
        `This Annual Report for NDA ${REGULATORY.ndaNumber} (${DRUG.fullName}) covers the period from the approval date (${REGULATORY.approvalDate}) through September 14, 2027. It is submitted in accordance with 21 CFR 314.81(b)(2) within 60 days of the anniversary date of approval.`,
      ],
    },
    {
      heading: '2. Distribution Data — First Year',
      level: 1,
      paragraphs: [
        `${DRUG.name} was commercially launched in the United States on October 1, 2026. Distribution data for the first year are summarized below.`,
      ],
      tables: [
        {
          title: 'Table 1. Distribution Data — Year 1',
          headers: ['Quarter', 'Units Distributed (bottles)', 'Estimated Patients on Therapy', 'Revenue ($ millions)'],
          rows: [
            ['Q4 2026 (Oct-Dec)', '3,800', '1,250', '$52.4'],
            ['Q1 2027 (Jan-Mar)', '5,200', '2,100', '$71.8'],
            ['Q2 2027 (Apr-Jun)', '6,800', '2,850', '$93.9'],
            ['Q3 2027 (Jul-Sep)', '7,400', '3,200', '$102.1'],
            ['Total Year 1', '23,200', '—', '$320.2'],
          ],
          footnotes: [
            'Units = 30-count bottles (400mg strength). Patient estimates based on specialty pharmacy data.',
          ],
        },
      ],
    },
    {
      heading: '3. Safety Update',
      level: 1,
      paragraphs: [
        `During the reporting period, 1,842 ICSRs were received (486 serious, 1,356 non-serious). No new safety signals were identified. The post-marketing hepatotoxicity rate (Grade >=3: approximately 6.8%) is consistent with clinical trial data (${SAFETY.commonAEs[3].grade3Plus}). No fatal hepatic events were reported post-marketing. The REMS assessment at 6 months showed satisfactory compliance with liver monitoring requirements (94.8% baseline LFT documentation rate).`,
      ],
    },
    {
      heading: '4. Manufacturing and Labeling Changes',
      level: 1,
      paragraphs: [
        'No changes to the manufacturing process, facilities, or specifications were implemented during the reporting period. A minor labeling supplement (sNDA) was submitted on July 15, 2027 to refine the QTc prolongation language in Section 5.2 based on concentration-QTc analysis results. No changes to the container closure system or storage conditions were made.',
      ],
    },
  ],
};
registerDocument('phase08-annual-reports', annualReport);

// ---------------------------------------------------------------------------
// 9. phase08-label-supplements  (Tier 3)
// ---------------------------------------------------------------------------
const labelSupplements: DocumentContent = {
  documentTitle: `Supplemental NDA (sNDA) Strategy — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-009',
  version: '1.0',
  date: '2027-06-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. sNDA Strategy for First-Line NSCLC Expansion',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} plans to submit a supplemental NDA (sNDA) to expand the ${DRUG.name} indication to include first-line treatment of KRAS G12C-mutant NSCLC in combination with pembrolizumab. This sNDA will be supported by the LUMINOS-2 study (PMC 3204-1), a Phase 3b/4 randomized trial comparing ${DRUG.code} + pembrolizumab versus pembrolizumab monotherapy in PD-L1-positive (TPS >=50%) patients.`,
        'Anticipated sNDA submission: Q1 2031, contingent on positive LUMINOS-2 results. If interim analysis supports accelerated approval, an earlier submission (Q2 2030) may be feasible.',
      ],
    },
    {
      heading: '2. New Formulation — Oral Suspension',
      level: 1,
      paragraphs: [
        `A new oral suspension formulation (40 mg/mL) is under development for patients with dysphagia or difficulty swallowing tablets. CMC development is ongoing with anticipated NDA supplement (Prior Approval Supplement, PAS) submission in Q3 2028. The suspension formulation will undergo a bioequivalence study against the reference tablet formulation. Flavor: cherry-vanilla. Stability: 24 months at room temperature, 90 days after opening.`,
      ],
    },
    {
      heading: '3. Safety Labeling Update — QTc Language Refinement',
      level: 1,
      paragraphs: [
        'Based on the results of the thorough QT study (PMR 3204-3) and the integrated concentration-QTc analysis, a Changes Being Effected (CBE-30) supplement was submitted on July 15, 2027 to update Section 5.2 (QTc Prolongation) of the prescribing information. The updated language provides concentration-dependent QTc prolongation data: at the mean steady-state Cmax (400mg QD), the predicted QTcF increase is 12.4 ms (90% CI: 9.8-15.0 ms). No new dosing recommendations were required based on these data.',
      ],
    },
  ],
};
registerDocument('phase08-label-supplements', labelSupplements);

// ---------------------------------------------------------------------------
// 10. phase08-rwe-post-launch-studies  (Tier 3)
// ---------------------------------------------------------------------------
const rwePostLaunch: DocumentContent = {
  documentTitle: `Post-Launch Real-World Evidence Studies — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-010',
  version: '1.0',
  date: '2027-01-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. PASS Protocol — Post-Authorization Safety Study',
      level: 1,
      paragraphs: [
        `PMC 3204-3: A prospective, non-interventional Post-Authorization Safety Study (PASS) has been designed to characterize the incidence and management of hepatotoxicity in patients receiving ${DRUG.name} in routine clinical practice. The study will enroll approximately 2,000 patients from 120 community and academic oncology sites across the United States over 18 months, with 12 months of follow-up per patient.`,
        'Primary endpoint: Incidence of Grade >=3 hepatotoxicity (ALT or AST >5x ULN) within the first 6 months of treatment. Secondary endpoints: Time to hepatotoxicity onset, rechallenge success rate, adherence to REMS liver monitoring schedule, hepatotoxicity outcomes (recovery, dose modification, discontinuation). Study registration: ClinicalTrials.gov NCT06234567.',
      ],
    },
    {
      heading: '2. Pragmatic Trial Design',
      level: 1,
      paragraphs: [
        `A pragmatic randomized trial (VLX4070-007, LUMINOS-REAL) is planned to evaluate ${DRUG.code} versus physician's choice (docetaxel or pemetrexed) in a broader real-world population that includes patients typically excluded from clinical trials (ECOG PS 2, stable brain metastases not requiring steroids, prior lines >=3). This trial will use EHR-integrated randomization and pragmatic endpoints (time to next treatment, real-world PFS by clinical/radiologic assessment). Target enrollment: 600 patients across community oncology networks.`,
      ],
    },
    {
      heading: '3. Registry Study in Community Oncology',
      level: 1,
      paragraphs: [
        `A collaboration with the Flatiron Health/Foundation Medicine Clinico-Genomic Database (CGDB) has been established to create a prospective registry of patients with KRAS G12C-mutant NSCLC treated with ${DRUG.name} in community oncology settings. The registry will capture treatment patterns, molecular co-alterations (STK11, KEAP1, TP53), real-world outcomes, and patient-reported outcomes (PROs) using the FACT-L instrument. Planned enrollment: 1,500 patients over 2 years.`,
      ],
    },
    {
      heading: '4. Comparative Effectiveness vs. Other KRAS Inhibitors',
      level: 1,
      paragraphs: [
        `An indirect treatment comparison (ITC) and network meta-analysis (NMA) are planned to contextualize ${DRUG.code} efficacy relative to sotorasib and adagrasib, as no head-to-head trials exist. The analysis will use both MAIC (matching-adjusted indirect comparison) and STC (simulated treatment comparison) methodologies, leveraging individual patient data from LUMINOS-1 and published aggregate data from CodeBreaK 200 (sotorasib) and KRYSTAL-7/12 (adagrasib). A retrospective comparative effectiveness study using the Flatiron CGDB will also compare real-world outcomes across all three KRAS G12C inhibitors in clinical practice.`,
      ],
    },
  ],
};
registerDocument('phase08-rwe-post-launch-studies', rwePostLaunch);

// ---------------------------------------------------------------------------
// 11. phase08-heor-value-dossier  (Tier 2)
// ---------------------------------------------------------------------------
const heorDossier: DocumentContent = {
  documentTitle: `Health Economics and Outcomes Research (HEOR) Value Dossier — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-011',
  version: '1.0',
  date: '2026-11-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. AMCP Format Dossier Overview',
      level: 1,
      paragraphs: [
        `This value dossier has been prepared in the Academy of Managed Care Pharmacy (AMCP) Format Dossier (v4.1) for ${DRUG.fullName} for the treatment of adult patients with previously treated KRAS G12C-mutant NSCLC. The dossier provides payer decision-makers with a comprehensive summary of the clinical, economic, and humanistic evidence supporting the value of ${DRUG.name}.`,
        `WAC: $18,500 per 28-day supply (${DRUG.recommendedDose}). Estimated net price after rebates: $14,200/cycle. Annual WAC cost per patient: approximately $222,000 (assuming median 12 cycles).`,
      ],
    },
    {
      heading: '2. Economic Model',
      level: 1,
      paragraphs: [
        `A three-state partitioned survival model was developed to estimate the cost-effectiveness of ${DRUG.name} versus docetaxel in 2L+ KRAS G12C-mutant NSCLC. Health states: progression-free (PF), post-progression (PP), and death. The model uses a 1-week cycle length, 10-year time horizon, and 3% annual discount rate for both costs and outcomes, per ISPOR/ICER guidelines.`,
      ],
      tables: [
        {
          title: 'Table 1. Economic Model Key Parameters',
          headers: ['Parameter', 'Value', 'Source'],
          rows: [
            ['PFS (VLX-4070)', `Median ${EFFICACY.phase3.medianPfsVlx}`, `LUMINOS-1 (${STUDIES.phase3.id})`],
            ['PFS (docetaxel)', `Median ${EFFICACY.phase3.medianPfsDoc}`, `LUMINOS-1 (${STUDIES.phase3.id})`],
            ['OS (VLX-4070)', `Median ${EFFICACY.phase3.medianOsVlx}`, `LUMINOS-1 (${STUDIES.phase3.id})`],
            ['OS (docetaxel)', `Median ${EFFICACY.phase3.medianOsDoc}`, `LUMINOS-1 (${STUDIES.phase3.id})`],
            ['Utility — PF state', '0.72', 'LUMINOS-1 EQ-5D-5L'],
            ['Utility — PP state', '0.54', 'LUMINOS-1 EQ-5D-5L'],
            ['Drug cost — VLX-4070 (net/cycle)', '$14,200', 'Net of rebates'],
            ['Drug cost — docetaxel (per cycle)', '$1,850', 'ASP + 6%'],
            ['Administration cost — VLX-4070', '$0 (oral)', '—'],
            ['Administration cost — docetaxel', '$312/infusion', 'CMS physician fee schedule'],
            ['Monitoring cost — VLX-4070 (REMS)', '$180/month', 'LFT, ECG monitoring'],
            ['AE management costs', '$2,400 per Grade >=3 event', 'Literature/claims analysis'],
          ],
        },
      ],
    },
    {
      heading: '3. Cost-Effectiveness Results — ICER',
      level: 1,
      paragraphs: [
        `The base-case incremental cost-effectiveness ratio (ICER) for ${DRUG.name} versus docetaxel is $128,000 per QALY gained (at the estimated net price). This falls below the commonly cited willingness-to-pay threshold of $150,000-$200,000/QALY for oncology therapies.`,
      ],
      tables: [
        {
          title: 'Table 2. Base-Case Cost-Effectiveness Results (Net Price)',
          headers: ['Outcome', `${DRUG.name}`, 'Docetaxel', 'Incremental'],
          rows: [
            ['Total costs', '$142,600', '$48,200', '$94,400'],
            ['Total QALYs', '1.42', '0.68', '0.74'],
            ['Total LYs', '1.92', '0.94', '0.98'],
            ['ICER ($/QALY)', '—', '—', '$128,000'],
            ['ICER ($/LY)', '—', '—', '$96,300'],
          ],
          footnotes: [
            'All costs discounted at 3%/year. Net price reflects estimated rebates. QALY = quality-adjusted life year. LY = life year.',
          ],
        },
      ],
    },
    {
      heading: '4. Budget Impact Analysis',
      level: 1,
      paragraphs: [
        'The budget impact model estimates the incremental financial impact of introducing VLX-4070 for a hypothetical US health plan with 1 million commercial members over a 3-year time horizon.',
      ],
      tables: [
        {
          title: 'Table 3. Budget Impact Analysis — 1 Million Member Plan',
          headers: ['Parameter', 'Year 1', 'Year 2', 'Year 3'],
          rows: [
            ['Eligible patients', '12', '14', '16'],
            ['VLX-4070 market share', '15%', '28%', '38%'],
            ['Patients on VLX-4070', '1.8', '3.9', '6.1'],
            ['Total drug spend (VLX-4070)', '$304,200', '$660,600', '$1,032,000'],
            ['Offset savings (avoided docetaxel costs)', '$18,500', '$40,100', '$62,800'],
            ['Net budget impact', '$285,700', '$620,500', '$969,200'],
            ['PMPM impact', '$0.024', '$0.052', '$0.081'],
          ],
          footnotes: [
            'PMPM = per member per month. National extrapolation: approximately $45M (Y1), $82M (Y2), $108M (Y3).',
          ],
        },
      ],
    },
    {
      heading: '5. Payer Presentation Materials',
      level: 1,
      paragraphs: [
        'Payer-facing materials have been developed to support formulary review and coverage decisions. These include:',
      ],
      lists: {
        items: [
          'Executive summary slide deck (12 slides) covering unmet need, clinical evidence, safety, economic value, and access programs',
          `Clinical value proposition: ${DRUG.name} delivers 5.4 months additional OS and 3.3 months additional PFS vs. docetaxel with manageable toxicity`,
          `Economic value proposition: ICER of $128,000/QALY — cost-effective by ICER threshold standards; oral administration reduces infusion center costs`,
          'Patient access: Co-pay assistance program (max OOP $25/month), free drug program for uninsured patients, specialty pharmacy hub services',
          'Proposed formulary position: Preferred specialty tier with prior authorization requiring documentation of KRAS G12C mutation and prior line of therapy',
        ],
        ordered: false,
      } as any,
    },
  ],
};
registerDocument('phase08-heor-value-dossier', heorDossier);

// ---------------------------------------------------------------------------
// 12. phase08-lifecycle-management-plan  (Tier 2)
// ---------------------------------------------------------------------------
const lifecyclePlan: DocumentContent = {
  documentTitle: `Lifecycle Management Plan — ${DRUG.fullName}`,
  documentNumber: 'RPT-PM-012',
  version: '1.0',
  date: '2027-01-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. New Indications Pipeline',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} is pursuing a systematic lifecycle strategy to expand the clinical utility of ${DRUG.code} beyond the initial approved indication. Three additional indication programs are in various stages of development.`,
      ],
      tables: [
        {
          title: 'Table 1. Indication Expansion Pipeline',
          headers: ['Indication', 'Study', 'Phase', 'Status', 'Anticipated sNDA'],
          rows: [
            ['1L KRAS G12C NSCLC (+ pembrolizumab)', 'LUMINOS-2 (VLX4070-006)', '3b/4', 'Protocol in development', '2031'],
            ['KRAS G12C colorectal cancer (2L+)', 'PRISM-1 (VLX4070-008)', '2', 'IND submitted Q4 2026', '2029 (accelerated)'],
            ['KRAS G12C pancreatic adenocarcinoma (2L+)', 'PRISM-2 (VLX4070-009)', '1b/2', 'Planned Q2 2027', '2030+'],
          ],
        },
      ],
    },
    {
      heading: '2. Combination Strategies',
      level: 1,
      paragraphs: [
        `Preclinical data support synergistic activity of ${DRUG.code} in combination with multiple targeted agents and immunotherapy. The following combination programs are prioritized:`,
      ],
      lists: {
        items: [
          `${DRUG.code} + pembrolizumab (anti-PD-1): Phase 3b/4 in 1L KRAS G12C NSCLC (LUMINOS-2). Rationale: KRAS G12C inhibition enhances tumor immunogenicity through increased MHC-I expression and T-cell infiltration.`,
          `${DRUG.code} + SHP2 inhibitor (TNO-155): Phase 1b dose-finding study planned (VLX4070-010). Rationale: SHP2 inhibition blocks adaptive resistance via RAS reactivation through RTK-SOS-mediated nucleotide exchange, maintaining KRAS in the GDP-bound state susceptible to VLX-4070.`,
          `${DRUG.code} + cetuximab: Phase 1b/2 in KRAS G12C CRC (PRISM-1 Arm B). Rationale: EGFR blockade prevents feedback reactivation of wild-type RAS in CRC, a key resistance mechanism.`,
          `${DRUG.code} + CDK4/6 inhibitor: Preclinical evaluation ongoing. Rationale: Dual blockade of RAS-RAF-MEK-ERK and cell-cycle pathways to overcome adaptive resistance.`,
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '3. Formulation Extensions',
      level: 1,
      paragraphs: [
        'Formulation lifecycle programs are designed to improve patient convenience and expand the treatable population:',
      ],
      tables: [
        {
          title: 'Table 2. Formulation Development Pipeline',
          headers: ['Formulation', 'Strength', 'Target Population', 'Status', 'Anticipated Filing'],
          rows: [
            ['Oral suspension', '40 mg/mL', 'Patients with dysphagia, NG tube', 'CMC development', 'Q3 2028'],
            ['IV formulation', '200 mg vial', 'Patients unable to take oral medication', 'Preclinical PK', 'Q2 2030'],
            ['Mini-tablet (sprinkle capsule)', '100 mg', 'Patients with swallowing difficulty', 'Feasibility', 'Q4 2029'],
          ],
        },
      ],
    },
    {
      heading: '4. Patent Lifecycle and Exclusivity',
      level: 1,
      paragraphs: [
        `The intellectual property portfolio for ${DRUG.code} provides robust protection through 2040. The composition-of-matter patent (US 11,234,567) expires in 2039 and represents the strongest barrier to generic entry. Additional method-of-use and formulation patents extend protection through 2040.`,
      ],
      tables: [
        {
          title: 'Table 3. Patent and Exclusivity Timeline',
          headers: ['Protection Type', 'Expiration', 'Notes'],
          rows: [
            ['NCE exclusivity (5-year)', 'September 2031', 'No Paragraph IV filings possible until 2030'],
            ['Composition of matter patent', 'April 2039', 'US 11,234,567; listed in Orange Book'],
            ['Method of use patent', 'January 2040', 'US 11,345,678; listed in Orange Book'],
            ['Formulation patent', 'September 2038', 'US 11,456,789; listed in Orange Book'],
            ['Potential pediatric exclusivity', '+6 months', 'If pediatric studies are conducted (currently waived)'],
            ['Potential patent term extension', '+up to 5 years', 'PTE application filed; expected grant of ~2.5 years'],
          ],
        },
      ],
    },
    {
      heading: '5. Generic/Biosimilar Defense',
      level: 1,
      paragraphs: [
        `As a small-molecule product, ${DRUG.name} will face generic competition under the Hatch-Waxman ANDA pathway following patent and exclusivity expiration. Biosimilar considerations do not apply. Defense strategies include:`,
      ],
      lists: {
        items: [
          'Maintaining a robust patent estate with staggered expiration dates through 2040',
          'Pursuing patent term extension (PTE) under 35 USC 156 to extend the composition-of-matter patent by up to 5 years',
          'Developing next-generation formulations (sustained-release, combination products) with independent patent protection',
          'Building brand loyalty through patient support programs, REMS infrastructure, and outcomes data',
          'Monitoring Paragraph IV certification filings and defending Orange Book-listed patents vigorously',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '6. Competitive Landscape Evolution',
      level: 1,
      paragraphs: [
        'The KRAS G12C inhibitor market is expected to evolve significantly over the lifecycle of VLX-4070. Current and anticipated competitors include:',
      ],
      tables: [
        {
          title: 'Table 4. Competitive Landscape — KRAS G12C Inhibitors',
          headers: ['Agent', 'Sponsor', 'Stage', 'Differentiation vs. VLX-4070'],
          rows: [
            ['Sotorasib (Lumakras)', 'Amgen', 'Approved (2L NSCLC)', 'First-to-market advantage; inferior PFS in head-to-head-adjacent comparison'],
            ['Adagrasib (Krazati)', 'Mirati/BMS', 'Approved (2L NSCLC)', 'CNS penetration; longer half-life but higher GI toxicity'],
            ['Divarasib', 'Roche/Genentech', 'Phase 3', 'Potentially best-in-class ORR; combination with atezolizumab'],
            ['Olomorasib (LY3537982)', 'Eli Lilly', 'Phase 2/3', 'Tri-complex inhibitor; potential for broader KRAS coverage'],
            ['GDC-6036 combinations', 'Roche', 'Phase 1b/2', 'Combination approaches with GDC-1971 (SHP2i)'],
          ],
          footnotes: [
            `${DRUG.code} differentiation: Favorable hepatotoxicity management profile, robust OS data, established REMS, and broad combination potential.`,
          ],
        },
      ],
    },
  ],
};
registerDocument('phase08-lifecycle-management-plan', lifecyclePlan);
