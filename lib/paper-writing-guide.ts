// Research Paper Writing Guide with Examples
// Comprehensive guide for writing high-quality research papers

export interface PaperComponent {
    id: string
    title: string
    description: string
    purpose: string
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
    wordCount?: string
}

export const PAPER_COMPONENTS: PaperComponent[] = [
    {
        id: 'title',
        title: '1. Title',
        description: 'The first impression of your paper - make it count!',
        purpose: 'Clearly communicate what your paper is about in 10-15 words',
        wordCount: '10-15 words',
        structure: [
            'Include key variables/concepts',
            'Mention the domain/application',
            'Be specific, not generic',
            'Avoid jargon and abbreviations',
            'Make it searchable with keywords'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Deep Learning-Based Early Detection of Diabetic Retinopathy Using Fundus Images: A Multi-Center Validation Study',
            why: 'Specific method (Deep Learning), clear problem (Diabetic Retinopathy), data type (Fundus Images), and validation approach (Multi-Center) - tells the complete story in 15 words!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'AI in Healthcare',
            why: 'Too vague! What AI? What healthcare problem? What did you do? This could be anything from diagnosis to drug discovery. No one can find this paper through search.'
        },
        tips: [
            'Write title AFTER completing the paper',
            'Test it: Can someone understand your contribution from title alone?',
            'Keep it under 15 words if possible',
            'Use keywords that people search for',
            'Avoid cute or clever titles - be clear and direct',
            'Check if similar titles exist - differentiate yours'
        ],
        commonMistakes: [
            'Too generic ("Machine Learning in Medicine")',
            'Too technical ("CNN-LSTM-GAN Hybrid Architecture")',
            'Missing the application ("Deep Learning Model")',
            'Using abbreviations without expansion',
            'Question format (rarely works well)',
            'Overpromising ("Revolutionary AI System")'
        ]
    },
    {
        id: 'abstract',
        title: '2. Abstract',
        description: 'Your paper in 250 words - the most important paragraph!',
        purpose: 'Summarize the entire paper: problem, method, results, conclusion',
        wordCount: '200-250 words',
        structure: [
            'Background (1-2 sentences): What is the problem and why does it matter?',
            'Gap (1 sentence): What is missing in current solutions?',
            'Method (2-3 sentences): What did you do differently?',
            'Results (2-3 sentences): What did you find? Include specific numbers!',
            'Conclusion (1-2 sentences): What does it mean for the field?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Diabetic retinopathy (DR) is a leading cause of blindness, affecting 93 million people globally. Early detection can prevent 95% of vision loss, but manual screening is time-consuming and requires expert ophthalmologists. Existing AI models achieve 85-90% accuracy but struggle with early-stage detection and generalization across populations. We developed a novel deep learning architecture combining ResNet-50 with attention mechanisms, trained on 50,000 fundus images from 5 hospitals across India representing diverse demographics. Our model achieved 96.2% accuracy, 94.8% sensitivity, and 97.1% specificity in detecting all stages of DR, outperforming existing methods by 6-8%. Notably, early-stage DR detection improved from 78% to 91%, and the model maintained 94% accuracy across different camera types and populations. Processing time is 0.3 seconds per image, enabling real-time screening. This system can democratize DR screening in resource-limited settings, potentially preventing thousands of cases of blindness annually.',
            why: 'Perfect structure: Problem with stats → Gap in existing work → Our method with specifics → Results with numbers and comparisons → Real-world impact. Every sentence adds value!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Diabetic retinopathy is a serious disease that causes blindness. We used deep learning to detect it. Our model works well. We trained it on images. The results are good. This will help patients.',
            why: 'Vague, no numbers, no specifics about method, no comparison with existing work, no concrete results. Reads like a high school essay, not a research paper!'
        },
        tips: [
            'Write abstract LAST (after completing the paper)',
            'Include specific numbers - accuracy, sample size, improvement',
            'Use past tense for what you did, present tense for conclusions',
            'Make every sentence count - no fluff',
            'Test: Can someone understand your contribution without reading the paper?',
            'Avoid citations in abstract (most journals forbid it)'
        ],
        commonMistakes: [
            'Too vague ("our method works well")',
            'No numbers ("significant improvement")',
            'Missing comparison with existing work',
            'Too much background, not enough results',
            'Using future tense ("we will show")',
            'Including citations or references'
        ]
    },
    {
        id: 'introduction',
        title: '3. Introduction',
        description: 'Set the stage - why should anyone care about your work?',
        purpose: 'Motivate the problem, review related work, state your contribution',
        wordCount: '800-1200 words (3-4 pages)',
        structure: [
            'Hook (1 paragraph): Start with impact - why does this problem matter?',
            'Problem Statement (1-2 paragraphs): What exactly is the problem?',
            'Current Solutions (2-3 paragraphs): What have others done? What are the limitations?',
            'Research Gap (1 paragraph): What is still missing?',
            'Your Contribution (1 paragraph): What did you do to fill the gap?',
            'Paper Organization (1 paragraph): How is the rest of the paper structured?'
        ],
        goodExample: {
            title: '✅ GOOD Example (Opening)',
            content: 'Diabetes affects 537 million adults worldwide, with diabetic retinopathy (DR) being the leading cause of preventable blindness in working-age adults [1]. Early detection and treatment can prevent 95% of vision loss [2], yet only 50% of diabetic patients receive annual eye screenings due to shortage of ophthalmologists, especially in rural areas [3]. In India alone, with 77 million diabetic patients, the ophthalmologist-to-patient ratio is 1:100,000, making universal screening practically impossible [4]. This creates an urgent need for automated, accurate, and accessible DR screening systems that can operate in resource-limited settings without expert supervision.',
            why: 'Starts with global impact (537M), narrows to specific problem (DR blindness), quantifies the gap (50% screening rate), provides context (India stats), and ends with clear need. Every number is cited. Compelling and specific!'
        },
        badExample: {
            title: '❌ BAD Example (Opening)',
            content: 'Diabetic retinopathy is a disease of the eye. It is caused by diabetes. Many people have diabetes. We need to detect it early. AI can help with this. In this paper, we propose an AI system.',
            why: 'Reads like a middle school essay. No impact, no numbers, no citations, no motivation. Why should anyone care? What is the gap? Completely fails to engage the reader!'
        },
        tips: [
            'Start with impact, not definitions',
            'Use the funnel approach: broad → narrow → specific',
            'Cite every factual claim with numbers',
            'Clearly state what others did AND their limitations',
            'Make your contribution crystal clear (use bullet points if needed)',
            'End with paper organization to guide the reader'
        ],
        commonMistakes: [
            'Starting with "In recent years..." (cliché)',
            'Too much background, not enough motivation',
            'Not citing related work properly',
            'Unclear contribution statement',
            'Missing the "so what?" - why does this matter?',
            'No comparison with existing approaches'
        ]
    },
    {
        id: 'methodology',
        title: '4. Methodology',
        description: 'The recipe - how did you do it?',
        purpose: 'Describe your approach in enough detail that others can reproduce it',
        wordCount: '1500-2500 words (5-8 pages)',
        structure: [
            'Overview (1 paragraph): High-level description of your approach',
            'Dataset (1-2 paragraphs): What data did you use? How much? From where?',
            'Preprocessing (1 paragraph): How did you clean/prepare the data?',
            'Model Architecture (2-3 paragraphs): Detailed description with diagrams',
            'Training Procedure (1-2 paragraphs): Hyperparameters, optimization, etc.',
            'Evaluation Metrics (1 paragraph): How did you measure success?',
            'Experimental Setup (1 paragraph): Hardware, software, tools used'
        ],
        goodExample: {
            title: '✅ GOOD Example (Dataset)',
            content: 'We collected 50,000 fundus images from 5 tertiary care hospitals across India (Mumbai, Delhi, Bangalore, Chennai, Kolkata) between January 2020 and December 2022. The dataset includes 10,000 images per hospital, ensuring geographic and demographic diversity. Each image was graded by three certified ophthalmologists using the International Clinical Diabetic Retinopathy (ICDR) scale: No DR (20,000), Mild (10,000), Moderate (10,000), Severe (7,000), and Proliferative DR (3,000). Inter-rater agreement was high (Cohen kappa = 0.89). Images were captured using three different fundus cameras (Topcon TRC-50DX, Canon CR-2, Zeiss Visucam) to ensure model generalization. The dataset was split into training (70%, 35,000), validation (15%, 7,500), and test (15%, 7,500) sets, stratified by DR severity and hospital to prevent data leakage.',
            why: 'Specific numbers, clear sources, diversity considerations, quality control (3 graders, kappa score), equipment details, proper train/val/test split with stratification. Completely reproducible!'
        },
        badExample: {
            title: '❌ BAD Example (Dataset)',
            content: 'We used fundus images from hospitals. The images were labeled by doctors. We split the data into training and testing sets.',
            why: 'No specifics! How many images? Which hospitals? How many doctors? What labels? What split ratio? Impossible to reproduce or evaluate quality!'
        },
        tips: [
            'Include a system architecture diagram',
            'Specify ALL hyperparameters (learning rate, batch size, epochs, etc.)',
            'Mention random seeds for reproducibility',
            'Describe data augmentation techniques if used',
            'Explain why you chose specific methods',
            'Include equations for custom loss functions or metrics',
            'Provide code repository link if possible'
        ],
        commonMistakes: [
            'Missing dataset details (size, source, split)',
            'No justification for design choices',
            'Vague descriptions ("we used a deep network")',
            'Missing hyperparameters',
            'No reproducibility information',
            'Skipping preprocessing steps',
            'Not explaining evaluation metrics'
        ]
    },
    {
        id: 'results',
        title: '5. Results',
        description: 'Show what you found - let the data speak!',
        purpose: 'Present your findings objectively with tables, figures, and statistical analysis',
        wordCount: '1000-1500 words (4-6 pages)',
        structure: [
            'Main Results (2-3 paragraphs): Present key findings with tables/figures',
            'Comparison with Baselines (1-2 paragraphs): How do you compare with existing methods?',
            'Ablation Studies (1-2 paragraphs): What components contribute to performance?',
            'Error Analysis (1 paragraph): Where does your method fail?',
            'Statistical Significance (1 paragraph): Are results statistically significant?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Table 1 shows the performance of our model compared to five state-of-the-art methods on the test set. Our approach achieved 96.2% accuracy (95% CI: 95.8-96.6%), significantly outperforming the best baseline (ResNet-152) by 6.1% (p < 0.001, paired t-test). Sensitivity improved from 89.3% to 94.8%, particularly for early-stage DR (Mild: 78.2% → 91.4%, Moderate: 85.6% → 93.2%). Specificity remained high at 97.1%, indicating low false positive rate. Figure 2 shows the ROC curves, with our model achieving AUC of 0.984 compared to 0.921 for the best baseline. Processing time per image was 0.3 seconds on NVIDIA V100 GPU, enabling real-time screening. Ablation study (Table 2) reveals that attention mechanism contributes 3.2% accuracy gain, while multi-scale feature fusion adds 2.1%.',
            why: 'Specific numbers with confidence intervals, statistical significance testing, comparison with baselines, breakdown by categories, multiple metrics (accuracy, sensitivity, specificity, AUC), ablation study, practical considerations (speed). Complete and convincing!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Our model performed well. It was better than other methods. The accuracy was high. Figure 1 shows the results. The model is fast.',
            why: 'No numbers! No comparisons! No statistical tests! "Well", "better", "high", "fast" are meaningless without quantification. This tells us nothing!'
        },
        tips: [
            'Always include error bars or confidence intervals',
            'Use tables for exact numbers, figures for trends',
            'Report multiple metrics (accuracy, precision, recall, F1, AUC)',
            'Include confusion matrix for classification tasks',
            'Perform statistical significance tests',
            'Show results on multiple datasets if possible',
            'Be honest about failures and limitations',
            'Use consistent formatting in all tables'
        ],
        commonMistakes: [
            'Cherry-picking best results only',
            'No error bars or confidence intervals',
            'Missing statistical significance tests',
            'No comparison with baselines',
            'Unclear figure labels and captions',
            'Not explaining unexpected results',
            'Hiding negative results',
            'Too many figures without clear message'
        ]
    },
    {
        id: 'discussion',
        title: '6. Discussion',
        description: 'Interpret your results - what do they mean?',
        purpose: 'Explain the significance of your findings and their implications',
        wordCount: '800-1200 words (3-4 pages)',
        structure: [
            'Summary of Findings (1 paragraph): Restate main results',
            'Interpretation (2-3 paragraphs): What do results mean? Why did it work?',
            'Comparison with Literature (1-2 paragraphs): How do your results fit with existing work?',
            'Limitations (1 paragraph): What are the constraints of your study?',
            'Future Work (1 paragraph): What should be done next?',
            'Practical Implications (1 paragraph): How can this be used in real world?'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'Our results demonstrate that attention mechanisms significantly improve early-stage DR detection, addressing a critical gap in existing systems. The 13.2% improvement in mild DR detection (78.2% → 91.4%) is particularly important because early intervention is most effective at this stage [15]. We hypothesize that attention helps the model focus on subtle microaneurysms and hemorrhages that characterize early DR, which are often missed by standard CNNs. The consistent performance across different camera types (94-96% accuracy) and hospitals (93-97% accuracy) suggests good generalization, addressing a major limitation of previous models trained on single-center data [8,12]. However, our model still struggles with images having media opacity (cataract, vitreous hemorrhage), achieving only 82% accuracy in such cases. This limitation could be addressed by incorporating OCT imaging or developing opacity-robust features.',
            why: 'Interprets results in context, explains WHY it works (hypothesis), compares with literature (with citations), acknowledges limitations with numbers, suggests concrete solutions. Shows deep understanding!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'Our results are good. The model works well. It is better than others. This is useful for healthcare. More work is needed.',
            why: 'No interpretation, no explanation of WHY, no comparison with literature, vague limitations, no concrete future work. Adds zero value beyond the results section!'
        },
        tips: [
            'Explain WHY your method works, not just THAT it works',
            'Connect findings to broader implications',
            'Be honest about limitations - reviewers will find them anyway',
            'Suggest specific, actionable future work',
            'Discuss practical deployment considerations',
            'Address potential criticisms proactively',
            'Cite related work when comparing'
        ],
        commonMistakes: [
            'Just repeating results without interpretation',
            'Ignoring contradictory findings in literature',
            'Vague limitations ("more data needed")',
            'Overstating implications',
            'Not explaining unexpected results',
            'Missing practical considerations',
            'Generic future work ("improve accuracy")'
        ]
    },
    {
        id: 'conclusion',
        title: '7. Conclusion',
        description: 'The final takeaway - what should readers remember?',
        purpose: 'Summarize contributions and impact in 1-2 paragraphs',
        wordCount: '200-300 words (1 page)',
        structure: [
            'Restate Problem (1-2 sentences)',
            'Summarize Approach (2-3 sentences)',
            'Highlight Key Results (2-3 sentences with numbers)',
            'State Impact (1-2 sentences)',
            'Future Vision (1 sentence - optional)'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: 'We presented a novel deep learning system for automated diabetic retinopathy screening that addresses critical limitations of existing approaches. By combining ResNet-50 with attention mechanisms and training on diverse multi-center data, our model achieved 96.2% accuracy with 94.8% sensitivity and 97.1% specificity, outperforming state-of-the-art methods by 6-8%. Crucially, early-stage DR detection improved from 78% to 91%, enabling timely intervention when treatment is most effective. The model generalizes well across different camera types and populations, processing images in 0.3 seconds for real-time screening. This system can democratize DR screening in resource-limited settings, potentially preventing thousands of cases of blindness annually. Future work will focus on incorporating multimodal data (OCT, angiography) and deploying the system in primary healthcare centers for real-world validation.',
            why: 'Concise summary of problem, method, results (with numbers), impact, and future direction. Ends on a strong note about real-world impact. Perfect conclusion!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: 'In this paper, we proposed a deep learning model for diabetic retinopathy detection. Our model works well. It is better than existing methods. This will help patients. Thank you.',
            why: 'Vague, no numbers, no specifics, no impact statement. "Thank you" is unprofessional. Weak ending that fails to leave an impression!'
        },
        tips: [
            'Keep it concise - 1-2 paragraphs maximum',
            'Include key numbers from results',
            'End with impact, not limitations',
            'No new information - only summarize',
            'Make it memorable - this is the last thing readers see',
            'Avoid phrases like "In conclusion" or "To summarize"'
        ],
        commonMistakes: [
            'Too long (repeating entire paper)',
            'Introducing new information',
            'Ending with limitations or future work',
            'No numbers or specifics',
            'Weak ending ("more research needed")',
            'Starting with "In conclusion" (obvious!)'
        ]
    },
    {
        id: 'references',
        title: '8. References',
        description: 'Give credit where credit is due',
        purpose: 'Cite all sources properly and comprehensively',
        wordCount: '30-50 references for a full paper',
        structure: [
            'Recent papers (last 5 years): 60-70%',
            'Seminal papers (foundational work): 20-30%',
            'Your own previous work: 5-10%',
            'Mix of journals and conferences',
            'Include key competitors and baselines'
        ],
        goodExample: {
            title: '✅ GOOD Example',
            content: '[1] Gulshan, V., Peng, L., Coram, M., et al. (2016). Development and validation of a deep learning algorithm for detection of diabetic retinopathy in retinal fundus photographs. JAMA, 316(22), 2402-2410. doi:10.1001/jama.2016.17216\n\n[2] Ting, D. S. W., Cheung, C. Y., Lim, G., et al. (2017). Development and validation of a deep learning system for diabetic retinopathy and related eye diseases using retinal images from multiethnic populations with diabetes. JAMA, 318(22), 2211-2223.',
            why: 'Complete citation with all authors, year, title, journal, volume, pages, and DOI. Follows standard format consistently. Easy to find and verify!'
        },
        badExample: {
            title: '❌ BAD Example',
            content: '[1] Gulshan et al., Deep learning for DR\n[2] Some paper about retinopathy, 2017',
            why: 'Incomplete! Missing journal, volume, pages, DOI. Impossible to find the actual papers. Inconsistent formatting. Unprofessional!'
        },
        tips: [
            'Use reference manager (Zotero, Mendeley, EndNote)',
            'Follow journal citation style exactly',
            'Cite original sources, not secondary citations',
            'Include DOI for all papers',
            'Verify all citations before submission',
            'Cite papers you actually read',
            'Balance between journals and conferences',
            'Include recent papers (last 2-3 years)'
        ],
        commonMistakes: [
            'Inconsistent formatting',
            'Missing DOIs',
            'Citing papers you haven\'t read',
            'Too many self-citations',
            'Missing key papers in the field',
            'Outdated references only',
            'Incomplete information',
            'Wrong citation style for journal'
        ]
    }
]

// Writing tips by paper section
export const WRITING_TIPS = {
    general: [
        'Write in active voice when possible ("We developed" not "It was developed")',
        'Use past tense for what you did, present tense for general truths',
        'Be concise - every word should add value',
        'Use consistent terminology throughout',
        'Define abbreviations on first use',
        'Number all figures and tables',
        'Refer to figures/tables in text before they appear',
        'Proofread multiple times - typos hurt credibility'
    ],
    style: [
        'Avoid: "very", "quite", "really", "basically" (filler words)',
        'Avoid: "novel", "state-of-the-art" (overused, let results speak)',
        'Avoid: "obviously", "clearly" (if obvious, don\'t state it)',
        'Use: specific numbers instead of "significant", "substantial"',
        'Use: "we" instead of "the authors" or "one"',
        'Use: parallel structure in lists',
        'Use: transitions between paragraphs',
        'Use: active voice for clarity'
    ],
    figures: [
        'Every figure must have a clear message',
        'Caption should be self-explanatory',
        'Use high-resolution images (300 DPI minimum)',
        'Label axes clearly with units',
        'Use colorblind-friendly palettes',
        'Keep consistent style across all figures',
        'Reference figures in text: "as shown in Figure 1"',
        'Place figures close to where they\'re mentioned'
    ],
    tables: [
        'Use tables for exact numbers, figures for trends',
        'Bold the best results in comparison tables',
        'Include standard deviations or confidence intervals',
        'Align numbers by decimal point',
        'Use consistent precision (e.g., 2 decimal places)',
        'Caption goes above table (unlike figures)',
        'Keep tables simple - avoid too many columns',
        'Use horizontal lines sparingly'
    ]
}

// Common reviewer comments and how to address them
export const REVIEWER_CONCERNS = [
    {
        concern: 'Insufficient comparison with baselines',
        solution: 'Compare with at least 3-5 recent methods. Include both traditional and deep learning approaches. Use same dataset and metrics for fair comparison.'
    },
    {
        concern: 'No statistical significance testing',
        solution: 'Perform t-tests or ANOVA. Report p-values and confidence intervals. Run experiments multiple times with different random seeds.'
    },
    {
        concern: 'Limited dataset',
        solution: 'Acknowledge limitation. Explain why dataset size is sufficient. Show results on multiple datasets if possible. Discuss generalization.'
    },
    {
        concern: 'Missing ablation study',
        solution: 'Systematically remove components and measure impact. Show what each part contributes. Justify design choices with data.'
    },
    {
        concern: 'Unclear contribution',
        solution: 'Explicitly state contributions in introduction (use bullet points). Highlight novelty. Explain what is new compared to existing work.'
    },
    {
        concern: 'Poor writing quality',
        solution: 'Use grammar checker (Grammarly). Get native speaker to proofread. Read paper aloud. Follow journal style guide.'
    },
    {
        concern: 'Reproducibility issues',
        solution: 'Provide code repository. List all hyperparameters. Specify random seeds. Describe dataset in detail. Include supplementary material.'
    },
    {
        concern: 'Overclaimed results',
        solution: 'Be honest about limitations. Use precise language. Don\'t claim "best" without comprehensive comparison. Acknowledge failure cases.'
    }
]

// 30-day writing schedule
export const WRITING_SCHEDULE = [
    { day: 1, task: 'Outline entire paper structure', hours: 2 },
    { day: 2, task: 'Write Methods: Dataset section', hours: 3 },
    { day: 3, task: 'Write Methods: Model architecture', hours: 3 },
    { day: 4, task: 'Write Methods: Training procedure', hours: 2 },
    { day: 5, task: 'Write Methods: Evaluation metrics', hours: 2 },
    { day: 6, task: 'Create all figures and tables', hours: 4 },
    { day: 7, task: 'Write Results: Main findings', hours: 3 },
    { day: 8, task: 'Write Results: Comparison with baselines', hours: 2 },
    { day: 9, task: 'Write Results: Ablation studies', hours: 2 },
    { day: 10, task: 'Write Results: Error analysis', hours: 2 },
    { day: 11, task: 'Write Introduction: Hook and problem', hours: 2 },
    { day: 12, task: 'Write Introduction: Related work', hours: 3 },
    { day: 13, task: 'Write Introduction: Contribution', hours: 2 },
    { day: 14, task: 'Write Discussion: Interpretation', hours: 3 },
    { day: 15, task: 'Write Discussion: Limitations', hours: 2 },
    { day: 16, task: 'Write Discussion: Future work', hours: 2 },
    { day: 17, task: 'Write Abstract', hours: 2 },
    { day: 18, task: 'Write Conclusion', hours: 2 },
    { day: 19, task: 'Write Title and keywords', hours: 1 },
    { day: 20, task: 'Format references properly', hours: 2 },
    { day: 21, task: 'First complete read-through', hours: 3 },
    { day: 22, task: 'Revise Introduction and Abstract', hours: 3 },
    { day: 23, task: 'Revise Methods and Results', hours: 3 },
    { day: 24, task: 'Revise Discussion and Conclusion', hours: 2 },
    { day: 25, task: 'Check all figures and tables', hours: 2 },
    { day: 26, task: 'Peer review with colleague', hours: 3 },
    { day: 27, task: 'Incorporate peer feedback', hours: 3 },
    { day: 28, task: 'Final proofread', hours: 2 },
    { day: 29, task: 'Format according to journal guidelines', hours: 2 },
    { day: 30, task: 'Submit!', hours: 1 }
]

// Publication venue selection guide
export interface VenueType {
    type: string
    description: string
    pros: string[]
    cons: string[]
    bestFor: string[]
    timeline: string
    impactFactor: string
}

export const VENUE_TYPES: VenueType[] = [
    {
        type: 'Top-Tier Journal (Q1)',
        description: 'High-impact journals with rigorous peer review (Nature, Science, Cell, JAMA, Lancet, IEEE TPAMI, etc.)',
        pros: [
            'Maximum visibility and citations',
            'Career advancement (promotions, tenure)',
            'Attracts funding and collaborations',
            'Permanent archival record',
            'Prestige and recognition'
        ],
        cons: [
            'Very competitive (5-15% acceptance rate)',
            'Long review process (6-12 months)',
            'Multiple revision rounds',
            'High rejection rate',
            'Expensive open access fees ($3000-$10000)'
        ],
        bestFor: [
            'Novel, groundbreaking findings',
            'Large-scale studies with significant impact',
            'Work with broad interdisciplinary appeal',
            'Career-defining publications',
            'When you have strong preliminary results'
        ],
        timeline: '6-12 months from submission to publication',
        impactFactor: '10-100+'
    },
    {
        type: 'Mid-Tier Journal (Q2)',
        description: 'Solid journals with good reputation in specific domains (IEEE Access, PLOS ONE, Scientific Reports, etc.)',
        pros: [
            'Reasonable acceptance rate (20-40%)',
            'Faster review (3-6 months)',
            'Good visibility in domain',
            'Less competitive than Q1',
            'Often open access'
        ],
        cons: [
            'Lower impact factor (2-6)',
            'Less prestigious than top-tier',
            'May not impress promotion committees',
            'Still requires solid work',
            'Open access fees ($1500-$3000)'
        ],
        bestFor: [
            'Solid incremental research',
            'Domain-specific contributions',
            'First publications for early-career researchers',
            'Negative or replication studies',
            'When speed matters'
        ],
        timeline: '3-6 months from submission to publication',
        impactFactor: '2-6'
    },
    {
        type: 'Specialized Journal (Q3-Q4)',
        description: 'Niche journals focused on specific topics or regions',
        pros: [
            'Targeted audience',
            'Higher acceptance rate (40-60%)',
            'Fast review (2-4 months)',
            'Lower fees',
            'Good for niche topics'
        ],
        cons: [
            'Lower visibility',
            'Fewer citations',
            'Lower impact factor (<2)',
            'May not count for promotions',
            'Limited readership'
        ],
        bestFor: [
            'Very specialized topics',
            'Regional studies',
            'Case studies',
            'Preliminary findings',
            'Building publication record'
        ],
        timeline: '2-4 months from submission to publication',
        impactFactor: '0.5-2'
    },
    {
        type: 'Top Conference (A/A*)',
        description: 'Premier conferences in CS/AI (NeurIPS, ICML, CVPR, ICCV, ACL, AAAI, etc.)',
        pros: [
            'Fast publication (6-9 months total)',
            'Immediate visibility',
            'Networking opportunities',
            'Oral/poster presentation',
            'Highly valued in CS/AI',
            'Proceedings in prestigious venues'
        ],
        cons: [
            'Very competitive (15-25% acceptance)',
            'Short paper format (8-10 pages)',
            'Travel costs for presentation',
            'Annual deadlines (miss it, wait 1 year)',
            'Less valued outside CS/AI'
        ],
        bestFor: [
            'Computer Science and AI research',
            'Timely, cutting-edge work',
            'When you want fast publication',
            'Building visibility in community',
            'Networking with leaders'
        ],
        timeline: '6-9 months (submission to conference)',
        impactFactor: 'N/A (but highly cited)'
    },
    {
        type: 'Workshop/Symposium',
        description: 'Smaller focused events, often co-located with major conferences',
        pros: [
            'Easy acceptance (50-70%)',
            'Fast publication (3-4 months)',
            'Good for preliminary work',
            'Networking in niche area',
            'Low pressure presentation'
        ],
        cons: [
            'Limited visibility',
            'Not counted as major publication',
            'Fewer citations',
            'May not be indexed',
            'Less rigorous review'
        ],
        bestFor: [
            'Work-in-progress',
            'Preliminary results',
            'Getting feedback before journal submission',
            'PhD students building CV',
            'Testing ideas'
        ],
        timeline: '3-4 months',
        impactFactor: 'N/A'
    },
    {
        type: 'Preprint Server',
        description: 'ArXiv, bioRxiv, medRxiv, SSRN - immediate public posting',
        pros: [
            'Immediate publication (1-2 days)',
            'Establish priority/timestamp',
            'Free to post',
            'Can submit to journal later',
            'Increasing acceptance in community'
        ],
        cons: [
            'No peer review',
            'Not counted as publication',
            'Some journals don\'t accept preprints',
            'Quality varies widely',
            'May get scooped'
        ],
        bestFor: [
            'Establishing priority quickly',
            'Getting early feedback',
            'Sharing with collaborators',
            'Fast-moving fields',
            'Before journal submission'
        ],
        timeline: '1-2 days',
        impactFactor: 'N/A'
    }
]

// Decision framework for venue selection
export interface VenueDecisionCriteria {
    criterion: string
    questions: string[]
    recommendation: string
}

export const VENUE_DECISION_FRAMEWORK: VenueDecisionCriteria[] = [
    {
        criterion: 'Research Quality & Novelty',
        questions: [
            'Is this a major breakthrough or incremental improvement?',
            'Does it challenge existing paradigms?',
            'Will it be cited extensively?',
            'Is the methodology novel?',
            'Are the results surprising or expected?'
        ],
        recommendation: 'Breakthrough → Top Journal/Conference | Incremental → Mid-Tier | Preliminary → Workshop/Preprint'
    },
    {
        criterion: 'Career Stage & Goals',
        questions: [
            'Are you applying for tenure/promotion soon?',
            'Do you need publications quickly for PhD graduation?',
            'Is this your first publication?',
            'What does your institution value (journals vs conferences)?',
            'Do you need high-impact publications for grants?'
        ],
        recommendation: 'Tenure Track → Top Journal | PhD Student → Mix of conferences and journals | Early Career → Build record with mid-tier'
    },
    {
        criterion: 'Time Sensitivity',
        questions: [
            'Is this a fast-moving field where priority matters?',
            'Do you have a deadline (graduation, grant, job application)?',
            'Can you wait 6-12 months for publication?',
            'Are competitors working on similar problems?',
            'Is the work time-sensitive (e.g., COVID research)?'
        ],
        recommendation: 'Urgent → Preprint + Conference | Moderate → Mid-tier journal | No rush → Top journal'
    },
    {
        criterion: 'Field & Domain',
        questions: [
            'What does your field value (journals or conferences)?',
            'Is there a premier venue in your specific domain?',
            'Do you need medical/clinical validation?',
            'Is this interdisciplinary work?',
            'What do senior researchers in your field publish in?'
        ],
        recommendation: 'CS/AI → Top conferences | Medicine/Biology → Top journals | Engineering → Mix | Interdisciplinary → Broad journals'
    },
    {
        criterion: 'Resources & Support',
        questions: [
            'Can you afford open access fees ($1500-$10000)?',
            'Can you travel to conferences?',
            'Do you have institutional support for revisions?',
            'Can you handle multiple revision rounds?',
            'Do you have co-authors to help with revisions?'
        ],
        recommendation: 'Limited resources → Free journals or conferences with travel grants | Good support → Aim high'
    },
    {
        criterion: 'Audience & Impact',
        questions: [
            'Who needs to read this work?',
            'Is it for specialists or broad audience?',
            'Do you want industry or academic impact?',
            'Is open access important for your audience?',
            'Do you need immediate visibility?'
        ],
        recommendation: 'Broad impact → Top journal/conference | Specialists → Domain journal | Industry → Open access | Immediate → Preprint + conference'
    }
]

// Venue selection by research outcome type
export interface ResearchOutcome {
    outcomeType: string
    description: string
    recommendedVenues: string[]
    strategy: string
    examples: string[]
}

export const VENUE_BY_OUTCOME: ResearchOutcome[] = [
    {
        outcomeType: 'Novel Algorithm/Method',
        description: 'You developed a new algorithm or methodology that outperforms existing approaches',
        recommendedVenues: [
            'Top Conference: NeurIPS, ICML, CVPR, ICCV, AAAI (for CS/AI)',
            'Top Journal: IEEE TPAMI, JMLR, Nature Machine Intelligence',
            'Domain Journal: IEEE TIP, Pattern Recognition, Neural Networks'
        ],
        strategy: 'Submit to top conference first for fast visibility. If rejected, revise and submit extended version to journal. Include comprehensive comparisons with baselines and ablation studies.',
        examples: [
            'New deep learning architecture',
            'Novel optimization algorithm',
            'Improved training technique',
            'New loss function or regularization'
        ]
    },
    {
        outcomeType: 'Application/System',
        description: 'You built a system that solves a real-world problem using existing or adapted methods',
        recommendedVenues: [
            'Application Journal: Nature Medicine, JAMA, Lancet (medical)',
            'Domain Conference: ACM CHI, UIST (HCI), SIGIR (IR)',
            'Applied Journal: Applied AI, IEEE Access, PLOS ONE'
        ],
        strategy: 'Focus on impact and deployment. Emphasize real-world validation, user studies, and practical considerations. Domain-specific journals value applications highly.',
        examples: [
            'Medical diagnosis system',
            'Agricultural monitoring app',
            'Educational technology platform',
            'Industrial quality control system'
        ]
    },
    {
        outcomeType: 'Dataset/Benchmark',
        description: 'You created a new dataset, benchmark, or evaluation framework',
        recommendedVenues: [
            'Dataset Track: NeurIPS Datasets, ICLR Datasets',
            'Domain Journal: Nature Scientific Data, Data in Brief',
            'Conference: Dataset papers at major conferences'
        ],
        strategy: 'Emphasize size, diversity, quality, and potential impact. Provide baseline results. Make data publicly available. Highlight what makes it unique.',
        examples: [
            'Large-scale annotated image dataset',
            'Benchmark for specific task',
            'Evaluation framework',
            'Curated medical records database'
        ]
    },
    {
        outcomeType: 'Theoretical Contribution',
        description: 'You proved theorems, derived bounds, or provided theoretical analysis',
        recommendedVenues: [
            'Theory Conference: COLT, ALT, STOC, FOCS',
            'Theory Journal: JMLR, Machine Learning, Theoretical Computer Science',
            'Math Journal: SIAM journals, Journal of Machine Learning Research'
        ],
        strategy: 'Emphasize rigor, novelty of proof techniques, and implications. Provide clear intuition alongside formal proofs. Show practical relevance if possible.',
        examples: [
            'Convergence proof for algorithm',
            'Complexity analysis',
            'Generalization bounds',
            'Theoretical framework'
        ]
    },
    {
        outcomeType: 'Survey/Review',
        description: 'You conducted a comprehensive review or meta-analysis of existing work',
        recommendedVenues: [
            'Review Journal: Nature Reviews, Annual Reviews',
            'Survey Article: ACM Computing Surveys, IEEE Surveys',
            'Domain Journal: Survey sections of major journals'
        ],
        strategy: 'Be comprehensive and systematic. Identify trends, gaps, and future directions. Provide taxonomy or framework. Must be invited or very thorough.',
        examples: [
            'Systematic literature review',
            'Meta-analysis of studies',
            'Tutorial on emerging topic',
            'Comparative analysis of methods'
        ]
    },
    {
        outcomeType: 'Negative/Null Results',
        description: 'Your hypothesis was not supported, or method did not work as expected',
        recommendedVenues: [
            'Negative Results: Journal of Negative Results',
            'Replication: ReScience, PLOS ONE',
            'Workshop: Negative results workshops at major conferences'
        ],
        strategy: 'Emphasize what was learned and why it matters. Explain methodology thoroughly. Discuss implications for field. Negative results are valuable!',
        examples: [
            'Method that did not improve performance',
            'Failed replication of published work',
            'Hypothesis not supported by data',
            'Unexpected negative findings'
        ]
    },
    {
        outcomeType: 'Incremental Improvement',
        description: 'You improved existing method by 2-5% or added useful features',
        recommendedVenues: [
            'Mid-Tier Journal: IEEE Access, PLOS ONE, Scientific Reports',
            'Domain Conference: Second-tier conferences in your field',
            'Letters: IEEE Letters, short papers'
        ],
        strategy: 'Be honest about incremental nature. Emphasize practical value, ease of implementation, or specific use cases where improvement matters.',
        examples: [
            'Faster version of existing algorithm',
            'More efficient implementation',
            'Extension to new domain',
            'Combination of existing techniques'
        ]
    },
    {
        outcomeType: 'Interdisciplinary Work',
        description: 'Your work bridges multiple fields (e.g., AI + Biology, CS + Social Science)',
        recommendedVenues: [
            'Interdisciplinary: Nature, Science, PNAS',
            'Domain Bridge: Nature Machine Intelligence, Science Robotics',
            'Specialized: Journal of Computational Social Science, Bioinformatics'
        ],
        strategy: 'Emphasize novelty of combination and impact on both fields. Write for broad audience. Explain domain-specific concepts clearly.',
        examples: [
            'AI for drug discovery',
            'Computational social science',
            'Robotics for surgery',
            'ML for climate science'
        ]
    },
    {
        outcomeType: 'Replication Study',
        description: 'You replicated published work to verify or challenge findings',
        recommendedVenues: [
            'Replication: ReScience, PLOS ONE',
            'Comments: Letters/comments section of original journal',
            'Meta-Research: Meta-Research journals'
        ],
        strategy: 'Be respectful but honest. Explain methodology differences. Discuss implications. Replication is crucial for science!',
        examples: [
            'Successful replication confirming findings',
            'Failed replication questioning results',
            'Replication with different dataset',
            'Replication with improved methodology'
        ]
    },
    {
        outcomeType: 'Tool/Software',
        description: 'You developed software, library, or tool for research community',
        recommendedVenues: [
            'Software: Journal of Open Source Software (JOSS)',
            'Tools: Bioinformatics, BMC Bioinformatics',
            'Demo: Demo tracks at major conferences'
        ],
        strategy: 'Emphasize usability, documentation, and community adoption. Provide benchmarks. Make code open source. Show usage examples.',
        examples: [
            'Python library for ML',
            'Visualization tool',
            'Data processing pipeline',
            'Simulation framework'
        ]
    }
]

// Red flags to avoid predatory journals
export const PREDATORY_JOURNAL_RED_FLAGS = [
    'Unsolicited emails inviting submissions',
    'Promises of very fast publication (1-2 weeks)',
    'No clear peer review process described',
    'Journal name mimics prestigious journals',
    'Publisher not in DOAJ or recognized databases',
    'No clear editorial board or fake editors',
    'Excessive publication fees with unclear refund policy',
    'Poor website quality with grammatical errors',
    'Claims unrealistic impact factor',
    'No physical address or contact information',
    'Accepts papers in unrelated fields',
    'No retraction policy'
]

// Checklist before submission
export const SUBMISSION_CHECKLIST = [
    {
        category: 'Venue Research',
        items: [
            'Read 5-10 recent papers from target venue',
            'Check acceptance rate and review timeline',
            'Verify venue is indexed (Scopus, Web of Science)',
            'Confirm venue is not predatory (check Beall\'s list)',
            'Review author guidelines thoroughly',
            'Check if open access is required/optional',
            'Verify submission deadlines'
        ]
    },
    {
        category: 'Paper Quality',
        items: [
            'Compared with at least 3-5 baselines',
            'Included statistical significance tests',
            'Performed ablation studies',
            'Addressed limitations honestly',
            'Proofread by at least 2 people',
            'All figures are high resolution (300 DPI)',
            'References formatted correctly',
            'Abstract is under word limit'
        ]
    },
    {
        category: 'Ethical Compliance',
        items: [
            'IRB approval obtained (if human subjects)',
            'Data privacy protected',
            'Conflicts of interest declared',
            'Funding sources acknowledged',
            'All authors approved submission',
            'No plagiarism (checked with Turnitin)',
            'Proper attribution of prior work',
            'Code/data availability statement'
        ]
    },
    {
        category: 'Submission Materials',
        items: [
            'Cover letter prepared',
            'Suggested reviewers list (3-5)',
            'Excluded reviewers list (if needed)',
            'Supplementary materials ready',
            'Code repository link (if applicable)',
            'Graphical abstract (if required)',
            'Highlights/significance statement',
            'Author contributions statement'
        ]
    }
]

// Helper functions
export function getPaperComponentById(id: string): PaperComponent | undefined {
    return PAPER_COMPONENTS.find(component => component.id === id)
}

export function getTotalWordCount(): number {
    return PAPER_COMPONENTS.reduce((total, component) => {
        const range = component.wordCount?.match(/(\d+)-(\d+)/)
        if (range) {
            return total + (parseInt(range[1]) + parseInt(range[2])) / 2
        }
        return total
    }, 0)
}

export function getVenueByOutcome(outcomeType: string): ResearchOutcome | undefined {
    return VENUE_BY_OUTCOME.find(outcome => outcome.outcomeType === outcomeType)
}

export function getVenueTypeByName(type: string): VenueType | undefined {
    return VENUE_TYPES.find(venue => venue.type === type)
}
