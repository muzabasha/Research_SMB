// NEP 2020 Competency Framework Mapping for Research Journey

export type CompetencyDomain = 'cognitive' | 'affective' | 'psychomotor' | 'social' | 'ethical'
export type BloomLevel = 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create'
export type NSQFLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface NEP2020Competency {
    id: string
    domain: CompetencyDomain
    bloomLevel: BloomLevel
    nsqfLevel: NSQFLevel
    description: string
    learningOutcome: string
    assessmentMethods: string[]
    skillsAcquired: string[]
}

export interface CreditMapping {
    ugCredits: number
    pgCredits: number
    phdCredits: number
    contactHours: number
    selfStudyHours: number
    practicalHours: number
}

export interface HolisticDevelopment {
    physical: string[]
    emotional: string[]
    intellectual: string[]
    social: string[]
    ethical: string[]
}

export interface StageCompetencyMapping {
    stageId: number
    competencies: NEP2020Competency[]
    credits: CreditMapping
    holisticDevelopment: HolisticDevelopment
    interdisciplinaryConnections: string[]
    industryRelevance: string[]
    sustainabilityGoals: string[]
}

// Competency mappings for all 15 stages
export const STAGE_COMPETENCIES: StageCompetencyMapping[] = [
    // Phase 1: Foundation
    {
        stageId: 1,
        competencies: [
            {
                id: 'C1.1',
                domain: 'cognitive',
                bloomLevel: 'understand',
                nsqfLevel: 5,
                description: 'Understanding research domains and identifying areas of interest',
                learningOutcome: 'Student can explore and compare multiple research domains systematically',
                assessmentMethods: ['Domain comparison matrix', 'Peer discussion', 'Reflection journal'],
                skillsAcquired: ['Critical thinking', 'Domain analysis', 'Decision making', 'Self-awareness']
            },
            {
                id: 'C1.2',
                domain: 'affective',
                bloomLevel: 'evaluate',
                nsqfLevel: 5,
                description: 'Developing passion-driven research orientation',
                learningOutcome: 'Student can identify personal research interests aligned with societal needs',
                assessmentMethods: ['Interest inventory', 'Motivation statement', 'Supervisor discussion'],
                skillsAcquired: ['Self-reflection', 'Goal setting', 'Intrinsic motivation']
            },
            {
                id: 'C1.3',
                domain: 'social',
                bloomLevel: 'apply',
                nsqfLevel: 5,
                description: 'Networking with researchers and building research community connections',
                learningOutcome: 'Student can effectively communicate with researchers and seek guidance',
                assessmentMethods: ['Interview reports', 'Networking log', 'Mentor feedback'],
                skillsAcquired: ['Communication', 'Networking', 'Professional etiquette', 'Active listening']
            }
        ],
        credits: {
            ugCredits: 4,
            pgCredits: 3,
            phdCredits: 2,
            contactHours: 20,
            selfStudyHours: 60,
            practicalHours: 20
        },
        holisticDevelopment: {
            physical: ['Attending seminars', 'Lab visits', 'Field exploration'],
            emotional: ['Overcoming fear of unknown', 'Building confidence', 'Managing uncertainty'],
            intellectual: ['Domain knowledge', 'Critical thinking', 'Analytical skills'],
            social: ['Networking', 'Collaboration', 'Communication'],
            ethical: ['Academic integrity', 'Respect for diverse perspectives', 'Responsible research']
        },
        interdisciplinaryConnections: [
            'Computer Science + Healthcare = Health Informatics',
            'Engineering + Environment = Sustainable Technology',
            'AI + Education = Adaptive Learning Systems'
        ],
        industryRelevance: [
            'Understanding industry research needs',
            'Identifying market gaps',
            'Aligning academic research with industry problems'
        ],
        sustainabilityGoals: [
            'SDG 4: Quality Education',
            'SDG 9: Industry, Innovation and Infrastructure',
            'SDG 17: Partnerships for the Goals'
        ]
    },
    {
        stageId: 2,
        competencies: [
            {
                id: 'C2.1',
                domain: 'cognitive',
                bloomLevel: 'analyze',
                nsqfLevel: 6,
                description: 'Critical analysis of research literature',
                learningOutcome: 'Student can systematically read, analyze, and synthesize research papers',
                assessmentMethods: ['Paper summaries', 'Literature review', 'Presentation'],
                skillsAcquired: ['Critical reading', 'Information synthesis', 'Academic writing', 'Citation management']
            },
            {
                id: 'C2.2',
                domain: 'cognitive',
                bloomLevel: 'evaluate',
                nsqfLevel: 6,
                description: 'Evaluating research quality and methodology',
                learningOutcome: 'Student can assess research quality, identify strengths and limitations',
                assessmentMethods: ['Paper critique', 'Peer review', 'Quality assessment rubric'],
                skillsAcquired: ['Critical evaluation', 'Methodological understanding', 'Quality assessment']
            },
            {
                id: 'C2.3',
                domain: 'psychomotor',
                bloomLevel: 'apply',
                nsqfLevel: 6,
                description: 'Applying structured reading and note-taking techniques',
                learningOutcome: 'Student can use 3-Pass method and create structured research notes',
                assessmentMethods: ['Note-taking samples', 'Reading log', 'Knowledge database'],
                skillsAcquired: ['Information management', 'Note-taking', 'Knowledge organization']
            }
        ],
        credits: {
            ugCredits: 4,
            pgCredits: 3,
            phdCredits: 3,
            contactHours: 15,
            selfStudyHours: 70,
            practicalHours: 15
        },
        holisticDevelopment: {
            physical: ['Reading stamina', 'Screen time management', 'Ergonomic practices'],
            emotional: ['Patience development', 'Dealing with complexity', 'Building persistence'],
            intellectual: ['Deep reading', 'Analytical thinking', 'Knowledge synthesis'],
            social: ['Paper discussion groups', 'Peer learning', 'Academic discourse'],
            ethical: ['Proper citation', 'Avoiding plagiarism', 'Respecting intellectual property']
        },
        interdisciplinaryConnections: [
            'Reading papers across domains',
            'Identifying cross-domain methodologies',
            'Understanding interdisciplinary research approaches'
        ],
        industryRelevance: [
            'Understanding state-of-the-art technologies',
            'Identifying commercialization opportunities',
            'Learning from industry-academic collaborations'
        ],
        sustainabilityGoals: [
            'SDG 4: Quality Education',
            'SDG 12: Responsible Consumption (digital resources)',
            'SDG 17: Knowledge Sharing'
        ]
    },
    {
        stageId: 3,
        competencies: [
            {
                id: 'C3.1',
                domain: 'cognitive',
                bloomLevel: 'create',
                nsqfLevel: 7,
                description: 'Identifying novel research gaps and opportunities',
                learningOutcome: 'Student can identify, validate, and articulate research gaps',
                assessmentMethods: ['Gap analysis report', 'Problem statement', 'Supervisor validation'],
                skillsAcquired: ['Gap identification', 'Problem formulation', 'Research design', 'Innovation thinking']
            },
            {
                id: 'C3.2',
                domain: 'cognitive',
                bloomLevel: 'evaluate',
                nsqfLevel: 7,
                description: 'Validating research gaps using NIFI criteria',
                learningOutcome: 'Student can assess gaps for novelty, importance, feasibility, and interest',
                assessmentMethods: ['NIFI scoring matrix', 'Feasibility analysis', 'Novelty check'],
                skillsAcquired: ['Critical evaluation', 'Feasibility assessment', 'Strategic thinking']
            },
            {
                id: 'C3.3',
                domain: 'affective',
                bloomLevel: 'evaluate',
                nsqfLevel: 7,
                description: 'Aligning personal passion with research opportunities',
                learningOutcome: 'Student can choose research problems that align with personal interests and societal needs',
                assessmentMethods: ['Motivation essay', 'Impact analysis', 'Long-term vision statement'],
                skillsAcquired: ['Self-awareness', 'Value alignment', 'Purpose-driven thinking']
            }
        ],
        credits: {
            ugCredits: 4,
            pgCredits: 3,
            phdCredits: 4,
            contactHours: 20,
            selfStudyHours: 60,
            practicalHours: 20
        },
        holisticDevelopment: {
            physical: ['Research discussions', 'Brainstorming sessions', 'Supervisor meetings'],
            emotional: ['Dealing with ambiguity', 'Building confidence in ideas', 'Handling criticism'],
            intellectual: ['Creative thinking', 'Problem identification', 'Strategic planning'],
            social: ['Collaborative brainstorming', 'Seeking expert feedback', 'Presenting ideas'],
            ethical: ['Originality', 'Honest assessment', 'Responsible innovation']
        },
        interdisciplinaryConnections: [
            'Finding gaps at domain intersections',
            'Applying methods from one domain to another',
            'Creating fusion research opportunities'
        ],
        industryRelevance: [
            'Identifying industry pain points',
            'Aligning research with market needs',
            'Understanding commercialization potential'
        ],
        sustainabilityGoals: [
            'SDG 9: Innovation and Infrastructure',
            'SDG 12: Responsible Innovation',
            'SDG 17: Collaborative Problem Solving'
        ]
    },
    // Phase 2: Execution
    {
        stageId: 4,
        competencies: [
            {
                id: 'C4.1',
                domain: 'psychomotor',
                bloomLevel: 'create',
                nsqfLevel: 7,
                description: 'Implementing research solutions through systematic experimentation',
                learningOutcome: 'Student can design, execute, and document research experiments',
                assessmentMethods: ['Working prototype', 'Experimental data', 'Research journal'],
                skillsAcquired: ['Experimental design', 'Implementation', 'Data collection', 'Documentation']
            },
            {
                id: 'C4.2',
                domain: 'cognitive',
                bloomLevel: 'analyze',
                nsqfLevel: 7,
                description: 'Analyzing experimental results and iterating solutions',
                learningOutcome: 'Student can analyze data, identify patterns, and refine approaches',
                assessmentMethods: ['Data analysis reports', 'Iteration logs', 'Results presentation'],
                skillsAcquired: ['Data analysis', 'Statistical thinking', 'Iterative development', 'Problem-solving']
            },
            {
                id: 'C4.3',
                domain: 'ethical',
                bloomLevel: 'apply',
                nsqfLevel: 7,
                description: 'Maintaining research integrity and ethical practices',
                learningOutcome: 'Student can conduct research ethically with proper documentation',
                assessmentMethods: ['Ethics compliance', 'Lab notebook', 'Data management practices'],
                skillsAcquired: ['Research ethics', 'Data integrity', 'Responsible conduct', 'Transparency']
            }
        ],
        credits: {
            ugCredits: 6,
            pgCredits: 5,
            phdCredits: 8,
            contactHours: 30,
            selfStudyHours: 90,
            practicalHours: 80
        },
        holisticDevelopment: {
            physical: ['Lab work', 'Hands-on experimentation', 'Equipment handling'],
            emotional: ['Dealing with failures', 'Persistence', 'Celebrating small wins'],
            intellectual: ['Problem-solving', 'Analytical thinking', 'Innovation'],
            social: ['Team collaboration', 'Supervisor guidance', 'Peer support'],
            ethical: ['Research integrity', 'Data honesty', 'Ethical experimentation']
        },
        interdisciplinaryConnections: [
            'Using tools from multiple domains',
            'Applying cross-domain methodologies',
            'Collaborative research approaches'
        ],
        industryRelevance: [
            'Building industry-relevant prototypes',
            'Using industry-standard tools',
            'Addressing real-world problems'
        ],
        sustainabilityGoals: [
            'SDG 9: Innovation',
            'SDG 12: Responsible Production',
            'SDG 13: Climate Action (if applicable)'
        ]
    },
    {
        stageId: 5,
        competencies: [
            {
                id: 'C5.1',
                domain: 'cognitive',
                bloomLevel: 'create',
                nsqfLevel: 8,
                description: 'Writing research papers for academic publication',
                learningOutcome: 'Student can write clear, structured research papers following academic standards',
                assessmentMethods: ['Draft paper', 'Peer review', 'Submission proof'],
                skillsAcquired: ['Academic writing', 'Paper structure', 'Citation', 'Revision']
            },
            {
                id: 'C5.2',
                domain: 'social',
                bloomLevel: 'apply',
                nsqfLevel: 8,
                description: 'Navigating peer review and publication process',
                learningOutcome: 'Student can handle peer review feedback and revise papers effectively',
                assessmentMethods: ['Revision history', 'Response to reviewers', 'Published paper'],
                skillsAcquired: ['Handling criticism', 'Professional communication', 'Revision skills']
            }
        ],
        credits: {
            ugCredits: 4,
            pgCredits: 4,
            phdCredits: 6,
            contactHours: 20,
            selfStudyHours: 70,
            practicalHours: 10
        },
        holisticDevelopment: {
            physical: ['Writing stamina', 'Presentation skills'],
            emotional: ['Handling rejection', 'Building resilience', 'Celebrating acceptance'],
            intellectual: ['Clear communication', 'Logical argumentation', 'Critical revision'],
            social: ['Academic networking', 'Peer collaboration', 'Professional communication'],
            ethical: ['Authorship ethics', 'Proper attribution', 'Data transparency']
        },
        interdisciplinaryConnections: [
            'Writing for interdisciplinary audiences',
            'Citing cross-domain literature',
            'Collaborative authorship'
        ],
        industryRelevance: [
            'Technical writing skills',
            'Communication with stakeholders',
            'Documentation practices'
        ],
        sustainabilityGoals: [
            'SDG 4: Knowledge Dissemination',
            'SDG 17: Knowledge Sharing'
        ]
    },
    {
        stageId: 6,
        competencies: [
            {
                id: 'C6.1',
                domain: 'cognitive',
                bloomLevel: 'create',
                nsqfLevel: 8,
                description: 'Drafting patent applications for innovations',
                learningOutcome: 'Student can identify patentable innovations and draft patent applications',
                assessmentMethods: ['Patent draft', 'Prior art search', 'Claims writing'],
                skillsAcquired: ['IP understanding', 'Patent writing', 'Innovation protection', 'Legal awareness']
            },
            {
                id: 'C6.2',
                domain: 'ethical',
                bloomLevel: 'evaluate',
                nsqfLevel: 8,
                description: 'Understanding intellectual property rights and ethics',
                learningOutcome: 'Student can navigate IP landscape ethically and responsibly',
                assessmentMethods: ['IP ethics quiz', 'Prior art analysis', 'Novelty assessment'],
                skillsAcquired: ['IP ethics', 'Legal compliance', 'Innovation assessment']
            }
        ],
        credits: {
            ugCredits: 3,
            pgCredits: 3,
            phdCredits: 4,
            contactHours: 15,
            selfStudyHours: 50,
            practicalHours: 10
        },
        holisticDevelopment: {
            physical: ['Patent office visits', 'IP workshops'],
            emotional: ['Valuing innovation', 'Protecting ideas', 'Commercial mindset'],
            intellectual: ['Legal thinking', 'Innovation assessment', 'Strategic planning'],
            social: ['IP attorney collaboration', 'Industry partnerships'],
            ethical: ['IP ethics', 'Fair use', 'Innovation responsibility']
        },
        interdisciplinaryConnections: [
            'Technology + Law = IP Management',
            'Innovation + Business = Commercialization'
        ],
        industryRelevance: [
            'Protecting innovations',
            'Technology transfer',
            'Startup readiness'
        ],
        sustainabilityGoals: [
            'SDG 9: Innovation Protection',
            'SDG 8: Economic Growth through Innovation'
        ]
    }
]

// Helper function to get competencies by stage
export function getCompetenciesByStage(stageId: number): StageCompetencyMapping | undefined {
    return STAGE_COMPETENCIES.find(sc => sc.stageId === stageId)
}

// Helper function to calculate total credits
export function calculateTotalCredits(level: 'ug' | 'pg' | 'phd'): number {
    return STAGE_COMPETENCIES.reduce((total, stage) => {
        switch (level) {
            case 'ug': return total + stage.credits.ugCredits
            case 'pg': return total + stage.credits.pgCredits
            case 'phd': return total + stage.credits.phdCredits
            default: return total
        }
    }, 0)
}

// Helper function to get all skills acquired
export function getAllSkills(): string[] {
    const skills = new Set<string>()
    STAGE_COMPETENCIES.forEach(stage => {
        stage.competencies.forEach(comp => {
            comp.skillsAcquired.forEach(skill => skills.add(skill))
        })
    })
    return Array.from(skills).sort()
}
