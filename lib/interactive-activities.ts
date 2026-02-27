// Interactive Hands-On Activities for Each Stage

export interface InteractiveActivity {
    id: string
    stageId: number
    title: string
    description: string
    type: 'exercise' | 'quiz' | 'simulation' | 'builder' | 'calculator'
    duration: string
    steps: ActivityStep[]
    deliverable: string
    tips: string[]
}

export interface ActivityStep {
    id: number
    title: string
    instruction: string
    action: string
    example?: string
    checkpoints: string[]
}

export const INTERACTIVE_ACTIVITIES: InteractiveActivity[] = [
    // Stage 1: Domain Knowledge Discovery
    {
        id: 'domain-speed-dating',
        stageId: 1,
        title: 'Domain Speed Dating',
        description: 'Explore 5 different research domains in 5 days - one domain per day',
        type: 'exercise',
        duration: '5 days (1 hour/day)',
        steps: [
            {
                id: 1,
                title: 'Day 1: Choose 5 Domains',
                instruction: 'Select 5 research domains that sound interesting to you',
                action: 'List 5 domains from: AI/ML, IoT, Blockchain, Quantum Computing, Biotechnology, Renewable Energy, Cybersecurity, Robotics, Nanotechnology, Healthcare Tech, etc.',
                example: 'Example: 1) AI in Healthcare, 2) Blockchain for Supply Chain, 3) Renewable Energy Storage, 4) Cybersecurity for IoT, 5) Robotics in Agriculture',
                checkpoints: [
                    'Listed 5 distinct domains',
                    'Each domain is specific (not too broad)',
                    'Domains span different fields'
                ]
            },
            {
                id: 2,
                title: 'Day 2-6: Daily Domain Exploration',
                instruction: 'Spend 1 hour each day exploring one domain',
                action: 'For each domain: Read 2 recent papers, Watch 1 YouTube video, Check funding opportunities, Identify 3 interesting problems',
                example: 'Day 2 - AI in Healthcare: Read papers on disease prediction, Watch Andrew Ng\'s healthcare AI talk, Check NIH funding, Identify problems: early cancer detection, personalized treatment, medical image analysis',
                checkpoints: [
                    'Read 2 papers per domain (10 total)',
                    'Watched 5 videos',
                    'Identified 15 problems (3 per domain)',
                    'Noted funding opportunities'
                ]
            },
            {
                id: 3,
                title: 'Day 7: Compare & Decide',
                instruction: 'Compare all 5 domains and choose your favorite',
                action: 'Rate each domain on: Personal Interest (1-10), Feasibility (1-10), Funding Availability (1-10), Impact Potential (1-10). Calculate total score.',
                example: 'AI in Healthcare: Interest=9, Feasibility=7, Funding=8, Impact=9, Total=33/40',
                checkpoints: [
                    'Rated all 5 domains',
                    'Calculated total scores',
                    'Identified top 2 domains',
                    'Made final choice with reasoning'
                ]
            }
        ],
        deliverable: 'Domain Comparison Matrix with your final choice and 3-paragraph justification',
        tips: [
            'Don\'t overthink - trust your gut feeling',
            'Talk to at least 2 researchers in each domain',
            'Check job market demand for each domain',
            'Consider your existing skills and interests'
        ]
    },

    // Stage 2: Research Article Reading
    {
        id: '30-day-reading-challenge',
        stageId: 2,
        title: '30-Day Reading Challenge',
        description: 'Read and critically analyze 30 papers in 30 days',
        type: 'exercise',
        duration: '30 days (1-2 hours/day)',
        steps: [
            {
                id: 1,
                title: 'Week 1: Foundation Papers (7 papers)',
                instruction: 'Read 7 seminal papers in your domain',
                action: 'Find highly-cited papers (>500 citations) from last 10 years. Use 3-pass reading method: 1) Abstract & Figures, 2) Introduction & Conclusion, 3) Full paper',
                example: 'For AI in Healthcare: Read papers on deep learning for medical imaging, disease prediction models, etc.',
                checkpoints: [
                    'Identified 7 highly-cited papers',
                    'Read all 7 papers using 3-pass method',
                    'Created summary notes for each',
                    'Identified key concepts and methods'
                ]
            },
            {
                id: 2,
                title: 'Week 2: Recent Papers (7 papers)',
                instruction: 'Read 7 papers from last 2 years',
                action: 'Find recent papers from top conferences/journals. Focus on current trends and open problems.',
                checkpoints: [
                    'Read 7 recent papers',
                    'Noted current trends',
                    'Identified open problems',
                    'Compared with foundation papers'
                ]
            },
            {
                id: 3,
                title: 'Week 3: Method Papers (8 papers)',
                instruction: 'Read 8 papers focusing on different methods',
                action: 'Explore different approaches: supervised learning, unsupervised, reinforcement learning, etc.',
                checkpoints: [
                    'Read 8 method-focused papers',
                    'Understood different approaches',
                    'Compared pros and cons',
                    'Identified suitable methods for your problem'
                ]
            },
            {
                id: 4,
                title: 'Week 4: Application Papers (8 papers)',
                instruction: 'Read 8 papers on real-world applications',
                action: 'Focus on papers with practical implementations, datasets, and results',
                checkpoints: [
                    'Read 8 application papers',
                    'Noted datasets used',
                    'Understood evaluation metrics',
                    'Identified implementation challenges'
                ]
            }
        ],
        deliverable: 'Annotated bibliography of 30 papers with critical analysis and literature review matrix',
        tips: [
            'Use Mendeley/Zotero from day 1',
            'Take notes while reading, not after',
            'Focus on understanding, not speed',
            'Discuss papers with peers weekly'
        ]
    },

    // Stage 3: Research Gap Identification
    {
        id: 'gap-matrix-workshop',
        stageId: 3,
        title: 'Gap Matrix Workshop',
        description: 'Create a visual gap analysis matrix to identify research opportunities',
        type: 'builder',
        duration: '1 week',
        steps: [
            {
                id: 1,
                title: 'Map Existing Solutions',
                instruction: 'List all existing solutions/approaches in your domain',
                action: 'Create a table with columns: Solution Name, Authors, Year, Method, Dataset, Results, Limitations',
                example: 'Solution: CNN for Diabetic Retinopathy | Authors: Gulshan et al. | Year: 2016 | Method: Inception-v3 | Dataset: 128K images | Results: 87% sensitivity | Limitations: Poor early-stage detection',
                checkpoints: [
                    'Listed 15-20 existing solutions',
                    'Documented key details for each',
                    'Identified limitations',
                    'Organized by approach/method'
                ]
            },
            {
                id: 2,
                title: 'Identify Patterns',
                instruction: 'Look for patterns in limitations across solutions',
                action: 'Group limitations into categories: Data issues, Method limitations, Evaluation gaps, Deployment challenges, etc.',
                checkpoints: [
                    'Categorized all limitations',
                    'Found recurring patterns',
                    'Identified 5-7 major gap categories',
                    'Prioritized by importance'
                ]
            },
            {
                id: 3,
                title: 'Validate Gaps',
                instruction: 'Validate that gaps are real and research-worthy',
                action: 'For each gap, check: Is it unsolved? Is it important? Is it feasible? Is there funding? Will it have impact?',
                checkpoints: [
                    'Validated all identified gaps',
                    'Eliminated non-research-worthy gaps',
                    'Shortlisted 3-5 promising gaps',
                    'Documented validation reasoning'
                ]
            },
            {
                id: 4,
                title: 'Craft Problem Statement',
                instruction: 'Write a clear, specific problem statement',
                action: 'Use format: "Despite [existing work], [problem] remains unsolved because [reason]. This is important because [impact]."',
                example: 'Despite achieving 87-90% accuracy in diabetic retinopathy detection, early-stage detection remains poor (78% sensitivity) because existing models lack attention mechanisms for subtle features. This is important because early detection can prevent 95% of blindness cases.',
                checkpoints: [
                    'Crafted problem statement',
                    'Included existing work context',
                    'Clearly stated the gap',
                    'Explained importance and impact'
                ]
            }
        ],
        deliverable: 'Gap Analysis Matrix + 2-page Problem Statement with validation evidence',
        tips: [
            'Focus on gaps you can actually solve',
            'Talk to industry to validate importance',
            'Check if gap has funding opportunities',
            'Ensure gap aligns with your skills'
        ]
    },

    // Stage 4: Research Implementation
    {
        id: 'agile-research-sprint',
        stageId: 4,
        title: 'Agile Research Sprint Planning',
        description: 'Plan and execute research in 2-week sprints like software development',
        type: 'exercise',
        duration: '6-12 months (2-week sprints)',
        steps: [
            {
                id: 1,
                title: 'Sprint 0: Setup',
                instruction: 'Set up research environment and tools',
                action: 'Install tools, set up version control, create project structure, prepare datasets',
                checkpoints: [
                    'Development environment ready',
                    'GitHub repository created',
                    'Dataset downloaded and organized',
                    'Baseline code implemented'
                ]
            },
            {
                id: 2,
                title: 'Sprint Planning',
                instruction: 'Plan each 2-week sprint with specific goals',
                action: 'Define: Sprint goal, Tasks (max 5), Success criteria, Deliverables',
                example: 'Sprint 1 Goal: Implement baseline model | Tasks: 1) Data preprocessing, 2) Train CNN, 3) Evaluate on test set, 4) Document results, 5) Compare with paper | Success: >80% accuracy',
                checkpoints: [
                    'Sprint goal defined',
                    'Tasks broken down',
                    'Success criteria clear',
                    'Time estimated for each task'
                ]
            },
            {
                id: 3,
                title: 'Daily Standups',
                instruction: 'Track progress daily (even if solo)',
                action: 'Every day, note: What did I do yesterday? What will I do today? Any blockers?',
                checkpoints: [
                    'Daily progress logged',
                    'Blockers identified early',
                    'Adjusted plan as needed',
                    'Maintained momentum'
                ]
            },
            {
                id: 4,
                title: 'Sprint Review & Retrospective',
                instruction: 'Review results and learn from each sprint',
                action: 'Document: What worked? What didn\'t? What to improve? Next sprint goals?',
                checkpoints: [
                    'Results documented',
                    'Lessons learned noted',
                    'Improvements identified',
                    'Next sprint planned'
                ]
            }
        ],
        deliverable: 'Working implementation with code, results, and documentation',
        tips: [
            'Keep sprints short (2 weeks max)',
            'Focus on one goal per sprint',
            'Document everything in research journal',
            'Share progress with advisor weekly'
        ]
    },

    // Stage 5: Research Paper Drafting
    {
        id: '30-day-writing-challenge',
        stageId: 5,
        title: '30-Day Paper Writing Challenge',
        description: 'Write a complete research paper in 30 days using structured approach',
        type: 'exercise',
        duration: '30 days',
        steps: [
            {
                id: 1,
                title: 'Week 1: Structure & Figures',
                instruction: 'Create paper structure and all figures/tables',
                action: 'Day 1-2: Outline all sections | Day 3-5: Create all figures | Day 6-7: Create all tables',
                checkpoints: [
                    'Complete outline with subsections',
                    'All figures created and polished',
                    'All tables formatted',
                    'Captions written for all'
                ]
            },
            {
                id: 2,
                title: 'Week 2: Methods & Results',
                instruction: 'Write methodology and results sections',
                action: 'Day 8-11: Write detailed methodology | Day 12-14: Write results with analysis',
                checkpoints: [
                    'Methodology complete and reproducible',
                    'Results clearly presented',
                    'Statistical analysis included',
                    'Figures/tables referenced'
                ]
            },
            {
                id: 3,
                title: 'Week 3: Introduction & Related Work',
                instruction: 'Write introduction and literature review',
                action: 'Day 15-18: Write introduction with motivation | Day 19-21: Write related work with comparisons',
                checkpoints: [
                    'Introduction hooks reader',
                    'Problem clearly stated',
                    'Contributions listed',
                    'Related work comprehensive'
                ]
            },
            {
                id: 4,
                title: 'Week 4: Discussion, Conclusion & Polish',
                instruction: 'Complete paper and polish',
                action: 'Day 22-24: Write discussion | Day 25-26: Write conclusion | Day 27-28: Write abstract & title | Day 29-30: Proofread and format',
                checkpoints: [
                    'Discussion interprets results',
                    'Conclusion summarizes contributions',
                    'Abstract is compelling',
                    'Paper is polished and formatted'
                ]
            }
        ],
        deliverable: 'Complete research paper ready for submission',
        tips: [
            'Write figures before text',
            'Write methods and results first',
            'Get feedback after week 2',
            'Use Grammarly for proofreading'
        ]
    },

    // Stage 6: Patent Drafting
    {
        id: 'patent-claims-builder',
        stageId: 6,
        title: 'Patent Claims Building Workshop',
        description: 'Learn to draft patent claims through hands-on practice',
        type: 'builder',
        duration: '1 week',
        steps: [
            {
                id: 1,
                title: 'Identify Novel Features',
                instruction: 'List all novel features of your invention',
                action: 'Create a table: Feature | Why Novel | Prior Art Comparison | Advantage',
                checkpoints: [
                    'Listed 10-15 novel features',
                    'Compared with prior art',
                    'Documented advantages',
                    'Prioritized by importance'
                ]
            },
            {
                id: 2,
                title: 'Draft Independent Claims',
                instruction: 'Write 1-3 independent claims covering core invention',
                action: 'Use format: "A system/method comprising: [element 1], [element 2], [element 3], wherein [novel feature]"',
                example: 'A system for early detection of diabetic retinopathy comprising: an image acquisition module, a deep learning model with spatial attention mechanism, a classification module, wherein the attention mechanism focuses on subtle features indicative of early-stage disease.',
                checkpoints: [
                    'Drafted 1-3 independent claims',
                    'Each claim is clear and specific',
                    'Novel features highlighted',
                    'Claims are broad enough'
                ]
            },
            {
                id: 3,
                title: 'Draft Dependent Claims',
                instruction: 'Write 10-15 dependent claims adding specific details',
                action: 'For each independent claim, add dependent claims specifying: specific algorithms, parameters, configurations, applications',
                checkpoints: [
                    'Drafted 10-15 dependent claims',
                    'Each adds specific detail',
                    'Claims form a hierarchy',
                    'Cover all embodiments'
                ]
            },
            {
                id: 4,
                title: 'Write Detailed Description',
                instruction: 'Write detailed description supporting all claims',
                action: 'For each claim element, provide: detailed explanation, examples, variations, advantages',
                checkpoints: [
                    'Description supports all claims',
                    'Examples provided',
                    'Variations covered',
                    'Advantages explained'
                ]
            }
        ],
        deliverable: 'Complete patent draft with claims and detailed description',
        tips: [
            'Study 5 granted patents in your domain',
            'Make independent claims broad',
            'Use dependent claims for specifics',
            'Consult patent attorney before filing'
        ]
    },

    // Stage 7-9: Proposal Writing (Combined)
    {
        id: 'proposal-writing-sprint',
        stageId: 7,
        title: 'Proposal Writing Sprint',
        description: 'Write a complete research proposal in 2 weeks',
        type: 'exercise',
        duration: '2 weeks',
        steps: [
            {
                id: 1,
                title: 'Days 1-3: Problem & Objectives',
                instruction: 'Write problem statement and objectives',
                action: 'Day 1: Problem with statistics | Day 2: Literature review | Day 3: Clear objectives',
                checkpoints: [
                    'Problem clearly stated with evidence',
                    'Literature review comprehensive',
                    'Objectives are SMART',
                    'Alignment with funder priorities'
                ]
            },
            {
                id: 2,
                title: 'Days 4-7: Methodology',
                instruction: 'Write detailed methodology',
                action: 'Break into work packages, describe methods, show feasibility, include timeline',
                checkpoints: [
                    'Methodology detailed and clear',
                    'Work packages defined',
                    'Timeline realistic',
                    'Feasibility demonstrated'
                ]
            },
            {
                id: 3,
                title: 'Days 8-10: Budget & Impact',
                instruction: 'Prepare budget and impact statement',
                action: 'Itemized budget with justification, broader impact, expected outcomes',
                checkpoints: [
                    'Budget detailed and justified',
                    'Impact clearly articulated',
                    'Outcomes measurable',
                    'Value for money shown'
                ]
            },
            {
                id: 4,
                title: 'Days 11-14: Polish & Review',
                instruction: 'Complete proposal and get feedback',
                action: 'Write abstract, proofread, get 3 people to review, incorporate feedback',
                checkpoints: [
                    'Abstract compelling',
                    'Proposal polished',
                    'Feedback incorporated',
                    'Ready for submission'
                ]
            }
        ],
        deliverable: 'Complete research proposal ready for submission',
        tips: [
            'Start with funder guidelines',
            'Get feedback early and often',
            'Show preliminary data if available',
            'Highlight innovation and impact'
        ]
    }
]

export function getActivitiesByStage(stageId: number): InteractiveActivity[] {
    return INTERACTIVE_ACTIVITIES.filter(a => a.stageId === stageId)
}

export function getAllActivities(): InteractiveActivity[] {
    return INTERACTIVE_ACTIVITIES
}

export function getActivityById(id: string): InteractiveActivity | undefined {
    return INTERACTIVE_ACTIVITIES.find(a => a.id === id)
}
