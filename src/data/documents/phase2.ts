import { registerDocument } from './index';
import { DRUG, STUDIES, REGULATORY, EFFICACY, SAFETY, CDX } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// ---------------------------------------------------------------------------
// Phase 05 — Phase 2 (Dose Finding / Proof of Concept) — 12 cards
// ---------------------------------------------------------------------------

// 1. phase05-phase2-protocol-amendments (Tier 2)
const phase2ProtocolAmendments: DocumentContent = {
  documentTitle: `${STUDIES.phase2.title} — Protocol Synopsis and Amendments`,
  documentNumber: 'RPT-P2-001',
  version: '3.0',
  date: '2024-06-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Protocol Synopsis',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.phase2.id} (BEACON-Lung) is a Phase 2, open-label, multicenter study evaluating the safety and efficacy of ${DRUG.fullName} in patients with previously treated KRAS G12C-mutant non-small cell lung cancer (NSCLC). The study enrolled ${STUDIES.phase2.patients} patients across 38 sites in the United States, European Union, and Asia-Pacific region.`,
        `${DRUG.name} is a ${DRUG.mechanism.toLowerCase()} administered orally as a ${DRUG.formulation.toLowerCase()}. Patients received either 200mg QD or 400mg QD in two parallel dose cohorts. Treatment continued until disease progression, unacceptable toxicity, withdrawal of consent, or investigator decision.`,
      ],
    },
    {
      heading: 'Study Design',
      level: 1,
      paragraphs: [
        'BEACON-Lung utilized an open-label, parallel-cohort design with adaptive sample size re-estimation at the pre-specified interim analysis. Patients were stratified by ECOG performance status (0 vs. 1), number of prior lines of therapy (1 vs. >=2), and presence of CNS metastases (yes vs. no).',
        `Eligible patients were adults (>=18 years) with histologically or cytologically confirmed NSCLC harboring a KRAS G12C mutation, confirmed by a validated local or central NGS assay. All patients must have received at least one prior systemic therapy including platinum-based chemotherapy and/or immune checkpoint inhibitor therapy.`,
      ],
      tables: [
        {
          title: 'Table 1: Dose Cohort Assignment',
          headers: ['Cohort', 'Dose', 'N Enrolled', 'Schedule', 'Formulation'],
          rows: [
            ['Cohort A', '200mg QD', '48', 'Continuous daily dosing', `${DRUG.formulation}`],
            ['Cohort B', '400mg QD', '98', 'Continuous daily dosing', `${DRUG.formulation}`],
          ],
          footnotes: ['Cohort B was expanded based on favorable safety and preliminary efficacy at the interim analysis.'],
        },
      ],
    },
    {
      heading: 'Study Objectives and Endpoints',
      level: 1,
      paragraphs: [
        'The primary objective was to evaluate the antitumor activity of VLX-4070 as measured by objective response rate (ORR) per RECIST v1.1 as assessed by blinded independent central review (BICR).',
      ],
      tables: [
        {
          title: 'Table 2: Study Endpoints',
          headers: ['Category', 'Endpoint', 'Assessment Method'],
          rows: [
            ['Primary', 'Objective Response Rate (ORR)', 'RECIST v1.1 per BICR'],
            ['Key Secondary', 'Progression-Free Survival (PFS)', 'RECIST v1.1 per BICR'],
            ['Key Secondary', 'Duration of Response (DOR)', 'RECIST v1.1 per BICR'],
            ['Secondary', 'Overall Survival (OS)', 'Survival follow-up every 12 weeks'],
            ['Secondary', 'Disease Control Rate (DCR)', 'RECIST v1.1 per BICR'],
            ['Exploratory', 'ctDNA clearance rate', 'Serial plasma sampling'],
          ],
        },
      ],
    },
    {
      heading: 'Protocol Amendments',
      level: 1,
      paragraphs: [
        'Three protocol amendments were implemented during the conduct of the study to incorporate evolving safety data, refine inclusion/exclusion criteria, and align with regulatory feedback.',
      ],
      tables: [
        {
          title: 'Table 3: Summary of Protocol Amendments',
          headers: ['Amendment', 'Date', 'Key Changes'],
          rows: [
            ['Amendment 1', '2024-08-15', 'Added mandatory ECG monitoring at Cycle 1 Day 15; updated hepatotoxicity management algorithm'],
            ['Amendment 2', '2024-11-20', 'Expanded Cohort B enrollment from 72 to 98 based on interim analysis; added ctDNA exploratory endpoint'],
            ['Amendment 3', '2025-02-10', 'Clarified CNS metastasis eligibility (stable, treated CNS mets allowed); extended survival follow-up to 24 months'],
          ],
        },
      ],
    },
    {
      heading: 'Regulatory Status',
      level: 1,
      paragraphs: [
        `The study was conducted under IND ${REGULATORY.indNumber}. Fast Track designation was granted on ${REGULATORY.fastTrackDate} for the treatment of adult patients with KRAS G12C-mutant NSCLC who have progressed on or after prior systemic therapy. All amendments received IRB/EC approval prior to implementation at participating sites.`,
      ],
    },
  ],
};
registerDocument('phase05-phase2-protocol-amendments', phase2ProtocolAmendments);

// 2. phase05-exposure-response-analysis (Tier 2)
const exposureResponse: DocumentContent = {
  documentTitle: `Exposure-Response Analysis Report — ${DRUG.fullName}`,
  documentNumber: 'RPT-P2-002',
  version: '1.0',
  date: '2025-07-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Executive Summary',
      level: 1,
      paragraphs: [
        `This report presents the exposure-response (E-R) analyses for ${DRUG.fullName} using data from Studies ${STUDIES.phase1.id} and ${STUDIES.phase2.id}. E-R relationships were characterized for both efficacy endpoints (ORR, PFS) and key safety endpoints (ALT elevation, QTc prolongation) to support the recommended Phase 3 dose of ${DRUG.recommendedDose}.`,
        `A total of ${STUDIES.phase1.patients + STUDIES.phase2.patients} patients contributed PK and PD data across dose levels ranging from ${DRUG.doses[0]} to ${DRUG.doses[4]}. The analyses confirm that the ${DRUG.recommendedDose} dose achieves near-maximal efficacy with an acceptable safety profile.`,
      ],
    },
    {
      heading: 'Exposure-Response for Efficacy',
      level: 1,
      paragraphs: [
        'Logistic regression models were used to characterize the relationship between VLX-4070 steady-state AUC0-24h and ORR. A significant positive E-R relationship was observed (p=0.003), with higher exposure associated with increased probability of objective response.',
        'Time-to-event models (parametric Weibull) evaluated the relationship between exposure and PFS. Patients in the highest exposure quartile (AUC0-24h > 45,000 ng*h/mL) demonstrated significantly longer PFS compared to the lowest quartile (HR 0.52, 95% CI 0.31-0.87).',
      ],
      tables: [
        {
          title: 'Table 1: ORR by Exposure Quartile',
          headers: ['Exposure Quartile (AUC0-24h)', 'N', 'ORR (%)', '95% CI'],
          rows: [
            ['Q1: <22,000 ng*h/mL', '36', '22.2%', '10.1-39.2'],
            ['Q2: 22,000-32,000 ng*h/mL', '37', '35.1%', '20.2-52.5'],
            ['Q3: 32,000-45,000 ng*h/mL', '36', '47.2%', '30.4-64.5'],
            ['Q4: >45,000 ng*h/mL', '37', '54.1%', '36.9-70.5'],
          ],
        },
      ],
    },
    {
      heading: 'Exposure-Response for Safety',
      level: 1,
      paragraphs: [
        `A positive E-R relationship was identified between steady-state Cmax and the probability of Grade >=3 ALT elevation (logistic regression, p=0.012). At the ${DRUG.recommendedDose} dose, the model-predicted probability of Grade >=3 ALT elevation was 7.8%, consistent with the observed rate of ${SAFETY.commonAEs[3].grade3Plus}.`,
        `For QTc prolongation, a linear mixed-effects model estimated a slope of 4.2 ms per 10,000 ng/mL increase in plasma concentration (90% CI: 2.8-5.6 ms). At the median Cmax observed at ${DRUG.recommendedDose} (5,840 ng/mL), the predicted mean QTcF change from baseline was 6.8 ms (90% CI: 4.5-9.1 ms), below the threshold of clinical concern.`,
      ],
    },
    {
      heading: 'Dose-Response Modeling',
      level: 1,
      paragraphs: [
        'An Emax model was fit to ORR data across all dose levels (50mg through 600mg). The estimated ED90 was 380mg, supporting the selection of 400mg QD as the recommended dose. The dose-response curve plateaued between 400mg and 600mg, indicating minimal additional efficacy benefit at doses above 400mg.',
        `At the MTD of ${DRUG.mtd}, the observed incidence of Grade >=3 hepatotoxicity was 18.2% compared to ${SAFETY.commonAEs[3].grade3Plus} at 400mg QD, confirming a more favorable therapeutic index at the recommended dose.`,
      ],
    },
    {
      heading: 'Phase 3 Dose Justification',
      level: 1,
      paragraphs: [
        `Based on the totality of E-R evidence, ${DRUG.recommendedDose} was selected as the recommended Phase 3 dose for ${DRUG.code}. This dose provides: (1) near-maximal efficacy as predicted by the Emax model (estimated 94% of maximal ORR); (2) acceptable hepatotoxicity rates manageable with dose modification; (3) QTc prolongation within acceptable limits with ECG monitoring; and (4) a favorable benefit-risk profile compared to higher dose levels.`,
        `The ${DRUG.recommendedDose} dose was endorsed by the Data Safety Monitoring Board and agreed upon with the FDA during the End-of-Phase 2 meeting.`,
      ],
    },
  ],
};
registerDocument('phase05-exposure-response-analysis', exposureResponse);

// 3. phase05-biomarker-analysis-reports (Tier 2)
const biomarkerAnalysis: DocumentContent = {
  documentTitle: `Biomarker Analysis Report — Study ${STUDIES.phase2.id} (BEACON-Lung)`,
  documentNumber: 'RPT-P2-003',
  version: '1.0',
  date: '2025-09-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'KRAS G12C Mutation Detection and Concordance',
      level: 1,
      paragraphs: [
        `KRAS G12C mutation status was assessed in all ${STUDIES.phase2.patients} patients enrolled in BEACON-Lung using tissue-based next-generation sequencing (NGS) and circulating tumor DNA (ctDNA) analysis from plasma. Tissue NGS was performed centrally at ${CDX.partner} using a validated 523-gene panel, while ctDNA analysis utilized the ${CDX.name}.`,
        'Concordance between tissue NGS and ctDNA-based KRAS G12C detection was evaluated in 132 patients with paired samples available.',
      ],
      tables: [
        {
          title: 'Table 1: Tissue-ctDNA Concordance for KRAS G12C Detection',
          headers: ['Parameter', 'Result'],
          rows: [
            ['Paired samples evaluable', '132/146 (90.4%)'],
            ['Overall concordance', '91.7% (121/132)'],
            ['Positive percent agreement (PPA)', '93.8% (120/128)'],
            ['Negative percent agreement (NPA)', '25.0% (1/4)'],
            ['ctDNA detection rate (tissue-confirmed positive)', '93.8%'],
            ['Median ctDNA variant allele fraction (VAF)', '4.2% (range 0.1-62.4%)'],
          ],
        },
      ],
    },
    {
      heading: 'Companion Diagnostic Co-Development',
      level: 1,
      paragraphs: [
        `The ${CDX.name} is being co-developed with ${CDX.partner} as a companion diagnostic (${CDX.submissionType} ${CDX.pmaNumber}) for patient selection in LUMINOS-1 and the anticipated NDA submission. The assay utilizes ${CDX.technology} to detect KRAS G12C mutations in FFPE tumor tissue with analytical sensitivity of 98.5% and specificity of 99.2%.`,
        'A bridging study comparing the VelaDx assay to the clinical trial assay (FoundationOne CDx) demonstrated 97.3% concordance in 220 archival NSCLC specimens, meeting the pre-specified acceptance criterion of >=95%.',
      ],
    },
    {
      heading: 'Pharmacodynamic Biomarkers',
      level: 1,
      paragraphs: [
        'Paired tumor biopsies (baseline and Cycle 2 Day 1) were collected in a subset of 42 patients. Phosphorylated ERK (pERK) and Ki-67 were assessed by immunohistochemistry as pharmacodynamic markers of KRAS pathway inhibition.',
      ],
      tables: [
        {
          title: 'Table 2: Pharmacodynamic Biomarker Changes (Paired Biopsies, N=42)',
          headers: ['Biomarker', 'Baseline (Median)', 'Cycle 2 Day 1 (Median)', 'Median % Change', 'p-value'],
          rows: [
            ['pERK H-score', '145 (IQR 98-210)', '38 (IQR 12-72)', '-72.4%', '<0.001'],
            ['Ki-67 index (%)', '42% (IQR 28-58)', '18% (IQR 8-32)', '-54.8%', '<0.001'],
          ],
          footnotes: ['Wilcoxon signed-rank test for paired samples.'],
        },
      ],
    },
    {
      heading: 'Patient Enrichment and Predictive Biomarkers',
      level: 1,
      paragraphs: [
        'Exploratory analyses evaluated potential predictive biomarkers for enhanced efficacy. Patients with high KRAS G12C ctDNA VAF (>=5%) at baseline showed numerically lower ORR (35.2%) compared to patients with low VAF (<5%, ORR 48.6%), suggesting tumor burden as a prognostic factor.',
        'Co-occurring STK11 mutations were detected in 28.1% of patients and were associated with reduced ORR (31.7% vs. 46.2%, p=0.09) and shorter PFS (5.4 vs. 9.1 months, HR 1.58, p=0.03). KEAP1 co-mutations (12.3% of patients) showed a similar trend but did not reach statistical significance.',
        'ctDNA clearance at Cycle 3 Day 1 (defined as undetectable KRAS G12C ctDNA) was observed in 38.4% of evaluable patients and was strongly associated with response (ORR 78.6% in ctDNA-cleared vs. 22.1% in ctDNA-persistent, p<0.001) and PFS (HR 0.34, p<0.001).',
      ],
    },
    {
      heading: 'Conclusions and Implications for Phase 3',
      level: 1,
      paragraphs: [
        `The biomarker analyses from BEACON-Lung support the use of tissue-based NGS (including the ${CDX.name}) as the primary method for KRAS G12C patient selection in LUMINOS-1. ctDNA-based detection provides a viable alternative when tissue is insufficient. Pharmacodynamic data confirm robust target engagement at ${DRUG.recommendedDose}. ctDNA dynamics and co-mutation status (STK11, KEAP1) will be incorporated as pre-specified stratification or subgroup analysis factors in the Phase 3 statistical analysis plan.`,
      ],
    },
  ],
};
registerDocument('phase05-biomarker-analysis-reports', biomarkerAnalysis);

// 4. phase05-interim-analysis-futility (Tier 3)
const interimAnalysis: DocumentContent = {
  documentTitle: `Interim Analysis Report — Study ${STUDIES.phase2.id} (BEACON-Lung)`,
  documentNumber: 'RPT-P2-004',
  version: '1.0',
  date: '2025-01-20',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Interim Analysis Overview',
      level: 1,
      paragraphs: [
        `A pre-specified interim analysis was conducted when 73 of the planned ${STUDIES.phase2.patients} patients (50% of total enrollment) had been enrolled and followed for a minimum of 12 weeks. The interim analysis was performed by an independent statistical center (ICON Biostatistics) and reviewed by the independent Data Safety Monitoring Board (DSMB) on January 15, 2025.`,
        'The interim analysis had two objectives: (1) futility assessment based on a pre-specified conditional power threshold, and (2) sample size re-estimation for Cohort B (400mg) based on observed response rates.',
      ],
    },
    {
      heading: 'Conditional Power and Futility Assessment',
      level: 1,
      paragraphs: [
        'The futility boundary was defined as conditional power <20% for rejecting the null hypothesis (H0: ORR <=15%) at the final analysis, assuming the current trend continued. At the interim analysis, the observed ORR in Cohort B (400mg, N=49 evaluable) was 38.8% (19/49), yielding a conditional power of 99.2%.',
        'The pre-specified futility boundary was not crossed for either dose cohort. Cohort A (200mg) showed an observed ORR of 25.0% (8/32 evaluable) with conditional power of 74.6%.',
      ],
      tables: [
        {
          title: 'Table 1: Interim Futility Assessment',
          headers: ['Cohort', 'N Evaluable', 'Observed ORR', 'Conditional Power', 'Futility Boundary Crossed?'],
          rows: [
            ['Cohort A (200mg)', '32', '25.0% (8/32)', '74.6%', 'No'],
            ['Cohort B (400mg)', '49', '38.8% (19/49)', '99.2%', 'No'],
          ],
        },
      ],
    },
    {
      heading: 'DSMB Recommendation',
      level: 1,
      paragraphs: [
        'Following review of the unblinded interim efficacy data, safety data, and conditional power calculations, the DSMB recommended the following: (1) continuation of both dose cohorts without modification; (2) expansion of Cohort B enrollment from 72 to 98 patients based on the favorable efficacy signal at 400mg; (3) continued enhanced hepatic monitoring per the protocol-specified algorithm.',
        `The DSMB noted no new or unexpected safety signals. The overall safety profile was consistent with prior observations from Study ${STUDIES.phase1.id}. The recommendation was communicated to the Sponsor via the DSMB Charter-specified process on January 18, 2025.`,
      ],
    },
  ],
};
registerDocument('phase05-interim-analysis-futility', interimAnalysis);

// 5. phase05-phase2-csr (TIER 1 — deep, 8+ sections)
const phase2Csr: DocumentContent = {
  documentTitle: `Clinical Study Report — Study ${STUDIES.phase2.id} (BEACON-Lung): ${STUDIES.phase2.title}`,
  documentNumber: 'RPT-P2-005',
  version: '1.0',
  date: '2025-10-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Synopsis',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.phase2.id} (BEACON-Lung) was a Phase 2, open-label, multicenter study evaluating ${DRUG.fullName}, a ${DRUG.mechanism.toLowerCase()}, in patients with previously treated KRAS G12C-mutant NSCLC. The study enrolled ${STUDIES.phase2.patients} patients across two dose cohorts (200mg QD, N=48; 400mg QD, N=98) from ${STUDIES.phase2.startDate} to ${STUDIES.phase2.endDate}.`,
        `The primary endpoint was ORR per RECIST v1.1 by BICR. In the 400mg QD cohort (primary analysis population), the confirmed ORR was ${EFFICACY.phase2.orr} (95% CI: 32.1-52.3%), including a complete response (CR) rate of ${EFFICACY.phase2.crRate} and partial response (PR) rate of ${EFFICACY.phase2.prRate}. The disease control rate (DCR) was ${EFFICACY.phase2.dcr}. Median PFS was ${EFFICACY.phase2.medianPfs} (95% CI: 5.9-9.8 months) and median OS was ${EFFICACY.phase2.medianOs} (95% CI: 11.4-18.6 months). Median DOR was ${EFFICACY.phase2.medianDor}.`,
        `The safety profile was consistent with the known class effects of KRAS G12C inhibitors. The most common adverse events were diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), fatigue (${SAFETY.commonAEs[2].allGrade}), and transaminase elevations (ALT ${SAFETY.commonAEs[3].allGrade}, AST ${SAFETY.commonAEs[4].allGrade}). The treatment discontinuation rate due to AEs was ${SAFETY.discontinuationRate}. Based on the totality of data, ${DRUG.recommendedDose} was selected as the recommended dose for Phase 3.`,
      ],
    },
    {
      heading: 'Study Design and Conduct',
      level: 1,
      paragraphs: [
        `BEACON-Lung was conducted at 38 investigational sites across 8 countries (United States, Canada, United Kingdom, Germany, France, Spain, Japan, and South Korea). The study was conducted in compliance with ICH-GCP guidelines and the Declaration of Helsinki. The first patient was enrolled on ${STUDIES.phase2.startDate} and the data cutoff date for the primary analysis was ${STUDIES.phase2.endDate}.`,
        `Patients were required to have histologically confirmed NSCLC with a documented KRAS G12C mutation, ECOG PS 0-1, measurable disease per RECIST v1.1, and prior treatment with at least one platinum-based chemotherapy and/or immune checkpoint inhibitor. Patients with stable, treated CNS metastases were eligible per Amendment 3.`,
      ],
    },
    {
      heading: 'Patient Demographics and Disposition',
      level: 1,
      paragraphs: [
        `A total of 168 patients were screened and ${STUDIES.phase2.patients} were enrolled and received at least one dose of study drug. The most common reason for screen failure was absence of confirmed KRAS G12C mutation (12 patients, 54.5% of screen failures).`,
      ],
      tables: [
        {
          title: 'Table 1: Patient Demographics (All Treated Patients, N=146)',
          headers: ['Characteristic', '200mg QD (N=48)', '400mg QD (N=98)', 'Total (N=146)'],
          rows: [
            ['Median age, years (range)', '64 (42-82)', '62 (38-79)', '63 (38-82)'],
            ['Male, n (%)', '26 (54.2%)', '55 (56.1%)', '81 (55.5%)'],
            ['White, n (%)', '34 (70.8%)', '68 (69.4%)', '102 (69.9%)'],
            ['Asian, n (%)', '10 (20.8%)', '22 (22.4%)', '32 (21.9%)'],
            ['ECOG PS 0, n (%)', '18 (37.5%)', '40 (40.8%)', '58 (39.7%)'],
            ['ECOG PS 1, n (%)', '30 (62.5%)', '58 (59.2%)', '88 (60.3%)'],
            ['Prior IO therapy, n (%)', '42 (87.5%)', '88 (89.8%)', '130 (89.0%)'],
            ['>=2 prior lines, n (%)', '22 (45.8%)', '47 (48.0%)', '69 (47.3%)'],
            ['CNS metastases, n (%)', '8 (16.7%)', '18 (18.4%)', '26 (17.8%)'],
            ['Current/former smoker, n (%)', '44 (91.7%)', '90 (91.8%)', '134 (91.8%)'],
          ],
        },
        {
          title: 'Table 2: Patient Disposition',
          headers: ['Category', '200mg QD (N=48)', '400mg QD (N=98)'],
          rows: [
            ['Completed treatment', '8 (16.7%)', '22 (22.4%)'],
            ['Ongoing treatment at data cutoff', '12 (25.0%)', '31 (31.6%)'],
            ['Discontinued treatment', '28 (58.3%)', '45 (45.9%)'],
            ['  Disease progression', '18 (37.5%)', '28 (28.6%)'],
            ['  Adverse event', '6 (12.5%)', '11 (11.2%)'],
            ['  Withdrawal of consent', '2 (4.2%)', '4 (4.1%)'],
            ['  Death', '2 (4.2%)', '2 (2.0%)'],
          ],
        },
      ],
    },
    {
      heading: 'Efficacy Results',
      level: 1,
      paragraphs: [
        `The primary efficacy analysis was conducted in the 400mg QD cohort (N=98). The confirmed ORR by BICR was ${EFFICACY.phase2.orr} (41/98; 95% CI: 32.1-52.3%), meeting the pre-specified primary endpoint threshold (lower bound of 95% CI > historical control ORR of 15%). In the 200mg cohort, ORR was 27.1% (13/48; 95% CI: 15.3-41.8%).`,
      ],
      tables: [
        {
          title: 'Table 3: Best Overall Response (BICR, RECIST v1.1)',
          headers: ['Response Category', '200mg QD (N=48)', '400mg QD (N=98)'],
          rows: [
            ['Complete Response (CR)', '0 (0%)', `3 (${EFFICACY.phase2.crRate})`],
            ['Partial Response (PR)', '13 (27.1%)', `38 (${EFFICACY.phase2.prRate})`],
            ['Stable Disease (SD)', '22 (45.8%)', '38 (38.8%)'],
            ['Progressive Disease (PD)', '10 (20.8%)', '14 (14.3%)'],
            ['Not Evaluable (NE)', '3 (6.3%)', '5 (5.1%)'],
            ['ORR (CR+PR)', '13 (27.1%)', `41 (${EFFICACY.phase2.orr})`],
            ['DCR (CR+PR+SD)', '35 (72.9%)', `79 (${EFFICACY.phase2.dcr})`],
          ],
          footnotes: ['ORR confirmed by repeat scan >=4 weeks after initial response.'],
        },
        {
          title: 'Table 4: Time-to-Event Efficacy Endpoints (400mg QD Cohort)',
          headers: ['Endpoint', 'Median (95% CI)', 'Events/N'],
          rows: [
            ['PFS per BICR', `${EFFICACY.phase2.medianPfs} (5.9-9.8)`, '62/98'],
            ['OS', `${EFFICACY.phase2.medianOs} (11.4-18.6)`, '48/98'],
            ['DOR', `${EFFICACY.phase2.medianDor} (5.8-11.2)`, '28/41 responders'],
          ],
        },
      ],
    },
    {
      heading: 'Safety Results',
      level: 1,
      paragraphs: [
        `All ${STUDIES.phase2.patients} patients who received at least one dose of study drug were included in the safety analysis. The median duration of treatment was 5.6 months (range: 0.2-14.8 months) in the 400mg cohort. Treatment-emergent adverse events (TEAEs) were reported in 96.6% of patients. Grade >=3 TEAEs occurred in 42.5% of patients in the 400mg cohort.`,
      ],
      tables: [
        {
          title: 'Table 5: Treatment-Emergent Adverse Events (>=10% Any Grade, 400mg QD Cohort)',
          headers: ['Adverse Event', 'All Grades, n (%)', 'Grade >=3, n (%)'],
          rows: SAFETY.commonAEs.filter((_, i) => i < 8).map(ae => [
            ae.event,
            ae.allGrade,
            ae.grade3Plus,
          ]),
          footnotes: [
            SAFETY.hepatotoxicityNote,
            SAFETY.qtcNote,
          ],
        },
        {
          title: 'Table 6: Summary of Serious and Notable Safety Events (400mg QD)',
          headers: ['Category', 'N (%)', 'Details'],
          rows: [
            ['Serious adverse events (SAEs)', SAFETY.saeRate, 'Most common: pneumonia (4.1%), hepatotoxicity (3.1%), pulmonary embolism (2.0%)'],
            ['AEs leading to discontinuation', SAFETY.discontinuationRate, 'Most common: hepatotoxicity (4.1%), QTc prolongation (2.0%)'],
            ['AEs leading to dose modification', '24.5%', 'Most common: ALT/AST elevation (14.3%), diarrhea (4.1%)'],
            ['Deaths (treatment-related)', SAFETY.deathsRelated, 'One case of hepatic failure (400mg cohort)'],
          ],
        },
      ],
    },
    {
      heading: 'Hepatotoxicity Analysis',
      level: 1,
      paragraphs: [
        `Hepatotoxicity was identified as a key safety finding for ${DRUG.code}. Grade >=3 ALT elevations occurred in ${SAFETY.commonAEs[3].grade3Plus} and Grade >=3 AST elevations in ${SAFETY.commonAEs[4].grade3Plus} of patients in the 400mg cohort. The median time to onset of Grade >=3 transaminase elevation was 6.2 weeks (range: 2.1-18.4 weeks). All cases were reversible with dose interruption and/or reduction, with a median time to resolution of 2.8 weeks.`,
        'Hy\'s Law cases were assessed per FDA guidance. No cases met the criteria for Hy\'s Law (concurrent ALT >3x ULN and total bilirubin >2x ULN in the absence of cholestasis). A hepatotoxicity management algorithm was developed and incorporated into the protocol via Amendment 1, providing clear guidance for dose modification and monitoring.',
      ],
    },
    {
      heading: 'Pharmacokinetic Results',
      level: 1,
      paragraphs: [
        `${DRUG.code} exhibited dose-proportional pharmacokinetics across the 200mg-400mg dose range. Following oral administration of ${DRUG.recommendedDose}, the geometric mean (CV%) steady-state parameters were: Cmax 5,840 ng/mL (38.2%), AUC0-24h 38,400 ng*h/mL (42.1%), and trough concentration (Ctrough) 620 ng/mL (52.4%). Median Tmax was 2.0 hours (range: 1.0-4.0 hours) and the effective half-life was 6.8 hours. Steady state was achieved by Day 5 with an accumulation ratio of 1.4.`,
      ],
      tables: [
        {
          title: 'Table 7: Steady-State PK Parameters (Geometric Mean, %CV)',
          headers: ['Parameter', '200mg QD (N=42)', '400mg QD (N=86)'],
          rows: [
            ['Cmax (ng/mL)', '2,920 (36.8%)', '5,840 (38.2%)'],
            ['AUC0-24h (ng*h/mL)', '19,800 (40.3%)', '38,400 (42.1%)'],
            ['Ctrough (ng/mL)', '310 (48.6%)', '620 (52.4%)'],
            ['Tmax (h), median (range)', '2.0 (1.0-4.0)', '2.0 (1.0-4.0)'],
            ['Effective t1/2 (h)', '6.5 (28.4%)', '6.8 (30.1%)'],
          ],
        },
      ],
    },
    {
      heading: 'Dose Recommendation for Phase 3',
      level: 1,
      paragraphs: [
        `Based on the integrated assessment of efficacy (ORR ${EFFICACY.phase2.orr} vs. 27.1% for 400mg vs. 200mg), safety (manageable hepatotoxicity and QTc profile at 400mg), pharmacokinetics (dose-proportional exposure), and exposure-response analyses (near-maximal efficacy at 400mg), the recommended Phase 3 dose of ${DRUG.code} is ${DRUG.recommendedDose}.`,
        `This dose was agreed upon with the FDA during the End-of-Phase 2 meeting (see RPT-P2-008) and confirmed by the independent DSMB recommendation.`,
      ],
    },
    {
      heading: 'Conclusions',
      level: 1,
      paragraphs: [
        `${DRUG.fullName} at ${DRUG.recommendedDose} demonstrated clinically meaningful antitumor activity in patients with previously treated KRAS G12C-mutant NSCLC, with an ORR of ${EFFICACY.phase2.orr}, median PFS of ${EFFICACY.phase2.medianPfs}, and median OS of ${EFFICACY.phase2.medianOs}. The safety profile was manageable with established dose modification guidelines. These results support advancement to the Phase 3 LUMINOS-1 study (${STUDIES.phase3.id}).`,
      ],
    },
  ],
};
registerDocument('phase05-phase2-csr', phase2Csr);

// 6. phase05-updated-investigators-brochure (Tier 3)
const updatedIB: DocumentContent = {
  documentTitle: `Investigator's Brochure — ${DRUG.fullName} — Edition 4`,
  documentNumber: 'RPT-P2-006',
  version: '4.0',
  date: '2025-06-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Summary of Changes — Edition 4',
      level: 1,
      paragraphs: [
        `This fourth edition of the ${DRUG.code} Investigator's Brochure incorporates new clinical safety and efficacy data from the completed Phase 1 study (${STUDIES.phase1.id}) and interim data from the ongoing Phase 2 study (${STUDIES.phase2.id}, BEACON-Lung). Key updates include revised safety tables, updated reference safety information (RSI), and a new hepatotoxicity management algorithm.`,
      ],
      lists: {
        items: [
          'Section 5.3: Updated Phase 1 final safety data (N=68), including long-term follow-up safety',
          'Section 5.4: Added Phase 2 interim safety data from BEACON-Lung (N=146)',
          'Section 6.2: Revised hepatotoxicity management algorithm based on cumulative experience',
          'Section 7.1: Updated reference safety information with new expected adverse reactions',
          'Appendix 3: Added summary of drug-drug interaction study results',
        ],
        ordered: false,
      } as any,
    },
    {
      heading: 'Updated Safety Profile',
      level: 1,
      paragraphs: [
        `As of the data cutoff for IB Edition 4, a total of ${STUDIES.phase1.patients + STUDIES.phase2.patients} patients have been exposed to ${DRUG.code} across Studies ${STUDIES.phase1.id} and ${STUDIES.phase2.id}. The cumulative safety database supports the following updated reference safety information.`,
        `The most common treatment-related adverse events (all grades) remain diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), fatigue (${SAFETY.commonAEs[2].allGrade}), and hepatic transaminase elevations (ALT ${SAFETY.commonAEs[3].allGrade}, AST ${SAFETY.commonAEs[4].allGrade}). QTc prolongation (all grades ${SAFETY.commonAEs[8].allGrade}) has been added as a listed adverse reaction.`,
      ],
    },
    {
      heading: 'Hepatotoxicity Management Algorithm',
      level: 1,
      paragraphs: [
        'A standardized hepatotoxicity management algorithm has been developed based on pooled data from 214 VLX-4070-treated patients. The algorithm provides guidance for monitoring frequency, dose modification, and rechallenge criteria.',
      ],
      tables: [
        {
          title: 'Table 1: Hepatotoxicity Dose Modification Guidelines',
          headers: ['ALT/AST Grade', 'Action', 'Monitoring', 'Rechallenge'],
          rows: [
            ['Grade 1 (>ULN-3x ULN)', 'Continue current dose', 'Weekly LFTs x 4 weeks', 'N/A'],
            ['Grade 2 (>3-5x ULN)', 'Hold until Grade <=1; resume at same dose', 'LFTs every 3 days until resolution', 'One rechallenge at same dose permitted'],
            ['Grade 3 (>5-20x ULN)', 'Hold until Grade <=1; resume at reduced dose (200mg)', 'LFTs every 3 days; hepatology consult', 'Rechallenge at 200mg QD only'],
            ['Grade 4 (>20x ULN)', 'Permanently discontinue', 'Daily LFTs; hospitalize as needed', 'No rechallenge'],
          ],
          footnotes: ['For concurrent ALT >3x ULN and TBL >2x ULN, permanently discontinue and report as SAE.'],
        },
      ],
    },
    {
      heading: 'Updated Reference Safety Information',
      level: 1,
      paragraphs: [
        `The reference safety information (RSI) has been updated to include QTc prolongation as an identified risk based on the observed ${SAFETY.commonAEs[8].allGrade} all-grade incidence and ${SAFETY.commonAEs[8].grade3Plus} Grade >=3 incidence. ECG monitoring at baseline, Cycle 1 Day 15, and every 3 cycles is now recommended for all patients. Events previously classified as unexpected (e.g., peripheral edema Grade >=3) remain classified as expected based on the updated safety database.`,
      ],
    },
  ],
};
registerDocument('phase05-updated-investigators-brochure', updatedIB);

// 7. phase05-target-product-profile (Tier 3)
const targetProductProfile: DocumentContent = {
  documentTitle: `Target Product Profile — ${DRUG.fullName} for KRAS G12C-Mutant NSCLC`,
  documentNumber: 'RPT-P2-007',
  version: '2.0',
  date: '2025-05-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Target Indication and Patient Population',
      level: 1,
      paragraphs: [
        `${DRUG.fullName} is being developed for the treatment of adult patients with locally advanced or metastatic KRAS G12C-mutant non-small cell lung cancer (NSCLC) who have received at least one prior systemic therapy. KRAS G12C mutations are present in approximately 13% of NSCLC adenocarcinomas, representing a significant patient population with limited targeted therapy options.`,
        `The target label indication is: "${DRUG.name} is indicated for the treatment of adult patients with KRAS G12C-mutant locally advanced or metastatic NSCLC, as determined by an FDA-approved test, who have received at least one prior systemic therapy."`,
      ],
    },
    {
      heading: 'Target Label Claims and Differentiation',
      level: 1,
      paragraphs: [
        `The minimum target product profile (TPP) and optimal TPP for ${DRUG.code} are defined relative to approved KRAS G12C inhibitors (sotorasib, adagrasib). The key differentiating features of ${DRUG.code} include its allosteric binding mechanism (vs. covalent switch II pocket binding for sotorasib/adagrasib), which may confer activity in certain acquired resistance settings.`,
      ],
      tables: [
        {
          title: 'Table 1: Target Product Profile — Key Attributes',
          headers: ['Attribute', 'Minimum TPP', 'Optimal TPP', 'VLX-4070 Observed'],
          rows: [
            ['ORR (2L+ NSCLC)', '>=25%', '>=40%', `${EFFICACY.phase2.orr}`],
            ['Median PFS', '>=5 months', '>=7 months', `${EFFICACY.phase2.medianPfs}`],
            ['Median OS', '>=10 months', '>=14 months', `${EFFICACY.phase2.medianOs}`],
            ['Grade >=3 hepatotoxicity', '<=15%', '<=8%', `${SAFETY.commonAEs[3].grade3Plus}`],
            ['Treatment discontinuation', '<=20%', '<=12%', `${SAFETY.discontinuationRate}`],
            ['Dosing regimen', 'QD oral', 'QD oral, no food restriction', `${DRUG.recommendedDose}, with or without food`],
            ['Companion diagnostic', 'Required', 'Optional (broad NGS panel)', `${CDX.name} or approved NGS`],
          ],
        },
      ],
    },
    {
      heading: 'Competitive Landscape and Commercial Positioning',
      level: 1,
      paragraphs: [
        `${DRUG.code} enters a competitive landscape with two approved KRAS G12C inhibitors: sotorasib (Lumakras, approved May 2021, accelerated approval; confirmatory trial results mixed) and adagrasib (Krazati, approved December 2022). Key competitive advantages for ${DRUG.code} include: (1) numerically higher ORR (${EFFICACY.phase2.orr} vs. 28.0% sotorasib CodeBreaK 200, 42.9% adagrasib KRYSTAL-1); (2) allosteric mechanism with potential for combination strategies; (3) the LUMINOS-1 Phase 3 trial designed with OS as a key secondary endpoint to demonstrate survival benefit, which competitors have not definitively shown in 2L+ NSCLC.`,
        'The commercial strategy focuses on positioning VLX-4070 as the preferred KRAS G12C inhibitor based on superior or comparable efficacy, Phase 3 randomized data with survival benefit, and a manageable safety profile with established risk mitigation strategies.',
      ],
    },
  ],
};
registerDocument('phase05-target-product-profile', targetProductProfile);

// 8. phase05-eop2-pre-phase3-meeting (Tier 2)
const eop2Meeting: DocumentContent = {
  documentTitle: `End-of-Phase 2 / Pre-Phase 3 Meeting Briefing Document — ${DRUG.fullName}`,
  documentNumber: 'RPT-P2-008',
  version: '1.0',
  date: '2025-06-30',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Meeting Request and Background',
      level: 1,
      paragraphs: [
        `Velantis Therapeutics requests a Type B End-of-Phase 2 (EOP2) meeting with the Division of Oncology (FDA/CDER) to discuss the Phase 2 results for ${DRUG.fullName} and the proposed Phase 3 registrational study design (LUMINOS-1, ${STUDIES.phase3.id}). ${DRUG.code} was granted Fast Track designation on ${REGULATORY.fastTrackDate} for the treatment of adult patients with previously treated KRAS G12C-mutant NSCLC.`,
        `The BEACON-Lung Phase 2 study (${STUDIES.phase2.id}) demonstrated an ORR of ${EFFICACY.phase2.orr}, median PFS of ${EFFICACY.phase2.medianPfs}, and median OS of ${EFFICACY.phase2.medianOs} at the recommended dose of ${DRUG.recommendedDose}. These results support advancement to a Phase 3 registrational study.`,
      ],
    },
    {
      heading: 'Phase 2 Results Summary',
      level: 1,
      paragraphs: [
        `The key efficacy and safety findings from BEACON-Lung at the ${DRUG.recommendedDose} dose level are summarized below.`,
      ],
      tables: [
        {
          title: 'Table 1: Key Phase 2 Efficacy Results (400mg QD, N=98)',
          headers: ['Endpoint', 'Result', '95% CI'],
          rows: [
            ['ORR (BICR)', `${EFFICACY.phase2.orr}`, '32.1-52.3%'],
            ['CR rate', `${EFFICACY.phase2.crRate}`, '0.7-9.6%'],
            ['DCR', `${EFFICACY.phase2.dcr}`, '71.9-88.2%'],
            ['Median PFS', `${EFFICACY.phase2.medianPfs}`, '5.9-9.8 months'],
            ['Median OS', `${EFFICACY.phase2.medianOs}`, '11.4-18.6 months'],
            ['Median DOR', `${EFFICACY.phase2.medianDor}`, '5.8-11.2 months'],
          ],
        },
      ],
    },
    {
      heading: 'Proposed Phase 3 Study Design (LUMINOS-1)',
      level: 1,
      paragraphs: [
        `Velantis proposes a Phase 3, randomized, open-label study (LUMINOS-1, ${STUDIES.phase3.id}) comparing ${DRUG.code} ${DRUG.recommendedDose} to docetaxel 75 mg/m2 Q3W in patients with previously treated KRAS G12C-mutant NSCLC. The target enrollment is ${STUDIES.phase3.patients} patients, randomized 1:1, with stratification by prior immunotherapy (Y/N), ECOG PS (0 vs. 1), and CNS metastases (Y/N).`,
        `KRAS G12C mutation status will be confirmed by the ${CDX.name} (${CDX.partner}) or an FDA-approved NGS panel.`,
      ],
    },
    {
      heading: 'Endpoint Strategy',
      level: 1,
      paragraphs: [
        'The proposed primary endpoint is progression-free survival (PFS) per BICR (RECIST v1.1). The key secondary endpoint is overall survival (OS). Additional secondary endpoints include ORR, DOR, and patient-reported outcomes (EORTC QLQ-C30 Global Health Status/QoL).',
        'The rationale for PFS as primary endpoint includes: (1) PFS is an accepted endpoint for regular approval in 2L+ NSCLC; (2) PFS reduces confounding from post-progression therapies; (3) the Phase 2 PFS signal (median 7.8 months) is clinically meaningful relative to the expected docetaxel PFS of ~4 months. OS will be tested as a key secondary using a gatekeeping procedure to control the overall Type I error rate.',
      ],
    },
    {
      heading: 'Statistical Strategy',
      level: 1,
      paragraphs: [
        `The sample size of ${STUDIES.phase3.patients} patients (280 per arm) provides 90% power to detect a PFS hazard ratio of 0.65 at a one-sided alpha of 0.025, assuming median PFS of 4.0 months in the docetaxel arm and 6.2 months in the ${DRUG.code} arm. One interim analysis for efficacy is planned at ~60% of required PFS events using an O'Brien-Fleming spending function.`,
        'For OS, a hierarchical testing procedure will be used: OS will be tested at the full alpha of 0.025 (one-sided) only if the primary PFS endpoint is statistically significant. The study is powered at ~70% for the OS secondary endpoint assuming HR 0.75.',
      ],
    },
    {
      heading: 'Questions for the Agency',
      level: 1,
      paragraphs: [
        'Velantis Therapeutics seeks the Agency\'s feedback on the following questions:',
      ],
      lists: {
        items: [
          'Does the Agency agree that PFS per BICR is an acceptable primary endpoint for regular approval in this setting?',
          'Does the Agency agree with the proposed sample size, randomization ratio, and stratification factors?',
          `Does the Agency concur with the ${DRUG.recommendedDose} dose selection based on the presented Phase 2 E-R data?`,
          'Does the Agency agree with the proposed hierarchical testing procedure for PFS (primary) and OS (key secondary)?',
          `Does the Agency have recommendations regarding the companion diagnostic strategy using the ${CDX.name}?`,
          'Does the Agency agree with the proposed hepatotoxicity management algorithm and REMS assessment?',
        ],
        ordered: true,
      } as any,
    },
  ],
};
registerDocument('phase05-eop2-pre-phase3-meeting', eop2Meeting);

// 9. phase05-risk-management-plan (Tier 2)
const riskManagement: DocumentContent = {
  documentTitle: `Risk Management Plan — ${DRUG.fullName}`,
  documentNumber: 'RPT-P2-009',
  version: '1.0',
  date: '2025-08-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Safety Specification',
      level: 1,
      paragraphs: [
        `This Risk Management Plan (RMP) describes the safety profile of ${DRUG.fullName} based on data from ${STUDIES.phase1.patients + STUDIES.phase2.patients} patients exposed across Studies ${STUDIES.phase1.id} through ${STUDIES.phase2.id}. The safety specification summarizes identified risks, potential risks, and missing information that form the basis for pharmacovigilance planning.`,
      ],
    },
    {
      heading: 'Identified Risks',
      level: 1,
      paragraphs: [
        'The following risks have been identified based on the cumulative clinical experience with VLX-4070:',
      ],
      tables: [
        {
          title: 'Table 1: Identified Risks',
          headers: ['Risk', 'Incidence (All Grades)', 'Incidence (Grade >=3)', 'Characterization'],
          rows: [
            ['Hepatotoxicity (ALT/AST elevation)', `ALT ${SAFETY.commonAEs[3].allGrade} / AST ${SAFETY.commonAEs[4].allGrade}`, `ALT ${SAFETY.commonAEs[3].grade3Plus} / AST ${SAFETY.commonAEs[4].grade3Plus}`, 'Reversible with dose modification; median onset 6.2 weeks; no Hy\'s Law cases'],
            ['QTc prolongation', SAFETY.commonAEs[8].allGrade, SAFETY.commonAEs[8].grade3Plus, 'Concentration-dependent; mean QTcF change 6.8ms at 400mg Cmax; ECG monitoring recommended'],
            ['Gastrointestinal toxicity (diarrhea, nausea, vomiting)', `${SAFETY.commonAEs[0].allGrade} / ${SAFETY.commonAEs[1].allGrade} / ${SAFETY.commonAEs[6].allGrade}`, `${SAFETY.commonAEs[0].grade3Plus} / ${SAFETY.commonAEs[1].grade3Plus} / ${SAFETY.commonAEs[6].grade3Plus}`, 'Generally mild-moderate; manageable with supportive care'],
          ],
        },
      ],
    },
    {
      heading: 'Potential Risks and Missing Information',
      level: 1,
      paragraphs: [
        'Based on nonclinical findings, mechanism of action, and class effects, the following potential risks have been identified:',
      ],
      tables: [
        {
          title: 'Table 2: Potential Risks and Missing Information',
          headers: ['Category', 'Item', 'Basis', 'Planned Action'],
          rows: [
            ['Potential Risk', 'Embryo-fetal toxicity', 'Nonclinical reproductive toxicity findings (teratogenicity in rabbits at >=100mg/kg)', 'Pregnancy testing required; contraception mandate in protocol'],
            ['Potential Risk', 'Interstitial lung disease (ILD)', 'Class effect observed with other KRAS G12C inhibitors (sotorasib 0.4%, adagrasib 1.0%)', 'Enhanced monitoring; ILD reporting algorithm in protocols'],
            ['Missing Information', 'Long-term safety (>12 months)', 'Limited exposure duration in current database', `OLE study (${STUDIES.ole.id}) ongoing; long-term follow-up planned`],
            ['Missing Information', 'Safety in severe hepatic impairment', 'Patients with severe hepatic impairment excluded from clinical studies', 'Dedicated hepatic impairment study under consideration'],
            ['Missing Information', 'Safety in patients with baseline QTc >470ms', 'Excluded from clinical studies', 'Cardiac monitoring data collection in Phase 3'],
          ],
        },
      ],
    },
    {
      heading: 'Pharmacovigilance Plan',
      level: 1,
      paragraphs: [
        'The pharmacovigilance plan includes both routine and additional pharmacovigilance activities. Routine activities include adverse event reporting from clinical trials, post-marketing surveillance (upon approval), periodic safety update reports (PSURs/PBRERs), and signal detection and evaluation.',
        `Additional pharmacovigilance activities include: (1) enhanced hepatic monitoring in all ongoing and planned clinical studies with mandatory LFT assessments per protocol; (2) a centralized ECG monitoring program for QTc assessment in LUMINOS-1 (${STUDIES.phase3.id}); (3) a pregnancy exposure registry (to be established within 6 months of approval); and (4) long-term safety data collection via the OLE study (${STUDIES.ole.id}).`,
      ],
    },
    {
      heading: 'Risk Minimization Measures',
      level: 1,
      paragraphs: [
        'Proposed risk minimization measures include prescribing information with a Warnings and Precautions section for hepatotoxicity (including monitoring schedule and dose modification tables), QTc prolongation (ECG monitoring recommendations), and embryo-fetal toxicity (contraception requirements).',
        'A Medication Guide is proposed to inform patients of the risks of liver injury and the need for regular blood tests. A REMS is not proposed at this time based on the manageable safety profile; however, this will be reassessed with the cumulative Phase 3 data and discussed with the FDA during the pre-NDA meeting.',
      ],
    },
  ],
};
registerDocument('phase05-risk-management-plan', riskManagement);

// 10. phase05-pediatric-study-plan (Tier 3)
const pediatricStudyPlan: DocumentContent = {
  documentTitle: `Pediatric Study Plan — ${DRUG.fullName}`,
  documentNumber: 'RPT-P2-010',
  version: '1.0',
  date: '2025-07-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Introduction and Regulatory Basis',
      level: 1,
      paragraphs: [
        `This Pediatric Study Plan (PSP) is submitted in accordance with Section 505B(e) of the Federal Food, Drug, and Cosmetic Act (as amended by FDARA) for ${DRUG.fullName}. The proposed adult indication is the treatment of KRAS G12C-mutant locally advanced or metastatic NSCLC in patients who have received at least one prior systemic therapy.`,
        `${DRUG.sponsor} respectfully requests a full waiver from the requirement to conduct pediatric studies for ${DRUG.code} in all pediatric age groups (birth through 17 years) based on the lack of the target condition in the pediatric population.`,
      ],
    },
    {
      heading: 'Justification for Pediatric Waiver',
      level: 1,
      paragraphs: [
        'KRAS G12C-mutant NSCLC is a disease of adults, with the overwhelming majority of cases occurring in patients with a significant smoking history. NSCLC is exceedingly rare in the pediatric population, and KRAS G12C mutations have not been reported in pediatric lung cancers in published literature or in large genomic databases (e.g., Foundation Medicine pediatric database, NCI Pediatric MATCH).',
        'According to SEER data, the annual incidence of lung and bronchus cancer in patients aged 0-19 years is approximately 0.1 per 1,000,000, compared to approximately 54.2 per 1,000,000 in adults. Of the rare pediatric cases, the vast majority are non-adenocarcinoma histologies (pleuropulmonary blastoma, carcinoid tumors), and KRAS G12C mutations are not a recognized oncogenic driver in pediatric thoracic malignancies.',
      ],
    },
    {
      heading: 'Proposed Waiver and Extrapolation Assessment',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} proposes a full waiver under 21 CFR 314.55(c)(2)(i) — the drug does not represent a meaningful therapeutic benefit over existing treatments for pediatric patients, and the disease or condition for which the drug is intended does not occur in the pediatric population. No pediatric formulation development, juvenile animal studies, or pediatric clinical trials are proposed. This PSP will be submitted to FDA\'s Office of Pediatric Therapeutics for review, and the waiver determination will be documented in the NDA submission (${REGULATORY.ndaNumber}).`,
      ],
    },
  ],
};
registerDocument('phase05-pediatric-study-plan', pediatricStudyPlan);

// 11. phase05-heor-evidence-generation-plan (Tier 3)
const heorPlan: DocumentContent = {
  documentTitle: `Health Economics and Outcomes Research (HEOR) Evidence Generation Plan — ${DRUG.fullName}`,
  documentNumber: 'RPT-P2-011',
  version: '1.0',
  date: '2025-08-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Value Dossier Strategy',
      level: 1,
      paragraphs: [
        `This HEOR Evidence Generation Plan outlines the strategy for developing the value evidence package to support payer reimbursement and health technology assessment (HTA) submissions for ${DRUG.fullName} in KRAS G12C-mutant NSCLC. The plan addresses evidence needs from US payers (commercial and Medicare), EU HTA bodies (NICE, G-BA, HAS), and Canadian payer organizations (CADTH, INESSS).`,
        `The unmet need in second-line KRAS G12C-mutant NSCLC is well-documented: median OS with docetaxel is approximately 10 months, and approved KRAS G12C inhibitors (sotorasib, adagrasib) lack Phase 3 evidence of overall survival benefit. The LUMINOS-1 Phase 3 trial (${STUDIES.phase3.id}) is designed to demonstrate both PFS and OS benefit versus docetaxel, providing a strong evidence base for value demonstration.`,
      ],
    },
    {
      heading: 'Patient-Reported Outcomes Strategy',
      level: 1,
      paragraphs: [
        'Patient-reported outcomes (PROs) are collected in LUMINOS-1 using the EORTC QLQ-C30 (Quality of Life Questionnaire — Core 30) and the lung cancer-specific module QLQ-LC13. The EQ-5D-5L is included for utility estimation in health economic models. Assessments are collected at baseline, Day 1 of each cycle, and at the end-of-treatment visit.',
        'The PRO analysis plan includes: (1) time to deterioration (TTD) in Global Health Status/QoL (>=10-point decrease); (2) between-arm comparison of mean change from baseline in GHS/QoL at key timepoints; (3) responder analysis (>=10-point improvement in symptom scales); and (4) EQ-5D-5L utility values for cost-effectiveness modeling.',
      ],
    },
    {
      heading: 'Cost-Effectiveness Modeling Framework',
      level: 1,
      paragraphs: [
        'A three-state partitioned survival model (progression-free, progressed disease, death) will serve as the base-case framework for cost-effectiveness analysis. The model will use patient-level data from LUMINOS-1 for the VLX-4070 arm and the docetaxel comparator arm.',
        'Key model inputs will include: direct drug costs (VLX-4070 and comparators), administration costs, monitoring costs (LFTs, ECGs), adverse event management costs, subsequent therapy costs, and terminal care costs. Sensitivity analyses will be conducted for all key parameters, and probabilistic sensitivity analysis (PSA) will generate cost-effectiveness acceptability curves at standard willingness-to-pay thresholds ($100,000-$200,000/QALY for US; GBP 30,000/QALY for NICE).',
      ],
    },
    {
      heading: 'Payer Evidence Needs and HTA Submission Timeline',
      level: 1,
      paragraphs: [
        'Engagement with US payers (advisory boards planned Q4 2025) and EU HTA bodies (pre-submission meetings planned Q1 2026) will inform evidence package refinement. The AMCP dossier and NICE evidence submission are targeted for preparation beginning Q3 2026, aligned with anticipated regulatory approval timelines.',
      ],
    },
  ],
};
registerDocument('phase05-heor-evidence-generation-plan', heorPlan);

// 12. phase05-special-protocol-assessment (Tier 2)
const specialProtocolAssessment: DocumentContent = {
  documentTitle: `Special Protocol Assessment (SPA) — Study ${STUDIES.phase3.id} (LUMINOS-1)`,
  documentNumber: 'RPT-P2-012',
  version: '1.0',
  date: '2025-09-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'SPA Request Summary',
      level: 1,
      paragraphs: [
        `Velantis Therapeutics submitted a Special Protocol Assessment (SPA) request to the FDA Division of Oncology for the Phase 3 LUMINOS-1 study (${STUDIES.phase3.id}). The SPA process was initiated to obtain FDA agreement on the adequacy of the study design, clinical endpoints, and statistical analysis plan to support a future NDA for ${DRUG.fullName} in previously treated KRAS G12C-mutant NSCLC.`,
        `The SPA request was submitted on July 15, 2025, and official FDA agreement was received on September 1, 2025, following one round of written feedback.`,
      ],
    },
    {
      heading: 'Trial Design Agreed Upon',
      level: 1,
      paragraphs: [
        `LUMINOS-1 is a Phase 3, randomized, open-label, active-controlled study comparing ${DRUG.code} ${DRUG.recommendedDose} to docetaxel 75 mg/m2 Q3W in patients with previously treated KRAS G12C-mutant NSCLC. KRAS G12C mutation must be confirmed by the ${CDX.name} or an FDA-approved NGS panel.`,
      ],
      tables: [
        {
          title: 'Table 1: LUMINOS-1 Study Design Summary (SPA-Agreed)',
          headers: ['Parameter', 'Specification'],
          rows: [
            ['Study design', 'Randomized, open-label, active-controlled, multicenter'],
            ['Population', '2L+ KRAS G12C-mutant NSCLC (prior platinum and/or IO)'],
            ['Randomization', `1:1 (${DRUG.code} ${DRUG.recommendedDose} vs. docetaxel 75 mg/m2 Q3W)`],
            ['Stratification factors', 'Prior IO therapy (Y/N), ECOG PS (0 vs. 1), CNS metastases (Y/N)'],
            ['Sample size', `${STUDIES.phase3.patients} patients`],
            ['Primary endpoint', 'PFS per BICR (RECIST v1.1)'],
            ['Key secondary endpoint', 'Overall Survival (OS)'],
            ['Other secondary endpoints', 'ORR, DOR, PRO (EORTC QLQ-C30)'],
          ],
        },
      ],
    },
    {
      heading: 'Statistical Plan (SPA-Agreed)',
      level: 1,
      paragraphs: [
        `The sample size of ${STUDIES.phase3.patients} patients provides 90% power to detect a PFS hazard ratio of 0.65 (corresponding to an improvement from median PFS 4.0 months [docetaxel] to 6.2 months [${DRUG.code}]) at a one-sided alpha of 0.025 using a log-rank test. Approximately 372 PFS events are required for the final analysis.`,
        `One interim analysis for PFS superiority is planned at approximately 60% of required events (223 events) using an O'Brien-Fleming alpha spending function (Lan-DeMets approach). The interim futility boundary will be evaluated using conditional power with a threshold of 20%.`,
      ],
      tables: [
        {
          title: 'Table 2: Statistical Hypotheses and Alpha Allocation',
          headers: ['Endpoint', 'Hypothesis', 'Alpha (One-Sided)', 'Testing Procedure'],
          rows: [
            ['PFS (primary)', 'HR <=0.65 (VLX-4070 vs. docetaxel)', '0.025', 'Log-rank test, stratified; tested first'],
            ['OS (key secondary)', 'HR <=0.75 (VLX-4070 vs. docetaxel)', 'Conditional on PFS significance', 'Hierarchical gatekeeping; tested at 0.025 only if PFS significant'],
            ['ORR (secondary)', 'ORR difference >0', 'Descriptive (no formal testing)', 'CMH test, stratified; reported as point estimate and 95% CI'],
          ],
        },
      ],
    },
    {
      heading: 'FDA Agreement Summary',
      level: 1,
      paragraphs: [
        'The FDA agreed with the following elements of the LUMINOS-1 study design: (1) PFS per BICR as the primary endpoint for regular approval; (2) the sample size of 560 and 1:1 randomization; (3) the proposed stratification factors; (4) the hierarchical testing procedure for PFS and OS; (5) the interim analysis plan with O\'Brien-Fleming boundaries; and (6) the open-label design with BICR for PFS assessment.',
        'The FDA requested the following modifications, which were incorporated: (1) addition of a sensitivity analysis using investigator-assessed PFS; (2) inclusion of a pre-specified subgroup analysis for patients with and without prior IO therapy; and (3) central confirmation of KRAS G12C status using the companion diagnostic assay for the per-protocol population.',
      ],
    },
    {
      heading: 'SPA Agreement Documentation',
      level: 1,
      paragraphs: [
        `The SPA agreement letter (dated September 1, 2025) has been filed in the regulatory archive for IND ${REGULATORY.indNumber}. Per FDA guidance, the SPA agreement may be rescinded by the FDA if a substantial scientific issue essential to determining safety or efficacy is identified after testing has begun. ${DRUG.sponsor} will ensure that any protocol amendments are discussed with the Division to confirm continued SPA validity.`,
      ],
    },
  ],
};
registerDocument('phase05-special-protocol-assessment', specialProtocolAssessment);
