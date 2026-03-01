// Virtual Research Lab - NEP 2020 Aligned
// Experiential Learning, Multidisciplinary, Technology-Enabled

export interface VirtualLab {
    id: string
    name: string
    description: string
    nep2020Alignment: NEP2020Alignment
    experiments: Experiment[]
    simulations: Simulation[]
    datasets: Dataset[]
    tools: LabTool[]
    collaborationSpaces: CollaborationSpace[]
}

export interface NEP2020Alignment {
    competencies: string[]
    learningOutcomes: string[]
    assessmentMethods: string[]
    multidisciplinaryAspects: string[]
    skillsDeveloped: string[]
}

export interface Experiment {
    id: string
    title: string
    domain: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    duration: string
    objective: string
    theory: string
    procedure: ExperimentStep[]
    expectedResults: string
    analysis: string
    questions: string[]
    resources: string[]
}

export interface ExperimentStep {
    stepNumber: number
    title: string
    description: string
    instruction: string
    action: string
    example?: string
    visualization?: string
    checkpoint: string
}

export interface Simulation {
    id: string
    title: string
    description: string
    type: 'interactive' | 'visualization' | 'modeling'
    parameters: SimulationParameter[]
    scenarios: Scenario[]
}

export interface SimulationParameter {
    name: string
    description: string
    range: string
    defaultValue: string | number
}

export interface Scenario {
    id: string
    name: string
    description: string
    difficulty: string
    objectives: string[]
}

export interface Dataset {
    id: string
    name: string
    description: string
    domain: string
    size: string
    format: string
    downloadUrl?: string
    documentation: string
    useCases: string[]
}

export interface LabTool {
    id: string
    name: string
    description: string
    category: 'analysis' | 'visualization' | 'computation' | 'collaboration'
    features: string[]
    tutorials: string[]
}

export interface CollaborationSpace {
    id: string
    name: string
    purpose: string
    capacity: string
    features: string[]
}

// Main Virtual Lab Configuration
export const RESEARCH_VIRTUAL_LAB: VirtualLab = {
    id: 'research-virtual-lab',
    name: 'Research Navigator Virtual Lab',
    description: 'Comprehensive virtual laboratory for experiential research learning aligned with NEP 2020 guidelines',
    nep2020Alignment: {
        competencies: [
            'Critical Thinking and Problem Solving',
            'Creativity and Innovation',
            'Communication and Collaboration',
            'Digital Literacy and Computational Thinking',
            'Research and Inquiry Skills',
            'Ethical and Social Responsibility'
        ],
        learningOutcomes: [
            'Design and conduct research experiments',
            'Analyze and interpret research data',
            'Apply research methodologies',
            'Collaborate in multidisciplinary teams',
            'Communicate research findings effectively',
            'Demonstrate ethical research practices'
        ],
        assessmentMethods: [
            'Performance-based assessment (experiments)',
            'Portfolio assessment (research artifacts)',
            'Peer assessment (collaborative work)',
            'Self-assessment (reflection journals)',
            'Project-based assessment (research projects)',
            'Competency-based evaluation'
        ],
        multidisciplinaryAspects: [
            'Integration of AI, Data Science, and Domain Knowledge',
            'Combination of Theory and Practice',
            'Cross-domain problem solving',
            'Holistic skill development',
            'Real-world application focus'
        ],
        skillsDeveloped: [
            'Research Design', 'Data Analysis', 'Critical Thinking',
            'Scientific Writing', 'Presentation Skills', 'Collaboration',
            'Ethical Decision Making', 'Tool Proficiency', 'Time Management'
        ]
    },

    experiments: [
        // Experiment 1: Literature Review Analysis
        {
            id: 'exp-literature-analysis',
            title: 'Systematic Literature Review & Gap Analysis',
            domain: 'Research Methodology',
            difficulty: 'beginner',
            duration: '3-4 hours',
            objective: 'Learn to conduct systematic literature review and identify research gaps using computational tools',
            theory: `Literature review is the foundation of research. This experiment teaches you to:
1. Search and filter academic papers systematically
2. Extract key information from papers
3. Identify patterns and trends
4. Spot research gaps using visual analytics
5. Build citation networks`,
            procedure: [
                {
                    stepNumber: 1,
                    title: 'Define Research Topic',
                    description: 'Start by clearly defining your research topic and generating relevant keywords',
                    instruction: 'Define your research topic and keywords',
                    action: 'Enter your research topic and generate 10-15 search keywords using the keyword generator tool',
                    example: 'Topic: "AI in Healthcare", Keywords: machine learning, medical diagnosis, deep learning, healthcare AI, clinical decision support, etc.',
                    checkpoint: 'List of 10-15 relevant keywords generated'
                },
                {
                    stepNumber: 2,
                    title: 'Search and Collect Papers',
                    description: 'Use integrated search tools to find relevant research papers',
                    instruction: 'Search and collect papers',
                    action: 'Use the integrated search tool to find 30 papers from Google Scholar, IEEE, ACM',
                    example: 'Search "machine learning AND medical diagnosis" in Google Scholar, filter by year (2020-2024), select highly cited papers',
                    checkpoint: '30 papers collected with metadata'
                },
                {
                    stepNumber: 3,
                    title: 'Extract Information',
                    description: 'Systematically extract key information from each paper',
                    instruction: 'Extract and organize information',
                    action: 'Use the paper analyzer to extract: problem, method, dataset, results, limitations',
                    example: 'Paper 1: Problem=Early cancer detection, Method=CNN, Dataset=10K images, Results=92% accuracy, Limitations=Limited to one cancer type',
                    checkpoint: 'Structured data extracted from all papers'
                },
                {
                    stepNumber: 4,
                    title: 'Visualize Patterns',
                    description: 'Create visual analytics to identify trends and patterns',
                    instruction: 'Visualize patterns',
                    action: 'Generate visualization: timeline, method distribution, citation network',
                    visualization: 'Interactive charts showing trends and connections',
                    checkpoint: 'Visual analytics dashboard created'
                },
                {
                    stepNumber: 5,
                    title: 'Identify Research Gaps',
                    description: 'Analyze patterns to identify meaningful research gaps',
                    instruction: 'Identify gaps',
                    action: 'Use gap analysis tool to identify: method gaps, application gaps, dataset gaps',
                    example: 'Gap identified: Most papers use single-modal data, opportunity for multi-modal approaches',
                    checkpoint: 'List of 5-7 research gaps identified'
                }
            ],
            expectedResults: 'Comprehensive literature review with visual analytics, citation network, and identified research gaps',
            analysis: 'Analyze the patterns: Which methods are most common? What datasets are used? What limitations appear repeatedly? Where are the gaps?',
            questions: [
                'What are the 3 most common methods in your domain?',
                'Which papers are most influential (high citations)?',
                'What limitations appear in 50%+ papers?',
                'What is the trend over the last 5 years?',
                'What gaps did you identify and why are they important?'
            ],
            resources: [
                'Google Scholar API',
                'Connected Papers',
                'VOSviewer for citation analysis',
                'Tableau/PowerBI for visualization'
            ]
        },

        // Experiment 2: Research Data Analysis
        {
            id: 'exp-data-analysis',
            title: 'Research Data Analysis & Visualization',
            domain: 'Data Science',
            difficulty: 'intermediate',
            duration: '4-5 hours',
            objective: 'Learn to analyze research data, perform statistical tests, and create publication-quality visualizations',
            theory: `Data analysis is crucial for research. This experiment covers:
1. Exploratory Data Analysis (EDA)
2. Statistical hypothesis testing
3. Correlation and regression analysis
4. Data visualization best practices
5. Interpretation and reporting`,
            procedure: [
                {
                    stepNumber: 1,
                    title: 'Load and Explore Dataset',
                    description: 'Import your dataset and perform initial exploration',
                    instruction: 'Load and explore dataset',
                    action: 'Import dataset, check dimensions, data types, missing values, basic statistics',
                    example: 'Dataset: 1000 rows × 15 columns, 3 missing values in age column, mean age=45.2',
                    checkpoint: 'Dataset loaded with summary statistics'
                },
                {
                    stepNumber: 2,
                    title: 'Clean and Preprocess',
                    description: 'Handle missing values and prepare data for analysis',
                    instruction: 'Clean and preprocess data',
                    action: 'Handle missing values, remove outliers, normalize/standardize if needed',
                    example: 'Filled missing values with median, removed 5 outliers (>3 SD), normalized features to 0-1 range',
                    checkpoint: 'Clean dataset ready for analysis'
                },
                {
                    stepNumber: 3,
                    title: 'Exploratory Analysis',
                    description: 'Create visualizations to understand data distributions',
                    instruction: 'Perform exploratory analysis',
                    action: 'Create histograms, box plots, scatter plots to understand distributions and relationships',
                    visualization: 'Distribution plots and correlation heatmap',
                    checkpoint: 'EDA visualizations created'
                },
                {
                    stepNumber: 4,
                    title: 'Statistical Testing',
                    description: 'Perform appropriate statistical tests',
                    instruction: 'Statistical testing',
                    action: 'Perform t-tests, ANOVA, chi-square tests based on research questions',
                    example: 't-test: p=0.023 (significant difference between groups), Effect size: Cohen\'s d=0.65 (medium)',
                    checkpoint: 'Statistical test results with p-values'
                },
                {
                    stepNumber: 5,
                    title: 'Create Publication Figures',
                    description: 'Design clear, publication-quality visualizations',
                    instruction: 'Create publication-quality figures',
                    action: 'Design clear, informative visualizations following best practices',
                    visualization: 'Publication-ready figures with proper labels and captions',
                    checkpoint: 'Publication-ready figures with captions'
                }
            ],
            expectedResults: 'Complete data analysis report with statistical tests, visualizations, and interpretations',
            analysis: 'Interpret results: Are differences significant? What patterns emerge? How do variables relate? What do results mean for your research question?',
            questions: [
                'What is the distribution of your key variables?',
                'Are there significant differences between groups?',
                'What correlations exist in your data?',
                'Do results support or reject your hypothesis?',
                'What are the limitations of your analysis?'
            ],
            resources: [
                'Python (pandas, numpy, scipy, matplotlib, seaborn)',
                'R (ggplot2, dplyr)',
                'SPSS/JASP for statistical analysis',
                'Tableau for interactive visualizations'
            ]
        },

        // Experiment 3: Research Proposal Simulation
        {
            id: 'exp-proposal-simulation',
            title: 'Research Proposal Writing & Evaluation',
            domain: 'Research Communication',
            difficulty: 'advanced',
            duration: '6-8 hours',
            objective: 'Learn to write compelling research proposals and understand the review process',
            theory: `Research proposals are critical for funding. This experiment teaches:
1. Proposal structure and components
2. Writing clear objectives and methodology
3. Budget planning and justification
4. Understanding reviewer perspective
5. Addressing reviewer concerns`,
            procedure: [
                {
                    stepNumber: 1,
                    title: 'Define Research Problem',
                    description: 'Articulate a clear, compelling research problem that addresses a significant gap',
                    instruction: 'Define research problem',
                    action: 'Write problem statement, significance, and research questions',
                    example: 'Problem: Current AI models for medical diagnosis lack explainability, limiting clinical adoption. Significance: Explainable AI can increase trust and adoption by 60%. Questions: How can we develop interpretable models without sacrificing accuracy?',
                    checkpoint: 'Clear problem definition (500 words)'
                },
                {
                    stepNumber: 2,
                    title: 'Design Methodology',
                    description: 'Develop a rigorous, feasible research methodology',
                    instruction: 'Design methodology',
                    action: 'Detail research design, methods, data collection, analysis plan',
                    example: 'Design: Mixed-methods approach. Methods: Develop attention-based CNN, conduct user studies with 50 clinicians. Data: 10K medical images from 3 hospitals. Analysis: Quantitative (accuracy, F1) + Qualitative (interviews)',
                    checkpoint: 'Complete methodology section (1000 words)'
                },
                {
                    stepNumber: 3,
                    title: 'Create Timeline and Budget',
                    description: 'Plan realistic timeline with milestones and justify budget allocation',
                    instruction: 'Create timeline and budget',
                    action: 'Develop realistic timeline with milestones and detailed budget',
                    example: 'Timeline: M1-6: Data collection, M7-12: Model development, M13-18: User studies, M19-24: Analysis & writing. Budget: Equipment ₹5L, Personnel ₹15L, Travel ₹3L, Consumables ₹2L = Total ₹25L',
                    checkpoint: 'Gantt chart and budget breakdown'
                },
                {
                    stepNumber: 4,
                    title: 'Write Complete Proposal',
                    description: 'Integrate all sections into a cohesive, compelling proposal',
                    instruction: 'Write complete proposal',
                    action: 'Integrate all sections: abstract, intro, lit review, methodology, timeline, budget',
                    example: 'Abstract (250 words) → Introduction (1 page) → Literature Review (2 pages) → Methodology (2 pages) → Timeline (1 page) → Budget (1 page) → References',
                    checkpoint: 'Complete proposal draft (5-10 pages)'
                },
                {
                    stepNumber: 5,
                    title: 'Peer Review Simulation',
                    description: 'Submit to virtual reviewers, receive feedback, and revise strategically',
                    instruction: 'Peer review simulation',
                    action: 'Submit to virtual reviewer system, receive feedback, revise proposal',
                    example: 'Reviewer 1: "Methodology unclear" → Added flowchart. Reviewer 2: "Budget high" → Justified with market rates. Reviewer 3: "Timeline ambitious" → Added contingency buffer',
                    checkpoint: 'Revised proposal based on feedback'
                }
            ],
            expectedResults: 'Complete research proposal with all components, reviewed and revised based on feedback',
            analysis: 'Evaluate your proposal: Is problem clear? Is methodology sound? Is budget justified? How did you address reviewer concerns?',
            questions: [
                'What makes your research novel and important?',
                'How is your methodology appropriate for the problem?',
                'What are potential challenges and mitigation strategies?',
                'How did reviewer feedback improve your proposal?',
                'What would you do differently next time?'
            ],
            resources: [
                'Proposal templates (SERB, DST, NSF)',
                'Budget calculator',
                'Timeline generator',
                'Peer review rubric'
            ]
        }
    ],

    simulations: [
        {
            id: 'sim-research-lifecycle',
            title: 'Complete Research Lifecycle Simulation',
            description: 'Experience the entire research journey from idea to publication',
            type: 'interactive',
            parameters: [
                {
                    name: 'Research Domain',
                    description: 'Choose your research area',
                    range: 'AI, IoT, Biotech, Energy, Healthcare, etc.',
                    defaultValue: 'AI in Healthcare'
                },
                {
                    name: 'Timeline',
                    description: 'Project duration',
                    range: '6 months to 3 years',
                    defaultValue: '1 year'
                },
                {
                    name: 'Budget',
                    description: 'Available funding',
                    range: '₹1L to ₹50L',
                    defaultValue: '₹5L'
                },
                {
                    name: 'Team Size',
                    description: 'Number of researchers',
                    range: '1-10',
                    defaultValue: 3
                }
            ],
            scenarios: [
                {
                    id: 'scenario-smooth',
                    name: 'Smooth Sailing',
                    description: 'Everything goes according to plan',
                    difficulty: 'Easy',
                    objectives: [
                        'Complete all milestones on time',
                        'Stay within budget',
                        'Publish in target venue',
                        'Achieve expected results'
                    ]
                },
                {
                    id: 'scenario-challenges',
                    name: 'Real-World Challenges',
                    description: 'Face typical research obstacles',
                    difficulty: 'Medium',
                    objectives: [
                        'Handle unexpected results',
                        'Manage budget constraints',
                        'Deal with reviewer rejections',
                        'Adapt methodology'
                    ]
                },
                {
                    id: 'scenario-crisis',
                    name: 'Crisis Management',
                    description: 'Navigate major setbacks',
                    difficulty: 'Hard',
                    objectives: [
                        'Recover from failed experiments',
                        'Pivot research direction',
                        'Secure additional funding',
                        'Rebuild team morale'
                    ]
                }
            ]
        },

        {
            id: 'sim-peer-review',
            title: 'Peer Review Process Simulation',
            description: 'Experience both sides of peer review - as author and reviewer',
            type: 'interactive',
            parameters: [
                {
                    name: 'Venue Type',
                    description: 'Conference or Journal',
                    range: 'Top-tier Conference, Mid-tier Conference, Journal',
                    defaultValue: 'Top-tier Conference'
                },
                {
                    name: 'Paper Quality',
                    description: 'Quality of your submission',
                    range: 'Excellent, Good, Average, Poor',
                    defaultValue: 'Good'
                },
                {
                    name: 'Reviewer Strictness',
                    description: 'How critical are reviewers',
                    range: 'Lenient, Moderate, Strict',
                    defaultValue: 'Moderate'
                }
            ],
            scenarios: [
                {
                    id: 'scenario-accept',
                    name: 'Paper Accepted',
                    description: 'Your paper is accepted with minor revisions',
                    difficulty: 'Easy',
                    objectives: [
                        'Address reviewer comments',
                        'Revise paper within deadline',
                        'Prepare camera-ready version',
                        'Plan presentation'
                    ]
                },
                {
                    id: 'scenario-major-revision',
                    name: 'Major Revision Required',
                    description: 'Significant changes needed',
                    difficulty: 'Medium',
                    objectives: [
                        'Understand reviewer concerns',
                        'Conduct additional experiments',
                        'Rewrite major sections',
                        'Respond to reviewers professionally'
                    ]
                },
                {
                    id: 'scenario-reject',
                    name: 'Paper Rejected',
                    description: 'Handle rejection and resubmit',
                    difficulty: 'Hard',
                    objectives: [
                        'Analyze rejection reasons',
                        'Improve paper significantly',
                        'Choose new venue',
                        'Resubmit successfully'
                    ]
                }
            ]
        }
    ],

    datasets: [
        {
            id: 'dataset-research-papers',
            name: 'Research Papers Corpus',
            description: 'Collection of 10,000 research papers with metadata',
            domain: 'Multi-domain',
            size: '2 GB',
            format: 'JSON, CSV',
            documentation: 'Includes title, abstract, authors, citations, keywords, year',
            useCases: [
                'Literature review practice',
                'Citation network analysis',
                'Trend analysis',
                'Topic modeling',
                'Research gap identification'
            ]
        },
        {
            id: 'dataset-experimental-results',
            name: 'Sample Experimental Data',
            description: 'Synthetic experimental data for analysis practice',
            domain: 'Various',
            size: '500 MB',
            format: 'CSV, Excel',
            documentation: 'Multiple datasets with different characteristics',
            useCases: [
                'Statistical analysis practice',
                'Hypothesis testing',
                'Data visualization',
                'Result interpretation',
                'Report writing'
            ]
        },
        {
            id: 'dataset-proposals',
            name: 'Successful Research Proposals',
            description: 'Anonymized successful proposals from various funding agencies',
            domain: 'Multi-domain',
            size: '100 MB',
            format: 'PDF, Word',
            documentation: 'Includes SERB, DST, DBT, ICMR proposals',
            useCases: [
                'Proposal writing learning',
                'Structure analysis',
                'Budget planning examples',
                'Methodology design',
                'Best practices study'
            ]
        }
    ],

    tools: [
        {
            id: 'tool-paper-analyzer',
            name: 'Research Paper Analyzer',
            description: 'AI-powered tool to analyze and extract information from research papers',
            category: 'analysis',
            features: [
                'Automatic metadata extraction',
                'Key concept identification',
                'Methodology extraction',
                'Results summarization',
                'Limitation identification',
                'Citation network building'
            ],
            tutorials: [
                'Getting started with paper analysis',
                'Building literature matrices',
                'Identifying research gaps',
                'Creating citation networks'
            ]
        },
        {
            id: 'tool-data-analyzer',
            name: 'Statistical Data Analyzer',
            description: 'Comprehensive tool for statistical analysis and visualization',
            category: 'analysis',
            features: [
                'Descriptive statistics',
                'Hypothesis testing (t-test, ANOVA, chi-square)',
                'Correlation and regression',
                'Interactive visualizations',
                'Report generation',
                'Export to publication formats'
            ],
            tutorials: [
                'Exploratory data analysis',
                'Statistical hypothesis testing',
                'Creating publication-quality figures',
                'Interpreting results'
            ]
        },
        {
            id: 'tool-proposal-builder',
            name: 'Research Proposal Builder',
            description: 'Guided tool for creating research proposals',
            category: 'computation',
            features: [
                'Template selection (SERB, DST, NSF, etc.)',
                'Section-by-section guidance',
                'Budget calculator',
                'Timeline generator',
                'Compliance checker',
                'Export to required formats'
            ],
            tutorials: [
                'Writing effective proposals',
                'Budget planning',
                'Timeline creation',
                'Addressing reviewer concerns'
            ]
        },
        {
            id: 'tool-visualization-studio',
            name: 'Research Visualization Studio',
            description: 'Create publication-quality visualizations',
            category: 'visualization',
            features: [
                'Multiple chart types',
                'Customizable themes',
                'Interactive dashboards',
                'Export to high-resolution formats',
                'Accessibility compliance',
                'Color-blind friendly palettes'
            ],
            tutorials: [
                'Choosing right visualization',
                'Design principles',
                'Creating effective figures',
                'Accessibility best practices'
            ]
        },
        {
            id: 'tool-collaboration-hub',
            name: 'Research Collaboration Hub',
            description: 'Platform for team collaboration and project management',
            category: 'collaboration',
            features: [
                'Real-time document editing',
                'Task management',
                'Version control',
                'Discussion forums',
                'File sharing',
                'Meeting scheduler'
            ],
            tutorials: [
                'Setting up team workspace',
                'Collaborative writing',
                'Project management',
                'Effective team communication'
            ]
        }
    ],

    collaborationSpaces: [
        {
            id: 'space-discussion-forum',
            name: 'Research Discussion Forum',
            purpose: 'Ask questions, share insights, discuss research topics',
            capacity: 'Unlimited',
            features: [
                'Topic-based threads',
                'Expert moderation',
                'Upvoting system',
                'Search functionality',
                'Notification system'
            ]
        },
        {
            id: 'space-peer-review',
            name: 'Peer Review Space',
            purpose: 'Get feedback on papers, proposals, presentations',
            capacity: '5-10 reviewers per submission',
            features: [
                'Anonymous review option',
                'Structured feedback forms',
                'Rating system',
                'Revision tracking',
                'Discussion threads'
            ]
        },
        {
            id: 'space-project-rooms',
            name: 'Virtual Project Rooms',
            purpose: 'Dedicated spaces for research teams',
            capacity: '2-10 members per room',
            features: [
                'Shared workspace',
                'Video conferencing',
                'Whiteboard',
                'File repository',
                'Task board'
            ]
        },
        {
            id: 'space-mentorship',
            name: 'Mentorship Lounge',
            purpose: 'Connect with mentors and advisors',
            capacity: '1-on-1 or small groups',
            features: [
                'Mentor matching',
                'Scheduled sessions',
                'Progress tracking',
                'Resource sharing',
                'Goal setting'
            ]
        }
    ]
}

// Helper functions
export function getExperimentById(id: string): Experiment | undefined {
    return RESEARCH_VIRTUAL_LAB.experiments.find(e => e.id === id)
}

export function getExperimentsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Experiment[] {
    return RESEARCH_VIRTUAL_LAB.experiments.filter(e => e.difficulty === difficulty)
}

export function getExperimentsByDomain(domain: string): Experiment[] {
    return RESEARCH_VIRTUAL_LAB.experiments.filter(e => e.domain === domain)
}

export function getSimulationById(id: string): Simulation | undefined {
    return RESEARCH_VIRTUAL_LAB.simulations.find(s => s.id === id)
}

export function getDatasetById(id: string): Dataset | undefined {
    return RESEARCH_VIRTUAL_LAB.datasets.find(d => d.id === id)
}

export function getToolsByCategory(category: 'analysis' | 'visualization' | 'computation' | 'collaboration'): LabTool[] {
    return RESEARCH_VIRTUAL_LAB.tools.filter(t => t.category === category)
}

export function getLabStatistics() {
    return {
        totalExperiments: RESEARCH_VIRTUAL_LAB.experiments.length,
        totalSimulations: RESEARCH_VIRTUAL_LAB.simulations.length,
        totalDatasets: RESEARCH_VIRTUAL_LAB.datasets.length,
        totalTools: RESEARCH_VIRTUAL_LAB.tools.length,
        nep2020Competencies: RESEARCH_VIRTUAL_LAB.nep2020Alignment.competencies.length,
        totalCollaborationSpaces: RESEARCH_VIRTUAL_LAB.collaborationSpaces.length,
        skillsDeveloped: RESEARCH_VIRTUAL_LAB.nep2020Alignment.skillsDeveloped.length
    }
}

export function getAllNEP2020Competencies(): string[] {
    return RESEARCH_VIRTUAL_LAB.nep2020Alignment.competencies
}
