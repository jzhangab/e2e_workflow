import { registerDocument } from './index';
import { DRUG, STUDIES, REGULATORY, EFFICACY, SAFETY } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// ---------------------------------------------------------------------------
// Phase 04 — Phase 1: FIH / Safety / PK  (12 cards)
// ---------------------------------------------------------------------------

// ============================================================
// 1. phase04-phase1-protocol-amendments  (Tier 2)
// ============================================================
const protocolAmendments: DocumentContent = {
  documentTitle: `Protocol Amendment v2.0 \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-001',
  version: '2.0',
  date: '2024-03-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Protocol VLX-4070-001 Version 2.0 Amendments',
      level: 1,
      paragraphs: [
        `This document describes the amendments to Protocol ${STUDIES.phase1.id} (Version 1.0, dated ${REGULATORY.indFiledDate}) resulting in Version 2.0. These amendments are based on safety observations from the ongoing dose-escalation phase, protocol deviations requiring clarification, and operational improvements identified during study conduct.`,
        `Protocol Version 2.0 was approved by the WCG IRB on March 28, 2024. The amendment has been submitted to all applicable regulatory authorities and ethics committees.`,
      ],
    },
    {
      heading: '2. SAD/MAD Design Details',
      level: 1,
      paragraphs: [
        `The original protocol specified a single-ascending dose (SAD) design in Part A. Based on PK data from the first three dose cohorts (50 mg, 100 mg, 200 mg) showing rapid attainment of steady state (by Day 8), Amendment 2.0 introduces an optional multiple-ascending dose (MAD) expansion at the RP2D to better characterize steady-state PK and accumulation ratios.`,
        `The MAD expansion will enroll an additional 12 patients at the RP2D (400 mg QD) with intensive PK sampling on Days 1, 8, and 15 of Cycle 1 to fully characterize steady-state PK parameters and the accumulation ratio.`,
      ],
    },
    {
      heading: '3. Dose Escalation Schema with Sentinel Dosing',
      level: 1,
      paragraphs: [
        `Amendment 2.0 formalizes sentinel dosing requirements based on lessons learned from initial cohorts. At each new dose level, a single sentinel patient will be dosed and observed for a minimum of 7 days before enrolling the second and third patients. If the sentinel patient experiences a Grade \u22652 adverse event of special interest (hepatotoxicity, QTc prolongation), a Safety Review Committee meeting will be convened before proceeding.`,
      ],
      tables: [
        {
          title: 'Table 3-1. Updated Dose Escalation Schema',
          headers: ['Cohort', 'Dose', 'Sentinel Period', 'Enrolled (as of Amendment)', 'DLTs Observed'],
          rows: [
            ['1', '50 mg QD', '7 days', '3 completed', '0/3'],
            ['2', '100 mg QD', '7 days', '3 completed', '0/3'],
            ['3', '200 mg QD', '7 days', '6 completed', '1/6 (Grade 3 ALT elevation, resolved)'],
            ['4', '400 mg QD', '7 days', 'Enrolling', 'Pending'],
            ['5', '600 mg QD', '7 days', 'Planned', '\u2014'],
          ],
          footnotes: ['DLT evaluation window: Cycle 1 (28 days)'],
        },
      ],
    },
    {
      heading: '4. Amendment Rationale',
      level: 1,
      paragraphs: [
        `The key amendments in Version 2.0 and their rationale are summarized below:`,
      ],
      tables: [
        {
          title: 'Table 4-1. Summary of Protocol Amendments',
          headers: ['Section', 'Amendment', 'Rationale'],
          rows: [
            ['Section 6.1', 'Added MAD expansion cohort at RP2D', 'Characterize steady-state PK; evaluate accumulation ratio'],
            ['Section 7.2', 'Formalized 7-day sentinel dosing observation', 'Enhance safety monitoring at each new dose level'],
            ['Section 8.3', 'Added twice-weekly LFT monitoring for first 2 weeks of each new dose level', 'Based on Grade 3 ALT elevation observed at 200 mg'],
            ['Section 9.1', 'Clarified DLT definition for hepatotoxicity: ALT >5\u00d7 ULN sustained >7 days', 'Protocol deviation at 200 mg level required clarification'],
            ['Section 10.4', 'Updated concomitant medication restrictions: prohibited strong CYP3A4 inhibitors', 'In vitro CYP data confirmed CYP3A4 as primary metabolic pathway'],
            ['Section 12.1', 'Added exploratory ctDNA longitudinal sampling', 'Emerging data supporting ctDNA as PD biomarker for KRAS G12C inhibitors'],
          ],
        },
      ],
    },
    {
      heading: '5. Regulatory Submission and Notification',
      level: 1,
      paragraphs: [
        `Protocol Amendment 2.0 was submitted to the FDA as an IND Information Amendment (Serial Number 0005) on March 20, 2024. The amendment was also submitted to the WCG IRB (approved March 28, 2024) and applicable ex-US ethics committees. All active study sites were notified of the amendment within 5 business days of IRB approval.`,
      ],
    },
  ],
};
registerDocument('phase04-phase1-protocol-amendments', protocolAmendments);

// ============================================================
// 2. phase04-case-report-forms-ecrf  (Tier 3)
// ============================================================
const caseReportForms: DocumentContent = {
  documentTitle: `Electronic Case Report Form (eCRF) Design Specifications \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-002',
  version: '1.0',
  date: '2023-08-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. eCRF Design Specifications',
      level: 1,
      paragraphs: [
        `The electronic Case Report Forms for Protocol ${STUDIES.phase1.id} are built within the Medidata Rave EDC platform (version 2024.1). The eCRF design follows CDASH v2.2 standards and incorporates FDA guidance on electronic records (21 CFR Part 11). All data entry screens, edit checks, and derivation rules have been validated in a User Acceptance Testing (UAT) environment prior to production deployment.`,
        `The eCRF consists of 24 unique form pages organized into the following functional modules: Screening/Enrollment, Demographics, Medical History, Concomitant Medications, Study Drug Administration, Adverse Events, Laboratory Results, Vital Signs, ECG, Tumor Assessment, Pharmacokinetic Sampling, and End of Study/Early Termination.`,
      ],
    },
    {
      heading: '2. CDASH-Compliant Domains and Edit Check Specifications',
      level: 1,
      tables: [
        {
          title: 'Table 2-1. CDASH Domain Mapping',
          headers: ['eCRF Module', 'CDASH Domain', 'Key Variables', 'Edit Checks'],
          rows: [
            ['Demographics', 'DM', 'BRTHDTC, SEX, RACE, ETHNIC', 'Age \u226518 at consent; valid date format'],
            ['Medical History', 'MH', 'MHTERM, MHSTDTC, MHONGO', 'MedDRA coding required; ongoing flag logic'],
            ['Adverse Events', 'AE', 'AETERM, AESTDTC, AESEV, AEREL, AESER, AEOUT', 'Onset \u2265 first dose; severity grades 1\u20135; SAE triggers expedited form'],
            ['Concomitant Meds', 'CM', 'CMTRT, CMDOSE, CMSTDTC', 'WHODrug coding required; CYP3A4 inhibitor flag'],
            ['Lab Results', 'LB', 'LBTESTCD, LBORRES, LBORNRLO, LBORNRHI', 'Auto-grading per CTCAE v5.0; LFT alerting algorithm'],
            ['Vital Signs', 'VS', 'VSTESTCD, VSORRES, VSDTC', 'Range checks; weight change >10% alert'],
            ['ECG', 'EG', 'EGTESTCD, EGORRES, EGDTC', 'QTcF >450 ms alert; triplicate average derivation'],
            ['Tumor Assessment', 'TR/TU/RS', 'TRLNKID, TRORRES, RSORRES', 'RECIST v1.1 auto-calculation; confirmation required for CR/PR'],
            ['PK Sampling', 'PC', 'PCTESTCD, PCORRES, PCDTC, PCTPT', 'Actual vs. planned time deviation flag (\u00b115 min)'],
            ['Drug Admin', 'EX', 'EXTRT, EXDOSE, EXSTDTC, EXENDTC', 'Dose modification tracking; compliance calculation'],
          ],
        },
      ],
    },
    {
      heading: '3. CRF Completion Guidelines',
      level: 1,
      paragraphs: [
        `All eCRF pages must be completed within 3 business days of the associated study visit. Adverse event forms must be completed within 24 hours for serious adverse events. Data queries must be resolved within 5 business days of issuance. Source data verification (SDV) is planned for 100% of critical data points (primary endpoints, eligibility criteria, SAEs) and 20% of non-critical data points.`,
        `The eCRF audit trail captures all data entries, modifications, and query resolutions with timestamps and user identification per 21 CFR Part 11 requirements. Electronic signatures are required for form completion and query resolution.`,
      ],
    },
  ],
};
registerDocument('phase04-case-report-forms-ecrf', caseReportForms);

// ============================================================
// 3. phase04-data-management-plan  (Tier 3)
// ============================================================
const dataManagementPlan: DocumentContent = {
  documentTitle: `Data Management Plan \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-003',
  version: '1.0',
  date: '2023-08-20',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Database Design',
      level: 1,
      paragraphs: [
        `The clinical database for Protocol ${STUDIES.phase1.id} is hosted on the Medidata Rave EDC platform (version 2024.1), managed by ClinData Solutions, Inc. under a validated GCP-compliant environment. The database architecture includes 24 eCRF modules comprising 187 unique data fields, 342 programmed edit checks, and 28 derivation rules.`,
        `The database is designed to support data collection for up to ${STUDIES.phase1.patients} patients across approximately 12 study sites in the US, EU, and Japan. External data feeds include central laboratory data (LabCorp), ECG data (ERT/Clario), and PK bioanalytical data (Celerion).`,
      ],
    },
    {
      heading: '2. Data Flow and Coding Dictionaries',
      level: 1,
      paragraphs: [
        `Clinical data flow follows the established pathway: site data entry \u2192 automated edit checks \u2192 manual data review \u2192 query generation/resolution \u2192 medical coding \u2192 database lock. Central laboratory, ECG, and bioanalytical data are transferred electronically via validated interfaces using CDISC ODM format.`,
        `Medical coding is performed using MedDRA version 26.0 (September 2023 release) for adverse events and medical history terms. Medications are coded using the WHO Drug Dictionary Enhanced, March 2024 edition. Tumor histology is coded per ICD-O-3 and WHO Classification of Tumours (5th edition).`,
      ],
    },
    {
      heading: '3. Query Management Process',
      level: 1,
      paragraphs: [
        `Automated queries are generated in real-time based on programmed edit checks. Manual queries are generated by the data management team during routine data review. All queries are tracked within Medidata Rave with status categories: Open, Answered, Closed, and Cancelled.`,
        `Query resolution targets: automated queries \u2264 3 business days; manual queries \u2264 5 business days; critical queries (safety-related) \u2264 1 business day. Query metrics are reported monthly to the Sponsor\u2019s Clinical Operations team. The target query rate at database lock is \u22640.5 queries per eCRF page.`,
      ],
    },
    {
      heading: '4. Database Lock Procedures',
      level: 1,
      paragraphs: [
        `Database lock will be performed in two stages: (1) Soft lock \u2014 all queries resolved, medical coding complete, external data reconciled, and SAE reconciliation confirmed; (2) Hard lock \u2014 database frozen, audit trail archived, and transfer datasets generated in CDISC SDTM format.`,
        `A pre-lock Data Review Meeting will be held with the Sponsor\u2019s clinical, biostatistics, data management, and medical monitoring teams to confirm readiness. The database will be locked within 8 weeks of last patient last visit (LPLV).`,
      ],
    },
  ],
};
registerDocument('phase04-data-management-plan', dataManagementPlan);

// ============================================================
// 4. phase04-statistical-analysis-plan  (Tier 2)
// ============================================================
const statisticalAnalysisPlan: DocumentContent = {
  documentTitle: `Statistical Analysis Plan \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-004',
  version: '1.0',
  date: '2024-01-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Analysis Populations',
      level: 1,
      paragraphs: [
        `The following analysis populations are defined for Protocol ${STUDIES.phase1.id}:`,
      ],
      tables: [
        {
          title: 'Table 1-1. Analysis Population Definitions',
          headers: ['Population', 'Abbreviation', 'Definition'],
          rows: [
            ['Enrolled', 'ENR', 'All patients who sign informed consent'],
            ['Safety', 'SAF', 'All patients who receive at least one dose of VLX-4070'],
            ['DLT-Evaluable', 'DLT', 'All SAF patients who complete the DLT evaluation window (Cycle 1, 28 days) or experience a DLT, with \u226575% dose compliance and no major protocol deviations affecting DLT assessment'],
            ['Pharmacokinetic', 'PK', 'All SAF patients with at least one evaluable post-dose PK sample'],
            ['Response-Evaluable', 'REP', 'All SAF patients with baseline and at least one post-baseline tumor assessment per RECIST v1.1'],
          ],
        },
      ],
    },
    {
      heading: '2. Primary Objectives and Endpoints',
      level: 1,
      paragraphs: [
        `The primary objectives of Protocol ${STUDIES.phase1.id} are to determine the safety, tolerability, MTD, and RP2D of ${DRUG.code} in patients with advanced KRAS G12C-mutant solid tumors.`,
        `The primary endpoints are: (1) incidence and severity of adverse events graded per NCI CTCAE v5.0; (2) incidence of dose-limiting toxicities at each dose level; (3) maximum tolerated dose (defined as the highest dose level at which <33% of patients experience a DLT); and (4) the recommended Phase 2 dose.`,
        `DLT rates will be summarized by dose level with exact 95% binomial confidence intervals. The MTD will be determined using the standard 3+3 algorithm. No formal hypothesis testing is planned for primary objectives.`,
      ],
    },
    {
      heading: '3. PK Parameter Derivation Methods',
      level: 1,
      paragraphs: [
        `Pharmacokinetic parameters will be derived using noncompartmental analysis (NCA) performed with Phoenix WinNonlin version 8.4. The following parameters will be calculated for single-dose (Cycle 1 Day 1) and steady-state (Cycle 1 Day 15) profiles:`,
      ],
      tables: [
        {
          title: 'Table 3-1. PK Parameters',
          headers: ['Parameter', 'Description', 'Derivation Method'],
          rows: [
            ['Cmax', 'Maximum observed plasma concentration', 'Directly observed from concentration-time data'],
            ['Tmax', 'Time to Cmax', 'Directly observed'],
            ['AUC0-24', 'Area under the curve from 0 to 24 hours', 'Linear trapezoidal (ascending) / log trapezoidal (descending)'],
            ['AUC0-inf', 'AUC extrapolated to infinity (Day 1 only)', 'AUC0-t + Clast/\u03bbz'],
            ['t1/2', 'Terminal elimination half-life', '0.693/\u03bbz; minimum of 3 terminal phase points required'],
            ['CL/F', 'Apparent oral clearance', 'Dose/AUC0-24 (steady state)'],
            ['Vz/F', 'Apparent volume of distribution', 'Dose/(\u03bbz \u00d7 AUC0-inf)'],
            ['Rac', 'Accumulation ratio', 'AUC0-24(Day 15) / AUC0-24(Day 1)'],
          ],
        },
      ],
      paragraphs: [
        `Dose proportionality will be assessed across dose levels using a power model (log-transformed AUC and Cmax vs. log-transformed dose) with 90% confidence intervals for the slope parameter.`,
      ],
    },
    {
      heading: '4. Safety Analysis Methodology',
      level: 1,
      paragraphs: [
        `Adverse events will be coded using MedDRA v26.0 and graded per CTCAE v5.0. Safety analyses will be performed on the Safety population and summarized by dose level and overall. Treatment-emergent adverse events (TEAEs) will be defined as any AE with onset on or after the first dose of ${DRUG.code}.`,
        `The following safety analyses are planned: (1) overall summary of TEAEs by System Organ Class and Preferred Term; (2) summary of TEAEs by maximum CTCAE grade; (3) summary of treatment-related AEs, SAEs, AEs leading to dose modification, and AEs leading to discontinuation; (4) shift tables for key laboratory parameters (hepatic, renal, hematologic); (5) QTcF change from baseline analysis by dose level and exposure quartile.`,
      ],
    },
    {
      heading: '5. Efficacy Analysis (Exploratory)',
      level: 1,
      paragraphs: [
        `Antitumor activity is a secondary objective and will be assessed in the Response-Evaluable population. Best overall response will be determined per RECIST v1.1 based on investigator assessment. The objective response rate (ORR = CR + PR) and disease control rate (DCR = CR + PR + SD \u226516 weeks) will be summarized with exact 95% binomial confidence intervals.`,
        `Time-to-event endpoints (duration of response, progression-free survival) will be estimated using the Kaplan-Meier method. Waterfall plots of best percent change in target lesion sum and swimmer plots of treatment duration will be generated.`,
      ],
      tables: [
        {
          title: 'Table 5-1. Statistical Methods by Endpoint',
          headers: ['Endpoint', 'Population', 'Statistical Method', 'Presentation'],
          rows: [
            ['DLT rate', 'DLT', 'Exact binomial 95% CI', 'By dose level'],
            ['TEAE incidence', 'SAF', 'Frequency, percentage', 'By dose level and overall; by SOC/PT'],
            ['Cmax, AUC0-24', 'PK', 'Geometric mean, CV%', 'By dose level; dose-proportionality model'],
            ['ORR', 'REP', 'Exact binomial 95% CI', 'By dose level and overall'],
            ['DCR', 'REP', 'Exact binomial 95% CI', 'By dose level and overall'],
            ['PFS', 'REP', 'Kaplan-Meier', 'Median with 95% CI'],
          ],
        },
      ],
    },
  ],
};
registerDocument('phase04-statistical-analysis-plan', statisticalAnalysisPlan);

// ============================================================
// 5. phase04-sdtm-mapping-specifications  (Tier 2)
// ============================================================
const sdtmMapping: DocumentContent = {
  documentTitle: `SDTM Mapping Specifications \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-005',
  version: '1.0',
  date: '2024-02-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. SDTM Implementation Guide Compliance',
      level: 1,
      paragraphs: [
        `The SDTM datasets for Protocol ${STUDIES.phase1.id} are created in compliance with CDISC SDTM Implementation Guide version 3.4 and SDTM version 2.0. All datasets, variables, and controlled terminology conform to the CDISC SDTM standards and FDA Data Standards Catalog (effective December 2023).`,
        `The SDTM package will include: annotated CRFs, define.xml (version 2.1), Reviewer\u2019s Guide, and all SDTM domain datasets in SAS Transport (XPT) format. The package will be validated using Pinnacle 21 Community (version 4.1) prior to submission.`,
      ],
    },
    {
      heading: '2. Domain Mapping Table',
      level: 1,
      tables: [
        {
          title: 'Table 2-1. SDTM Domain Mapping',
          headers: ['Domain', 'Description', 'Class', 'Source', 'Key Variables'],
          rows: [
            ['DM', 'Demographics', 'Special Purpose', 'eCRF Demographics', 'USUBJID, AGE, SEX, RACE, ARMCD, ARM, ACTARMCD'],
            ['AE', 'Adverse Events', 'Events', 'eCRF Adverse Events', 'AETERM, AEDECOD, AEBODSYS, AESEV, AEREL, AESER, AEOUT'],
            ['LB', 'Laboratory Tests', 'Findings', 'Central Lab (LabCorp)', 'LBTESTCD, LBTEST, LBORRES, LBORRESU, LBSTRESN, LBNRIND'],
            ['VS', 'Vital Signs', 'Findings', 'eCRF Vital Signs', 'VSTESTCD, VSTEST, VSORRES, VSORRESU, VSBLFL'],
            ['EX', 'Exposure', 'Interventions', 'eCRF Drug Admin', 'EXTRT, EXDOSE, EXDOSU, EXSTDTC, EXENDTC'],
            ['PC', 'Pharmacokinetics Concentrations', 'Findings', 'Bioanalytical Lab (Celerion)', 'PCTESTCD, PCTEST, PCORRES, PCORRESU, PCTPT, PCELTM'],
            ['PP', 'Pharmacokinetics Parameters', 'Findings', 'Derived (WinNonlin)', 'PPTESTCD, PPTEST, PPSTRESN, PPSTRESU, PPCAT'],
            ['EG', 'ECG', 'Findings', 'Central ECG (Clario)', 'EGTESTCD, EGTEST, EGORRES, EGORRESU, EGBLFL'],
            ['TR', 'Tumor Results', 'Findings', 'eCRF Tumor Assessment', 'TRTESTCD, TRORRES, TRORRESU, TRLNKID, TRGRPID'],
            ['TU', 'Tumor Identification', 'Findings', 'eCRF Tumor Assessment', 'TULOC, TUMETHOD, TULNKID'],
            ['RS', 'Disease Response', 'Findings', 'Derived (RECIST v1.1)', 'RSTESTCD, RSORRES, RSEVAL, RSACPTFL'],
            ['MH', 'Medical History', 'Events', 'eCRF Medical History', 'MHTERM, MHDECOD, MHBODSYS, MHSTDTC'],
            ['CM', 'Concomitant Medications', 'Interventions', 'eCRF Con Meds', 'CMTRT, CMDECOD, CMDOSE, CMSTDTC'],
            ['DS', 'Disposition', 'Events', 'eCRF Disposition', 'DSSCAT, DSDECOD, DSSTDTC'],
          ],
        },
      ],
    },
    {
      heading: '3. Controlled Terminology',
      level: 1,
      paragraphs: [
        `All SDTM datasets use CDISC Controlled Terminology version 2023-12-15 as the primary codelist source. Additional study-specific codelists are defined for dose levels (ARMCD: VLX50, VLX100, VLX200, VLX400, VLX600) and PK sampling timepoints (PCTPT, mapped to protocol-defined nominal times).`,
        `Adverse event terms are coded using MedDRA v26.0 (PT and SOC levels). Medications are coded using WHODrug Enhanced March 2024 edition. Laboratory tests use LOINC codes where applicable and CDISC standard units.`,
      ],
    },
    {
      heading: '4. Define.xml Specifications',
      level: 1,
      paragraphs: [
        `The define.xml file is generated in compliance with CDISC Define-XML version 2.1 and includes: dataset-level metadata (description, structure, keys), variable-level metadata (label, type, length, origin, codelist), value-level metadata for findings domains, and computational methods for derived variables.`,
        `External dictionaries referenced in define.xml: MedDRA v26.0, WHODrug Enhanced March 2024, CDISC CT 2023-12-15. The define.xml will be validated using Pinnacle 21 and the FDA Business Rules prior to regulatory submission.`,
      ],
    },
    {
      heading: '5. Validation and Submission',
      level: 1,
      paragraphs: [
        `All SDTM datasets will be validated against FDA Business Rules using Pinnacle 21 Community v4.1. The target is zero errors; warnings will be documented and justified in the Reviewer\u2019s Guide. The SDTM package will be included in the eCTD submission under Module 5.3.5.1 (Clinical Study Report datasets).`,
      ],
    },
  ],
};
registerDocument('phase04-sdtm-mapping-specifications', sdtmMapping);

// ============================================================
// 6. phase04-adam-dataset-specifications  (Tier 3)
// ============================================================
const adamSpecs: DocumentContent = {
  documentTitle: `ADaM Dataset Specifications \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-006',
  version: '1.0',
  date: '2024-02-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. ADaM Dataset Derivation Rules',
      level: 1,
      paragraphs: [
        `The Analysis Data Model (ADaM) datasets for Protocol ${STUDIES.phase1.id} are created in compliance with CDISC ADaM Implementation Guide version 1.3 and ADaM Structure for Occurrence Data (ADAE) version 1.0. All ADaM datasets are derived from validated SDTM datasets and include full traceability to source SDTM variables.`,
      ],
      tables: [
        {
          title: 'Table 1-1. ADaM Dataset Inventory',
          headers: ['Dataset', 'Description', 'Structure', 'Source SDTM Domains'],
          rows: [
            ['ADSL', 'Subject-Level Analysis Dataset', 'One record per subject', 'DM, DS, EX, AE, RS'],
            ['ADAE', 'Adverse Event Analysis Dataset', 'One record per AE per subject', 'AE, ADSL'],
            ['ADPC', 'PK Concentration Analysis Dataset', 'One record per sample per subject', 'PC, ADSL, EX'],
            ['ADPP', 'PK Parameter Analysis Dataset', 'One record per parameter per subject per period', 'PP, ADSL'],
            ['ADLB', 'Laboratory Analysis Dataset', 'One record per test per visit per subject', 'LB, ADSL'],
            ['ADEG', 'ECG Analysis Dataset', 'One record per test per visit per subject', 'EG, ADSL'],
            ['ADTR', 'Tumor Response Analysis Dataset', 'One record per assessment per subject', 'TR, TU, RS, ADSL'],
          ],
        },
      ],
    },
    {
      heading: '2. Key Variable Derivation Rules',
      level: 1,
      paragraphs: [
        `ADSL key derivations: TRTSDT/TRTEDT (first/last dose dates from EX); TRT01A (actual treatment: dose level from EX); DLTFL (DLT evaluable flag: Y if completed C1 or had DLT, no major protocol deviations, \u226575% compliance); SAFFL (Safety flag: Y if \u22651 dose received); PKFL (PK evaluable flag: Y if \u22651 evaluable post-dose PK sample).`,
        `ADAE key derivations: CQ01NAM (customized query for hepatotoxicity events: PT in [ALT increased, AST increased, Blood bilirubin increased, Hepatotoxicity, Drug-induced liver injury]); AOCCPFL (first occurrence flag per PT); ATOXGR (CTCAE grade, numeric); AREL (related flag: Y if investigator assessment is Related or Possibly Related).`,
        `ADPC key derivations: AVAL (concentration in ng/mL); NFRLT (nominal relative time from first dose in hours); ARRLT (actual relative time); ABLFL (baseline flag); PPSTRESU (standardized units). BLQ values handled per bioanalytical plan (set to 0 for pre-dose, LLOQ/2 for post-dose).`,
      ],
    },
    {
      heading: '3. Traceability to SDTM',
      level: 1,
      paragraphs: [
        `Full traceability from ADaM variables to source SDTM variables is documented in the ADaM variable-level metadata and define.xml. Each derived variable includes a computational method describing the derivation algorithm. SDTM source variables are identified by dataset, variable name, and any selection criteria applied.`,
        `The ADaM Reviewer\u2019s Guide documents all derivation logic, analysis population definitions, and handling of missing data. The traceability chain follows: eCRF \u2192 SDTM \u2192 ADaM \u2192 Tables/Figures/Listings, ensuring end-to-end data integrity.`,
      ],
    },
  ],
};
registerDocument('phase04-adam-dataset-specifications', adamSpecs);

// ============================================================
// 7. phase04-phase1-clinical-study-report  (TIER 1)
// ============================================================
const phase1Csr: DocumentContent = {
  documentTitle: `Phase 1 Clinical Study Report \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-007',
  version: '1.0',
  date: '2025-03-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Synopsis',
      level: 1,
      paragraphs: [
        `Study Number: ${STUDIES.phase1.id}`,
        `Title: ${STUDIES.phase1.title}`,
        `Phase: 1 (Dose Escalation and Dose Expansion)`,
        `Study Period: ${STUDIES.phase1.startDate} (first patient first visit) to ${STUDIES.phase1.endDate} (last patient last visit)`,
        `Sponsor: ${DRUG.sponsor}`,
        `Patients Enrolled: ${STUDIES.phase1.patients} (30 in dose escalation, 38 in dose expansion)`,
      ],
      tables: [
        {
          title: 'Table 1-1. Study Synopsis',
          headers: ['Parameter', 'Details'],
          rows: [
            ['Primary Objectives', 'Evaluate safety, tolerability, MTD, and RP2D of VLX-4070'],
            ['Secondary Objectives', 'Characterize PK; assess preliminary antitumor activity'],
            ['Study Design', 'Open-label, multicenter, 3+3 dose escalation with expansion'],
            ['Dose Levels Evaluated', DRUG.doses.join(', ') + ' QD'],
            ['MTD', DRUG.mtd],
            ['RP2D', DRUG.recommendedDose],
            ['Primary Endpoints', 'DLT rate, AE incidence/severity'],
            ['Key Efficacy Results', `ORR: ${EFFICACY.phase1.orr}; DCR: ${EFFICACY.phase1.dcrPercent}`],
          ],
        },
      ],
    },
    {
      heading: '2. Study Design and Methods',
      level: 1,
      paragraphs: [
        `This was a Phase 1, open-label, multicenter dose-escalation and dose-expansion study conducted at 12 sites in the United States, United Kingdom, and Japan. The study consisted of two parts: Part A (dose escalation) using a standard 3+3 design across 5 dose levels (${DRUG.doses.join(', ')} QD), and Part B (dose expansion) at the RP2D of ${DRUG.recommendedDose} in patients with KRAS G12C-mutant NSCLC.`,
        `${DRUG.code} was administered orally once daily in continuous 28-day cycles. Dose escalation proceeded based on DLT assessment during Cycle 1 (28 days). Tumor assessments were performed every 8 weeks per RECIST v1.1. Intensive PK sampling was performed on Cycle 1 Day 1 and Day 15. Treatment continued until disease progression, unacceptable toxicity, withdrawal of consent, or investigator decision.`,
      ],
    },
    {
      heading: '3. Study Participants',
      level: 1,
      paragraphs: [
        `A total of ${STUDIES.phase1.patients} patients were enrolled and received at least one dose of ${DRUG.code}. The median age was 63 years (range: 38\u201382). The majority were White (72%), female (54%), and had an ECOG performance status of 1 (62%). The most common primary tumor type was NSCLC (76%), followed by colorectal cancer (15%) and pancreatic cancer (9%). Patients had received a median of 2 prior systemic therapies (range: 1\u20136).`,
      ],
      tables: [
        {
          title: 'Table 3-1. Baseline Demographics and Disease Characteristics',
          headers: ['Characteristic', 'All Patients (N=68)'],
          rows: [
            ['Median age, years (range)', '63 (38\u201382)'],
            ['Female, n (%)', '37 (54.4%)'],
            ['ECOG PS 0 / 1, n (%)', '26 (38.2%) / 42 (61.8%)'],
            ['White / Asian / Black, n (%)', '49 (72.1%) / 14 (20.6%) / 5 (7.4%)'],
            ['NSCLC, n (%)', '52 (76.5%)'],
            ['Colorectal cancer, n (%)', '10 (14.7%)'],
            ['Pancreatic cancer, n (%)', '6 (8.8%)'],
            ['Median prior therapies (range)', '2 (1\u20136)'],
            ['Prior immunotherapy, n (%)', '48 (70.6%)'],
            ['Prior platinum-based chemotherapy, n (%)', '61 (89.7%)'],
          ],
        },
        {
          title: 'Table 3-2. Patient Disposition',
          headers: ['Category', 'N (%)'],
          rows: [
            ['Enrolled', '72'],
            ['Treated (Safety Population)', '68 (100%)'],
            ['Completed dose escalation (Part A)', '30'],
            ['Enrolled in expansion (Part B)', '38'],
            ['Ongoing at data cutoff', '12 (17.6%)'],
            ['Discontinued treatment', '56 (82.4%)'],
            ['  Disease progression', '38 (55.9%)'],
            ['  Adverse event', '9 (13.2%)'],
            ['  Withdrawal of consent', '5 (7.4%)'],
            ['  Investigator decision', '3 (4.4%)'],
            ['  Death', '1 (1.5%)'],
          ],
        },
      ],
    },
    {
      heading: '4. Dose Escalation Results',
      level: 1,
      paragraphs: [
        `Dose escalation proceeded through all 5 planned dose levels. The MTD was determined to be ${DRUG.mtd}. The RP2D was established at ${DRUG.recommendedDose} based on the totality of safety, PK, and preliminary efficacy data.`,
      ],
      tables: [
        {
          title: 'Table 4-1. Dose Escalation Summary and DLT Assessment',
          headers: ['Dose Level', 'N Enrolled', 'N DLT-Evaluable', 'DLTs', 'DLT Rate', 'Decision'],
          rows: [
            ['50 mg QD', '3', '3', '0', '0% (0/3)', 'Escalate'],
            ['100 mg QD', '3', '3', '0', '0% (0/3)', 'Escalate'],
            ['200 mg QD', '6', '6', '1 (Grade 3 ALT elevation)', '17% (1/6)', 'Escalate'],
            ['400 mg QD', '6', '6', '1 (Grade 3 fatigue)', '17% (1/6)', 'Escalate'],
            ['600 mg QD', '6', '6', '2 (Grade 3 ALT \u00d72)', '33% (2/6)', 'MTD exceeded; RP2D = 400 mg QD'],
          ],
          footnotes: [
            'DLT evaluation window: Cycle 1 (28 days)',
            'The 200 mg cohort was expanded to 6 patients after 1 DLT in the initial 3 patients; 0 additional DLTs in the next 3 patients',
          ],
        },
      ],
    },
    {
      heading: '5. Pharmacokinetic Results',
      level: 1,
      paragraphs: [
        `${DRUG.code} was rapidly absorbed following oral administration, with a median Tmax of 2\u20133 hours across all dose levels. Exposure (Cmax and AUC0-24h) increased in an approximately dose-proportional manner across the 50\u2013600 mg dose range. Steady state was achieved by Day 8 with an accumulation ratio of 1.4\u20131.7. The mean terminal half-life at steady state was 10.2 hours at the 400 mg dose level, supporting once-daily dosing.`,
      ],
      tables: [
        {
          title: 'Table 5-1. Pharmacokinetic Parameters by Dose Level (Cycle 1 Day 15, Steady State)',
          headers: ['Parameter', '50 mg (N=3)', '100 mg (N=3)', '200 mg (N=6)', '400 mg (N=6)', '600 mg (N=6)'],
          rows: [
            ['Cmax (ng/mL), Geo Mean (CV%)', '412 (28)', '856 (32)', '1,780 (26)', '3,540 (31)', '4,920 (35)'],
            ['Tmax (h), Median (range)', '2.0 (1\u20133)', '2.5 (1.5\u20134)', '2.0 (1\u20133)', '3.0 (2\u20134)', '2.5 (1.5\u20134)'],
            ['AUC0-24h (ng\u00b7h/mL), Geo Mean (CV%)', '3,180 (24)', '6,720 (29)', '14,100 (22)', '29,400 (27)', '38,500 (33)'],
            ['t1/2 (h), Mean (SD)', '8.4 (1.2)', '9.1 (1.5)', '9.8 (1.8)', '10.2 (2.1)', '10.8 (2.4)'],
            ['CL/F (L/h), Geo Mean (CV%)', '15.7 (26)', '14.9 (31)', '14.2 (24)', '13.6 (28)', '15.6 (35)'],
            ['Rac (AUC), Mean (SD)', '1.42 (0.18)', '1.48 (0.22)', '1.55 (0.19)', '1.62 (0.24)', '1.71 (0.31)'],
          ],
          footnotes: ['Geo Mean = geometric mean; CV% = coefficient of variation; Rac = accumulation ratio (Day 15 / Day 1)'],
        },
      ],
    },
    {
      heading: '6. Safety Results',
      level: 1,
      paragraphs: [
        `In the Safety Population (N=68), treatment-emergent adverse events (TEAEs) were reported in 64 patients (94.1%). The most common TEAEs were diarrhea (${SAFETY.commonAEs[0].allGrade}), nausea (${SAFETY.commonAEs[1].allGrade}), fatigue (${SAFETY.commonAEs[2].allGrade}), ALT increased (${SAFETY.commonAEs[3].allGrade}), and AST increased (${SAFETY.commonAEs[4].allGrade}). Grade \u22653 TEAEs occurred in 28 patients (41.2%). Treatment-related SAEs occurred in 8 patients (11.8%), most commonly Grade 3 ALT elevation (n=4).`,
        `${SAFETY.hepatotoxicityNote}`,
        `Treatment was discontinued due to adverse events in 9 patients (${SAFETY.discontinuationRate}), most commonly hepatotoxicity (n=4) and fatigue (n=2). One treatment-related death occurred (Grade 5 hepatic failure in a patient with extensive hepatic metastases at the 600 mg dose level).`,
      ],
      tables: [
        {
          title: 'Table 6-1. Treatment-Emergent Adverse Events (\u226510% Incidence, Safety Population)',
          headers: ['Adverse Event', 'All Grades, n (%)', 'Grade 1\u20132, n (%)', 'Grade \u22653, n (%)'],
          rows: [
            ['Diarrhea', `23 (${SAFETY.commonAEs[0].allGrade})`, '20 (29.4%)', `3 (${SAFETY.commonAEs[0].grade3Plus})`],
            ['Nausea', `19 (${SAFETY.commonAEs[1].allGrade})`, '18 (26.5%)', `1 (${SAFETY.commonAEs[1].grade3Plus})`],
            ['Fatigue', `16 (${SAFETY.commonAEs[2].allGrade})`, '14 (20.6%)', `2 (${SAFETY.commonAEs[2].grade3Plus})`],
            ['ALT increased', `15 (${SAFETY.commonAEs[3].allGrade})`, '10 (14.7%)', `5 (${SAFETY.commonAEs[3].grade3Plus})`],
            ['AST increased', `14 (${SAFETY.commonAEs[4].allGrade})`, '10 (14.7%)', `4 (${SAFETY.commonAEs[4].grade3Plus})`],
            ['Decreased appetite', `12 (${SAFETY.commonAEs[5].allGrade})`, '11 (16.2%)', `1 (${SAFETY.commonAEs[5].grade3Plus})`],
            ['Vomiting', `11 (${SAFETY.commonAEs[6].allGrade})`, '10 (14.7%)', `1 (${SAFETY.commonAEs[6].grade3Plus})`],
            ['Peripheral edema', `8 (${SAFETY.commonAEs[7].allGrade})`, '8 (11.8%)', `0 (${SAFETY.commonAEs[7].grade3Plus})`],
          ],
          footnotes: ['Patients counted once per preferred term at maximum grade'],
        },
        {
          title: 'Table 6-2. Serious Adverse Events (Safety Population)',
          headers: ['SAE', 'Dose Level', 'N', 'Relatedness', 'Outcome'],
          rows: [
            ['Grade 3 ALT elevation', '200 mg', '1', 'Related', 'Resolved (dose held, resumed at same dose)'],
            ['Grade 3 ALT elevation', '400 mg', '1', 'Related', 'Resolved (dose reduced to 200 mg)'],
            ['Grade 3 ALT elevation', '600 mg', '2', 'Related', 'Resolved (dose discontinued)'],
            ['Grade 3 fatigue', '400 mg', '1', 'Related', 'Resolved (dose held 7 days)'],
            ['Grade 4 ALT elevation', '600 mg', '1', 'Related', 'Resolved (dose discontinued)'],
            ['Grade 3 diarrhea', '400 mg', '1', 'Related', 'Resolved (dose held, resumed)'],
            ['Grade 5 hepatic failure', '600 mg', '1', 'Related', 'Fatal'],
          ],
        },
      ],
    },
    {
      heading: '7. Efficacy Signal — Tumor Response',
      level: 1,
      paragraphs: [
        `In the Response-Evaluable Population (N=61), the overall objective response rate (ORR) was ${EFFICACY.phase1.orr} (14/61 patients; all partial responses), and the disease control rate (DCR) was ${EFFICACY.phase1.dcrPercent} (42/61 patients). ${EFFICACY.phase1.note}. The median duration of response was ${EFFICACY.phase1.medianDor}.`,
        `Responses were observed across dose levels \u2265200 mg, with the highest response rate at the 400 mg dose level (ORR 32% in NSCLC expansion cohort). Among NSCLC patients in Part B (n=38), the ORR was 29% (11/38), consistent with clinically meaningful antitumor activity warranting further evaluation.`,
      ],
      tables: [
        {
          title: 'Table 7-1. Best Overall Response by Dose Level (Response-Evaluable Population)',
          headers: ['Response', '50 mg (N=3)', '100 mg (N=3)', '200 mg (N=5)', '400 mg (N=38)', '600 mg (N=12)', 'Total (N=61)'],
          rows: [
            ['CR', '0', '0', '0', '0', '0', '0 (0%)'],
            ['PR', '0', '0', '1 (20%)', '10 (26%)', '3 (25%)', '14 (23%)'],
            ['SD', '1 (33%)', '2 (67%)', '3 (60%)', '17 (45%)', '5 (42%)', '28 (46%)'],
            ['PD', '2 (67%)', '1 (33%)', '1 (20%)', '9 (24%)', '3 (25%)', '16 (26%)'],
            ['NE', '0', '0', '0', '2 (5%)', '1 (8%)', '3 (5%)'],
            ['ORR (CR+PR)', '0%', '0%', '20%', '26%', '25%', '23%'],
            ['DCR (CR+PR+SD)', '33%', '67%', '80%', '71%', '67%', '69%'],
          ],
          footnotes: ['CR = complete response; PR = partial response; SD = stable disease; PD = progressive disease; NE = not evaluable'],
        },
      ],
    },
    {
      heading: '8. PK/PD Analysis',
      level: 1,
      paragraphs: [
        `Exposure-response analysis demonstrated a positive correlation between ${DRUG.code} steady-state AUC0-24h and both target engagement (pERK inhibition in PBMCs) and antitumor activity. Patients achieving AUC0-24h \u226520,000 ng\u00b7h/mL had significantly higher ORR (31%) compared to those below this threshold (8%; p=0.03, Fisher\u2019s exact test).`,
        `Pharmacodynamic analysis of paired tumor biopsies (available in 18 patients) demonstrated dose-dependent inhibition of pERK (median inhibition: 42% at 200 mg, 78% at 400 mg, 85% at 600 mg) and upregulation of DUSP6 mRNA (a pharmacodynamic marker of MAPK pathway inhibition). Near-maximal target engagement (\u226575% pERK inhibition) was achieved at the 400 mg dose level, supporting the RP2D selection.`,
        `Circulating tumor DNA (ctDNA) analysis showed that >50% reduction in KRAS G12C variant allele frequency at Cycle 3 was associated with subsequent tumor response (sensitivity 86%, specificity 72%), supporting ctDNA as an early response biomarker.`,
      ],
    },
    {
      heading: '9. Dose Recommendation for Phase 2',
      level: 1,
      paragraphs: [
        `Based on the integrated assessment of safety, PK, PK/PD, and preliminary efficacy data from this Phase 1 study, the recommended Phase 2 dose (RP2D) of ${DRUG.code} is ${DRUG.recommendedDose}.`,
        `The rationale for the RP2D of 400 mg QD is as follows: (1) ${DRUG.mtd} \u2014 the MTD of 600 mg QD was associated with dose-limiting hepatotoxicity in 2/6 patients; (2) at 400 mg QD, near-maximal target engagement was achieved (median pERK inhibition 78%); (3) dose-proportional PK up to 600 mg with no evidence of saturation at 400 mg; (4) the 400 mg dose level demonstrated the best benefit-risk profile with clinically meaningful antitumor activity (ORR 26\u201332%) and manageable toxicity; (5) steady-state exposure at 400 mg (AUC0-24h ~29,400 ng\u00b7h/mL) exceeded the target exposure threshold associated with efficacy.`,
      ],
    },
    {
      heading: '10. Conclusions',
      level: 1,
      paragraphs: [
        `Protocol ${STUDIES.phase1.id} successfully established the safety, PK, and preliminary antitumor activity of ${DRUG.code} in patients with advanced KRAS G12C-mutant solid tumors. The MTD was ${DRUG.mtd}, and the RP2D was established at ${DRUG.recommendedDose}.`,
        `${DRUG.code} demonstrated manageable toxicity at the RP2D, with hepatotoxicity and GI events as the primary treatment-related adverse effects. The PK profile supports once-daily oral dosing. Preliminary efficacy signals (ORR ${EFFICACY.phase1.orr}, DCR ${EFFICACY.phase1.dcrPercent}) support further development in KRAS G12C-mutant NSCLC.`,
        `These results support the initiation of Phase 2 (Protocol ${STUDIES.phase2.id}, BEACON-Lung) to further evaluate ${DRUG.code} at ${DRUG.recommendedDose} in patients with previously treated KRAS G12C-mutant NSCLC.`,
      ],
    },
  ],
};
registerDocument('phase04-phase1-clinical-study-report', phase1Csr);

// ============================================================
// 8. phase04-clinical-pharmacology-data  (Tier 2)
// ============================================================
const clinPharmData: DocumentContent = {
  documentTitle: `Clinical Pharmacology Data Package \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-P1-008',
  version: '1.0',
  date: '2025-04-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. Population Pharmacokinetic Model',
      level: 1,
      paragraphs: [
        `A population PK model was developed using plasma concentration data from ${STUDIES.phase1.patients} patients in Study ${STUDIES.phase1.id} and ${STUDIES.phase1Food.patients} healthy volunteers in Study ${STUDIES.phase1Food.id} (total: 3,842 concentrations). The final model was a two-compartment model with first-order absorption and mixed linear/nonlinear (Michaelis-Menten) elimination.`,
        `Key population PK parameter estimates: apparent clearance (CL/F) = 13.8 L/h (IIV 32%), central volume (Vc/F) = 78.4 L (IIV 28%), absorption rate constant (ka) = 1.24 h\u207b\u00b9 (IIV 45%), peripheral volume (Vp/F) = 42.1 L, and intercompartmental clearance (Q/F) = 5.6 L/h. Body weight and albumin were identified as statistically significant covariates on CL/F (p<0.001), but the effects were modest (<20% change) and did not warrant dose adjustment.`,
      ],
    },
    {
      heading: '2. Food-Effect Study Results',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.phase1Food.id} was a Phase 1, open-label, randomized, two-period crossover study in ${STUDIES.phase1Food.patients} healthy volunteers evaluating the effect of a high-fat meal on the PK of a single 400 mg dose of ${DRUG.code}.`,
        `Under fed conditions (high-fat meal), ${DRUG.code} Cmax decreased by 22% and AUC0-inf decreased by 12% compared to fasted conditions. The 90% confidence intervals for the geometric mean ratios (fed/fasted) were within the 80\u2013125% bioequivalence bounds for AUC (90% CI: 82.4\u201394.1%) but not for Cmax (90% CI: 71.2\u201385.6%). Based on these results, ${DRUG.code} may be administered with or without food, as the modest reduction in exposure under fed conditions is not considered clinically meaningful based on exposure-response analysis.`,
      ],
      tables: [
        {
          title: 'Table 2-1. Food-Effect Study PK Results (400 mg Single Dose)',
          headers: ['Parameter', 'Fasted (N=24)', 'Fed (N=24)', 'Ratio (Fed/Fasted)', '90% CI'],
          rows: [
            ['Cmax (ng/mL), Geo Mean', '3,280', '2,558', '0.780', '0.712\u20130.856'],
            ['AUC0-inf (ng\u00b7h/mL), Geo Mean', '32,400', '28,512', '0.880', '0.824\u20130.941'],
            ['Tmax (h), Median', '2.5', '4.0', '\u2014', '\u2014'],
            ['t1/2 (h), Mean', '10.4', '10.8', '\u2014', '\u2014'],
          ],
        },
      ],
    },
    {
      heading: '3. QTc Assessment',
      level: 1,
      paragraphs: [
        `A dedicated QT study was not conducted. Instead, a concentration-QTc (C-QTc) analysis was performed using intensive triplicate ECG and PK data from Study ${STUDIES.phase1.id} (N=68 patients, 1,224 matched ECG-PK pairs).`,
        `A pre-specified linear mixed-effects model demonstrated a statistically significant positive relationship between ${DRUG.code} plasma concentration and \u0394QTcF (slope = 0.0042 ms per ng/mL, 95% CI: 0.0018\u20130.0066). At the geometric mean Cmax at the RP2D (3,540 ng/mL), the predicted \u0394QTcF was 14.9 ms (90% upper CI: 19.3 ms). At the supratherapeutic Cmax of 4,920 ng/mL (600 mg), the predicted \u0394QTcF was 20.7 ms (90% upper CI: 26.4 ms).`,
        `${SAFETY.qtcNote} ECG monitoring is recommended during treatment with ${DRUG.code}, particularly during the first 2 cycles and following dose escalation.`,
      ],
    },
    {
      heading: '4. Drug-Drug Interaction Potential',
      level: 1,
      paragraphs: [
        `In vitro DDI assessment: ${DRUG.code} is primarily metabolized by CYP3A4 (65%) and CYP2C8 (20%). In vitro, ${DRUG.code} is a weak inhibitor of CYP3A4 (IC50 = 18 \u00b5M, >5\u00d7 clinical Cmax) and CYP2D6 (IC50 = 25 \u00b5M). No clinically significant inhibition of CYP1A2, CYP2B6, CYP2C9, CYP2C19, or CYP2E1 was observed (all IC50 >50 \u00b5M). ${DRUG.code} showed no evidence of CYP3A4 induction in human hepatocyte cultures at concentrations up to 10 \u00b5M.`,
        `${DRUG.code} is a substrate of P-glycoprotein (P-gp) and BCRP in vitro. Co-administration with strong CYP3A4 inhibitors (e.g., ketoconazole, itraconazole) is expected to increase ${DRUG.code} exposure and is not recommended. Physiologically-based pharmacokinetic (PBPK) modeling predicts a 2.8-fold increase in AUC with strong CYP3A4 inhibitors and a 65% decrease with strong CYP3A4 inducers (e.g., rifampin).`,
      ],
    },
    {
      heading: '5. Special Population Considerations',
      level: 1,
      paragraphs: [
        `Renal impairment: Based on population PK analysis, mild-to-moderate renal impairment (eGFR 30\u201389 mL/min/1.73m\u00b2) had no clinically significant effect on ${DRUG.code} clearance. Patients with severe renal impairment (eGFR <30 mL/min/1.73m\u00b2) were excluded from clinical studies; a dedicated renal impairment study is planned.`,
        `Hepatic impairment: Patients with baseline hepatic impairment (total bilirubin >1.5\u00d7 ULN or AST >2.5\u00d7 ULN) were excluded from Study ${STUDIES.phase1.id}. Given the hepatic metabolism and the hepatotoxicity signal, a dedicated hepatic impairment study is planned prior to NDA submission. Use of ${DRUG.code} in patients with moderate or severe hepatic impairment is not recommended until data are available.`,
      ],
    },
  ],
};
registerDocument('phase04-clinical-pharmacology-data', clinPharmData);

// ============================================================
// 9. phase04-bioanalytical-method-validation  (Tier 3)
// ============================================================
const bioanalyticalValidation: DocumentContent = {
  documentTitle: `Bioanalytical Method Validation Report \u2014 ${DRUG.code} in Human Plasma`,
  documentNumber: 'RPT-P1-009',
  version: '1.0',
  date: '2023-07-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. LC-MS/MS Method for VLX-4070 in Human Plasma',
      level: 1,
      paragraphs: [
        `A liquid chromatography-tandem mass spectrometry (LC-MS/MS) method was developed and validated for the quantitative determination of ${DRUG.code} in human plasma (K2EDTA) at Celerion Bioanalytical Laboratory (Lincoln, NE). The method employs protein precipitation extraction with acetonitrile, reversed-phase chromatographic separation on a Waters Acquity BEH C18 column (50 \u00d7 2.1 mm, 1.7 \u00b5m), and detection by positive electrospray ionization (ESI+) multiple reaction monitoring (MRM).`,
        `The MRM transitions monitored are m/z 488.2 \u2192 234.1 (${DRUG.code}) and m/z 492.2 \u2192 238.1 (VLX-4070-d4, internal standard). The chromatographic run time is 3.5 minutes with retention times of 1.8 min (${DRUG.code}) and 1.8 min (IS).`,
      ],
    },
    {
      heading: '2. Validation Parameters',
      level: 1,
      tables: [
        {
          title: 'Table 2-1. Method Validation Summary',
          headers: ['Parameter', 'Acceptance Criteria', 'Result', 'Status'],
          rows: [
            ['LLOQ', 'S/N \u226510; CV \u226420%; Bias \u00b120%', '1.00 ng/mL (CV 8.2%, Bias +3.4%)', 'Pass'],
            ['Calibration range', 'r\u00b2 \u22650.99 for \u22654/6 curves', '1.00\u20135,000 ng/mL (r\u00b2 = 0.9994)', 'Pass'],
            ['Intra-run precision (CV%)', '\u226415% (\u226420% at LLOQ)', 'QC Low: 4.8%, QC Mid: 3.2%, QC High: 2.9%', 'Pass'],
            ['Inter-run precision (CV%)', '\u226415% (\u226420% at LLOQ)', 'QC Low: 6.1%, QC Mid: 4.5%, QC High: 3.8%', 'Pass'],
            ['Accuracy (% Bias)', '\u00b115% (\u00b120% at LLOQ)', 'QC Low: +2.8%, QC Mid: -1.4%, QC High: +0.9%', 'Pass'],
            ['Selectivity', 'No interference at RT of analyte/IS in \u22654/6 blank lots', '6/6 lots: no interference', 'Pass'],
            ['Carryover', '\u226420% of LLOQ after ULOQ', '<5% of LLOQ', 'Pass'],
            ['Recovery', 'Consistent across QC levels', '82\u201388% (CV 4.1%)', 'Pass'],
            ['Matrix effect (IS-normalized)', 'CV \u226415% across \u22656 lots', 'CV 5.8% (range: 94\u2013106%)', 'Pass'],
          ],
        },
      ],
    },
    {
      heading: '3. Stability Data',
      level: 1,
      tables: [
        {
          title: 'Table 3-1. Stability Summary',
          headers: ['Condition', 'Duration', 'QC Low (% Nominal)', 'QC High (% Nominal)', 'Status'],
          rows: [
            ['Bench-top (RT)', '24 hours', '97.2%', '98.8%', 'Stable'],
            ['Freeze-thaw (\u221220\u00b0C)', '5 cycles', '95.4%', '97.6%', 'Stable'],
            ['Long-term (\u221220\u00b0C)', '12 months', '93.8%', '96.2%', 'Stable'],
            ['Long-term (\u221270\u00b0C)', '12 months', '97.1%', '98.4%', 'Stable'],
            ['Processed (autosampler, 10\u00b0C)', '72 hours', '96.5%', '98.1%', 'Stable'],
            ['Stock solution (RT)', '6 hours', '98.4%', '99.1%', 'Stable'],
            ['Stock solution (2\u20138\u00b0C)', '30 days', '97.8%', '98.9%', 'Stable'],
          ],
          footnotes: ['Acceptance criteria: \u00b115% of nominal; RT = room temperature (approximately 22\u00b0C)'],
        },
      ],
    },
  ],
};
registerDocument('phase04-bioanalytical-method-validation', bioanalyticalValidation);

// ============================================================
// 10. phase04-safety-monitoring-plan  (Tier 2)
// ============================================================
const safetyMonitoringPlan: DocumentContent = {
  documentTitle: `Data Safety Monitoring Board (DSMB) Charter and Safety Monitoring Plan \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-010',
  version: '1.0',
  date: '2023-09-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. DSMB Charter',
      level: 1,
      paragraphs: [
        `An independent Data Safety Monitoring Board (DSMB) has been established for Protocol ${STUDIES.phase1.id} to provide ongoing safety oversight and to make recommendations to the Sponsor regarding study continuation, modification, or termination based on accumulating safety data.`,
        `The DSMB operates independently of the Sponsor and study investigators. All DSMB deliberations and recommendations are confidential. The DSMB reports its recommendations to the Sponsor\u2019s Chief Medical Officer.`,
      ],
    },
    {
      heading: '2. DSMB Membership and Meeting Schedule',
      level: 1,
      paragraphs: [
        `The DSMB consists of 4 independent members: (1) Chair \u2014 a medical oncologist with expertise in thoracic malignancies and early-phase trial conduct; (2) a hepatologist with expertise in drug-induced liver injury; (3) a cardiologist with expertise in oncology-related cardiac toxicity; (4) an independent biostatistician who prepares unblinded safety summaries.`,
        `Scheduled DSMB meetings are held: (a) prior to patient enrollment (organizational meeting); (b) after completion of DLT evaluation at each dose level (5 planned meetings during escalation); (c) quarterly during the expansion phase; (d) ad hoc as needed based on emerging safety signals. Meetings are conducted via secure videoconference with minutes prepared by an independent medical writer.`,
      ],
    },
    {
      heading: '3. Unblinding Procedures and Stopping Rules',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.phase1.id} is an open-label study; therefore, formal unblinding procedures are not applicable. All patients, investigators, and the Sponsor are aware of assigned dose levels.`,
        `The DSMB may recommend study suspension or termination based on the following pre-specified stopping rules:`,
      ],
      lists: [
        {
          items: [
            'Any treatment-related death (mandatory DSMB meeting within 72 hours)',
            '\u22652 DLTs at any dose level (dose level declared as exceeding MTD)',
            '\u22653 SAEs of the same type across any dose level (cumulative safety signal)',
            'Any case meeting Hy\u2019s Law criteria (ALT \u22653\u00d7 ULN + bilirubin \u22652\u00d7 ULN without alternative explanation)',
            'Aggregate hepatotoxicity rate (Grade \u22653 ALT/AST) exceeding 20% at any dose level',
            'Any QTcF >500 ms event on confirmed repeat ECG',
          ],
        },
      ],
    },
    {
      heading: '4. Safety Review Cadence',
      level: 1,
      paragraphs: [
        `In addition to DSMB oversight, the Sponsor\u2019s internal Safety Review Committee (SRC) meets weekly during dose escalation and biweekly during expansion to review all safety data. The SRC includes the Medical Monitor, Safety Physician, Clinical Operations Lead, and Biostatistician. The SRC reviews: (a) individual patient safety narratives for all SAEs; (b) aggregate AE data by dose level; (c) laboratory trend analysis (LFTs, QTcF); and (d) dose modification and discontinuation rates.`,
      ],
    },
    {
      heading: '5. Hepatotoxicity Monitoring Algorithm',
      level: 1,
      paragraphs: [
        `Given the nonclinical signal for hepatotoxicity and the clinical observation of ALT/AST elevations, a prospective hepatotoxicity monitoring and management algorithm has been implemented:`,
      ],
      tables: [
        {
          title: 'Table 5-1. Hepatotoxicity Management Algorithm',
          headers: ['ALT/AST Level', 'Action', 'Monitoring Frequency', 'Rechallenge'],
          rows: [
            ['Grade 1 (>ULN\u20133\u00d7 ULN)', 'Continue dosing', 'Twice weekly until resolution', 'N/A'],
            ['Grade 2 (>3\u20135\u00d7 ULN)', 'Hold dose', 'Every 2\u20133 days until \u2264 Grade 1', 'Resume at same dose; if recurs, dose reduce'],
            ['Grade 3 (>5\u201320\u00d7 ULN)', 'Hold dose', 'Every 2\u20133 days until \u2264 Grade 1', 'Resume at one dose level lower; if recurs, discontinue'],
            ['Grade 4 (>20\u00d7 ULN)', 'Discontinue permanently', 'Daily until resolution', 'No rechallenge'],
            ['Hy\u2019s Law (ALT \u22653\u00d7 + Bili \u22652\u00d7 ULN)', 'Discontinue permanently', 'Daily; hepatology consult', 'No rechallenge'],
          ],
          footnotes: [
            'ULN = upper limit of normal; all ALT/AST elevations must be confirmed with repeat testing within 48\u201372 hours',
            'Concurrent medications with hepatotoxic potential should be evaluated and discontinued if possible',
          ],
        },
      ],
    },
    {
      heading: '6. Expedited Safety Reporting',
      level: 1,
      paragraphs: [
        `All SAEs are reported to the Sponsor\u2019s Drug Safety and Pharmacovigilance department within 24 hours of investigator awareness. Suspected unexpected serious adverse reactions (SUSARs) that are fatal or life-threatening are reported to FDA within 7 calendar days (IND Safety Report, 21 CFR 312.32). All other SUSARs are reported within 15 calendar days. Annual IND safety reports (21 CFR 312.33) summarize all safety data from the preceding year.`,
      ],
    },
  ],
};
registerDocument('phase04-safety-monitoring-plan', safetyMonitoringPlan);

// ============================================================
// 11. phase04-ind-safety-reports  (Tier 3)
// ============================================================
const indSafetyReports: DocumentContent = {
  documentTitle: `IND Safety Reporting \u2014 ${STUDIES.phase1.id}`,
  documentNumber: 'RPT-P1-011',
  version: '1.0',
  date: '2024-06-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. IND Safety Report Template and Reporting Criteria',
      level: 1,
      paragraphs: [
        `IND Safety Reports for Protocol ${STUDIES.phase1.id} are submitted to the FDA in compliance with 21 CFR 312.32. The following events require expedited reporting:`,
      ],
      lists: [
        {
          items: [
            '7-Day Reports: Any fatal or life-threatening suspected adverse reaction that is unexpected (not listed in the Reference Safety Information section of the Investigator\u2019s Brochure)',
            '15-Day Reports: All other serious, unexpected, suspected adverse reactions; any finding from epidemiological, animal, or in vitro studies suggesting a significant risk to trial subjects',
            'Annual IND Safety Report (21 CFR 312.33): Comprehensive summary of all IND safety information submitted within 60 days of the IND anniversary date',
          ],
        },
      ],
      paragraphs: [
        `Each IND Safety Report includes: a MedWatch 3500A form, a narrative summary of the event, relevant laboratory and diagnostic data, investigator\u2019s assessment of causality, current Investigator\u2019s Brochure reference safety information, and an analysis of similar events across the clinical program.`,
      ],
    },
    {
      heading: '2. Example SUSAR Narrative \u2014 Grade 4 ALT Elevation',
      level: 1,
      paragraphs: [
        `IND Safety Report No. ISR-2024-003`,
        `Reporting Type: 15-Day Report (Serious, Unexpected, Related)`,
        `Subject: VLX-001-012 | Age/Sex: 58-year-old male | Dose: 600 mg QD | Study Day: 22`,
        `Event: Grade 4 ALT elevation (ALT 1,248 U/L; 31.2\u00d7 ULN; baseline 28 U/L)`,
        `Narrative: A 58-year-old male with metastatic KRAS G12C-mutant NSCLC (2 prior lines of therapy) enrolled in the 600 mg QD cohort experienced asymptomatic Grade 4 ALT elevation on Study Day 22 (Cycle 1 Day 22). Routine laboratory monitoring revealed ALT 1,248 U/L (31.2\u00d7 ULN; baseline 28 U/L), AST 642 U/L (16.1\u00d7 ULN; baseline 24 U/L), total bilirubin 1.2 mg/dL (within normal limits), and ALP 142 U/L (1.5\u00d7 ULN).`,
        `${DRUG.code} was permanently discontinued on Study Day 22. Hepatology consultation was obtained; viral hepatitis serologies were negative, abdominal ultrasound showed stable hepatic metastases without biliary obstruction, and autoimmune hepatitis panel was negative. The patient was monitored with daily LFTs. ALT peaked at 1,312 U/L on Day 24, then declined progressively: 845 U/L (Day 28), 342 U/L (Day 35), 86 U/L (Day 42), and 38 U/L (Day 56, near baseline).`,
        `The investigator assessed the event as related to ${DRUG.code}. This event is classified as unexpected, as Grade 4 ALT elevation was not listed in the Reference Safety Information of the Investigator\u2019s Brochure at the time of occurrence (IB Version 1.0 listed expected hepatotoxicity as Grade 1\u20133). The IB has been updated (Version 2.0) to include Grade 4 ALT elevation as an expected adverse reaction.`,
      ],
    },
    {
      heading: '3. Follow-Up Report',
      level: 1,
      paragraphs: [
        `A follow-up IND Safety Report (ISR-2024-003-FU1) was submitted 30 days after the initial report confirming complete resolution of the ALT elevation. The patient\u2019s ALT returned to Grade 0 (38 U/L) by Day 56. No sequelae were observed. The patient was discontinued from the study and transitioned to alternative anticancer therapy (docetaxel).`,
        `Outcome: Resolved without sequelae. The event contributed to the determination that 600 mg QD exceeds the MTD, and the RP2D was established at ${DRUG.recommendedDose}.`,
      ],
    },
  ],
};
registerDocument('phase04-ind-safety-reports', indSafetyReports);

// ============================================================
// 12. phase04-eop1-meeting-package  (Tier 2)
// ============================================================
const eop1Meeting: DocumentContent = {
  documentTitle: `End-of-Phase 1 (EOP1) Meeting Briefing Document \u2014 ${DRUG.fullName}`,
  documentNumber: 'RPT-P1-012',
  version: '1.0',
  date: '2025-02-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: '1. End-of-Phase 1 Briefing Document',
      level: 1,
      paragraphs: [
        `Meeting Type: Type B End-of-Phase 1 Meeting`,
        `Product: ${DRUG.fullName}`,
        `IND Number: ${REGULATORY.indNumber}`,
        `Sponsor: ${DRUG.sponsor}`,
        `Requested Meeting Date: March 2025`,
        `${DRUG.sponsor} requests an End-of-Phase 1 meeting with the Division of Oncology Products 1 to discuss the Phase 1 clinical data for ${DRUG.code} and the proposed Phase 2 development plan. The objectives of this meeting are to: (1) present the Phase 1 safety, PK, and preliminary efficacy data; (2) discuss the proposed RP2D and dose selection rationale; (3) obtain FDA feedback on the proposed Phase 2 study design; and (4) discuss the overall clinical development strategy and regulatory pathway.`,
      ],
    },
    {
      heading: '2. Phase 1 Safety and PK Summary',
      level: 1,
      paragraphs: [
        `Study ${STUDIES.phase1.id} enrolled ${STUDIES.phase1.patients} patients with advanced KRAS G12C-mutant solid tumors across 5 dose levels (${DRUG.doses.join(', ')} QD). The MTD was ${DRUG.mtd}. The RP2D was established at ${DRUG.recommendedDose}.`,
        `Key safety findings at the RP2D (400 mg QD, N=44 including escalation and expansion): The most common TEAEs were diarrhea (36%), nausea (30%), fatigue (25%), and ALT increased (20%). Grade \u22653 TEAEs occurred in 36% of patients. The discontinuation rate due to AEs was 11%. No treatment-related deaths occurred at the RP2D.`,
        `PK at the RP2D: Geometric mean Cmax = 3,540 ng/mL; AUC0-24h = 29,400 ng\u00b7h/mL; t1/2 = 10.2 hours. Exposure was dose-proportional. Steady state was achieved by Day 8. Food had no clinically significant effect on AUC (Study ${STUDIES.phase1Food.id}).`,
      ],
    },
    {
      heading: '3. Dose Selection Rationale for Phase 2',
      level: 1,
      paragraphs: [
        `The RP2D of ${DRUG.recommendedDose} was selected based on the integrated assessment of safety, PK, PK/PD, and preliminary efficacy:`,
      ],
      lists: [
        {
          items: [
            `Safety: At 400 mg QD, the DLT rate was 17% (1/6), with manageable toxicity. At 600 mg QD (MTD), the DLT rate was 33% (2/6), with Grade 3 hepatotoxicity as the dose-limiting toxicity.`,
            `PK: Dose-proportional exposure through 600 mg. At 400 mg QD, steady-state AUC0-24h (29,400 ng\u00b7h/mL) exceeded the target efficacy threshold (20,000 ng\u00b7h/mL) identified in exposure-response analysis.`,
            `PK/PD: Near-maximal target engagement (78% pERK inhibition) was achieved at 400 mg. Incremental target engagement at 600 mg (85%) did not justify the additional toxicity.`,
            `Efficacy: ORR at 400 mg in NSCLC expansion (32%) was numerically higher than at other dose levels and clinically meaningful.`,
          ],
        },
      ],
    },
    {
      heading: '4. Proposed Phase 2 Design',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} proposes to conduct Protocol ${STUDIES.phase2.id} (BEACON-Lung), a Phase 2, open-label, single-arm study of ${DRUG.code} ${DRUG.recommendedDose} in approximately ${STUDIES.phase2.patients} patients with previously treated KRAS G12C-mutant NSCLC.`,
      ],
      tables: [
        {
          title: 'Table 4-1. Proposed Phase 2 Study Design',
          headers: ['Parameter', 'Description'],
          rows: [
            ['Study', `${STUDIES.phase2.id} (BEACON-Lung)`],
            ['Design', 'Open-label, single-arm, multicenter'],
            ['Population', 'Adults with KRAS G12C-mutant NSCLC, \u22651 prior platinum-based chemotherapy and \u22651 prior anti-PD-(L)1 therapy'],
            ['Treatment', `${DRUG.code} ${DRUG.recommendedDose}, continuous 28-day cycles`],
            ['Sample Size', `${STUDIES.phase2.patients} patients (Simon two-stage: 48 Stage 1, 98 Stage 2)`],
            ['Primary Endpoint', 'ORR per RECIST v1.1 by blinded independent central review (BICR)'],
            ['Secondary Endpoints', 'DOR, PFS, OS, safety, ORR by investigator'],
            ['Exploratory Endpoints', 'Biomarkers (ctDNA, PD-L1, TMB, co-mutations), patient-reported outcomes (EORTC QLQ-C30)'],
            ['Statistical Design', 'Simon two-stage: H0 ORR \u226415%, H1 ORR \u226530%; one-sided \u03b1=0.025, power=90%'],
            ['Planned Duration', `${STUDIES.phase2.startDate} to ${STUDIES.phase2.endDate}`],
          ],
        },
      ],
    },
    {
      heading: '5. Questions for FDA',
      level: 1,
      paragraphs: [
        `${DRUG.sponsor} seeks FDA\u2019s guidance on the following questions:`,
      ],
      lists: [
        {
          ordered: true,
          items: [
            `Does the FDA agree with the RP2D of ${DRUG.recommendedDose} and the dose selection rationale?`,
            `Does the FDA agree with the proposed Phase 2 single-arm design with ORR as the primary endpoint for potential accelerated approval?`,
            `Does the FDA agree with the use of blinded independent central review (BICR) for the primary efficacy assessment?`,
            `Does the FDA have recommendations regarding the companion diagnostic development strategy for KRAS G12C mutation testing?`,
            `Does the FDA agree that the proposed Phase 2 study, if successful, could serve as the basis for a Breakthrough Therapy Designation request?`,
            `Would the FDA recommend initiating the confirmatory Phase 3 study (vs. docetaxel) concurrently with the Phase 2 study?`,
            `Does the FDA have recommendations regarding the hepatotoxicity management algorithm and REMS considerations?`,
          ],
        },
      ],
    },
  ],
};
registerDocument('phase04-eop1-meeting-package', eop1Meeting);
