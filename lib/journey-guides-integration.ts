// Integration of all guide files into journey stages

import { PAPER_COMPONENTS, VENUE_BY_OUTCOME } from './paper-writing-guide'
import { DESK_REJECTION_REASONS, SUBMISSION_TIMELINE } from './desk-rejection-guide'
import { REVIEWER_COMMENT_TYPES, RESPONSE_STRATEGIES } from './reviewer-response-guide'
import { PROPOSAL_COMPONENTS } from './proposal-drafting-guide'
import { INDUSTRY_PROPOSAL_COMPONENTS } from './industry-proposal-guide'
import { PATENT_TYPES, PATENT_FILING_PROCESS } from './patent-drafting-guide'
import { getTemplatesByStage } from './templates-data'
import { getActivitiesByStage } from './interactive-activities'

export interface StageGuide {
    stageId: number
    stageName: string
    guides: GuideReference[]
    templates: string[]
    activities: string[]
    practicalExercises: PracticalExercise[]
}

export interface GuideReference {
    id: string
    title: string
    description: string
    type: 'component' | 'checklist' | 'example' | 'process' | 'strategy'
    source: string
    content: any
}

export interface PracticalExercise {
    id: string
    title: string
    description: string
    duration: string
    steps: string[]
    deliverable: string
}

// Stage 1: Domain Knowledge Discovery
export const STAGE_1_GUIDES: StageGuide = {
    stageId: 1,
    stageName: 'Domain Knowledge Discovery',
    guides: [],
    templates: [
        'domain-matrix',
        'domain-decision-tree',
        'top-domains-list',
        'researcher-interview-template'
    ],
    activities: [
        'domain-speed-dating'
    ],
    practicalExercises: [
        {
            id: 'domain-exploration',
            title: 'Explore 5 Research Domains',
            description: 'Spend 1 day on each domain to understand landscape',
            duration: '5 days',
            steps: [
                'Read 2 recent papers in the domain',
                'Watch 1 expert talk/webinar',
                'Identify 3 interesting problems',
                'Check funding opportunities',
                'Rate domain on interest, feasibility, funding, impact'
            ],
            deliverable: 'Domain comparison matrix with scores and final choice'
        }
    ]
}

// Stage 2: Research Article Reading
export const STAGE_2_GUIDES: StageGuide = {
    stageId: 2,
    stageName: 'Research Article Reading',
    guides: [],
    templates: [
        'paper-annotation-template',
        'critical-reading-checklist',
        'reading-tracker',
        'sample-annotated-paper',
        'mendeley-guide'
    ],
    activities: [
        '30-day-reading-challenge'
    ],
    practicalExercises: [
        {
            id: 'three-pass-reading',
            title: 'Master 3-Pass Reading Method',
            description: 'Learn to read papers efficiently in 3 passes',
            duration: '1 week',
            steps: [
                'Pass 1: Read abstract, introduction, conclusion (10 mins)',
                'Pass 2: Read section headings, figures, tables (30 mins)',
                'Pass 3: Read full paper, take detailed notes (2 hours)',
                'Create summary with key contributions, methods, results',
                'Identify limitations and future work'
            ],
            deliverable: 'Annotated paper with structured notes'
        }
    ]
}

// Stage 3: Research Gap Identification
export const STAGE_3_GUIDES: StageGuide = {
    stageId: 3,
    stageName: 'Research Gap Identification',
    guides: [],
    templates: [
        'gap-analysis-canvas',
        'swot-analysis-template',
        'problem-statement-generator',
        'gap-validation-checklist',
        'literature-review-matrix'
    ],
    activities: [
        'gap-matrix-workshop'
    ],
    practicalExercises: [
        {
            id: 'gap-validation',
            title: 'Validate Your Research Gap',
            description: 'Ensure your identified gap is research-worthy',
            duration: '3 days',
            steps: [
                'Check if gap is truly unsolved (search thoroughly)',
                'Validate importance (talk to 3 researchers/industry)',
                'Assess feasibility (do you have resources?)',
                'Check funding availability (search grant databases)',
                'Estimate impact (how many people benefit?)'
            ],
            deliverable: 'Gap validation report with evidence'
        }
    ]
}

// Stage 4: Research Implementation
export const STAGE_4_GUIDES: StageGuide = {
    stageId: 4,
    stageName: 'Research Implementation',
    guides: [],
    templates: [
        'experiment-design-template',
        'research-journal-template',
        'data-collection-spreadsheet',
        'agile-sprint-board',
        'ethics-approval-checklist'
    ],
    activities: [
        'agile-research-sprint'
    ],
    practicalExercises: [
        {
            id: 'experiment-design',
            title: 'Design Rigorous Experiments',
            description: 'Plan experiments with proper controls and validation',
            duration: '1 week',
            steps: [
                'Define research questions and hypotheses',
                'Identify independent and dependent variables',
                'Design control experiments',
                'Plan data collection methodology',
                'Define success metrics and evaluation criteria',
                'Get ethics approval if needed'
            ],
            deliverable: 'Detailed experiment design document'
        }
    ]
}

// Stage 5: Research Paper Drafting
export const STAGE_5_GUIDES: StageGuide = {
    stageId: 5,
    stageName: 'Research Paper Drafting',
    guides: [
        {
            id: 'paper-components',
            title: 'Paper Writing Components',
            description: 'Detailed guide for each section of research paper',
            type: 'component',
            source: 'paper-writing-guide.ts',
            content: PAPER_COMPONENTS
        },
        {
            id: 'publication-venues',
            title: 'Publication Venue Selection',
            description: 'Choose right journal/conference based on research outcome',
            type: 'strategy',
            source: 'paper-writing-guide.ts',
            content: VENUE_BY_OUTCOME
        },
        {
            id: 'desk-rejection-prevention',
            title: 'Avoid Desk Rejection',
            description: 'Common reasons for desk rejection and how to avoid them',
            type: 'checklist',
            source: 'desk-rejection-guide.ts',
            content: DESK_REJECTION_REASONS
        },
        {
            id: 'submission-timeline',
            title: 'Submission Timeline',
            description: '5-phase timeline from 2 weeks before to post-submission',
            type: 'process',
            source: 'desk-rejection-guide.ts',
            content: SUBMISSION_TIMELINE
        }
    ],
    templates: [
        'paper-structure-latex',
        'paper-structure-word',
        'paper-writing-checklist',
        'figure-guidelines',
        'sample-good-paper',
        'sample-bad-paper'
    ],
    activities: [
        '30-day-writing-challenge'
    ],
    practicalExercises: [
        {
            id: 'paper-dissection',
            title: 'Dissect a Top-Tier Paper',
            description: 'Analyze structure and writing of highly-cited paper',
            duration: '2 days',
            steps: [
                'Choose highly-cited paper (>500 citations) in your domain',
                'Analyze title: keywords, structure, appeal',
                'Dissect abstract: problem, gap, solution, results, impact',
                'Study introduction: hook, motivation, contributions',
                'Examine methodology: clarity, reproducibility, rigor',
                'Analyze results: presentation, visualization, analysis',
                'Review discussion: interpretation, limitations, future work'
            ],
            deliverable: 'Paper dissection report with learnings'
        }
    ]
}

// Stage 5B: Post-Submission (Reviewer Response)
export const STAGE_5B_GUIDES: StageGuide = {
    stageId: 5,
    stageName: 'Reviewer Response (Post-Submission)',
    guides: [
        {
            id: 'reviewer-comments',
            title: 'Handling Reviewer Comments',
            description: 'How to respond to different types of reviewer comments',
            type: 'strategy',
            source: 'reviewer-response-guide.ts',
            content: REVIEWER_COMMENT_TYPES
        },
        {
            id: 'response-strategies',
            title: 'Response Strategies',
            description: 'Strategies for different reviewer tones',
            type: 'strategy',
            source: 'reviewer-response-guide.ts',
            content: RESPONSE_STRATEGIES
        }
    ],
    templates: [],
    activities: [],
    practicalExercises: [
        {
            id: 'mock-review-response',
            title: 'Practice Responding to Reviews',
            description: 'Simulate reviewer comments and practice responses',
            duration: '1 week',
            steps: [
                'Get sample reviewer comments (from guide or peers)',
                'Categorize comments: major, minor, editorial',
                'Draft point-by-point response for each comment',
                'Revise paper based on comments',
                'Write cover letter summarizing changes',
                'Get feedback from advisor/peers'
            ],
            deliverable: 'Response letter and revised manuscript'
        }
    ]
}

// Stage 6: Patent Drafting
export const STAGE_6_GUIDES: StageGuide = {
    stageId: 6,
    stageName: 'Patent Drafting',
    guides: [
        {
            id: 'patent-types',
            title: 'Types of Patents',
            description: 'Design, Utility, National, International patents',
            type: 'component',
            source: 'patent-drafting-guide.ts',
            content: PATENT_TYPES
        },
        {
            id: 'patent-process',
            title: 'Patent Filing Process',
            description: '5-step process from prior art search to grant',
            type: 'process',
            source: 'patent-drafting-guide.ts',
            content: PATENT_FILING_PROCESS
        }
    ],
    templates: [
        'patent-claims-worksheet',
        'prior-art-search-template',
        'patent-application-checklist',
        'sample-patent'
    ],
    activities: [
        'patent-claims-builder'
    ],
    practicalExercises: [
        {
            id: 'prior-art-search',
            title: 'Conduct Prior Art Search',
            description: 'Search existing patents to ensure novelty',
            duration: '3 days',
            steps: [
                'Search Google Patents with keywords',
                'Search Indian Patent Office database',
                'Search international databases (USPTO, EPO)',
                'Document all relevant patents found',
                'Analyze claims of similar patents',
                'Identify what makes your invention novel'
            ],
            deliverable: 'Prior art search report with novelty analysis'
        }
    ]
}

// Stage 7: Seed Money Proposal
export const STAGE_7_GUIDES: StageGuide = {
    stageId: 7,
    stageName: 'Seed Money Proposal',
    guides: [
        {
            id: 'proposal-components-seed',
            title: 'Seed Proposal Components',
            description: 'Essential components for seed funding proposals',
            type: 'component',
            source: 'proposal-drafting-guide.ts',
            content: PROPOSAL_COMPONENTS.slice(0, 6) // First 6 components for seed
        }
    ],
    templates: [
        'seed-proposal-template',
        'budget-calculator-seed',
        'sample-funded-seed'
    ],
    activities: [
        'proposal-writing-sprint'
    ],
    practicalExercises: [
        {
            id: 'budget-preparation',
            title: 'Prepare Realistic Budget',
            description: 'Create detailed, justified budget for seed funding',
            duration: '2 days',
            steps: [
                'List all required resources (personnel, equipment, consumables)',
                'Get vendor quotations for equipment',
                'Calculate personnel costs (salaries, benefits)',
                'Estimate travel and fieldwork costs',
                'Add contingency (5-10%)',
                'Write justification for each line item'
            ],
            deliverable: 'Detailed budget with justifications'
        }
    ]
}

// Stage 8: National Funding Proposal
export const STAGE_8_GUIDES: StageGuide = {
    stageId: 8,
    stageName: 'National Funding Proposal',
    guides: [
        {
            id: 'proposal-components-national',
            title: 'National Proposal Components',
            description: 'Complete components for SERB/DST proposals',
            type: 'component',
            source: 'proposal-drafting-guide.ts',
            content: PROPOSAL_COMPONENTS // All 10 components
        }
    ],
    templates: [
        'national-proposal-template',
        'budget-calculator-national',
        'gantt-chart-generator',
        'sample-funded-national'
    ],
    activities: [
        'proposal-writing-sprint'
    ],
    practicalExercises: [
        {
            id: 'impact-articulation',
            title: 'Articulate Broader Impact',
            description: 'Show scientific, societal, and economic impact',
            duration: '2 days',
            steps: [
                'Quantify scientific impact (papers, citations, collaborations)',
                'Calculate societal impact (people benefited, problems solved)',
                'Estimate economic impact (cost savings, jobs created)',
                'Show policy impact (recommendations, guidelines)',
                'Demonstrate sustainability beyond funding period',
                'Explain scalability to other regions/problems'
            ],
            deliverable: 'Impact statement with quantified metrics'
        }
    ]
}

// Stage 9: International Funding Proposal
export const STAGE_9_GUIDES: StageGuide = {
    stageId: 9,
    stageName: 'International Funding Proposal',
    guides: [
        {
            id: 'proposal-components-international',
            title: 'International Proposal Components',
            description: 'Components for EU Horizon, NIH, NSF proposals',
            type: 'component',
            source: 'proposal-drafting-guide.ts',
            content: PROPOSAL_COMPONENTS
        }
    ],
    templates: [
        'international-proposal-template',
        'collaboration-agreement',
        'impact-calculator'
    ],
    activities: [
        'proposal-writing-sprint'
    ],
    practicalExercises: [
        {
            id: 'international-collaboration',
            title: 'Build International Collaboration',
            description: 'Establish partnerships for international proposals',
            duration: '1 month',
            steps: [
                'Identify potential collaborators (complementary expertise)',
                'Reach out via email with research interests',
                'Schedule video calls to discuss collaboration',
                'Define roles and responsibilities',
                'Draft collaboration agreement/MoU',
                'Plan joint proposal with clear work packages'
            ],
            deliverable: 'Collaboration agreement with international partner'
        }
    ]
}

// Stage 10-12: Lab Development (Industry proposals may be relevant)
export const STAGE_10_GUIDES: StageGuide = {
    stageId: 10,
    stageName: 'Seed Lab Setup',
    guides: [],
    templates: [
        'lab-layout-planner',
        'equipment-procurement-tracker',
        'safety-compliance-checklist',
        'team-hiring-template'
    ],
    activities: [],
    practicalExercises: [
        {
            id: 'lab-design',
            title: 'Design Your Lab Layout',
            description: 'Plan efficient lab space with safety compliance',
            duration: '1 week',
            steps: [
                'Measure available space dimensions',
                'List all equipment with dimensions',
                'Plan workflow (entry, work areas, storage, exit)',
                'Ensure safety compliance (fire exits, ventilation)',
                'Plan electrical and plumbing requirements',
                'Create 2D layout diagram'
            ],
            deliverable: 'Lab layout diagram with equipment placement'
        }
    ]
}

export const STAGE_13_GUIDES: StageGuide = {
    stageId: 13,
    stageName: 'Tangible Outcomes & Industry Collaboration',
    guides: [
        {
            id: 'industry-proposal-components',
            title: 'Industry Proposal Components',
            description: 'Components for industry-focused research proposals',
            type: 'component',
            source: 'industry-proposal-guide.ts',
            content: INDUSTRY_PROPOSAL_COMPONENTS
        }
    ],
    templates: [
        'industry-partnership-template',
        'technology-transfer-guide',
        'startup-business-plan'
    ],
    activities: [],
    practicalExercises: [
        {
            id: 'roi-calculation',
            title: 'Calculate ROI for Industry',
            description: 'Show business value and return on investment',
            duration: '3 days',
            steps: [
                'Identify cost savings from your solution',
                'Calculate revenue potential',
                'Estimate implementation costs',
                'Calculate payback period',
                'Compute NPV and IRR',
                'Create risk-adjusted scenarios (best, expected, worst)'
            ],
            deliverable: 'ROI analysis with financial projections'
        }
    ]
}

// Master integration map
export const JOURNEY_GUIDES_MAP: Record<number, StageGuide> = {
    1: STAGE_1_GUIDES,
    2: STAGE_2_GUIDES,
    3: STAGE_3_GUIDES,
    4: STAGE_4_GUIDES,
    5: STAGE_5_GUIDES,
    6: STAGE_6_GUIDES,
    7: STAGE_7_GUIDES,
    8: STAGE_8_GUIDES,
    9: STAGE_9_GUIDES,
    10: STAGE_10_GUIDES,
    13: STAGE_13_GUIDES
}

// Helper functions
export function getGuidesByStage(stageId: number): GuideReference[] {
    return JOURNEY_GUIDES_MAP[stageId]?.guides || []
}

export function getPracticalExercisesByStage(stageId: number): PracticalExercise[] {
    return JOURNEY_GUIDES_MAP[stageId]?.practicalExercises || []
}

export function getAllResourcesByStage(stageId: number) {
    return {
        guides: getGuidesByStage(stageId),
        templates: getTemplatesByStage(stageId),
        activities: getActivitiesByStage(stageId),
        exercises: getPracticalExercisesByStage(stageId)
    }
}

// Get comprehensive stage resources
export function getStageResources(stageId: number) {
    const guides = getGuidesByStage(stageId)
    const templates = getTemplatesByStage(stageId)
    const activities = getActivitiesByStage(stageId)
    const exercises = getPracticalExercisesByStage(stageId)

    return {
        hasGuides: guides.length > 0,
        hasTemplates: templates.length > 0,
        hasActivities: activities.length > 0,
        hasExercises: exercises.length > 0,
        totalResources: guides.length + templates.length + activities.length + exercises.length,
        guides,
        templates,
        activities,
        exercises
    }
}
