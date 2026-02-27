// Industry Research Proposal Drafting Guide
// Complete guide for writing proposals for industry partnerships

export interface IndustryProposalComponent {
    id: string
    title: string
    description: string
    purpose: string
    wordCount: string
    structure: string[]
    goodExample: {
        title: string
        content: string
        why: string
    }
    badExample: {
        title: string
        content: string
        why: string
    }
    tips: string[]
    commonMistakes: string[]
    industryExpects: string[]
}

export const INDUSTRY_PROPOSAL_COMPONENTS: IndustryProposalComponent[] = [
    {
        id: 'executive-summary',
        title: '1. Executive Summary',
        description: 'One-page overview for busy executives',
        purpose: 'Hook decision-makers in 60 seconds',
        wordCount: '300-400 words (1 page)',
        structure: [
            'Business Problem (2 sentences): What costs them money/time?',
            'Your Solution (2 sentences): How will you solve it?',
            'Expected ROI (2 sentences): What is the business value?',
            'Timeline & Cost (1 sentence): How long and how much?',
            'Why You (1 sentence): Why are you the right partner?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Problem: Manufacturing defects cost your company ₹50 crores annually, with current manual inspection catching only 85% of defects, leading to customer returns and brand damage. Your quality control team spends 40 hours/week on repetitive visual inspection, limiting capacity for root cause analysis.\n\nSolution: We propose an AI-powered visual inspection system that achieves 99.2% defect detection accuracy in real-time (<0.5 seconds per item), reducing defects by 95% and freeing up 35 hours/week of expert time for value-added activities.\n\nROI: Expected savings of ₹45 crores/year (90% defect reduction) with payback period of 4 months. Additional benefits: 40% faster inspection, 60% reduction in customer complaints, improved brand reputation, and data-driven quality insights.\n\nTimeline & Investment: 6-month pilot (₹75 lakhs) followed by full deployment (₹2.5 crores). System operational in production line by Month 7.\n\nWhy IIT Delhi: Our team has deployed similar systems at 3 manufacturing companies (Tata Steel, Mahindra, L&T) with average 92% defect reduction. We bring 15 years of AI expertise, proven track record, and commitment to your success.',
            why: 'Starts with business pain (₹50 crores loss), offers specific solution (99.2% accuracy), quantifies ROI (₹45 crores savings, 4-month payback), provides timeline, and proves credibility. Speaks business language!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'We propose to develop an AI system for quality control. Our system will use deep learning to detect defects. It will be better than current methods. This will help your company. We have experience in AI research. The project will take some time and cost some money.',
            why: 'No business problem, no ROI, no timeline, no cost, no proof of capability. Uses technical jargon without business value. Executives will not read beyond first paragraph!'
        },
        tips: [
            'Lead with business impact, not technology',
            'Use numbers - costs, savings, ROI',
            'Keep it to ONE page maximum',
            'Avoid technical jargon',
            'Show proof of past success',
            'Make ROI crystal clear'
        ],
        commonMistakes: [
            'Too technical (talking about algorithms)',
            'No business value quantified',
            'Missing ROI calculation',
            'Too long (>1 page)',
            'No proof of capability',
            'Vague timeline and cost'
        ],
        industryExpects: [
            'Clear business problem',
            'Quantified ROI',
            'Realistic timeline',
            'Transparent cost',
            'Proof of capability',
            'Risk mitigation'
        ]
    },
    {
        id: 'business-problem',
        title: '2. Business Problem & Opportunity',
        description: 'Deep dive into the problem you will solve',
        purpose: 'Show you understand their business and pain points',
        wordCount: '500-800 words (2 pages)',
        structure: [
            'Current Situation (1 paragraph): How do they operate now?',
            'Pain Points (1 paragraph): What is not working?',
            'Cost of Problem (1 paragraph): What does it cost them?',
            'Failed Attempts (1 paragraph): What have they tried?',
            'Opportunity (1 paragraph): What is possible now?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Current Situation: Your manufacturing facility produces 50,000 automotive components daily across 3 production lines. Quality control relies on 15 trained inspectors working in 3 shifts, manually examining each component for 12 types of defects (cracks, scratches, dimensional errors, etc.). Each inspection takes 15-20 seconds, creating a bottleneck that limits production capacity to 2,500 units/hour.\n\nPain Points: Manual inspection has three critical limitations: (1) Human fatigue leads to declining accuracy after 4 hours (from 90% to 75%), (2) Subjective judgment causes inconsistency between inspectors (15-20% variation), (3) Cannot inspect 100% of products at high speeds, forcing sampling (only 30% inspected). This results in 15% defect escape rate, causing customer returns and warranty claims.\n\nCost of Problem: Defect-related costs total ₹50 crores annually: ₹25 crores in customer returns, ₹15 crores in warranty claims, ₹8 crores in rework, ₹2 crores in brand damage. Additionally, production bottleneck costs ₹10 crores in lost revenue (could produce 20% more with faster inspection). Total opportunity cost: ₹60 crores/year.\n\nFailed Attempts: You have tried: (1) Hiring more inspectors - increased cost by ₹2 crores but did not improve accuracy, (2) Traditional machine vision - achieved only 80% accuracy and could not handle product variations, (3) Statistical sampling - reduced inspection time but increased defect escape rate to 20%. None addressed root cause: need for fast, accurate, consistent 100% inspection.\n\nOpportunity: Recent advances in deep learning enable 99%+ accuracy in visual inspection at production speeds. Our preliminary tests on your sample components achieved 99.2% accuracy in 0.3 seconds - 50x faster than manual inspection with higher accuracy. This makes 100% automated inspection economically viable for the first time.',
            why: 'Shows deep understanding of their operations, quantifies pain with specific numbers, demonstrates failed attempts (builds credibility), creates urgency with opportunity. Industry partner feels understood!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Your company has quality control problems. Manual inspection is slow and inaccurate. This causes defects. You need a better solution. AI can help solve this problem.',
            why: 'Generic, no specifics, no numbers, no understanding of their business. Could apply to any company. Shows no research or preparation!'
        },
        tips: [
            'Do your homework - visit their facility',
            'Interview their team to understand pain',
            'Quantify everything with numbers',
            'Show you understand their failed attempts',
            'Create urgency with opportunity',
            'Use their language and terminology'
        ],
        commonMistakes: [
            'Generic problem description',
            'No cost quantification',
            'Not understanding their context',
            'Ignoring their past attempts',
            'Using academic language',
            'No sense of urgency'
        ],
        industryExpects: [
            'Deep business understanding',
            'Quantified pain points',
            'Knowledge of their operations',
            'Awareness of constraints',
            'Realistic opportunity',
            'Industry-specific language'
        ]
    },
    {
        id: 'proposed-solution',
        title: '3. Proposed Solution',
        description: 'What you will build and how it works',
        purpose: 'Show feasible solution that addresses their specific needs',
        wordCount: '800-1200 words (3-4 pages)',
        structure: [
            'Solution Overview (1 paragraph): High-level description',
            'Technical Approach (2 paragraphs): How it works (simple language)',
            'Key Features (bullet points): What it can do',
            'Integration Plan (1 paragraph): How it fits their systems',
            'Deployment Strategy (1 paragraph): Pilot to full rollout'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Solution Overview: We will develop and deploy an AI-powered visual inspection system that automatically detects all 12 defect types in real-time (<0.5 seconds per component) with 99.2% accuracy. The system integrates seamlessly with your existing production line, inspecting 100% of components without slowing production.\n\nTechnical Approach: The system uses high-resolution cameras (12MP, 60 FPS) positioned at 3 inspection points on each production line. Our deep learning model, trained on 100,000 images of your components (including 10,000 defect examples), analyzes each image in real-time. The model identifies defects, classifies them by type and severity, and triggers automatic rejection of defective parts. The system learns continuously from operator feedback, improving accuracy over time.\n\nKey Features:\n• Real-time inspection: <0.5 seconds per component (vs. 15-20 seconds manual)\n• High accuracy: 99.2% defect detection (vs. 85% manual)\n• 100% coverage: Inspects every component (vs. 30% sampling)\n• 24/7 operation: No fatigue, consistent quality\n• Defect classification: Identifies defect type and severity\n• Traceability: Records image of every component with timestamp\n• Analytics dashboard: Real-time quality metrics and trends\n• Continuous learning: Improves with operator feedback\n• Easy integration: Works with existing PLCs and MES\n• Minimal downtime: <4 hours installation per line\n\nIntegration Plan: The system integrates with your existing Siemens PLC and SAP MES via standard protocols (OPC-UA, REST API). Defect data flows automatically to your quality management system. No changes required to production line layout - cameras mount on existing structures. System communicates with line operators via existing HMI screens.\n\nDeployment Strategy:\nPhase 1 (Months 1-3): Pilot on Line 1 with 10,000 components, validate accuracy, train operators\nPhase 2 (Months 4-5): Deploy on Lines 2 and 3, optimize for different component variants\nPhase 3 (Month 6): Full production deployment, operator training, handover\nPhase 4 (Months 7-12): Continuous improvement, expand to additional defect types',
            why: 'Clear solution with specific numbers, explains technology in business terms, shows integration with existing systems, provides phased deployment reducing risk. Industry partner sees practical, feasible solution!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'We will use convolutional neural networks with ResNet-50 architecture and transfer learning. The model will be trained using stochastic gradient descent with Adam optimizer. We will use data augmentation and dropout for regularization. The system will achieve high accuracy.',
            why: 'Too technical! Industry does not care about ResNet-50 or Adam optimizer. No business value, no integration plan, no deployment strategy. Speaks to wrong audience!'
        },
        tips: [
            'Explain technology in business terms',
            'Focus on benefits, not features',
            'Show integration with existing systems',
            'Provide phased deployment plan',
            'Include operator training',
            'Address their specific constraints'
        ],
        commonMistakes: [
            'Too technical (algorithms, architectures)',
            'No integration plan',
            'Ignoring existing systems',
            'No deployment strategy',
            'Missing operator training',
            'Unrealistic timelines'
        ],
        industryExpects: [
            'Business-focused description',
            'Integration with existing systems',
            'Phased deployment plan',
            'Operator training included',
            'Minimal disruption',
            'Proven technology'
        ]
    },
    {
        id: 'roi-analysis',
        title: '4. ROI & Business Case',
        description: 'Detailed financial justification',
        purpose: 'Prove the investment makes business sense',
        wordCount: '600-800 words (2-3 pages)',
        structure: [
            'Investment Required (table): One-time and recurring costs',
            'Expected Savings (table): Quantified benefits',
            'ROI Calculation: Payback period, NPV, IRR',
            'Risk-Adjusted ROI: Conservative estimates',
            'Intangible Benefits: Brand, employee satisfaction'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'INVESTMENT REQUIRED:\n\nOne-Time Costs (Year 0):\n• System Development: ₹50 lakhs (AI model, software, testing)\n• Hardware (cameras, servers): ₹15 lakhs\n• Installation & Integration: ₹10 lakhs\n• Operator Training: ₹5 lakhs\nTotal One-Time: ₹80 lakhs\n\nRecurring Costs (Annual):\n• Software Maintenance: ₹8 lakhs/year\n• Hardware Maintenance: ₹3 lakhs/year\n• Cloud Services: ₹4 lakhs/year\nTotal Recurring: ₹15 lakhs/year\n\nEXPECTED SAVINGS:\n\nYear 1 Savings:\n• Defect Reduction (95%): ₹47.5 crores (from ₹50 crores)\n• Increased Production (20%): ₹10 crores additional revenue\n• Labor Redeployment: ₹1.5 crores (15 inspectors to value-added work)\n• Reduced Rework: ₹7.5 crores (from ₹8 crores)\nTotal Year 1 Savings: ₹66.5 crores\n\nROI CALCULATION:\n\nPayback Period: 0.4 months (80 lakhs investment / 66.5 crores annual savings × 12 months)\n\n5-Year NPV (10% discount rate):\nYear 0: -₹80 lakhs (investment)\nYear 1-5: ₹66.5 crores - ₹15 lakhs = ₹66.35 crores/year\nNPV = ₹251.5 crores\n\nIRR: 8,281% (investment pays back in <2 weeks)\n\nRISK-ADJUSTED ROI (Conservative Scenario):\nAssumptions:\n• Only 80% defect reduction (vs. 95% expected): ₹40 crores savings\n• Only 15% production increase (vs. 20%): ₹7.5 crores\n• 20% implementation delays: ₹1 crore additional cost\n\nConservative Year 1 Savings: ₹47.5 crores\nConservative Payback: 0.6 months\nConservative 5-Year NPV: ₹180 crores\n\nEven in worst-case scenario, ROI is exceptional.\n\nINTANGIBLE BENEFITS:\n• Brand Enhancement: Fewer customer complaints, improved reputation\n• Employee Satisfaction: Inspectors move to analytical roles\n• Data-Driven Insights: Quality trends, root cause analysis\n• Competitive Advantage: Industry-leading quality\n• Scalability: System can expand to other product lines',
            why: 'Detailed cost breakdown, quantified savings with conservative estimates, multiple ROI metrics (payback, NPV, IRR), risk-adjusted scenario, intangible benefits. CFO can approve this!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Investment: ₹80 lakhs\nSavings: Significant reduction in defects\nROI: Very good\nPayback: Fast\n\nThis is a great investment that will save money.',
            why: 'No details! How much savings? What is "very good" ROI? How fast is "fast"? No CFO will approve this!'
        },
        tips: [
            'Provide detailed cost breakdown',
            'Quantify all savings with numbers',
            'Calculate multiple ROI metrics',
            'Include conservative scenario',
            'Show sensitivity analysis',
            'Compare with alternatives'
        ],
        commonMistakes: [
            'Vague savings ("significant")',
            'No risk-adjusted scenario',
            'Missing recurring costs',
            'Unrealistic assumptions',
            'No comparison with alternatives',
            'Ignoring intangible benefits'
        ],
        industryExpects: [
            'Detailed financial analysis',
            'Conservative estimates',
            'Multiple ROI metrics',
            'Risk scenarios',
            'Transparent assumptions',
            'Comparison with status quo'
        ]
    },
    {
        id: 'implementation-plan',
        title: '5. Implementation Plan & Timeline',
        description: 'Detailed project plan with milestones',
        purpose: 'Show you can deliver on time and on budget',
        wordCount: '600-800 words (2-3 pages)',
        structure: [
            'Project Phases (Gantt chart)',
            'Key Milestones (with dates)',
            'Deliverables (for each phase)',
            'Resource Plan (team, equipment)',
            'Risk Mitigation (what could go wrong)'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'IMPLEMENTATION TIMELINE (6 months):\n\nPhase 1: Requirements & Design (Month 1)\nWeek 1-2: Site visit, process documentation, data collection\nWeek 3-4: System design, architecture finalization, approval\nDeliverables: Requirements document, system design, project plan\nMilestone: Design approval by your engineering team\n\nPhase 2: Development & Training (Months 2-3)\nWeek 5-8: AI model development using your sample data\nWeek 9-10: Software development, UI/UX design\nWeek 11-12: Hardware procurement, initial testing\nDeliverables: Trained AI model (>99% accuracy), software prototype\nMilestone: Model accuracy validation on test set\n\nPhase 3: Pilot Deployment (Month 4)\nWeek 13-14: Installation on Line 1, integration with PLC/MES\nWeek 15-16: Pilot testing with 10,000 components, operator training\nDeliverables: Installed system, trained operators, pilot results\nMilestone: 99% accuracy on production line, operator sign-off\n\nPhase 4: Full Deployment (Month 5)\nWeek 17-18: Deploy on Lines 2 and 3\nWeek 19-20: Optimization, fine-tuning, documentation\nDeliverables: 3 production lines operational, user manuals\nMilestone: All lines achieving >99% accuracy\n\nPhase 5: Handover & Support (Month 6)\nWeek 21-22: Final testing, performance validation\nWeek 23-24: Knowledge transfer, handover, warranty begins\nDeliverables: Final report, source code, 1-year warranty\nMilestone: Project acceptance, payment release\n\nRESOURCE PLAN:\n\nOur Team:\n• Project Manager (1): Full-time, 6 months\n• AI Engineers (2): Full-time, 4 months\n• Software Developers (2): Full-time, 3 months\n• Integration Engineer (1): Full-time, 2 months\n• Quality Assurance (1): Part-time, 6 months\n\nYour Team (Required):\n• Project Sponsor (1): 2 hours/week\n• Technical Lead (1): 4 hours/week\n• Production Manager (1): 4 hours/week\n• Operators (3): 1 week training\n\nRISK MITIGATION:\n\nRisk 1: Model accuracy below 99% on production line\nMitigation: Collect 20% more training data, extend pilot by 2 weeks\nContingency: ₹5 lakhs, 2 weeks\n\nRisk 2: Integration issues with existing PLC/MES\nMitigation: Early integration testing, backup communication protocols\nContingency: ₹3 lakhs, 1 week\n\nRisk 3: Operator resistance to new system\nMitigation: Early involvement, comprehensive training, change management\nContingency: Additional training sessions\n\nRisk 4: Hardware delivery delays\nMitigation: Order hardware in Month 1, backup suppliers identified\nContingency: 2-week buffer in timeline\n\nTotal Contingency: ₹8 lakhs (10% of budget), 4 weeks (17% of timeline)',
            why: 'Detailed week-by-week plan, clear milestones, specific deliverables, resource requirements, comprehensive risk mitigation. Project manager can execute this!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Timeline:\nMonth 1-2: Development\nMonth 3-4: Testing\nMonth 5-6: Deployment\n\nWe will complete the project in 6 months.',
            why: 'No details! What happens each week? What are deliverables? What resources needed? What if something goes wrong? Impossible to execute!'
        },
        tips: [
            'Provide week-by-week breakdown',
            'Define clear milestones',
            'Specify deliverables for each phase',
            'Include resource requirements',
            'Identify risks and mitigation',
            'Add contingency buffer (10-20%)'
        ],
        commonMistakes: [
            'Too high-level (monthly instead of weekly)',
            'No clear milestones',
            'Missing deliverables',
            'No resource plan',
            'Ignoring risks',
            'No contingency buffer'
        ],
        industryExpects: [
            'Detailed project plan',
            'Clear milestones',
            'Specific deliverables',
            'Resource requirements',
            'Risk mitigation',
            'Realistic timeline'
        ]
    },
    {
        id: 'team-credentials',
        title: '6. Team & Track Record',
        description: 'Why you are the right partner',
        purpose: 'Build trust and credibility',
        wordCount: '400-600 words (1-2 pages)',
        structure: [
            'Team Overview (expertise summary)',
            'Key Personnel (with relevant experience)',
            'Past Projects (similar work)',
            'Client Testimonials (proof of success)',
            'Institutional Support (facilities, resources)'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'TEAM OVERVIEW:\nOur team combines 15 years of AI/ML expertise with deep manufacturing domain knowledge. We have successfully deployed AI systems at 3 major manufacturing companies (Tata Steel, Mahindra, L&T) with average 92% defect reduction and 6-month payback periods.\n\nKEY PERSONNEL:\n\nDr. Rajesh Kumar - Project Lead\n• PhD in AI/ML from IIT Delhi, 15 years experience\n• Led 8 industry AI projects (total value: ₹25 crores)\n• Deployed visual inspection systems at Tata Steel (95% defect reduction) and Mahindra (90% defect reduction)\n• 45 publications, 3 patents in computer vision\n\nMr. Amit Sharma - Integration Lead\n• M.Tech in Automation, 12 years in manufacturing\n• Integrated AI systems with Siemens, Allen-Bradley PLCs\n• Former production engineer at Bosch (5 years)\n• Expert in OPC-UA, MQTT, industrial protocols\n\nMs. Priya Patel - AI Engineer\n• M.Tech in AI, 8 years experience\n• Developed defect detection models for automotive, electronics\n• Achieved 99.5% accuracy on similar inspection tasks\n• Expert in PyTorch, TensorFlow, edge deployment\n\nPAST PROJECTS:\n\n1. Tata Steel - Surface Defect Detection (2021-2022)\n   • Deployed AI inspection for steel sheets\n   • Achieved 95% defect reduction, ₹30 crores annual savings\n   • 3-month payback period\n   • Client testimonial: "Exceeded expectations, excellent support"\n\n2. Mahindra - Weld Quality Inspection (2020-2021)\n   • Automated weld inspection in automotive assembly\n   • 90% defect reduction, 50% faster inspection\n   • ₹15 crores annual savings\n   • Expanded to 3 additional plants\n\n3. L&T - Component Dimensional Inspection (2019-2020)\n   • Automated measurement of critical dimensions\n   • 99.2% accuracy, 10x faster than manual\n   • ₹8 crores annual savings\n\nCLIENT TESTIMONIALS:\n\n"IIT Delhi team delivered beyond expectations. The system has been running flawlessly for 2 years, saving us ₹30 crores annually. Their post-deployment support is excellent." - Mr. Suresh Reddy, VP Quality, Tata Steel\n\n"Professional team, realistic timelines, excellent communication. They understood our manufacturing constraints and delivered a practical solution." - Ms. Anjali Mehta, Plant Head, Mahindra\n\nINSTITUTIONAL SUPPORT:\n• High-performance computing cluster (100 GPUs)\n• Industrial automation lab with PLCs, robots\n• 20+ PhD students and research staff\n• Partnerships with 15 manufacturing companies\n• ISO 9001 certified processes',
            why: 'Specific credentials with numbers, relevant past projects with results, client testimonials (proof!), institutional support. Industry partner trusts this team!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Our team has experience in AI. We have worked on several projects. We have good facilities. We can deliver quality work.',
            why: 'No specifics! What experience? Which projects? What results? No proof of capability. Industry will not trust this!'
        },
        tips: [
            'Highlight relevant experience only',
            'Include specific past project results',
            'Add client testimonials with names',
            'Show domain expertise',
            'Mention institutional support',
            'Attach detailed CVs as appendix'
        ],
        commonMistakes: [
            'Generic experience description',
            'No past project results',
            'Missing client testimonials',
            'Irrelevant academic credentials',
            'No domain expertise',
            'Weak institutional support'
        ],
        industryExpects: [
            'Relevant industry experience',
            'Proven track record',
            'Client testimonials',
            'Domain expertise',
            'Strong team',
            'Institutional backing'
        ]
    },
    {
        id: 'ip-commercialization',
        title: '7. IP Rights & Commercialization',
        description: 'Who owns what and how will it be used',
        purpose: 'Clarify IP ownership and usage rights',
        wordCount: '300-400 words (1 page)',
        structure: [
            'Background IP (what you bring)',
            'Foreground IP (what will be created)',
            'IP Ownership (who owns what)',
            'Usage Rights (who can use what)',
            'Confidentiality (NDA terms)'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'BACKGROUND IP:\n\nIIT Delhi brings:\n• Core AI algorithms and frameworks (owned by IIT Delhi)\n• General-purpose computer vision models\n• Software development tools and libraries\n\nYour Company brings:\n• Product specifications and manufacturing data\n• Domain knowledge and process expertise\n• Existing quality control procedures\n\nFOREGROUND IP (Created During Project):\n\n• Custom AI model trained on your data: Joint ownership (50-50)\n• Software application and user interface: Joint ownership (50-50)\n• Integration code with your systems: Your company owns 100%\n• Training data and annotations: Your company owns 100%\n• Documentation and reports: Joint ownership (50-50)\n\nIP OWNERSHIP TERMS:\n\n1. Joint IP: Both parties can use for their purposes\n   • IIT Delhi: Research, publications, teaching, other projects\n   • Your Company: Production use, internal deployment, modifications\n\n2. Your IP: Your company has exclusive rights\n   • Cannot be used by IIT Delhi for other commercial projects\n   • Can be used by IIT Delhi for research and teaching (anonymized)\n\n3. IIT Delhi IP: IIT Delhi retains ownership\n   • Your company has perpetual license for this project\n   • Cannot be transferred to third parties without permission\n\nUSAGE RIGHTS:\n\n• Your company can deploy system in all your facilities worldwide\n• Your company can modify and improve the system\n• Your company cannot sell or license to competitors\n• IIT Delhi can publish research papers (with your approval)\n• IIT Delhi can use learnings for other projects (different industries)\n\nCONFIDENTIALITY:\n\n• All your data and processes remain confidential\n• NDA valid for 5 years after project completion\n• Publications will not reveal proprietary information\n• Your approval required before any public disclosure\n\nThis balanced approach protects both parties while enabling collaboration.',
            why: 'Clear IP ownership, fair terms, protects both parties, enables future use, addresses confidentiality. Legal team can approve this!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'IP will be shared between both parties. Confidentiality will be maintained. Both parties can use the results.',
            why: 'Too vague! What exactly is shared? Who owns what? What can each party do? Legal team will reject this!'
        },
        tips: [
            'Be specific about IP ownership',
            'Distinguish background and foreground IP',
            'Define usage rights clearly',
            'Address publication rights',
            'Include confidentiality terms',
            'Make it fair to both parties'
        ],
        commonMistakes: [
            'Vague IP terms',
            'Unfair ownership split',
            'Missing usage rights',
            'No confidentiality clause',
            'Ignoring publication rights',
            'One-sided terms'
        ],
        industryExpects: [
            'Clear IP ownership',
            'Fair terms',
            'Usage rights defined',
            'Confidentiality protected',
            'Publication rights addressed',
            'Legal clarity'
        ]
    }
]

// Industry proposal vs academic proposal differences
export const INDUSTRY_VS_ACADEMIC = {
    focus: {
        industry: 'Business value, ROI, practical deployment',
        academic: 'Scientific contribution, novelty, publications'
    },
    language: {
        industry: 'Business terms, avoid jargon, executive summary',
        academic: 'Technical terms, detailed methodology, abstract'
    },
    timeline: {
        industry: 'Short (3-12 months), fast results',
        academic: 'Long (1-5 years), thorough research'
    },
    metrics: {
        industry: 'Cost savings, revenue, efficiency, ROI',
        academic: 'Accuracy, novelty, citations, impact factor'
    },
    deliverables: {
        industry: 'Working system, documentation, training',
        academic: 'Publications, datasets, open-source code'
    },
    ip: {
        industry: 'Negotiated ownership, confidential',
        academic: 'University owns, open publication'
    }
}

// Industry proposal checklist
export const INDUSTRY_PROPOSAL_CHECKLIST = [
    '□ Executive summary fits on 1 page',
    '□ Business problem quantified with costs',
    '□ Solution explained in business terms (no jargon)',
    '□ ROI calculated with payback period',
    '□ Conservative scenario included',
    '□ Week-by-week implementation plan',
    '□ Clear milestones and deliverables',
    '□ Risk mitigation plan included',
    '□ Team credentials with past projects',
    '□ Client testimonials attached',
    '□ IP ownership clearly defined',
    '□ Confidentiality terms included',
    '□ Budget detailed with justifications',
    '□ Payment terms specified',
    '□ Warranty and support terms clear',
    '□ All claims backed by data',
    '□ Proofread by business person (not just technical)',
    '□ Formatted professionally (not academic style)'
]

// Helper functions
export function getIndustryComponentById(id: string): IndustryProposalComponent | undefined {
    return INDUSTRY_PROPOSAL_COMPONENTS.find(component => component.id === id)
}

export function getIndustryProposalWordCount(): number {
    return INDUSTRY_PROPOSAL_COMPONENTS.reduce((total, component) => {
        const range = component.wordCount.match(/(\d+)-(\d+)/)
        if (range) {
            return total + (parseInt(range[1]) + parseInt(range[2])) / 2
        }
        return total
    }, 0)
}
