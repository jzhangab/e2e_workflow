import { registerDocument } from './index';
import { DRUG, STUDIES, REGULATORY, EFFICACY, SAFETY, CDX } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// ---------------------------------------------------------------------------
// Phase 06 — Phase 3 (Pivotal / Registration) — 12 cards
// ---------------------------------------------------------------------------

// 1. phase06-phase3-pivotal-protocols (TIER 1 — deep)
const phase3PivotalProtocol: DocumentContent = {
  documentTitle: `Phase 3 Pivotal Protocol — Study ${STUDIES.phase3.id} (LUMINOS-1): ${STUDIES.phase3.title}`,
  documentNumber: 'RPT-P3-001',
  version: '2.0',
  date: '2025-01-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Protocol Synopsis',
      level: 1,
      paragraphs: [
        `LUMINOS-1 (${STUDIES.phase3.id}) is a Phase 3, randomized, open-label, active-controlled, multicenter study comparing ${DRUG.fullName} ${DRUG.recommendedDose} to docetaxel 75 mg/m2 administered intravenously every 3 weeks (Q3W) in patients with previously treated KRAS G12C-mutant NSCLC. The study will enroll approximately ${STUDIES.phase3.patients} patients across approximately 120 sites in North America, Europe, and Asia-Pacific.`,
        `${DRUG.name} is a ${DRUG.mechanism.toLowerCase()} administered as an oral ${DRUG.formulation.toLowerCase()}. Preclinical and clinical data from Studies ${STUDIES.phase1.id} and ${STUDIES.phase2.id} support the ${DRUG.recommendedDose} dose and provide evidence of clinically meaningful antitumor activity in KRAS G12C-mutant NSCLC (Phase 2 ORR ${EFFICACY.phase2.orr}, median PFS ${EFFICACY.phase2.medianPfs}).`,
      ],
    },
    {
      heading: 'Study Objectives and Endpoints',
      level: 1,
      paragraphs: [
        'The primary objective is to compare progression-free survival (PFS) between VLX-4070 and docetaxel. Key secondary objectives include overall survival (OS), objective response rate (ORR), duration of response (DOR), and patient-reported outcomes (PROs).',
      ],
      tables: [
        {
          title: 'Table 1: Study Objectives and Endpoints',
          headers: ['Objective Type', 'Objective', 'Endpoint', 'Assessment'],
          rows: [
            ['Primary', 'Compare PFS', 'PFS per BICR (RECIST v1.1)', 'CT/MRI every 6 weeks (Cycles 1-12), then every 9 weeks'],
            ['Key Secondary', 'Compare OS', 'Overall survival', 'Survival follow-up every 12 weeks after discontinuation'],
            ['Secondary', 'Compare ORR', 'ORR per BICR (RECIST v1.1)', 'CT/MRI per schedule above'],
            ['Secondary', 'Evaluate DOR', 'DOR per BICR', 'Time from first response to progression or death'],
            ['Secondary', 'Evaluate PROs', 'EORTC QLQ-C30 Global Health Status/QoL', 'Day 1 of each cycle through Cycle 12, then every 3 cycles'],
            ['Exploratory', 'Biomarker analyses', 'ctDNA dynamics, co-mutations (STK11, KEAP1)', 'Serial plasma sampling at baseline, C3D1, C5D1, EOT'],
            ['Exploratory', 'Intracranial activity', 'CNS ORR and CNS PFS in patients with brain metastases', 'Brain MRI at baseline and per imaging schedule'],
          ],
        },
      ],
    },
    {
      heading: 'Study Population',
      level: 1,
      paragraphs: [
        'The study enrolls adult patients (>=18 years) with histologically or cytologically confirmed locally advanced (not amenable to curative therapy) or metastatic NSCLC harboring a KRAS G12C mutation. KRAS G12C mutation must be documented by the VelaDx KRAS G12C NGS Assay or an approved local NGS panel, with central confirmation required for the per-protocol analysis population.',
      ],
      tables: [
        {
          title: 'Table 2: Key Eligibility Criteria',
          headers: ['Criterion', 'Inclusion', 'Exclusion'],
          rows: [
            ['Mutation status', 'KRAS G12C confirmed by VelaDx or approved NGS', 'Prior KRAS G12C inhibitor therapy'],
            ['Prior therapy', '>=1 prior systemic therapy (platinum-based and/or IO)', '>3 prior lines of systemic therapy'],
            ['Performance status', 'ECOG PS 0 or 1', 'ECOG PS >=2'],
            ['CNS metastases', 'Stable, treated CNS mets allowed (no steroids >=14 days)', 'Active, symptomatic CNS metastases; leptomeningeal disease'],
            ['Organ function', 'Adequate hepatic, renal, hematologic function', 'ALT/AST >2.5x ULN (>5x ULN if liver mets); QTcF >470ms'],
            ['Cardiac', 'No clinically significant cardiac disease', 'NYHA Class III/IV heart failure; MI within 6 months'],
            ['Measurable disease', 'At least one measurable lesion per RECIST v1.1', 'No measurable disease'],
          ],
        },
      ],
    },
    {
      heading: 'Randomization and Stratification',
      level: 1,
      paragraphs: [
        `Patients will be randomized 1:1 to ${DRUG.code} ${DRUG.recommendedDose} or docetaxel 75 mg/m2 Q3W using an interactive web response system (IWRS). Randomization will be stratified by three factors: prior immunotherapy (yes vs. no), ECOG performance status (0 vs. 1), and presence of CNS metastases (yes vs. no). Block randomization with variable block sizes will be used within each stratum.`,
      ],
    },
    {
      heading: 'Treatment Plan',
      level: 1,
      paragraphs: [
        `Patients randomized to the ${DRUG.code} arm will receive ${DRUG.code} ${DRUG.recommendedDose} continuously until disease progression, unacceptable toxicity, withdrawal of consent, or investigator decision. ${DRUG.code} is self-administered orally with or without food. Patients randomized to the docetaxel arm will receive docetaxel 75 mg/m2 as a 1-hour IV infusion on Day 1 of each 21-day cycle per institutional standards.`,
        `Crossover from docetaxel to ${DRUG.code} is not permitted during the study to preserve the OS analysis integrity. However, patients in the docetaxel arm may receive subsequent KRAS G12C inhibitor therapy (including ${DRUG.code} if commercially available) after documented disease progression, per investigator discretion.`,
      ],
      tables: [
        {
          title: 'Table 3: Dose Modification Guidelines for VLX-4070',
          headers: ['Toxicity', 'Grade', 'Dose Modification'],
          rows: [
            ['Hepatotoxicity (ALT/AST)', 'Grade 2 (>3-5x ULN)', 'Hold until Grade <=1; resume at 400mg QD'],
            ['Hepatotoxicity (ALT/AST)', 'Grade 3 (>5-20x ULN)', 'Hold until Grade <=1; resume at 200mg QD'],
            ['Hepatotoxicity (ALT/AST)', 'Grade 4 (>20x ULN)', 'Permanently discontinue'],
            ['QTc prolongation', 'QTcF 481-500ms', 'Hold until QTcF <=480ms; resume at 400mg QD with weekly ECG x 4'],
            ['QTc prolongation', 'QTcF >500ms or >60ms increase', 'Hold until QTcF <=480ms; resume at 200mg QD'],
            ['Other Grade 3 toxicity', 'Any related Grade 3', 'Hold until Grade <=1; resume at 200mg QD'],
            ['Any Grade 4 non-hematologic', 'Any related Grade 4', 'Permanently discontinue'],
          ],
          footnotes: ['Maximum of 2 dose reductions permitted (400mg -> 200mg -> discontinuation). Patients requiring dose reduction below 200mg must be discontinued.'],
        },
      ],
    },
    {
      heading: 'Statistical Considerations',
      level: 1,
      paragraphs: [
        `The study is designed to enroll ${STUDIES.phase3.patients} patients (280 per arm) to provide 90% power to detect a PFS hazard ratio of 0.65 (one-sided alpha 0.025) using a stratified log-rank test. Approximately 372 PFS events are required. One interim analysis for PFS is planned at ~60% of events using an O'Brien-Fleming alpha spending function.`,
        'OS will be tested hierarchically at alpha 0.025 (one-sided) only if PFS achieves statistical significance. The study has approximately 70% power for OS assuming HR 0.75. A final OS analysis will be conducted when approximately 340 death events have occurred.',
      ],
    },
    {
      heading: 'Safety Monitoring Plan',
      level: 1,
      paragraphs: [
        `An independent Data Safety Monitoring Board (DSMB) will review unblinded safety data at least every 6 months and at each pre-specified interim analysis. The DSMB charter specifies stopping rules for safety (excess treatment-related mortality >2% above comparator arm) and futility (conditional power <10% at interim analysis).`,
        `Hepatic function tests (ALT, AST, total bilirubin, alkaline phosphatase) will be assessed at baseline, Day 1 and Day 15 of Cycle 1, Day 1 of each subsequent cycle through Cycle 6, and every 3 cycles thereafter. ECGs will be collected at baseline, Cycle 1 Day 1 (pre-dose and 2h post-dose), Cycle 1 Day 15, and Day 1 of every 3rd cycle. ${SAFETY.hepatotoxicityNote}`,
      ],
    },
    {
      heading: 'Companion Diagnostic Requirements',
      level: 1,
      paragraphs: [
        `KRAS G12C mutation status must be confirmed prior to randomization. The ${CDX.name} (${CDX.partner}; ${CDX.submissionType} ${CDX.pmaNumber}) is the designated companion diagnostic for the study. Alternatively, local KRAS G12C testing by an FDA-approved or validated NGS assay is acceptable for enrollment, with mandatory central confirmation using the ${CDX.name} for the per-protocol population.`,
        `Archival or fresh tumor tissue (FFPE block or >=10 unstained slides) must be submitted for central testing. When tissue is unavailable, plasma ctDNA may be used for screening purposes only; tissue confirmation is required before randomization. ${CDX.partner} will perform all central testing under a clinical testing agreement.`,
      ],
    },
    {
      heading: 'Study Governance and Timeline',
      level: 1,
      paragraphs: [
        `The study is conducted under IND ${REGULATORY.indNumber}. First patient enrollment occurred on ${STUDIES.phase3.startDate}. The planned interim analysis is scheduled for ${TIMELINE.phase3Interim}. Primary PFS analysis is anticipated in Q2 2026, with final OS analysis projected for Q4 2026. The study is registered at ClinicalTrials.gov (NCT05678901) and the EU Clinical Trials Register.`,
        `This study is conducted in compliance with ICH E6(R2) GCP guidelines, the Declaration of Helsinki, and applicable local regulations. The protocol was approved by central and local IRBs/Ethics Committees at all participating sites. A Special Protocol Assessment (SPA) agreement was obtained from the FDA (September 1, 2025).`,
      ],
    },
  ],
};
registerDocument('phase06-phase3-pivotal-protocols', phase3PivotalProtocol);

// 2. phase06-phase3-sap-final (Tier 2)
const phase3Sap: DocumentContent = {
  documentTitle: `Statistical Analysis Plan (Final) — Study ${STUDIES.phase3.id} (LUMINOS-1)`,
  documentNumber: 'RPT-P3-002',
  version: '2.0',
  date: '2025-11-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Estimand Framework (ICH E9(R1))',
      level: 1,
      paragraphs: [
        'The primary estimand for PFS is defined as follows per the ICH E9(R1) framework:',
      ],
      tables: [
        {
          title: 'Table 1: Primary Estimand — Progression-Free Survival',
          headers: ['Attribute', 'Specification'],
          rows: [
            ['Population', 'All randomized patients with KRAS G12C-mutant NSCLC (ITT)'],
            ['Treatment', `${DRUG.code} ${DRUG.recommendedDose} vs. docetaxel 75 mg/m2 Q3W as randomized`],
            ['Variable', 'Time from randomization to first documented disease progression (BICR) or death from any cause'],
            ['Intercurrent events', 'Treatment discontinuation without progression: treatment policy strategy (all events counted regardless of treatment status)'],
            ['Population-level summary', 'Hazard ratio estimated by stratified Cox regression; tested by stratified log-rank'],
          ],
        },
      ],
    },
    {
      heading: 'Primary Analysis',
      level: 1,
      paragraphs: [
        `The primary analysis of PFS will be conducted in the ITT population (all randomized patients, analyzed per randomization assignment). PFS is defined as the time from randomization to the earliest of disease progression per BICR (RECIST v1.1) or death from any cause. Patients without progression or death will be censored at the date of last adequate tumor assessment.`,
        `The primary test will be the stratified log-rank test (stratification factors: prior IO therapy, ECOG PS, CNS metastases) at a one-sided significance level of 0.025. The hazard ratio will be estimated using a stratified Cox proportional hazards model with treatment as the sole covariate. Kaplan-Meier estimates of median PFS and PFS rates at 6 and 12 months will be reported for each arm.`,
      ],
    },
    {
      heading: 'Sensitivity and Supplementary Analyses',
      level: 1,
      paragraphs: [
        'The following sensitivity analyses are pre-specified for PFS:',
      ],
      tables: [
        {
          title: 'Table 2: Pre-Specified Sensitivity Analyses for PFS',
          headers: ['Analysis', 'Description', 'Purpose'],
          rows: [
            ['Unstratified analysis', 'Unstratified log-rank test and Cox model', 'Assess robustness to stratification'],
            ['Per-protocol population', 'Patients with centrally confirmed KRAS G12C, no major protocol deviations', 'Assess treatment effect in protocol-adherent population'],
            ['Investigator-assessed PFS', 'PFS per investigator assessment', 'Per FDA SPA request; assess concordance with BICR'],
            ['Tipping-point analysis', 'Vary assumptions about censored patients in experimental arm', 'Evaluate sensitivity to informative censoring'],
            ['RPSFT-adjusted PFS', 'Rank-preserving structural failure time model', 'Adjust for potential crossover or subsequent KRAS inhibitor use'],
          ],
        },
      ],
    },
    {
      heading: 'Subgroup Analyses',
      level: 1,
      paragraphs: [
        'Pre-specified subgroup analyses will be conducted for PFS and OS using forest plots displaying hazard ratios and 95% confidence intervals. Subgroups include: prior IO therapy (yes/no), ECOG PS (0/1), CNS metastases (yes/no), number of prior lines (1/>=2), sex, age (<65/>=65), race (White/Asian/Other), geographic region (North America/Europe/Asia-Pacific), smoking status (current-former/never), PD-L1 expression (<1%/1-49%/>=50%), and STK11 co-mutation status.',
        'No formal multiplicity adjustment is applied to subgroup analyses; results are considered hypothesis-generating. Treatment-by-subgroup interaction tests will be reported at a nominal two-sided alpha of 0.10.',
      ],
    },
    {
      heading: 'Missing Data Handling',
      level: 1,
      paragraphs: [
        'For PFS, patients with missing tumor assessments between a non-progression assessment and a progression event will be considered as having progressed at the date of the progression assessment (standard RECIST censoring rules). Patients lost to follow-up will be censored at the date of last adequate tumor assessment.',
        'For PRO endpoints, mixed models for repeated measures (MMRM) will be used as the primary approach, assuming data are missing at random (MAR). Pattern-mixture models will be used as sensitivity analyses to evaluate the impact of missing data under missing-not-at-random (MNAR) assumptions, including controlled multiple imputation based on the reference arm (jump-to-reference).',
      ],
    },
    {
      heading: 'Alpha Allocation and Interim Analysis',
      level: 1,
      paragraphs: [
        `The overall one-sided Type I error rate is controlled at 0.025. PFS is tested first at alpha=0.025. OS is tested at alpha=0.025 only if PFS is significant (hierarchical gatekeeping). One interim analysis for PFS superiority is planned at ~60% information fraction (223 of 372 required events) using the Lan-DeMets O'Brien-Fleming spending function. The interim boundary corresponds to approximately p<=0.0052 (one-sided). If PFS does not cross the interim boundary, the final analysis uses the remaining alpha (~0.0238 one-sided). Futility assessment uses conditional power <10% under the current trend.`,
      ],
    },
  ],
};
registerDocument('phase06-phase3-sap-final', phase3Sap);

// 3. phase06-sdtm-adam-submission-ready (Tier 2)
const sdtmAdam: DocumentContent = {
  documentTitle: `SDTM/ADaM Submission-Ready Datasets — Study ${STUDIES.phase3.id} (LUMINOS-1)`,
  documentNumber: 'RPT-P3-003',
  version: '1.0',
  date: '2026-01-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Pinnacle 21 Validation Summary',
      level: 1,
      paragraphs: [
        `All SDTM and ADaM datasets for Study ${STUDIES.phase3.id} (LUMINOS-1) were validated using Pinnacle 21 Enterprise (Version 4.1.1) against CDISC SDTM Implementation Guide v3.3 and ADaM Implementation Guide v1.3. Validation was completed on January 10, 2026, and the datasets are submission-ready for inclusion in NDA ${REGULATORY.ndaNumber}.`,
        'The validation yielded zero errors and 12 warnings (all Level 3 informational). All warnings were reviewed and determined to be acceptable per Pinnacle 21 guidance (e.g., SD1299 for supplemental qualifiers, AD0332 for derived variables with no source mapping). A detailed Pinnacle 21 validation report is included as an appendix.',
      ],
    },
    {
      heading: 'SDTM Domain Listing and Compliance',
      level: 1,
      paragraphs: [
        `A total of 28 SDTM domains were created for the LUMINOS-1 submission. All domains conform to CDISC SDTM v3.3 standards and utilize controlled terminology per CDISC CT version 2025-09-26.`,
      ],
      tables: [
        {
          title: 'Table 1: SDTM Domains Included in Submission',
          headers: ['Domain', 'Description', 'Records', 'Compliance Status'],
          rows: [
            ['DM', 'Demographics', '560', 'Compliant'],
            ['AE', 'Adverse Events', '4,892', 'Compliant'],
            ['CM', 'Concomitant Medications', '8,234', 'Compliant'],
            ['DS', 'Disposition', '1,120', 'Compliant'],
            ['EX', 'Exposure', '6,780', 'Compliant'],
            ['LB', 'Laboratory Results', '142,560', 'Compliant'],
            ['MH', 'Medical History', '3,456', 'Compliant'],
            ['RS', 'Disease Response', '3,920', 'Compliant'],
            ['TU', 'Tumor Results', '12,480', 'Compliant'],
            ['VS', 'Vital Signs', '22,400', 'Compliant'],
            ['EG', 'ECG Results', '8,960', 'Compliant'],
            ['QS', 'Questionnaires (PRO)', '11,200', 'Compliant'],
          ],
          footnotes: ['16 additional SDTM domains (FA, IE, MH, PC, PP, PR, SC, SE, SU, SV, TA, TD, TE, TI, TS, TV) included but not shown.'],
        },
      ],
    },
    {
      heading: 'ADaM Dataset Listing',
      level: 1,
      paragraphs: [
        'Analysis datasets were derived per ADaM v1.3 standards and support all pre-specified analyses in the Statistical Analysis Plan (RPT-P3-002).',
      ],
      tables: [
        {
          title: 'Table 2: ADaM Datasets',
          headers: ['Dataset', 'Description', 'Key Variables', 'Records'],
          rows: [
            ['ADSL', 'Subject Level', 'Treatment arm, stratification factors, demographics', '560'],
            ['ADTTE', 'Time-to-Event (PFS, OS)', 'AVAL (time), CNSR (censor), PARAMCD (PFS/OS)', '1,120'],
            ['ADRS', 'Response (ORR, BOR)', 'AVALC (response category), PARAMCD', '3,920'],
            ['ADAE', 'Adverse Events', 'AEDECOD, AESEV, AESER, AEREL', '4,892'],
            ['ADLB', 'Laboratory', 'AVAL, BASE, CHG, PARAMCD', '142,560'],
            ['ADEG', 'ECG', 'AVAL (QTcF), BASE, CHG', '8,960'],
            ['ADQOL', 'Quality of Life (PRO)', 'AVAL, BASE, CHG, PARAMCD (QLQ-C30 scales)', '11,200'],
          ],
        },
      ],
    },
    {
      heading: 'Define.xml and Reviewer Guides',
      level: 1,
      paragraphs: [
        'Define.xml v2.0 specifications have been generated for both SDTM and ADaM datasets, including complete metadata, value-level metadata, and computational algorithms for all derived variables. The Analysis Data Reviewer\'s Guide (ADRG) provides a comprehensive overview of the ADaM dataset structure, derivation methods, and traceability from SDTM source domains.',
        'The Study Data Standardization Plan (SDSP) documents the end-to-end data flow from electronic data capture (EDC) through SDTM mapping to ADaM derivation. All standard and non-standard variables are documented with clear rationale.',
      ],
    },
    {
      heading: 'Data Integrity and Quality',
      level: 1,
      paragraphs: [
        `Data quality was ensured through a comprehensive validation framework including: (1) programmatic double programming of all ADaM datasets with independent comparison; (2) medical review of key safety and efficacy data by the clinical team; (3) conformance checks against CDISC standards using Pinnacle 21; and (4) submission-readiness review per FDA Study Data Technical Conformance Guide (Version 5.2). All datasets and supporting documentation have been archived in the electronic Trial Master File (eTMF) and are ready for eCTD Module 5 inclusion.`,
      ],
    },
  ],
};
registerDocument('phase06-sdtm-adam-submission-ready', sdtmAdam);

// 4. phase06-tables-figures-listings (Tier 2)
const tfl: DocumentContent = {
  documentTitle: `Tables, Figures, and Listings (TFL) Specifications — Study ${STUDIES.phase3.id} (LUMINOS-1)`,
  documentNumber: 'RPT-P3-004',
  version: '1.0',
  date: '2026-01-20',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'TFL Shell Overview',
      level: 1,
      paragraphs: [
        `This document provides the TFL shells and specifications for all tables, figures, and listings to be included in the Clinical Study Report for LUMINOS-1 (${STUDIES.phase3.id}). A total of 78 tables, 24 figures, and 42 listings are specified, covering efficacy, safety, pharmacokinetics, and patient-reported outcomes.`,
      ],
      tables: [
        {
          title: 'Table 1: TFL Inventory Summary',
          headers: ['Category', 'Tables', 'Figures', 'Listings', 'Total'],
          rows: [
            ['Efficacy — Primary (PFS)', '8', '4', '3', '15'],
            ['Efficacy — Secondary (OS, ORR, DOR)', '12', '6', '5', '23'],
            ['Safety', '28', '4', '18', '50'],
            ['Pharmacokinetics', '6', '3', '4', '13'],
            ['Patient-Reported Outcomes', '10', '4', '4', '18'],
            ['Demographics and Disposition', '8', '1', '6', '15'],
            ['Biomarker / Exploratory', '6', '2', '2', '10'],
            ['Total', '78', '24', '42', '144'],
          ],
        },
      ],
    },
    {
      heading: 'Kaplan-Meier Curve Specifications',
      level: 1,
      paragraphs: [
        'Kaplan-Meier curves for PFS and OS are the primary graphical displays for the efficacy endpoints. Each figure will include the following elements: (1) Kaplan-Meier step function for each treatment arm (VLX-4070 in blue, docetaxel in red); (2) number-at-risk table below the x-axis at 3-month intervals; (3) median and 95% CI annotated on the figure; (4) hazard ratio, 95% CI, and stratified log-rank p-value displayed in an inset box; (5) censoring tick marks indicated on the curve.',
        `For PFS (Figure 14.2.1): x-axis range 0-24 months, y-axis 0-100%. Expected display: median PFS ${EFFICACY.phase3.medianPfsVlx} (${DRUG.code}) vs. ${EFFICACY.phase3.medianPfsDoc} (docetaxel); HR ${EFFICACY.phase3.pfsHr} (95% CI: ${EFFICACY.phase3.pfsCI}), p${EFFICACY.phase3.pfsP}. For OS (Figure 14.2.4): x-axis range 0-30 months; expected display: median OS ${EFFICACY.phase3.medianOsVlx} vs. ${EFFICACY.phase3.medianOsDoc}; HR ${EFFICACY.phase3.osHr} (95% CI: ${EFFICACY.phase3.osCI}), p=${EFFICACY.phase3.osP}.`,
      ],
    },
    {
      heading: 'Forest Plot Specifications',
      level: 1,
      paragraphs: [
        'Pre-specified subgroup forest plots will display PFS and OS hazard ratios across patient subgroups. Each forest plot includes: (1) subgroup labels on the left; (2) N per arm in each subgroup; (3) HR point estimate (diamond) with 95% CI (horizontal line); (4) vertical reference line at HR=1.0; (5) overall HR displayed at the bottom; (6) interaction p-value for each subgroup comparison.',
        'Subgroups: prior IO therapy (Y/N), ECOG PS (0/1), CNS metastases (Y/N), number of prior lines (1/>=2), sex (M/F), age (<65/>=65), race (White/Asian/Other), region (N. America/Europe/Asia-Pacific), smoking status (current-former/never), PD-L1 (<1%/1-49%/>=50%).',
      ],
    },
    {
      heading: 'Waterfall and Spider Plot Specifications',
      level: 1,
      paragraphs: [
        'Waterfall plots (Figure 14.2.8) will display the best percentage change from baseline in the sum of target lesion diameters for each patient in the ITT population with at least one post-baseline tumor assessment. Bars will be color-coded by best overall response (CR=dark green, PR=light green, SD=yellow, PD=red). A horizontal dashed line at -30% indicates the PR threshold per RECIST v1.1, and a line at +20% indicates the PD threshold.',
        `Spider plots (Figure 14.2.9) will display the percentage change from baseline in target lesion sum over time for individual patients in the ${DRUG.code} arm. Lines will be color-coded by best overall response. The plot will include time of censoring events and progressive disease markers.`,
      ],
    },
    {
      heading: 'Safety Summary Table Specifications',
      level: 1,
      paragraphs: [
        'The primary safety summary table (Table 14.3.1) will present treatment-emergent adverse events by System Organ Class and Preferred Term, ordered by decreasing frequency in the VLX-4070 arm. Columns will display: n (%), all grades and Grade >=3, for each arm. Events occurring in >=5% of patients in either arm will be included in the summary table.',
        'Dedicated hepatotoxicity tables will include: (1) incidence of ALT/AST elevations by grade (Table 14.3.8); (2) time to onset and resolution (Table 14.3.9); (3) dose modifications due to hepatotoxicity (Table 14.3.10); and (4) Hy\'s Law evaluation per FDA guidance (Table 14.3.11). QTc prolongation tables will present: maximum QTcF change from baseline by category (Table 14.3.14) and outlier analysis (Table 14.3.15).',
      ],
    },
  ],
};
registerDocument('phase06-tables-figures-listings', tfl);

// 5. phase06-phase3-clinical-study-reports (TIER 1 — deep)
const phase3Csr: DocumentContent = {
  documentTitle: `Clinical Study Report — Study ${STUDIES.phase3.id} (LUMINOS-1): ${STUDIES.phase3.title}`,
  documentNumber: 'RPT-P3-005',
  version: '1.0',
  date: '2026-07-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Synopsis',
      level: 1,
      paragraphs: [
        `LUMINOS-1 (${STUDIES.phase3.id}) was a Phase 3, randomized, open-label, active-controlled study comparing ${DRUG.fullName} ${DRUG.recommendedDose} to docetaxel 75 mg/m2 Q3W in ${STUDIES.phase3.patients} patients with previously treated KRAS G12C-mutant NSCLC. Patients were enrolled from ${STUDIES.phase3.startDate} to ${STUDIES.phase3.endDate} across 118 sites in 15 countries.`,
        `The study met its primary endpoint: PFS by BICR was significantly improved with ${DRUG.code} vs. docetaxel (HR ${EFFICACY.phase3.pfsHr}, 95% CI: ${EFFICACY.phase3.pfsCI}; p${EFFICACY.phase3.pfsP}; median ${EFFICACY.phase3.medianPfsVlx} vs. ${EFFICACY.phase3.medianPfsDoc}). The key secondary endpoint of OS also demonstrated a statistically significant improvement (HR ${EFFICACY.phase3.osHr}, 95% CI: ${EFFICACY.phase3.osCI}; p=${EFFICACY.phase3.osP}; median ${EFFICACY.phase3.medianOsVlx} vs. ${EFFICACY.phase3.medianOsDoc}). ORR was ${EFFICACY.phase3.orrVlx} vs. ${EFFICACY.phase3.orrDoc} (p<0.0001).`,
        `The safety profile of ${DRUG.code} was consistent with prior studies. The most common AEs were diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), and fatigue (${SAFETY.commonAEs[2].allGrade}). Grade >=3 hepatotoxicity (ALT elevation) occurred in ${SAFETY.commonAEs[3].grade3Plus}. The treatment discontinuation rate due to AEs was ${SAFETY.discontinuationRate} for ${DRUG.code} vs. 18.2% for docetaxel.`,
      ],
    },
    {
      heading: 'Patient Disposition and Demographics',
      level: 1,
      paragraphs: [
        `A total of 724 patients were screened; ${STUDIES.phase3.patients} were randomized (280 to ${DRUG.code}, 280 to docetaxel). The most common reason for screen failure was absence of confirmed KRAS G12C mutation (82/164, 50.0%). Baseline demographics were well-balanced between arms.`,
      ],
      tables: [
        {
          title: 'Table 1: Patient Demographics and Baseline Characteristics (ITT Population)',
          headers: ['Characteristic', `${DRUG.code} (N=280)`, 'Docetaxel (N=280)', 'Total (N=560)'],
          rows: [
            ['Median age, years (range)', '63 (34-82)', '64 (31-84)', '64 (31-84)'],
            ['Male, n (%)', '158 (56.4%)', '154 (55.0%)', '312 (55.7%)'],
            ['White, n (%)', '196 (70.0%)', '192 (68.6%)', '388 (69.3%)'],
            ['Asian, n (%)', '62 (22.1%)', '64 (22.9%)', '126 (22.5%)'],
            ['ECOG PS 0, n (%)', '110 (39.3%)', '112 (40.0%)', '222 (39.6%)'],
            ['ECOG PS 1, n (%)', '170 (60.7%)', '168 (60.0%)', '338 (60.4%)'],
            ['Prior IO therapy, n (%)', '248 (88.6%)', '250 (89.3%)', '498 (88.9%)'],
            ['>=2 prior lines, n (%)', '134 (47.9%)', '130 (46.4%)', '264 (47.1%)'],
            ['CNS metastases, n (%)', '48 (17.1%)', '50 (17.9%)', '98 (17.5%)'],
            ['Adenocarcinoma histology, n (%)', '268 (95.7%)', '270 (96.4%)', '538 (96.1%)'],
          ],
        },
        {
          title: 'Table 2: Patient Disposition',
          headers: ['Category', `${DRUG.code} (N=280)`, 'Docetaxel (N=280)'],
          rows: [
            ['Received >=1 dose of study treatment', '278 (99.3%)', '276 (98.6%)'],
            ['Ongoing treatment at data cutoff', '62 (22.1%)', '24 (8.6%)'],
            ['Completed planned treatment', '18 (6.4%)', '32 (11.4%)'],
            ['Discontinued treatment', '198 (70.7%)', '220 (78.6%)'],
            ['  Disease progression', '142 (50.7%)', '174 (62.1%)'],
            ['  Adverse event', '34 (12.1%)', '28 (10.0%)'],
            ['  Withdrawal of consent', '12 (4.3%)', '10 (3.6%)'],
            ['  Death', '8 (2.9%)', '6 (2.1%)'],
            ['  Other', '2 (0.7%)', '2 (0.7%)'],
          ],
        },
      ],
    },
    {
      heading: 'Primary Efficacy Endpoint — Progression-Free Survival',
      level: 1,
      paragraphs: [
        `PFS by BICR was significantly longer in the ${DRUG.code} arm compared to docetaxel. Median PFS was ${EFFICACY.phase3.medianPfsVlx} (95% CI: 6.2-8.8) in the ${DRUG.code} arm vs. ${EFFICACY.phase3.medianPfsDoc} (95% CI: 3.4-4.9) in the docetaxel arm (HR ${EFFICACY.phase3.pfsHr}, 95% CI: ${EFFICACY.phase3.pfsCI}; stratified log-rank p${EFFICACY.phase3.pfsP}).`,
        'The PFS benefit was consistent across all pre-specified subgroups. Notably, patients with prior IO therapy (HR 0.56, 95% CI: 0.44-0.71), ECOG PS 1 (HR 0.60, 95% CI: 0.46-0.78), and CNS metastases (HR 0.52, 95% CI: 0.32-0.86) all demonstrated benefit consistent with or exceeding the overall study population. The treatment-by-subgroup interaction was not significant for any pre-specified subgroup (all interaction p >0.10).',
      ],
      tables: [
        {
          title: 'Table 3: Progression-Free Survival (ITT Population, BICR)',
          headers: ['Parameter', `${DRUG.code} (N=280)`, 'Docetaxel (N=280)'],
          rows: [
            ['PFS events, n (%)', '186 (66.4%)', '222 (79.3%)'],
            ['Median PFS, months (95% CI)', `${EFFICACY.phase3.medianPfsVlx} (6.2-8.8)`, `${EFFICACY.phase3.medianPfsDoc} (3.4-4.9)`],
            ['6-month PFS rate (95% CI)', '58.2% (52.1-63.8)', '32.4% (26.9-38.0)'],
            ['12-month PFS rate (95% CI)', '28.4% (23.1-33.9)', '8.2% (5.2-12.0)'],
            ['Hazard ratio (95% CI)', `${EFFICACY.phase3.pfsHr} (${EFFICACY.phase3.pfsCI})`, '—'],
            ['Stratified log-rank p-value', `${EFFICACY.phase3.pfsP}`, '—'],
          ],
        },
      ],
    },
    {
      heading: 'Key Secondary Endpoint — Overall Survival',
      level: 1,
      paragraphs: [
        `OS was significantly improved with ${DRUG.code} compared to docetaxel. Median OS was ${EFFICACY.phase3.medianOsVlx} (95% CI: 13.4-18.8) vs. ${EFFICACY.phase3.medianOsDoc} (95% CI: 8.8-12.4) (HR ${EFFICACY.phase3.osHr}, 95% CI: ${EFFICACY.phase3.osCI}; stratified log-rank p=${EFFICACY.phase3.osP}). The 12-month OS rate was 62.8% (57.0-68.0) in the ${DRUG.code} arm vs. 44.2% (38.3-49.9) in the docetaxel arm.`,
        'OS was tested hierarchically per the pre-specified gatekeeping procedure after statistical significance was achieved for the primary PFS endpoint. Subsequent therapies were received by 62.4% of docetaxel patients and 48.2% of VLX-4070 patients; 18.6% of docetaxel patients received a commercial KRAS G12C inhibitor as subsequent therapy.',
      ],
      tables: [
        {
          title: 'Table 4: Overall Survival (ITT Population)',
          headers: ['Parameter', `${DRUG.code} (N=280)`, 'Docetaxel (N=280)'],
          rows: [
            ['Deaths, n (%)', '148 (52.9%)', '186 (66.4%)'],
            ['Median OS, months (95% CI)', `${EFFICACY.phase3.medianOsVlx} (13.4-18.8)`, `${EFFICACY.phase3.medianOsDoc} (8.8-12.4)`],
            ['12-month OS rate (95% CI)', '62.8% (57.0-68.0)', '44.2% (38.3-49.9)'],
            ['18-month OS rate (95% CI)', '42.6% (36.8-48.3)', '24.8% (19.8-30.0)'],
            ['Hazard ratio (95% CI)', `${EFFICACY.phase3.osHr} (${EFFICACY.phase3.osCI})`, '—'],
            ['Stratified log-rank p-value', `${EFFICACY.phase3.osP}`, '—'],
          ],
        },
      ],
    },
    {
      heading: 'Secondary Efficacy Endpoints — ORR, DOR',
      level: 1,
      paragraphs: [
        `Confirmed ORR by BICR was ${EFFICACY.phase3.orrVlx} (111/280) in the ${DRUG.code} arm vs. ${EFFICACY.phase3.orrDoc} (35/280) in the docetaxel arm (difference 27.3%, 95% CI: 20.8-33.8; p<0.0001). Complete responses were observed in 3.2% (9/280) of ${DRUG.code}-treated patients vs. 0.7% (2/280) of docetaxel-treated patients.`,
        `Median DOR was 8.4 months (95% CI: 6.8-10.2) in the ${DRUG.code} arm vs. 4.8 months (95% CI: 3.2-6.4) in the docetaxel arm. At 12 months, 32.4% of ${DRUG.code} responders maintained their response compared to 12.8% of docetaxel responders.`,
      ],
      tables: [
        {
          title: 'Table 5: Best Overall Response (ITT Population, BICR)',
          headers: ['Response Category', `${DRUG.code} (N=280)`, 'Docetaxel (N=280)'],
          rows: [
            ['Complete response (CR)', '9 (3.2%)', '2 (0.7%)'],
            ['Partial response (PR)', '102 (36.4%)', '33 (11.8%)'],
            ['Stable disease (SD)', '108 (38.6%)', '124 (44.3%)'],
            ['Progressive disease (PD)', '42 (15.0%)', '96 (34.3%)'],
            ['Not evaluable (NE)', '19 (6.8%)', '25 (8.9%)'],
            ['ORR (CR+PR)', `111 (${EFFICACY.phase3.orrVlx})`, `35 (${EFFICACY.phase3.orrDoc})`],
            ['DCR (CR+PR+SD)', '219 (78.2%)', '159 (56.8%)'],
          ],
        },
      ],
    },
    {
      heading: 'Safety Results',
      level: 1,
      paragraphs: [
        `In the safety population (${DRUG.code} N=278, docetaxel N=276), the median duration of exposure was 5.8 months (range: 0.1-18.4) for ${DRUG.code} and 3.2 months (range: 0.1-14.6) for docetaxel. Treatment-emergent adverse events (any grade) were reported in 97.1% and 95.3% of patients in the ${DRUG.code} and docetaxel arms, respectively. Grade >=3 TEAEs occurred in 44.6% (${DRUG.code}) vs. 52.2% (docetaxel).`,
      ],
      tables: [
        {
          title: 'Table 6: Treatment-Emergent AEs (>=10% Any Grade in Either Arm)',
          headers: ['Adverse Event', `${DRUG.code} All Grades`, `${DRUG.code} Grade >=3`, 'Docetaxel All Grades', 'Docetaxel Grade >=3'],
          rows: [
            ['Diarrhea', '34.2%', '4.3%', '12.0%', '1.1%'],
            ['Nausea', '28.4%', '1.8%', '18.5%', '1.4%'],
            ['Fatigue', '24.1%', '3.2%', '32.6%', '5.8%'],
            ['ALT increased', '21.9%', '7.9%', '4.3%', '0.7%'],
            ['AST increased', '19.8%', '6.5%', '3.6%', '0.4%'],
            ['Neutropenia', '2.5%', '0.7%', '42.4%', '28.6%'],
            ['Febrile neutropenia', '0.4%', '0.4%', '8.7%', '8.7%'],
            ['Alopecia', '1.1%', '0%', '28.3%', '0%'],
            ['Peripheral neuropathy', '2.2%', '0.4%', '14.1%', '2.2%'],
            ['Decreased appetite', '18.0%', '1.4%', '14.5%', '1.1%'],
            ['QTc prolongation', '7.9%', '2.2%', '1.4%', '0.4%'],
          ],
          footnotes: [
            SAFETY.hepatotoxicityNote,
            'Docetaxel arm: G-CSF prophylaxis was permitted per institutional guidelines.',
          ],
        },
        {
          title: 'Table 7: Serious Adverse Events and Deaths',
          headers: ['Category', `${DRUG.code} (N=278)`, 'Docetaxel (N=276)'],
          rows: [
            ['Any SAE', '52 (18.7%)', '64 (23.2%)'],
            ['AE leading to treatment discontinuation', '34 (12.2%)', '50 (18.1%)'],
            ['AE leading to dose modification', '68 (24.5%)', '82 (29.7%)'],
            ['Treatment-related death', '1 (0.4%)', '3 (1.1%)'],
            ['Deaths during study (any cause)', '156 (56.1%)', '192 (69.6%)'],
          ],
        },
      ],
    },
    {
      heading: 'Patient-Reported Outcomes',
      level: 1,
      paragraphs: [
        `Patient-reported outcomes (PROs) were assessed using the EORTC QLQ-C30 and QLQ-LC13. Compliance rates for PRO assessments were 88.4% at baseline and 72.1% at Week 24 in the ${DRUG.code} arm, and 86.8% and 58.4% in the docetaxel arm, respectively.`,
        `The mean change from baseline in QLQ-C30 Global Health Status/QoL favored ${DRUG.code} at all timepoints from Cycle 3 onward. At Week 12, the mean difference between arms was 6.8 points (95% CI: 3.2-10.4; p<0.001), exceeding the minimally important difference (MID) of 5 points. Time to deterioration (TTD, >=10-point decrease in GHS/QoL) was significantly longer with ${DRUG.code} (median 8.2 vs. 4.4 months; HR 0.62, 95% CI: 0.50-0.76; p<0.001). Lung cancer symptoms (QLQ-LC13: cough, dyspnea, chest pain) showed improvement in the ${DRUG.code} arm and worsening in the docetaxel arm.`,
      ],
    },
    {
      heading: 'Conclusions',
      level: 1,
      paragraphs: [
        `LUMINOS-1 demonstrates that ${DRUG.fullName} ${DRUG.recommendedDose} provides statistically significant and clinically meaningful improvements in PFS, OS, and ORR compared to docetaxel in patients with previously treated KRAS G12C-mutant NSCLC. The safety profile of ${DRUG.code} is differentiated from docetaxel, with lower rates of neutropenia and neuropathy but higher rates of hepatotoxicity and QTc prolongation, both manageable with established monitoring and dose modification algorithms. PRO data demonstrate improved quality of life and delayed symptom deterioration with ${DRUG.code}. These results support the benefit-risk profile of ${DRUG.code} in this patient population and form the basis for NDA submission (${REGULATORY.ndaNumber}).`,
      ],
    },
  ],
};
registerDocument('phase06-phase3-clinical-study-reports', phase3Csr);

// 6. phase06-integrated-summary-of-safety (Tier 2)
const iss: DocumentContent = {
  documentTitle: `Integrated Summary of Safety — ${DRUG.fullName}`,
  documentNumber: 'RPT-P3-006',
  version: '1.0',
  date: '2026-02-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Overall Exposure',
      level: 1,
      paragraphs: [
        `The integrated safety database includes all patients who received at least one dose of ${DRUG.code} across the clinical development program (Studies ${STUDIES.phase1.id} through ${STUDIES.ole.id}). A total of 587 patients were exposed to ${DRUG.code} at any dose, with 467 patients receiving the recommended dose of ${DRUG.recommendedDose}. Total patient-exposure at the ${DRUG.recommendedDose} dose was 312.4 patient-years.`,
      ],
      tables: [
        {
          title: 'Table 1: Extent of Exposure to VLX-4070 (All Doses)',
          headers: ['Study', 'N Exposed', 'Dose Range', 'Median Duration (months)', 'Patient-Years'],
          rows: [
            [`${STUDIES.phase1.id} (Phase 1)`, `${STUDIES.phase1.patients}`, '50-600mg QD', '4.2', '23.8'],
            [`${STUDIES.phase2.id} (Phase 2)`, `${STUDIES.phase2.patients}`, '200-400mg QD', '5.6', '68.2'],
            [`${STUDIES.phase3.id} (Phase 3)`, '278', '400mg QD', '5.8', '134.4'],
            [`${STUDIES.ole.id} (OLE)`, `${STUDIES.ole.patients}`, '200-400mg QD', '11.4', '84.6'],
            ['Healthy volunteers (002)', `${STUDIES.phase1Food.patients}`, '400mg single dose', 'N/A', '1.4'],
            ['Total', '587 unique', '50-600mg QD', '—', '312.4 at 400mg QD'],
          ],
        },
      ],
    },
    {
      heading: 'Overall Adverse Event Summary',
      level: 1,
      paragraphs: [
        `In the pooled safety population receiving ${DRUG.recommendedDose} (N=467), TEAEs of any grade were reported in 96.8% of patients. Grade >=3 TEAEs occurred in 43.9%. Serious adverse events (SAEs) were reported in ${SAFETY.saeRate}. TEAEs leading to treatment discontinuation occurred in ${SAFETY.discontinuationRate}. Treatment-related deaths occurred in ${SAFETY.deathsRelated} (2 patients: 1 hepatic failure, 1 pneumonitis).`,
      ],
      tables: [
        {
          title: 'Table 2: Overall Safety Summary (Pooled 400mg QD, N=467)',
          headers: ['Category', 'n (%)', 'Most Common Causes'],
          rows: [
            ['Any TEAE', '452 (96.8%)', '—'],
            ['Grade >=3 TEAE', '205 (43.9%)', 'ALT increased (8.0%), AST increased (6.5%), diarrhea (4.2%)'],
            ['Serious AE', `87 (${SAFETY.saeRate})`, 'Pneumonia (3.9%), hepatotoxicity (3.0%), PE (1.9%)'],
            ['AE leading to discontinuation', `58 (${SAFETY.discontinuationRate})`, 'Hepatotoxicity (4.1%), QTc prolongation (2.1%)'],
            ['AE leading to dose modification', '114 (24.4%)', 'ALT/AST elevation (14.1%), diarrhea (3.9%)'],
            ['Treatment-related death', `2 (${SAFETY.deathsRelated})`, 'Hepatic failure (1), pneumonitis (1)'],
          ],
        },
      ],
    },
    {
      heading: 'Hepatotoxicity Deep-Dive',
      level: 1,
      paragraphs: [
        `${SAFETY.hepatotoxicityNote} In the pooled 400mg QD population, the median time to onset of first Grade >=3 ALT elevation was 6.4 weeks (range: 1.4-24.2 weeks). The median time to resolution to Grade <=1 following dose interruption was 2.6 weeks (range: 0.7-8.4 weeks). Of 37 patients with Grade >=3 ALT elevation, 28 (75.7%) were successfully rechallenged at the same or reduced dose without recurrence of Grade >=3 elevation.`,
        'No cases met Hy\'s Law criteria (ALT >3x ULN concurrent with total bilirubin >2x ULN in the absence of biliary obstruction). Three patients met the criteria for potential Hy\'s Law cases but were determined upon adjudication to have alternative etiologies (2 progressive hepatic metastases, 1 concurrent hepatitis B reactivation).',
      ],
    },
    {
      heading: 'QTc Prolongation Analysis',
      level: 1,
      paragraphs: [
        `${SAFETY.qtcNote} In the pooled safety database, QTcF prolongation >60ms from baseline was observed in 2.1% of patients receiving ${DRUG.recommendedDose}. No patients experienced QTcF >500ms that was considered treatment-related. Concentration-QTc modeling confirmed a linear relationship with a slope of 4.2 ms per 10,000 ng/mL increase in plasma concentration. At the median steady-state Cmax of 5,840 ng/mL, the model-predicted mean QTcF change from baseline was 6.8ms (90% CI: 4.5-9.1ms), below the 10ms threshold of regulatory concern. No cases of Torsades de Pointes, ventricular tachycardia, or sudden cardiac death were observed.`,
      ],
    },
    {
      heading: 'Deaths and Serious Adverse Events',
      level: 1,
      paragraphs: [
        `Across the pooled safety database, 2 treatment-related deaths (${SAFETY.deathsRelated}) were reported in the 400mg QD population: (1) a 72-year-old male with Grade 5 hepatic failure occurring at Week 8 of treatment (Study ${STUDIES.phase2.id}), and (2) a 68-year-old female with Grade 5 pneumonitis occurring at Week 14 (Study ${STUDIES.phase3.id}). Both cases were reviewed by the DSMB and an independent hepatic/pulmonary adjudication committee.`,
        'The most common SAEs (>=2%) were pneumonia (3.9%), hepatotoxicity (3.0%), pulmonary embolism (1.9%), and pneumonitis (1.5%). SAE rates were consistent across studies and did not increase with longer duration of exposure based on OLE data.',
      ],
    },
  ],
};
registerDocument('phase06-integrated-summary-of-safety', iss);

// 7. phase06-integrated-summary-of-efficacy (Tier 2)
const ise: DocumentContent = {
  documentTitle: `Integrated Summary of Efficacy — ${DRUG.fullName}`,
  documentNumber: 'RPT-P3-007',
  version: '1.0',
  date: '2026-02-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Overview of Efficacy Evidence',
      level: 1,
      paragraphs: [
        `The integrated efficacy summary for ${DRUG.fullName} draws upon data from the Phase 2 BEACON-Lung study (${STUDIES.phase2.id}, N=${STUDIES.phase2.patients}) and the pivotal Phase 3 LUMINOS-1 study (${STUDIES.phase3.id}, N=${STUDIES.phase3.patients}). The Phase 1 study (${STUDIES.phase1.id}, N=${STUDIES.phase1.patients}) provides supportive dose-response data across solid tumor types.`,
        `${DRUG.code} has demonstrated consistent and clinically meaningful antitumor activity across the development program, with the Phase 3 randomized study confirming superiority over standard-of-care docetaxel in previously treated KRAS G12C-mutant NSCLC.`,
      ],
    },
    {
      heading: 'Efficacy Across Studies',
      level: 1,
      paragraphs: [
        'The table below summarizes the key efficacy outcomes at the recommended dose across studies.',
      ],
      tables: [
        {
          title: 'Table 1: Efficacy Summary Across Studies (400mg QD)',
          headers: ['Endpoint', `Phase 1 (N=${STUDIES.phase1.patients})`, `Phase 2 BEACON (N=98)`, `Phase 3 LUMINOS (N=280)`, 'Docetaxel Control (N=280)'],
          rows: [
            ['ORR', `${EFFICACY.phase1.orr}*`, `${EFFICACY.phase2.orr}`, `${EFFICACY.phase3.orrVlx}`, `${EFFICACY.phase3.orrDoc}`],
            ['DCR', `${EFFICACY.phase1.dcrPercent}*`, `${EFFICACY.phase2.dcr}`, '78.2%', '56.8%'],
            ['Median PFS', 'NR*', `${EFFICACY.phase2.medianPfs}`, `${EFFICACY.phase3.medianPfsVlx}`, `${EFFICACY.phase3.medianPfsDoc}`],
            ['Median OS', 'NR*', `${EFFICACY.phase2.medianOs}`, `${EFFICACY.phase3.medianOsVlx}`, `${EFFICACY.phase3.medianOsDoc}`],
            ['Median DOR', `${EFFICACY.phase1.medianDor}*`, `${EFFICACY.phase2.medianDor}`, '8.4 months', '4.8 months'],
          ],
          footnotes: ['*Phase 1 results include all tumor types at all dose levels; not directly comparable. NR = not reported at time of analysis.'],
        },
      ],
    },
    {
      heading: 'Consistency of Treatment Effect',
      level: 1,
      paragraphs: [
        `The PFS benefit of ${DRUG.code} over docetaxel in LUMINOS-1 was consistent across all pre-specified subgroups. Forest plot analysis demonstrated that the hazard ratio point estimate favored ${DRUG.code} in every subgroup tested. No treatment-by-subgroup interaction reached statistical significance (all interaction p >0.10).`,
        'Key subgroup findings include: prior IO therapy (88.9% of patients, HR 0.56), ECOG PS 1 (60.4%, HR 0.60), CNS metastases (17.5%, HR 0.52), >=2 prior lines (47.1%, HR 0.62), and Asian patients (22.5%, HR 0.51). The consistency of benefit across subgroups strengthens the generalizability of the LUMINOS-1 results to the broader target population.',
      ],
    },
    {
      heading: 'Subgroup Forest Plot Description',
      level: 1,
      paragraphs: [
        'The pre-specified subgroup forest plot for PFS (Figure ISE-1) displays hazard ratios with 95% confidence intervals for each subgroup. All point estimates fall to the left of HR=1.0, indicating consistent benefit with VLX-4070 across subgroups. The overall HR of 0.58 is represented by a vertical dashed line for reference. Subgroups with the greatest benefit (HR <0.55) include patients with CNS metastases, Asian patients, and those with prior IO therapy.',
      ],
    },
    {
      heading: 'Benefit-Risk Integration',
      level: 1,
      paragraphs: [
        `The integrated efficacy data demonstrate that ${DRUG.code} ${DRUG.recommendedDose} provides clinically meaningful improvements in PFS (HR ${EFFICACY.phase3.pfsHr}), OS (HR ${EFFICACY.phase3.osHr}), and ORR (${EFFICACY.phase3.orrVlx} vs. ${EFFICACY.phase3.orrDoc}) compared to docetaxel. These benefits are consistent across patient subgroups and supported by improved quality of life (PRO data). When considered alongside the manageable safety profile (see Integrated Summary of Safety, RPT-P3-006), the benefit-risk balance strongly favors ${DRUG.code} in the proposed indication of previously treated KRAS G12C-mutant NSCLC.`,
      ],
    },
  ],
};
registerDocument('phase06-integrated-summary-of-efficacy', ise);

// 8. phase06-clinical-overview-summary (Tier 2)
const clinicalOverview: DocumentContent = {
  documentTitle: `Clinical Overview and Summary (CTD 2.5 / 2.7) — ${DRUG.fullName}`,
  documentNumber: 'RPT-P3-008',
  version: '1.0',
  date: '2026-02-10',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Product Overview (Module 2.5.1)',
      level: 1,
      paragraphs: [
        `${DRUG.fullName} is a ${DRUG.mechanism.toLowerCase()} developed for the treatment of adult patients with KRAS G12C-mutant locally advanced or metastatic NSCLC who have received at least one prior systemic therapy. ${DRUG.code} is administered orally at ${DRUG.recommendedDose} as a ${DRUG.formulation.toLowerCase()}. This Clinical Overview is prepared in accordance with ICH M4E guidance and CTD Module 2.5 requirements.`,
        `The NDA (${REGULATORY.ndaNumber}) is supported by a comprehensive clinical development program comprising five clinical studies enrolling a total of ${STUDIES.phase1.patients + STUDIES.phase1Food.patients + STUDIES.phase2.patients + STUDIES.phase3.patients + STUDIES.ole.patients} patients/subjects.`,
      ],
    },
    {
      heading: 'Biopharmaceutics Summary (Module 2.7.1)',
      level: 1,
      paragraphs: [
        `${DRUG.code} is formulated as an immediate-release ${DRUG.formulation.toLowerCase()} in strengths of 100mg and 200mg. Bioavailability is approximately 72% based on the food-effect study (${STUDIES.phase1Food.id}). Food had no clinically meaningful effect on ${DRUG.code} exposure (AUC ratio fed/fasted: 1.08, 90% CI: 0.92-1.26; Cmax ratio: 0.89, 90% CI: 0.76-1.04), supporting administration with or without food.`,
        `${DRUG.code} is highly protein-bound (99.2% to albumin and alpha-1 acid glycoprotein). The drug is primarily metabolized by CYP3A4 (78%) with minor contributions from CYP2D6 (12%) and CYP1A2 (6%). Renal excretion of unchanged drug is <5%. The terminal elimination half-life is approximately 8.2 hours, supporting once-daily dosing.`,
      ],
    },
    {
      heading: 'Clinical Pharmacology Summary (Module 2.7.2)',
      level: 1,
      paragraphs: [
        `The clinical pharmacology program for ${DRUG.code} includes first-in-human PK evaluation in Study ${STUDIES.phase1.id}, food-effect study ${STUDIES.phase1Food.id}, population PK analysis (N=587), exposure-response analyses, in vitro DDI studies, and PBPK modeling. Key findings include dose-proportional PK (50-600mg), no clinically significant food effect, and a concentration-dependent QTc effect with a slope of 4.2 ms per 10,000 ng/mL.`,
        `In vitro studies identified ${DRUG.code} as a substrate of CYP3A4 and P-gp. PBPK modeling predicts a 3.2-fold increase in AUC with strong CYP3A4 inhibitors (e.g., itraconazole) and a 68% decrease with strong CYP3A4 inducers (e.g., rifampin). Dose adjustment recommendations are provided in the proposed labeling.`,
      ],
    },
    {
      heading: 'Efficacy Summary (Module 2.7.3)',
      level: 1,
      paragraphs: [
        `The efficacy of ${DRUG.code} in previously treated KRAS G12C-mutant NSCLC is established by the pivotal Phase 3 LUMINOS-1 study (${STUDIES.phase3.id}), supported by the Phase 2 BEACON-Lung study (${STUDIES.phase2.id}). LUMINOS-1 demonstrated statistically significant improvements in PFS (HR ${EFFICACY.phase3.pfsHr}, p${EFFICACY.phase3.pfsP}), OS (HR ${EFFICACY.phase3.osHr}, p=${EFFICACY.phase3.osP}), and ORR (${EFFICACY.phase3.orrVlx} vs. ${EFFICACY.phase3.orrDoc}) compared to docetaxel. Benefits were consistent across pre-specified subgroups.`,
      ],
    },
    {
      heading: 'Safety Summary (Module 2.7.4)',
      level: 1,
      paragraphs: [
        `The safety profile of ${DRUG.code} has been characterized in 587 patients across the development program (312.4 patient-years at ${DRUG.recommendedDose}). The most common adverse reactions are diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), fatigue (${SAFETY.commonAEs[2].allGrade}), and transaminase elevations. Important identified risks include hepatotoxicity (Grade >=3 ALT ${SAFETY.commonAEs[3].grade3Plus}) and QTc prolongation (Grade >=3 ${SAFETY.commonAEs[8].grade3Plus}), both manageable with monitoring and dose modification. The treatment discontinuation rate was ${SAFETY.discontinuationRate}. The benefit-risk assessment is favorable for the proposed indication.`,
      ],
    },
  ],
};
registerDocument('phase06-clinical-overview-summary', clinicalOverview);

// 9. phase06-benefit-risk-assessment (Tier 2)
const benefitRisk: DocumentContent = {
  documentTitle: `Benefit-Risk Assessment — ${DRUG.fullName}`,
  documentNumber: 'RPT-P3-009',
  version: '1.0',
  date: '2026-02-10',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Structured Benefit-Risk Framework',
      level: 1,
      paragraphs: [
        `This benefit-risk assessment for ${DRUG.fullName} is structured according to the FDA\'s Benefit-Risk Framework as described in the Structured Approach to Benefit-Risk Assessment in Drug Regulatory Decision-Making (PDUFA VI commitment). The assessment integrates efficacy, safety, and patient-reported outcome data across the clinical development program.`,
      ],
    },
    {
      heading: 'Analysis of Condition',
      level: 1,
      paragraphs: [
        'KRAS G12C-mutant NSCLC represents approximately 13% of lung adenocarcinomas and approximately 5% of all NSCLC. Patients who progress after first-line platinum-based chemotherapy and/or immunotherapy have limited treatment options. Standard second-line therapy with docetaxel provides a median OS of approximately 10 months with significant toxicities (neutropenia, neuropathy, alopecia). While sotorasib and adagrasib are approved KRAS G12C inhibitors, neither has demonstrated a statistically significant overall survival benefit vs. docetaxel in randomized Phase 3 studies.',
        'The disease is uniformly fatal in the advanced/metastatic setting. There remains a significant unmet need for targeted therapies that can improve survival, delay disease progression, and maintain quality of life.',
      ],
    },
    {
      heading: 'Benefits',
      level: 1,
      paragraphs: [
        `${DRUG.code} demonstrated the following clinically meaningful benefits in the pivotal LUMINOS-1 study:`,
      ],
      tables: [
        {
          title: 'Table 1: Summary of Benefits',
          headers: ['Benefit', 'Magnitude', 'Clinical Significance'],
          rows: [
            ['PFS improvement', `HR ${EFFICACY.phase3.pfsHr} (median ${EFFICACY.phase3.medianPfsVlx} vs. ${EFFICACY.phase3.medianPfsDoc})`, '3.3-month improvement; 42% reduction in risk of progression/death'],
            ['OS improvement', `HR ${EFFICACY.phase3.osHr} (median ${EFFICACY.phase3.medianOsVlx} vs. ${EFFICACY.phase3.medianOsDoc})`, '5.4-month improvement; 28% reduction in risk of death'],
            ['ORR', `${EFFICACY.phase3.orrVlx} vs. ${EFFICACY.phase3.orrDoc}`, '3.2-fold higher response rate; 27.3% absolute difference'],
            ['Quality of life', 'TTD GHS/QoL: HR 0.62', 'Clinically meaningful QoL improvement (>MID); symptom benefit'],
            ['Consistent subgroup benefit', 'All subgroups HR <1.0', 'Broad applicability across patient subgroups'],
          ],
        },
      ],
    },
    {
      heading: 'Risks',
      level: 1,
      paragraphs: [
        'Key risks associated with VLX-4070 treatment are summarized below:',
      ],
      tables: [
        {
          title: 'Table 2: Summary of Risks',
          headers: ['Risk', 'Incidence', 'Severity', 'Manageability'],
          rows: [
            ['Hepatotoxicity', `Grade >=3: ALT ${SAFETY.commonAEs[3].grade3Plus}, AST ${SAFETY.commonAEs[4].grade3Plus}`, 'Serious; 1 fatal case (hepatic failure)', 'Reversible with dose modification; monitoring algorithm established; no Hy\'s Law cases'],
            ['QTc prolongation', `All grades ${SAFETY.commonAEs[8].allGrade}; Grade >=3 ${SAFETY.commonAEs[8].grade3Plus}`, 'Potentially serious; no TdP/VT observed', 'Concentration-dependent; manageable with ECG monitoring; dose modification guidelines'],
            ['GI toxicity', `Diarrhea ${SAFETY.commonAEs[0].allGrade}; nausea ${SAFETY.commonAEs[1].allGrade}`, 'Mostly Grade 1-2', 'Manageable with supportive care; rarely requires dose modification'],
            ['Treatment discontinuation', `${SAFETY.discontinuationRate}`, 'Moderate', 'Lower than docetaxel (18.1%); most patients tolerate treatment'],
          ],
        },
      ],
    },
    {
      heading: 'Benefit-Risk Conclusion',
      level: 1,
      paragraphs: [
        `The totality of evidence demonstrates a favorable benefit-risk profile for ${DRUG.fullName} ${DRUG.recommendedDose} in patients with previously treated KRAS G12C-mutant NSCLC. The statistically significant and clinically meaningful improvements in PFS, OS, ORR, and quality of life, combined with a manageable safety profile and established risk mitigation strategies, support the conclusion that the benefits of ${DRUG.code} substantially outweigh the risks in the proposed patient population. ${DRUG.code} addresses a significant unmet medical need and represents a meaningful advance in the treatment of KRAS G12C-mutant NSCLC.`,
      ],
    },
  ],
};
registerDocument('phase06-benefit-risk-assessment', benefitRisk);

// 10. phase06-long-term-safety-extension (Tier 3)
const ole: DocumentContent = {
  documentTitle: `Open-Label Extension Study — ${STUDIES.ole.id}: ${STUDIES.ole.title}`,
  documentNumber: 'RPT-P3-010',
  version: '1.0',
  date: '2026-03-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Study Overview',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.ole.id} is an ongoing, open-label extension (OLE) study enrolling patients who completed treatment in prior ${DRUG.code} studies (${STUDIES.phase1.id}, ${STUDIES.phase2.id}, or ${STUDIES.phase3.id}) and who, in the investigator's judgment, continue to derive clinical benefit from ${DRUG.code} treatment. As of the data cutoff (February 1, 2026), ${STUDIES.ole.patients} patients have been enrolled, with a median duration of follow-up of 11.4 months (range: 2.1-22.8 months).`,
        `The primary objective is long-term safety characterization. Patients continue to receive ${DRUG.code} at their last tolerated dose (${DRUG.recommendedDose} or 200mg QD for those requiring dose reduction). Safety assessments include AE monitoring, LFTs every 3 months, and ECGs every 6 months.`,
      ],
    },
    {
      heading: 'Long-Term Safety Data',
      level: 1,
      paragraphs: [
        `Among the ${STUDIES.ole.patients} patients enrolled, the long-term safety profile of ${DRUG.code} remains consistent with prior observations. No new safety signals have been identified with extended exposure. The incidence of new-onset Grade >=3 hepatotoxicity during the OLE period was 3.4% (3/89), occurring at a lower rate than during the parent studies, suggesting no cumulative hepatotoxicity risk.`,
        'Two patients (2.2%) experienced Grade >=3 QTc prolongation during the OLE period, both managed with dose reduction. No treatment-related deaths occurred during the OLE study. Chronic/cumulative toxicities (e.g., cataracts, cardiac fibrosis) have not been observed, consistent with the nonclinical chronic toxicity data.',
      ],
      tables: [
        {
          title: 'Table 1: Safety Summary During OLE Period (N=89)',
          headers: ['Category', 'n (%)'],
          rows: [
            ['Any TEAE', '72 (80.9%)'],
            ['Grade >=3 TEAE', '18 (20.2%)'],
            ['SAE', '12 (13.5%)'],
            ['AE leading to discontinuation', '6 (6.7%)'],
            ['New Grade >=3 ALT elevation', '3 (3.4%)'],
            ['New Grade >=3 QTc prolongation', '2 (2.2%)'],
            ['Treatment-related death', '0 (0%)'],
          ],
        },
      ],
    },
    {
      heading: 'Ongoing Status and Plans',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.ole.id} remains open for enrollment and treatment. The study is expected to continue until commercial availability of ${DRUG.code} in each participating country or until no patients continue to derive clinical benefit. Updated long-term safety data will be included in periodic safety update reports (PSURs) and will be provided to regulatory authorities as part of the post-marketing commitment. An interim data summary will be included in NDA ${REGULATORY.ndaNumber} as supportive safety data.`,
      ],
    },
  ],
};
registerDocument('phase06-long-term-safety-extension', ole);

// 11. phase06-population-pk-pbpk-reports (Tier 3)
const popPk: DocumentContent = {
  documentTitle: `Population PK and PBPK Modeling Reports — ${DRUG.fullName}`,
  documentNumber: 'RPT-P3-011',
  version: '1.0',
  date: '2026-01-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Population Pharmacokinetic Model',
      level: 1,
      paragraphs: [
        `A population pharmacokinetic (PopPK) model for ${DRUG.code} was developed using pooled PK data from 587 patients across Studies ${STUDIES.phase1.id} through ${STUDIES.ole.id} (8,462 concentration-time observations). The final model was a two-compartment model with first-order absorption and a lag time, parameterized in terms of CL/F, Vc/F, Q/F, Vp/F, Ka, and Tlag.`,
        'The final model parameter estimates (relative standard error) were: CL/F = 12.4 L/h (3.8%), Vc/F = 86.2 L (5.1%), Q/F = 8.6 L/h (12.4%), Vp/F = 124.8 L (8.6%), Ka = 1.82 h-1 (6.2%), Tlag = 0.42 h (4.8%). Inter-individual variability (IIV) on CL/F was 38.2% CV, on Vc/F was 42.6% CV. Residual variability was described by a combined additive-proportional error model.',
      ],
    },
    {
      heading: 'Covariate Analysis and Special Populations',
      level: 1,
      paragraphs: [
        'Stepwise covariate analysis identified the following statistically significant covariates: body weight on Vc/F (power model, exponent 1.12), moderate hepatic impairment (Child-Pugh B) on CL/F (32% reduction), and CYP3A4 inhibitor co-administration on CL/F (28% reduction). Age, sex, race, mild renal impairment, and mild hepatic impairment were not significant covariates.',
        'Based on the PopPK model, the following dosing recommendations are proposed: no dose adjustment for body weight, mild hepatic impairment (Child-Pugh A), or mild-moderate renal impairment (CrCl 30-89 mL/min). Dose reduction to 200mg QD is recommended for patients with moderate hepatic impairment (Child-Pugh B). VLX-4070 has not been studied in patients with severe hepatic impairment (Child-Pugh C) or severe renal impairment (CrCl <30 mL/min); use is not recommended in these populations.',
      ],
    },
    {
      heading: 'PBPK Model for Drug-Drug Interaction Prediction',
      level: 1,
      paragraphs: [
        `A whole-body PBPK model for ${DRUG.code} was developed in Simcyp (Version 22, Release 1) and verified against observed clinical PK data from Studies ${STUDIES.phase1.id} and ${STUDIES.phase1Food.id}. The model predicted observed AUC and Cmax within 1.2-fold across all dose levels, confirming adequate model performance.`,
        `The verified PBPK model predicts: (1) strong CYP3A4 inhibitors (itraconazole): 3.2-fold AUC increase — reduce ${DRUG.code} dose to 200mg QD; (2) moderate CYP3A4 inhibitors (erythromycin): 1.8-fold AUC increase — reduce to 200mg QD; (3) strong CYP3A4 inducers (rifampin): 68% AUC decrease — avoid concomitant use; (4) moderate CYP3A4 inducers (efavirenz): 42% AUC decrease — avoid or increase monitoring. ${DRUG.code} is not predicted to be a clinically significant inhibitor or inducer of CYP enzymes at therapeutic concentrations.`,
      ],
    },
  ],
};
registerDocument('phase06-population-pk-pbpk-reports', popPk);

// 12. phase06-companion-diagnostic-submission (Tier 3)
const cdxSubmission: DocumentContent = {
  documentTitle: `Companion Diagnostic Submission Summary — ${CDX.name} (${CDX.submissionType} ${CDX.pmaNumber})`,
  documentNumber: 'RPT-P3-012',
  version: '1.0',
  date: '2026-02-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Device Description and Intended Use',
      level: 1,
      paragraphs: [
        `The ${CDX.name} is an in vitro diagnostic ${CDX.technology.toLowerCase()} test developed by ${CDX.partner} for the qualitative detection of KRAS G12C mutations (c.34G>T, p.G12C) in formalin-fixed, paraffin-embedded (FFPE) tumor tissue from patients with NSCLC. The assay is submitted as a companion diagnostic (${CDX.submissionType}, ${CDX.pmaNumber}) for use in selecting patients for treatment with ${DRUG.fullName}.`,
        `Intended Use Statement: "The ${CDX.name} is indicated as an aid in identifying patients with KRAS G12C-mutant non-small cell lung cancer who may benefit from treatment with ${DRUG.name} (${DRUG.code}). The test is intended for use with FFPE tumor tissue specimens."`,
      ],
    },
    {
      heading: 'Analytical Validation',
      level: 1,
      paragraphs: [
        'Analytical validation studies were conducted in accordance with FDA guidance for companion diagnostic devices. The validation program included limit of detection (LoD), accuracy, reproducibility, and interference studies.',
      ],
      tables: [
        {
          title: 'Table 1: Analytical Performance Summary',
          headers: ['Parameter', 'Specification', 'Result', 'Acceptance Criterion Met?'],
          rows: [
            ['Sensitivity (PPA)', '>=95%', '98.5% (197/200)', 'Yes'],
            ['Specificity (NPA)', '>=97%', '99.2% (248/250)', 'Yes'],
            ['Limit of Detection (LoD)', '<=5% VAF at 50ng DNA input', '2.1% VAF at 50ng input', 'Yes'],
            ['Reproducibility (within-site)', '>=95% agreement', '98.8% (3 operators, 3 days, 2 reagent lots)', 'Yes'],
            ['Reproducibility (between-site)', '>=93% agreement', '97.4% (3 sites, 60 samples per site)', 'Yes'],
            ['Interference (hemoglobin)', 'No interference at <=500 mg/dL', 'No interference observed', 'Yes'],
            ['Interference (formalin fixation)', 'Concordant results 24h-72h fixation', '99.0% concordance', 'Yes'],
          ],
        },
      ],
    },
    {
      heading: 'Clinical Validation (Bridging Study)',
      level: 1,
      paragraphs: [
        `Clinical validation was established through a bridging study comparing the ${CDX.name} to the clinical trial assay (FoundationOne CDx, Foundation Medicine) used to enroll patients in BEACON-Lung and LUMINOS-1. The bridging study evaluated 220 archival NSCLC FFPE specimens (110 KRAS G12C-positive, 110 KRAS G12C-negative by FoundationOne CDx).`,
        `Overall concordance between the ${CDX.name} and FoundationOne CDx was 97.3% (214/220). Positive percent agreement (PPA) was 96.4% (106/110) and negative percent agreement (NPA) was 98.2% (108/110). The four discordant KRAS G12C-positive cases had low tumor purity (<15%) and low VAF (<3%); three of four were detected as positive on repeat testing with the VelaDx assay using enriched sections. These results demonstrate acceptable concordance to bridge clinical outcomes from the trial assay to the companion diagnostic.`,
      ],
    },
    {
      heading: 'Regulatory Submission Timeline',
      level: 1,
      paragraphs: [
        `The ${CDX.submissionType} application (${CDX.pmaNumber}) was submitted concurrently with the NDA for ${DRUG.code} (NDA ${REGULATORY.ndaNumber}) on ${REGULATORY.ndaFiledDate}. ${CDX.partner} is the PMA applicant with ${DRUG.sponsor} as the therapeutic sponsor. Coordinated review between CDRH and CDER is anticipated, with a target approval date aligned with the PDUFA date of ${REGULATORY.pdufa}. Pre-submission meetings with CDRH confirmed acceptance of the bridging study approach and the analytical validation strategy.`,
      ],
    },
  ],
};
registerDocument('phase06-companion-diagnostic-submission', cdxSubmission);
