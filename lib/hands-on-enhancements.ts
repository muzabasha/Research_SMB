// Enhanced Hands-On Experience for Each Research Stage
// Practical, actionable, and measurable activities

export interface HandsOnExperience {
    stageId: number
    stageName: string
    practicalExercises: PracticalExercise[]
    interactiveTools: InteractiveTool[]
    checklistItems: ChecklistItem[]
    milestones: Milestone[]
    peerActivities: PeerActivity[]
    reflectionPrompts: string[]
}

export interface PracticalExercise {
    id: string
    title: string
    description: string
    timeRequired: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    steps: ExerciseStep[]
    deliverable: Deliverable
    successCriteria: string[]
    commonMistakes: string[]
}

export interface ExerciseStep {
    stepNumber: number
    title: string
    description: string
    action: string
    resources: string[]
    estimatedTime: string
    checkpoint: string
}

export interface Deliverable {
    type: 'document' | 'presentation' | 'code' | 'dataset' | 'prototype' | 'report'
    title: string
    format: string
    minRequirements: string[]
    evaluationCriteria: string[]
}

export interface InteractiveTool {
    id: string
    name: string
    description: string
    type: 'calculator' | 'builder' | 'simulator' | 'analyzer' | 'tracker'
    url?: string
    features: string[]
}

export interface ChecklistItem {
    id: string
    category: string
    item: string
    priority: 'must-have' | 'should-have' | 'nice-to-have'
    estimatedTime: string
}

export interface Milestone {
    id: string
    title: string
    description: string
    deadline: string // relative to stage start
    deliverables: string[]
    reviewRequired: boolean
}

export interface PeerActivity {
    id: string
    title: string
    description: string
    groupSize: string
    duration: string
    objectives: string[]
    facilitation: string[]
}

export const HANDS_ON_EXPERIENCES: HandsOnExperience[] = [
    // Stage 1: Domain Discovery
    {
        stageId: 1,
        stageName: 'Domain Discovery',
        practicalExercises: [
            {
                id: 'domain-exploration-sprint',
                title: 'Domain Exploration Sprint',
                description: 'Intensive 5-day sprint to explore and evaluate 5 research domains',
                timeRequired: '5 days (2 hours/day)',
                difficulty: 'beginner',
                steps: [
                    {
                        stepNumber: 1,
                        title: 'Domain Selection',
                        description: 'Choose 5 diverse research domains that interest you',
                        action: 'Browse research areas in your department, check trending topics on Google Scholar, explore conference proceedings',
                        resources: ['Google Scholar Trends', 'ACM Digital Library', 'IEEE Xplore', 'Department website'],
                        estimatedTime: '1 hour',
                        checkpoint: 'List of 5 specific domains with brief descriptions'
                    },
                    {
                        stepNumber: 2,
                        title: 'Daily Deep Dive',
                        description: 'Spend 2 hours each day exploring one domain in depth',
                        action: 'Read 2 recent papers, watch 1 expert talk, identify 3 open problems, check funding opportunities',
                        resources: ['YouTube (conference talks)', 'ArXiv', 'Research funding databases'],
                        estimatedTime: '2 hours/day × 5 days',
                        checkpoint: 'Completed exploration notes for each domain'
                    },
                    {
                        stepNumber: 3,
                        title: 'Expert Interviews',
                        description: 'Talk to at least 2 researchers in each domain',
                        action: 'Prepare 5 questions, schedule 15-minute meetings, take notes on their insights',
                        resources: ['Faculty directory', 'LinkedIn', 'ResearchGate'],
                        estimatedTime: '30 minutes per interview',
                        checkpoint: 'Interview notes from 10 researchers'
                    },
                    {
                        stepNumber: 4,
                        title: 'Comparative Analysis',
                        description: 'Create a scoring matrix to compare domains objectively',
                        action: 'Rate each domain on 8 criteria: Interest, Feasibility, Funding, Impact, Skills Match, Resources, Career Prospects, Innovation Potential',
                        resources: ['Domain Comparison Template'],
                        estimatedTime: '2 hours',
                        checkpoint: 'Completed comparison matrix with scores'
                    },
                    {
                        stepNumber: 5,
                        title: 'Final Decision',
                        description: 'Make your domain choice and justify it',
                        action: 'Write 500-word justification explaining your choice based on data and insights',
                        resources: ['Decision template'],
                        estimatedTime: '1 hour',
                        checkpoint: 'Written justification with supporting evidence'
                    }
                ],
                deliverable: {
                    type: 'document',
                    title: 'Domain Selection Report',
                    format: 'PDF (5-7 pages)',
                    minRequirements: [
                        'Exploration notes for 5 domains',
                        'Interview summaries (10 interviews)',
                        'Comparison matrix with scores',
                        'Final choice with 500-word justification',
                        'References to papers and resources'
                    ],
                    evaluationCriteria: [
                        'Thoroughness of exploration',
                        'Quality of expert insights',
                        'Objectivity of comparison',
                        'Clarity of justification',
                        'Evidence-based decision making'
                    ]
                },
                successCriteria: [
                    'Explored 5 distinct domains thoroughly',
                    'Interviewed at least 10 researchers',
                    'Created objective comparison matrix',
                    'Made informed, justified decision',
                    'Identified 3-5 specific problems in chosen domain'
                ],
                commonMistakes: [
                    'Choosing domain based on hype, not interest',
                    'Not talking to enough researchers',
                    'Ignoring resource availability',
                    'Being too broad (e.g., "AI" instead of "AI for Healthcare")',
                    'Not considering career prospects'
                ]
            },
            {
                id: 'research-skills-assessment',
                title: 'Research Skills Self-Assessment',
                description: 'Evaluate your current skills and identify gaps',
                timeRequired: '2 hours',
                difficulty: 'beginner',
                steps: [
                    {
                        stepNumber: 1,
                        title: 'Skills Inventory',
                        description: 'List all your technical and soft skills',
                        action: 'Create comprehensive list: programming languages, tools, domain knowledge, communication, writing, etc.',
                        resources: ['Skills assessment template'],
                        estimatedTime: '30 minutes',
                        checkpoint: 'Complete skills inventory'
                    },
                    {
                        stepNumber: 2,
                        title: 'Gap Analysis',
                        description: 'Compare your skills with domain requirements',
                        action: 'For chosen domain, identify required skills and rate your proficiency (1-5)',
                        resources: ['Domain skill requirements'],
                        estimatedTime: '45 minutes',
                        checkpoint: 'Skills gap analysis matrix'
                    },
                    {
                        stepNumber: 3,
                        title: 'Learning Plan',
                        description: 'Create 3-month plan to fill critical gaps',
                        action: 'Prioritize top 5 skills to learn, find resources, set weekly goals',
                        resources: ['Coursera', 'edX', 'YouTube tutorials'],
                        estimatedTime: '45 minutes',
                        checkpoint: '3-month learning roadmap'
                    }
                ],
                deliverable: {
                    type: 'document',
                    title: 'Skills Development Plan',
                    format: 'PDF (2-3 pages)',
                    minRequirements: [
                        'Current skills inventory',
                        'Gap analysis matrix',
                        '3-month learning plan with resources',
                        'Weekly milestones'
                    ],
                    evaluationCriteria: [
                        'Honesty in self-assessment',
                        'Realistic gap identification',
                        'Actionable learning plan',
                        'Clear milestones'
                    ]
                },
                successCriteria: [
                    'Identified all relevant skills',
                    'Honest gap assessment',
                    'Prioritized critical skills',
                    'Created actionable plan'
                ],
                commonMistakes: [
                    'Overestimating current skills',
                    'Trying to learn too many things at once',
                    'Not setting specific milestones',
                    'Ignoring soft skills'
                ]
            }
        ],
        interactiveTools: [
            {
                id: 'domain-matcher',
                name: 'Domain Matcher Tool',
                description: 'AI-powered tool to match your interests and skills with research domains',
                type: 'analyzer',
                features: [
                    'Input your interests, skills, and constraints',
                    'Get top 5 domain recommendations',
                    'See skill gap analysis',
                    'View career prospects for each domain',
                    'Export comparison report'
                ]
            },
            {
                id: 'research-readiness-quiz',
                name: 'Research Readiness Quiz',
                description: 'Interactive quiz to assess your readiness for research',
                type: 'analyzer',
                features: [
                    '20 questions on motivation, skills, and mindset',
                    'Instant feedback with scores',
                    'Personalized recommendations',
                    'Track progress over time'
                ]
            }
        ],
        checklistItems: [
            {
                id: 'explore-5-domains',
                category: 'Exploration',
                item: 'Explored 5 different research domains',
                priority: 'must-have',
                estimatedTime: '10 hours'
            },
            {
                id: 'interview-researchers',
                category: 'Networking',
                item: 'Interviewed 10 researchers across domains',
                priority: 'must-have',
                estimatedTime: '5 hours'
            },
            {
                id: 'read-survey-papers',
                category: 'Learning',
                item: 'Read 5 survey papers (1 per domain)',
                priority: 'must-have',
                estimatedTime: '15 hours'
            },
            {
                id: 'attend-seminars',
                category: 'Engagement',
                item: 'Attended 3 research seminars',
                priority: 'should-have',
                estimatedTime: '3 hours'
            },
            {
                id: 'create-comparison-matrix',
                category: 'Analysis',
                item: 'Created domain comparison matrix',
                priority: 'must-have',
                estimatedTime: '2 hours'
            },
            {
                id: 'skills-assessment',
                category: 'Self-Evaluation',
                item: 'Completed skills self-assessment',
                priority: 'must-have',
                estimatedTime: '2 hours'
            },
            {
                id: 'learning-plan',
                category: 'Planning',
                item: 'Created 3-month learning plan',
                priority: 'must-have',
                estimatedTime: '1 hour'
            },
            {
                id: 'supervisor-meeting',
                category: 'Mentorship',
                item: 'Discussed domain choice with potential supervisor',
                priority: 'must-have',
                estimatedTime: '1 hour'
            }
        ],
        milestones: [
            {
                id: 'week-1-milestone',
                title: 'Domain Shortlist',
                description: 'Narrowed down to 5 potential domains',
                deadline: 'Week 1',
                deliverables: ['List of 5 domains with brief descriptions'],
                reviewRequired: false
            },
            {
                id: 'week-2-milestone',
                title: 'Exploration Complete',
                description: 'Completed deep dive into all 5 domains',
                deadline: 'Week 2',
                deliverables: ['Exploration notes', 'Interview summaries'],
                reviewRequired: false
            },
            {
                id: 'week-3-milestone',
                title: 'Final Decision',
                description: 'Made final domain choice with justification',
                deadline: 'Week 3',
                deliverables: ['Domain Selection Report', 'Skills Development Plan'],
                reviewRequired: true
            }
        ],
        peerActivities: [
            {
                id: 'domain-discussion-group',
                title: 'Domain Discussion Group',
                description: 'Weekly group discussions to share domain insights',
                groupSize: '4-6 students',
                duration: '1 hour/week',
                objectives: [
                    'Share domain exploration findings',
                    'Get peer feedback on domain choices',
                    'Learn about domains you didn\'t explore',
                    'Build research community'
                ],
                facilitation: [
                    'Each person presents 1 domain (10 minutes)',
                    'Group discusses pros/cons',
                    'Share resources and contacts',
                    'Provide constructive feedback'
                ]
            },
            {
                id: 'researcher-panel',
                title: 'Researcher Panel Q&A',
                description: 'Organize panel with 3-4 researchers from different domains',
                groupSize: '10-20 students',
                duration: '90 minutes',
                objectives: [
                    'Learn from experienced researchers',
                    'Ask domain-specific questions',
                    'Understand research career paths',
                    'Network with faculty'
                ],
                facilitation: [
                    'Prepare questions in advance',
                    'Each panelist presents their domain (10 min)',
                    'Moderated Q&A session',
                    'Networking time after panel'
                ]
            }
        ],
        reflectionPrompts: [
            'What excites you most about your chosen domain? Why?',
            'What are your biggest fears or concerns about starting research?',
            'How does this domain align with your long-term career goals?',
            'What unique perspective or skills do you bring to this domain?',
            'If you could solve one problem in this domain, what would it be?'
        ]
    },

    // Stage 2: Literature Review
    {
        stageId: 2,
        stageName: 'Literature Review',
        practicalExercises: [
            {
                id: '30-paper-challenge',
                title: '30 Papers in 30 Days Challenge',
                description: 'Systematic reading and analysis of 30 research papers',
                timeRequired: '30 days (1-2 hours/day)',
                difficulty: 'intermediate',
                steps: [
                    {
                        stepNumber: 1,
                        title: 'Paper Selection Strategy',
                        description: 'Create a balanced reading list',
                        action: 'Select 10 seminal papers (highly cited), 10 recent papers (last 2 years), 10 method papers',
                        resources: ['Google Scholar', 'Connected Papers', 'Semantic Scholar'],
                        estimatedTime: '3 hours',
                        checkpoint: 'Curated list of 30 papers with citations'
                    },
                    {
                        stepNumber: 2,
                        title: 'Three-Pass Reading Method',
                        description: 'Learn efficient paper reading technique',
                        action: 'Pass 1: Abstract + Figures (5 min), Pass 2: Intro + Conclusion (15 min), Pass 3: Full paper (1 hour)',
                        resources: ['How to Read a Paper guide'],
                        estimatedTime: '1-2 hours per paper',
                        checkpoint: 'Completed reading notes for each paper'
                    },
                    {
                        stepNumber: 3,
                        title: 'Critical Analysis',
                        description: 'Analyze each paper systematically',
                        action: 'For each paper: What problem? What solution? What results? What limitations? What future work?',
                        resources: ['Paper analysis template'],
                        estimatedTime: '30 minutes per paper',
                        checkpoint: 'Analysis notes for all 30 papers'
                    },
                    {
                        stepNumber: 4,
                        title: 'Literature Matrix',
                        description: 'Create visual comparison of all papers',
                        action: 'Build matrix with columns: Paper, Method, Dataset, Results, Limitations, Year',
                        resources: ['Excel/Google Sheets template'],
                        estimatedTime: '4 hours',
                        checkpoint: 'Completed literature matrix'
                    },
                    {
                        stepNumber: 5,
                        title: 'Synthesis & Gaps',
                        description: 'Identify patterns and research gaps',
                        action: 'Group papers by theme, identify trends, spot gaps, formulate research questions',
                        resources: ['Gap analysis framework'],
                        estimatedTime: '3 hours',
                        checkpoint: 'Gap analysis document'
                    }
                ],
                deliverable: {
                    type: 'document',
                    title: 'Annotated Bibliography & Literature Review',
                    format: 'PDF (15-20 pages)',
                    minRequirements: [
                        'Annotated bibliography of 30 papers',
                        'Literature matrix comparing all papers',
                        'Thematic synthesis (3-5 themes)',
                        'Gap analysis with 5-7 identified gaps',
                        'Preliminary research questions'
                    ],
                    evaluationCriteria: [
                        'Depth of paper analysis',
                        'Quality of synthesis',
                        'Clarity of gap identification',
                        'Critical thinking demonstrated',
                        'Organization and presentation'
                    ]
                },
                successCriteria: [
                    'Read and analyzed 30 papers',
                    'Created comprehensive literature matrix',
                    'Identified clear thematic patterns',
                    'Spotted 5-7 research gaps',
                    'Formulated 3-5 research questions'
                ],
                commonMistakes: [
                    'Reading papers superficially',
                    'Not taking structured notes',
                    'Focusing only on recent papers',
                    'Missing seminal foundational work',
                    'Not identifying limitations'
                ]
            }
        ],
        interactiveTools: [
            {
                id: 'paper-analyzer',
                name: 'Paper Analysis Tool',
                description: 'Structured template for analyzing research papers',
                type: 'analyzer',
                features: [
                    'Guided questions for each section',
                    'Automatic citation extraction',
                    'Strength/weakness analysis',
                    'Export to bibliography format'
                ]
            },
            {
                id: 'literature-matrix-builder',
                name: 'Literature Matrix Builder',
                description: 'Visual tool to compare multiple papers',
                type: 'builder',
                features: [
                    'Drag-and-drop paper addition',
                    'Customizable comparison criteria',
                    'Visual charts and graphs',
                    'Export to Excel/PDF'
                ]
            },
            {
                id: 'reading-tracker',
                name: 'Reading Progress Tracker',
                description: 'Track your daily reading progress',
                type: 'tracker',
                features: [
                    'Daily reading goals',
                    'Progress visualization',
                    'Reading streak counter',
                    'Time spent analytics'
                ]
            }
        ],
        checklistItems: [
            {
                id: 'setup-reference-manager',
                category: 'Setup',
                item: 'Set up reference manager (Mendeley/Zotero)',
                priority: 'must-have',
                estimatedTime: '30 minutes'
            },
            {
                id: 'read-30-papers',
                category: 'Reading',
                item: 'Read and analyze 30 research papers',
                priority: 'must-have',
                estimatedTime: '45 hours'
            },
            {
                id: 'create-literature-matrix',
                category: 'Analysis',
                item: 'Created literature comparison matrix',
                priority: 'must-have',
                estimatedTime: '4 hours'
            },
            {
                id: 'identify-themes',
                category: 'Synthesis',
                item: 'Identified 3-5 major themes',
                priority: 'must-have',
                estimatedTime: '2 hours'
            },
            {
                id: 'spot-gaps',
                category: 'Analysis',
                item: 'Identified 5-7 research gaps',
                priority: 'must-have',
                estimatedTime: '3 hours'
            },
            {
                id: 'weekly-discussions',
                category: 'Collaboration',
                item: 'Participated in weekly paper discussions',
                priority: 'should-have',
                estimatedTime: '4 hours'
            }
        ],
        milestones: [
            {
                id: 'week-1-papers',
                title: 'First 10 Papers',
                description: 'Completed reading and analysis of first 10 papers',
                deadline: 'Week 1',
                deliverables: ['10 paper summaries', 'Initial notes'],
                reviewRequired: false
            },
            {
                id: 'week-2-papers',
                title: 'Next 10 Papers',
                description: 'Completed second set of 10 papers',
                deadline: 'Week 2',
                deliverables: ['20 paper summaries total', 'Emerging themes'],
                reviewRequired: false
            },
            {
                id: 'week-3-papers',
                title: 'Final 10 Papers',
                description: 'Completed all 30 papers',
                deadline: 'Week 3',
                deliverables: ['30 paper summaries', 'Complete literature matrix'],
                reviewRequired: false
            },
            {
                id: 'week-4-synthesis',
                title: 'Literature Review Complete',
                description: 'Synthesized findings and identified gaps',
                deadline: 'Week 4',
                deliverables: ['Annotated Bibliography', 'Gap Analysis', 'Research Questions'],
                reviewRequired: true
            }
        ],
        peerActivities: [
            {
                id: 'paper-club',
                title: 'Weekly Paper Club',
                description: 'Group discussion of 1-2 papers each week',
                groupSize: '5-8 students',
                duration: '90 minutes/week',
                objectives: [
                    'Deep dive into selected papers',
                    'Practice critical analysis',
                    'Learn from peer perspectives',
                    'Improve presentation skills'
                ],
                facilitation: [
                    'Each person presents 1 paper (15 min)',
                    'Group discusses strengths/weaknesses',
                    'Identify connections to own research',
                    'Share additional resources'
                ]
            }
        ],
        reflectionPrompts: [
            'What patterns are you seeing across papers?',
            'Which methods seem most promising for your research?',
            'What limitations keep appearing in the literature?',
            'How has your understanding of the field evolved?',
            'What questions remain unanswered?'
        ]
    }
]

// Helper functions
export function getHandsOnByStage(stageId: number): HandsOnExperience | undefined {
    return HANDS_ON_EXPERIENCES.find(h => h.stageId === stageId)
}

export function getAllPracticalExercises(): PracticalExercise[] {
    return HANDS_ON_EXPERIENCES.flatMap(h => h.practicalExercises)
}

export function getExercisesByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): PracticalExercise[] {
    return getAllPracticalExercises().filter(e => e.difficulty === difficulty)
}

export function getTotalHandsOnTime(stageId: number): string {
    const experience = getHandsOnByStage(stageId)
    if (!experience) return '0 hours'

    // Calculate total time from all exercises
    const totalMinutes = experience.practicalExercises.reduce((total, exercise) => {
        // Parse time string (e.g., "5 days (2 hours/day)" or "2 hours")
        const match = exercise.timeRequired.match(/(\d+)\s*(hour|day)/i)
        if (match) {
            const value = parseInt(match[1])
            const unit = match[2].toLowerCase()
            return total + (unit === 'day' ? value * 2 * 60 : value * 60) // Assume 2 hours per day
        }
        return total
    }, 0)

    const hours = Math.floor(totalMinutes / 60)
    return `${hours} hours`
}
