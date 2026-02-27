// Downloadable Templates and Resources for Each Stage

export interface Template {
    id: string
    stageId: number
    title: string
    description: string
    type: 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'link'
    category: 'worksheet' | 'checklist' | 'template' | 'example' | 'tool'
    downloadUrl?: string
    externalUrl?: string
    icon: string
}

export const STAGE_TEMPLATES: Template[] = [
    // Stage 1: Domain Knowledge Discovery
    {
        id: 'domain-matrix',
        stageId: 1,
        title: 'Domain Comparison Matrix',
        description: 'Compare 5 research domains across criteria like interest, feasibility, funding, and impact',
        type: 'xlsx',
        category: 'worksheet',
        icon: '📊'
    },
    {
        id: 'domain-decision-tree',
        stageId: 1,
        title: 'Domain Selection Decision Tree',
        description: 'Interactive flowchart to help you choose the right research domain',
        type: 'pdf',
        category: 'tool',
        icon: '🌳'
    },
    {
        id: 'top-domains-list',
        stageId: 1,
        title: 'Top 50 Research Domains 2024',
        description: 'Curated list of trending research domains with descriptions and funding opportunities',
        type: 'pdf',
        category: 'example',
        icon: '📋'
    },
    {
        id: 'researcher-interview-template',
        stageId: 1,
        title: 'Researcher Interview Questions',
        description: 'Template with 20 questions to ask when interviewing researchers in your domain',
        type: 'docx',
        category: 'template',
        icon: '💬'
    },

    // Stage 2: Research Article Reading
    {
        id: 'paper-annotation-template',
        stageId: 2,
        title: 'Paper Annotation Template',
        description: 'Structured template for taking notes while reading research papers',
        type: 'pdf',
        category: 'worksheet',
        icon: '📝'
    },
    {
        id: 'critical-reading-checklist',
        stageId: 2,
        title: 'Critical Reading Checklist',
        description: '30-point checklist to critically evaluate any research paper',
        type: 'pdf',
        category: 'checklist',
        icon: '✅'
    },
    {
        id: 'reading-tracker',
        stageId: 2,
        title: 'Paper Reading Tracker',
        description: 'Spreadsheet to track papers read, ratings, and key takeaways',
        type: 'xlsx',
        category: 'tool',
        icon: '📚'
    },
    {
        id: 'sample-annotated-paper',
        stageId: 2,
        title: 'Sample Annotated Paper',
        description: 'Example of a well-annotated research paper with highlights and notes',
        type: 'pdf',
        category: 'example',
        icon: '📄'
    },
    {
        id: 'mendeley-guide',
        stageId: 2,
        title: 'Reference Manager Setup Guide',
        description: 'Step-by-step guide to set up Mendeley/Zotero for managing references',
        type: 'pdf',
        category: 'tool',
        icon: '🔖'
    },

    // Stage 3: Research Gap Identification
    {
        id: 'gap-analysis-canvas',
        stageId: 3,
        title: 'Gap Analysis Canvas',
        description: 'Visual canvas to map existing work, limitations, and research opportunities',
        type: 'pptx',
        category: 'worksheet',
        icon: '🎯'
    },
    {
        id: 'swot-analysis-template',
        stageId: 3,
        title: 'Research SWOT Analysis',
        description: 'Analyze Strengths, Weaknesses, Opportunities, and Threats of your research idea',
        type: 'docx',
        category: 'template',
        icon: '⚖️'
    },
    {
        id: 'problem-statement-generator',
        stageId: 3,
        title: 'Problem Statement Generator',
        description: 'Interactive tool to craft a compelling problem statement',
        type: 'xlsx',
        category: 'tool',
        icon: '💡'
    },
    {
        id: 'gap-validation-checklist',
        stageId: 3,
        title: 'Gap Validation Checklist',
        description: '15-point checklist to validate if your identified gap is research-worthy',
        type: 'pdf',
        category: 'checklist',
        icon: '✓'
    },
    {
        id: 'literature-review-matrix',
        stageId: 3,
        title: 'Literature Review Matrix',
        description: 'Organize 50+ papers by themes, methods, findings, and gaps',
        type: 'xlsx',
        category: 'worksheet',
        icon: '📊'
    },

    // Stage 4: Research Implementation
    {
        id: 'experiment-design-template',
        stageId: 4,
        title: 'Experiment Design Template',
        description: 'Comprehensive template for designing rigorous experiments',
        type: 'docx',
        category: 'template',
        icon: '🔬'
    },
    {
        id: 'research-journal-template',
        stageId: 4,
        title: 'Daily Research Journal',
        description: 'Template to document daily progress, challenges, and insights',
        type: 'docx',
        category: 'worksheet',
        icon: '📓'
    },
    {
        id: 'data-collection-spreadsheet',
        stageId: 4,
        title: 'Data Collection Spreadsheet',
        description: 'Structured spreadsheet for organizing experimental data',
        type: 'xlsx',
        category: 'tool',
        icon: '📈'
    },
    {
        id: 'agile-sprint-board',
        stageId: 4,
        title: 'Agile Research Sprint Board',
        description: 'Kanban-style board for managing research tasks in 2-week sprints',
        type: 'xlsx',
        category: 'tool',
        icon: '📋'
    },
    {
        id: 'ethics-approval-checklist',
        stageId: 4,
        title: 'Ethics Approval Checklist',
        description: 'Checklist for preparing IRB/ethics committee applications',
        type: 'pdf',
        category: 'checklist',
        icon: '⚖️'
    },

    // Stage 5: Research Paper Drafting
    {
        id: 'paper-structure-latex',
        stageId: 5,
        title: 'Paper Template (LaTeX)',
        description: 'IEEE/ACM conference paper template in LaTeX',
        type: 'link',
        category: 'template',
        externalUrl: 'https://www.overleaf.com/latex/templates',
        icon: '📄'
    },
    {
        id: 'paper-structure-word',
        stageId: 5,
        title: 'Paper Template (Word)',
        description: 'Standard research paper template in Microsoft Word format',
        type: 'docx',
        category: 'template',
        icon: '📝'
    },
    {
        id: 'paper-writing-checklist',
        stageId: 5,
        title: 'Paper Writing Checklist',
        description: '50-point checklist covering all sections from title to references',
        type: 'pdf',
        category: 'checklist',
        icon: '✅'
    },
    {
        id: 'figure-guidelines',
        stageId: 5,
        title: 'Figure & Table Guidelines',
        description: 'Best practices for creating publication-quality figures and tables',
        type: 'pdf',
        category: 'tool',
        icon: '📊'
    },
    {
        id: 'sample-good-paper',
        stageId: 5,
        title: 'Sample: Well-Written Paper',
        description: 'Example of a well-structured, clearly written research paper',
        type: 'pdf',
        category: 'example',
        icon: '⭐'
    },
    {
        id: 'sample-bad-paper',
        stageId: 5,
        title: 'Sample: Poorly-Written Paper',
        description: 'Example with annotations showing common mistakes to avoid',
        type: 'pdf',
        category: 'example',
        icon: '❌'
    },

    // Stage 6: Patent Drafting
    {
        id: 'patent-claims-worksheet',
        stageId: 6,
        title: 'Patent Claims Worksheet',
        description: 'Step-by-step worksheet for drafting independent and dependent claims',
        type: 'docx',
        category: 'worksheet',
        icon: '📜'
    },
    {
        id: 'prior-art-search-template',
        stageId: 6,
        title: 'Prior Art Search Template',
        description: 'Template for documenting prior art search results',
        type: 'xlsx',
        category: 'template',
        icon: '🔍'
    },
    {
        id: 'patent-application-checklist',
        stageId: 6,
        title: 'Patent Application Checklist',
        description: 'Complete checklist for Indian and international patent applications',
        type: 'pdf',
        category: 'checklist',
        icon: '✓'
    },
    {
        id: 'sample-patent',
        stageId: 6,
        title: 'Sample: Granted Patent',
        description: 'Example of a well-drafted granted patent with annotations',
        type: 'pdf',
        category: 'example',
        icon: '📋'
    },

    // Stage 7: Seed Money Proposal
    {
        id: 'seed-proposal-template',
        stageId: 7,
        title: 'Seed Funding Proposal Template',
        description: 'Template for institutional seed funding proposals (5-10 pages)',
        type: 'docx',
        category: 'template',
        icon: '📄'
    },
    {
        id: 'budget-calculator-seed',
        stageId: 7,
        title: 'Seed Funding Budget Calculator',
        description: 'Excel calculator for preparing realistic seed funding budgets',
        type: 'xlsx',
        category: 'tool',
        icon: '💰'
    },
    {
        id: 'sample-funded-seed',
        stageId: 7,
        title: 'Sample: Funded Seed Proposal',
        description: 'Real example of a successfully funded seed proposal',
        type: 'pdf',
        category: 'example',
        icon: '✅'
    },

    // Stage 8: National Funding Proposal
    {
        id: 'national-proposal-template',
        stageId: 8,
        title: 'National Funding Proposal Template',
        description: 'Template for SERB, DST, ICMR proposals (20-30 pages)',
        type: 'docx',
        category: 'template',
        icon: '📄'
    },
    {
        id: 'budget-calculator-national',
        stageId: 8,
        title: 'National Funding Budget Calculator',
        description: 'Detailed budget calculator with personnel, equipment, travel costs',
        type: 'xlsx',
        category: 'tool',
        icon: '💰'
    },
    {
        id: 'gantt-chart-generator',
        stageId: 8,
        title: 'Project Timeline Generator',
        description: 'Create Gantt charts for your proposal timeline',
        type: 'xlsx',
        category: 'tool',
        icon: '📅'
    },
    {
        id: 'sample-funded-national',
        stageId: 8,
        title: 'Sample: Funded National Proposal',
        description: 'Real SERB/DST funded proposal with reviewer comments',
        type: 'pdf',
        category: 'example',
        icon: '⭐'
    },

    // Stage 9: International Funding Proposal
    {
        id: 'international-proposal-template',
        stageId: 9,
        title: 'International Funding Proposal Template',
        description: 'Template for EU Horizon, NIH, NSF proposals (40-60 pages)',
        type: 'docx',
        category: 'template',
        icon: '📄'
    },
    {
        id: 'collaboration-agreement',
        stageId: 9,
        title: 'International Collaboration Agreement',
        description: 'Template MoU for international research collaborations',
        type: 'docx',
        category: 'template',
        icon: '🤝'
    },
    {
        id: 'impact-calculator',
        stageId: 9,
        title: 'Research Impact Calculator',
        description: 'Calculate and articulate broader impact of your research',
        type: 'xlsx',
        category: 'tool',
        icon: '🌍'
    },

    // Stage 10: Seed Lab Setup
    {
        id: 'lab-layout-planner',
        stageId: 10,
        title: 'Lab Layout Planner',
        description: 'Visual tool for planning lab space and equipment placement',
        type: 'pptx',
        category: 'tool',
        icon: '🏗️'
    },
    {
        id: 'equipment-procurement-tracker',
        stageId: 10,
        title: 'Equipment Procurement Tracker',
        description: 'Track equipment quotes, approvals, and delivery status',
        type: 'xlsx',
        category: 'tool',
        icon: '📦'
    },
    {
        id: 'safety-compliance-checklist',
        stageId: 10,
        title: 'Lab Safety Compliance Checklist',
        description: 'Comprehensive safety checklist for lab setup',
        type: 'pdf',
        category: 'checklist',
        icon: '⚠️'
    },
    {
        id: 'team-hiring-template',
        stageId: 10,
        title: 'Research Team Hiring Template',
        description: 'Job descriptions and interview questions for research positions',
        type: 'docx',
        category: 'template',
        icon: '👥'
    },

    // Stage 11: Preliminary Research to TRL 1-3
    {
        id: 'trl-assessment-tool',
        stageId: 11,
        title: 'TRL Assessment Tool',
        description: 'Evaluate your technology readiness level (TRL 1-9)',
        type: 'xlsx',
        category: 'tool',
        icon: '📊'
    },
    {
        id: 'prototype-development-plan',
        stageId: 11,
        title: 'Prototype Development Plan',
        description: 'Step-by-step plan for building and testing prototypes',
        type: 'docx',
        category: 'template',
        icon: '🔧'
    },
    {
        id: 'performance-benchmarking-sheet',
        stageId: 11,
        title: 'Performance Benchmarking Sheet',
        description: 'Compare your prototype against existing solutions',
        type: 'xlsx',
        category: 'worksheet',
        icon: '📈'
    },

    // Stage 12: Extended Lab with Major Funding
    {
        id: 'strategic-hiring-plan',
        stageId: 12,
        title: 'Strategic Hiring Plan',
        description: 'Plan for scaling your team with major funding',
        type: 'docx',
        category: 'template',
        icon: '👥'
    },
    {
        id: 'research-portfolio-manager',
        stageId: 12,
        title: 'Research Portfolio Manager',
        description: 'Manage multiple projects, timelines, and deliverables',
        type: 'xlsx',
        category: 'tool',
        icon: '📊'
    },
    {
        id: 'scale-up-engineering-plan',
        stageId: 12,
        title: 'Scale-Up Engineering Plan',
        description: 'Plan for scaling prototypes to production-ready systems',
        type: 'docx',
        category: 'template',
        icon: '🏭'
    },

    // Stage 13: Tangible Outcomes & Industry Collaboration
    {
        id: 'industry-partnership-template',
        stageId: 13,
        title: 'Industry Partnership Agreement',
        description: 'Template MoU for industry-academia collaborations',
        type: 'docx',
        category: 'template',
        icon: '🤝'
    },
    {
        id: 'technology-transfer-guide',
        stageId: 13,
        title: 'Technology Transfer Guide',
        description: 'Step-by-step guide for transferring technology to industry',
        type: 'pdf',
        category: 'tool',
        icon: '🔄'
    },
    {
        id: 'startup-business-plan',
        stageId: 13,
        title: 'Research Startup Business Plan',
        description: 'Template for converting research into a startup',
        type: 'docx',
        category: 'template',
        icon: '🚀'
    },

    // Stage 14: Center of Excellence Establishment
    {
        id: 'coe-establishment-roadmap',
        stageId: 14,
        title: 'CoE Establishment Roadmap',
        description: '3-year roadmap for establishing a Center of Excellence',
        type: 'pptx',
        category: 'template',
        icon: '🏛️'
    },
    {
        id: 'sustainable-funding-strategy',
        stageId: 14,
        title: 'Sustainable Funding Strategy',
        description: 'Diversify funding sources for long-term sustainability',
        type: 'docx',
        category: 'template',
        icon: '💰'
    },
    {
        id: 'reputation-building-plan',
        stageId: 14,
        title: 'Reputation Building Plan',
        description: 'Strategic plan for building national/international reputation',
        type: 'docx',
        category: 'template',
        icon: '⭐'
    },

    // Stage 15: Academic Program Launch
    {
        id: 'nep2020-curriculum-template',
        stageId: 15,
        title: 'NEP 2020 Curriculum Template',
        description: 'Template for designing NEP 2020 aligned academic programs',
        type: 'docx',
        category: 'template',
        icon: '📚'
    },
    {
        id: 'faculty-recruitment-plan',
        stageId: 15,
        title: 'Faculty Recruitment Plan',
        description: 'Plan for recruiting and onboarding faculty for new program',
        type: 'docx',
        category: 'template',
        icon: '👨‍🏫'
    },
    {
        id: 'accreditation-checklist',
        stageId: 15,
        title: 'Program Accreditation Checklist',
        description: 'Checklist for NBA/NAAC accreditation requirements',
        type: 'pdf',
        category: 'checklist',
        icon: '✓'
    },
    {
        id: 'industry-integration-framework',
        stageId: 15,
        title: 'Industry Integration Framework',
        description: 'Framework for integrating industry into academic programs',
        type: 'pptx',
        category: 'template',
        icon: '🏢'
    }
]

export function getTemplatesByStage(stageId: number): Template[] {
    return STAGE_TEMPLATES.filter(t => t.stageId === stageId)
}

export function getAllTemplates(): Template[] {
    return STAGE_TEMPLATES
}

export function getTemplateById(id: string): Template | undefined {
    return STAGE_TEMPLATES.find(t => t.id === id)
}
