import { registerDocument } from './index';
import { DRUG, STUDIES, REGULATORY, EFFICACY, SAFETY, CDX, TIMELINE } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// =============================================================================
// Phase 07 — NDA / BLA / MAA Submission
// =============================================================================

// ---------------------------------------------------------------------------
// 1. phase07-complete-ectd-submission  (TIER 1)
// ---------------------------------------------------------------------------
const ectdSubmission: DocumentContent = {
  documentTitle: `eCTD Submission Overview — NDA ${REGULATORY.ndaNumber} (${DRUG.fullName})`,
  documentNumber: 'RPT-NDA-001',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Introduction and Submission Overview',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} hereby submits New Drug Application (NDA) ${REGULATORY.ndaNumber} for ${DRUG.fullName}, a ${DRUG.mechanism.toLowerCase()}, for the treatment of adult patients with locally advanced or metastatic ${DRUG.indication} who have received at least one prior line of systemic therapy.`,
        `This submission is organized in the electronic Common Technical Document (eCTD) format in accordance with FDA Guidance for Industry: Providing Regulatory Submissions in Electronic Format — Certain Human Pharmaceutical Product Applications and Related Submissions Using the eCTD Specifications (Rev. 7, 2023). The submission comprises 5 modules totaling approximately 148,000 pages across 1,247 individual documents.`,
        `VLX-4070 has been granted Breakthrough Therapy Designation (${REGULATORY.breakthroughDate}), Fast Track Designation (${REGULATORY.fastTrackDate}), and Priority Review (${REGULATORY.priorityReviewDate}). The PDUFA target action date is ${REGULATORY.pdufa}.`,
      ],
    },
    {
      heading: '2. eCTD Module Structure Summary',
      level: 1,
      paragraphs: [
        'The following table summarizes the content of each eCTD module included in this NDA submission.',
      ],
      tables: [
        {
          title: 'Table 1. eCTD Module Content Summary',
          headers: ['Module', 'Title', 'Content Description', 'Approx. Pages'],
          rows: [
            ['Module 1', 'Administrative Information and Prescribing Information', 'Cover letter, Form FDA 356h, patent information, proposed labeling (USPI), REMS, financial disclosures, debarment certification', '320'],
            ['Module 2', 'Common Technical Document Summaries', 'Quality Overall Summary (2.3), Nonclinical Overview (2.4), Nonclinical Written/Tabulated Summaries (2.6), Clinical Overview (2.5), Clinical Summary (2.7)', '2,850'],
            ['Module 3', 'Quality (CMC)', 'Drug substance (3.2.S), drug product (3.2.P), analytical methods, stability data, batch analyses for 3 registration batches, container closure system', '18,400'],
            ['Module 4', 'Nonclinical Study Reports', '28-day and 6-month toxicology (rat, dog), carcinogenicity (2-year rat), genotoxicity battery, reproductive/developmental toxicity, ADME, PK in animal models', '42,600'],
            ['Module 5', 'Clinical Study Reports', `CSRs for Studies ${STUDIES.phase1.id}, ${STUDIES.phase1Food.id}, ${STUDIES.phase2.id}, ${STUDIES.phase3.id}, ${STUDIES.ole.id}; integrated summaries of safety (ISS) and efficacy (ISE)`, '83,830'],
          ],
          footnotes: [
            'Total page count is approximate and includes all appendices, data listings, and CRFs.',
          ],
        },
      ],
    },
    {
      heading: '3. Submission Timeline and Sequence Numbers',
      level: 1,
      paragraphs: [
        'This NDA is being submitted as a rolling submission in three sequences, consistent with the agreement reached during the Pre-NDA (Type A) meeting with FDA on 2025-11-18.',
      ],
      tables: [
        {
          title: 'Table 2. Rolling Submission Sequence Plan',
          headers: ['Sequence', 'Submission Date', 'Content', 'Status'],
          rows: [
            ['0000', '2025-12-15', 'Modules 1, 2.3, 3 (CMC data package)', 'Submitted'],
            ['0001', '2026-01-20', 'Modules 2.4, 2.6, 4 (Nonclinical package)', 'Submitted'],
            ['0002', REGULATORY.ndaFiledDate, 'Modules 2.5, 2.7, 5 (Clinical package), final Module 1 updates, REMS', 'Submitted — triggers filing review'],
          ],
        },
      ],
    },
    {
      heading: '4. Electronic Submission Specifications',
      level: 1,
      paragraphs: [
        'All documents are formatted in compliance with the eCTD v4.0 specification and submitted through the FDA Electronic Submissions Gateway (ESG). PDF documents conform to PDF/A-1b (ISO 19005-1) standard with bookmarks, hyperlinks, and a navigable table of contents.',
      ],
      lists: {
        items: [
          'eCTD version: 4.0',
          'Submission format: PDF/A-1b, XML backbone',
          'Gateway: FDA ESG v3.0',
          'Digital certificate: Velantis PKI certificate (SHA-256)',
          'Total submission size: approximately 4.2 GB compressed',
          'Validation tool: Lorenz docuBridge v8.4 (all validation checks passed)',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '5. Supporting Studies Index',
      level: 1,
      paragraphs: [
        'The NDA is supported by a comprehensive clinical development program including 5 company-sponsored studies enrolling a total of 887 patients/subjects.',
      ],
      tables: [
        {
          title: 'Table 3. Clinical Studies Supporting NDA 217834',
          headers: ['Study ID', 'Phase', 'Design', 'Population', 'N', 'Status'],
          rows: [
            [STUDIES.phase1.id, '1', 'Open-label, dose-escalation/expansion', 'Advanced KRAS G12C solid tumors', String(STUDIES.phase1.patients), 'Complete'],
            [STUDIES.phase1Food.id, '1', 'Open-label, crossover, food effect', 'Healthy volunteers', String(STUDIES.phase1Food.patients), 'Complete'],
            [STUDIES.phase2.id, '2', 'Open-label, single-arm', '2L+ KRAS G12C NSCLC', String(STUDIES.phase2.patients), 'Complete'],
            [STUDIES.phase3.id, '3', 'Randomized, open-label, active-controlled', '2L+ KRAS G12C NSCLC', String(STUDIES.phase3.patients), 'Complete'],
            [STUDIES.ole.id, 'OLE', 'Open-label extension', 'Patients from prior VLX-4070 studies', String(STUDIES.ole.patients), 'Ongoing'],
          ],
          footnotes: [
            'OLE = Open-Label Extension. N = number of patients enrolled.',
          ],
        },
      ],
    },
    {
      heading: '6. Integrated Summary of Efficacy (ISE) Highlights',
      level: 1,
      paragraphs: [
        `The pivotal LUMINOS-1 trial (${STUDIES.phase3.id}) demonstrated statistically significant and clinically meaningful improvements in both progression-free survival (PFS) and overall survival (OS) for ${DRUG.code} versus docetaxel in patients with previously treated KRAS G12C-mutant NSCLC.`,
        `Median PFS was ${EFFICACY.phase3.medianPfsVlx} for VLX-4070 versus ${EFFICACY.phase3.medianPfsDoc} for docetaxel (HR ${EFFICACY.phase3.pfsHr}; 95% CI: ${EFFICACY.phase3.pfsCI}; p${EFFICACY.phase3.pfsP}). Median OS was ${EFFICACY.phase3.medianOsVlx} versus ${EFFICACY.phase3.medianOsDoc} (HR ${EFFICACY.phase3.osHr}; 95% CI: ${EFFICACY.phase3.osCI}; p=${EFFICACY.phase3.osP}). The confirmed objective response rate (ORR) was ${EFFICACY.phase3.orrVlx} versus ${EFFICACY.phase3.orrDoc}.`,
      ],
    },
    {
      heading: '7. Integrated Summary of Safety (ISS) Highlights',
      level: 1,
      paragraphs: [
        `Across the clinical development program, ${DRUG.code} demonstrated a manageable and predictable safety profile. Treatment discontinuation due to adverse events occurred in ${SAFETY.discontinuationRate} of patients. Serious adverse events were reported in ${SAFETY.saeRate} of patients. ${SAFETY.hepatotoxicityNote}`,
        `${SAFETY.qtcNote} A Risk Evaluation and Mitigation Strategy (REMS) is proposed to address the hepatotoxicity risk through mandatory liver function monitoring.`,
      ],
      tables: [
        {
          title: 'Table 4. Most Common Adverse Events (>=10% Any Grade) in LUMINOS-1',
          headers: ['Adverse Event', 'All Grades', 'Grade >=3'],
          rows: SAFETY.commonAEs
            .filter((ae) => parseFloat(ae.allGrade) >= 10)
            .map((ae) => [ae.event, ae.allGrade, ae.grade3Plus]),
        },
      ],
    },
    {
      heading: '8. Companion Diagnostic Information',
      level: 1,
      paragraphs: [
        `Patient selection for ${DRUG.code} treatment requires confirmation of KRAS G12C mutation status using an FDA-approved companion diagnostic test. ${CDX.partner} has submitted a Premarket Approval Application (PMA ${CDX.pmaNumber}) for the ${CDX.name}, a ${CDX.technology}-based assay capable of detecting KRAS G12C mutations from formalin-fixed, paraffin-embedded (FFPE) tumor tissue.`,
        'The companion diagnostic PMA is being reviewed in parallel with NDA 217834 under the FDA concurrent review pathway, with anticipated approval aligned to the PDUFA date.',
      ],
    },
    {
      heading: '9. Expedited Program Designations',
      level: 1,
      paragraphs: [
        `${DRUG.code} has received the following expedited regulatory designations from FDA, reflecting the significant unmet medical need in KRAS G12C-mutant NSCLC and the substantial clinical benefit observed in the development program:`,
      ],
      tables: [
        {
          title: 'Table 5. Expedited Program Designations',
          headers: ['Designation', 'Date Granted', 'Basis'],
          rows: [
            ['Fast Track', REGULATORY.fastTrackDate, 'Serious condition with unmet need; KRAS G12C NSCLC with limited 2L+ options'],
            ['Breakthrough Therapy', REGULATORY.breakthroughDate, 'Preliminary clinical evidence of substantial improvement over docetaxel (LUMINOS-1 interim analysis)'],
            ['Priority Review', REGULATORY.priorityReviewDate, 'Significant improvement in safety/effectiveness for a serious condition'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase07-complete-ectd-submission', ectdSubmission);

// ---------------------------------------------------------------------------
// 2. phase07-module-1-cover-letter-forms  (Tier 2)
// ---------------------------------------------------------------------------
const module1CoverLetter: DocumentContent = {
  documentTitle: `Module 1 Administrative Information — NDA ${REGULATORY.ndaNumber}`,
  documentNumber: 'RPT-NDA-002',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Cover Letter to CDER',
      level: 1,
      paragraphs: [
        `Dear Director, Office of Oncologic Diseases, CDER:`,
        `${DRUG.sponsor} respectfully submits NDA ${REGULATORY.ndaNumber} for ${DRUG.fullName} (${DRUG.formulation.toLowerCase()}, ${DRUG.recommendedDose}) for the treatment of adult patients with KRAS G12C-mutant non-small cell lung cancer who have received at least one prior systemic therapy. This application is submitted under Section 505(b)(1) of the Federal Food, Drug, and Cosmetic Act.`,
        `VLX-4070 has received Breakthrough Therapy Designation, Fast Track Designation, and Priority Review. A companion diagnostic PMA (${CDX.pmaNumber}) for the ${CDX.name} has been submitted concurrently by ${CDX.partner}.`,
        `The designated contact for this submission is: Dr. Sarah Chen, VP Regulatory Affairs, ${DRUG.sponsor}, ${DRUG.sponsorAddress}. Phone: (617) 555-0142.`,
      ],
    },
    {
      heading: '2. Form FDA 356h — Application to Market a New Drug',
      level: 1,
      paragraphs: [
        'Form FDA 356h has been completed and is included in Section 1.2 of the eCTD. Key entries include:',
      ],
      lists: {
        items: [
          `Application type: NDA (New Drug Application) under 505(b)(1)`,
          `Applicant: ${DRUG.sponsor}`,
          `Drug name: ${DRUG.name} (${DRUG.code})`,
          `Dosage form: ${DRUG.formulation}, ${DRUG.doses.join(', ')} strengths`,
          `Route of administration: ${DRUG.route}`,
          `Proposed indication: Treatment of adult patients with KRAS G12C-mutant NSCLC after prior systemic therapy`,
          `NDA number: ${REGULATORY.ndaNumber}`,
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '3. Patent Information and Orange Book Listing',
      level: 1,
      paragraphs: [
        'The following patents are submitted for listing in the Approved Drug Products with Therapeutic Equivalence Evaluations (Orange Book) per 21 CFR 314.53:',
      ],
      tables: [
        {
          title: 'Table 1. Patents for Orange Book Listing',
          headers: ['Patent Number', 'Type', 'Expiration Date', 'Description'],
          rows: [
            ['US 11,234,567', 'Composition of Matter', '2039-04-18', 'VLX-4070 compound and pharmaceutically acceptable salts thereof'],
            ['US 11,345,678', 'Method of Use', '2040-01-22', 'Method of treating KRAS G12C-mutant cancers with VLX-4070'],
            ['US 11,456,789', 'Formulation', '2038-09-10', 'Film-coated tablet formulation of VLX-4070'],
          ],
        },
      ],
    },
    {
      heading: '4. Exclusivity Claims',
      level: 1,
      paragraphs: [
        'Velantis Therapeutics claims the following exclusivity provisions under the Federal Food, Drug, and Cosmetic Act:',
      ],
      lists: {
        items: [
          'New Chemical Entity (NCE) exclusivity: 5 years from date of approval per 505(j)(5)(F)(ii) — VLX-4070 has not been previously approved by FDA in any form',
          'Orphan Drug Exclusivity: Not applicable — NSCLC does not qualify under the Orphan Drug Act prevalence threshold',
          'Pediatric exclusivity: Under evaluation; Pediatric Study Plan (PSP) agreed with FDA includes a deferral',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '5. Debarment Certification',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} hereby certifies, pursuant to Section 306(k)(1) of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. 335a(k)(1)), that it did not and will not use in any capacity the services of any person debarred under Section 306(a) or (b) in connection with this application.`,
        'A complete list of all clinical investigators is provided in the Financial Disclosure section (Module 1.3.5.3), and none are debarred under Section 306.',
      ],
    },
  ],
};
registerDocument('phase07-module-1-cover-letter-forms', module1CoverLetter);

// ---------------------------------------------------------------------------
// 3. phase07-module-2-5-clinical-overview  (TIER 1)
// ---------------------------------------------------------------------------
const clinicalOverview: DocumentContent = {
  documentTitle: `Module 2.5 Clinical Overview — ${DRUG.fullName} NDA ${REGULATORY.ndaNumber}`,
  documentNumber: 'RPT-NDA-003',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Product Development Rationale',
      level: 1,
      paragraphs: [
        `KRAS G12C mutations occur in approximately 13% of non-small cell lung cancer (NSCLC) adenocarcinomas and represent a validated oncogenic driver. Despite advances in targeted therapy and immunotherapy, patients with KRAS G12C-mutant NSCLC who progress on first-line platinum-based chemotherapy with or without immunotherapy have limited treatment options. Docetaxel, the historical standard of care, yields objective response rates of only 10-15% with median overall survival of approximately 8-10 months.`,
        `${DRUG.code} was designed as a ${DRUG.mechanism.toLowerCase()}. ${DRUG.mechanismDetail} This mechanism provides high selectivity for the mutant protein while sparing wild-type KRAS, resulting in a favorable therapeutic index.`,
      ],
    },
    {
      heading: '2. Biopharmaceutics Overview',
      level: 1,
      paragraphs: [
        `${DRUG.code} is administered as a ${DRUG.formulation.toLowerCase()} at the recommended dose of ${DRUG.recommendedDose}. Oral bioavailability is approximately 68% following administration under fasted conditions. The food-effect study (${STUDIES.phase1Food.id}) demonstrated that a high-fat, high-calorie meal increased AUC by 18% and Cmax by 22%, which were not considered clinically significant. ${DRUG.code} may be administered without regard to food.`,
        'Pharmacokinetic parameters at steady state (400mg QD): Cmax,ss = 4,280 ng/mL, AUC0-24,ss = 62,400 ng*h/mL, t1/2 = 14.2 hours, Tmax = 2.5 hours. Steady state is achieved by Day 7 with an accumulation ratio of approximately 1.8.',
      ],
    },
    {
      heading: '3. Clinical Pharmacology Overview',
      level: 1,
      paragraphs: [
        `${DRUG.code} is primarily metabolized by CYP3A4 (72%) with minor contributions from CYP2C8 (18%). It is a moderate inhibitor of CYP3A4 and a weak inhibitor of CYP2D6 in vitro. Dose adjustment is recommended with strong CYP3A4 inhibitors (reduce to 200mg QD) and strong CYP3A4 inducers (avoid concomitant use). No dose adjustment is required for mild hepatic impairment (Child-Pugh A); VLX-4070 is not recommended in patients with moderate to severe hepatic impairment.`,
        'Renal excretion accounts for approximately 15% of total clearance. No dose adjustment is needed for mild to moderate renal impairment (eGFR 30-89 mL/min). VLX-4070 has not been studied in patients with severe renal impairment or end-stage renal disease.',
        'Exposure-response analyses demonstrated a clear relationship between VLX-4070 exposure (AUC) and both tumor response and hepatotoxicity risk. The 400mg QD dose provides exposures associated with near-maximal efficacy while maintaining an acceptable safety margin.',
      ],
    },
    {
      heading: '4. Efficacy Conclusions',
      level: 1,
      paragraphs: [
        `The efficacy of ${DRUG.code} is established by the pivotal Phase 3 LUMINOS-1 trial (${STUDIES.phase3.id}), a randomized, open-label study comparing VLX-4070 400mg QD to docetaxel 75 mg/m² IV Q3W in ${STUDIES.phase3.patients} patients with previously treated KRAS G12C-mutant NSCLC. Efficacy was further supported by the Phase 2 BEACON-Lung trial (${STUDIES.phase2.id}).`,
      ],
      tables: [
        {
          title: 'Table 1. Primary and Key Secondary Efficacy Endpoints — LUMINOS-1',
          headers: ['Endpoint', `${DRUG.code} (N=280)`, 'Docetaxel (N=280)', 'Treatment Effect', 'p-value'],
          rows: [
            ['Median PFS (months)', EFFICACY.phase3.medianPfsVlx, EFFICACY.phase3.medianPfsDoc, `HR ${EFFICACY.phase3.pfsHr} (95% CI: ${EFFICACY.phase3.pfsCI})`, EFFICACY.phase3.pfsP],
            ['Median OS (months)', EFFICACY.phase3.medianOsVlx, EFFICACY.phase3.medianOsDoc, `HR ${EFFICACY.phase3.osHr} (95% CI: ${EFFICACY.phase3.osCI})`, EFFICACY.phase3.osP],
            ['ORR (confirmed)', EFFICACY.phase3.orrVlx, EFFICACY.phase3.orrDoc, 'Difference: 27.3%', '<0.0001'],
            ['Median DOR (months)', '8.6', '4.2', 'NE', 'NE'],
          ],
          footnotes: [
            'PFS = progression-free survival; OS = overall survival; ORR = objective response rate; DOR = duration of response; HR = hazard ratio; NE = not estimated.',
            'PFS assessed by blinded independent central review (BICR) per RECIST v1.1.',
          ],
        },
      ],
    },
    {
      heading: '5. Safety Conclusions',
      level: 1,
      paragraphs: [
        `The safety profile of ${DRUG.code} is based on 887 patients/subjects exposed across the clinical development program, including ${STUDIES.phase3.patients} patients in the pivotal LUMINOS-1 trial with a median duration of exposure of 7.2 months.`,
        `The most common adverse reactions (>=20%) were diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), fatigue (${SAFETY.commonAEs[2].allGrade}), and ALT increased (${SAFETY.commonAEs[3].allGrade}). Treatment discontinuation due to adverse events occurred in ${SAFETY.discontinuationRate} of patients. ${SAFETY.hepatotoxicityNote}`,
        `${SAFETY.qtcNote} Deaths considered related to study treatment occurred in ${SAFETY.deathsRelated} of patients (1 case of fulminant hepatic failure, 1 case of treatment-related pneumonitis).`,
      ],
      tables: [
        {
          title: 'Table 2. Adverse Events of Special Interest',
          headers: ['Category', 'Incidence (Any Grade)', 'Grade >=3', 'Median Time to Onset', 'Management'],
          rows: [
            ['Hepatotoxicity (ALT/AST elevation)', '22% / 20%', '8.0% / 6.5%', '6.2 weeks', 'Dose modification algorithm; LFT monitoring Q2W x 12 weeks, then monthly'],
            ['QTc prolongation', '8%', '2.1%', '4.8 weeks', 'ECG at baseline, Week 2, 4, then Q3 months; hold if QTc >500ms'],
            ['Interstitial lung disease', '1.8%', '0.7%', '12.4 weeks', 'Permanently discontinue; corticosteroids'],
          ],
        },
      ],
    },
    {
      heading: '6. Benefit-Risk Conclusion',
      level: 1,
      paragraphs: [
        `${DRUG.code} provides a statistically significant and clinically meaningful improvement in progression-free survival (HR ${EFFICACY.phase3.pfsHr}), overall survival (HR ${EFFICACY.phase3.osHr}), and objective response rate (${EFFICACY.phase3.orrVlx} vs. ${EFFICACY.phase3.orrDoc}) compared with docetaxel in patients with previously treated KRAS G12C-mutant NSCLC.`,
        `The safety profile is manageable with established dose-modification guidelines. Hepatotoxicity, the principal identified risk, is monitorable through routine liver function testing and manageable through the proposed REMS and dose-modification algorithm. The benefit-risk assessment is strongly favorable, supporting approval of ${DRUG.code} for the proposed indication.`,
      ],
    },
    {
      heading: '7. Labeling Rationale',
      level: 1,
      paragraphs: [
        'The proposed labeling reflects the totality of the clinical data and includes:',
      ],
      lists: {
        items: [
          `Indication: KRAS G12C-mutant NSCLC after at least one prior systemic therapy, as detected by an FDA-approved companion diagnostic (${CDX.name})`,
          `Dosage: ${DRUG.recommendedDose} with or without food, until disease progression or unacceptable toxicity`,
          'Boxed Warning: Not proposed — hepatotoxicity risk adequately addressed by Warnings/Precautions and REMS',
          'Warnings and Precautions: Hepatotoxicity (with monitoring algorithm), QTc prolongation, interstitial lung disease/pneumonitis, embryo-fetal toxicity',
          'REMS: Medication Guide; Elements to Assure Safe Use (liver function monitoring)',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '8. Subgroup Analyses and Special Populations',
      level: 1,
      paragraphs: [
        'Consistent treatment benefit was observed across all prespecified subgroups in LUMINOS-1.',
      ],
      tables: [
        {
          title: 'Table 3. PFS Hazard Ratios by Prespecified Subgroup — LUMINOS-1',
          headers: ['Subgroup', 'N', 'HR (95% CI)'],
          rows: [
            ['All patients', '560', `${EFFICACY.phase3.pfsHr} (${EFFICACY.phase3.pfsCI})`],
            ['Male', '312', '0.55 (0.42-0.72)'],
            ['Female', '248', '0.62 (0.46-0.84)'],
            ['Age <65', '318', '0.56 (0.43-0.74)'],
            ['Age >=65', '242', '0.61 (0.45-0.82)'],
            ['ECOG PS 0', '198', '0.51 (0.36-0.73)'],
            ['ECOG PS 1', '362', '0.62 (0.49-0.79)'],
            ['Prior immunotherapy', '412', '0.57 (0.45-0.72)'],
            ['No prior immunotherapy', '148', '0.61 (0.42-0.89)'],
            ['CNS metastases at baseline', '84', '0.64 (0.40-1.02)'],
            ['No CNS metastases', '476', '0.57 (0.45-0.71)'],
          ],
          footnotes: [
            'All subgroup analyses are exploratory and not adjusted for multiplicity.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase07-module-2-5-clinical-overview', clinicalOverview);

// ---------------------------------------------------------------------------
// 4. phase07-module-2-7-clinical-summary  (Tier 2)
// ---------------------------------------------------------------------------
const clinicalSummary: DocumentContent = {
  documentTitle: `Module 2.7 Clinical Summary — ${DRUG.fullName}`,
  documentNumber: 'RPT-NDA-004',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '2.7.1 Summary of Biopharmaceutic Studies and Associated Analytical Methods',
      level: 1,
      paragraphs: [
        `The biopharmaceutic profile of ${DRUG.code} was characterized in Study ${STUDIES.phase1Food.id}, a Phase 1, open-label, randomized, two-period crossover study evaluating the effect of food on the pharmacokinetics of a single ${DRUG.recommendedDose} dose in ${STUDIES.phase1Food.patients} healthy volunteers.`,
        'Under fasted conditions, geometric mean Cmax was 3,620 ng/mL and AUC0-inf was 58,100 ng*h/mL. A high-fat meal increased Cmax by 22% (GMR: 1.22, 90% CI: 1.08-1.38) and AUC by 18% (GMR: 1.18, 90% CI: 1.10-1.27). These changes were not considered clinically meaningful based on exposure-response analyses. VLX-4070 may be administered with or without food.',
      ],
    },
    {
      heading: '2.7.2 Summary of Clinical Pharmacology Studies',
      level: 1,
      paragraphs: [
        `Clinical pharmacology of ${DRUG.code} was evaluated across the Phase 1 dose-escalation study (${STUDIES.phase1.id}), the food-effect study (${STUDIES.phase1Food.id}), and population PK analyses integrated across all clinical studies. Key findings include linear pharmacokinetics over the dose range of ${DRUG.doses[0]} to ${DRUG.doses[4]}, time-independent PK with no evidence of autoinduction, and a terminal half-life of approximately 14.2 hours supporting once-daily dosing.`,
        'In vitro studies identified CYP3A4 as the primary metabolic enzyme. VLX-4070 is a substrate of P-glycoprotein (P-gp) and BCRP. Drug-drug interaction studies showed that co-administration with itraconazole (strong CYP3A4 inhibitor) increased VLX-4070 AUC by 2.1-fold, necessitating a dose reduction recommendation.',
      ],
    },
    {
      heading: '2.7.3 Summary of Clinical Efficacy',
      level: 1,
      paragraphs: [
        `Efficacy was evaluated in the Phase 2 BEACON-Lung study (${STUDIES.phase2.id}; N=${STUDIES.phase2.patients}) and the pivotal Phase 3 LUMINOS-1 study (${STUDIES.phase3.id}; N=${STUDIES.phase3.patients}).`,
        `In BEACON-Lung, ${DRUG.code} ${DRUG.recommendedDose} achieved an ORR of ${EFFICACY.phase2.orr} (CR: ${EFFICACY.phase2.crRate}; PR: ${EFFICACY.phase2.prRate}), with a disease control rate of ${EFFICACY.phase2.dcr}, median PFS of ${EFFICACY.phase2.medianPfs}, and median OS of ${EFFICACY.phase2.medianOs}.`,
        `In LUMINOS-1, ${DRUG.code} demonstrated superiority over docetaxel on both co-primary endpoints: PFS (HR ${EFFICACY.phase3.pfsHr}; p${EFFICACY.phase3.pfsP}) and OS (HR ${EFFICACY.phase3.osHr}; p=${EFFICACY.phase3.osP}). The magnitude of PFS and OS benefit was consistent across prespecified subgroups.`,
      ],
    },
    {
      heading: '2.7.4 Summary of Clinical Safety',
      level: 1,
      paragraphs: [
        `The safety database comprises 887 patients/subjects exposed to ${DRUG.code} across the clinical development program. The most frequent adverse events were gastrointestinal (diarrhea, nausea, vomiting), hepatic (ALT/AST elevations), and constitutional (fatigue).`,
        `Serious adverse events occurred in ${SAFETY.saeRate} of patients. The treatment discontinuation rate due to AEs was ${SAFETY.discontinuationRate}. Two deaths (${SAFETY.deathsRelated}) were assessed as related to VLX-4070 (one fulminant hepatic failure, one pneumonitis). Identified risks warranting specific labeling include hepatotoxicity, QTc prolongation, and interstitial lung disease.`,
      ],
      tables: [
        {
          title: 'Table 1. Adverse Events by System Organ Class (>=10% Incidence, All Studies Pooled)',
          headers: ['Preferred Term', 'All Grades (%)', 'Grade >=3 (%)'],
          rows: SAFETY.commonAEs
            .filter((ae) => parseFloat(ae.allGrade) >= 10)
            .map((ae) => [ae.event, ae.allGrade, ae.grade3Plus]),
        },
      ],
    },
    {
      heading: '2.7 Cross-References to Module 5 Study Reports',
      level: 1,
      paragraphs: [
        'Detailed clinical study reports for each trial are provided in Module 5 of this submission. Integrated Summary of Efficacy (ISE) and Integrated Summary of Safety (ISS) documents are located in Module 5.3.5.',
      ],
      tables: [
        {
          title: 'Table 2. Module 5 Cross-Reference',
          headers: ['Document', 'Module 5 Location'],
          rows: [
            [`CSR — ${STUDIES.phase1.id}`, '5.3.3.2'],
            [`CSR — ${STUDIES.phase1Food.id}`, '5.3.1.1'],
            [`CSR — ${STUDIES.phase2.id}`, '5.3.5.1'],
            [`CSR — ${STUDIES.phase3.id}`, '5.3.5.1'],
            [`CSR — ${STUDIES.ole.id}`, '5.3.5.3'],
            ['Integrated Summary of Efficacy (ISE)', '5.3.5.3'],
            ['Integrated Summary of Safety (ISS)', '5.3.5.3'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase07-module-2-7-clinical-summary', clinicalSummary);

// ---------------------------------------------------------------------------
// 5. phase07-proposed-uspi-smpc  (Tier 2)
// ---------------------------------------------------------------------------
const proposedUspi: DocumentContent = {
  documentTitle: `Proposed United States Prescribing Information — ${DRUG.name} (${DRUG.code}) Tablets`,
  documentNumber: 'RPT-NDA-005',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Indications and Usage',
      level: 1,
      paragraphs: [
        `${DRUG.name} is indicated for the treatment of adult patients with KRAS G12C-mutated locally advanced or metastatic non-small cell lung cancer (NSCLC), as determined by an FDA-approved test, who have received at least one prior systemic therapy.`,
      ],
    },
    {
      heading: '2. Dosage and Administration',
      level: 1,
      paragraphs: [
        `The recommended dosage of ${DRUG.name} is ${DRUG.recommendedDose}, administered orally with or without food, until disease progression or unacceptable toxicity. Tablets should be swallowed whole; do not crush, chew, or split.`,
        'Patient selection: Confirm the presence of KRAS G12C mutation in tumor or plasma specimens prior to initiation of treatment using an FDA-approved companion diagnostic.',
      ],
      tables: [
        {
          title: 'Table 1. Recommended Dose Modifications for Adverse Reactions',
          headers: ['Adverse Reaction', 'Severity', 'Dose Modification'],
          rows: [
            ['ALT or AST elevation', 'Grade 2 (>3-5x ULN)', 'Withhold until <=Grade 1; resume at 200mg QD'],
            ['ALT or AST elevation', 'Grade 3 (>5-20x ULN)', 'Withhold until <=Grade 1; resume at 200mg QD; discontinue if recurrent Grade 3'],
            ['ALT or AST elevation', 'Grade 4 (>20x ULN)', 'Permanently discontinue'],
            ['QTc prolongation', 'QTc 481-500 ms', 'Withhold until QTc <=480ms; resume at same dose'],
            ['QTc prolongation', 'QTc >500 ms or >60ms increase', 'Withhold until QTc <=480ms; resume at 200mg QD'],
            ['Diarrhea', 'Grade 3', 'Withhold until <=Grade 1; resume at 200mg QD'],
            ['Other Grade 3+ toxicity', 'First occurrence', 'Withhold until <=Grade 1; resume at 200mg QD'],
            ['Other Grade 3+ toxicity', 'Recurrence at 200mg', 'Permanently discontinue'],
          ],
        },
      ],
    },
    {
      heading: '5. Warnings and Precautions',
      level: 1,
      paragraphs: [
        `Hepatotoxicity: ${SAFETY.hepatotoxicityNote} Monitor liver function tests (ALT, AST, total bilirubin) prior to initiation, every 2 weeks for the first 12 weeks, and monthly thereafter. Withhold, reduce dose, or permanently discontinue based on severity.`,
        `QTc Prolongation: ${SAFETY.qtcNote} Avoid ${DRUG.name} in patients with baseline QTc >470 ms. Monitor ECG at baseline, Weeks 2 and 4, and every 3 months thereafter. Correct electrolyte abnormalities prior to and during treatment.`,
        `Interstitial Lung Disease (ILD)/Pneumonitis: ILD/pneumonitis occurred in 1.8% of patients, including Grade 3 events in 0.7%. Permanently discontinue ${DRUG.name} in patients diagnosed with ILD/pneumonitis of any grade.`,
        `Embryo-Fetal Toxicity: Based on findings from animal studies and its mechanism of action, ${DRUG.name} can cause fetal harm. Advise pregnant women of the potential risk. Advise females of reproductive potential to use effective contraception during treatment and for 4 weeks after the last dose.`,
      ],
    },
    {
      heading: '6. Adverse Reactions',
      level: 1,
      paragraphs: [
        `The safety of ${DRUG.name} was evaluated in LUMINOS-1 (${STUDIES.phase3.id}), in which 280 patients received ${DRUG.name} ${DRUG.recommendedDose}. The median duration of exposure was 7.2 months (range: 0.2 to 18.6 months). Serious adverse reactions occurred in ${SAFETY.saeRate} of patients. Permanent discontinuation due to adverse reactions occurred in ${SAFETY.discontinuationRate}.`,
      ],
      tables: [
        {
          title: 'Table 2. Adverse Reactions in >=5% of Patients — LUMINOS-1',
          headers: ['Adverse Reaction', `${DRUG.name} (N=280) All Grades`, `${DRUG.name} (N=280) Grade >=3`, 'Docetaxel (N=280) All Grades', 'Docetaxel (N=280) Grade >=3'],
          rows: [
            ['Diarrhea', '34%', '4.2%', '18%', '2.1%'],
            ['Nausea', '28%', '1.8%', '32%', '2.5%'],
            ['Fatigue', '24%', '3.1%', '28%', '4.8%'],
            ['ALT increased', '22%', '8.0%', '4%', '0.7%'],
            ['AST increased', '20%', '6.5%', '3%', '0.4%'],
            ['Decreased appetite', '18%', '1.2%', '16%', '1.4%'],
            ['Vomiting', '16%', '1.5%', '14%', '1.8%'],
            ['Peripheral edema', '12%', '0.8%', '8%', '0.4%'],
            ['QTc prolongation', '8%', '2.1%', '1%', '0.4%'],
            ['Rash', '7%', '0.5%', '5%', '0.4%'],
          ],
        },
      ],
    },
    {
      heading: '7. Drug Interactions',
      level: 1,
      paragraphs: [
        `Strong CYP3A4 inhibitors: Co-administration increases ${DRUG.name} exposure. If concomitant use is unavoidable, reduce ${DRUG.name} dose to 200mg QD.`,
        `Strong CYP3A4 inducers: Co-administration may decrease ${DRUG.name} exposure, potentially reducing efficacy. Avoid concomitant use with strong CYP3A4 inducers (e.g., rifampin, phenytoin, carbamazepine, St. John's wort).`,
        `QTc-prolonging agents: ${DRUG.name} may prolong the QTc interval. Avoid concomitant use with other QTc-prolonging drugs when possible. If unavoidable, increase ECG monitoring frequency.`,
      ],
    },
    {
      heading: '8. Use in Specific Populations',
      level: 1,
      paragraphs: [
        `Pregnancy (Category X): ${DRUG.name} can cause fetal harm. Advise patients of reproductive potential to use effective contraception.`,
        'Lactation: It is not known whether VLX-4070 is excreted in human milk. Advise women not to breastfeed during treatment and for 2 weeks after the last dose.',
        'Pediatric use: Safety and effectiveness have not been established in pediatric patients.',
        'Geriatric use: Of 280 patients in LUMINOS-1 treated with VLX-4070, 43% were 65 years or older. No overall differences in safety or efficacy were observed.',
        'Hepatic impairment: No dose adjustment for mild impairment (Child-Pugh A). Not recommended in moderate (Child-Pugh B) or severe (Child-Pugh C) hepatic impairment.',
        'Renal impairment: No dose adjustment for mild to moderate impairment (eGFR 30-89 mL/min). Not studied in severe impairment or ESRD.',
      ],
    },
  ],
};
registerDocument('phase07-proposed-uspi-smpc', proposedUspi);

// ---------------------------------------------------------------------------
// 6. phase07-rems  (Tier 2)
// ---------------------------------------------------------------------------
const rems: DocumentContent = {
  documentTitle: `Risk Evaluation and Mitigation Strategy (REMS) — ${DRUG.name} (${DRUG.code})`,
  documentNumber: 'RPT-NDA-006',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. REMS Overview and Goal',
      level: 1,
      paragraphs: [
        `This REMS is proposed to mitigate the serious risk of hepatotoxicity associated with ${DRUG.name}. The goal of the ${DRUG.name} REMS is to ensure that the benefits of ${DRUG.name} outweigh the risks by informing prescribers and patients about the hepatotoxicity risk and ensuring appropriate liver function monitoring.`,
        `In the clinical development program, Grade 3 or higher hepatotoxicity (ALT >5x ULN) was observed in ${SAFETY.commonAEs[3].grade3Plus} of patients treated with ${DRUG.code}. One fatal case of fulminant hepatic failure occurred in a patient who did not receive timely liver function monitoring.`,
      ],
    },
    {
      heading: '2. Medication Guide',
      level: 1,
      paragraphs: [
        `A Medication Guide will be provided to patients with each dispensing of ${DRUG.name}. The Medication Guide communicates the following key safety information:`,
      ],
      lists: {
        items: [
          `${DRUG.name} can cause serious liver problems that can lead to death`,
          'Patients must have blood tests to check liver function before starting and regularly during treatment',
          'Patients should immediately report symptoms of liver problems: yellowing of skin/eyes, dark urine, right-sided abdominal pain, unusual fatigue, loss of appetite',
          `${DRUG.name} can cause abnormal heart rhythms (QTc prolongation)`,
          'Common side effects include diarrhea, nausea, fatigue, and elevated liver enzymes',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '3. Communication Plan',
      level: 1,
      paragraphs: [
        'The REMS communication plan includes the following elements to ensure healthcare providers are aware of the hepatotoxicity risk and monitoring requirements:',
      ],
      lists: {
        items: [
          'Dear Healthcare Provider letter distributed to oncologists, hepatologists, and pharmacists within 30 days of approval',
          'Healthcare Provider Fact Sheet detailing the hepatotoxicity management algorithm',
          `${DRUG.name} REMS website (www.velanexorrems.com) with educational materials, monitoring checklists, and LFT tracking tools`,
          'Continuing medical education (CME) module on hepatotoxicity monitoring (accredited, no charge)',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '4. Elements to Assure Safe Use (ETASU)',
      level: 1,
      paragraphs: [
        `The following ETASU are proposed to ensure liver function monitoring in patients receiving ${DRUG.name}:`,
      ],
      tables: [
        {
          title: 'Table 1. Liver Function Monitoring Schedule',
          headers: ['Timepoint', 'Test', 'Frequency'],
          rows: [
            ['Before first dose', 'ALT, AST, total bilirubin, alkaline phosphatase', 'Once (within 7 days of start)'],
            ['Weeks 1-12', 'ALT, AST, total bilirubin', 'Every 2 weeks'],
            ['After Week 12', 'ALT, AST, total bilirubin', 'Monthly'],
            ['Dose interruption/restart', 'ALT, AST, total bilirubin', 'Weekly until stable, then resume schedule'],
          ],
          footnotes: [
            'Prescribers must document completion of baseline LFTs before the first prescription is dispensed.',
          ],
        },
      ],
    },
    {
      heading: '5. REMS Assessment Schedule',
      level: 1,
      paragraphs: [
        'Velantis Therapeutics will assess the REMS at the following intervals to determine whether the REMS goals are being met:',
      ],
      lists: {
        items: [
          '6 months after approval: Initial REMS assessment',
          '12 months after approval: First annual REMS assessment',
          '24 months after approval: Second annual assessment',
          'Annually thereafter, or as requested by FDA',
          'Assessment metrics: Medication Guide distribution rate (target >95%), prescriber awareness survey results, reported hepatotoxicity rates vs. clinical trial rates, compliance with LFT monitoring schedule',
        ],
        ordered: false,
      } as any,
    },
  ],
};
registerDocument('phase07-rems', rems);

// ---------------------------------------------------------------------------
// 7. phase07-pre-nda-meeting-package  (Tier 2)
// ---------------------------------------------------------------------------
const preNdaMeeting: DocumentContent = {
  documentTitle: `Pre-NDA (Type A) Meeting Briefing Document — ${DRUG.fullName}`,
  documentNumber: 'RPT-NDA-007',
  version: '1.0',
  date: '2025-10-20',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Meeting Purpose and Background',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} requests a Pre-NDA (Type A) meeting with the Division of Oncology Products 1, Office of Oncologic Diseases, CDER to discuss the planned NDA submission for ${DRUG.fullName} for the treatment of adult patients with previously treated KRAS G12C-mutant NSCLC.`,
        `VLX-4070 has received Breakthrough Therapy Designation (${REGULATORY.breakthroughDate}) and Fast Track Designation (${REGULATORY.fastTrackDate}). The Phase 3 LUMINOS-1 trial met both co-primary endpoints of PFS and OS. The Sponsor plans to request Priority Review.`,
      ],
    },
    {
      heading: '2. Submission Readiness Assessment',
      level: 1,
      paragraphs: [
        'The following table summarizes the readiness of each NDA module for submission:',
      ],
      tables: [
        {
          title: 'Table 1. Module Readiness Status',
          headers: ['Module', 'Status', 'Expected Completion'],
          rows: [
            ['Module 1 (Admin)', 'Draft complete', '2025-11-30'],
            ['Module 2.3 (Quality Overall Summary)', 'Final', '2025-11-15'],
            ['Module 2.5 (Clinical Overview)', 'Draft in review', '2026-01-15'],
            ['Module 2.7 (Clinical Summary)', 'Draft in review', '2026-01-15'],
            ['Module 3 (CMC)', 'Final', '2025-11-15'],
            ['Module 4 (Nonclinical)', 'Final', '2025-12-01'],
            ['Module 5 (Clinical)', 'CSRs in finalization', '2026-01-30'],
          ],
        },
      ],
    },
    {
      heading: '3. Outstanding Questions for FDA',
      level: 1,
      lists: {
        items: [
          'Does the Division agree that the LUMINOS-1 data are sufficient to support the proposed indication without additional confirmatory data?',
          'Does the Division agree with the proposed rolling submission plan (CMC first, nonclinical second, clinical third)?',
          'Does the Division agree with the proposed REMS approach (Medication Guide + ETASU for LFT monitoring)?',
          'Does the Division agree that the proposed labeling adequately addresses the hepatotoxicity risk without a Boxed Warning?',
          'Can the Division confirm alignment with the companion diagnostic concurrent review timeline?',
        ],
        ordered: true,
      } as any,
    },
    {
      heading: '4. Rolling Submission Proposal',
      level: 1,
      paragraphs: [
        `Given the Breakthrough Therapy and Fast Track designations, ${DRUG.sponsor} proposes a rolling submission approach to expedite FDA review. The submission plan consists of three sequences submitted approximately 4-6 weeks apart, beginning with the CMC module (most complete) and concluding with the clinical modules after finalization of the LUMINOS-1 CSR.`,
        'The final sequence submission is targeted for February 2026, which would yield a PDUFA target date in September 2026 under Priority Review (6-month review clock).',
      ],
    },
    {
      heading: '5. FDA Meeting Minutes Summary',
      level: 1,
      paragraphs: [
        'The Pre-NDA meeting was held on 2025-11-18 via teleconference. The Division provided the following key feedback:',
      ],
      lists: {
        items: [
          'The Division agreed that LUMINOS-1 data are adequate to support the proposed indication; no additional efficacy studies are required pre-approval.',
          'Rolling submission plan accepted. The Division recommended submitting the REMS with the final clinical sequence.',
          'The Division recommended inclusion of QTc prolongation language in Warnings and Precautions in addition to hepatotoxicity.',
          'Boxed Warning: The Division stated that a Boxed Warning decision would be made during review and encouraged the Sponsor to include a Boxed Warning-ready draft as contingency.',
          'Companion diagnostic: Concurrent review confirmed. The Division recommended including CDx performance data in Module 5.',
        ],
        ordered: false,
      } as any,
    },
  ],
};
registerDocument('phase07-pre-nda-meeting-package', preNdaMeeting);

// ---------------------------------------------------------------------------
// 8. phase07-real-world-evidence-package  (Tier 3)
// ---------------------------------------------------------------------------
const rwePackage: DocumentContent = {
  documentTitle: `Real-World Evidence Package — KRAS G12C-Mutant NSCLC`,
  documentNumber: 'RPT-NDA-008',
  version: '1.0',
  date: '2025-12-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Natural History Study of 2L+ KRAS G12C NSCLC',
      level: 1,
      paragraphs: [
        'A retrospective natural history study was conducted using the Flatiron Health electronic health record (EHR)-derived de-identified database (January 2018-December 2024). A total of 2,847 patients with KRAS G12C-mutant NSCLC who progressed on first-line therapy were identified.',
        'Key findings: Median overall survival from initiation of second-line therapy was 8.4 months (95% CI: 7.8-9.1). Median time on second-line treatment was 3.2 months. Only 38% of patients received third-line therapy. These data confirm the significant unmet medical need in this population and provide contextual support for the LUMINOS-1 results.',
      ],
    },
    {
      heading: '2. Claims Database Analysis — Treatment Patterns and Outcomes',
      level: 1,
      paragraphs: [
        'A retrospective analysis of the Optum Clinformatics claims database (2019-2024) evaluated treatment patterns among 1,423 patients with advanced NSCLC and documented KRAS G12C mutations following first-line progression.',
      ],
      tables: [
        {
          title: 'Table 1. Second-Line Treatment Patterns in KRAS G12C NSCLC',
          headers: ['Treatment', 'Proportion', 'Median TTD (months)', 'Median OS (months)'],
          rows: [
            ['Docetaxel', '42%', '3.4', '8.8'],
            ['Docetaxel + ramucirumab', '18%', '4.1', '10.2'],
            ['Sotorasib', '22%', '5.8', '11.4'],
            ['Adagrasib', '8%', '5.2', '10.8'],
            ['Other chemotherapy', '10%', '2.8', '7.1'],
          ],
          footnotes: [
            'TTD = time to treatment discontinuation. OS = overall survival from start of 2L therapy.',
          ],
        },
      ],
    },
    {
      heading: '3. Registry Data Supporting Unmet Need',
      level: 1,
      paragraphs: [
        'Data from the AACR Project GENIE registry (v14.0, 2024) confirm that KRAS G12C is the most common actionable KRAS mutation in NSCLC, present in approximately 13% of lung adenocarcinoma specimens. Analysis of 4,218 KRAS G12C-positive cases revealed that 62% of patients who received genomic testing had the result available before initiation of second-line therapy, supporting the feasibility of biomarker-directed treatment in the community setting.',
        `These real-world data collectively contextualize the clinical trial results and support the clinical meaningfulness of the progression-free survival and overall survival improvements observed with ${DRUG.code} in LUMINOS-1.`,
      ],
    },
  ],
};
registerDocument('phase07-real-world-evidence-package', rwePackage);

// ---------------------------------------------------------------------------
// 9. phase07-hta-dossier  (Tier 2)
// ---------------------------------------------------------------------------
const htaDossier: DocumentContent = {
  documentTitle: `Health Technology Assessment Dossier — ${DRUG.fullName}`,
  documentNumber: 'RPT-NDA-009',
  version: '1.0',
  date: REGULATORY.ndaFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. NICE Submission Summary',
      level: 1,
      paragraphs: [
        `A Technology Appraisal submission has been prepared for the National Institute for Health and Care Excellence (NICE) for ${DRUG.name} in the treatment of previously treated KRAS G12C-mutant NSCLC. The submission follows the NICE Single Technology Appraisal (STA) process and references the pivotal LUMINOS-1 trial as the primary source of clinical evidence.`,
        `The proposed positioning is as monotherapy for adult patients with locally advanced or metastatic KRAS G12C-mutant NSCLC who have received at least one prior systemic therapy, replacing docetaxel as the standard of care. The anticipated list price is GBP 6,200 per 28-day cycle (${DRUG.recommendedDose}).`,
      ],
    },
    {
      heading: '2. Cost-Effectiveness Model and ICER',
      level: 1,
      paragraphs: [
        'A three-state partitioned survival model (progression-free, post-progression, death) was developed with a 10-year time horizon and NHS/PSS perspective. Survival extrapolation used log-logistic distributions for PFS and OS based on AIC/BIC model selection. Utility values were derived from EQ-5D-5L data collected in LUMINOS-1.',
      ],
      tables: [
        {
          title: 'Table 1. Base-Case Cost-Effectiveness Results',
          headers: ['Parameter', `${DRUG.name}`, 'Docetaxel', 'Incremental'],
          rows: [
            ['Total costs', '$184,200', '$62,400', '$121,800'],
            ['Total QALYs', '1.42', '0.84', '0.58'],
            ['Total LYs', '1.92', '1.18', '0.74'],
            ['ICER (cost/QALY)', '—', '—', '$210,000'],
            ['ICER with PAS*', '—', '—', '$128,000'],
          ],
          footnotes: [
            '* PAS = Patient Access Scheme (confidential discount). QALY = quality-adjusted life year. LY = life year.',
          ],
        },
      ],
    },
    {
      heading: '3. Budget Impact Analysis',
      level: 1,
      paragraphs: [
        'The budget impact analysis estimates the financial impact of introducing VLX-4070 for 2L+ KRAS G12C NSCLC in the US market over a 3-year horizon. The eligible patient population is estimated at 8,400 patients annually, based on NSCLC incidence, KRAS G12C prevalence (13%), and second-line treatment rates.',
        'Estimated net budget impact: Year 1: $45 million; Year 2: $82 million; Year 3: $108 million, assuming 15%, 28%, and 38% market share uptake respectively.',
      ],
    },
    {
      heading: '4. G-BA Benefit Assessment (Germany)',
      level: 1,
      paragraphs: [
        `An early benefit assessment dossier per AMNOG has been prepared for the Gemeinsamer Bundesausschuss (G-BA). The appropriate comparator therapy (zweckmassige Vergleichstherapie) is docetaxel monotherapy. Based on the LUMINOS-1 results showing statistically significant OS improvement (HR ${EFFICACY.phase3.osHr}), the Sponsor will argue for a classification of "considerable additional benefit" (betrachtlicher Zusatznutzen).`,
        'The dossier includes the full LUMINOS-1 dataset, subgroup analyses for the German population (N=48), and health-related quality of life data from the EORTC QLQ-C30 and QLQ-LC13.',
      ],
    },
    {
      heading: '5. Pricing and Reimbursement Strategy',
      level: 1,
      paragraphs: [
        `The global pricing strategy for ${DRUG.name} targets a Wholesale Acquisition Cost (WAC) of $18,500 per 28-day supply (400mg QD) in the United States, positioning competitively against sotorasib ($17,900/cycle) and adagrasib ($19,200/cycle).`,
      ],
      lists: {
        items: [
          'US: WAC $18,500/cycle; net price after rebates estimated at $14,200/cycle; co-pay assistance program for commercially insured patients (max OOP: $25/month)',
          'EU: Ex-factory reference price targeted at 65-75% of US WAC; country-specific MEAs under negotiation',
          'Japan: NHI price application filed; cost-effectiveness evaluation anticipated under Chuikyo process',
          'Patient assistance: Free drug program for uninsured/underinsured patients via Velantis Patient Foundation',
        ],
        ordered: false,
      } as any,
    },
  ],
};
registerDocument('phase07-hta-dossier', htaDossier);

// ---------------------------------------------------------------------------
// 10. phase07-global-regulatory-strategy  (Tier 2)
// ---------------------------------------------------------------------------
const globalRegStrategy: DocumentContent = {
  documentTitle: `Global Regulatory Strategy — ${DRUG.fullName}`,
  documentNumber: 'RPT-NDA-010',
  version: '2.0',
  date: '2025-11-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Global Filing Sequence',
      level: 1,
      paragraphs: [
        `The global regulatory strategy for ${DRUG.code} targets initial approval in the United States, followed by submissions to the European Medicines Agency (EMA), Japan (PMDA), and China (NMPA). The filing sequence is designed to maximize the speed to first approval while building the regulatory dossier for subsequent markets.`,
      ],
      tables: [
        {
          title: 'Table 1. Planned Global Regulatory Filing Timeline',
          headers: ['Market', 'Application Type', 'Planned Submission', 'Anticipated Approval', 'Expedited Pathway'],
          rows: [
            ['United States (FDA)', `NDA ${REGULATORY.ndaNumber}`, REGULATORY.ndaFiledDate, REGULATORY.approvalDate, 'BT, FT, Priority Review'],
            ['European Union (EMA)', 'MAA (Centralised Procedure)', '2026-Q2', '2027-Q2', 'PRIME (granted 2025-06)'],
            ['Japan (PMDA)', 'JNDA', '2026-Q3', '2027-Q2', 'SAKIGAKE (under evaluation)'],
            ['China (NMPA)', 'NDA', '2026-Q4', '2027-Q4', 'Priority Review (Breakthrough Therapy)'],
            ['Canada (Health Canada)', 'NDS', '2026-Q3', '2027-Q1', 'Priority Review'],
            ['Australia (TGA)', 'Registration', '2026-Q3', '2027-Q1', 'Priority Review (provisional)'],
          ],
        },
      ],
    },
    {
      heading: '2. Expedited Pathways Obtained',
      level: 1,
      paragraphs: [
        `${DRUG.code} has received multiple expedited designations across regulatory jurisdictions, reflecting the serious unmet need in KRAS G12C-mutant NSCLC and the clinical benefit demonstrated in the development program.`,
      ],
      lists: {
        items: [
          `FDA Breakthrough Therapy Designation: Granted ${REGULATORY.breakthroughDate}`,
          `FDA Fast Track Designation: Granted ${REGULATORY.fastTrackDate}`,
          `FDA Priority Review: Granted ${REGULATORY.priorityReviewDate}`,
          'EMA PRIME Designation: Granted 2025-06-15',
          'Japan PMDA SAKIGAKE: Application submitted 2025-09-01, under review',
          'China NMPA Breakthrough Therapy: Granted 2025-10-20',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '3. Rolling Submission Plan',
      level: 1,
      paragraphs: [
        `A rolling NDA submission has been agreed with FDA under the Fast Track designation. The submission was divided into three sequences: CMC (Sequence 0000, submitted 2025-12-15), Nonclinical (Sequence 0001, submitted 2026-01-20), and Clinical (Sequence 0002, submitted ${REGULATORY.ndaFiledDate}, triggering the filing review). This approach accelerated the effective review timeline by approximately 3 months.`,
      ],
    },
    {
      heading: '4. Reference and Affiliate Strategy',
      level: 1,
      paragraphs: [
        'The US NDA serves as the reference dossier for all subsequent global filings. Country-specific Module 1 content will be developed locally by affiliate regulatory teams. The clinical data package (Modules 2.5, 2.7, 5) is identical across markets. Module 3 (CMC) may require region-specific adaptations for local manufacturing site information and regional excipient standards.',
        'Marketing authorization applications in the EU and Japan will include additional ethnic sensitivity analyses for the LUMINOS-1 trial, consistent with ICH E5 requirements.',
      ],
    },
    {
      heading: '5. Conditional Approval Considerations',
      level: 1,
      paragraphs: [
        'The EMA MAA submission will include a request for conditional marketing authorisation under Article 14-a of Regulation (EC) No 726/2004, should the Committee for Medicinal Products for Human Use (CHMP) determine that additional confirmatory data are warranted. However, given the robust OS data from LUMINOS-1 and the mature dataset at the time of EU submission, the Sponsor anticipates that a standard (non-conditional) MA will be granted.',
        'In Japan, a conditional and time-limited approval pathway under the revised Pharmaceutical and Medical Device Act (PMDA Act Article 14-3) is available but not anticipated to be necessary given the global Phase 3 data package.',
      ],
    },
  ],
};
registerDocument('phase07-global-regulatory-strategy', globalRegStrategy);

// ---------------------------------------------------------------------------
// 11. phase07-advisory-committee-briefing  (Tier 2)
// ---------------------------------------------------------------------------
const adcomBriefing: DocumentContent = {
  documentTitle: `Oncologic Drugs Advisory Committee (ODAC) Briefing Document — ${DRUG.fullName}`,
  documentNumber: 'RPT-NDA-011',
  version: '1.0',
  date: '2026-06-22',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Executive Summary',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} presents this briefing document to the Oncologic Drugs Advisory Committee (ODAC) in support of NDA ${REGULATORY.ndaNumber} for ${DRUG.fullName}, a ${DRUG.mechanism.toLowerCase()}, for the treatment of adult patients with previously treated KRAS G12C-mutant NSCLC. The Advisory Committee meeting is scheduled for ${TIMELINE.adcomDate}.`,
        `The application is supported by the pivotal Phase 3 LUMINOS-1 trial, which demonstrated statistically significant improvements in PFS (HR ${EFFICACY.phase3.pfsHr}; p${EFFICACY.phase3.pfsP}) and OS (HR ${EFFICACY.phase3.osHr}; p=${EFFICACY.phase3.osP}) versus docetaxel. The proposed REMS addresses the identified hepatotoxicity risk through mandatory liver function monitoring.`,
      ],
    },
    {
      heading: '2. Voting Questions',
      level: 1,
      paragraphs: [
        'The following questions are proposed for Advisory Committee discussion and vote:',
      ],
      lists: {
        items: [
          'Question 1: Has the Applicant provided sufficient evidence of effectiveness of VLX-4070 for the proposed indication of KRAS G12C-mutant NSCLC after prior systemic therapy?',
          'Question 2: Considering the hepatotoxicity risk observed in clinical trials, is the proposed REMS adequate to ensure that the benefits of VLX-4070 outweigh the risks?',
          'Question 3: Does the Committee recommend approval of VLX-4070 for the proposed indication?',
        ],
        ordered: true,
      } as any,
    },
    {
      heading: '3. Key Efficacy Presentation — LUMINOS-1',
      level: 1,
      paragraphs: [
        `LUMINOS-1 (${STUDIES.phase3.id}) randomized ${STUDIES.phase3.patients} patients with previously treated KRAS G12C-mutant NSCLC 1:1 to VLX-4070 ${DRUG.recommendedDose} or docetaxel 75 mg/m² IV Q3W. The study met both co-primary endpoints with the following results:`,
      ],
      tables: [
        {
          title: 'Table 1. LUMINOS-1 Efficacy Results',
          headers: ['Endpoint', `${DRUG.code}`, 'Docetaxel', 'HR/Difference (95% CI)', 'p-value'],
          rows: [
            ['Median PFS', EFFICACY.phase3.medianPfsVlx, EFFICACY.phase3.medianPfsDoc, `${EFFICACY.phase3.pfsHr} (${EFFICACY.phase3.pfsCI})`, EFFICACY.phase3.pfsP],
            ['Median OS', EFFICACY.phase3.medianOsVlx, EFFICACY.phase3.medianOsDoc, `${EFFICACY.phase3.osHr} (${EFFICACY.phase3.osCI})`, `=${EFFICACY.phase3.osP}`],
            ['ORR', EFFICACY.phase3.orrVlx, EFFICACY.phase3.orrDoc, '27.3% (21.4-33.2)', '<0.0001'],
          ],
        },
      ],
    },
    {
      heading: '4. Safety Presentation',
      level: 1,
      paragraphs: [
        `The safety profile of ${DRUG.code} is characterized by gastrointestinal events, hepatotoxicity, and QTc prolongation. Grade >=3 ALT elevation occurred in ${SAFETY.commonAEs[3].grade3Plus} of patients. The median time to onset of Grade >=3 hepatotoxicity was 6.2 weeks (range: 2-18 weeks). ${SAFETY.discontinuationRate} of patients discontinued due to adverse events. The SAE rate was ${SAFETY.saeRate}. Treatment-related deaths occurred in ${SAFETY.deathsRelated} of patients.`,
        'A comprehensive hepatotoxicity management algorithm was implemented during LUMINOS-1 that included dose interruption, dose reduction to 200mg QD, and permanent discontinuation criteria. With this algorithm, 78% of patients who experienced Grade 3 hepatotoxicity were successfully rechallenged at a reduced dose without recurrence.',
      ],
    },
    {
      heading: '5. Benefit-Risk Summary',
      level: 1,
      paragraphs: [
        `${DRUG.code} provides a clinically meaningful survival benefit in a population with limited therapeutic options. The 5.4-month improvement in median OS (${EFFICACY.phase3.medianOsVlx} vs. ${EFFICACY.phase3.medianOsDoc}) and 3.3-month improvement in PFS represent substantial clinical advances over the current standard of care. The hepatotoxicity risk is monitorable and manageable, and the proposed REMS provides an additional layer of safety assurance.`,
      ],
    },
    {
      heading: '6. Advisory Committee Vote Outcome',
      level: 1,
      paragraphs: [
        `The ODAC meeting was held on ${TIMELINE.adcomDate}. The Committee voted 11-2 in favor of approval of ${DRUG.code} for the proposed indication. The two dissenting members expressed concern about the hepatotoxicity rate and recommended additional post-marketing safety monitoring rather than voting against approval.`,
        'Key discussion points raised by committee members included: (1) the adequacy of the REMS in community oncology settings; (2) the need for a post-marketing study to evaluate VLX-4070 in patients with pre-existing liver disease; and (3) the potential for combination with immunotherapy in the first-line setting. The Committee unanimously agreed that the efficacy data were compelling.',
      ],
    },
  ],
};
registerDocument('phase07-advisory-committee-briefing', adcomBriefing);

// ---------------------------------------------------------------------------
// 12. phase07-complete-response-fda-questions  (Tier 3)
// ---------------------------------------------------------------------------
const completeResponse: DocumentContent = {
  documentTitle: `FDA Information Request Responses — NDA ${REGULATORY.ndaNumber}`,
  documentNumber: 'RPT-NDA-012',
  version: '1.0',
  date: '2026-08-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Information Request Responses',
      level: 1,
      paragraphs: [
        `During the review of NDA ${REGULATORY.ndaNumber}, the FDA Division of Oncology Products 1 issued two Information Requests (IRs). ${DRUG.sponsor} provided complete responses within the requested timelines, maintaining the PDUFA date of ${REGULATORY.pdufa}.`,
      ],
      tables: [
        {
          title: 'Table 1. Information Request Summary',
          headers: ['IR Number', 'Date Received', 'Topic', 'Response Date', 'Impact on Review'],
          rows: [
            ['IR-1', '2026-04-12', 'Updated hepatotoxicity analysis with rechallenge outcomes', '2026-05-10', 'None — resolved within review cycle'],
            ['IR-2', '2026-05-28', 'Subgroup analysis of patients with baseline liver enzyme elevations', '2026-06-15', 'None — resolved within review cycle'],
          ],
        },
      ],
    },
    {
      heading: '2. CMC Supplement Request and Manufacturing Update',
      level: 1,
      paragraphs: [
        'FDA requested supplemental CMC information regarding the commercial-scale manufacturing process validation for the 400mg tablet strength. Three additional commercial-scale batches were manufactured, and batch analysis certificates were submitted demonstrating consistent quality attributes within approved specifications. The dissolution profile (f2 similarity factor = 68) confirmed equivalence between validation and registration batches.',
      ],
    },
    {
      heading: '3. Labeling Negotiation Summary',
      level: 1,
      paragraphs: [
        'The proposed labeling underwent three rounds of negotiation between the Sponsor and the FDA labeling review team. Key negotiation points included:',
      ],
      lists: {
        items: [
          'Boxed Warning: FDA initially proposed a Boxed Warning for hepatotoxicity. After discussion of the REMS, rechallenge data, and manageable toxicity profile, a Boxed Warning was not included in the final approved label.',
          'Indication wording: FDA requested the inclusion of "as determined by an FDA-approved test" to mandate companion diagnostic use. Accepted.',
          'QTc language: Strengthened from "may cause QTc prolongation" to "causes QTc prolongation" based on concentration-QTc analysis. Accepted.',
          'Hepatotoxicity monitoring schedule: FDA requested biweekly monitoring for the first 12 weeks (Sponsor proposed monthly). Accepted.',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: '4. Post-Marketing Commitments Discussion',
      level: 1,
      paragraphs: [
        'During the review, FDA and the Sponsor agreed upon the following post-marketing requirements (PMRs) and post-marketing commitments (PMCs):',
      ],
      lists: {
        items: [
          'PMR 1: Long-term carcinogenicity study in the Tg.rasH2 mouse model (due 2028-12-31)',
          'PMR 2: Mechanistic study to characterize the hepatotoxicity pathway, including in vitro hepatocyte assays and biomarker identification (due 2028-06-30)',
          `PMC 1: Phase 3b/4 study of ${DRUG.code} in combination with pembrolizumab in first-line KRAS G12C NSCLC (protocol submission by 2027-06-30)`,
          'PMC 2: Reaffirmation of pediatric study waiver per agreed Pediatric Study Plan (annual update)',
        ],
        ordered: false,
      } as any,
    },
  ],
};
registerDocument('phase07-complete-response-fda-questions', completeResponse);
