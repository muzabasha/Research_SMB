// Comprehensive Guide to Avoid Desk Rejections
// Critical checklist for paper submission

export interface DeskRejectionReason {
    id: string
    reason: string
    description: string
    howToAvoid: string[]
    checklistItems: string[]
    examples: {
        wrong: string
        right: string
    }
    severity: 'Critical' | 'High' | 'Medium'
}

export const DESK_REJECTION_REASONS: DeskRejectionReason[] = [
    {
        id: 'scope-mismatch',
        reason: 'Out of Scope',
        description: 'Paper topic does not fit the journal/conference scope',
        severity: 'Critical',
        howToAvoid: [
            'Read journal aims and scope carefully',
            'Review 10-15 recent papers from the venue',
            'Check if your topic appears in recent issues',
            'Look at editorial board expertise',
            'Read author guidelines section on scope',
            'When in doubt, email editor with abstract'
        ],
        checklistItems: [
            '✓ Read journal aims and scope page',
            '✓ Reviewed 10+ recent papers from venue',
            '✓ Confirmed topic appears in recent issues',
            '✓ Checked editorial board expertise matches',
            '✓ Verified no explicit exclusions in guidelines'
        ],
        examples: {
            wrong: 'Submitting pure computer science algorithm paper to medical journal',
            right: 'Submitting AI-for-healthcare paper to medical informatics journal'
        }
    },
    {
        id: 'formatting-violations',
        reason: 'Formatting Violations',
        description: 'Paper does not follow journal template and formatting requirements',
        severity: 'Critical',
        howToAvoid: [
            'Download and use official LaTeX/Word template',
            'Follow page limits strictly (including references)',
            'Use correct citation style (APA, IEEE, Vancouver, etc.)',
            'Match font, spacing, and margin requirements',
            'Number all pages, figures, and tables',
            'Follow figure/table caption format exactly',
            'Check supplementary material format'
        ],
        checklistItems: [
            '✓ Used official journal template',
            '✓ Within page limit (including references)',
            '✓ Correct citation style applied',
            '✓ All pages numbered',
            '✓ All figures/tables numbered and captioned',
            '✓ Font and spacing match requirements',
            '✓ Margins are correct',
            '✓ Line numbers added (if required)'
        ],
        examples: {
            wrong: 'Using generic template, 15 pages when limit is 10, wrong citation style',
            right: 'Official template, 9 pages, correct IEEE citation style throughout'
        }
    },
    {
        id: 'incomplete-submission',
        reason: 'Incomplete Submission',
        description: 'Missing required documents or information',
        severity: 'Critical',
        howToAvoid: [
            'Read submission checklist in author guidelines',
            'Prepare all documents before starting submission',
            'Include cover letter explaining significance',
            'Provide all author information (ORCID, affiliations)',
            'Upload supplementary materials if required',
            'Include data availability statement',
            'Provide ethics approval documents',
            'Submit graphical abstract if required'
        ],
        checklistItems: [
            '✓ Main manuscript uploaded',
            '✓ Cover letter included',
            '✓ All author details complete (ORCID, email, affiliation)',
            '✓ Supplementary materials uploaded',
            '✓ Ethics approval documents attached',
            '✓ Data availability statement included',
            '✓ Conflict of interest statement provided',
            '✓ Funding information declared',
            '✓ Graphical abstract uploaded (if required)',
            '✓ Highlights/significance statement provided'
        ],
        examples: {
            wrong: 'Submitting only PDF, no cover letter, missing author ORCIDs',
            right: 'Complete package: manuscript, cover letter, all author info, supplementary files'
        }
    },
    {
        id: 'poor-english',
        reason: 'Poor English Quality',
        description: 'Language quality is too poor to review',
        severity: 'High',
        howToAvoid: [
            'Use grammar checking tools (Grammarly, LanguageTool)',
            'Get native English speaker to proofread',
            'Use professional editing service if needed',
            'Read paper aloud to catch awkward phrasing',
            'Have colleague review for clarity',
            'Use simple, clear sentences',
            'Avoid machine translation without editing'
        ],
        checklistItems: [
            '✓ Ran grammar checker (Grammarly/LanguageTool)',
            '✓ Proofread by native English speaker',
            '✓ No machine translation artifacts',
            '✓ Consistent tense usage',
            '✓ Clear, simple sentences',
            '✓ Technical terms used correctly',
            '✓ No spelling errors',
            '✓ Proper punctuation throughout'
        ],
        examples: {
            wrong: 'Many grammar error. Result is very good. We are doing experiment.',
            right: 'We conducted experiments and achieved significant improvements in accuracy.'
        }
    },
    {
        id: 'plagiarism',
        reason: 'Plagiarism or Self-Plagiarism',
        description: 'Significant text overlap with other publications',
        severity: 'Critical',
        howToAvoid: [
            'Write in your own words, do not copy-paste',
            'Properly cite and quote when using others\' text',
            'Paraphrase instead of copying',
            'Check similarity with Turnitin/iThenticate',
            'Rewrite methods section even if similar to your previous work',
            'Cite your own previous papers when building on them',
            'Keep similarity score below 15-20%'
        ],
        checklistItems: [
            '✓ Checked with plagiarism detector (Turnitin/iThenticate)',
            '✓ Similarity score < 15-20%',
            '✓ All quotes properly attributed',
            '✓ Methods section rewritten (not copied from previous work)',
            '✓ No copy-paste from other papers',
            '✓ Own previous work properly cited',
            '✓ Paraphrased instead of copying'
        ],
        examples: {
            wrong: 'Copying entire paragraphs from other papers or your own previous work',
            right: 'Paraphrasing ideas and citing sources, writing methods in your own words'
        }
    },
    {
        id: 'duplicate-submission',
        reason: 'Duplicate or Concurrent Submission',
        description: 'Paper is already published or under review elsewhere',
        severity: 'Critical',
        howToAvoid: [
            'Submit to only ONE journal at a time',
            'Wait for rejection before submitting elsewhere',
            'Withdraw from previous venue before resubmitting',
            'Declare if work is on preprint server',
            'Ensure paper is substantially different from conference version',
            'Check journal policy on preprints and conference papers',
            'Be honest in cover letter about previous submissions'
        ],
        checklistItems: [
            '✓ Not currently under review elsewhere',
            '✓ Not published elsewhere',
            '✓ Withdrawn from previous venue (if applicable)',
            '✓ Preprint status declared in cover letter',
            '✓ Conference version properly cited (if extending)',
            '✓ Substantial new content added (>30% for journal extension)',
            '✓ Checked journal policy on preprints'
        ],
        examples: {
            wrong: 'Submitting same paper to 3 journals simultaneously',
            right: 'Submitting to one journal, waiting for decision before trying another'
        }
    },
    {
        id: 'insufficient-novelty',
        reason: 'Insufficient Novelty or Contribution',
        description: 'Work is too incremental or lacks clear contribution',
        severity: 'High',
        howToAvoid: [
            'Clearly state contributions in introduction (use bullet points)',
            'Explain what is NEW compared to existing work',
            'Show significant improvement (>5-10% for top venues)',
            'Provide comprehensive comparison with baselines',
            'Highlight unique aspects of your approach',
            'Explain why the problem is important',
            'Demonstrate broader impact'
        ],
        checklistItems: [
            '✓ Contributions clearly stated in introduction',
            '✓ Novelty explicitly explained',
            '✓ Significant improvement shown (>5-10%)',
            '✓ Compared with 5+ recent baselines',
            '✓ Unique aspects highlighted',
            '✓ Problem importance justified',
            '✓ Broader impact discussed'
        ],
        examples: {
            wrong: 'We applied existing method X to problem Y (no novelty)',
            right: 'We developed novel method X that addresses limitation Y, achieving Z% improvement'
        }
    },
    {
        id: 'inadequate-validation',
        reason: 'Inadequate Experimental Validation',
        description: 'Insufficient experiments, small dataset, or weak baselines',
        severity: 'High',
        howToAvoid: [
            'Use sufficiently large dataset (>1000 samples minimum)',
            'Compare with 5+ recent state-of-the-art methods',
            'Perform statistical significance tests',
            'Include ablation studies',
            'Test on multiple datasets if possible',
            'Report multiple metrics (not just accuracy)',
            'Include error analysis',
            'Provide confidence intervals'
        ],
        checklistItems: [
            '✓ Dataset size adequate (>1000 samples)',
            '✓ Compared with 5+ recent methods',
            '✓ Statistical significance tests performed',
            '✓ Ablation studies included',
            '✓ Multiple metrics reported',
            '✓ Error analysis provided',
            '✓ Confidence intervals included',
            '✓ Results reproducible (code/data available)'
        ],
        examples: {
            wrong: 'Tested on 100 samples, compared with 1 baseline, no statistical tests',
            right: 'Tested on 10,000 samples, compared with 7 methods, p-values reported, ablation study'
        }
    },
    {
        id: 'missing-ethics',
        reason: 'Missing Ethics Approval',
        description: 'No IRB approval for human subjects or animal research',
        severity: 'Critical',
        howToAvoid: [
            'Obtain IRB/ethics approval BEFORE conducting study',
            'Include ethics approval number in manuscript',
            'Describe informed consent process',
            'Explain data privacy measures',
            'Follow GDPR/HIPAA requirements',
            'Get approval for secondary data use',
            'Include ethics statement in methods section'
        ],
        checklistItems: [
            '✓ IRB/ethics approval obtained',
            '✓ Approval number stated in manuscript',
            '✓ Informed consent described',
            '✓ Data privacy measures explained',
            '✓ GDPR/HIPAA compliance confirmed',
            '✓ Ethics statement in methods section',
            '✓ Approval documents uploaded'
        ],
        examples: {
            wrong: 'Used patient data without mentioning ethics approval',
            right: 'Study approved by XYZ IRB (approval #12345), informed consent obtained from all participants'
        }
    },
    {
        id: 'poor-presentation',
        reason: 'Poor Presentation Quality',
        description: 'Unclear writing, poor figures, or disorganized structure',
        severity: 'Medium',
        howToAvoid: [
            'Follow IMRaD structure (Introduction, Methods, Results, Discussion)',
            'Use high-resolution figures (300 DPI minimum)',
            'Label all axes clearly with units',
            'Make figures colorblind-friendly',
            'Write clear, concise captions',
            'Use consistent terminology throughout',
            'Create logical flow between sections',
            'Proofread multiple times'
        ],
        checklistItems: [
            '✓ Follows IMRaD structure',
            '✓ All figures high resolution (300 DPI)',
            '✓ Axes labeled with units',
            '✓ Colorblind-friendly palette used',
            '✓ Clear, self-explanatory captions',
            '✓ Consistent terminology',
            '✓ Logical section flow',
            '✓ Proofread 3+ times'
        ],
        examples: {
            wrong: 'Low-res figures, unlabeled axes, inconsistent terms, poor organization',
            right: 'High-res figures, clear labels, consistent terminology, logical flow'
        }
    },
    {
        id: 'missing-data-code',
        reason: 'Missing Data/Code Availability',
        description: 'No statement about data and code availability',
        severity: 'Medium',
        howToAvoid: [
            'Include data availability statement',
            'Provide code repository link (GitHub)',
            'Explain if data cannot be shared (privacy, proprietary)',
            'Offer to share upon reasonable request',
            'Deposit data in public repository (Zenodo, Figshare)',
            'Follow FAIR principles (Findable, Accessible, Interoperable, Reusable)',
            'Include README with instructions'
        ],
        checklistItems: [
            '✓ Data availability statement included',
            '✓ Code repository link provided (if applicable)',
            '✓ Data deposited in public repository (if possible)',
            '✓ Restrictions explained (if data cannot be shared)',
            '✓ README with instructions included',
            '✓ License specified (MIT, Apache, CC-BY)',
            '✓ DOI assigned to data/code'
        ],
        examples: {
            wrong: 'No mention of data or code availability',
            right: 'Data available at Zenodo (DOI: 10.5281/zenodo.123456), code at github.com/user/repo'
        }
    },
    {
        id: 'inappropriate-citations',
        reason: 'Inappropriate or Missing Citations',
        description: 'Missing key references, excessive self-citations, or citation manipulation',
        severity: 'Medium',
        howToAvoid: [
            'Cite all relevant prior work',
            'Include recent papers (last 2-3 years)',
            'Cite original sources, not secondary',
            'Keep self-citations under 20%',
            'Cite competitors fairly',
            'Do not cite papers just to increase their citations',
            'Follow journal citation style exactly'
        ],
        checklistItems: [
            '✓ All key papers in field cited',
            '✓ Recent papers (last 2-3 years) included',
            '✓ Original sources cited',
            '✓ Self-citations < 20%',
            '✓ Competitors cited fairly',
            '✓ No citation manipulation',
            '✓ Correct citation format used'
        ],
        examples: {
            wrong: '50% self-citations, missing key competitor papers, wrong citation format',
            right: 'Balanced citations, all key papers included, correct format'
        }
    }
]

// Pre-submission checklist organized by timeline
export interface SubmissionPhase {
    phase: string
    timing: string
    tasks: string[]
    estimatedTime: string
}

export const SUBMISSION_TIMELINE: SubmissionPhase[] = [
    {
        phase: '1. Two Weeks Before Submission',
        timing: '14 days before deadline',
        estimatedTime: '10-15 hours',
        tasks: [
            'Select target journal/conference',
            'Read author guidelines completely (2-3 times)',
            'Download official template',
            'Review 10 recent papers from venue',
            'Prepare cover letter draft',
            'Collect all author information (ORCID, affiliations)',
            'Identify suggested reviewers (3-5)',
            'Identify excluded reviewers (if any)',
            'Check ethics approval documents',
            'Prepare data/code repositories'
        ]
    },
    {
        phase: '2. One Week Before Submission',
        timing: '7 days before deadline',
        estimatedTime: '15-20 hours',
        tasks: [
            'Format paper using official template',
            'Check page limits (including references)',
            'Verify all figures are high resolution (300 DPI)',
            'Ensure all tables are properly formatted',
            'Check citation style matches requirements',
            'Run plagiarism check (Turnitin/iThenticate)',
            'Get colleague to proofread',
            'Prepare supplementary materials',
            'Create graphical abstract (if required)',
            'Write highlights/significance statement'
        ]
    },
    {
        phase: '3. Three Days Before Submission',
        timing: '3 days before deadline',
        estimatedTime: '8-10 hours',
        tasks: [
            'Final proofread by all co-authors',
            'Verify all author contributions',
            'Check conflict of interest statements',
            'Verify funding acknowledgments',
            'Ensure data availability statement is clear',
            'Test all supplementary material links',
            'Finalize cover letter',
            'Prepare response to potential desk rejection',
            'Save all files in required formats',
            'Create backup copies'
        ]
    },
    {
        phase: '4. Submission Day',
        timing: 'Day of deadline',
        estimatedTime: '2-3 hours',
        tasks: [
            'Create account on submission system',
            'Fill all required fields carefully',
            'Upload manuscript in correct format',
            'Upload supplementary materials',
            'Upload cover letter',
            'Enter all author details',
            'Suggest reviewers',
            'Exclude reviewers (if needed)',
            'Review submission preview carefully',
            'Submit before deadline (not at last minute!)',
            'Save submission confirmation email',
            'Notify all co-authors of submission'
        ]
    },
    {
        phase: '5. Post-Submission',
        timing: 'After submission',
        estimatedTime: '1-2 hours',
        tasks: [
            'Save all submission files in organized folder',
            'Document submission date and venue',
            'Set reminder to check status (2-4 weeks)',
            'Prepare for potential revisions',
            'Start working on next paper',
            'Monitor email for editor communications',
            'Be ready to respond to queries quickly',
            'Plan backup venues if rejected'
        ]
    }
]

// Common desk rejection scenarios and solutions
export interface RejectionScenario {
    scenario: string
    editorMessage: string
    whatWentWrong: string
    howToFix: string[]
    nextSteps: string[]
}

export const REJECTION_SCENARIOS: RejectionScenario[] = [
    {
        scenario: 'Scope Mismatch',
        editorMessage: 'Your manuscript does not fit within the scope of our journal.',
        whatWentWrong: 'You submitted to wrong venue - topic does not match journal focus',
        howToFix: [
            'Read aims and scope more carefully',
            'Review recent papers from venue',
            'Check editorial board expertise',
            'Look for journals that published similar work'
        ],
        nextSteps: [
            'Identify 3-5 more appropriate venues',
            'Read their recent papers',
            'Reformat for new venue',
            'Submit within 1 week'
        ]
    },
    {
        scenario: 'Formatting Issues',
        editorMessage: 'Your manuscript does not follow our formatting guidelines.',
        whatWentWrong: 'Did not use official template or violated formatting rules',
        howToFix: [
            'Download official template',
            'Reformat entire paper',
            'Check page limits',
            'Verify citation style',
            'Ensure all figures/tables are formatted correctly'
        ],
        nextSteps: [
            'Use official template',
            'Reformat within 2-3 days',
            'Have colleague verify formatting',
            'Resubmit to same venue'
        ]
    },
    {
        scenario: 'Insufficient Novelty',
        editorMessage: 'The contribution is not significant enough for our journal.',
        whatWentWrong: 'Work is too incremental or novelty is not clear',
        howToFix: [
            'Rewrite introduction to highlight novelty',
            'Add more experiments/comparisons',
            'Strengthen contribution statement',
            'Add ablation studies',
            'Consider submitting to lower-tier venue'
        ],
        nextSteps: [
            'Strengthen experiments (2-3 weeks)',
            'Rewrite introduction',
            'Submit to mid-tier venue',
            'Or add more work and resubmit to top venue later'
        ]
    },
    {
        scenario: 'Poor English Quality',
        editorMessage: 'The language quality requires significant improvement before review.',
        whatWentWrong: 'Too many grammar errors, unclear writing',
        howToFix: [
            'Get professional editing service',
            'Have native speaker proofread',
            'Use grammar checking tools',
            'Simplify complex sentences',
            'Rewrite unclear sections'
        ],
        nextSteps: [
            'Get professional editing (1 week)',
            'Proofread carefully',
            'Resubmit to same venue',
            'Budget for editing in future'
        ]
    },
    {
        scenario: 'Incomplete Submission',
        editorMessage: 'Your submission is missing required documents.',
        whatWentWrong: 'Did not include all required files or information',
        howToFix: [
            'Review submission checklist',
            'Prepare all missing documents',
            'Complete all required fields',
            'Upload all supplementary materials'
        ],
        nextSteps: [
            'Gather missing documents (1-2 days)',
            'Complete submission',
            'Resubmit immediately',
            'Create checklist for future submissions'
        ]
    }
]

// Quick reference card for submission day
export const SUBMISSION_DAY_CHECKLIST = {
    title: 'Submission Day Quick Checklist',
    critical: [
        '□ Manuscript in official template',
        '□ Within page limit',
        '□ All authors approved',
        '□ Cover letter included',
        '□ Plagiarism check done (<15% similarity)',
        '□ All figures high resolution (300 DPI)',
        '□ Correct citation style',
        '□ Ethics approval included (if needed)',
        '□ Data availability statement',
        '□ Conflict of interest declared'
    ],
    important: [
        '□ Supplementary materials uploaded',
        '□ Graphical abstract (if required)',
        '□ Suggested reviewers (3-5)',
        '□ All author ORCIDs',
        '□ Funding information',
        '□ Keywords selected',
        '□ Abstract within word limit',
        '□ Highlights/significance statement'
    ],
    optional: [
        '□ Excluded reviewers list',
        '□ Preprint posted (arXiv/bioRxiv)',
        '□ Code repository link',
        '□ Video abstract',
        '□ Plain language summary'
    ]
}

// Helper functions
export function getDeskRejectionById(id: string): DeskRejectionReason | undefined {
    return DESK_REJECTION_REASONS.find(reason => reason.id === id)
}

export function getCriticalReasons(): DeskRejectionReason[] {
    return DESK_REJECTION_REASONS.filter(reason => reason.severity === 'Critical')
}

export function getSubmissionPhaseByName(phase: string): SubmissionPhase | undefined {
    return SUBMISSION_TIMELINE.find(p => p.phase === phase)
}

export function getRejectionScenarioByType(scenario: string): RejectionScenario | undefined {
    return REJECTION_SCENARIOS.find(s => s.scenario === scenario)
}
