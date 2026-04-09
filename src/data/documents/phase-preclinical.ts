import { registerDocument } from './index';
import { DRUG, TIMELINE } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// =============================================================================
// Phase 02 — Preclinical Development
// =============================================================================

// ---------------------------------------------------------------------------
// 1. GLP Toxicology Study Reports (TIER 1)
// ---------------------------------------------------------------------------
const glpToxicologyReports: DocumentContent = {
  documentTitle: `GLP Toxicology Study Reports: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-001',
  version: '2.0',
  date: TIMELINE.preclinicalComplete,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Executive Summary',
      level: 1,
      paragraphs: [
        `This report provides an integrated summary of the GLP-compliant toxicology studies conducted with ${DRUG.code} (${DRUG.name}) to support the Investigational New Drug (IND) application. The toxicology program was designed in accordance with ICH M3(R2) and ICH S9 guidelines for pharmaceuticals intended for the treatment of advanced cancer.`,
        `Studies included single-dose toxicity in rats and dogs, 28-day repeat-dose toxicity with a 14-day recovery period in rats and dogs, and supporting toxicokinetic assessments. The principal target organ of toxicity was the liver, with dose-dependent hepatocellular hypertrophy and bile duct hyperplasia observed at higher doses. All findings were reversible following the 14-day recovery period.`,
      ],
    },
    {
      heading: 'Single-Dose Toxicity Studies',
      level: 1,
      paragraphs: [
        `Single-dose oral toxicity studies were conducted in Sprague-Dawley rats (n=5/sex/group) and beagle dogs (n=2/sex/group) at dose levels of 0, 100, 300, 1000, and 2000 mg/kg (rats) or 0, 50, 150, 500, and 1000 mg/kg (dogs). Animals were observed for 14 days post-dose.`,
      ],
      tables: [
        {
          title: 'Table 1: Single-Dose Toxicity Summary',
          headers: ['Species', 'Route', 'Max Dose (mg/kg)', 'Mortality', 'MTD (mg/kg)', 'Key Findings'],
          rows: [
            ['Rat (SD)', 'Oral gavage', '2000', 'None', '>2000', 'Transient ↓ activity, ↓ food consumption at ≥1000 mg/kg'],
            ['Dog (Beagle)', 'Oral capsule', '1000', 'None', '>1000', 'Emesis at ≥500 mg/kg; ↑ ALT/AST at 1000 mg/kg (reversible)'],
          ],
          footnotes: [
            'SD = Sprague-Dawley. MTD = maximum tolerated dose. All findings resolved within 7 days.',
          ],
        },
      ],
    },
    {
      heading: '28-Day Repeat-Dose Toxicity Study in Rats',
      level: 1,
      paragraphs: [
        `A 28-day GLP repeat-dose toxicity study was conducted in Sprague-Dawley rats (n=15/sex/group, including 5/sex/group for 14-day recovery) with daily oral gavage doses of 0 (vehicle), 10, 30, 100, and 300 mg/kg/day. The study was conducted at Covance Laboratories (Study No. 8472-501) under the direction of Study Director Dr. Sarah Mitchell.`,
      ],
      tables: [
        {
          title: 'Table 2: 28-Day Rat Toxicity — Key Findings by Dose Level',
          headers: ['Parameter', '0 (Vehicle)', '10 mg/kg/day', '30 mg/kg/day', '100 mg/kg/day', '300 mg/kg/day'],
          rows: [
            ['Mortality', '0/30', '0/30', '0/30', '0/30', '0/30'],
            ['Body weight change (% vs control)', '—', '-0.5%', '-1.2%', '-3.8%*', '-7.4%**'],
            ['Food consumption (% vs control)', '—', '-1%', '-3%', '-8%*', '-15%**'],
            ['ALT (U/L) — Day 28, M/F', '42/38', '45/40', '68/55*', '124/98**', '285/242**'],
            ['AST (U/L) — Day 28, M/F', '78/72', '82/75', '95/88', '168/145**', '342/298**'],
            ['Total bilirubin (mg/dL)', '0.12', '0.14', '0.18', '0.28*', '0.52**'],
            ['Liver weight (% of BW, M)', '3.2%', '3.3%', '3.6%', '4.2%**', '5.1%**'],
            ['Hepatocellular hypertrophy', 'None', 'None', 'Minimal', 'Mild-moderate', 'Moderate-marked'],
            ['Bile duct hyperplasia', 'None', 'None', 'None', 'Minimal', 'Mild'],
          ],
          footnotes: [
            '* p<0.05 vs. control; ** p<0.01 vs. control (Dunnett\'s test).',
            'M = male; F = female. ALT/AST values are group means.',
            'NOAEL = 10 mg/kg/day (males and females) based on hepatic findings at ≥30 mg/kg/day.',
          ],
        },
      ],
    },
    {
      heading: '28-Day Repeat-Dose Toxicity Study in Dogs',
      level: 1,
      paragraphs: [
        `A 28-day GLP repeat-dose toxicity study was conducted in beagle dogs (n=4/sex/group, including 2/sex/group for 14-day recovery) with daily oral capsule doses of 0 (vehicle), 3, 10, 30, and 100 mg/kg/day. The study was conducted at Charles River Laboratories (Study No. 20215478) under the direction of Study Director Dr. James Rodriguez.`,
      ],
      tables: [
        {
          title: 'Table 3: 28-Day Dog Toxicity — Key Findings by Dose Level',
          headers: ['Parameter', '0 (Vehicle)', '3 mg/kg/day', '10 mg/kg/day', '30 mg/kg/day', '100 mg/kg/day'],
          rows: [
            ['Mortality', '0/8', '0/8', '0/8', '0/8', '0/8'],
            ['Emesis (incidence)', '0/8', '0/8', '1/8', '3/8', '6/8'],
            ['Body weight change (% vs control)', '—', '+0.2%', '-1.5%', '-4.2%*', '-9.8%**'],
            ['ALT (U/L) — Day 28', '28', '32', '48', '95*', '225**'],
            ['AST (U/L) — Day 28', '22', '25', '35', '72*', '185**'],
            ['ALP (U/L) — Day 28', '65', '70', '88', '142*', '310**'],
            ['Liver weight (% of BW)', '2.8%', '2.9%', '3.1%', '3.8%*', '4.6%**'],
            ['Hepatocellular hypertrophy', 'None', 'None', 'Minimal', 'Mild', 'Moderate'],
            ['Bile duct hyperplasia', 'None', 'None', 'None', 'Minimal', 'Mild-moderate'],
          ],
          footnotes: [
            '* p<0.05; ** p<0.01 vs. control. NOAEL = 3 mg/kg/day based on hepatic findings at ≥10 mg/kg/day.',
          ],
        },
      ],
    },
    {
      heading: 'NOAEL/LOAEL Determination',
      level: 1,
      tables: [
        {
          title: 'Table 4: NOAEL/LOAEL Summary',
          headers: ['Species', 'Study Duration', 'NOAEL (mg/kg/day)', 'LOAEL (mg/kg/day)', 'Basis for NOAEL', 'AUC₀₋₂₄ at NOAEL (ng·h/mL)'],
          rows: [
            ['Rat (SD)', '28 days', '10', '30', 'Hepatic enzyme elevations, hepatocellular hypertrophy at ≥30 mg/kg/day', '1,420'],
            ['Dog (Beagle)', '28 days', '3', '10', 'Hepatic enzyme elevations, hepatocellular hypertrophy at ≥10 mg/kg/day', '980'],
          ],
          footnotes: [
            'AUC values from toxicokinetic satellite groups on Day 28.',
            'The dog is the more sensitive species; dog NOAEL (3 mg/kg/day) used for human dose calculation.',
          ],
        },
      ],
    },
    {
      heading: 'Histopathology Findings',
      level: 1,
      paragraphs: [
        `The principal target organ of toxicity for ${DRUG.code} in both species was the liver. Microscopic findings included:`,
        'All hepatic findings were fully reversible after the 14-day recovery period, with no residual histopathological changes in recovery group animals at any dose level.',
      ],
      lists: [
        {
          ordered: false,
          items: [
            'Hepatocellular hypertrophy: Centrilobular hypertrophy (zone 3) was observed in rats at ≥30 mg/kg/day and dogs at ≥10 mg/kg/day. Severity was dose-dependent, ranging from minimal to marked. Hypertrophy was associated with increased smooth endoplasmic reticulum consistent with enzyme induction.',
            'Bile duct hyperplasia: Minimal to mild periportal bile duct hyperplasia was observed in rats at ≥100 mg/kg/day and dogs at ≥30 mg/kg/day. No biliary obstruction or cholestasis was noted.',
            'Single-cell hepatocyte necrosis: Rare individual hepatocyte necrosis was observed only at the highest doses (300 mg/kg/day in rats, 100 mg/kg/day in dogs).',
            'No findings in other organs: Comprehensive histopathological examination of 45 tissues per animal revealed no treatment-related findings outside the liver.',
          ],
        },
      ],
    },
    {
      heading: 'Clinical Pathology',
      level: 1,
      tables: [
        {
          title: 'Table 5: Hematology Parameters — Rat 28-Day Study (Day 28)',
          headers: ['Parameter', 'Control', '10 mg/kg', '30 mg/kg', '100 mg/kg', '300 mg/kg', 'Reference Range'],
          rows: [
            ['WBC (×10³/μL)', '8.2', '8.5', '8.1', '7.8', '7.4', '5.0-15.0'],
            ['RBC (×10⁶/μL)', '8.4', '8.3', '8.2', '8.0', '7.6*', '6.5-10.0'],
            ['Hemoglobin (g/dL)', '15.2', '15.1', '14.8', '14.5', '13.8*', '12.0-17.5'],
            ['Platelets (×10³/μL)', '845', '832', '810', '795', '762', '500-1200'],
            ['Reticulocytes (%)', '2.8', '2.9', '3.1', '3.4', '4.2*', '1.0-5.0'],
            ['Neutrophils (%)', '18', '19', '20', '22', '24', '10-35'],
          ],
          footnotes: [
            '* p<0.05 vs. control. Minor reductions in RBC/Hgb at 300 mg/kg considered secondary to reduced food consumption.',
          ],
        },
        {
          title: 'Table 6: Clinical Chemistry Parameters — Dog 28-Day Study (Day 28)',
          headers: ['Parameter', 'Control', '3 mg/kg', '10 mg/kg', '30 mg/kg', '100 mg/kg', 'Reference Range'],
          rows: [
            ['ALT (U/L)', '28', '32', '48', '95*', '225**', '10-70'],
            ['AST (U/L)', '22', '25', '35', '72*', '185**', '15-50'],
            ['ALP (U/L)', '65', '70', '88', '142*', '310**', '20-150'],
            ['GGT (U/L)', '4', '5', '6', '12*', '28**', '0-10'],
            ['Total bilirubin (mg/dL)', '0.10', '0.12', '0.15', '0.22', '0.45**', '0.0-0.4'],
            ['Albumin (g/dL)', '3.2', '3.1', '3.0', '2.8*', '2.5**', '2.6-4.0'],
            ['BUN (mg/dL)', '14', '15', '14', '16', '18', '8-28'],
            ['Creatinine (mg/dL)', '0.8', '0.8', '0.9', '0.9', '1.0', '0.5-1.5'],
          ],
          footnotes: [
            '* p<0.05; ** p<0.01 vs. control. Hepatic enzyme elevations dose-dependent and fully reversible after 14-day recovery.',
          ],
        },
      ],
    },
    {
      heading: 'Toxicokinetic Data',
      level: 1,
      paragraphs: [
        `Toxicokinetic (TK) assessment was conducted using satellite groups (n=3/sex/group/timepoint in rats; main study animals in dogs). Blood samples were collected at pre-dose and 0.5, 1, 2, 4, 8, 12, and 24 hours post-dose on Days 1 and 28.`,
      ],
      tables: [
        {
          title: 'Table 7: Toxicokinetic Parameters — Day 28',
          headers: ['Species', 'Dose (mg/kg/day)', 'Cmax (ng/mL)', 'Tmax (h)', 'AUC₀₋₂₄ (ng·h/mL)', 'Accumulation Ratio'],
          rows: [
            ['Rat', '10', '245', '2.0', '1,420', '1.3'],
            ['Rat', '30', '685', '2.0', '4,180', '1.4'],
            ['Rat', '100', '2,150', '2.5', '14,200', '1.5'],
            ['Rat', '300', '5,420', '3.0', '38,500', '1.7'],
            ['Dog', '3', '185', '3.0', '980', '1.2'],
            ['Dog', '10', '545', '3.0', '3,250', '1.4'],
            ['Dog', '30', '1,480', '3.5', '9,800', '1.5'],
            ['Dog', '100', '4,250', '4.0', '28,500', '1.8'],
          ],
          footnotes: [
            'Values are mean of males and females combined. Accumulation ratio = Day 28 AUC / Day 1 AUC.',
            'Exposure increased approximately dose-proportionally up to 100 mg/kg/day; slight greater-than-dose-proportional increase at 300 mg/kg in rats.',
          ],
        },
      ],
    },
    {
      heading: 'Recovery Period Findings',
      level: 1,
      paragraphs: [
        'Recovery group animals (n=5/sex at high dose in rats; n=2/sex at high dose in dogs) were maintained for 14 days following the last dose on Day 28.',
        `In rats (300 mg/kg/day recovery group): ALT and AST returned to control levels by Recovery Day 7. Liver weights were comparable to controls by Recovery Day 14. Histopathological examination at terminal sacrifice (Recovery Day 14) showed complete resolution of hepatocellular hypertrophy and bile duct hyperplasia. No residual hepatocyte necrosis was observed.`,
        `In dogs (100 mg/kg/day recovery group): ALT and AST returned to within the normal reference range by Recovery Day 10. Liver weights normalized by Recovery Day 14. Histopathology confirmed complete resolution of all hepatic findings.`,
        'The full reversibility of all findings in both species supports the conclusion that the hepatotoxicity of VLX-4070 is a monitorable and manageable risk in clinical development.',
      ],
    },
  ],
};
registerDocument('phase02-glp-toxicology-study-reports', glpToxicologyReports);

// ---------------------------------------------------------------------------
// 2. Safety Pharmacology Studies (Tier 2)
// ---------------------------------------------------------------------------
const safetyPharmacology: DocumentContent = {
  documentTitle: `Safety Pharmacology Studies: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-002',
  version: '1.1',
  date: '2023-04-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Overview',
      level: 1,
      paragraphs: [
        `A core battery of safety pharmacology studies was conducted for ${DRUG.code} in accordance with ICH S7A and S7B guidelines. Studies assessed effects on the central nervous system (CNS), cardiovascular system, and respiratory system.`,
      ],
    },
    {
      heading: 'Cardiovascular Assessment — hERG Assay',
      level: 1,
      paragraphs: [
        `The potential for ${DRUG.code} to inhibit the hERG (human ether-à-go-go-related gene) potassium channel was assessed in a GLP-compliant in vitro patch-clamp study using HEK293 cells stably expressing hERG. ${DRUG.code} was tested at concentrations of 0.3, 1, 3, 10, and 30 μM.`,
        `${DRUG.code} inhibited hERG current with an IC50 of 32.4 μM (95% CI: 28.1-37.8 μM). At 10 μM, mean inhibition was 22.3%. The maximum unbound Cmax at the proposed human starting dose of 50 mg QD is projected at approximately 0.42 μM (based on allometric scaling), yielding an estimated safety margin of >75-fold over the hERG IC50.`,
      ],
      tables: [
        {
          title: 'Table 1: hERG Inhibition Summary',
          headers: ['Concentration (μM)', 'Mean % Inhibition', 'SD', 'n'],
          rows: [
            ['0.3', '2.1', '1.8', '5'],
            ['1', '5.4', '2.3', '5'],
            ['3', '11.2', '3.5', '5'],
            ['10', '22.3', '4.8', '5'],
            ['30', '48.5', '5.2', '5'],
          ],
          footnotes: [
            'IC50 = 32.4 μM (Hill equation fit, nH = 1.1). Positive control: cisapride IC50 = 0.028 μM.',
            `Safety margin: hERG IC50 / projected human unbound Cmax = 32.4 / 0.42 = >75-fold.`,
          ],
        },
      ],
    },
    {
      heading: 'Cardiovascular Telemetry in Dogs',
      level: 1,
      paragraphs: [
        `An in vivo cardiovascular safety study was conducted in conscious, telemetered beagle dogs (n=4, crossover design) receiving single oral doses of ${DRUG.code} at 0 (vehicle), 10, 30, and 100 mg/kg. Hemodynamic parameters (heart rate, blood pressure, ECG including QTc) were monitored continuously for 24 hours post-dose.`,
        'No treatment-related effects on heart rate, systolic/diastolic blood pressure, or PR/QRS intervals were observed at any dose level. A small, non-significant QTc prolongation (mean +4.2 ms from baseline) was observed at 100 mg/kg at 4 hours post-dose, which was within normal physiological variability and not considered adverse. The 100 mg/kg dose corresponds to an AUC exposure approximately 30-fold above the projected human therapeutic AUC.',
      ],
    },
    {
      heading: 'CNS Safety — Irwin Test',
      level: 1,
      paragraphs: [
        `The effects of ${DRUG.code} on CNS function were assessed using a modified Irwin test in male Sprague-Dawley rats (n=8/group) following single oral doses of 0 (vehicle), 30, 100, and 300 mg/kg. Behavioral observations were performed at 1, 2, 4, 8, and 24 hours post-dose.`,
        'No treatment-related effects on arousal, motor activity, coordination, sensorimotor reflexes, autonomic function, or behavior were observed at any dose level. Body temperature was unaffected. Mild, transient decreases in locomotor activity were noted at 300 mg/kg at the 2-hour timepoint, likely secondary to sedation from the high dose volume; this finding was not considered pharmacologically relevant.',
      ],
    },
    {
      heading: 'Respiratory Function',
      level: 1,
      paragraphs: [
        `Respiratory function was assessed by whole-body plethysmography in conscious male Sprague-Dawley rats (n=8/group) following single oral doses of 0 (vehicle), 30, 100, and 300 mg/kg. Respiratory rate, tidal volume, and minute ventilation were monitored for 24 hours.`,
        `No treatment-related effects on respiratory rate, tidal volume, or minute ventilation were observed at any dose level. All parameters remained within 10% of vehicle control values throughout the observation period.`,
      ],
      tables: [
        {
          title: 'Table 2: Safety Pharmacology Core Battery Summary',
          headers: ['System', 'Study', 'Species', 'Doses Tested', 'NOEL', 'Key Finding'],
          rows: [
            ['Cardiovascular (in vitro)', 'hERG patch clamp', 'HEK293-hERG', '0.3-30 μM', '0.3 μM', 'IC50 = 32.4 μM; >75× margin'],
            ['Cardiovascular (in vivo)', 'Telemetry', 'Dog', '10, 30, 100 mg/kg', '100 mg/kg', 'No meaningful QTc or hemodynamic effects'],
            ['CNS', 'Modified Irwin', 'Rat', '30, 100, 300 mg/kg', '300 mg/kg', 'No adverse CNS effects'],
            ['Respiratory', 'Plethysmography', 'Rat', '30, 100, 300 mg/kg', '300 mg/kg', 'No effects on respiratory parameters'],
          ],
          footnotes: [
            'NOEL = no observed effect level.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase02-safety-pharmacology-studies', safetyPharmacology);

// ---------------------------------------------------------------------------
// 3. Pharmacokinetics / ADME Package (Tier 2)
// ---------------------------------------------------------------------------
const pkAdmePackage: DocumentContent = {
  documentTitle: `Pharmacokinetics and ADME Package: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-003',
  version: '1.2',
  date: '2023-03-20',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'In Vivo Pharmacokinetics',
      level: 1,
      paragraphs: [
        `Single-dose and repeat-dose pharmacokinetic studies were conducted in Sprague-Dawley rats and beagle dogs to characterize the absorption, distribution, and elimination of ${DRUG.code} following oral and intravenous administration.`,
      ],
      tables: [
        {
          title: 'Table 1: Single-Dose PK Parameters — Rat and Dog',
          headers: ['Parameter', 'Rat (10 mg/kg PO)', 'Rat (2 mg/kg IV)', 'Dog (5 mg/kg PO)', 'Dog (1 mg/kg IV)'],
          rows: [
            ['Cmax (ng/mL)', '620', '—', '485', '—'],
            ['Tmax (h)', '2.0', '—', '3.0', '—'],
            ['AUC₀₋∞ (ng·h/mL)', '3,850', '1,240', '4,120', '1,180'],
            ['t½ (h)', '4.2', '3.8', '6.5', '5.8'],
            ['Vd/F (L/kg)', '2.8', '1.8 (Vss)', '3.4', '2.1 (Vss)'],
            ['CL/F (mL/min/kg)', '12', '27 (CL)', '8.5', '14 (CL)'],
            ['Oral bioavailability (F)', '62%', '—', '58%', '—'],
          ],
          footnotes: [
            'Values are mean of n=3/sex. PO = oral; IV = intravenous; Vss = volume of distribution at steady state.',
          ],
        },
      ],
    },
    {
      heading: 'Oral Bioavailability and Absorption',
      level: 1,
      paragraphs: [
        `${DRUG.code} demonstrated good oral bioavailability in both rats (62%) and dogs (58%), consistent with its favorable physicochemical properties (cLogP = 2.8, Caco-2 Papp = 18.2 × 10⁻⁶ cm/s, low efflux ratio). Absorption was rapid, with median Tmax of 2.0 hours in rats and 3.0 hours in dogs.`,
        'Food effect assessment in dogs (crossover design, n=4) showed a modest increase in AUC (+22%) and Cmax (+18%) when administered with a high-fat meal compared to fasted state. The food effect was not considered clinically significant, and administration with or without food is anticipated for clinical development.',
      ],
    },
    {
      heading: 'Metabolism and CYP Profiling',
      level: 1,
      paragraphs: [
        `In vitro metabolic profiling was conducted using human, rat, and dog liver microsomes and hepatocytes. ${DRUG.code} was metabolized primarily via CYP3A4 (68% contribution) and CYP2C8 (22% contribution), with minor contributions from CYP1A2 (6%) and CYP2D6 (4%), as determined by reaction phenotyping with selective CYP inhibitors and recombinant CYP enzymes.`,
        'Six metabolites were identified in human hepatocyte incubations: M1 (N-demethylation, 18% of parent), M2 (hydroxylation, 12%), M3 (oxidative defluorination, 8%), M4 (glucuronide conjugate, 5%), M5 (N-oxide, 3%), and M6 (cysteine adduct from warhead, 2%). No unique human metabolites were identified; all human metabolites were present in at least one preclinical species.',
      ],
      tables: [
        {
          title: 'Table 2: CYP Inhibition and Induction Profile',
          headers: ['CYP Isoform', 'Inhibition IC50 (μM)', 'TDI (shift)', 'Induction (fold at 10 μM)', 'Clinical Risk Assessment'],
          rows: [
            ['CYP3A4', '>30', 'No shift', '1.8-fold (below 2× threshold)', 'Low risk'],
            ['CYP2D6', '>30', 'N/A', 'Not assessed (not inducible)', 'Low risk'],
            ['CYP2C9', '22', 'No shift', '1.2-fold', 'Low risk'],
            ['CYP2C19', '>30', 'No shift', '1.1-fold', 'Low risk'],
            ['CYP1A2', '>30', 'N/A', '1.3-fold', 'Low risk'],
            ['CYP2B6', '>30', 'N/A', '1.5-fold', 'Low risk'],
          ],
          footnotes: [
            'TDI = time-dependent inhibition. CYP induction assessed in primary human hepatocytes (3 donors).',
          ],
        },
      ],
    },
    {
      heading: 'Protein Binding and Tissue Distribution',
      level: 1,
      paragraphs: [
        `Plasma protein binding of ${DRUG.code} was assessed by equilibrium dialysis across species: human (94.2% bound), rat (91.8%), and dog (93.1%). Binding was independent of concentration over the range of 0.1-10 μM. The primary binding protein in human plasma was albumin (fu,albumin = 0.052), with minimal binding to alpha-1-acid glycoprotein (AAG).`,
        `Tissue distribution was assessed using quantitative whole-body autoradiography (QWBA) in pigmented Long-Evans rats following a single oral dose of [¹⁴C]-${DRUG.code} (30 mg/kg). Radioactivity distributed widely to tissues, with highest concentrations in liver (tissue:plasma ratio = 12.4), kidney (5.8), lung (3.2), and adrenal gland (4.1). Brain penetration was low (tissue:plasma ratio = 0.08), consistent with the peripheral target.`,
      ],
    },
    {
      heading: 'Excretion',
      level: 1,
      paragraphs: [
        `Mass balance was determined in bile duct-cannulated (BDC) and intact rats following single oral doses of [¹⁴C]-${DRUG.code} (30 mg/kg). In intact rats, 68% of radioactivity was recovered in feces and 24% in urine over 168 hours. In BDC rats, 42% was recovered in bile, 28% in feces, and 22% in urine, indicating that biliary excretion is the primary elimination pathway, with significant enterohepatic recirculation.`,
      ],
    },
  ],
};
registerDocument('phase02-pharmacokinetics-adme-package', pkAdmePackage);

// ---------------------------------------------------------------------------
// 4. Genotoxicity Studies (Tier 3)
// ---------------------------------------------------------------------------
const genotoxicityStudies: DocumentContent = {
  documentTitle: `Genotoxicity Studies: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-004',
  version: '1.0',
  date: '2023-02-28',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Overview',
      level: 1,
      paragraphs: [
        `A standard genotoxicity battery was conducted for ${DRUG.code} in accordance with ICH S2(R1) guidelines. The battery comprised an in vitro bacterial reverse mutation assay (Ames test), an in vitro micronucleus assay in human peripheral blood lymphocytes, and an in vivo micronucleus assay in rats.`,
      ],
    },
    {
      heading: 'Bacterial Reverse Mutation Assay (Ames Test)',
      level: 1,
      paragraphs: [
        `${DRUG.code} was tested in the Ames assay using Salmonella typhimurium strains TA98, TA100, TA1535, TA1537, and Escherichia coli strain WP2 uvrA, with and without metabolic activation (S9 mix from Aroclor 1254-induced rat liver). Concentrations tested ranged from 15.6 to 5000 μg/plate.`,
        `${DRUG.code} was non-mutagenic in all strains tested, both with and without metabolic activation. No dose-related increases in revertant colonies were observed at any concentration up to the limit dose of 5000 μg/plate. Positive controls (2-aminoanthracene, sodium azide, 9-aminoacridine, 2-nitrofluorene, 4-nitroquinoline-N-oxide) performed as expected.`,
      ],
      tables: [
        {
          title: 'Table 1: Ames Test Results Summary',
          headers: ['Strain', 'Top Dose (μg/plate)', 'Result (-S9)', 'Result (+S9)', 'Toxicity'],
          rows: [
            ['TA98', '5000', 'Negative', 'Negative', 'None up to 5000'],
            ['TA100', '5000', 'Negative', 'Negative', 'None up to 5000'],
            ['TA1535', '5000', 'Negative', 'Negative', 'Precipitation at 5000'],
            ['TA1537', '5000', 'Negative', 'Negative', 'None up to 5000'],
            ['WP2 uvrA', '5000', 'Negative', 'Negative', 'None up to 5000'],
          ],
          footnotes: [
            'Negative = no significant increase (≤2× baseline) in revertant colony counts at any dose.',
          ],
        },
      ],
    },
    {
      heading: 'In Vitro Micronucleus Assay',
      level: 1,
      paragraphs: [
        `An in vitro micronucleus assay was conducted in cultured human peripheral blood lymphocytes. ${DRUG.code} was tested at concentrations of 3.9 to 500 μg/mL (with and without S9 metabolic activation) for 3 hours with a 24-hour recovery period, and at 3.9 to 250 μg/mL for 24 hours without S9.`,
        `${DRUG.code} did not induce a statistically significant increase in micronucleated binucleate cells at any concentration tested, under any treatment condition. Cytotoxicity (>55% reduction in replication index) was observed at ≥250 μg/mL (3-hour treatment) and ≥125 μg/mL (24-hour treatment), confirming that adequate cytotoxic concentrations were achieved. Positive controls (mitomycin C, cyclophosphamide) yielded expected increases in micronucleus frequency.`,
      ],
    },
    {
      heading: 'In Vivo Micronucleus Assay',
      level: 1,
      paragraphs: [
        `An in vivo micronucleus assay was conducted in male Sprague-Dawley rats (n=5/group). ${DRUG.code} was administered by oral gavage at 500, 1000, and 2000 mg/kg (limit dose) as a single dose, with bone marrow harvest at 24 and 48 hours post-dose. Vehicle (0.5% methylcellulose) and positive control (cyclophosphamide 40 mg/kg IP) groups were included.`,
        `No statistically significant increases in micronucleated polychromatic erythrocytes (MN-PCE) were observed at any dose level or harvest time. The PCE:NCE ratio remained within normal limits (≥0.15), confirming adequate bone marrow exposure. The positive control showed the expected significant increase in MN-PCE.`,
        `Conclusion: ${DRUG.code} showed no evidence of genotoxic potential in the standard ICH S2(R1) battery of genotoxicity tests.`,
      ],
    },
  ],
};
registerDocument('phase02-genotoxicity-studies', genotoxicityStudies);

// ---------------------------------------------------------------------------
// 5. Pharmacology / Efficacy Models (Tier 2)
// ---------------------------------------------------------------------------
const pharmacologyEfficacyModels: DocumentContent = {
  documentTitle: `In Vivo Pharmacology and Efficacy Models: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-005',
  version: '1.1',
  date: '2023-01-30',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Overview',
      level: 1,
      paragraphs: [
        `In vivo efficacy studies were conducted with ${DRUG.code} using subcutaneous xenograft models of KRAS G12C-mutant tumors in athymic nude mice. Studies evaluated dose-dependent tumor growth inhibition, pharmacokinetic/pharmacodynamic (PK/PD) relationships, and comparative efficacy against sotorasib.`,
      ],
    },
    {
      heading: 'Xenograft Efficacy Studies',
      level: 1,
      paragraphs: [
        `${DRUG.code} was evaluated in two xenograft models: NCI-H358 (KRAS G12C NSCLC) and MIA PaCa-2 (KRAS G12C pancreatic). Female athymic nude mice (n=10/group) bearing established tumors (~200 mm³) were treated with ${DRUG.code} by oral gavage at doses of 3, 10, 30, and 100 mg/kg QD for 21 days.`,
      ],
      tables: [
        {
          title: 'Table 1: Xenograft Efficacy — NCI-H358 (NSCLC)',
          headers: ['Treatment', 'Dose (mg/kg QD)', 'Mean TGI (Day 21)', 'Tumor Regression (CR/PR)', 'Body Weight Change', 'p vs. Vehicle'],
          rows: [
            ['Vehicle', '—', '—', '0/10', '+4.2%', '—'],
            [`${DRUG.code}`, '3', '32%', '0/10', '+3.1%', '0.042'],
            [`${DRUG.code}`, '10', '58%', '0/10', '+2.5%', '0.003'],
            [`${DRUG.code}`, '30', '82%', '2/10 PR', '+1.8%', '<0.001'],
            [`${DRUG.code}`, '100', '96%', '4/10 PR, 1/10 CR', '+0.5%', '<0.001'],
            ['Sotorasib', '100', '78%', '1/10 PR', '+1.2%', '<0.001'],
          ],
          footnotes: [
            'TGI = tumor growth inhibition. CR = complete response (<50 mm³); PR = partial response (>30% shrinkage from baseline).',
            'p values: one-way ANOVA with Dunnett\'s post-hoc test.',
          ],
        },
        {
          title: 'Table 2: Xenograft Efficacy — MIA PaCa-2 (Pancreatic)',
          headers: ['Treatment', 'Dose (mg/kg QD)', 'Mean TGI (Day 21)', 'Tumor Regression', 'Body Weight Change'],
          rows: [
            ['Vehicle', '—', '—', '0/10', '+3.8%'],
            [`${DRUG.code}`, '10', '45%', '0/10', '+3.0%'],
            [`${DRUG.code}`, '30', '71%', '1/10 PR', '+2.2%'],
            [`${DRUG.code}`, '100', '89%', '3/10 PR', '+0.8%'],
            ['Sotorasib', '100', '68%', '0/10', '+1.5%'],
          ],
          footnotes: [
            'VLX-4070 showed numerically superior efficacy over sotorasib in both models at the same dose level.',
          ],
        },
      ],
    },
    {
      heading: 'Dose-Response Relationship',
      level: 1,
      paragraphs: [
        `${DRUG.code} demonstrated a clear dose-dependent increase in tumor growth inhibition across both xenograft models. In the NCI-H358 model, the estimated ED50 (dose producing 50% TGI) was approximately 8 mg/kg QD, and the ED90 was approximately 55 mg/kg QD. Maximal efficacy (>95% TGI with tumor regressions) was achieved at 100 mg/kg QD.`,
        'Dose-response modeling using a sigmoidal Emax model yielded Emax = 98% TGI, ED50 = 7.8 mg/kg, and Hill coefficient = 1.4, consistent with a single-mechanism pharmacological response.',
      ],
    },
    {
      heading: 'PK/PD Relationship',
      level: 1,
      paragraphs: [
        `To establish the PK/PD relationship, tumor pERK levels were measured at 2, 6, 12, and 24 hours post-dose in the NCI-H358 xenograft model on Day 7 of treatment. pERK inhibition was correlated with plasma ${DRUG.code} concentrations.`,
        `${DRUG.code} produced dose-dependent pERK inhibition in tumors. At 30 mg/kg QD, mean tumor pERK was suppressed by 78% at 2 hours and 52% at 24 hours post-dose. At 100 mg/kg QD, pERK suppression exceeded 90% at 2 hours and was maintained at 72% at 24 hours. PK/PD modeling indicated that sustained pERK inhibition >50% over the dosing interval was associated with >80% TGI, supporting the target of maintaining plasma concentrations above the in vivo pERK EC50 (~120 ng/mL) for the full 24-hour dosing interval.`,
      ],
      tables: [
        {
          title: 'Table 3: Tumor pERK Inhibition — NCI-H358 Xenograft (Day 7)',
          headers: ['Dose (mg/kg QD)', 'pERK Inhibition 2h (%)', 'pERK Inhibition 6h (%)', 'pERK Inhibition 24h (%)', 'Plasma Conc. at 24h (ng/mL)'],
          rows: [
            ['3', '28%', '18%', '<10%', '15'],
            ['10', '52%', '38%', '22%', '48'],
            ['30', '78%', '65%', '52%', '145'],
            ['100', '94%', '88%', '72%', '485'],
          ],
          footnotes: [
            'pERK measured by MSD assay in tumor homogenates (n=3 tumors/timepoint/group). Plasma concentrations are mean values.',
          ],
        },
      ],
    },
    {
      heading: 'Conclusions',
      level: 1,
      paragraphs: [
        `${DRUG.code} demonstrated potent, dose-dependent antitumor activity in KRAS G12C-mutant xenograft models, with numerically superior efficacy compared to sotorasib at equivalent doses. Sustained tumor pERK inhibition >50% over 24 hours correlated with robust antitumor responses (>80% TGI). These data support the clinical development of ${DRUG.code} at doses predicted to maintain adequate plasma exposures for sustained target engagement.`,
      ],
    },
  ],
};
registerDocument('phase02-pharmacology-efficacy-models', pharmacologyEfficacyModels);

// ---------------------------------------------------------------------------
// 6. CMC Drug Substance Dossier (Tier 2)
// ---------------------------------------------------------------------------
const cmcDrugSubstance: DocumentContent = {
  documentTitle: `CMC Drug Substance Dossier: ${DRUG.fullName} Hydrochloride`,
  documentNumber: 'RPT-PREC-006',
  version: '1.1',
  date: '2023-04-30',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Synthetic Route Description',
      level: 1,
      paragraphs: [
        `The manufacturing process for ${DRUG.code} HCl (Form I) drug substance involves a convergent 7-step synthesis from commercially available starting materials. The route was developed by the Velantis Process Chemistry group and scaled to multi-kilogram GMP production at Asymchem Laboratories (Tianjin, China).`,
        'Key synthetic steps include: (1) palladium-catalyzed Suzuki coupling to construct the pyrido-pyrimidine core; (2) regioselective N-alkylation to install the spirocyclic linker; (3) late-stage introduction of the acrylamide covalent warhead; and (4) final salt formation and crystallization. The overall yield is 18% from the first intermediate (SM-1) with a throughput of approximately 5 kg per campaign.',
      ],
    },
    {
      heading: 'Process Controls and Critical Quality Attributes',
      level: 1,
      paragraphs: [
        'Critical process parameters (CPPs) and critical quality attributes (CQAs) were identified through process development and risk assessment. Key controls are summarized below.',
      ],
      tables: [
        {
          title: 'Table 1: Critical Quality Attributes — Drug Substance',
          headers: ['CQA', 'Test Method', 'Specification', 'Typical Result (3 GMP Batches)'],
          rows: [
            ['Appearance', 'Visual', 'White to off-white crystalline powder', 'White crystalline powder'],
            ['Identity (IR)', 'FT-IR', 'Matches reference', 'Conforms'],
            ['Assay (HPLC)', 'RP-HPLC', '98.0-102.0%', '99.5%, 99.3%, 99.6%'],
            ['Any single impurity', 'RP-HPLC', '≤0.15%', '0.08%, 0.06%, 0.09%'],
            ['Total impurities', 'RP-HPLC', '≤0.5%', '0.28%, 0.24%, 0.31%'],
            ['Residual solvents', 'GC-HS', 'Per ICH Q3C', 'All within limits'],
            ['Water content (KF)', 'Karl Fischer', '≤0.5%', '0.12%, 0.10%, 0.14%'],
            ['Chloride content', 'Ion chromatography', '6.9-7.6%', '7.22%, 7.28%, 7.19%'],
            ['Chiral purity', 'Chiral HPLC', '≥99.0% ee', '>99.5%, >99.5%, >99.5%'],
            ['Polymorphic form', 'XRPD', 'Form I', 'Form I confirmed'],
            ['Particle size (D90)', 'Laser diffraction', '≤100 μm', '62 μm, 58 μm, 65 μm'],
            ['Pd residual metal', 'ICP-MS', '≤10 ppm', '3.2 ppm, 2.8 ppm, 3.5 ppm'],
            ['Mutagenic impurities', 'LC-MS/MS', 'Per ICH M7', 'All <TTC (1.5 μg/day)'],
          ],
          footnotes: [
            'Specifications set per ICH Q3A/Q3B and Q3D guidelines. GMP batches VLX-DS-001, -002, -003.',
          ],
        },
      ],
    },
    {
      heading: 'Analytical Method Validation',
      level: 1,
      paragraphs: [
        'GMP analytical methods were validated per ICH Q2(R1) guidelines. The HPLC assay/purity method demonstrated specificity (resolution >2.0 for all known impurities), linearity (R² = 0.9998 over 50-150% range), accuracy (98.8-101.2% recovery), precision (RSD = 0.4% repeatability, 0.6% intermediate precision), and quantitation limit (LOQ = 0.02% for impurities).',
        'The chiral HPLC method was validated for specificity and sensitivity (LOQ = 0.1% for the undesired enantiomer). The XRPD method was qualified for polymorph identification with a reference pattern library.',
      ],
    },
    {
      heading: 'Reference Standard Establishment',
      level: 1,
      paragraphs: [
        `A primary reference standard (RS-001) was established from GMP batch VLX-DS-001 following additional purification by recrystallization. The reference standard was characterized by multiple orthogonal techniques: HPLC purity (99.92%), elemental analysis (C, H, N, Cl within 0.3% of theory), ¹H- and ¹³C-NMR (structure confirmed), high-resolution mass spectrometry (observed m/z 488.2082 [M+H]⁺, theoretical 488.2079), and single-crystal X-ray diffraction (absolute configuration confirmed).`,
      ],
    },
    {
      heading: 'Forced Degradation Study Results',
      level: 1,
      paragraphs: [
        `Forced degradation studies were conducted on ${DRUG.code} HCl drug substance to demonstrate the stability-indicating nature of the analytical methods and to identify potential degradation pathways.`,
      ],
      tables: [
        {
          title: 'Table 2: Forced Degradation Study Results',
          headers: ['Condition', 'Duration', '% Degradation', 'Major Degradant', 'Peak Purity'],
          rows: [
            ['Acid (0.1N HCl, 60°C)', '24 h', '3.2%', 'Hydrolysis product (M-acrylamide)', 'Confirmed pure'],
            ['Base (0.1N NaOH, 60°C)', '24 h', '8.5%', 'Ring-opened degradant', 'Confirmed pure'],
            ['Oxidation (3% H₂O₂, RT)', '24 h', '5.1%', 'N-oxide (M5)', 'Confirmed pure'],
            ['Thermal (80°C, solid)', '7 d', '0.4%', 'None significant', 'Confirmed pure'],
            ['Photolysis (ICH Q1B)', '1.2M lux·h', '1.8%', 'Unknown-1 (RRT 1.22)', 'Confirmed pure'],
            ['Humidity (75% RH, 40°C)', '7 d', '0.2%', 'None significant', 'Confirmed pure'],
          ],
          footnotes: [
            'RRT = relative retention time. The HPLC purity method resolves all identified degradants from the parent peak.',
            'Base hydrolysis was the most aggressive condition; drug substance should be protected from prolonged alkaline exposure.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase02-cmc-drug-substance-dossier', cmcDrugSubstance);

// ---------------------------------------------------------------------------
// 7. Drug Product Formulation Development (Tier 3)
// ---------------------------------------------------------------------------
const drugProductFormulation: DocumentContent = {
  documentTitle: `Drug Product Formulation Development Report: ${DRUG.fullName} Tablets`,
  documentNumber: 'RPT-PREC-007',
  version: '1.0',
  date: '2023-05-10',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Formulation Selection Rationale',
      level: 1,
      paragraphs: [
        `Based on the biopharmaceutical properties of ${DRUG.code} HCl (BCS Class II: high permeability, moderate solubility), an immediate-release ${DRUG.formulation.toLowerCase()} formulation was selected for clinical development. The tablet formulation was chosen to support the multiple dose strengths required for Phase 1 dose escalation (${DRUG.doses.join(', ')}).`,
        'A conventional wet granulation process was selected based on the moderately hygroscopic nature of the drug substance and the need for uniform drug distribution at low dose strengths (50 mg). Film coating with Opadry II white was applied for moisture protection, ease of swallowing, and brand differentiation.',
      ],
    },
    {
      heading: 'Excipient Compatibility',
      level: 1,
      paragraphs: [
        `Binary excipient compatibility studies were conducted using ${DRUG.code} HCl with each proposed excipient at 1:1 and 1:5 (drug:excipient) ratios. Samples were stored at 40°C/75% RH (open and closed) and 25°C/60% RH for 4 weeks. Compatibility was assessed by HPLC purity, appearance, and DSC.`,
        'All proposed excipients (microcrystalline cellulose, lactose monohydrate, croscarmellose sodium, hydroxypropyl cellulose, magnesium stearate, Opadry II) were compatible with the drug substance, with no significant degradation (maximum impurity increase <0.05%) or physical incompatibility observed under any condition.',
      ],
      tables: [
        {
          title: 'Table 1: Tablet Composition — 100 mg Strength',
          headers: ['Component', 'Function', 'mg/tablet', '% w/w'],
          rows: [
            ['VLX-4070 HCl (equiv. to 100 mg free base)', 'Active ingredient', '108.5', '36.2%'],
            ['Microcrystalline cellulose (Avicel PH-102)', 'Filler/binder', '105.0', '35.0%'],
            ['Lactose monohydrate', 'Filler', '52.5', '17.5%'],
            ['Croscarmellose sodium', 'Disintegrant', '15.0', '5.0%'],
            ['Hydroxypropyl cellulose (L-HPC)', 'Binder (granulation)', '9.0', '3.0%'],
            ['Magnesium stearate', 'Lubricant', '3.0', '1.0%'],
            ['Opadry II White (film coat)', 'Film coat', '7.0', '2.3%'],
            ['Total tablet weight', '', '300.0', '100%'],
          ],
          footnotes: [
            'Film coat applied as 2.3% weight gain. Tablet dimensions: 10.0 mm round, biconvex.',
          ],
        },
      ],
    },
    {
      heading: 'Prototype Batch Records and Process Description',
      level: 1,
      paragraphs: [
        'Three prototype GMP batches (10 kg each) were manufactured at Patheon (Cincinnati, OH) for the 100 mg tablet strength. The manufacturing process consists of: (1) dry blending of intragranular components; (2) wet granulation with aqueous HPC solution in a high-shear granulator; (3) fluid bed drying to LOD ≤2.0%; (4) milling through 1.0 mm screen; (5) blending with extragranular excipients (croscarmellose sodium, magnesium stearate); (6) compression on a Korsch XL400 tablet press; (7) film coating in a perforated pan coater.',
        'All three batches met in-process controls and release specifications. Batch-to-batch consistency was demonstrated with assay values of 99.2-100.8%, content uniformity AV <5.0, and dissolution >90% at 30 minutes.',
      ],
    },
    {
      heading: 'Dissolution Method Development',
      level: 1,
      paragraphs: [
        'Dissolution method development was conducted to establish a clinically relevant and discriminating dissolution test. The final method employs USP Apparatus II (paddle) at 75 rpm in 900 mL of 0.01N HCl with 0.1% SLS at 37°C. Samples are analyzed by UV spectrophotometry at 280 nm.',
        'Method discrimination was confirmed by testing tablets with deliberate manufacturing variations (overlubrication, increased tablet hardness, modified disintegrant level). The method distinguished between acceptable and deliberately defective tablets. Specification: NLT 80% dissolved (Q) at 30 minutes.',
      ],
    },
  ],
};
registerDocument('phase02-drug-product-formulation-development', drugProductFormulation);

// ---------------------------------------------------------------------------
// 8. Stability Studies (Tier 3)
// ---------------------------------------------------------------------------
const stabilityStudies: DocumentContent = {
  documentTitle: `Stability Studies Report: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-008',
  version: '1.0',
  date: '2023-05-20',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Study Design',
      level: 1,
      paragraphs: [
        `Formal stability studies were initiated on ${DRUG.code} HCl drug substance (3 GMP batches: VLX-DS-001, -002, -003) and drug product (100 mg film-coated tablets, 3 GMP batches: VLX-DP-001, -002, -003) in accordance with ICH Q1A(R2) guidelines. Storage conditions include long-term (25°C/60% RH), intermediate (30°C/65% RH), and accelerated (40°C/75% RH) conditions.`,
        'This report presents data through the 6-month timepoint. Testing intervals: 0, 1, 3, and 6 months.',
      ],
    },
    {
      heading: 'Drug Substance Stability Data',
      level: 1,
      tables: [
        {
          title: 'Table 1: Drug Substance Stability — 25°C/60% RH (Long-Term)',
          headers: ['Parameter', 'Initial', '1 Month', '3 Months', '6 Months', 'Specification'],
          rows: [
            ['Appearance', 'White crystalline', 'Complies', 'Complies', 'Complies', 'White to off-white powder'],
            ['Assay (%)', '99.5', '99.5', '99.4', '99.4', '98.0-102.0%'],
            ['Max single impurity (%)', '0.08', '0.08', '0.08', '0.09', '≤0.15%'],
            ['Total impurities (%)', '0.28', '0.28', '0.29', '0.30', '≤0.5%'],
            ['Water content (%)', '0.12', '0.13', '0.13', '0.14', '≤0.5%'],
            ['Polymorphic form', 'Form I', 'Form I', 'Form I', 'Form I', 'Form I'],
          ],
          footnotes: [
            'Representative batch VLX-DS-001. All 3 batches showed comparable results.',
          ],
        },
        {
          title: 'Table 2: Drug Substance Stability — 40°C/75% RH (Accelerated)',
          headers: ['Parameter', 'Initial', '1 Month', '3 Months', '6 Months', 'Specification'],
          rows: [
            ['Appearance', 'White crystalline', 'Complies', 'Complies', 'Complies', 'White to off-white powder'],
            ['Assay (%)', '99.5', '99.4', '99.3', '99.1', '98.0-102.0%'],
            ['Max single impurity (%)', '0.08', '0.09', '0.11', '0.13', '≤0.15%'],
            ['Total impurities (%)', '0.28', '0.31', '0.36', '0.42', '≤0.5%'],
            ['Water content (%)', '0.12', '0.15', '0.18', '0.22', '≤0.5%'],
            ['Polymorphic form', 'Form I', 'Form I', 'Form I', 'Form I', 'Form I'],
          ],
          footnotes: [
            'All parameters within specification through 6 months at accelerated conditions. No form change observed.',
          ],
        },
      ],
    },
    {
      heading: 'Drug Product Stability Data',
      level: 1,
      tables: [
        {
          title: 'Table 3: Drug Product Stability (100 mg Tablets) — 25°C/60% RH',
          headers: ['Parameter', 'Initial', '1 Month', '3 Months', '6 Months', 'Specification'],
          rows: [
            ['Appearance', 'White, round, film-coated', 'Complies', 'Complies', 'Complies', 'White round tablet'],
            ['Assay (%)', '100.2', '100.1', '99.9', '99.8', '95.0-105.0%'],
            ['Max single impurity (%)', '0.06', '0.06', '0.07', '0.08', '≤0.20%'],
            ['Total impurities (%)', '0.22', '0.23', '0.25', '0.28', '≤1.0%'],
            ['Dissolution (% at 30 min)', '95', '94', '93', '92', '≥80% (Q)'],
            ['Water content (%)', '2.8', '2.9', '3.0', '3.1', '≤5.0%'],
            ['Hardness (kP)', '10.2', '10.1', '9.8', '9.5', '6-14 kP'],
          ],
          footnotes: [
            'Representative batch VLX-DP-001, packaged in HDPE bottles with desiccant.',
            'Based on 6-month accelerated and long-term data, a provisional shelf life of 24 months is supported (drug substance) and 18 months (drug product, packaged in HDPE with desiccant).',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase02-stability-studies', stabilityStudies);

// ---------------------------------------------------------------------------
// 9. Nonclinical Overview / Summary (Tier 3)
// ---------------------------------------------------------------------------
const nonclinicalOverview: DocumentContent = {
  documentTitle: `Nonclinical Overview and Written Summary: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-009',
  version: '1.0',
  date: TIMELINE.preclinicalComplete,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Introduction and Scope',
      level: 1,
      paragraphs: [
        `This document provides an integrated nonclinical overview and written summary for ${DRUG.code} (${DRUG.name}), prepared in accordance with ICH M4S (CTD Module 2.4 — Nonclinical Overview and Module 2.6 — Nonclinical Written and Tabulated Summaries). This summary supports the Investigational New Drug (IND) application (IND ${DRUG.code}) for the study of ${DRUG.code} in patients with KRAS G12C-mutant advanced solid tumors.`,
      ],
    },
    {
      heading: 'Pharmacology Summary',
      level: 1,
      paragraphs: [
        `${DRUG.code} is a ${DRUG.mechanism.toLowerCase()} that binds covalently to the mutant cysteine residue in the switch II pocket of KRAS G12C in its inactive (GDP-bound) state. In vitro, ${DRUG.code} demonstrated potent inhibition of KRAS G12C (biochemical IC50 = 3.2 nM), robust cellular activity (pERK EC50 = 24 nM; viability EC50 = 32 nM in NCI-H358), and >500-fold selectivity over wild-type KRAS.`,
        `In vivo, ${DRUG.code} produced dose-dependent tumor growth inhibition in KRAS G12C-mutant xenograft models (NCI-H358: TGI up to 96% at 100 mg/kg QD; MIA PaCa-2: TGI up to 89%), with tumor regressions observed at ≥30 mg/kg QD. Efficacy correlated with sustained tumor pERK inhibition >50% over the dosing interval.`,
        'Safety pharmacology studies (ICH S7A/S7B core battery) demonstrated no adverse effects on cardiovascular (hERG IC50 = 32.4 μM, >75× margin; no QTc or hemodynamic effects in dog telemetry), CNS (no Irwin test findings), or respiratory (no plethysmography findings) systems.',
      ],
    },
    {
      heading: 'Toxicology Summary',
      level: 1,
      paragraphs: [
        `The toxicology program for ${DRUG.code} comprised single-dose and 28-day repeat-dose GLP studies in rats and dogs, a standard genotoxicity battery, and safety pharmacology studies. The principal target organ was the liver, with dose-dependent and fully reversible hepatocellular hypertrophy and hepatic enzyme elevations observed in both species. The NOAEL was 10 mg/kg/day in rats (AUC = 1,420 ng·h/mL) and 3 mg/kg/day in dogs (AUC = 980 ng·h/mL).`,
        `${DRUG.code} was non-genotoxic in the standard battery (Ames, in vitro micronucleus, in vivo micronucleus). Reproductive toxicology studies are addressed separately (embryo-fetal development study in rats; fertility study waived per ICH S5 for oncology indication). Carcinogenicity studies are deferred per ICH S1A.`,
      ],
    },
    {
      heading: 'Cross-References to Study Reports',
      level: 1,
      paragraphs: [
        'The following GLP study reports are included in Module 4 of this IND submission:',
      ],
      tables: [
        {
          title: 'Table 1: Index of Nonclinical Study Reports',
          headers: ['Study No.', 'Study Title', 'Report No.', 'GLP Status', 'CTD Location'],
          rows: [
            ['8472-501', '28-Day Rat Oral Toxicity with 14-Day Recovery', 'RPT-PREC-001a', 'GLP', 'Module 4.2.3.2'],
            ['20215478', '28-Day Dog Oral Toxicity with 14-Day Recovery', 'RPT-PREC-001b', 'GLP', 'Module 4.2.3.2'],
            ['8472-110', 'Single-Dose Rat Toxicity', 'RPT-PREC-001c', 'GLP', 'Module 4.2.3.1'],
            ['20215112', 'Single-Dose Dog Toxicity', 'RPT-PREC-001d', 'GLP', 'Module 4.2.3.1'],
            ['GT-2023-018', 'Bacterial Reverse Mutation Assay', 'RPT-PREC-004a', 'GLP', 'Module 4.2.3.3.1'],
            ['GT-2023-019', 'In Vitro Micronucleus Assay', 'RPT-PREC-004b', 'GLP', 'Module 4.2.3.3.1'],
            ['GT-2023-020', 'In Vivo Rat Micronucleus Assay', 'RPT-PREC-004c', 'GLP', 'Module 4.2.3.3.2'],
            ['SP-2023-005', 'hERG Channel Assay', 'RPT-PREC-002a', 'GLP', 'Module 4.2.3.4'],
            ['SP-2023-006', 'Dog Cardiovascular Telemetry', 'RPT-PREC-002b', 'GLP', 'Module 4.2.3.4'],
            ['SP-2023-007', 'Rat CNS (Irwin Test)', 'RPT-PREC-002c', 'GLP', 'Module 4.2.3.4'],
            ['SP-2023-008', 'Rat Respiratory Plethysmography', 'RPT-PREC-002d', 'GLP', 'Module 4.2.3.4'],
          ],
          footnotes: [
            'All studies conducted under GLP per 21 CFR Part 58. Full reports available in Module 4.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase02-nonclinical-overview-summary', nonclinicalOverview);

// ---------------------------------------------------------------------------
// 10. Reproductive & Developmental Toxicology (Tier 3)
// ---------------------------------------------------------------------------
const reproductiveTox: DocumentContent = {
  documentTitle: `Reproductive and Developmental Toxicology: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-010',
  version: '1.0',
  date: '2023-05-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Overview and Regulatory Rationale',
      level: 1,
      paragraphs: [
        `Reproductive and developmental toxicology assessments for ${DRUG.code} were conducted in accordance with ICH S5(R3) and ICH S9 guidelines. Given that ${DRUG.code} is intended for the treatment of advanced/metastatic cancer (a life-threatening disease), ICH S9 allows a focused reproductive toxicology package at the IND stage, with additional studies to be conducted during clinical development as needed.`,
        'An embryo-fetal development (EFD) study in rats was conducted to evaluate the potential for ${DRUG.code} to cause developmental toxicity. A dedicated fertility study was considered unnecessary at this time based on the ICH S5(R3)/S9 recommendation that fertility assessment can be informed by reproductive organ histopathology from the 28-day repeat-dose toxicity studies.',
      ],
    },
    {
      heading: 'Embryo-Fetal Development Study in Rats',
      level: 1,
      paragraphs: [
        `A GLP-compliant EFD study was conducted in pregnant Sprague-Dawley rats (n=22/group). ${DRUG.code} was administered by oral gavage on gestation days (GD) 6-17 at doses of 0 (vehicle), 10, 30, and 100 mg/kg/day. Caesarean sections were performed on GD 21, and fetuses were examined for external, visceral, and skeletal abnormalities.`,
        `At the highest dose (100 mg/kg/day), maternal toxicity was evident as reduced body weight gain (-22%) and food consumption (-18%). Fetal findings at this dose included reduced fetal body weight and increased incidence of skeletal variations (delayed ossification of sternebrae and phalanges), which are considered secondary to maternal toxicity rather than a direct teratogenic effect. No malformations were attributed to ${DRUG.code} treatment.`,
      ],
      tables: [
        {
          title: 'Table 1: Embryo-Fetal Development Study Results',
          headers: ['Parameter', '0 (Vehicle)', '10 mg/kg/day', '30 mg/kg/day', '100 mg/kg/day'],
          rows: [
            ['Maternal body weight gain GD 6-21 (g)', '118', '115', '108', '92*'],
            ['Food consumption (% control)', '100', '98', '94', '82*'],
            ['Corpora lutea (mean)', '15.2', '14.8', '15.0', '14.5'],
            ['Implantations (mean)', '14.1', '13.8', '14.0', '13.5'],
            ['Live fetuses (mean)', '13.2', '13.0', '12.8', '12.1'],
            ['Resorptions (% of implantations)', '6.4%', '5.8%', '8.6%', '10.4%'],
            ['Fetal body weight (g)', '3.82', '3.78', '3.65', '3.42*'],
            ['External malformations', '0/290', '0/286', '0/282', '0/266'],
            ['Visceral malformations', '0/145', '0/143', '0/141', '0/133'],
            ['Skeletal malformations', '1/145 (0.7%)', '1/143 (0.7%)', '2/141 (1.4%)', '2/133 (1.5%)'],
            ['Skeletal variations (delayed ossification)', '8/145 (5.5%)', '9/143 (6.3%)', '12/141 (8.5%)', '18/133 (13.5%)*'],
          ],
          footnotes: [
            '* p<0.05 vs. control (Dunnett\'s test).',
            'Maternal NOAEL = 30 mg/kg/day (reduced body weight gain and food consumption at 100 mg/kg/day).',
            'Developmental NOAEL = 30 mg/kg/day (increased skeletal variations at 100 mg/kg/day in the presence of maternal toxicity).',
          ],
        },
      ],
    },
    {
      heading: 'Fertility Assessment',
      level: 1,
      paragraphs: [
        `Per ICH S9 and S5(R3), a dedicated fertility study is not required for an oncology drug at the IND stage. Reproductive organ histopathology from the 28-day repeat-dose toxicity studies in rats and dogs was reviewed for potential effects on fertility:`,
        'Based on the absence of reproductive organ findings in repeat-dose studies, a dedicated fertility study is waived at this time. A fertility study will be conducted if warranted by clinical observations or regulatory request.',
      ],
      lists: [
        {
          ordered: false,
          items: [
            'Rats: No treatment-related findings in testes, epididymides, seminal vesicles, prostate, ovaries, or uterus at any dose level up to 300 mg/kg/day.',
            'Dogs: No treatment-related findings in reproductive organs at any dose level up to 100 mg/kg/day.',
            'Sperm parameters (count, motility, morphology) in male rats at the high dose were comparable to controls.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase02-reproductive-developmental-tox', reproductiveTox);

// ---------------------------------------------------------------------------
// 11. Carcinogenicity Assessment (Tier 3)
// ---------------------------------------------------------------------------
const carcinogenicityAssessment: DocumentContent = {
  documentTitle: `Carcinogenicity Risk Assessment: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-011',
  version: '1.0',
  date: '2023-05-25',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Regulatory Framework',
      level: 1,
      paragraphs: [
        `Carcinogenicity assessment for ${DRUG.code} was conducted in accordance with ICH S1A, S1B(R1), and S9 guidelines. Per ICH S1A, carcinogenicity studies are generally not required for pharmaceuticals intended to treat advanced cancer patients, and carcinogenicity testing is typically deferred unless the drug is intended for long-term use (>6 months) in non-life-threatening conditions.`,
        `${DRUG.code} is intended for the treatment of advanced/metastatic KRAS G12C-mutant NSCLC, a life-threatening condition. In accordance with ICH S9, formal carcinogenicity studies are not required at any stage of development for this indication. A weight-of-evidence evaluation is provided below.`,
      ],
    },
    {
      heading: 'Weight-of-Evidence Evaluation',
      level: 1,
      paragraphs: [
        `A weight-of-evidence assessment for carcinogenic potential was conducted for ${DRUG.code} based on available genotoxicity, repeat-dose toxicity, pharmacological mechanism, and structural considerations:`,
      ],
      lists: [
        {
          ordered: false,
          items: [
            'Genotoxicity: Negative in the standard battery (Ames, in vitro micronucleus, in vivo micronucleus). No structural alerts for genotoxicity identified by in silico assessment (Derek Nexus, CASE Ultra).',
            'Repeat-dose toxicity: No proliferative or pre-neoplastic findings in 28-day studies in rats or dogs. Hepatocellular hypertrophy observed was adaptive (enzyme induction) rather than proliferative.',
            'Mechanism: KRAS G12C inhibition is expected to be anti-proliferative (tumor suppressive) rather than pro-oncogenic. The selective targeting of a mutant oncogene with minimal effect on wild-type KRAS mitigates concerns regarding proliferative risk in normal tissues.',
            'Structural analysis: No structural alerts for carcinogenicity were identified. The acrylamide warhead reacts selectively with KRAS G12C cysteine; general thiol reactivity is low (GSH t1/2 = 45 min), reducing concern for non-specific covalent binding to cellular proteins.',
          ],
        },
      ],
    },
    {
      heading: 'Conclusion and Regulatory Position',
      level: 1,
      paragraphs: [
        `Based on the weight-of-evidence evaluation, the overall carcinogenic risk of ${DRUG.code} is assessed as LOW. Formal carcinogenicity studies (2-year bioassay or transgenic mouse study) are not required for the proposed indication per ICH S1A and S9 guidelines and are therefore not planned.`,
        'This position is consistent with regulatory precedent for approved covalent KRAS G12C inhibitors (sotorasib, adagrasib), neither of which was required to conduct carcinogenicity studies. The carcinogenicity assessment will be revisited if the indication is broadened to include chronic use in non-life-threatening conditions.',
      ],
    },
  ],
};
registerDocument('phase02-carcinogenicity-assessment', carcinogenicityAssessment);

// ---------------------------------------------------------------------------
// 12. First-in-Human Dose Justification (Tier 2)
// ---------------------------------------------------------------------------
const fihDoseJustification: DocumentContent = {
  documentTitle: `First-in-Human Dose Justification: ${DRUG.fullName}`,
  documentNumber: 'RPT-PREC-012',
  version: '1.1',
  date: TIMELINE.preclinicalComplete,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Introduction',
      level: 1,
      paragraphs: [
        `This document provides the scientific rationale for the proposed first-in-human (FIH) starting dose of ${DRUG.code} (${DRUG.name}) in the Phase 1 dose-escalation study (${DRUG.code}-001). The dose justification is based on nonclinical toxicology data, allometric scaling, pharmacokinetic/pharmacodynamic modeling, and regulatory guidance (ICH S9, FDA Guidance for Industry: Estimating the Maximum Safe Starting Dose in Initial Clinical Trials for Therapeutics in Adult Healthy Volunteers, 2005).`,
      ],
    },
    {
      heading: 'NOAEL from GLP Toxicology Studies',
      level: 1,
      paragraphs: [
        `The most sensitive species for ${DRUG.code} toxicity was the dog, with a NOAEL of 3 mg/kg/day in the 28-day repeat-dose study. The rat NOAEL was 10 mg/kg/day. Key NOAELs and corresponding exposures are summarized below.`,
      ],
      tables: [
        {
          title: 'Table 1: NOAEL Summary from GLP Toxicology Studies',
          headers: ['Species', 'Study', 'NOAEL (mg/kg/day)', 'AUC₀₋₂₄ at NOAEL (ng·h/mL)', 'Cmax at NOAEL (ng/mL)', 'Basis'],
          rows: [
            ['Rat', '28-day repeat-dose', '10', '1,420', '245', 'Hepatic enzyme elevations and hypertrophy at ≥30 mg/kg'],
            ['Dog', '28-day repeat-dose', '3', '980', '185', 'Hepatic enzyme elevations and hypertrophy at ≥10 mg/kg'],
          ],
        },
      ],
    },
    {
      heading: 'Allometric Scaling and HED Calculation',
      level: 1,
      paragraphs: [
        'Human equivalent doses (HEDs) were calculated from the NOAELs using standard body surface area (BSA) conversion factors per FDA guidance:',
      ],
      tables: [
        {
          title: 'Table 2: HED Calculations',
          headers: ['Species', 'NOAEL (mg/kg/day)', 'BSA Conversion Factor (Km)', 'HED (mg/kg/day)', 'HED (mg/60kg human)'],
          rows: [
            ['Rat', '10', '6.2', '1.6', '97 mg'],
            ['Dog', '3', '1.8', '1.6', '97 mg'],
          ],
          footnotes: [
            'Km(rat) = 6.2; Km(dog) = 1.8; Km(human) = 37. HED = NOAEL × (Km_animal / Km_human).',
            'Both species yield an HED of approximately 1.6 mg/kg/day (97 mg for a 60 kg human).',
          ],
        },
      ],
    },
    {
      heading: 'Maximum Recommended Starting Dose (MRSD) Calculation',
      level: 1,
      paragraphs: [
        'Per ICH S9, for pharmaceuticals intended to treat patients with advanced cancer, the MRSD is calculated as one-tenth (1/10th) of the severely toxic dose in 10% of animals (STD10) in the most sensitive species, or one-sixth (1/6th) of the highest non-severely toxic dose (HNSTD). For VLX-4070, the HNSTD approach is used:',
        'Both approaches support a starting dose in the range of approximately 15-50 mg.',
      ],
      lists: [
        {
          ordered: true,
          items: [
            'HNSTD in dogs = 3 mg/kg/day (NOAEL; no severely toxic dose identified)',
            'HED of HNSTD = 1.6 mg/kg/day = 97 mg (60 kg human)',
            'MRSD = HED / 6 = 0.27 mg/kg/day = 16.2 mg (60 kg human)',
            'Alternative calculation using 1/10th of AUC-matched dose: Dog NOAEL AUC = 980 ng·h/mL; 1/10th exposure target = 98 ng·h/mL',
          ],
        },
      ],
    },
    {
      heading: 'Starting Dose Recommendation and Escalation Rationale',
      level: 1,
      paragraphs: [
        `Based on the above analyses, the recommended FIH starting dose for ${DRUG.code} is 50 mg QD (once daily oral administration). This dose is justified as follows:`,
        `Dose escalation in the Phase 1 study will follow a modified 3+3 design with the following planned dose levels: ${DRUG.doses.join(', ')}. Dose escalation decisions will be guided by safety, tolerability, PK, and PD (pERK inhibition in tumor biopsies and ctDNA dynamics) data reviewed by the Safety Review Committee.`,
      ],
      lists: [
        {
          ordered: false,
          items: [
            'Safety margin: 50 mg is approximately one-half (1/2) of the HED at the dog NOAEL (97 mg), providing a >2-fold safety margin relative to the NOAEL.',
            'Exposure margin: Projected human AUC at 50 mg QD (based on allometric scaling) is approximately 480 ng·h/mL, which is approximately 0.5× the dog NOAEL AUC (980 ng·h/mL) and 0.3× the rat NOAEL AUC (1,420 ng·h/mL).',
            'Pharmacological activity: Projected human plasma concentrations at 50 mg QD are expected to achieve trough levels near the in vivo pERK EC50 (~120 ng/mL), providing the potential for pharmacodynamic activity at the starting dose.',
            'Clinical precedent: Approved KRAS G12C inhibitors (sotorasib, adagrasib) initiated FIH dosing at similar pharmacological activity-based starting doses.',
          ],
        },
      ],
      tables: [
        {
          title: 'Table 3: Proposed Dose Escalation Schema',
          headers: ['Dose Level', 'Dose (QD)', 'Projected AUC₀₋₂₄ (ng·h/mL)', 'Projected AUC / Dog NOAEL AUC', 'Rationale'],
          rows: [
            ['1', '50 mg', '480', '0.49×', 'Starting dose; pharmacological activity expected'],
            ['2', '100 mg', '960', '0.98×', '2× escalation; approaching NOAEL-equivalent exposure'],
            ['3', '200 mg', '1,920', '1.96×', '2× escalation; exceeds NOAEL; monitor hepatic function'],
            ['4', '400 mg', '3,840', '3.92×', '2× escalation; target therapeutic exposure range'],
            ['5', '600 mg', '5,760', '5.88×', '1.5× escalation; maximum planned dose'],
          ],
          footnotes: [
            'AUC projections based on allometric scaling from dog PK (dose-proportional assumption). Actual human PK will be used to refine projections after Dose Level 1.',
            `The recommended Phase 2 dose (RP2D) of ${DRUG.recommendedDose} was subsequently determined based on Phase 1 safety, PK, and efficacy data.`,
          ],
        },
      ],
    },
  ],
};
registerDocument('phase02-first-in-human-dose-justification', fihDoseJustification);
