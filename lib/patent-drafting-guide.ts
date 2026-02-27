// Comprehensive Patent Drafting Guide
// Complete guide for drafting patents with examples

export interface PatentType {
    type: string
    description: string
    protects: string
    duration: string
    cost: string
    bestFor: string[]
    requirements: string[]
}

export const PATENT_TYPES: PatentType[] = [
    {
        type: 'Design Patent',
        description: 'Protects the ornamental design and appearance of a product',
        protects: 'Visual appearance, shape, configuration, surface ornamentation',
        duration: '15 years from grant date (India), 15 years (US)',
        cost: '₹12,000 - ₹50,000 (India), $2,000 - $5,000 (US)',
        bestFor: [
            'Unique product designs',
            'Distinctive packaging',
            'Ornamental features',
            'User interface designs',
            'Furniture designs',
            'Consumer products'
        ],
        requirements: [
            'Novel and original design',
            'Not dictated by function',
            'Drawings showing all views',
            'Not offensive or immoral',
            'Applied to article of manufacture'
        ]
    },
    {
        type: 'Utility Patent (Invention Patent)',
        description: 'Protects how something works - the functional aspects',
        protects: 'New processes, machines, compositions, improvements',
        duration: '20 years from filing date',
        cost: '₹50,000 - ₹3,00,000 (India), $10,000 - $30,000 (US)',
        bestFor: [
            'New inventions',
            'Improved processes',
            'Novel algorithms',
            'Chemical compositions',
            'Mechanical devices',
            'Software innovations'
        ],
        requirements: [
            'Novel (not known before)',
            'Non-obvious (inventive step)',
            'Useful (industrial application)',
            'Enabled (can be made/used)',
            'Properly claimed'
        ]
    },
    {
        type: 'National Patent (India)',
        description: 'Patent protection within India only',
        protects: 'Inventions in India',
        duration: '20 years from filing date',
        cost: '₹50,000 - ₹2,00,000 (with attorney)',
        bestFor: [
            'India-focused innovations',
            'Limited budget',
            'Testing market first',
            'Local manufacturing',
            'Startups and SMEs'
        ],
        requirements: [
            'File with Indian Patent Office',
            'Comply with Indian Patent Act 1970',
            'Not fall under Section 3 exclusions',
            'Complete specification within 12 months',
            'Respond to examination report'
        ]
    },
    {
        type: 'International Patent (PCT)',
        description: 'Patent protection in multiple countries via PCT route',
        protects: 'Inventions in 150+ countries',
        duration: '20 years from filing date (in each country)',
        cost: '₹5,00,000 - ₹50,00,000 (depending on countries)',
        bestFor: [
            'Global market potential',
            'International licensing',
            'Export-oriented products',
            'High-value innovations',
            'Venture-backed startups'
        ],
        requirements: [
            'File PCT application',
            'Enter national phase in 30-31 months',
            'Pay fees in each country',
            'Translate to local languages',
            'Hire local attorneys'
        ]
    }
]

// Patent filing process
export const PATENT_FILING_PROCESS = [
    {
        step: 1,
        title: 'Prior Art Search',
        description: 'Search existing patents and publications',
        duration: '1-2 weeks',
        cost: '₹10,000 - ₹30,000',
        tasks: [
            'Search Google Patents, USPTO, EPO, Indian Patent Office',
            'Search Google Scholar for publications',
            'Document all similar inventions',
            'Analyze differences',
            'Confirm novelty'
        ]
    },
    {
        step: 2,
        title: 'Provisional Application',
        description: 'File provisional to secure priority date',
        duration: '1-2 weeks',
        cost: '₹1,600 (India), $75 (US) - filing fee only',
        tasks: [
            'Draft invention description',
            'Create basic drawings',
            'File Form 2 (India) or Form SB/16 (US)',
            'Get priority date',
            'Have 12 months to file complete'
        ]
    },
    {
        step: 3,
        title: 'Complete Specification',
        description: 'Draft detailed patent application',
        duration: '2-3 months',
        cost: '₹50,000 - ₹2,00,000 (with attorney)',
        tasks: [
            'Write detailed description',
            'Draft patent claims',
            'Create professional drawings',
            'Write abstract',
            'File within 12 months of provisional'
        ]
    },
    {
        step: 4,
        title: 'Examination',
        description: 'Patent office examines application',
        duration: '1-3 years',
        cost: '₹4,000 - ₹8,000 (examination fee)',
        tasks: [
            'File request for examination (Form 18)',
            'Wait for First Examination Report (FER)',
            'Respond to objections',
            'Amend claims if needed',
            'Attend hearing if required'
        ]
    },
    {
        step: 5,
        title: 'Grant',
        description: 'Patent is granted',
        duration: '6-12 months after acceptance',
        cost: '₹2,000 - ₹4,000 (grant fee)',
        tasks: [
            'Pay grant fees',
            'Receive patent certificate',
            'Patent published in journal',
            'Maintain with annual fees',
            'Enforce against infringers'
        ]
    }
]

// Helper functions
export function getPatentTypeByName(type: string): PatentType | undefined {
    return PATENT_TYPES.find(pt => pt.type === type)
}

export function getTotalPatentCost(type: string): string {
    const patentType = getPatentTypeByName(type)
    return patentType ? patentType.cost : 'Unknown'
}

export function getPatentFilingStep(step: number) {
    return PATENT_FILING_PROCESS.find(p => p.step === step)
}
