// Resource Library - All guides and tools available in the platform

export interface ResourceItem {
    id: string
    title: string
    description: string
    category: 'guide' | 'template' | 'tool' | 'activity'
    icon: string
    color: string
    file: string
    stage?: number
    features: string[]
    downloadable: boolean
    interactive: boolean
}

export const RESOURCE_CATEGORIES = [
    { id: 'all', name: 'All Resources', icon: '📚', color: 'gray' },
    { id: 'guide', name: 'Guides', icon: '📖', color: 'blue' },
    { id: 'template', name: 'Templates', icon: '📄', color: 'green' },
    { id: 'tool', name: 'Tools', icon: '🛠️', color: 'purple' },
    { id: 'activity', name: 'Activities', icon: '🎯', color: 'orange' }
]

export const RESOURCE_LIBRARY: ResourceItem[] = [
    // NEW: AI Research Prompts Tool
    {
        id: 'ai-research-prompts',
        title: 'Ethical Use of AI in Research Journey',
        description: 'Domain-specific AI prompts for each research stage with guidelines, sample inputs/outputs, and ethical considerations. Learn how to effectively use AI tools throughout your research journey while maintaining academic integrity.',
        category: 'tool',
        icon: '🤖',
        color: 'indigo',
        file: 'ai-research-prompts.ts',
        features: [
            'Stage-specific AI prompts for all 15 research stages',
            'Detailed usage guidelines and best practices',
            'Sample inputs and expected outputs for each prompt',
            'Ethical considerations and limitations clearly stated',
            'Domain-specific examples (Medical AI, Computer Science, etc.)',
            'Covers literature review, experimentation, paper writing, and more'
        ],
        downloadable: false,
        interactive: true
    },

    // Guides
    {
        id: 'paper-writing-guide',
        title: 'Paper Writing Guide',
        description: 'Complete guide for writing high-quality research papers with 8 components, good vs bad examples, and publication venue selection',
        category: 'guide',
        icon: '📝',
        color: 'blue',
        file: 'paper-writing-guide.ts',
        stage: 5,
        features: [
            '8 paper components (Title to References)',
            'Good vs bad examples for each section',
            'Publication venue selection by outcome type',
            '30-day writing schedule',
            'Predatory journal red flags',
            'Reviewer concerns and how to address'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'desk-rejection-guide',
        title: 'Desk Rejection Prevention Guide',
        description: 'Avoid desk rejection with 12 common reasons, prevention strategies, and submission timeline',
        category: 'guide',
        icon: '🚫',
        color: 'red',
        file: 'desk-rejection-guide.ts',
        stage: 5,
        features: [
            '12 common rejection reasons with severity',
            'How to avoid each rejection type',
            'Checklist items for each reason',
            '5-phase submission timeline',
            'Rejection scenarios with recovery',
            'Submission day quick checklist'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'reviewer-response-guide',
        title: 'Reviewer Response Guide',
        description: 'Handle reviewer comments effectively with response strategies and templates',
        category: 'guide',
        icon: '💬',
        color: 'purple',
        file: 'reviewer-response-guide.ts',
        stage: 5,
        features: [
            '8 common comment types',
            'Good vs bad response examples',
            '4 response strategies for different tones',
            '7-step revision process (4-6 weeks)',
            'Common mistakes in responding',
            'Response letter template'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'proposal-drafting-guide',
        title: 'Academic Proposal Guide',
        description: 'Draft winning research proposals with 10 components and 12-week timeline',
        category: 'guide',
        icon: '📋',
        color: 'green',
        file: 'proposal-drafting-guide.ts',
        stage: 7,
        features: [
            '10 proposal components with examples',
            'Word count and structure for each',
            'Good vs bad examples',
            'Tips and common mistakes',
            'What reviewers look for',
            '12-week writing timeline'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'industry-proposal-guide',
        title: 'Industry Proposal Guide',
        description: 'Create industry-focused proposals with ROI analysis and business value',
        category: 'guide',
        icon: '🏢',
        color: 'orange',
        file: 'industry-proposal-guide.ts',
        stage: 13,
        features: [
            '7 industry-specific components',
            'ROI calculation with NPV/IRR',
            'Risk-adjusted scenarios',
            'Implementation plan template',
            'Industry vs academic differences',
            '18-point checklist'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'patent-drafting-guide',
        title: 'Patent Drafting Guide',
        description: 'Draft patents with 4 types, 5-step process, and claims building',
        category: 'guide',
        icon: '⚖️',
        color: 'indigo',
        file: 'patent-drafting-guide.ts',
        stage: 6,
        features: [
            '4 patent types (Design, Utility, National, International)',
            '5-step filing process',
            'Cost and duration for each step',
            'Claims drafting guidelines',
            'Prior art search methods',
            'Helper functions for patent info'
        ],
        downloadable: false,
        interactive: true
    },

    // Templates
    {
        id: 'templates-library',
        title: 'Templates Library',
        description: '60+ downloadable templates for all 15 stages including worksheets, checklists, and examples',
        category: 'template',
        icon: '📦',
        color: 'green',
        file: 'templates-data.ts',
        features: [
            '60+ templates across all stages',
            'Multiple formats (PDF, Word, Excel, PPT)',
            'Worksheets and checklists',
            'Sample documents and examples',
            'Tools and calculators',
            'Organized by stage'
        ],
        downloadable: true,
        interactive: true
    },

    // Activities
    {
        id: 'interactive-activities',
        title: 'Interactive Activities',
        description: '8 hands-on activities with step-by-step instructions and deliverables',
        category: 'activity',
        icon: '🎯',
        color: 'orange',
        file: 'interactive-activities.ts',
        features: [
            'Domain Speed Dating (5 days)',
            '30-Day Reading Challenge',
            'Gap Matrix Workshop',
            'Agile Research Sprint',
            '30-Day Writing Challenge',
            'Patent Claims Builder',
            'Proposal Writing Sprint',
            'Step-by-step instructions with checkpoints'
        ],
        downloadable: false,
        interactive: true
    },

    // Tools
    {
        id: 'journey-guides-integration',
        title: 'Journey Guides Integration',
        description: 'Central integration mapping all guides, templates, and activities to stages',
        category: 'tool',
        icon: '🔗',
        color: 'purple',
        file: 'journey-guides-integration.ts',
        features: [
            'Maps resources to stages',
            'Get guides by stage',
            'Get templates by stage',
            'Get activities by stage',
            'Comprehensive resource retrieval',
            'Helper functions for integration'
        ],
        downloadable: false,
        interactive: false
    },
    {
        id: 'journey-data',
        title: 'Journey Data',
        description: 'Complete 15-stage journey data with phases, sub-stages, and activities',
        category: 'tool',
        icon: '🗺️',
        color: 'blue',
        file: 'journey-data.ts',
        features: [
            '15 stages across 5 phases',
            '90+ sub-stages with deliverables',
            '45+ detailed activities',
            'Learning objectives and transformations',
            'Do\'s and don\'ts for each stage',
            'Success stories'
        ],
        downloadable: false,
        interactive: false
    },
    {
        id: 'assessments-data',
        title: 'Assessments Data',
        description: 'Pre and post assessments for all 15 stages with feedback',
        category: 'tool',
        icon: '✅',
        color: 'green',
        file: 'assessments-data.ts',
        features: [
            '30 assessments (15 stages × 2)',
            '4-option questions with emojis',
            'Personalized feedback',
            'Score tracking',
            'Measures readiness and commitment',
            'Integrated in journey flow'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'nep2020-competencies',
        title: 'NEP 2020 Competencies',
        description: 'NEP 2020 competency framework with Bloom\'s taxonomy and NSQF levels',
        category: 'tool',
        icon: '🎓',
        color: 'indigo',
        file: 'nep2020-competencies.ts',
        features: [
            'Competency framework',
            'Bloom\'s taxonomy levels',
            'NSQF level mapping',
            'Credit mapping (UG/PG/PhD)',
            'Holistic development tracking',
            'Experiential learning focus'
        ],
        downloadable: false,
        interactive: false
    },
    {
        id: 'progress-manager',
        title: 'Progress Manager',
        description: 'Track progress, achievements, and badges across the journey',
        category: 'tool',
        icon: '📊',
        color: 'purple',
        file: 'progress-manager.ts',
        features: [
            'localStorage persistence',
            'Achievement tracking',
            'Badge system',
            'Completion percentage',
            'Transformation score',
            'Stage completion tracking'
        ],
        downloadable: false,
        interactive: false
    },
    {
        id: 'comprehensive-qa-data',
        title: 'Comprehensive Q&A Data',
        description: 'Frequently asked questions and answers for research journey',
        category: 'tool',
        icon: '❓',
        color: 'yellow',
        file: 'comprehensive-qa-data.ts',
        features: [
            'Common questions and answers',
            'Organized by topic',
            'Practical advice',
            'Troubleshooting tips',
            'Best practices',
            'Expert insights'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'roadmap-detailed-data',
        title: 'Roadmap Detailed Data',
        description: 'Visual roadmap data for journey progression',
        category: 'tool',
        icon: '🛣️',
        color: 'blue',
        file: 'roadmap-detailed-data.ts',
        features: [
            'Visual journey roadmap',
            'Phase connections',
            'Milestone markers',
            'Progress visualization',
            'Timeline overview',
            'Stage relationships'
        ],
        downloadable: false,
        interactive: false
    },
    {
        id: 'phase-assessments',
        title: 'Phase Assessments',
        description: 'Phase-level assessments and evaluations',
        category: 'tool',
        icon: '📝',
        color: 'green',
        file: 'phase-assessments.ts',
        features: [
            'Phase-level evaluations',
            'Comprehensive assessments',
            'Phase completion criteria',
            'Readiness checks',
            'Progress validation',
            'Phase transitions'
        ],
        downloadable: false,
        interactive: true
    },
    {
        id: 'topic-specific-orientations',
        title: 'Topic-Specific Orientations',
        description: 'Specialized orientations for different research topics',
        category: 'tool',
        icon: '🎯',
        color: 'orange',
        file: 'topic-specific-orientations.ts',
        features: [
            'Domain-specific guidance',
            'Topic orientations',
            'Specialized resources',
            'Field-specific tips',
            'Customized approaches',
            'Expert recommendations'
        ],
        downloadable: false,
        interactive: true
    }
]

// Helper functions
export function getResourcesByCategory(category: string): ResourceItem[] {
    if (category === 'all') return RESOURCE_LIBRARY
    return RESOURCE_LIBRARY.filter(r => r.category === category)
}

export function getResourceById(id: string): ResourceItem | undefined {
    return RESOURCE_LIBRARY.find(r => r.id === id)
}

export function getResourcesByStage(stage: number): ResourceItem[] {
    return RESOURCE_LIBRARY.filter(r => r.stage === stage)
}

export function getDownloadableResources(): ResourceItem[] {
    return RESOURCE_LIBRARY.filter(r => r.downloadable)
}

export function getInteractiveResources(): ResourceItem[] {
    return RESOURCE_LIBRARY.filter(r => r.interactive)
}

export function searchResources(query: string): ResourceItem[] {
    const lowerQuery = query.toLowerCase()
    return RESOURCE_LIBRARY.filter(r =>
        r.title.toLowerCase().includes(lowerQuery) ||
        r.description.toLowerCase().includes(lowerQuery) ||
        r.features.some(f => f.toLowerCase().includes(lowerQuery))
    )
}
