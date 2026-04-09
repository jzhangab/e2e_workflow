import { registerDocument } from './index';
import { DRUG, TIMELINE } from '../drug-candidate';
import type { DocumentContent } from '../../types';

// =============================================================================
// Phase 01 — Basic Discovery & Target ID
// =============================================================================

// ---------------------------------------------------------------------------
// 1. Target Identification Report (TIER 1)
// ---------------------------------------------------------------------------
const targetIdentificationReport: DocumentContent = {
  documentTitle: `Target Identification Report: KRAS G12C for ${DRUG.indicationShort}`,
  documentNumber: 'RPT-DISC-001',
  version: '2.0',
  date: TIMELINE.targetIdComplete,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Executive Summary',
      level: 1,
      paragraphs: [
        `This report summarizes the target identification and validation activities conducted by ${DRUG.sponsor} to support the selection of KRAS G12C as a high-priority oncology drug target. KRAS G12C is a validated, clinically tractable oncology target present in approximately 13% of non-small cell lung cancer (NSCLC) patients and across multiple other solid tumor types.`,
        `Based on extensive literature review, computational prioritization, and in-house experimental validation, we recommend advancement of a selective allosteric KRAS G12C inhibitor program with the goal of identifying a clinical candidate for NSCLC. The target offers a strong scientific rationale, validated clinical proof-of-concept from first-generation agents, and significant remaining unmet medical need due to acquired resistance and limited durability of response with existing therapies.`,
      ],
    },
    {
      heading: 'Literature Review: KRAS Mutations in Cancer',
      level: 1,
      paragraphs: [
        'KRAS (Kirsten rat sarcoma viral oncogene homologue) is one of the most frequently mutated oncogenes in human cancers. Activating mutations in KRAS occur in approximately 25% of all human tumors, with the highest prevalence in pancreatic ductal adenocarcinoma (>90%), colorectal cancer (~40%), and non-small cell lung cancer (~30%).',
        'Among KRAS mutations in NSCLC, the G12C substitution (glycine to cysteine at codon 12) is the most common, accounting for approximately 40-50% of all KRAS mutations in lung adenocarcinoma. This corresponds to roughly 13% of all NSCLC patients, representing approximately 25,000 new cases annually in the United States alone.',
        'The G12C mutation results in a cysteine residue adjacent to the nucleotide binding pocket, which has proven to be a uniquely exploitable feature for covalent inhibitor design. The mutant cysteine is accessible in the GDP-bound (inactive) state of KRAS, enabling selective targeting of the oncogenic mutant while sparing wild-type KRAS.',
      ],
    },
    {
      heading: 'Genomics and Proteomics Data Supporting Target Selection',
      level: 1,
      paragraphs: [
        'Analysis of The Cancer Genome Atlas (TCGA) and publicly available genomic databases (cBioPortal, COSMIC) confirmed the prevalence and distribution of KRAS G12C mutations. In-house analysis of 4,218 NSCLC patient tumor samples from our biobank confirmed a KRAS G12C prevalence of 12.8% (540/4,218), consistent with published literature.',
        'Proteomic profiling of KRAS G12C-mutant cell lines (NCI-H358, NCI-H23, MIA PaCa-2, SW1573) demonstrated constitutive activation of the RAS/RAF/MEK/ERK signaling cascade, elevated phospho-ERK1/2 levels, and dependency on KRAS-driven signaling for proliferation and survival.',
      ],
      tables: [
        {
          title: 'Table 1: KRAS Mutation Frequency by Tumor Type',
          headers: ['Tumor Type', 'Overall KRAS Mut (%)', 'G12C (%)', 'G12D (%)', 'G12V (%)', 'Other (%)'],
          rows: [
            ['NSCLC (adenocarcinoma)', '32%', '13%', '4%', '7%', '8%'],
            ['Colorectal cancer', '40%', '3%', '13%', '9%', '15%'],
            ['Pancreatic cancer', '92%', '1%', '36%', '28%', '27%'],
            ['Endometrial cancer', '18%', '2%', '7%', '4%', '5%'],
            ['Ovarian cancer (mucinous)', '50%', '5%', '15%', '12%', '18%'],
            ['Cholangiocarcinoma', '15%', '1%', '6%', '3%', '5%'],
          ],
          footnotes: [
            'Source: Internal biobank analysis (N=12,450 samples) and cBioPortal/TCGA data (accessed 2020-11).',
          ],
        },
      ],
    },
    {
      heading: 'Disease Pathway Analysis: RAS/RAF/MEK/ERK Signaling',
      level: 1,
      paragraphs: [
        'KRAS functions as a molecular switch that cycles between an active GTP-bound state and an inactive GDP-bound state. Oncogenic mutations at codon 12 impair intrinsic GTPase activity and reduce sensitivity to GTPase-activating proteins (GAPs), resulting in accumulation of the GTP-bound (active) form.',
        'Active KRAS-GTP engages multiple downstream effector pathways, most prominently the RAF/MEK/ERK mitogen-activated protein kinase (MAPK) cascade and the PI3K/AKT/mTOR pathway. In KRAS G12C-mutant NSCLC, the MAPK pathway is the dominant driver of tumor cell proliferation, survival, and immune evasion.',
        'Pathway dependency mapping using shRNA knockdown and pharmacological inhibition in a panel of 12 KRAS G12C-mutant cell lines confirmed that >90% of tested lines were sensitive to combined KRAS/MEK inhibition, supporting the therapeutic rationale for direct KRAS G12C inhibition.',
      ],
    },
    {
      heading: 'Computational Target Prioritization',
      level: 1,
      paragraphs: [
        'A systematic computational target prioritization was conducted across 87 candidate oncology targets using a multi-parameter scoring algorithm. Parameters included genetic validation score (TCGA dependency data, CRISPR essentiality screens), druggability assessment (binding pocket analysis, historical tractability), competitive landscape positioning, and commercial opportunity.',
        'KRAS G12C ranked #2 out of 87 targets (composite score: 0.91/1.00), surpassed only by EGFR (score: 0.93). The high ranking reflected strong genetic validation (essentiality score: 0.95), the availability of a covalent binding strategy via the mutant cysteine residue (druggability: 0.88), and a large addressable patient population with significant unmet need despite first-generation agents.',
      ],
      tables: [
        {
          title: 'Table 2: Top 10 Targets from Computational Prioritization',
          headers: ['Rank', 'Target', 'Genetic Validation', 'Druggability', 'Competitive Position', 'Commercial', 'Composite Score'],
          rows: [
            ['1', 'EGFR (mut)', '0.97', '0.95', '0.78', '0.92', '0.93'],
            ['2', 'KRAS G12C', '0.95', '0.88', '0.85', '0.91', '0.91'],
            ['3', 'ALK fusion', '0.94', '0.92', '0.70', '0.85', '0.87'],
            ['4', 'KRASG12D', '0.94', '0.72', '0.90', '0.88', '0.86'],
            ['5', 'MET (exon 14)', '0.88', '0.85', '0.82', '0.80', '0.84'],
          ],
          footnotes: [
            'Scoring: 0-1 scale. Composite = weighted average (genetic 30%, druggability 25%, competitive 20%, commercial 25%).',
          ],
        },
      ],
    },
    {
      heading: 'Target Validation Experiments',
      level: 1,
      paragraphs: [
        'In-house target validation experiments were conducted to confirm KRAS G12C dependency and therapeutic potential:',
      ],
      lists: [
        {
          ordered: true,
          items: [
            'CRISPR knockout of KRAS in G12C-mutant cell lines (NCI-H358, NCI-H23, MIA PaCa-2) resulted in >85% reduction in colony formation and >70% reduction in cell viability at 7 days (p<0.001 vs. non-targeting control).',
            'Inducible expression of dominant-negative KRAS S17N in G12C-mutant xenograft models produced dose-dependent tumor growth inhibition (TGI) of 62-78%.',
            'siRNA knockdown of KRAS in a panel of 8 G12C-mutant lines confirmed dependency in 7/8 lines (87.5%), with >50% viability reduction at 72 hours.',
            'Rescue experiments confirmed that constitutive MEK activation partially rescued KRAS knockdown phenotype, validating MAPK as the dominant effector pathway.',
          ],
        },
      ],
    },
    {
      heading: 'Competitive Landscape of KRAS-Targeted Therapies',
      level: 1,
      paragraphs: [
        'The competitive landscape for KRAS G12C-targeted therapies has evolved rapidly. First-generation covalent inhibitors sotorasib (AMG 510, Lumakras) and adagrasib (MRTX849, Krazati) have received FDA approval for previously treated KRAS G12C-mutant NSCLC, demonstrating clinical proof-of-concept. However, significant unmet need remains due to modest response rates (30-43%), limited duration of response (median 8-11 months), and the emergence of acquired resistance.',
      ],
      tables: [
        {
          title: 'Table 3: Competitive Landscape — KRAS G12C Inhibitors',
          headers: ['Agent', 'Company', 'Stage', 'ORR (NSCLC 2L+)', 'Median DoR', 'Key Limitations'],
          rows: [
            ['Sotorasib', 'Amgen', 'Approved (2L)', '37.1%', '11.1 mo', 'P3 missed PFS co-primary; hepatotoxicity'],
            ['Adagrasib', 'Mirati', 'Approved (2L)', '42.9%', '8.5 mo', 'QTc prolongation; CYP3A4 interactions'],
            ['Divarasib', 'Genentech/Roche', 'Phase 3', '53.4%', '14.8 mo', 'GI toxicity; early data'],
            ['Olomorasib', 'Eli Lilly', 'Phase 2', '~50%', 'NR', 'Limited data; dose optimization ongoing'],
            [`${DRUG.code}`, `${DRUG.sponsor.replace(', Inc.', '')}`, 'Discovery', 'TBD', 'TBD', 'Next-gen allosteric mechanism; preclinical'],
          ],
          footnotes: [
            'ORR = objective response rate; DoR = duration of response; 2L = second-line; NR = not reached.',
            'Data as of 2021-Q2. VLX-4070 differentiation based on allosteric binding mode and projected selectivity profile.',
          ],
        },
      ],
    },
    {
      heading: 'Conclusion and Recommendation',
      level: 1,
      paragraphs: [
        'KRAS G12C is a validated, clinically tractable oncology target with demonstrated proof-of-concept in NSCLC. Despite the emergence of first-generation agents, significant unmet need persists due to moderate response rates, limited durability, and acquired resistance. Our computational prioritization and experimental validation confirm KRAS G12C as a high-priority target for Velantis Therapeutics.',
        `We recommend initiation of a discovery program to identify a next-generation selective allosteric KRAS G12C inhibitor with the following target product profile: (1) enhanced potency against KRAS G12C (target IC50 <10 nM), (2) improved selectivity over wild-type KRAS and other RAS isoforms, (3) favorable oral pharmacokinetic profile, and (4) differentiated mechanism of action to address acquired resistance to first-generation agents. This program was initiated on ${TIMELINE.targetIdComplete} and has been designated the ${DRUG.code} program.`,
      ],
    },
  ],
};
registerDocument('phase01-target-identification-report', targetIdentificationReport);

// ---------------------------------------------------------------------------
// 2. Hit-to-Lead Screening Data (Tier 2)
// ---------------------------------------------------------------------------
const hitToLeadScreeningData: DocumentContent = {
  documentTitle: `High-Throughput Screening and Hit-to-Lead Report: ${DRUG.code}`,
  documentNumber: 'RPT-DISC-002',
  version: '1.1',
  date: '2021-09-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'HTS Campaign Summary',
      level: 1,
      paragraphs: [
        `A high-throughput screening (HTS) campaign was conducted to identify novel chemical matter capable of inhibiting KRAS G12C. The primary screen utilized a time-resolved fluorescence energy transfer (TR-FRET) assay measuring displacement of a fluorescent GTP analog from recombinant KRAS G12C protein in the GDP-bound state.`,
        'A total of 1,247,000 compounds from the Velantis diversity and targeted kinase/GTPase libraries were screened at a single concentration of 10 μM. The assay achieved a mean Z\'-factor of 0.72 across 3,890 plates, confirming robust assay performance. The overall hit rate (defined as >50% inhibition at 10 μM) was 0.34% (4,240 primary hits).',
      ],
    },
    {
      heading: 'Hit Identification and Confirmation',
      level: 1,
      paragraphs: [
        'Primary hits (4,240 compounds) were subjected to confirmatory screening in triplicate at 10 μM, yielding 1,862 confirmed hits (44% confirmation rate). Dose-response analysis (10-point, 3-fold dilutions from 30 μM) was performed on all confirmed hits, from which 487 compounds demonstrated IC50 values <5 μM.',
        'Counter-screening against wild-type KRAS (G12 WT) eliminated 218 non-selective compounds. Cheminformatic clustering of the remaining 269 selective hits identified 14 distinct chemical series. Medicinal chemistry assessment (drug-likeness, synthetic tractability, IP novelty) prioritized 4 lead series for follow-up.',
      ],
    },
    {
      heading: 'Structure-Activity Relationship (SAR) Tables',
      level: 1,
      paragraphs: [
        'Representative SAR data for the four prioritized hit series are summarized below. Series A (quinazoline-based covalent warhead) and Series C (pyrido-pyrimidine allosteric scaffold) showed the most promising potency and selectivity profiles.',
      ],
      tables: [
        {
          title: 'Table 1: Representative SAR — Primary Hit Series',
          headers: ['Series', 'Scaffold', 'Representative Cmpd', 'KRAS G12C IC50 (μM)', 'WT KRAS IC50 (μM)', 'Selectivity Index', 'LE', 'LipE'],
          rows: [
            ['A', 'Quinazoline', 'VLT-001234', '0.82', '>30', '>37', '0.34', '3.8'],
            ['B', 'Indazole', 'VLT-001891', '2.4', '18', '7.5', '0.28', '2.9'],
            ['C', 'Pyrido-pyrimidine', 'VLT-002456', '0.45', '>30', '>67', '0.38', '4.2'],
            ['D', 'Benzimidazole', 'VLT-003012', '1.1', '>30', '>27', '0.31', '3.5'],
          ],
          footnotes: [
            'IC50 values determined in TR-FRET biochemical assay (n≥2). LE = ligand efficiency; LipE = lipophilic efficiency.',
            'Selectivity Index = WT IC50 / G12C IC50.',
          ],
        },
      ],
    },
    {
      heading: 'Dose-Response Characterization',
      level: 1,
      paragraphs: [
        'Full dose-response curves were generated for the top 50 compounds across all four series. Compounds were tested in the primary TR-FRET biochemical assay and in a cell-based viability assay using the NCI-H358 (KRAS G12C) cell line alongside the A549 (KRAS G12S) cell line as a selectivity control.',
        'Series C compound VLT-002456 demonstrated a cell-based EC50 of 1.2 μM in NCI-H358 with >20-fold selectivity over A549 (EC50 >25 μM), confirming on-target activity in a cellular context. Dose-response curves showed steep Hill slopes (nH = 1.1-1.4), consistent with a single-site binding model.',
      ],
    },
    {
      heading: 'Lead Series Selection Rationale',
      level: 1,
      paragraphs: [
        'Based on the combined analysis of potency, selectivity, ligand efficiency, drug-likeness properties, structural novelty (FTO assessment), and synthetic tractability, Series C (pyrido-pyrimidine) was selected as the primary lead series, with Series A (quinazoline) retained as a backup series.',
        `Series C offered the best combination of biochemical potency (IC50 = 0.45 μM), selectivity (>67-fold over WT), and ligand efficiency (LE = 0.38). Structural analysis revealed an allosteric binding mode distinct from published KRAS G12C inhibitors, representing a potential differentiation advantage. This series was advanced into lead optimization, ultimately yielding ${DRUG.code} (${DRUG.name}).`,
      ],
    },
  ],
};
registerDocument('phase01-hit-to-lead-screening-data', hitToLeadScreeningData);

// ---------------------------------------------------------------------------
// 3. In Vitro Pharmacology Package (Tier 2)
// ---------------------------------------------------------------------------
const inVitroPharmaPackage: DocumentContent = {
  documentTitle: `In Vitro Pharmacology Package: ${DRUG.fullName}`,
  documentNumber: 'RPT-DISC-003',
  version: '1.2',
  date: '2022-01-10',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Binding Assays',
      level: 1,
      paragraphs: [
        `${DRUG.code} was evaluated in a panel of binding assays to characterize its interaction with KRAS G12C. In the primary biochemical TR-FRET assay, ${DRUG.code} inhibited KRAS G12C with an IC50 of 3.2 nM (95% CI: 2.4-4.1 nM), representing a >140-fold improvement over the original hit compound VLT-002456.`,
        `Surface plasmon resonance (SPR) analysis confirmed covalent binding to KRAS G12C-GDP with a kinact/KI of 1,850 M⁻¹s⁻¹. The covalent modification was confirmed by intact mass spectrometry, showing a mass shift of +487.2 Da consistent with the molecular weight of ${DRUG.code}.`,
      ],
      tables: [
        {
          title: 'Table 1: Biochemical Binding and Potency Data',
          headers: ['Assay', 'Target/Cell Line', 'Parameter', `${DRUG.code}`, 'Sotorasib', 'Adagrasib'],
          rows: [
            ['TR-FRET (biochemical)', 'KRAS G12C-GDP', 'IC50 (nM)', '3.2', '8.1', '5.4'],
            ['SPR (kinetics)', 'KRAS G12C-GDP', 'kinact/KI (M⁻¹s⁻¹)', '1,850', '960', '1,240'],
            ['NanoBRET (cellular)', 'HEK293-KRAS G12C', 'IC50 (nM)', '18', '42', '28'],
          ],
          footnotes: [
            'All values represent geometric mean of ≥3 independent experiments.',
          ],
        },
      ],
    },
    {
      heading: 'Functional Assays',
      level: 1,
      paragraphs: [
        `${DRUG.code} potently inhibited downstream signaling in KRAS G12C-dependent cell lines. In NCI-H358 cells, ${DRUG.code} inhibited phospho-ERK1/2 (pERK) with an EC50 of 24 nM at 2 hours, demonstrating rapid and potent target engagement. Sustained pERK inhibition (>80%) was maintained for 24 hours at concentrations ≥100 nM.`,
        `Antiproliferative activity was assessed across a panel of KRAS G12C-mutant cell lines. ${DRUG.code} demonstrated a median cell viability EC50 of 38 nM (range: 12-95 nM) in G12C-mutant lines, with >500-fold selectivity over KRAS wild-type lines (median EC50 >20 μM).`,
      ],
      tables: [
        {
          title: 'Table 2: Cell-Based Functional Activity',
          headers: ['Cell Line', 'KRAS Status', 'pERK IC50 (nM)', 'Viability EC50 (nM)', 'Selectivity vs WT'],
          rows: [
            ['NCI-H358', 'G12C', '24', '32', '>625'],
            ['NCI-H23', 'G12C', '31', '45', '>444'],
            ['MIA PaCa-2', 'G12C', '19', '28', '>714'],
            ['SW1573', 'G12C', '42', '95', '>211'],
            ['Calu-1', 'G12C', '28', '38', '>526'],
            ['A549', 'G12S (WT at 12C)', '>10,000', '>20,000', 'Reference'],
            ['NCI-H441', 'WT', '>10,000', '>20,000', 'Reference'],
          ],
          footnotes: [
            'pERK IC50 measured at 2 hours by MSD assay. Viability EC50 at 72 hours by CellTiter-Glo. Values are geometric mean of n≥3.',
          ],
        },
      ],
    },
    {
      heading: 'Selectivity Panel',
      level: 1,
      paragraphs: [
        `${DRUG.code} was assessed against a panel of GTPase family members and RAS isoforms to confirm selectivity. No significant inhibition (<15% at 10 μM) was observed against wild-type KRAS, NRAS, HRAS, or any of 24 additional GTPases tested (RAB, RHO, RAC, CDC42 family members).`,
        `In a broad kinase selectivity panel (Eurofins scanMAX, 468 kinases at 1 μM), ${DRUG.code} showed no significant off-target kinase inhibition (all targets <25% inhibition), confirming a highly selective profile.`,
      ],
    },
    {
      heading: 'Mechanism of Action Studies',
      level: 1,
      paragraphs: [
        `${DRUG.mechanismDetail}`,
        `X-ray crystallography of ${DRUG.code} bound to KRAS G12C (2.1 Å resolution) revealed a novel allosteric binding pose in the switch II pocket. Unlike first-generation inhibitors, ${DRUG.code} induces a unique conformational change in the switch I region that more completely disrupts RAF and SOS1 interactions. This enhanced disruption may contribute to the improved potency and the potential to overcome certain resistance mechanisms (e.g., Y96D mutations) that affect first-generation agents.`,
        'Washout experiments demonstrated sustained pERK suppression (>70% inhibition at 8 hours post-washout), consistent with the irreversible covalent mechanism and slow KRAS G12C protein turnover (t1/2 ~24 hours).',
      ],
    },
    {
      heading: 'Summary of In Vitro Pharmacology',
      level: 1,
      paragraphs: [
        `${DRUG.code} is a potent (biochemical IC50 = 3.2 nM) and highly selective allosteric inhibitor of KRAS G12C. It demonstrates robust cellular activity (pERK EC50 = 24 nM, viability EC50 = 32 nM in NCI-H358), >500-fold selectivity over wild-type KRAS in cellular assays, and a clean off-target profile across GTPase and kinase panels. The data support advancement into lead optimization and in vivo pharmacology studies.`,
      ],
    },
  ],
};
registerDocument('phase01-in-vitro-pharmacology-package', inVitroPharmaPackage);

// ---------------------------------------------------------------------------
// 4. Intellectual Property Landscape (Tier 3)
// ---------------------------------------------------------------------------
const ipLandscape: DocumentContent = {
  documentTitle: `Intellectual Property Landscape Assessment: ${DRUG.code} Program`,
  documentNumber: 'RPT-DISC-004',
  version: '1.0',
  date: '2021-12-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Patent Search Methodology and Results',
      level: 1,
      paragraphs: [
        'A comprehensive patent landscape analysis was conducted covering granted patents and published applications in the KRAS G12C inhibitor space. Searches were performed across USPTO, EPO, WIPO, and JPO databases using structure-based, target-based, and keyword-based strategies. The search covered patents published through November 2021.',
        'A total of 347 relevant patent families were identified. Of these, 89 contained claims directed to covalent KRAS G12C inhibitors, 42 covered allosteric modulators of RAS-family GTPases, and 216 were related to combination therapies, biomarker diagnostics, or formulation technologies.',
      ],
    },
    {
      heading: 'Freedom-to-Operate Analysis',
      level: 1,
      paragraphs: [
        `A freedom-to-operate (FTO) analysis was conducted for the ${DRUG.code} chemical series (pyrido-pyrimidine scaffold with allosteric binding mode). The analysis focused on composition-of-matter patents and method-of-treatment claims that could present FTO concerns.`,
        `The FTO analysis concluded that ${DRUG.code} does not fall within the scope of any identified granted claims. Three published applications (Amgen WO2021/041580, Mirati WO2021/097213, and Revolution Medicines WO2021/146512) contain genus claims that could theoretically encompass structurally related compounds, but ${DRUG.code} falls outside these genera based on specific structural distinctions in the allosteric binding moiety and linker region.`,
        'Risk assessment: LOW. No FTO blocking issues identified. Continued monitoring of pending applications recommended on a quarterly basis.',
      ],
    },
    {
      heading: 'IP Strategy Recommendation',
      level: 1,
      paragraphs: [
        `A multi-layered IP strategy is recommended for the ${DRUG.code} program:`,
      ],
      lists: [
        {
          ordered: true,
          items: [
            'Composition-of-matter patent covering VLX-4070 and structurally related pyrido-pyrimidine allosteric KRAS G12C inhibitors (filed: PCT/US2021/062841, priority date: 2021-06-15).',
            'Method-of-treatment patent covering use of VLX-4070 for KRAS G12C-mutant cancers including NSCLC (planned filing Q1 2022).',
            'Crystalline form/polymorph patents covering the selected clinical salt form (planned filing upon salt selection).',
            'Combination therapy patents covering VLX-4070 with SHP2 inhibitors and SOS1 inhibitors (planned filing upon preclinical combination data).',
          ],
        },
      ],
    },
    {
      heading: 'Key Competitor Patents',
      level: 1,
      tables: [
        {
          title: 'Table 1: Key Competitor KRAS G12C Patents',
          headers: ['Patent/App No.', 'Assignee', 'Scope', 'Expiry (est.)', 'FTO Risk'],
          rows: [
            ['US 10,519,146', 'Amgen', 'Sotorasib composition of matter', '2037-11', 'None (distinct scaffold)'],
            ['US 11,058,661', 'Mirati/BMS', 'Adagrasib composition of matter', '2038-06', 'None (distinct scaffold)'],
            ['WO2021/041580', 'Amgen', 'Broad KRAS G12C inhibitor genus', 'Pending', 'Low (VLX-4070 outside genus)'],
            ['WO2021/146512', 'Revolution Medicines', 'RAS(ON) multi-targeting', 'Pending', 'None (different mechanism)'],
            ['US 10,882,847', 'Wellspring Biosciences', 'Switch II pocket binders', '2036-09', 'Low (distinct binding pose)'],
          ],
          footnotes: [
            'FTO risk assessed by external IP counsel (Finnegan, Henderson, Farabow). Last updated 2021-11.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase01-intellectual-property-landscape', ipLandscape);

// ---------------------------------------------------------------------------
// 5. Competitive Intelligence Dossier (Tier 3)
// ---------------------------------------------------------------------------
const competitiveIntelligence: DocumentContent = {
  documentTitle: `Competitive Intelligence Dossier: KRAS G12C in ${DRUG.indicationShort}`,
  documentNumber: 'RPT-DISC-005',
  version: '1.0',
  date: '2021-10-15',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Market Landscape: NSCLC Treatment Paradigm',
      level: 1,
      paragraphs: [
        'Non-small cell lung cancer (NSCLC) accounts for approximately 85% of all lung cancer cases, with an estimated 236,000 new diagnoses and 130,000 deaths annually in the United States. The treatment paradigm for advanced NSCLC has shifted dramatically with the introduction of immune checkpoint inhibitors (ICIs) and targeted therapies for oncogene-driven subsets.',
        'For KRAS G12C-mutant NSCLC, standard first-line treatment consists of platinum-based chemotherapy plus pembrolizumab (or other PD-1/PD-L1 inhibitors), with or without pemetrexed. Upon progression, patients may receive docetaxel ± ramucirumab or a KRAS G12C inhibitor (sotorasib or adagrasib). Despite these options, median overall survival in the second-line setting remains approximately 10-12 months, underscoring the continued unmet need.',
      ],
    },
    {
      heading: 'Pipeline Competitor Profiles',
      level: 1,
      paragraphs: [
        'The KRAS G12C-targeted therapy space has evolved rapidly, with multiple agents at various stages of clinical development.',
      ],
      tables: [
        {
          title: 'Table 1: KRAS G12C Inhibitor Pipeline Landscape',
          headers: ['Agent', 'Company', 'Mechanism', 'Phase', 'Key Clinical Data', 'Differentiation'],
          rows: [
            ['Sotorasib (AMG 510)', 'Amgen', 'Covalent switch II', 'Approved (2L)', 'ORR 37.1%, mPFS 6.8 mo', 'First-in-class; P3 missed OS co-primary'],
            ['Adagrasib (MRTX849)', 'Mirati/BMS', 'Covalent switch II', 'Approved (2L)', 'ORR 42.9%, mPFS 6.5 mo', 'CNS penetrant; QTc liability'],
            ['Divarasib (GDC-6036)', 'Genentech', 'Covalent switch II', 'Phase 3', 'ORR 53.4%, mPFS NR', 'High potency; GI toxicity'],
            ['Olomorasib (LY3537982)', 'Eli Lilly', 'Covalent switch II', 'Phase 2', 'ORR ~50% (prelim)', 'Pan-tumor development'],
            ['JDQ443', 'Novartis', 'Covalent switch II', 'Phase 2', 'ORR 33% (prelim)', 'Combo with TNO155 (SHP2i)'],
            ['RMC-6291', 'Revolution Medicines', 'RAS(ON) tricomplex', 'Phase 1', 'TBD', 'Active-state targeting'],
          ],
          footnotes: [
            'Data as of 2021 Q3. ORR = objective response rate; mPFS = median progression-free survival; NR = not reached.',
          ],
        },
      ],
    },
    {
      heading: 'Unmet Medical Need Assessment',
      level: 1,
      paragraphs: [
        'Despite the approval of first-generation KRAS G12C inhibitors, significant unmet medical needs remain:',
      ],
      lists: [
        {
          ordered: false,
          items: [
            'Response rates of 30-43% leave the majority of patients without meaningful tumor shrinkage.',
            'Median duration of response of 8-11 months indicates that most responders eventually develop acquired resistance.',
            'Acquired resistance mechanisms include KRAS secondary mutations (Y96D, R68S, H95Q), KRAS amplification, bypass pathway activation (MET, EGFR, SHP2), and histological transformation.',
            'Current agents are approved only in the second-line or later setting; first-line data are emerging but not yet practice-changing.',
            'Hepatotoxicity and GI toxicity limit dose intensity and quality of life for a subset of patients.',
          ],
        },
      ],
    },
    {
      heading: 'Differentiation Strategy for VLX-4070',
      level: 1,
      paragraphs: [
        `${DRUG.code} is being developed as a next-generation allosteric KRAS G12C inhibitor with the following key differentiators:`,
      ],
      lists: [
        {
          ordered: true,
          items: [
            'Novel allosteric binding mode: VLX-4070 induces a unique conformational change in switch I that more completely disrupts RAF and SOS1 interactions, potentially overcoming Y96D resistance mutations.',
            'Enhanced potency: Biochemical IC50 of 3.2 nM (vs. 8.1 nM sotorasib, 5.4 nM adagrasib) may translate to deeper clinical responses.',
            'Projected favorable safety: Preclinical selectivity data suggest lower hepatotoxicity risk relative to first-generation agents.',
            'Combination potential: Allosteric mechanism may synergize with SHP2 inhibitors and SOS1 inhibitors, enabling rational combination strategies.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase01-competitive-intelligence-dossier', competitiveIntelligence);

// ---------------------------------------------------------------------------
// 6. Lead Optimization Data (Tier 2)
// ---------------------------------------------------------------------------
const leadOptimizationData: DocumentContent = {
  documentTitle: `Lead Optimization Report: ${DRUG.fullName}`,
  documentNumber: 'RPT-DISC-006',
  version: '1.1',
  date: TIMELINE.leadOptComplete,
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Medicinal Chemistry Optimization',
      level: 1,
      paragraphs: [
        `Starting from hit compound VLT-002456 (KRAS G12C biochemical IC50 = 450 nM), a systematic medicinal chemistry campaign was conducted over 14 months (September 2021 - March 2022) comprising 6 design-make-test-analyze (DMTA) cycles and the synthesis of 842 analogs within the pyrido-pyrimidine series.`,
        `Key optimization strategies included: (1) rigidification of the allosteric binding moiety to improve potency and selectivity, (2) introduction of a spirocyclic linker to improve metabolic stability and reduce CYP3A4 liability, (3) optimization of the covalent warhead reactivity (GSH t1/2 tuning from 15 min to 45 min) to balance potency and selectivity, and (4) physicochemical property optimization to improve oral bioavailability.`,
        `These efforts yielded ${DRUG.code} (${DRUG.name}), a pyrido-pyrimidine-based allosteric covalent inhibitor with IC50 = 3.2 nM and oral bioavailability of 62% in rats.`,
      ],
    },
    {
      heading: 'ADME Profiling Results',
      level: 1,
      tables: [
        {
          title: 'Table 1: ADME Profile of VLX-4070',
          headers: ['Parameter', 'Species/System', 'Value', 'Target Criteria', 'Pass/Fail'],
          rows: [
            ['Microsomal stability (CLint)', 'Human liver microsomes', '8.2 μL/min/mg', '<15 μL/min/mg', 'Pass'],
            ['Microsomal stability (CLint)', 'Rat liver microsomes', '22 μL/min/mg', '<30 μL/min/mg', 'Pass'],
            ['Microsomal stability (CLint)', 'Dog liver microsomes', '14 μL/min/mg', '<25 μL/min/mg', 'Pass'],
            ['Hepatocyte stability (CLint)', 'Human hepatocytes', '5.8 μL/min/million cells', '<10 μL/min/million cells', 'Pass'],
            ['Caco-2 Papp A→B', 'Caco-2 monolayer', '18.2 × 10⁻⁶ cm/s', '>5 × 10⁻⁶ cm/s', 'Pass'],
            ['Caco-2 efflux ratio', 'Caco-2 monolayer', '1.4', '<2.5', 'Pass'],
            ['Plasma protein binding', 'Human plasma', '94.2%', '<99%', 'Pass'],
            ['Plasma protein binding', 'Rat plasma', '91.8%', '<99%', 'Pass'],
            ['Plasma protein binding', 'Dog plasma', '93.1%', '<99%', 'Pass'],
            ['CYP inhibition (3A4)', 'Human recombinant', 'IC50 >30 μM', '>10 μM', 'Pass'],
            ['CYP inhibition (2D6)', 'Human recombinant', 'IC50 >30 μM', '>10 μM', 'Pass'],
            ['CYP inhibition (2C9)', 'Human recombinant', 'IC50 = 22 μM', '>10 μM', 'Pass'],
            ['Solubility (FaSSIF)', 'Biorelevant media', '85 μg/mL', '>20 μg/mL', 'Pass'],
          ],
          footnotes: [
            'CLint = intrinsic clearance; Papp = apparent permeability; FaSSIF = fasted-state simulated intestinal fluid.',
          ],
        },
      ],
    },
    {
      heading: 'Physicochemical Characterization',
      level: 1,
      paragraphs: [
        `${DRUG.code} (free base) has a molecular weight of 487.2 g/mol, cLogP of 2.8, TPSA of 82 Å², and 2 hydrogen bond donors / 6 hydrogen bond acceptors. The compound complies with Lipinski\'s rule of five and Veber\'s rules for oral bioavailability. The aqueous solubility at pH 6.8 is 85 μg/mL in FaSSIF, supporting oral tablet formulation development.`,
      ],
    },
    {
      heading: 'Lead Series Comparison',
      level: 1,
      tables: [
        {
          title: 'Table 2: Comparison of Lead Candidates',
          headers: ['Parameter', 'VLX-4070', 'VLX-4055', 'VLX-4063', 'VLX-4081'],
          rows: [
            ['KRAS G12C IC50 (nM)', '3.2', '5.8', '4.1', '8.4'],
            ['Cell viability EC50 — H358 (nM)', '32', '68', '45', '120'],
            ['pERK EC50 — H358 (nM)', '24', '52', '38', '95'],
            ['WT KRAS selectivity (fold)', '>625', '>300', '>500', '>200'],
            ['HLM CLint (μL/min/mg)', '8.2', '24', '12', '6.5'],
            ['Rat oral F (%)', '62', '34', '48', '71'],
            ['Rat CL (mL/min/kg)', '12', '28', '18', '9'],
            ['hERG IC50 (μM)', '>30', '15', '>30', '>30'],
            ['CYP3A4 TDI', 'Negative', 'Positive', 'Negative', 'Negative'],
            ['GSH warhead t1/2 (min)', '45', '22', '38', '85'],
          ],
          footnotes: [
            'TDI = time-dependent inhibition. HLM = human liver microsomes. F = oral bioavailability.',
            'VLX-4055 deprioritized due to hERG flag and CYP3A4 TDI. VLX-4081 deprioritized due to lower potency.',
          ],
        },
      ],
    },
    {
      heading: 'VLX-4070 Selection Rationale',
      level: 1,
      paragraphs: [
        `${DRUG.code} was selected as the clinical candidate based on the optimal balance of potency (IC50 = 3.2 nM), cellular activity (EC50 = 32 nM), selectivity (>625-fold over WT), ADME properties (oral F = 62%, CLint = 8.2 μL/min/mg in HLM), and a clean safety profile (hERG IC50 >30 μM, no CYP TDI, no genotoxicity flags).`,
        `The candidate nomination was approved by the Velantis Portfolio Review Committee on ${TIMELINE.leadOptComplete}. ${DRUG.code} was advanced into IND-enabling preclinical development.`,
      ],
    },
  ],
};
registerDocument('phase01-lead-optimization-data', leadOptimizationData);

// ---------------------------------------------------------------------------
// 7. Disease Biology & Biomarker Review (Tier 3)
// ---------------------------------------------------------------------------
const diseaseBiomarkerReview: DocumentContent = {
  documentTitle: `Disease Biology and Biomarker Review: KRAS G12C in ${DRUG.indicationShort}`,
  documentNumber: 'RPT-DISC-007',
  version: '1.0',
  date: '2022-02-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'KRAS G12C in NSCLC Biology',
      level: 1,
      paragraphs: [
        'KRAS G12C mutations are the most frequent actionable genomic alteration in NSCLC adenocarcinoma, present in approximately 13% of patients. KRAS G12C-mutant NSCLC is associated with a smoking history in >90% of cases, typically arises in adenocarcinoma histology, and is largely mutually exclusive with other driver alterations (EGFR, ALK, ROS1).',
        'KRAS G12C-mutant tumors exhibit a distinct immune microenvironment characterized by elevated PD-L1 expression (TPS ≥50% in ~35% of cases), higher tumor mutational burden (median TMB ~10 mut/Mb), and an inflamed tumor phenotype with CD8+ T-cell infiltration. This immune-active phenotype may partially explain the responsiveness of these tumors to immune checkpoint inhibitors and the potential for synergy between KRAS G12C inhibition and immunotherapy.',
        'Co-occurring genomic alterations (STK11/LKB1 loss in ~25%, KEAP1 mutation in ~20%, TP53 mutation in ~40%) modulate both prognosis and treatment response. STK11-loss tumors show reduced benefit from immunotherapy but may retain sensitivity to KRAS-targeted therapy.',
      ],
    },
    {
      heading: 'Candidate Biomarker Identification',
      level: 1,
      paragraphs: [
        `The following candidate biomarkers have been identified for the ${DRUG.code} clinical development program:`,
      ],
      tables: [
        {
          title: 'Table 1: Candidate Biomarkers for VLX-4070 Development',
          headers: ['Biomarker', 'Type', 'Assay Platform', 'Purpose', 'Development Stage'],
          rows: [
            ['KRAS G12C mutation', 'Predictive (selection)', 'NGS / PCR', 'Patient selection (enrollment)', 'Validated (CDx planned)'],
            ['Phospho-ERK (pERK)', 'Pharmacodynamic', 'IHC (tumor), MSD (blood)', 'Target engagement / pathway inhibition', 'Exploratory'],
            ['Ki-67', 'Pharmacodynamic', 'IHC (tumor)', 'Proliferation index', 'Exploratory'],
            ['ctDNA (KRAS G12C VAF)', 'Response / resistance', 'ddPCR / NGS (blood)', 'Molecular response monitoring', 'Exploratory'],
            ['STK11/KEAP1 status', 'Prognostic / predictive', 'NGS (tumor)', 'Subgroup stratification', 'Exploratory'],
            ['PD-L1 TPS', 'Predictive (co-variate)', 'IHC (22C3)', 'Immunotherapy exposure stratification', 'Standard of care'],
          ],
          footnotes: [
            'VAF = variant allele frequency; ddPCR = droplet digital PCR; CDx = companion diagnostic.',
          ],
        },
      ],
    },
    {
      heading: 'Patient Stratification Hypotheses',
      level: 1,
      paragraphs: [
        'Based on preclinical data and emerging clinical evidence from first-generation KRAS G12C inhibitors, the following patient stratification hypotheses will be prospectively evaluated:',
      ],
      lists: [
        {
          ordered: false,
          items: [
            'STK11-mutant subgroup: May derive greater relative benefit from VLX-4070 monotherapy compared to immunotherapy; planned as a pre-specified subgroup analysis.',
            'KEAP1-mutant subgroup: Associated with poorer prognosis and potential resistance to KRAS inhibition; monitor for differential efficacy.',
            'High ctDNA clearance (>50% VAF reduction by cycle 2): May predict deeper and more durable responses; evaluate as an early response biomarker.',
            'Co-occurring TP53 mutations: Potential modifier of response duration; stratify in exploratory analyses.',
          ],
        },
      ],
    },
    {
      heading: 'Biomarker Development Plan',
      level: 1,
      paragraphs: [
        'A comprehensive biomarker development plan has been prepared to support the clinical development program. Key activities include: (1) development and validation of the VelaDx KRAS G12C NGS companion diagnostic assay in partnership with Genomic Precision, Inc.; (2) inclusion of mandatory tumor biopsy (archival or fresh) and serial liquid biopsy (ctDNA) in Phase 1 and Phase 2 protocols; (3) exploratory pharmacodynamic biomarker assessment (pERK, Ki-67) in paired biopsies from consenting patients; and (4) retrospective molecular subgroup analyses based on co-mutation status.',
        'The companion diagnostic (VelaDx KRAS G12C NGS Assay) PMA submission is planned to be aligned with the NDA filing timeline.',
      ],
    },
  ],
};
registerDocument('phase01-disease-biology-biomarker-review', diseaseBiomarkerReview);

// ---------------------------------------------------------------------------
// 8. Research-Stage CMC Characterization (Tier 3)
// ---------------------------------------------------------------------------
const researchStageCmc: DocumentContent = {
  documentTitle: `Research-Stage CMC Characterization: ${DRUG.fullName}`,
  documentNumber: 'RPT-DISC-008',
  version: '1.0',
  date: '2022-04-01',
  sponsor: DRUG.sponsor,
  sections: [
    {
      heading: 'Salt and Polymorph Screening',
      level: 1,
      paragraphs: [
        `Salt and polymorph screening was conducted on ${DRUG.code} free base to identify a crystalline form suitable for pharmaceutical development. A total of 18 salt forms were evaluated using 12 counter-acids (HCl, HBr, H2SO4, methanesulfonic acid, besylic acid, tosylic acid, fumaric acid, maleic acid, citric acid, tartaric acid, phosphoric acid, succinic acid) across multiple solvent systems.`,
        `The hydrochloride (HCl) salt was selected based on superior crystallinity (sharp XRPD pattern), high melting point (218°C), favorable hygroscopicity profile (<0.2% water uptake at 75% RH), and excellent aqueous solubility (>2 mg/mL at pH 1.2, 0.12 mg/mL at pH 6.8). Polymorph screening of the HCl salt identified two polymorphic forms (Form I and Form II); Form I was selected as the thermodynamically stable form based on competitive slurry experiments and DSC analysis.`,
      ],
      tables: [
        {
          title: 'Table 1: Salt Form Screening Summary',
          headers: ['Salt Form', 'Crystallinity', 'Melting Point (°C)', 'Hygroscopicity (%w/w at 75% RH)', 'Solubility pH 6.8 (mg/mL)', 'Selected'],
          rows: [
            ['Free base', 'Amorphous', 'N/A', '2.1%', '0.085', 'No'],
            ['HCl (Form I)', 'Crystalline', '218', '0.18%', '0.12', 'Yes'],
            ['HCl (Form II)', 'Crystalline', '205', '0.32%', '0.11', 'No (metastable)'],
            ['Mesylate', 'Crystalline', '195', '0.41%', '0.09', 'No'],
            ['Tosylate', 'Crystalline', '208', '0.25%', '0.10', 'No'],
            ['Fumarate', 'Crystalline', '178', '0.55%', '0.07', 'No'],
          ],
          footnotes: [
            'Crystallinity assessed by XRPD; solubility in biorelevant media (FaSSIF). Full screening data in Appendix A.',
          ],
        },
      ],
    },
    {
      heading: 'Analytical Method Development',
      level: 1,
      paragraphs: [
        'Preliminary analytical methods were developed to support research-stage characterization and early development activities:',
        `Research-grade ${DRUG.code} HCl (Form I) was characterized as having HPLC purity of 99.4% (area), chiral purity >99.5% ee, water content 0.12% (KF), and chloride content 7.25% (theory: 7.31%). These methods will be transferred and validated under GMP during IND-enabling development.`,
      ],
      lists: [
        {
          ordered: false,
          items: [
            'HPLC purity method: Reverse-phase C18 gradient (acetonitrile/water with 0.1% TFA); retention time 8.4 min; LOQ = 0.05% area.',
            'Chiral purity method: Chiralpak IG-3 column, isocratic (heptane/ethanol 85:15); single enantiomer confirmed (>99.5% ee).',
            'Residual solvent analysis: Headspace GC-FID for Class 2 solvents (DCM, DMF, THF).',
            'Karl Fischer titration for water content.',
            'Ion chromatography for chloride content in HCl salt.',
          ],
        },
      ],
    },
    {
      heading: 'Initial Formulation Feasibility',
      level: 1,
      paragraphs: [
        `Preliminary formulation feasibility studies were conducted to assess the suitability of ${DRUG.code} HCl for oral dosage form development. Based on the BCS Class II classification (high permeability, moderate solubility), a conventional immediate-release ${DRUG.formulation.toLowerCase()} formulation approach was selected.`,
        'Prototype tablet formulations were prepared using wet granulation with microcrystalline cellulose (Avicel PH-102), lactose monohydrate, croscarmellose sodium, and magnesium stearate. Tablets were film-coated with Opadry II white. Prototype tablets at 50 mg and 100 mg strengths demonstrated acceptable hardness (8-12 kP), friability (<0.5%), disintegration (<15 min), and dissolution (>85% at 30 min in 0.1N HCl).',
      ],
    },
    {
      heading: 'Preliminary Stability Data',
      level: 1,
      paragraphs: [
        `Preliminary stability studies were conducted on ${DRUG.code} HCl (Form I) drug substance stored in double LDPE bags within HDPE drums. Accelerated (40°C/75% RH) and long-term (25°C/60% RH) conditions were evaluated over an initial 4-week period.`,
        'No significant changes in appearance, HPLC purity, water content, or XRPD pattern were observed at either condition through 4 weeks. The maximum individual impurity increase was 0.02% (from 0.08% to 0.10%) at 40°C/75% RH. These preliminary data support adequate stability for advancement into GMP manufacturing and formal ICH stability studies.',
      ],
      tables: [
        {
          title: 'Table 2: Preliminary Stability Data — Drug Substance (4 Weeks)',
          headers: ['Parameter', 'Initial', '25°C/60% RH (4 wk)', '40°C/75% RH (4 wk)', 'Specification'],
          rows: [
            ['Appearance', 'White crystalline powder', 'Complies', 'Complies', 'White to off-white powder'],
            ['HPLC purity (%)', '99.4', '99.4', '99.3', '≥98.0%'],
            ['Max single impurity (%)', '0.08', '0.08', '0.10', '≤0.5%'],
            ['Total impurities (%)', '0.28', '0.29', '0.32', '≤1.5%'],
            ['Water content (KF, %)', '0.12', '0.14', '0.18', '≤0.5%'],
            ['Form (XRPD)', 'Form I', 'Form I', 'Form I', 'Form I'],
          ],
          footnotes: [
            'Preliminary data from research-grade material. Formal ICH stability studies to be conducted on GMP material.',
          ],
        },
      ],
    },
  ],
};
registerDocument('phase01-research-stage-cmc-characterization', researchStageCmc);
