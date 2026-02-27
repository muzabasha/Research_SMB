// Comprehensive Research Proposal Drafting Guide
// Complete guide for writing winning research proposals

export interface ProposalComponent {
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
    reviewerLooksFor: string[]
}

export const PROPOSAL_COMPONENTS: ProposalComponent[] = [
    {
        id: 'title',
        title: '1. Project Title',
        description: 'Clear, concise title that captures the essence of your research',
        purpose: 'Communicate what you will do in 10-15 words',
        wordCount: '10-15 words',
        structure: [
            'Include key method/approach',
            'Specify the problem/application',
            'Mention target outcome',
            'Be specific, not generic',
            'Avoid jargon and abbreviations'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'AI-Powered Early Detection System for Diabetic Retinopathy in Rural India: A Multi-Center Validation Study',
            why: 'Specific method (AI-Powered), clear problem (Diabetic Retinopathy), target population (Rural India), validation approach (Multi-Center). Tells complete story in 15 words!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Application of Machine Learning in Healthcare',
            why: 'Too vague! What ML? What healthcare problem? Where? What outcome? Could be anything. Reviewers will not be excited by this generic title.'
        },
        tips: [
            'Write title AFTER completing proposal',
            'Test it: Does it excite reviewers?',
            'Include keywords funders care about',
            'Show impact potential in title',
            'Avoid cute or clever titles'
        ],
        commonMistakes: [
            'Too generic ("AI in Medicine")',
            'Too technical ("CNN-LSTM-GAN Architecture")',
            'Missing application or impact',
            'Using abbreviations without expansion',
            'Overpromising ("Revolutionary System")'
        ],
        reviewerLooksFor: [
            'Clear problem statement',
            'Innovative approach',
            'Practical application',
            'Measurable outcome',
            'Alignment with funding priorities'
        ]
    },
    {
        id: 'abstract',
        title: '2. Executive Summary / Abstract',
        description: 'Your proposal in 250-300 words - the most critical section!',
        purpose: 'Convince reviewers to read further and fund your project',
        wordCount: '250-300 words',
        structure: [
            'Problem Statement (2-3 sentences): What problem? Why important?',
            'Research Gap (1-2 sentences): What is missing?',
            'Objectives (2-3 sentences): What will you do?',
            'Methodology (2-3 sentences): How will you do it?',
            'Expected Outcomes (2-3 sentences): What will you achieve?',
            'Impact (1-2 sentences): Why does it matter?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Diabetic retinopathy (DR) affects 93 million people globally and is the leading cause of preventable blindness in working-age adults. In India, with 77 million diabetic patients and only 1 ophthalmologist per 100,000 people, universal DR screening is practically impossible. Existing AI systems achieve 85-90% accuracy but fail in early-stage detection (78% sensitivity) and do not generalize across diverse populations and camera types. This project aims to develop and validate an AI-powered DR screening system achieving >95% accuracy across all stages, with special focus on early detection (>90% sensitivity for mild DR). We will: (1) Collect 50,000 diverse fundus images from 5 hospitals across India, (2) Develop novel deep learning architecture combining attention mechanisms with multi-scale features, (3) Validate across different camera types and populations, (4) Deploy pilot system in 10 primary health centers. Expected outcomes include: validated AI system processing images in <1 second, mobile app for community health workers, training program for 100 healthcare workers, and screening of 10,000 patients in year 1. This system will democratize DR screening in resource-limited settings, potentially preventing thousands of cases of blindness annually and serving as model for other preventable diseases.',
            why: 'Perfect structure: Problem with numbers → Gap in existing solutions → Clear objectives → Specific methodology → Measurable outcomes → Tangible impact. Every sentence adds value and builds excitement!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Diabetic retinopathy is a serious disease. We will use AI to detect it. Our system will be better than existing systems. We will collect data and train a model. The results will be good. This will help patients.',
            why: 'Vague, no numbers, no specifics about methodology, no clear objectives, no measurable outcomes. Reads like a high school essay. Reviewers will reject this immediately!'
        },
        tips: [
            'Write abstract LAST after completing proposal',
            'Include specific numbers (sample size, accuracy, impact)',
            'Show you understand the problem deeply',
            'Demonstrate feasibility with preliminary data',
            'Highlight innovation and impact',
            'Make every word count - no fluff'
        ],
        commonMistakes: [
            'Too vague ("we will improve healthcare")',
            'No numbers or metrics',
            'Missing clear objectives',
            'No mention of methodology',
            'Unrealistic promises',
            'Ignoring feasibility'
        ],
        reviewerLooksFor: [
            'Clear problem with evidence',
            'Significant research gap',
            'Innovative approach',
            'Feasible methodology',
            'Measurable outcomes',
            'Broader impact potential'
        ]
    },
    {
        id: 'problem-statement',
        title: '3. Problem Statement & Significance',
        description: 'Why should anyone care about this problem?',
        purpose: 'Convince reviewers this problem is important and urgent',
        wordCount: '500-800 words (2-3 pages)',
        structure: [
            'Problem Context (1 paragraph): What is the broader issue?',
            'Problem Magnitude (1 paragraph): How big is the problem? (Use statistics)',
            'Current Situation (1 paragraph): What exists now? What are limitations?',
            'Consequences (1 paragraph): What happens if not solved?',
            'Opportunity (1 paragraph): Why now? Why you?',
            'Alignment (1 paragraph): How does this align with funder priorities?'
        ],
        goodExample: {
            title: '✅ GOOD Example (Opening)',
            content: 'Diabetes affects 537 million adults worldwide, with India accounting for 77 million cases - the second-highest globally [WHO, 2023]. Diabetic retinopathy (DR), a complication affecting the eyes, is the leading cause of preventable blindness in working-age adults (20-65 years) [1]. Early detection and treatment can prevent 95% of vision loss [2], yet only 50% of diabetic patients in India receive annual eye screenings [3]. The primary barrier is the severe shortage of ophthalmologists: India has only 1 ophthalmologist per 100,000 people, compared to 1 per 10,000 in developed countries [4]. In rural areas, this ratio drops to 1 per 500,000, making universal screening practically impossible [5]. This gap results in 45,000 new cases of DR-related blindness annually in India alone [6], with devastating economic impact: average productivity loss of ₹8.5 lakhs per patient over lifetime [7]. The COVID-19 pandemic has further exacerbated this crisis, with routine screenings dropping by 60% in 2020-2021 [8], creating a backlog of 15 million unscreened diabetic patients [9].',
            why: 'Starts with global context, narrows to India, provides specific statistics (all cited), quantifies the gap, shows consequences with numbers, demonstrates urgency. Compelling and evidence-based!'
        },
        badExample: {
            title: '❌ BAD Example (Opening)',
            content: 'Diabetic retinopathy is a disease that affects many people. It causes blindness. This is a serious problem. We need to detect it early. AI can help solve this problem. Our project will make a difference.',
            why: 'No statistics, no citations, no evidence of problem magnitude, no urgency, no specificity. Reads like a vague idea, not a serious research proposal. Reviewers will not be convinced!'
        },
        tips: [
            'Start with impact - lives affected, economic burden',
            'Use recent statistics (last 2-3 years)',
            'Cite every factual claim',
            'Show you understand the problem deeply',
            'Connect to funder priorities explicitly',
            'Create sense of urgency'
        ],
        commonMistakes: [
            'No statistics or evidence',
            'Missing citations',
            'Too much background, not enough problem',
            'Not showing why NOW',
            'Ignoring funder priorities',
            'Vague statements without data'
        ],
        reviewerLooksFor: [
            'Evidence-based problem statement',
            'Clear magnitude and impact',
            'Understanding of current limitations',
            'Urgency and timeliness',
            'Alignment with funding priorities',
            'Compelling narrative'
        ]
    },
    {
        id: 'literature-review',
        title: '4. Literature Review & Research Gap',
        description: 'What has been done and what is missing?',
        purpose: 'Show you know the field and identify clear research gap',
        wordCount: '800-1200 words (3-4 pages)',
        structure: [
            'Current State of Knowledge (2 paragraphs): What do we know?',
            'Existing Solutions (2-3 paragraphs): What has been tried?',
            'Limitations of Existing Work (1-2 paragraphs): What are the gaps?',
            'Your Innovation (1 paragraph): How will you fill the gap?',
            'Preliminary Data (1 paragraph): What have you done already?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Recent advances in deep learning have enabled automated DR detection with promising results. Gulshan et al. (2016) achieved 87.0% sensitivity using Inception-v3 on 128,000 images [10]. Ting et al. (2017) reported 90.5% sensitivity across 494,661 images from multiple ethnicities [11]. However, these systems have three critical limitations: First, early-stage DR detection remains poor (78-82% sensitivity) [12,13], missing the optimal intervention window. Second, performance degrades significantly across different fundus camera types (15-20% accuracy drop) [14], limiting real-world deployment. Third, most systems are trained on data from developed countries and fail to generalize to Indian populations with different disease patterns and image quality [15]. Our preliminary study (n=5,000 images, 3 hospitals) identified that attention mechanisms can improve early-stage detection by 8-12% [unpublished data]. Building on this, we propose a novel architecture combining ResNet-50 with spatial attention and multi-scale feature fusion, specifically designed for diverse camera types and populations.',
            why: 'Cites recent work with specific numbers, identifies clear gaps with evidence, shows preliminary data proving feasibility, explains innovation clearly. Demonstrates deep understanding!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Many researchers have worked on diabetic retinopathy detection. Some used machine learning. Others used deep learning. These methods have some limitations. Our method will be better. We will use a new approach.',
            why: 'No specific citations, no numbers, vague limitations, no clear gap, no preliminary data, no explanation of innovation. Shows superficial understanding. Reviewers will reject!'
        },
        tips: [
            'Cite 30-50 recent papers (last 5 years)',
            'Include key seminal papers',
            'Organize by themes, not chronologically',
            'Show gaps with evidence, not opinions',
            'Include preliminary data if available',
            'Explain your innovation clearly'
        ],
        commonMistakes: [
            'Too few citations (<20)',
            'Outdated references (>10 years)',
            'No clear gap identified',
            'Vague limitations',
            'Missing preliminary data',
            'Not explaining innovation'
        ],
        reviewerLooksFor: [
            'Comprehensive literature knowledge',
            'Clear research gap with evidence',
            'Innovation beyond existing work',
            'Preliminary data showing feasibility',
            'Understanding of field',
            'Recent and relevant citations'
        ]
    },
    {
        id: 'objectives',
        title: '5. Research Objectives',
        description: 'What exactly will you achieve?',
        purpose: 'Provide clear, measurable, achievable objectives',
        wordCount: '200-400 words (1 page)',
        structure: [
            'Overall Goal (1 sentence): What is the main aim?',
            'Specific Objectives (3-5 bullet points): What will you do?',
            'Each objective should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'The overall goal of this project is to develop and validate an AI-powered diabetic retinopathy screening system achieving >95% accuracy across all disease stages and diverse populations.\n\nSpecific Objectives:\n1. Develop a diverse, multi-center dataset: Collect and annotate 50,000 fundus images from 5 hospitals across India (Mumbai, Delhi, Bangalore, Chennai, Kolkata), ensuring representation of different demographics, camera types, and disease stages (Months 1-6).\n\n2. Design novel AI architecture: Develop deep learning model combining ResNet-50 with spatial attention mechanisms and multi-scale feature fusion, optimized for early-stage DR detection (Months 4-12).\n\n3. Achieve superior performance: Attain >95% overall accuracy, >90% sensitivity for early-stage DR, and >97% specificity, with <5% performance degradation across different camera types (Months 10-15).\n\n4. Validate across populations: Test system on 10,000 patients from 10 primary health centers across 5 states, demonstrating generalization and real-world feasibility (Months 16-20).\n\n5. Deploy pilot system: Implement mobile app for community health workers, train 100 healthcare workers, and screen 10,000 patients in rural areas (Months 18-24).',
            why: 'Each objective is SMART: Specific (what), Measurable (numbers), Achievable (realistic), Relevant (aligned with goal), Time-bound (months). Clear deliverables for each objective!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Objectives:\n1. Collect data\n2. Build AI model\n3. Test the system\n4. Make it work well\n5. Help patients',
            why: 'Not SMART! No numbers, no timeline, no specifics, no measurable outcomes. How much data? What accuracy? When? Reviewers cannot evaluate feasibility!'
        },
        tips: [
            'Use SMART criteria for each objective',
            'Include specific numbers (sample size, accuracy, timeline)',
            'Make objectives measurable',
            'Ensure objectives are achievable in timeframe',
            'Align with overall goal',
            'Use action verbs (develop, validate, achieve)'
        ],
        commonMistakes: [
            'Vague objectives ("improve healthcare")',
            'No numbers or metrics',
            'Unrealistic goals',
            'No timeline',
            'Too many objectives (>6)',
            'Objectives not aligned with goal'
        ],
        reviewerLooksFor: [
            'SMART objectives',
            'Clear deliverables',
            'Measurable outcomes',
            'Realistic timeline',
            'Alignment with problem',
            'Feasibility'
        ]
    },
    {
        id: 'methodology',
        title: '6. Research Methodology',
        description: 'How will you achieve your objectives?',
        purpose: 'Provide detailed, feasible plan that reviewers can evaluate',
        wordCount: '1500-2500 words (5-8 pages)',
        structure: [
            'Overall Approach (1 paragraph): High-level strategy',
            'Work Package 1: Data Collection (2-3 paragraphs)',
            'Work Package 2: Model Development (2-3 paragraphs)',
            'Work Package 3: Validation (2-3 paragraphs)',
            'Work Package 4: Deployment (2-3 paragraphs)',
            'Timeline (Gantt chart)',
            'Risk Mitigation (1 paragraph)'
        ],
        goodExample: {
            title: '✅ GOOD Example (Data Collection)',
            content: 'Work Package 1: Multi-Center Data Collection (Months 1-6)\n\nWe will collect 50,000 fundus images from 5 tertiary care hospitals across India: AIIMS Delhi (10,000), KEM Mumbai (10,000), NIMHANS Bangalore (10,000), CMC Vellore (10,000), and SGPGI Lucknow (10,000). This geographic diversity ensures representation of different demographics, disease patterns, and image acquisition protocols.\n\nData Collection Protocol: Each hospital will contribute images from diabetic patients undergoing routine screening. Images will be captured using three different fundus cameras (Topcon TRC-50DX, Canon CR-2, Zeiss Visucam) to ensure model generalization. Inclusion criteria: diabetic patients aged 18-75 years, image quality score >6/10. Exclusion criteria: media opacity, previous laser treatment, other retinal diseases.\n\nAnnotation Process: Each image will be graded independently by three certified ophthalmologists using the International Clinical Diabetic Retinopathy (ICDR) scale: No DR, Mild, Moderate, Severe, and Proliferative DR. Inter-rater agreement will be measured using Cohen\'s kappa (target >0.85). Disagreements will be resolved by a senior retina specialist. Target distribution: No DR (40%), Mild (20%), Moderate (20%), Severe (15%), Proliferative (5%).\n\nEthics and Privacy: IRB approval obtained from all 5 hospitals (approval numbers: AIIMS/IEC/2023/123, KEM/EC/2023/456, etc.). Patient consent obtained for all images. All data de-identified before analysis. Data stored on secure server with encrypted access.',
            why: 'Specific numbers, clear protocol, quality control measures, ethics approval, feasibility demonstrated. Reviewers can evaluate every aspect. Shows thorough planning!'
        },
        badExample: {
            title: '❌ BAD Example (Data Collection)',
            content: 'We will collect images from hospitals. The images will be labeled by doctors. We will use good quality images. Ethics approval will be obtained.',
            why: 'No specifics! How many images? Which hospitals? How many doctors? What quality criteria? Which ethics board? Impossible to evaluate feasibility!'
        },
        tips: [
            'Provide step-by-step details',
            'Include specific numbers and timelines',
            'Show quality control measures',
            'Demonstrate feasibility',
            'Include risk mitigation',
            'Add Gantt chart for timeline',
            'Cite methods if using established protocols'
        ],
        commonMistakes: [
            'Too vague ("we will collect data")',
            'No quality control',
            'Missing ethics approval',
            'Unrealistic timeline',
            'No risk mitigation',
            'Missing technical details'
        ],
        reviewerLooksFor: [
            'Detailed methodology',
            'Feasibility evidence',
            'Quality control measures',
            'Realistic timeline',
            'Risk mitigation plan',
            'Ethics compliance'
        ]
    }
]
    ,
    {
        id: 'budget',
        title: '7. Budget & Justification',
        description: 'How much money do you need and why?',
        purpose: 'Provide detailed, justified budget that reviewers can approve',
        wordCount: '500-800 words + budget table',
        structure: [
                            'Budget Summary Table',
        'Personnel Costs (with justification)',
        'Equipment Costs (with justification)',
        'Consumables & Supplies',
        'Travel & Fieldwork',
        'Other Costs',
        'Indirect Costs (if applicable)'
                        ],
goodExample: {
    title: '✅ GOOD Example',
        content: 'BUDGET SUMMARY (Total: ₹35,00,000 for 24 months)\n\n1. Personnel (₹15,00,000 - 43%)\n   - Research Associate (1): ₹40,000/month × 24 months = ₹9,60,000\n     Justification: Full-time RA with MSc in CS for data collection, annotation coordination, and model development\n   - Data Annotators (2 part-time): ₹15,000/month × 24 months = ₹7,20,000\n     Justification: Medical graduates for image annotation and quality control\n   - Project Assistant (1): ₹20,000/month × 12 months = ₹2,40,000\n     Justification: For deployment phase, training healthcare workers\n\n2. Equipment (₹12,00,000 - 34%)\n   - Workstation with GPU (NVIDIA RTX 3090): ₹3,50,000 × 2 = ₹7,00,000\n     Justification: Required for deep learning model training and validation\n   - Fundus Camera (portable): ₹4,50,000 × 1 = ₹4,50,000\n     Justification: For pilot deployment in primary health centers\n   - Laptops for field work: ₹50,000 × 1 = ₹50,000\n\n3. Consumables & Cloud Services (₹3,00,000 - 9%)\n   - Cloud computing (AWS/GCP): ₹50,000/month × 6 months = ₹3,00,000\n     Justification: For large-scale model training and storage\n\n4. Travel & Fieldwork (₹3,00,000 - 9%)\n   - Data collection visits (5 hospitals): ₹30,000 × 5 = ₹1,50,000\n   - Deployment visits (10 PHCs): ₹15,000 × 10 = ₹1,50,000\n\n5. Training & Workshops (₹1,00,000 - 3%)\n   - Healthcare worker training: ₹10,000 × 10 sessions = ₹1,00,000\n\n6. Miscellaneous (₹1,00,000 - 3%)\n   - Publication charges, software licenses, contingency\n\nTotal: ₹35,00,000',
            why: 'Detailed breakdown with quantities, unit costs, and clear justifications. Shows careful planning. Reviewers can verify every line item. Realistic and justified!'
},
badExample: {
    title: '❌ BAD Example',
        content: 'Budget:\n- Personnel: ₹10,00,000\n- Equipment: ₹15,00,000\n- Other: ₹5,00,000\nTotal: ₹30,00,000',
            why: 'No details! How many people? What equipment? Why these amounts? No justification. Reviewers will reject this immediately!'
},
tips: [
    'Provide line-item details with quantities',
    'Justify every major expense',
    'Get vendor quotations for equipment',
    'Be realistic - not too high or too low',
    'Include contingency (5-10%)',
    'Match budget to objectives',
    'Follow funder budget format'
],
    commonMistakes: [
        'No justifications',
        'Unrealistic costs',
        'Missing line items',
        'No vendor quotes',
        'Budget not matching objectives',
        'Ignoring funder limits'
    ],
        reviewerLooksFor: [
            'Detailed breakdown',
            'Clear justifications',
            'Realistic costs',
            'Alignment with methodology',
            'Value for money',
            'Compliance with funder rules'
        ]
},
{
    id: 'expected-outcomes',
        title: '8. Expected Outcomes & Deliverables',
            description: 'What will you produce?',
                purpose: 'Show tangible outputs that justify the investment',
                    wordCount: '400-600 words (1-2 pages)',
                        structure: [
                            'Academic Outputs (publications, presentations)',
                            'Technical Outputs (software, datasets, models)',
                            'Capacity Building (trained personnel, infrastructure)',
                            'Societal Impact (patients served, lives improved)',
                            'Timeline for each deliverable'
                        ],
                            goodExample: {
        title: '✅ GOOD Example',
            content: 'Expected Outcomes:\n\n1. Academic Outputs:\n   - 3 peer-reviewed journal publications in Q1 journals (Months 12, 18, 24)\n   - 2 conference presentations at international venues (Months 15, 21)\n   - 1 PhD thesis chapter (Month 24)\n\n2. Technical Outputs:\n   - Validated AI model achieving >95% accuracy (Month 15)\n   - Open-source code repository on GitHub (Month 16)\n   - Annotated dataset of 50,000 images (publicly available, Month 12)\n   - Mobile application for Android/iOS (Month 20)\n   - Technical documentation and user manual (Month 22)\n\n3. Capacity Building:\n   - 2 Research Associates trained in AI/ML (Months 1-24)\n   - 100 healthcare workers trained in DR screening (Months 18-24)\n   - 10 primary health centers equipped with screening capability (Month 24)\n   - Established collaboration with 5 hospitals (Ongoing)\n\n4. Societal Impact:\n   - 10,000 patients screened in rural areas (Months 18-24)\n   - Estimated 500 early-stage DR cases detected (preventing blindness)\n   - Cost savings: ₹4.25 crores (₹8.5L per blindness case prevented × 500)\n   - Model for scaling to other states and diseases\n\n5. Policy Impact:\n   - Policy brief for National Health Mission (Month 24)\n   - Recommendations for national DR screening program\n   - Evidence for AI integration in primary healthcare',
                why: 'Specific, measurable outputs with timelines. Mix of academic, technical, and societal impact. Shows value beyond publications. Reviewers can track progress!'
    },
    badExample: {
        title: '❌ BAD Example',
            content: 'Outcomes:\n- We will publish papers\n- We will develop a system\n- We will help patients\n- We will train people',
                why: 'No specifics! How many papers? What system? How many patients? When? Impossible to evaluate success!'
    },
    tips: [
        'Be specific with numbers',
        'Include timeline for each output',
        'Mix academic and practical outputs',
        'Show societal impact',
        'Make outputs measurable',
        'Align with objectives'
    ],
        commonMistakes: [
            'Vague outputs ("improve healthcare")',
            'No numbers or timeline',
            'Only academic outputs',
            'Unrealistic promises',
            'Not measurable',
            'Not aligned with objectives'
        ],
            reviewerLooksFor: [
                'Specific deliverables',
                'Measurable outcomes',
                'Timeline for outputs',
                'Mix of outputs',
                'Societal impact',
                'Value for investment'
            ]
},
{
    id: 'impact',
        title: '9. Broader Impact & Sustainability',
            description: 'Why does this matter beyond your project?',
                purpose: 'Show long-term value and scalability',
                    wordCount: '400-600 words (1-2 pages)',
                        structure: [
                            'Scientific Impact (advancing knowledge)',
                            'Societal Impact (improving lives)',
                            'Economic Impact (cost savings, jobs)',
                            'Policy Impact (informing decisions)',
                            'Sustainability Plan (beyond funding period)',
                            'Scalability (to other regions/problems)'
                        ],
                            goodExample: {
        title: '✅ GOOD Example',
            content: 'Broader Impact:\n\n1. Scientific Impact: This project will advance AI-for-healthcare by demonstrating that attention mechanisms can improve early-stage disease detection. The open-source dataset and code will enable 100+ researchers globally to build upon our work. Our findings will inform design of AI systems for other screening programs (cervical cancer, tuberculosis).\n\n2. Societal Impact: By screening 10,000 patients in year 1 and detecting ~500 early-stage DR cases, we will prevent an estimated 500 cases of blindness over 5 years. This translates to 500 people maintaining their livelihood and quality of life. The system will particularly benefit rural populations with limited access to ophthalmologists.\n\n3. Economic Impact: Preventing 500 blindness cases saves ₹4.25 crores in lifetime productivity loss and healthcare costs. The system costs ₹350 per screening vs. ₹1,500 for traditional screening - 77% cost reduction. This makes universal screening economically feasible. The project will create 10 jobs (RAs, annotators, field staff).\n\n4. Policy Impact: We will provide evidence-based recommendations to National Health Mission for integrating AI screening in primary healthcare. Our pilot will serve as model for national scale-up, potentially reaching 77 million diabetic patients. Policy brief will be shared with Ministry of Health.\n\n5. Sustainability: After funding period, the system will be maintained through: (a) Partnership with state health departments for operational costs, (b) Revenue from screening fees (₹50/patient), (c) Follow-up grants for expansion. We have letters of intent from 3 state governments for adoption.\n\n6. Scalability: The methodology can be adapted for: (a) Other eye diseases (glaucoma, AMD), (b) Other screening programs (cervical cancer, TB), (c) Other countries with similar challenges. We will create toolkit for replication.',
                why: 'Comprehensive impact across multiple dimensions with specific numbers. Shows thinking beyond project. Demonstrates sustainability and scalability. Reviewers see long-term value!'
    },
    badExample: {
        title: '❌ BAD Example',
            content: 'Impact: This project will help many people. It will improve healthcare. It will save money. It will be useful for other diseases. It will continue after the project ends.',
                why: 'No specifics! How many people? How much money? How will it continue? Vague promises without evidence!'
    },
    tips: [
        'Quantify impact with numbers',
        'Show multiple types of impact',
        'Provide sustainability plan',
        'Demonstrate scalability',
        'Include letters of support',
        'Connect to national priorities'
    ],
        commonMistakes: [
            'Vague impact statements',
            'No sustainability plan',
            'Ignoring scalability',
            'No evidence of support',
            'Unrealistic claims',
            'Only academic impact'
        ],
            reviewerLooksFor: [
                'Quantified impact',
                'Multiple impact dimensions',
                'Sustainability plan',
                'Scalability potential',
                'Letters of support',
                'Alignment with national goals'
            ]
},
{
    id: 'team',
        title: '10. Team & Institutional Support',
            description: 'Who will do the work and why are they qualified?',
                purpose: 'Demonstrate team capability and institutional commitment',
                    wordCount: '400-600 words (1-2 pages)',
                        structure: [
                            'Principal Investigator (qualifications, relevant experience)',
                            'Co-Investigators (expertise, roles)',
                            'Collaborators (letters of support)',
                            'Institutional Facilities',
                            'Institutional Commitment'
                        ],
                            goodExample: {
        title: '✅ GOOD Example',
            content: 'Research Team:\n\nPrincipal Investigator: Dr. Rajesh Kumar, Associate Professor, Department of Computer Science, IIT Delhi. Dr. Kumar has 10 years of experience in AI/ML with 45 publications (h-index: 18) including 12 papers on medical image analysis. He has successfully completed 3 funded projects (total ₹85L) and graduated 8 PhD students. Relevant publications: [1] Kumar et al., "Attention mechanisms for medical imaging," Nature Machine Intelligence, 2022. [2] Kumar et al., "Multi-center validation of AI systems," JAMA, 2021.\n\nCo-Investigator 1: Dr. Priya Sharma, Professor of Ophthalmology, AIIMS Delhi. Dr. Sharma is a certified retina specialist with 20 years of clinical experience and 60 publications. She will lead clinical validation and provide medical expertise. She has access to 50,000+ patient records at AIIMS.\n\nCo-Investigator 2: Dr. Amit Patel, Assistant Professor, Public Health, IIPH Hyderabad. Dr. Patel specializes in health systems and has led 5 community health projects. He will lead deployment and training activities.\n\nCollaborators:\n- Dr. Sarah Johnson, MIT (AI expert) - Letter of support attached\n- Dr. Venkat Reddy, L V Prasad Eye Institute (clinical validation)\n- Mr. Suresh Iyer, National Health Mission (policy integration)\n\nInstitutional Support:\n- High-performance computing cluster (100 GPUs)\n- Dedicated lab space (500 sq ft)\n- Access to 5 partner hospitals\n- Administrative support for project management\n- Commitment letter from Dean attached\n\nThe team combines AI expertise (Kumar), clinical knowledge (Sharma), and public health experience (Patel) - ideal for this interdisciplinary project.',
                why: 'Specific qualifications with numbers, clear roles, relevant experience, strong collaborators, institutional commitment. Reviewers see capable team!'
    },
    badExample: {
        title: '❌ BAD Example',
            content: 'Team: Dr. Kumar is a professor with experience in AI. Dr. Sharma is a doctor. We have good facilities. The institution supports this project.',
                why: 'No specifics! What experience? What facilities? How does institution support? No evidence of capability!'
    },
    tips: [
        'Highlight relevant experience',
        'Include publication metrics',
        'Show track record of completed projects',
        'Attach letters of support',
        'Describe institutional facilities',
        'Show team complementarity'
    ],
        commonMistakes: [
            'Generic descriptions',
            'No relevant experience',
            'Missing letters of support',
            'No institutional commitment',
            'Unclear roles',
            'Weak team composition'
        ],
            reviewerLooksFor: [
                'Relevant expertise',
                'Track record',
                'Team complementarity',
                'Institutional support',
                'Letters of commitment',
                'Access to resources'
            ]
}
]

// Proposal writing timeline
export const PROPOSAL_TIMELINE = [
    { week: 1, task: 'Research funding opportunities, read guidelines', hours: 10 },
    { week: 2, task: 'Develop concept note, discuss with team', hours: 15 },
    { week: 3, task: 'Literature review, identify gap', hours: 20 },
    { week: 4, task: 'Write problem statement and objectives', hours: 15 },
    { week: 5, task: 'Design methodology in detail', hours: 20 },
    { week: 6, task: 'Develop budget with justifications', hours: 10 },
    { week: 7, task: 'Write expected outcomes and impact', hours: 10 },
    { week: 8, task: 'Compile team CVs and letters', hours: 10 },
    { week: 9, task: 'Write abstract and executive summary', hours: 8 },
    { week: 10, task: 'Internal review and revision', hours: 15 },
    { week: 11, task: 'External review by mentor', hours: 10 },
    { week: 12, task: 'Final revision and submission', hours: 10 }
]

// Helper functions
export function getProposalComponentById(id: string): ProposalComponent | undefined {
    return PROPOSAL_COMPONENTS.find(component => component.id === id)
}

export function getTotalProposalWordCount(): number {
    return PROPOSAL_COMPONENTS.reduce((total, component) => {
        const range = component.wordCount.match(/(\d+)-(\d+)/)
        if (range) {
            return total + (parseInt(range[1]) + parseInt(range[2])) / 2
        }
        return total
    }, 0)
}

export function getProposalTimelineWeek(week: number) {
    return PROPOSAL_TIMELINE.find(item => item.week === week)
}
