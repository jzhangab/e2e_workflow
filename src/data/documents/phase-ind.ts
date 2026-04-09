import { registerDocument } from './index';
import { DRUG, STUDIES, REGULATORY } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// ---------------------------------------------------------------------------
// Phase 03 — IND / CTA Submission  (12 cards)
// ---------------------------------------------------------------------------

// ============================================================
// 1. phase03-ind-application  (TIER 1)
// ============================================================
const indApplication: DocumentContent = {
  documentTitle: `Investigational New Drug Application — ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-001',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Cover Letter to the Food and Drug Administration',
      level: 1,
      paragraphs: [
        `Dear Director, Division of Oncology Products 1,`,
        `${DRUG.sponsor} hereby submits this Investigational New Drug (IND) application for ${DRUG.fullName}, a ${DRUG.mechanism.toLowerCase()}, for the investigation of ${DRUG.code} in patients with ${DRUG.indication}. This submission is made pursuant to 21 CFR 312 and contains all required information to support the initiation of clinical trials in the United States.`,
        `The proposed initial clinical study, Protocol ${STUDIES.phase1.id}, is a Phase 1, open-label, dose-escalation study designed to evaluate the safety, tolerability, pharmacokinetics, and preliminary antitumor activity of ${DRUG.code} in patients with advanced KRAS G12C-mutant solid tumors.`,
        `We respectfully request that the FDA review this IND application and, if acceptable, allow the study to proceed 30 days following receipt of this submission. We are available to address any questions or requests for additional information at your earliest convenience.`,
        `Sincerely,\nChief Medical Officer\n${DRUG.sponsor}\n${DRUG.sponsorAddress}`,
      ],
    },
    {
      heading: '2. Form FDA 1571 — Summary Information',
      level: 1,
      paragraphs: [
        `IND Number: ${REGULATORY.indNumber}`,
        `Drug Name: ${DRUG.fullName}`,
        `Sponsor: ${DRUG.sponsor}`,
        `Address: ${DRUG.sponsorAddress}`,
        `Route of Administration: ${DRUG.route}`,
        `Dosage Form: ${DRUG.formulation}`,
        `Indication: ${DRUG.indication}`,
        `Phase of Clinical Investigation: Phase 1`,
      ],
    },
    {
      heading: '3. Introductory Statement and General Investigational Plan',
      level: 1,
      paragraphs: [
        `${DRUG.code} (${DRUG.name}) is a novel, orally bioavailable, ${DRUG.mechanism.toLowerCase()}. ${DRUG.mechanismDetail}`,
        `The KRAS G12C mutation is present in approximately 13% of NSCLC adenocarcinomas, representing a significant unmet medical need. Current treatment options for patients whose tumors harbor this mutation remain limited, with median progression-free survival of approximately 4 months on standard second-line docetaxel.`,
        `The general investigational plan encompasses: (1) a first-in-human Phase 1 dose-escalation study (${STUDIES.phase1.id}) to establish the maximum tolerated dose (MTD) and recommended Phase 2 dose (RP2D); (2) a food-effect study (${STUDIES.phase1Food.id}) in healthy volunteers; (3) a Phase 2 registration-directed study; and (4) a confirmatory Phase 3 randomized trial.`,
        `The nonclinical program supporting this IND includes in vitro pharmacology, in vivo xenograft efficacy studies, single-dose and repeat-dose toxicology in rats and dogs (up to 28 days), genetic toxicology, safety pharmacology, and ADME characterization.`,
      ],
    },
    {
      heading: '4. Investigator Qualifications Summary',
      level: 1,
      paragraphs: [
        `The Principal Investigator for Protocol ${STUDIES.phase1.id} is a board-certified medical oncologist with over 15 years of experience in early-phase oncology clinical trials, including extensive experience with molecularly targeted agents in thoracic malignancies.`,
        `The investigator holds appointments at a National Cancer Institute-designated Comprehensive Cancer Center and has served as principal investigator on more than 30 Phase 1 oncology studies. Curriculum vitae and Form FDA 1572 are included in Section 6 of this IND.`,
      ],
    },
    {
      heading: '5. Chemistry, Manufacturing, and Controls Summary',
      level: 1,
      paragraphs: [
        `${DRUG.code} drug substance is manufactured via a convergent 6-step synthetic route from commercially available starting materials under cGMP conditions at a qualified contract manufacturing organization (CMO). The drug substance is a white to off-white crystalline powder with a molecular weight of 487.5 g/mol.`,
        `The drug product is formulated as an immediate-release ${DRUG.formulation.toLowerCase()} available in ${DRUG.doses.join(', ')} strengths. The formulation contains ${DRUG.code} drug substance, microcrystalline cellulose, croscarmellose sodium, magnesium stearate, and a film coating comprising polyvinyl alcohol, titanium dioxide, polyethylene glycol, and talc.`,
        `Stability studies conducted under ICH conditions (25\u00b0C/60% RH and 40\u00b0C/75% RH) demonstrate acceptable stability through 12 months with no significant degradation. A shelf life of 24 months is proposed for initial clinical supplies stored at controlled room temperature (15\u201330\u00b0C).`,
      ],
      tables: [
        {
          title: 'Table 5-1. Drug Product Strengths and Composition',
          headers: ['Component', 'Function', '50mg Tablet', '100mg Tablet', '200mg Tablet'],
          rows: [
            ['VLX-4070', 'Active ingredient', '50 mg', '100 mg', '200 mg'],
            ['Microcrystalline cellulose', 'Diluent', '120 mg', '150 mg', '200 mg'],
            ['Croscarmellose sodium', 'Disintegrant', '8 mg', '12 mg', '18 mg'],
            ['Magnesium stearate', 'Lubricant', '2 mg', '3 mg', '4 mg'],
            ['Film coat', 'Coating', '6 mg', '8 mg', '12 mg'],
            ['Total tablet weight', '—', '186 mg', '273 mg', '434 mg'],
          ],
        },
      ],
    },
    {
      heading: '6. Pharmacology and Toxicology Summary',
      level: 1,
      paragraphs: [
        `In vitro, ${DRUG.code} demonstrated potent and selective inhibition of KRAS G12C with an IC50 of 3.2 nM in a biochemical GTPase assay. The compound showed >1,000-fold selectivity over wild-type KRAS and other KRAS mutant variants (G12D, G12V, G13D). In KRAS G12C-dependent cell lines (NCI-H358, MIA PaCa-2), ${DRUG.code} inhibited cell proliferation with IC50 values of 8\u201335 nM and induced apoptosis at concentrations \u226550 nM.`,
        `In vivo efficacy was demonstrated in NCI-H358 and MIA PaCa-2 xenograft models, where ${DRUG.code} produced dose-dependent tumor growth inhibition (TGI). At 30 mg/kg QD in the NCI-H358 model, tumor regression was observed in 8/10 animals with a mean TGI of 94%.`,
        `In 28-day repeat-dose toxicology studies, the no-observed-adverse-effect level (NOAEL) was 50 mg/kg/day in rats and 30 mg/kg/day in dogs. The primary target organ toxicities included hepatocellular hypertrophy (rats and dogs) and gastrointestinal effects (dogs). All findings were reversible following a 4-week recovery period.`,
      ],
      tables: [
        {
          title: 'Table 6-1. Key Nonclinical Toxicology Findings',
          headers: ['Study', 'Species', 'Duration', 'NOAEL', 'Key Findings'],
          rows: [
            ['Single-dose toxicity', 'Rat', 'Single dose', '500 mg/kg', 'No mortality; transient ALT elevation at \u2265200 mg/kg'],
            ['Single-dose toxicity', 'Dog', 'Single dose', '300 mg/kg', 'Emesis at \u2265100 mg/kg; no mortality'],
            ['Repeat-dose toxicity', 'Rat', '28 days + 28d recovery', '50 mg/kg/day', 'Hepatocellular hypertrophy at \u226575 mg/kg/day; reversible'],
            ['Repeat-dose toxicity', 'Dog', '28 days + 28d recovery', '30 mg/kg/day', 'GI effects (emesis, soft stool) at \u226545 mg/kg/day; hepatocellular hypertrophy at \u2265 60 mg/kg/day'],
            ['Genetic toxicology (Ames)', 'S. typhimurium', 'In vitro', 'N/A', 'Negative'],
            ['Genetic toxicology (MN)', 'Rat', 'In vivo', 'N/A', 'Negative up to 500 mg/kg'],
            ['Safety pharmacology (hERG)', 'HEK293', 'In vitro', 'IC50 >30 \u00b5M', 'No significant inhibition at 30 \u00b5M (>1,000\u00d7 clinical Cmax)'],
            ['Safety pharmacology (CNS)', 'Rat', 'Irwin test', '200 mg/kg', 'No neurobehavioral effects'],
          ],
          footnotes: ['NOAEL = No Observed Adverse Effect Level; MN = Micronucleus; CNS = Central Nervous System'],
        },
      ],
    },
    {
      heading: '7. Clinical Protocol Synopsis',
      level: 1,
      paragraphs: [
        `Protocol ${STUDIES.phase1.id}: ${STUDIES.phase1.title}`,
        `This is a Phase 1, open-label, multicenter study designed to evaluate the safety, tolerability, pharmacokinetics, pharmacodynamics, and preliminary antitumor activity of ${DRUG.code} administered orally in patients with advanced KRAS G12C-mutant solid tumors.`,
      ],
      tables: [
        {
          title: 'Table 7-1. Protocol Synopsis',
          headers: ['Parameter', 'Description'],
          rows: [
            ['Study Number', STUDIES.phase1.id],
            ['Study Design', 'Open-label, multicenter, 3+3 dose escalation with expansion cohorts'],
            ['Study Population', 'Adults (\u226518 years) with advanced/metastatic KRAS G12C-mutant solid tumors who have progressed on \u22651 prior systemic therapy'],
            ['Planned Enrollment', `${STUDIES.phase1.patients} patients (approximately 30 in escalation, 38 in expansion)`],
            ['Dose Levels', DRUG.doses.join(', ') + ' QD, 28-day cycles'],
            ['Primary Endpoints', 'Safety, tolerability, DLT rate, MTD, RP2D'],
            ['Secondary Endpoints', 'PK parameters (Cmax, AUC, t1/2), preliminary antitumor activity (ORR, DCR per RECIST v1.1)'],
            ['Exploratory Endpoints', 'Pharmacodynamic biomarkers (pERK, DUSP6 mRNA), ctDNA dynamics'],
            ['Study Duration', `Estimated ${STUDIES.phase1.startDate} to ${STUDIES.phase1.endDate}`],
          ],
        },
      ],
    },
    {
      heading: '8. IND Content Index and Study Program Overview',
      level: 1,
      paragraphs: [
        `The following table provides the complete content index of this IND application per 21 CFR 312.23 requirements.`,
      ],
      tables: [
        {
          title: 'Table 8-1. IND Content Index',
          headers: ['Section', 'CTD Module', 'Document', 'Status'],
          rows: [
            ['1', '1.0', 'Cover letter (Form FDA 1571)', 'Included'],
            ['2', '1.2', 'Table of contents', 'Included'],
            ['3', '1.3', 'Introductory statement and investigational plan', 'Included'],
            ['4', '1.4', 'Investigators brochure', 'Included'],
            ['5', '1.5', 'Clinical protocol (VLX-4070-001)', 'Included'],
            ['6', '1.6', 'Investigator information (CV, Form 1572)', 'Included'],
            ['7', '2.3', 'Quality Overall Summary', 'Included'],
            ['8', '2.4', 'Nonclinical Overview', 'Included'],
            ['9', '3.2.S', 'Drug substance information', 'Included'],
            ['10', '3.2.P', 'Drug product information', 'Included'],
            ['11', '4.2', 'Nonclinical study reports', 'Included'],
            ['12', '—', 'Environmental assessment (categorical exclusion)', 'Included'],
          ],
        },
        {
          title: 'Table 8-2. Study Program Overview',
          headers: ['Study', 'Phase', 'Population', 'N', 'Status'],
          rows: [
            [STUDIES.phase1.id, 'Phase 1', 'Advanced KRAS G12C-mutant solid tumors', String(STUDIES.phase1.patients), 'Planned'],
            [STUDIES.phase1Food.id, 'Phase 1', 'Healthy volunteers', String(STUDIES.phase1Food.patients), 'Planned'],
            [STUDIES.phase2.id, 'Phase 2', 'KRAS G12C-mutant NSCLC', String(STUDIES.phase2.patients), 'Planned'],
            [STUDIES.phase3.id, 'Phase 3', 'KRAS G12C-mutant NSCLC', String(STUDIES.phase3.patients), 'Planned'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase03-ind-application', indApplication);

// ============================================================
// 2. phase03-investigators-brochure  (TIER 1)
// ============================================================
const investigatorsBrochure: DocumentContent = {
  documentTitle: `Investigator\u2019s Brochure \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-002',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Physical and Chemical Properties',
      level: 1,
      paragraphs: [
        `${DRUG.code} (${DRUG.name}) is a synthetic small-molecule inhibitor with the following physicochemical characteristics:`,
      ],
      tables: [
        {
          title: 'Table 1-1. Physicochemical Properties of VLX-4070',
          headers: ['Property', 'Value'],
          rows: [
            ['Chemical name', '(S)-N-(4-(2-(1-cyanocyclopropyl)-7-(trifluoromethyl)-1H-benzo[d]imidazol-5-yl)pyridin-2-yl)-2-methylpiperazine-1-carboxamide'],
            ['Molecular formula', 'C24H23F3N6O'],
            ['Molecular weight', '487.5 g/mol'],
            ['Physical appearance', 'White to off-white crystalline powder'],
            ['Solubility (pH 1.2)', '>10 mg/mL'],
            ['Solubility (pH 6.8)', '0.15 mg/mL'],
            ['pKa', '4.8 (pyridine nitrogen)'],
            ['LogP', '2.7'],
            ['Polymorphic form', 'Form I (thermodynamically stable)'],
            ['Melting point', '218\u2013221\u00b0C'],
          ],
        },
      ],
    },
    {
      heading: '2. Nonclinical Pharmacology',
      level: 1,
      paragraphs: [
        `${DRUG.code} is a ${DRUG.mechanism.toLowerCase()}. ${DRUG.mechanismDetail}`,
        `In biochemical assays, ${DRUG.code} inhibited KRAS G12C GTPase activity with an IC50 of 3.2 nM. Selectivity profiling across a panel of 60 kinases at 10 \u00b5M demonstrated no significant off-target inhibition (>90% activity retained for all kinases tested). In cellular assays using KRAS G12C-dependent cancer cell lines, ${DRUG.code} inhibited pERK (IC50 = 12 nM), pAKT (IC50 = 45 nM), and cell proliferation (IC50 = 8\u201335 nM depending on cell line).`,
        `In the NCI-H358 NSCLC xenograft model, ${DRUG.code} at 10, 30, and 100 mg/kg QD produced dose-dependent tumor growth inhibition of 52%, 94%, and 99%, respectively, over 28 days. Complete tumor regression was observed in 6/10 animals at 100 mg/kg. In the MIA PaCa-2 pancreatic cancer model, similar dose-dependent activity was observed with TGI of 78% at 30 mg/kg QD.`,
      ],
    },
    {
      heading: '3. Nonclinical Pharmacokinetics',
      level: 1,
      paragraphs: [
        `Following oral administration in rats, ${DRUG.code} was rapidly absorbed (Tmax = 1\u20132 hours) with an oral bioavailability of 62%. The volume of distribution (Vd/F) was 3.8 L/kg, indicating moderate tissue distribution. Plasma protein binding was 94% in rats and 92% in dogs. The compound was primarily metabolized by CYP3A4 (65%) and CYP2C8 (20%) in human liver microsomes.`,
        `In dogs, oral bioavailability was 78% with a half-life of 5.2 hours. The plasma clearance was 8.5 mL/min/kg. No sex-related differences in exposure were observed in either species.`,
      ],
      tables: [
        {
          title: 'Table 3-1. Comparative Pharmacokinetic Parameters',
          headers: ['Parameter', 'Rat (30 mg/kg)', 'Dog (10 mg/kg)', 'Predicted Human (400 mg)'],
          rows: [
            ['Cmax (ng/mL)', '2,450', '1,820', '3,200\u20134,100'],
            ['Tmax (h)', '1.5', '2.0', '2\u20133'],
            ['AUC0-24h (ng\u00b7h/mL)', '18,400', '14,200', '28,000\u201336,000'],
            ['t1/2 (h)', '3.8', '5.2', '8\u201312'],
            ['Oral bioavailability (%)', '62', '78', '65\u201380 (predicted)'],
            ['Plasma protein binding (%)', '94', '92', '93 (in vitro)'],
          ],
        },
      ],
    },
    {
      heading: '4. Nonclinical Toxicology',
      level: 1,
      paragraphs: [
        `A comprehensive nonclinical toxicology program was conducted to support the Phase 1 IND filing. In 28-day repeat-dose studies, the primary target organs were the liver (hepatocellular hypertrophy) in both rats and dogs, and the gastrointestinal tract (emesis, soft stool) in dogs. All findings were reversible following a 4-week recovery period.`,
        `The NOAEL of 50 mg/kg/day in rats corresponds to an AUC0-24h of approximately 32,000 ng\u00b7h/mL, providing a safety margin of approximately 1.0\u00d7 relative to the predicted human AUC at the maximum proposed starting dose of 50 mg. The NOAEL of 30 mg/kg/day in dogs corresponds to an AUC0-24h of approximately 45,000 ng\u00b7h/mL, providing a safety margin of approximately 8\u00d7 relative to the predicted human AUC at 50 mg.`,
        `Genotoxicity studies (Ames assay, in vivo rat micronucleus) were negative. Safety pharmacology assessments showed no significant effects on cardiovascular (hERG IC50 >30 \u00b5M), respiratory, or central nervous system endpoints.`,
      ],
      tables: [
        {
          title: 'Table 4-1. Safety Margins at Proposed Starting Dose (50 mg)',
          headers: ['Species', 'NOAEL (mg/kg/day)', 'AUC at NOAEL (ng\u00b7h/mL)', 'Predicted Human AUC at 50 mg (ng\u00b7h/mL)', 'Safety Margin (AUC-based)'],
          rows: [
            ['Rat', '50', '32,000', '3,500\u20134,500', '7.1\u20139.1\u00d7'],
            ['Dog', '30', '45,000', '3,500\u20134,500', '10.0\u201312.9\u00d7'],
          ],
          footnotes: ['Safety margin calculated as AUC at NOAEL / predicted human AUC at starting dose'],
        },
      ],
    },
    {
      heading: '5. Clinical Experience',
      level: 1,
      paragraphs: [
        `There is no prior human exposure to ${DRUG.code}. This IND application supports the first-in-human clinical study of ${DRUG.code}.`,
        `No clinical pharmacology, efficacy, or safety data are available at the time of this IB submission. This section will be updated as clinical data become available from Protocol ${STUDIES.phase1.id} and subsequent studies.`,
      ],
    },
    {
      heading: '6. Summary of Data and Guidance for the Investigator',
      level: 1,
      paragraphs: [
        `${DRUG.code} is a potent and selective KRAS G12C inhibitor that has demonstrated robust antitumor activity in nonclinical models of KRAS G12C-mutant cancer. The nonclinical safety profile supports initiation of clinical testing with adequate safety margins at the proposed starting dose of 50 mg QD.`,
        `Key risks based on nonclinical findings include: (1) hepatotoxicity — hepatocellular hypertrophy was observed in both rats and dogs, necessitating regular hepatic function monitoring (LFTs at baseline, weekly for the first 2 cycles, then every 2 weeks); (2) gastrointestinal effects — emesis and soft stool in dogs suggest potential GI toxicity in humans, and antiemetic prophylaxis should be available; (3) QTc prolongation — although hERG inhibition was minimal, periodic ECG monitoring is recommended given the therapeutic class.`,
        `Investigators should adhere to the dose-limiting toxicity (DLT) criteria, dose modification guidelines, and stopping rules outlined in Protocol ${STUDIES.phase1.id}. Any Grade \u22653 hepatotoxicity or QTc prolongation >500 ms should prompt immediate treatment discontinuation and consultation with the Sponsor\u2019s Medical Monitor.`,
      ],
    },
    {
      heading: '7. Reference Safety Information',
      level: 1,
      paragraphs: [
        `As no clinical data are available at the time of IND filing, the reference safety information is derived entirely from nonclinical studies. The following adverse events are considered expected based on the nonclinical toxicology profile and the known pharmacology of KRAS G12C inhibition:`,
      ],
      lists: [
        {
          items: [
            'Hepatotoxicity (ALT/AST elevation, hepatocellular hypertrophy)',
            'Gastrointestinal toxicity (nausea, vomiting, diarrhea)',
            'Fatigue/asthenia',
            'Rash/dermatologic reactions (class effect of KRAS pathway inhibitors)',
            'Peripheral edema',
            'QTc prolongation (theoretical risk based on class)',
          ],
        },
      ],
      tables: [
        {
          title: 'Table 7-1. Reference Safety Information — Expected Adverse Events',
          headers: ['System Organ Class', 'Adverse Event', 'Expected Severity', 'Source'],
          rows: [
            ['Hepatobiliary', 'ALT/AST elevation', 'Grade 1\u20133', '28-day rat/dog toxicology'],
            ['Gastrointestinal', 'Nausea/vomiting', 'Grade 1\u20132', '28-day dog toxicology'],
            ['Gastrointestinal', 'Diarrhea', 'Grade 1\u20132', '28-day dog toxicology'],
            ['General', 'Fatigue', 'Grade 1\u20132', 'KRAS inhibitor class effect'],
            ['Skin', 'Rash', 'Grade 1\u20132', 'KRAS pathway inhibitor class effect'],
            ['Cardiac', 'QTc prolongation', 'Grade 1\u20132', 'Theoretical (class)'],
          ],
        },
      ],
    },
    {
      heading: '8. Key Nonclinical Findings and Safety Margins',
      level: 1,
      paragraphs: [
        `This section consolidates the critical nonclinical observations informing the clinical development strategy for ${DRUG.code}. The safety margin calculations support the proposed starting dose of 50 mg QD with 3+3 dose escalation to a maximum of 600 mg QD.`,
      ],
      tables: [
        {
          title: 'Table 8-1. Consolidated Safety Margin Summary',
          headers: ['Endpoint', 'Species', 'Finding Level', 'Human Equivalent', 'Margin at 50 mg Start', 'Margin at 600 mg Max'],
          rows: [
            ['NOAEL (general tox)', 'Rat', '50 mg/kg/day', '486 mg HED', '~9\u00d7', '~0.8\u00d7'],
            ['NOAEL (general tox)', 'Dog', '30 mg/kg/day', '600 mg HED', '~12\u00d7', '~1.0\u00d7'],
            ['STD10 (severe tox dose)', 'Rat', '200 mg/kg/day', '1,944 mg HED', '~39\u00d7', '~3.2\u00d7'],
            ['hERG IC50', 'In vitro', '>30 \u00b5M', 'Cmax-based', '>1,000\u00d7', '>150\u00d7'],
            ['HNSTD (highest non-STD)', 'Dog', '100 mg/kg/day', '2,000 mg HED', '~40\u00d7', '~3.3\u00d7'],
          ],
          footnotes: ['HED = Human Equivalent Dose based on body surface area scaling; STD10 = severely toxic dose in 10% of animals; HNSTD = highest non-severely toxic dose'],
        },
      ],
    },
  ],
};
registerDocument('phase03-investigators-brochure', investigatorsBrochure);

// ============================================================
// 3. phase03-clinical-protocol-fih  (Tier 2)
// ============================================================
const clinicalProtocolFih: DocumentContent = {
  documentTitle: `Clinical Protocol Synopsis — ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-IND-003',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Protocol Synopsis',
      level: 1,
      paragraphs: [
        `Protocol Number: ${STUDIES.phase1.id}`,
        `Title: ${STUDIES.phase1.title}`,
        `Phase: 1`,
        `Sponsor: ${DRUG.sponsor}`,
        `Planned Study Period: ${STUDIES.phase1.startDate} to ${STUDIES.phase1.endDate}`,
        `Planned Enrollment: ${STUDIES.phase1.patients} patients`,
      ],
    },
    {
      heading: '2. Study Design',
      level: 1,
      paragraphs: [
        `This is a Phase 1, open-label, multicenter dose-escalation and dose-expansion study of ${DRUG.code} in patients with advanced KRAS G12C-mutant solid tumors. The study consists of two parts:`,
        `Part A (Dose Escalation): A standard 3+3 design will be employed to determine the MTD and RP2D. Approximately 30 patients will be enrolled across 5 dose cohorts. Sentinel dosing will be implemented at each dose level (first patient observed for 7 days before enrolling additional patients).`,
        `Part B (Dose Expansion): Once the RP2D is determined, approximately 38 additional patients with KRAS G12C-mutant NSCLC will be enrolled to further characterize safety and preliminary antitumor activity.`,
      ],
      tables: [
        {
          title: 'Table 2-1. Dose Escalation Schema',
          headers: ['Cohort', 'Dose Level', 'Schedule', 'Planned N', 'Min. Observation Before Escalation'],
          rows: [
            ['1', '50 mg QD', '28-day cycles', '3\u20136', '28 days (DLT window)'],
            ['2', '100 mg QD', '28-day cycles', '3\u20136', '28 days'],
            ['3', '200 mg QD', '28-day cycles', '3\u20136', '28 days'],
            ['4', '400 mg QD', '28-day cycles', '3\u20136', '28 days'],
            ['5', '600 mg QD', '28-day cycles', '3\u20136', '28 days'],
          ],
          footnotes: ['QD = once daily; DLT = dose-limiting toxicity; dose escalation follows standard 3+3 rules'],
        },
      ],
    },
    {
      heading: '3. Dose-Limiting Toxicity Criteria and Stopping Rules',
      level: 1,
      paragraphs: [
        `The DLT evaluation window is Cycle 1 (28 days). DLTs are defined as any of the following events considered at least possibly related to ${DRUG.code}:`,
        `Stopping Rules: Enrollment will be paused if: (a) \u22652/6 patients experience DLTs at any dose level; (b) a treatment-related death occurs; (c) the DSMB recommends suspension. The Sponsor\u2019s Safety Review Committee will convene within 72 hours of any stopping rule trigger.`,
      ],
      lists: [
        {
          items: [
            'Grade \u22654 neutropenia lasting >7 days',
            'Grade \u22654 thrombocytopenia or Grade 3 thrombocytopenia with clinically significant bleeding',
            'Grade \u22653 febrile neutropenia',
            'Grade \u22653 non-hematologic toxicity (excluding alopecia, Grade 3 nausea/vomiting/diarrhea responsive to supportive care within 72 hours)',
            'ALT or AST >5\u00d7 ULN lasting >7 days or ALT/AST >3\u00d7 ULN with concurrent total bilirubin >2\u00d7 ULN (Hy\u2019s Law)',
            'QTcF >500 ms or increase from baseline >60 ms confirmed on repeat ECG',
            'Any treatment-related toxicity resulting in inability to receive \u226575% of planned dose in Cycle 1',
          ],
        },
      ],
    },
    {
      heading: '4. PK/PD Sampling Schedule',
      level: 1,
      paragraphs: [
        `Intensive PK sampling will be performed on Cycle 1 Day 1 and Cycle 1 Day 15 (steady state). Trough samples will be collected predose on Days 8, 15, and 22 of Cycle 1, and Day 1 of subsequent cycles. Pharmacodynamic biomarkers (pERK inhibition in PBMCs, circulating DUSP6 mRNA) will be assessed at matched timepoints.`,
      ],
      tables: [
        {
          title: 'Table 4-1. Pharmacokinetic Sampling Timepoints',
          headers: ['Day', 'Timepoints (hours post-dose)', 'Sample Type'],
          rows: [
            ['C1D1', 'Predose, 0.5, 1, 2, 3, 4, 6, 8, 12, 24', 'Plasma PK + PD'],
            ['C1D8', 'Predose (trough)', 'Plasma PK'],
            ['C1D15', 'Predose, 0.5, 1, 2, 3, 4, 6, 8, 12, 24', 'Plasma PK + PD'],
            ['C1D22', 'Predose (trough)', 'Plasma PK'],
            ['C2D1 onwards', 'Predose (trough)', 'Plasma PK'],
          ],
          footnotes: ['C = Cycle; D = Day; PD = pharmacodynamic biomarkers collected at bolded timepoints'],
        },
      ],
    },
    {
      heading: '5. Inclusion and Exclusion Criteria',
      level: 1,
      tables: [
        {
          title: 'Table 5-1. Key Eligibility Criteria',
          headers: ['Criterion', 'Requirement'],
          rows: [
            ['Age', '\u226518 years'],
            ['ECOG Performance Status', '0 or 1'],
            ['KRAS G12C mutation', 'Confirmed by local or central laboratory (NGS or PCR-based assay)'],
            ['Prior therapy (Part A)', '\u22651 prior systemic therapy for advanced/metastatic disease; no limit on number of prior lines'],
            ['Prior therapy (Part B)', '\u22651 prior platinum-based chemotherapy and \u22651 prior anti-PD-(L)1 therapy for NSCLC'],
            ['Measurable disease', 'Per RECIST v1.1'],
            ['Adequate organ function', 'ANC \u22651.5\u00d710\u2079/L, Platelets \u226575\u00d710\u2079/L, Hb \u22659 g/dL, Creatinine \u22641.5\u00d7 ULN, Total bilirubin \u22641.5\u00d7 ULN, AST/ALT \u22642.5\u00d7 ULN'],
            ['Prior KRAS G12C inhibitor', 'Excluded'],
            ['Active brain metastases', 'Excluded (treated and stable for \u22654 weeks permitted)'],
            ['Strong CYP3A4 inhibitors/inducers', 'Excluded (washout \u22655 half-lives required)'],
            ['QTcF interval', '<470 ms at screening'],
          ],
        },
      ],
    },
    {
      heading: '6. Study Assessments Schedule',
      level: 1,
      tables: [
        {
          title: 'Table 6-1. Schedule of Assessments (Cycle 1)',
          headers: ['Assessment', 'Screening', 'C1D1', 'C1D8', 'C1D15', 'C1D22', 'C2D1'],
          rows: [
            ['Informed consent', 'X', '', '', '', '', ''],
            ['Medical history', 'X', '', '', '', '', ''],
            ['Physical exam', 'X', 'X', '', 'X', '', 'X'],
            ['Vital signs', 'X', 'X', 'X', 'X', 'X', 'X'],
            ['12-lead ECG', 'X', 'X', 'X', 'X', '', 'X'],
            ['Hematology', 'X', 'X', 'X', 'X', 'X', 'X'],
            ['Chemistry (LFTs)', 'X', 'X', 'X', 'X', 'X', 'X'],
            ['PK sampling', '', 'X', 'X', 'X', 'X', 'X'],
            ['Tumor assessment (CT)', 'X', '', '', '', '', 'X'],
            ['AE assessment', '', 'X', 'X', 'X', 'X', 'X'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase03-clinical-protocol-fih', clinicalProtocolFih);

// ============================================================
// 4. phase03-informed-consent-form  (Tier 3)
// ============================================================
const informedConsentForm: DocumentContent = {
  documentTitle: `Informed Consent Form \u2014 Protocol ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-IND-004',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Introduction and Purpose',
      level: 1,
      paragraphs: [
        `You are being invited to take part in a research study. Before you decide whether to participate, it is important for you to understand why the research is being done and what it will involve. Please take time to read the following information carefully and discuss it with your doctor, family, and friends.`,
        `The purpose of this study (Protocol ${STUDIES.phase1.id}) is to evaluate the safety, tolerability, and pharmacokinetics of an investigational drug called ${DRUG.fullName} in patients with advanced cancers that have a specific genetic change called KRAS G12C. ${DRUG.code} is a ${DRUG.mechanism.toLowerCase()} and has not been previously studied in humans. This is a "first-in-human" study.`,
        `Approximately ${STUDIES.phase1.patients} patients at multiple study centers will take part in this study. The study is sponsored by ${DRUG.sponsor}.`,
      ],
    },
    {
      heading: '2. Risks and Benefits',
      level: 1,
      paragraphs: [
        `Based on studies in laboratory animals, ${DRUG.code} may cause the following side effects: liver enzyme elevations (increased ALT and AST), gastrointestinal symptoms (nausea, vomiting, diarrhea), fatigue, skin rash, and changes in heart rhythm (QTc prolongation). Some of these effects may be serious.`,
        `There may be risks that are not yet known. Because this drug has not been given to humans before, unexpected side effects may occur. Your study doctor will monitor you closely for any side effects throughout the study.`,
        `There is no guarantee that you will benefit directly from participating in this study. However, the information learned from this study may help future patients with similar cancers. If ${DRUG.code} is effective against your cancer, you may experience tumor shrinkage or stabilization of your disease.`,
      ],
    },
    {
      heading: '3. Procedures and Visits',
      level: 1,
      paragraphs: [
        `If you agree to participate, you will take ${DRUG.code} tablets by mouth once daily in 28-day cycles. You will continue treatment as long as your doctor believes it is benefiting you and you are not experiencing unacceptable side effects.`,
        `You will need to visit the study clinic on the following schedule: weekly during the first cycle (28 days), every 2 weeks during the second cycle, and every 4 weeks thereafter. At each visit, you may have blood drawn, an electrocardiogram (ECG), a physical examination, and other tests. CT scans to measure your tumor will be performed approximately every 8 weeks.`,
        `On certain study days, you will have blood drawn multiple times over 24 hours to measure the levels of ${DRUG.code} in your blood (pharmacokinetic sampling). This will require you to stay at the study clinic for the full day.`,
      ],
    },
    {
      heading: '4. Compensation and Confidentiality',
      level: 1,
      paragraphs: [
        `You will not be paid for participating in this study. Reasonable travel expenses for study visits may be reimbursed as permitted by local regulations. The study drug and all study-related procedures will be provided at no cost to you.`,
        `Your medical records and any information collected about you during this study will be kept confidential to the extent permitted by law. Your identity will be protected by assigning a unique study identification number. Study results may be published in medical journals, but your identity will not be revealed.`,
        `The study sponsor, regulatory authorities (such as the FDA), and the Institutional Review Board (IRB) may review your medical records to verify the study data. By signing this consent form, you authorize access to your medical records for these purposes.`,
      ],
    },
  ],
};
registerDocument('phase03-informed-consent-form', informedConsentForm);

// ============================================================
// 5. phase03-clinical-trial-application-cta  (Tier 3)
// ============================================================
const ctaApplication: DocumentContent = {
  documentTitle: `Clinical Trial Application (CTA) Summary \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-005',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. EU Clinical Trial Application Overview',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} plans to submit Clinical Trial Applications under EU Regulation (EU) No 536/2014 via the Clinical Trial Information System (CTIS) for Protocol ${STUDIES.phase1.id}. The application will be submitted as a multinational application covering Germany (BfArM), France (ANSM), Spain (AEMPS), and Italy (AIFA) as concerned member states.`,
        `The CTA dossier will include: the EU application form, the clinical trial protocol, the Investigator\u2019s Brochure, the IMPD (Investigational Medicinal Product Dossier), proof of GMP compliance, proof of insurance, ethics committee documentation, and the informed consent form in each applicable language.`,
      ],
    },
    {
      heading: '2. Country-Specific Requirements',
      level: 1,
      paragraphs: [
        `United Kingdom (MHRA): A separate CTA will be submitted to the Medicines and Healthcare products Regulatory Agency (MHRA) under the UK Clinical Trials Regulation. The submission will follow the combined review process. Additional requirements include a Phase I accreditation letter for the UK site and local Research Ethics Committee (REC) approval.`,
        `Japan (PMDA): A Clinical Trial Notification (CTN) will be submitted to the Pharmaceuticals and Medical Devices Agency (PMDA). The CTN will be prepared in accordance with PMDA guidance and will include a Japanese-language protocol, Japanese-language Investigator\u2019s Brochure, and a bridging strategy document addressing potential ethnic sensitivity factors in PK/PD. A pre-CTN consultation with PMDA is planned.`,
      ],
    },
    {
      heading: '3. Filing Timeline',
      level: 1,
      tables: [
        {
          title: 'Table 3-1. CTA Filing Timeline',
          headers: ['Regulatory Authority', 'Submission Date (Planned)', 'Expected Approval', 'First Patient In (Target)'],
          rows: [
            ['FDA (IND)', REGULATORY.indFiledDate, 'July 15, 2023 (30-day default)', STUDIES.phase1.startDate],
            ['EU (CTIS) \u2014 DE, FR, ES, IT', 'August 2023', 'November 2023', 'December 2023'],
            ['UK (MHRA)', 'August 2023', 'October 2023', 'November 2023'],
            ['Japan (PMDA CTN)', 'October 2023', 'January 2024', 'February 2024'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase03-clinical-trial-application-cta', ctaApplication);

// ============================================================
// 6. phase03-ctd-module-1-administrative  (Tier 3)
// ============================================================
const ctdModule1: DocumentContent = {
  documentTitle: `CTD Module 1 \u2014 Administrative Information \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-006',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Cover Letter and Application Forms',
      level: 1,
      paragraphs: [
        `This Module 1 submission accompanies the IND application (IND ${REGULATORY.indNumber}) for ${DRUG.fullName}. It includes the completed Form FDA 1571 (IND Application), Form FDA 1572 (Statement of Investigator), Form FDA 3674 (Certification of Compliance with ClinicalTrials.gov requirements), and the financial disclosure forms for all listed investigators.`,
        `The submission is organized in electronic Common Technical Document (eCTD) format in compliance with FDA Guidance for Industry: Providing Regulatory Submissions in Electronic Format (eCTD). The eCTD sequence number is 0000 (initial submission).`,
      ],
    },
    {
      heading: '2. Proposed Labeling',
      level: 1,
      paragraphs: [
        `Not applicable. Proposed labeling is not required at the IND stage. A draft prescribing information document will be developed and submitted as part of the NDA filing. The Investigator\u2019s Brochure serves as the reference safety document for the clinical investigational phase.`,
      ],
    },
    {
      heading: '3. Patent Certification',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} holds the following patents relevant to ${DRUG.code}: U.S. Patent No. 11,234,567 (composition of matter, expiry: 2041); U.S. Patent No. 11,345,678 (method of treatment, expiry: 2042); U.S. Patent No. 11,456,789 (pharmaceutical formulation, expiry: 2043). Additional patent applications are pending in the EU, Japan, and other jurisdictions.`,
        `No patent certification under 21 U.S.C. \u00a7355(b)(2) is required at the IND stage. Patent information will be submitted with the NDA as required under 21 CFR 314.53.`,
      ],
    },
  ],
};
registerDocument('phase03-ctd-module-1-administrative', ctdModule1);

// ============================================================
// 7. phase03-ctd-module-2-summaries  (Tier 2)
// ============================================================
const ctdModule2: DocumentContent = {
  documentTitle: `CTD Module 2 \u2014 Common Technical Document Summaries \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-007',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Quality Overall Summary (Module 2.3)',
      level: 1,
      paragraphs: [
        `${DRUG.code} drug substance is synthesized via a 6-step convergent synthesis from commercially available starting materials. The drug substance is manufactured under cGMP conditions with validated analytical methods for identity, assay, purity, and residual solvents. The drug product is formulated as immediate-release film-coated tablets in strengths of ${DRUG.doses.join(', ')}.`,
        `Three batches of drug substance and drug product have been manufactured and tested for Phase 1 clinical supply. All batches met the proposed specification limits. Stability data through 12 months (25\u00b0C/60% RH) and 6 months (40\u00b0C/75% RH) support a shelf life of 24 months at controlled room temperature. Detailed quality information is provided in Module 3.`,
      ],
    },
    {
      heading: '2. Nonclinical Overview (Module 2.4)',
      level: 1,
      paragraphs: [
        `The nonclinical development program for ${DRUG.code} includes primary pharmacodynamic studies (in vitro and in vivo), secondary pharmacodynamic studies, safety pharmacology, pharmacokinetic studies (absorption, distribution, metabolism, excretion), and toxicology studies (single-dose, repeat-dose, genotoxicity).`,
        `${DRUG.code} demonstrated potent and selective inhibition of KRAS G12C (biochemical IC50 = 3.2 nM) with >1,000-fold selectivity over wild-type KRAS. In vivo, dose-dependent tumor growth inhibition and regression were observed in KRAS G12C-dependent xenograft models. The NOAEL was 50 mg/kg/day (rat) and 30 mg/kg/day (dog) in 28-day toxicology studies, with primary findings of reversible hepatocellular hypertrophy and GI effects.`,
      ],
    },
    {
      heading: '3. Clinical Overview (Module 2.5)',
      level: 1,
      paragraphs: [
        `No clinical data are available at the time of this IND submission, as ${DRUG.code} has not been previously administered to humans. The proposed first-in-human study (Protocol ${STUDIES.phase1.id}) is a Phase 1 dose-escalation and expansion study in patients with advanced KRAS G12C-mutant solid tumors.`,
        `The starting dose of 50 mg QD is supported by nonclinical PK/PD modeling and provides safety margins of \u22657\u00d7 (rat) and \u226510\u00d7 (dog) based on AUC comparisons at the respective NOAELs. The clinical development strategy, risk management, and monitoring plans are detailed in the clinical protocol and Investigator\u2019s Brochure.`,
      ],
    },
    {
      heading: '4. Cross-References to CTD Modules 3, 4, and 5',
      level: 1,
      tables: [
        {
          title: 'Table 4-1. CTD Module Cross-Reference Index',
          headers: ['Module', 'Content', 'Volume/Section Reference'],
          rows: [
            ['Module 3 (Quality)', 'Drug substance (3.2.S)', 'Volume 3, Section 3.2.S.1\u20133.2.S.7'],
            ['Module 3 (Quality)', 'Drug product (3.2.P)', 'Volume 3, Section 3.2.P.1\u20133.2.P.8'],
            ['Module 3 (Quality)', 'Appendices (3.2.A)', 'Volume 3, Section 3.2.A.1\u20133.2.A.3'],
            ['Module 4 (Nonclinical)', 'Pharmacology reports (4.2.1)', 'Volume 4, Section 4.2.1.1\u20134.2.1.4'],
            ['Module 4 (Nonclinical)', 'PK reports (4.2.2)', 'Volume 4, Section 4.2.2.1\u20134.2.2.6'],
            ['Module 4 (Nonclinical)', 'Toxicology reports (4.2.3)', 'Volume 4, Section 4.2.3.1\u20134.2.3.7'],
            ['Module 5 (Clinical)', 'Protocol VLX-4070-001 (5.3.5)', 'Volume 5, Section 5.3.5.1'],
          ],
        },
      ],
    },
    {
      heading: '5. Nonclinical Written Summary (Module 2.6)',
      level: 1,
      paragraphs: [
        `Pharmacology: ${DRUG.code} demonstrated potent covalent binding to KRAS G12C in the GDP-bound state with sustained target engagement (>90% occupancy at 24 hours post-dose in xenograft tumors at efficacious doses). Downstream pathway inhibition (pERK, pAKT) was dose-dependent and correlated with antitumor activity.`,
        `Pharmacokinetics: Oral bioavailability ranged from 62% (rat) to 78% (dog). Protein binding was 92\u201394% across species. Primary metabolism occurs via CYP3A4 (65%) and CYP2C8 (20%). No active metabolites were identified. Renal excretion accounted for <5% of the administered dose.`,
        `Toxicology: The nonclinical safety profile of ${DRUG.code} is consistent with its mechanism of action and the pharmacology of KRAS pathway inhibition. The primary target organ was the liver, with dose-dependent, reversible hepatocellular hypertrophy observed in both rats and dogs. These findings support careful hepatic monitoring in clinical studies.`,
      ],
    },
  ],
};
registerDocument('phase03-ctd-module-2-summaries', ctdModule2);

// ============================================================
// 8. phase03-ctd-module-3-quality  (Tier 2)
// ============================================================
const ctdModule3: DocumentContent = {
  documentTitle: `CTD Module 3 \u2014 Quality \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-008',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Drug Substance (3.2.S)',
      level: 1,
      paragraphs: [
        `${DRUG.code} drug substance is manufactured by SynPharm GmbH (Frankfurt, Germany) under cGMP conditions. The synthetic route is a 6-step convergent process with an overall yield of approximately 35%. The final step involves a chiral resolution to achieve >99.5% enantiomeric purity.`,
        `The drug substance specification includes tests for appearance, identity (IR, HPLC), assay (\u226598.0% by HPLC), related substances (total impurities \u22641.0%, any single impurity \u22640.15%), residual solvents (ICH Q3C limits), water content (\u22640.5%), particle size (D90 \u2264100 \u00b5m), and chiral purity (\u226599.5% S-enantiomer).`,
      ],
      tables: [
        {
          title: 'Table 1-1. Drug Substance Batch Analysis',
          headers: ['Test', 'Specification', 'Batch DS-001', 'Batch DS-002', 'Batch DS-003'],
          rows: [
            ['Appearance', 'White to off-white powder', 'Conforms', 'Conforms', 'Conforms'],
            ['Assay (HPLC)', '\u226598.0%', '99.4%', '99.2%', '99.5%'],
            ['Total impurities', '\u22641.0%', '0.38%', '0.42%', '0.35%'],
            ['Largest single impurity', '\u22640.15%', '0.12%', '0.14%', '0.11%'],
            ['Water content (KF)', '\u22640.5%', '0.18%', '0.22%', '0.15%'],
            ['Residual solvents', 'Per ICH Q3C', 'Conforms', 'Conforms', 'Conforms'],
            ['Chiral purity', '\u226599.5% (S)', '99.8%', '99.7%', '99.8%'],
          ],
        },
      ],
    },
    {
      heading: '2. Drug Product (3.2.P)',
      level: 1,
      paragraphs: [
        `The drug product is manufactured by PharmaTech Manufacturing, Inc. (Research Triangle Park, NC) as immediate-release film-coated tablets. The manufacturing process involves wet granulation, compression, and film coating. Critical process parameters (CPPs) including granulation endpoint moisture, compression force, and coating solution spray rate have been identified and controlled.`,
        `Drug product specifications include tests for appearance, identification (HPLC, UV), assay (95.0\u2013105.0% of label claim), content uniformity (AV \u226415.0), dissolution (\u226580% in 30 minutes, pH 1.2), degradation products (total \u22641.5%), and microbial limits.`,
      ],
    },
    {
      heading: '3. GMP Certificates',
      level: 1,
      paragraphs: [
        `Current GMP certificates are on file for both the drug substance and drug product manufacturing sites:`,
      ],
      lists: [
        {
          items: [
            'Drug substance: SynPharm GmbH \u2014 GMP certificate issued by Regierungspr\u00e4sidium Darmstadt (Germany), valid through December 2025; FDA Establishment Identifier: 3012345678',
            'Drug product: PharmaTech Manufacturing, Inc. \u2014 FDA Establishment Identifier: 1987654321; current FDA inspection classification: Voluntary Action Indicated (VAI), last inspection August 2022',
            'Analytical testing: QualityLab Services, LLC \u2014 GLP/GMP compliant analytical laboratory; FDA Establishment Identifier: 2045678901',
          ],
        },
      ],
    },
    {
      heading: '4. Analytical Methods Overview',
      level: 1,
      tables: [
        {
          title: 'Table 4-1. Analytical Method Summary',
          headers: ['Test', 'Method', 'Technique', 'Validation Status'],
          rows: [
            ['Assay / Related substances', 'AM-001', 'Reversed-phase HPLC-UV (254 nm)', 'Validated (ICH Q2)'],
            ['Identity', 'AM-002', 'FTIR spectroscopy', 'Verified'],
            ['Chiral purity', 'AM-003', 'Chiral HPLC (Chiralpak AD-H column)', 'Validated'],
            ['Water content', 'AM-004', 'Karl Fischer titration', 'Verified'],
            ['Dissolution', 'AM-005', 'USP Apparatus II, 50 rpm, pH 1.2', 'Validated'],
            ['Residual solvents', 'AM-006', 'Headspace GC-FID', 'Validated'],
            ['Content uniformity', 'AM-007', 'HPLC-UV (per AM-001)', 'Validated'],
            ['Particle size (DS)', 'AM-008', 'Laser diffraction', 'Verified'],
          ],
        },
      ],
    },
    {
      heading: '5. Stability Data Summary',
      level: 1,
      tables: [
        {
          title: 'Table 5-1. Drug Product Stability Summary (100 mg Tablet, Batch DP-001)',
          headers: ['Timepoint', 'Condition', 'Assay (%LC)', 'Total Impurities (%)', 'Dissolution (% in 30 min)'],
          rows: [
            ['Initial', 'N/A', '100.2', '0.22', '98'],
            ['3 months', '25\u00b0C/60% RH', '100.0', '0.24', '97'],
            ['6 months', '25\u00b0C/60% RH', '99.8', '0.28', '96'],
            ['12 months', '25\u00b0C/60% RH', '99.5', '0.35', '95'],
            ['3 months', '40\u00b0C/75% RH', '99.6', '0.32', '96'],
            ['6 months', '40\u00b0C/75% RH', '99.1', '0.45', '94'],
          ],
          footnotes: ['%LC = percent of label claim; RH = relative humidity'],
        },
      ],
    },
  ],
};
registerDocument('phase03-ctd-module-3-quality', ctdModule3);

// ============================================================
// 9. phase03-ctd-module-4-nonclinical  (Tier 3)
// ============================================================
const ctdModule4: DocumentContent = {
  documentTitle: `CTD Module 4 \u2014 Nonclinical Study Reports \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-009',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Nonclinical Study Report Index',
      level: 1,
      paragraphs: [
        `The following table provides a complete index of all nonclinical study reports included in Module 4 of this IND submission for ${DRUG.code}.`,
      ],
      tables: [
        {
          title: 'Table 1-1. Module 4 Study Report Index',
          headers: ['CTD Section', 'Study Number', 'Study Title', 'Test Facility', 'GLP Status'],
          rows: [
            ['4.2.1.1', 'PH-001', 'In vitro KRAS G12C biochemical assay', 'Velantis Research Labs', 'Non-GLP'],
            ['4.2.1.1', 'PH-002', 'Cellular proliferation and signaling assays', 'Velantis Research Labs', 'Non-GLP'],
            ['4.2.1.2', 'PH-003', 'NCI-H358 xenograft efficacy study', 'PreclinCRO, Inc.', 'Non-GLP'],
            ['4.2.1.2', 'PH-004', 'MIA PaCa-2 xenograft efficacy study', 'PreclinCRO, Inc.', 'Non-GLP'],
            ['4.2.1.3', 'PH-005', 'Selectivity panel (60 kinases)', 'EuroScreening S.A.', 'Non-GLP'],
            ['4.2.2.1', 'PK-001', 'Rat single-dose PK (IV/PO)', 'ToxPath Sciences', 'Non-GLP'],
            ['4.2.2.2', 'PK-002', 'Dog single-dose PK (IV/PO)', 'ToxPath Sciences', 'Non-GLP'],
            ['4.2.2.3', 'PK-003', 'In vitro metabolism (HLM, hepatocytes)', 'Velantis Research Labs', 'Non-GLP'],
            ['4.2.2.4', 'PK-004', 'Plasma protein binding (rat, dog, human)', 'ToxPath Sciences', 'Non-GLP'],
            ['4.2.3.1', 'TX-001', 'Rat single-dose toxicity', 'ToxPath Sciences', 'GLP'],
            ['4.2.3.1', 'TX-002', 'Dog single-dose toxicity', 'ToxPath Sciences', 'GLP'],
            ['4.2.3.2', 'TX-003', 'Rat 28-day repeat-dose toxicity + recovery', 'ToxPath Sciences', 'GLP'],
            ['4.2.3.2', 'TX-004', 'Dog 28-day repeat-dose toxicity + recovery', 'ToxPath Sciences', 'GLP'],
            ['4.2.3.3', 'TX-005', 'Ames assay', 'GeneticTox Labs', 'GLP'],
            ['4.2.3.3', 'TX-006', 'In vivo rat micronucleus', 'GeneticTox Labs', 'GLP'],
            ['4.2.3.4', 'SP-001', 'hERG channel assay', 'CardioSafety Ltd.', 'GLP'],
            ['4.2.3.4', 'SP-002', 'Rat Irwin test (CNS safety pharmacology)', 'ToxPath Sciences', 'GLP'],
            ['4.2.3.4', 'SP-003', 'Rat respiratory safety pharmacology', 'ToxPath Sciences', 'GLP'],
          ],
        },
      ],
    },
    {
      heading: '2. Study Cross-Reference Table',
      level: 1,
      tables: [
        {
          title: 'Table 2-1. Cross-Reference to Key Findings by Study',
          headers: ['Study', 'Key Finding', 'Clinical Relevance', 'IB Section'],
          rows: [
            ['PH-001/002', 'IC50 = 3.2 nM (biochemical), 8\u201335 nM (cellular)', 'Supports target engagement at projected clinical exposures', 'IB \u00a72'],
            ['PH-003/004', 'TGI 52\u201399% dose-dependently', 'Supports antitumor activity expectation', 'IB \u00a72'],
            ['TX-003', 'Rat NOAEL 50 mg/kg/day; hepatocellular hypertrophy', 'LFT monitoring required in clinic', 'IB \u00a74, \u00a76'],
            ['TX-004', 'Dog NOAEL 30 mg/kg/day; GI effects, hepatic findings', 'GI and hepatic AE monitoring', 'IB \u00a74, \u00a76'],
            ['SP-001', 'hERG IC50 >30 \u00b5M', 'Low QTc risk; ECG monitoring recommended', 'IB \u00a77'],
          ],
        },
      ],
    },
    {
      heading: '3. Key Findings Summary',
      level: 1,
      paragraphs: [
        `The nonclinical program for ${DRUG.code} supports a favorable benefit-risk profile for initiation of the first-in-human study. Key pharmacological findings demonstrate potent and selective KRAS G12C inhibition with robust antitumor activity in relevant xenograft models. Toxicological findings are consistent with the mechanism of action and the known pharmacology of KRAS pathway inhibition.`,
        `The primary safety signals identified in nonclinical studies are: (1) dose-dependent, reversible hepatocellular hypertrophy in rats and dogs, supporting the need for LFT monitoring; (2) GI intolerance (emesis, soft stool) in dogs at supratherapeutic exposures; and (3) minimal hERG liability, though ECG monitoring is recommended as a precautionary measure. All pivotal toxicology studies were conducted in compliance with GLP regulations (21 CFR Part 58).`,
      ],
    },
  ],
};
registerDocument('phase03-ctd-module-4-nonclinical', ctdModule4);

// ============================================================
// 10. phase03-irb-iec-approval  (Tier 3)
// ============================================================
const irbApproval: DocumentContent = {
  documentTitle: `IRB/IEC Approval Documentation \u2014 Protocol ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-IND-010',
  version: '1.0',
  date: '2023-08-10',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. IRB Review Correspondence',
      level: 1,
      paragraphs: [
        `The following Institutional Review Boards (IRBs) have reviewed and approved Protocol ${STUDIES.phase1.id} (Version 1.0, dated ${REGULATORY.indFiledDate}) for the conduct of clinical research at their respective institutions:`,
        `WCG IRB (central IRB for US sites): Initial submission received July 20, 2023. Review completed August 5, 2023. Full Board approval granted August 8, 2023 (IRB Protocol #20231234). Approval is valid for 12 months with annual continuing review required.`,
        `Independent Ethics Committees (IECs) for planned ex-US sites will be engaged following submission of country-specific CTAs. Anticipated IEC submissions: Germany (September 2023), United Kingdom (September 2023), Japan (November 2023).`,
      ],
    },
    {
      heading: '2. Protocol Approval Documentation',
      level: 1,
      paragraphs: [
        `The IRB approval package for Protocol ${STUDIES.phase1.id} includes the following documents:`,
      ],
      lists: [
        {
          items: [
            'IRB approval letter (WCG IRB, dated August 8, 2023)',
            'Approved informed consent form (Version 1.0, English)',
            'Approved protocol (Version 1.0, dated June 15, 2023)',
            'Approved Investigator\u2019s Brochure (Version 1.0, dated June 15, 2023)',
            'HIPAA authorization form',
            'Recruitment materials (patient-facing flyer and website text)',
            'Study-specific HIPAA waiver for screening activities',
          ],
        },
      ],
    },
    {
      heading: '3. Continuing Review Plan',
      level: 1,
      paragraphs: [
        `Continuing review of Protocol ${STUDIES.phase1.id} will be conducted at least annually in accordance with 21 CFR 56.109(f) and ICH GCP E6(R2) guidelines. The continuing review submission will include: a progress report summarizing enrollment status, protocol deviations, adverse events, and any new safety information from the IB; an updated informed consent form if revisions are warranted; and any protocol amendments.`,
        `Reportable events including unanticipated problems involving risks to subjects, serious adverse events that are unexpected and related to the study drug, and protocol deviations that may affect subject safety will be reported to the IRB within the timeframes specified in the IRB\u2019s standard operating procedures (generally within 5 business days for serious events and 10 business days for protocol deviations).`,
      ],
    },
  ],
};
registerDocument('phase03-irb-iec-approval', irbApproval);

// ============================================================
// 11. phase03-regulatory-pre-ind-meeting  (Tier 2)
// ============================================================
const preIndMeeting: DocumentContent = {
  documentTitle: `Pre-IND Meeting Package \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-011',
  version: '1.0',
  date: '2023-03-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Pre-IND Type B Meeting Briefing Document',
      level: 1,
      paragraphs: [
        `Meeting Type: Type B Pre-IND Meeting`,
        `Meeting Date: April 12, 2023`,
        `Product: ${DRUG.fullName}`,
        `IND Sponsor: ${DRUG.sponsor}`,
        `Proposed Indication: Treatment of patients with advanced/metastatic KRAS G12C-mutant non-small cell lung cancer`,
        `This briefing document is submitted in advance of the Pre-IND meeting with the Division of Oncology Products 1, Office of Oncologic Diseases, Center for Drug Evaluation and Research (CDER), FDA. ${DRUG.sponsor} seeks FDA\u2019s input on the proposed nonclinical and clinical development program for ${DRUG.code}, a ${DRUG.mechanism.toLowerCase()}.`,
      ],
    },
    {
      heading: '2. Key Questions for FDA',
      level: 1,
      paragraphs: [
        `The following questions were submitted for FDA\u2019s consideration:`,
      ],
      lists: [
        {
          ordered: true,
          items: [
            'Does the FDA agree that the proposed nonclinical package (28-day rat and dog toxicology studies, genetic toxicology battery, safety pharmacology core battery) is adequate to support the proposed Phase 1 first-in-human study?',
            'Does the FDA agree with the proposed 3+3 dose-escalation design with a starting dose of 50 mg QD (representing approximately 1/10th of the rat STD10 on an AUC basis)?',
            'Does the FDA agree that the proposed DLT criteria and stopping rules are appropriate for a first-in-human oncology study?',
            'Does the FDA have any recommendations regarding the hepatotoxicity monitoring strategy, given the nonclinical hepatic findings?',
            'Does the FDA agree with the proposed bioanalytical and PK/PD assessment strategy?',
            'Does the FDA have any recommendations regarding companion diagnostic development for KRAS G12C testing?',
          ],
        },
      ],
    },
    {
      heading: '3. FDA Responses and Meeting Minutes Summary',
      level: 1,
      paragraphs: [
        `The FDA provided the following key responses during the Pre-IND meeting (minutes finalized May 10, 2023):`,
        `Question 1 (Nonclinical package): The FDA agreed that 28-day rat and dog toxicology studies are adequate to support the proposed Phase 1 study. The FDA recommended including a 13-week toxicology study in at least one species prior to initiating studies >28 days duration. The embryo-fetal development study should be completed prior to enrolling women of childbearing potential or adequate contraception requirements should be included.`,
        `Question 2 (Dose escalation): The FDA agreed with the proposed 3+3 design and starting dose. The FDA noted that the starting dose provides adequate safety margins based on the nonclinical data presented.`,
        `Question 3 (DLT criteria): The FDA agreed with the proposed DLT criteria with the recommendation to include QTcF >500 ms as a DLT criterion and to conduct triplicate ECGs at each dose level.`,
        `Question 4 (Hepatotoxicity): The FDA recommended implementing a hepatotoxicity management algorithm, including dose modification guidelines for ALT/AST elevations, and weekly LFT monitoring during the first two cycles with more frequent monitoring (twice weekly) for the first two weeks at each new dose level.`,
        `Question 5 (Bioanalytical/PK): The FDA agreed with the proposed PK sampling strategy and recommended including a food-effect study early in development.`,
        `Question 6 (CDx): The FDA recommended early engagement with the Office of In Vitro Diagnostics to discuss companion diagnostic development for KRAS G12C mutation testing.`,
      ],
    },
    {
      heading: '4. Agreed-Upon IND Strategy',
      level: 1,
      paragraphs: [
        `Based on FDA feedback, the following IND strategy was finalized:`,
      ],
      lists: [
        {
          items: [
            'IND submission target: June 2023 with the existing 28-day rat and dog toxicology package',
            'Starting dose: 50 mg QD confirmed (adequate safety margins)',
            'Dose-escalation design: 3+3 with sentinel dosing at each level; maximum proposed dose 600 mg QD',
            'Hepatotoxicity monitoring: Weekly LFTs in Cycles 1\u20132; twice-weekly for first 2 weeks at each new dose level; dose modification algorithm included in protocol',
            'QTcF DLT criterion added: >500 ms or \u039460 ms from baseline confirmed on repeat',
            'Food-effect study (VLX-4070-002) planned as separate protocol in healthy volunteers',
            '13-week toxicology study initiation planned concurrent with Phase 1 to support studies >28 days',
            'Companion diagnostic pre-submission meeting with OIVD targeted for Q4 2023',
          ],
        },
      ],
    },
    {
      heading: '5. Meeting Attendees and Timeline',
      level: 1,
      tables: [
        {
          title: 'Table 5-1. Pre-IND Meeting Timeline',
          headers: ['Milestone', 'Date'],
          rows: [
            ['Meeting request submitted', 'February 15, 2023'],
            ['Meeting request granted', 'February 28, 2023'],
            ['Briefing document submitted', 'March 15, 2023'],
            ['Pre-IND meeting (teleconference)', 'April 12, 2023'],
            ['Draft meeting minutes received', 'April 28, 2023'],
            ['Final meeting minutes', 'May 10, 2023'],
            ['IND submission', REGULATORY.indFiledDate],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase03-regulatory-pre-ind-meeting', preIndMeeting);

// ============================================================
// 12. phase03-environmental-assessment  (Tier 3)
// ============================================================
const environmentalAssessment: DocumentContent = {
  documentTitle: `Environmental Assessment \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-IND-012',
  version: '1.0',
  date: REGULATORY.indFiledDate,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Categorical Exclusion Claim',
      level: 1,
      paragraphs: [
        `Pursuant to 21 CFR 25.31(e), ${DRUG.sponsor} claims a categorical exclusion from the requirement to prepare an Environmental Assessment (EA) or an Environmental Impact Statement (EIS) for this IND application for ${DRUG.fullName}.`,
        `Under 21 CFR 25.31(e), an IND for drugs intended to treat life-threatening or seriously debilitating conditions is categorically excluded from the requirement for an EA provided that the action will not individually or cumulatively have a significant effect on the human environment. ${DRUG.code} is intended for the treatment of KRAS G12C-mutant non-small cell lung cancer, a life-threatening malignancy, and qualifies for this categorical exclusion.`,
      ],
    },
    {
      heading: '2. Environmental Impact Statement',
      level: 1,
      paragraphs: [
        `Not applicable. Based on the categorical exclusion claimed under 21 CFR 25.31(e), no Environmental Impact Statement is required for this IND application. The small quantities of ${DRUG.code} to be manufactured for clinical supply (estimated total <50 kg for the Phase 1 program) are not expected to result in any significant environmental impact.`,
        `Manufacturing waste streams from the drug substance synthesis are managed in accordance with applicable environmental regulations at the manufacturing site (SynPharm GmbH, Frankfurt, Germany). All organic solvent waste is collected and disposed of through licensed hazardous waste management facilities.`,
      ],
    },
    {
      heading: '3. 21 CFR Part 25 Compliance Statement',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} certifies that, to the best of its knowledge, the proposed action qualifies for a categorical exclusion under 21 CFR 25.31(e) and that no extraordinary circumstances exist that would require preparation of an EA under 21 CFR 25.21. Specifically:`,
      ],
      lists: [
        {
          items: [
            'The proposed action does not involve the release of substances into the environment at levels that could pose a risk to human health or the environment.',
            'The manufacturing process does not produce significant quantities of waste that cannot be managed under existing environmental regulations.',
            'The drug substance and drug product are not expected to bioaccumulate in the environment.',
            'No endangered or threatened species or critical habitats will be affected by the proposed clinical investigations.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase03-environmental-assessment', environmentalAssessment);
