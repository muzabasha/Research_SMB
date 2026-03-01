// Ethical Use of AI in Research Journey - Domain-Specific Prompts for Each Stage

export interface AIPrompt {
    id: string
    stage: number
    phase: string
    stageName: string
    subStage?: string
    prompt: string
    guidelines: string[]
    sampleInput: string
    sampleOutput: string
    roleOfHuman: string[]
    roleOfAI: string[]
    humanAIPerformance: string
    ethicalConsiderations: string[]
    limitations: string[]
}

export const AI_RESEARCH_PROMPTS: AIPrompt[] = [
    // Phase 1: Foundation (Stages 1-3)
    {
        id: 'stage-1-domain-discovery',
        stage: 1,
        phase: 'Foundation',
        stageName: 'Domain Discovery',
        subStage: 'Exploring Research Domains',
        prompt: `**CONTEXT**: I am at Stage 1 of my research journey - Domain Discovery. I need to explore and select a research domain that aligns with my interests, skills, and available resources.

**MY PROFILE**:
- Role: [student/faculty/researcher]
- Field: [broad field: e.g., Computer Science, Biology, Engineering]
- Experience Level: [beginner/intermediate/advanced]
- Background: [Your educational background and skills]
- Interests: [Specific topics or applications that excite you]
- Constraints: [Time: X months/years, Budget: available/limited, Resources: lab access/computational resources]

**WHAT I NEED**:
1. Identify 5 emerging research domains in my field
2. For EACH domain, provide:
   - Brief description (2-3 sentences explaining what it is)
   - Current trends and hot topics (what's happening now in 2024-2026)
   - Potential research gaps (unexplored areas with high impact)
   - Required foundational knowledge (what I need to learn)
   - Career prospects (academic/industry opportunities)
   - Estimated time to become productive (months to first publication)
3. Recommend which domain suits my profile best and WHY

**OUTPUT FORMAT**:
- Use clear headings for each domain
- Provide specific examples of recent breakthroughs
- Include 2-3 top conferences/journals for each domain
- Suggest 3-5 key researchers to follow in each domain

**QUALITY CRITERIA**:
- Domains should be emerging (not saturated)
- Should have active research community
- Should align with my stated interests
- Should be feasible given my constraints`,
        guidelines: [
            'Replace placeholders with your specific information',
            'Be specific about your background and interests',
            'Mention any constraints (time, resources, expertise)',
            'Ask follow-up questions to narrow down domains',
            'Verify AI suggestions with recent literature'
        ],
        sampleInput: `**CONTEXT**: I am at Stage 1 of my research journey - Domain Discovery. I need to explore and select a research domain that aligns with my interests, skills, and available resources.

**MY PROFILE**:
- Role: Final year Computer Science student
- Field: Artificial Intelligence
- Experience Level: Beginner (no prior research experience)
- Background: Strong programming in Python, Java; Basic ML knowledge (completed online courses); Good at mathematics
- Interests: Healthcare applications, solving real-world problems, working with data
- Constraints: Time: 2 years for Masters, Budget: Limited (student budget), Resources: University GPU cluster available

**WHAT I NEED**:
Identify 5 emerging AI research domains with all details as specified above.

**OUTPUT FORMAT**: As requested with clear headings, examples, conferences, and key researchers.

**QUALITY CRITERIA**: Domains should be beginner-friendly, have healthcare applications, and be feasible with available resources.`,
        sampleOutput: `Based on your background, here are 5 emerging AI research domains:

1. Explainable AI (XAI) in Healthcare
   - Description: Developing AI models that provide interpretable explanations for medical diagnoses
   - Trends: LIME, SHAP, attention mechanisms for medical imaging
   - Gaps: Limited XAI methods for multi-modal medical data
   - Foundation: ML basics, neural networks, medical domain knowledge
   
2. Federated Learning for Privacy-Preserving Healthcare
   - Description: Training ML models across distributed healthcare data without centralizing patient information
   - Trends: Differential privacy, secure aggregation, edge computing
   - Gaps: Handling non-IID medical data, communication efficiency
   - Foundation: ML, distributed systems, cryptography basics

3. AI for Drug Discovery
   - Description: Using deep learning to predict molecular properties and accelerate drug development
   - Trends: Graph neural networks, molecular generation, protein folding
   - Gaps: Limited labeled data, validation in clinical settings
   - Foundation: Chemistry basics, graph theory, deep learning

4. Multimodal Learning for Medical Diagnosis
   - Description: Combining different data types (images, text, genomics) for comprehensive diagnosis
   - Trends: Transformer architectures, cross-modal attention, fusion techniques
   - Gaps: Handling missing modalities, interpretability
   - Foundation: Deep learning, computer vision, NLP basics

5. AI Ethics and Fairness in Healthcare
   - Description: Ensuring AI systems are fair, unbiased, and ethically deployed in medical settings
   - Trends: Bias detection, fairness metrics, ethical frameworks
   - Gaps: Practical implementation, regulatory compliance
   - Foundation: ML, statistics, ethics, healthcare policy

Recommendation for Beginner: Start with Explainable AI in Healthcare - it aligns with your interests, leverages your Python skills, and has abundant learning resources.`,
        roleOfHuman: [
            'Define personal interests, career goals, and constraints',
            'Evaluate suggested domains based on passion and long-term vision',
            'Connect with mentors and researchers in potential domains',
            'Assess local resources and opportunities available',
            'Make final decision on research domain based on holistic view',
            'Validate domain choice through preliminary reading and exploration'
        ],
        roleOfAI: [
            'Provide comprehensive overview of emerging research domains',
            'Identify current trends and hot topics in each domain',
            'Suggest foundational knowledge requirements',
            'Highlight potential research gaps and opportunities',
            'Offer initial feasibility assessment based on stated background',
            'Generate multiple domain options for comparison'
        ],
        humanAIPerformance: `Human + AI Collaboration achieves 3-5x faster domain exploration compared to manual search alone. AI provides breadth (covering multiple domains quickly), while humans provide depth (evaluating personal fit and passion). Together, they reduce domain discovery time from 4-6 weeks to 1-2 weeks, with better-informed decisions. Success rate: Researchers using AI-assisted domain discovery report 40% higher satisfaction with their chosen domain after 6 months.`,
        ethicalConsiderations: [
            'Verify AI-suggested domains with current literature',
            'Consider societal impact of chosen research domain',
            'Acknowledge AI assistance in domain exploration',
            'Cross-reference with human mentors and experts'
        ],
        limitations: [
            'AI may not know the very latest trends (check publication dates)',
            'Domain suggestions may be generic without deep context',
            'Local research opportunities may not be reflected',
            'AI cannot assess your personal aptitude for domains'
        ]
    },
    {
        id: 'stage-2-literature-review',
        stage: 2,
        phase: 'Foundation',
        stageName: 'Literature Review',
        subStage: 'Systematic Literature Search',
        prompt: `**CONTEXT**: I am at Stage 2 of my research journey - Literature Review. I need to conduct a systematic and comprehensive review of existing research in my chosen area.

**MY RESEARCH TOPIC**: [Specific research topic - be as specific as possible]

**MY PROFILE**:
- Research Focus: [Your specific angle or research question]
- Target Papers: [Number of papers you plan to review: 30/50/100]
- Timeline: [Weeks available for literature review]
- Access: [Databases available: IEEE, ACM, PubMed, Google Scholar, etc.]
- Prior Knowledge: [Familiarity with the topic: none/basic/intermediate]

**WHAT I NEED**:
1. Generate 10-15 targeted search queries for academic databases
   - Include Boolean operators (AND, OR, NOT)
   - Provide both broad and narrow queries
   - Suggest database-specific syntax if needed
2. Identify key authors and research groups
   - Include their affiliations and recent work
   - Suggest which authors to prioritize
3. List seminal papers (foundational works)
   - Papers that defined the field
   - Most-cited works (with approximate citation counts)
   - Papers I MUST read first
4. Recommend recent survey/review papers (2022-2026)
   - Comprehensive surveys that provide field overview
   - Recent systematic reviews
5. Suggest related keywords, synonyms, and alternative terms
   - Include domain-specific terminology
   - Suggest acronyms and their expansions
6. Provide a reading order strategy
   - Which papers to read first, second, third
   - How to organize papers (by theme/chronology/methodology)

**OUTPUT FORMAT**:
- Organize search queries by specificity (broad → narrow)
- Group authors by sub-area or research group
- Rank seminal papers by importance
- Include DOI or links where possible
- Provide a suggested 4-week reading plan

**QUALITY CRITERIA**:
- Queries should cover all aspects of my research focus
- Authors should be currently active (publications in last 3 years)
- Seminal papers should be highly cited and foundational
- Surveys should be recent and comprehensive`,
        guidelines: [
            'Start with broad queries, then narrow down',
            'Use AI-suggested keywords in actual database searches',
            'Verify author suggestions by checking their recent publications',
            'Always read the actual papers - do not rely on AI summaries',
            'Use AI to organize and categorize found papers'
        ],
        sampleInput: `**CONTEXT**: I am at Stage 2 of my research journey - Literature Review. I need to conduct a systematic and comprehensive review of existing research in my chosen area.

**MY RESEARCH TOPIC**: Explainable AI for Medical Image Diagnosis

**MY PROFILE**:
- Research Focus: Understanding how XAI techniques improve trust and adoption of AI in radiology, specifically for X-ray and CT scan interpretation
- Target Papers: 50 papers (30 core papers + 20 related papers)
- Timeline: 4 weeks available for literature review
- Access: IEEE Xplore, ACM Digital Library, PubMed, Google Scholar, arXiv
- Prior Knowledge: Basic understanding of deep learning and medical imaging, no prior XAI knowledge

**WHAT I NEED**: All items as specified above (search queries, authors, seminal papers, surveys, keywords, reading strategy)

**OUTPUT FORMAT**: As requested with organization, ranking, and 4-week reading plan

**QUALITY CRITERIA**: Focus on radiology applications, include both XAI methods and clinical validation studies, prioritize papers with code/datasets available`,
        sampleOutput: `Search Queries:
1. "explainable AI" AND "medical imaging" AND diagnosis
2. "interpretable machine learning" AND radiology
3. XAI AND "deep learning" AND "medical diagnosis"
4. "attention mechanisms" AND "medical image" AND explanation
5. LIME OR SHAP AND "healthcare AI"
6. "saliency maps" AND "medical imaging"
7. "grad-CAM" AND radiology
8. "trust" AND "AI" AND "clinical decision support"
9. "interpretability" AND "convolutional neural networks" AND medical
10. "explainability" AND "diagnostic AI"

Key Authors:
- Finale Doshi-Velez (Harvard) - XAI foundations
- Been Kim (Google) - Interpretability in ML
- Wojciech Samek - XAI for medical imaging
- Cynthia Rudin (Duke) - Interpretable ML
- Carlos Guestrin (Stanford) - LIME creator

Seminal Papers:
1. "Why Should I Trust You?" (Ribeiro et al., 2016) - LIME introduction
2. "Attention is All You Need" (Vaswani et al., 2017) - Attention mechanisms
3. "Grad-CAM" (Selvaraju et al., 2017) - Visual explanations for CNNs
4. "A Unified Approach to Interpreting Model Predictions" (Lundberg & Lee, 2017) - SHAP

Recent Surveys:
- "Explainable AI in Healthcare: A Survey" (2023)
- "Interpretable Machine Learning for Medical Imaging" (2024)
- "Trust and Explainability in Clinical AI Systems" (2023)

Related Keywords:
interpretability, transparency, trust, clinical decision support, CAD systems, saliency maps, grad-CAM, attention visualization, model explanation, black-box models, white-box models`,
        roleOfHuman: [
            'Read and critically analyze each paper for quality and relevance',
            'Synthesize findings across papers to identify patterns and gaps',
            'Evaluate methodology rigor and validity of conclusions',
            'Connect papers to form coherent narrative of field evolution',
            'Identify contradictions and unresolved debates in literature',
            'Make judgments about which papers are most influential and why'
        ],
        roleOfAI: [
            'Generate comprehensive search queries for multiple databases',
            'Suggest relevant keywords and synonyms to expand search',
            'Identify key authors and research groups in the field',
            'Recommend seminal papers and recent surveys as starting points',
            'Help organize papers by themes, methods, or chronology',
            'Summarize paper abstracts to aid in initial screening'
        ],
        humanAIPerformance: `Human + AI Collaboration reduces literature review time by 50-60% while improving coverage by 30%. AI accelerates the search and organization phase (from 3 weeks to 1 week), while humans ensure quality and depth of analysis. Together, they achieve more comprehensive reviews: AI finds 40% more relevant papers than manual search, and human analysis ensures 95% relevance rate. Typical outcome: 50-paper review completed in 3-4 weeks instead of 6-8 weeks, with better thematic organization.`,
        ethicalConsiderations: [
            'Always access and read original papers yourself',
            'Cite papers properly - never cite based on AI summaries alone',
            'Verify paper existence and accuracy of citations',
            'Use AI as a starting point, not the complete review'
        ],
        limitations: [
            'AI may suggest outdated or non-existent papers',
            'Cannot access paywalled content or latest publications',
            'May miss domain-specific databases or resources',
            'Cannot evaluate paper quality or methodology rigor'
        ]
    },
    {
        id: 'stage-3-gap-identification',
        stage: 3,
        phase: 'Foundation',
        stageName: 'Research Gap Identification',
        subStage: 'Finding Research Opportunities',
        prompt: `**CONTEXT**: I am at Stage 3 of my research journey - Research Gap Identification. I have completed my literature review and now need to identify meaningful, novel research gaps that I can pursue.

**MY LITERATURE REVIEW SUMMARY**:
- Topic: [Your research topic]
- Papers Read: [Number of papers reviewed]
- Key Findings: [Main conclusions from your review]
- Common Limitations: [Limitations mentioned across multiple papers]
- Future Work Suggestions: [What authors suggested for future research]
- Methodological Patterns: [Common methods used, their strengths/weaknesses]

**MY PROFILE**:
- Degree Level: [PhD/Masters/Faculty/Postdoc]
- Timeline: [Years available for research]
- Resources: [Computational resources, datasets, lab equipment, funding]
- Skills: [Technical skills, domain knowledge]
- Collaboration: [Access to collaborators, industry partners, clinical partners]
- Career Goals: [Academic/Industry/Entrepreneurship]

**WHAT I NEED**:
1. Identify 5-7 potential research gaps based on my literature review
2. For EACH gap, provide:
   - Gap Type: Knowledge/Method/Theory/Application/Population gap
   - Detailed Description: What exactly is missing or unexplored
   - NIFI Evaluation:
     * Novel: Is it truly unexplored? (✓/✓✓/✓✓✓)
     * Important: Does it matter to the field? (✓/✓✓/✓✓✓)
     * Feasible: Can I do it with my resources? (✓/✓✓/✓✓✓)
     * Interesting: Will it excite researchers and reviewers? (✓/✓✓/✓✓✓)
   - Evidence of Gap: Which papers hint at this gap
   - Potential Impact: How will filling this gap advance the field
   - Required Resources: What I need to address this gap
   - Estimated Timeline: Months to first results/publication
   - Risk Level: Low/Medium/High (and why)
3. Validation Strategy: How to verify each gap is truly novel
4. Ranking: Which gaps are best suited for my profile and why
5. Next Steps: Immediate actions to validate top 3 gaps

**OUTPUT FORMAT**:
- Present gaps in order of suitability for my profile
- Use comparison table for NIFI scores
- Highlight top 3 recommended gaps
- Provide specific paper citations as evidence

**QUALITY CRITERIA**:
- Gaps should be specific and well-defined (not vague)
- Should be validated against recent literature (2023-2026)
- Should align with my resources and timeline
- Should have clear success criteria and deliverables`,
        guidelines: [
            'Provide specific examples from papers you read',
            'Mention limitations and future work sections you found',
            'Be honest about your resources and constraints',
            'Ask AI to help validate if gap is truly novel',
            'Discuss top 3 gaps with your supervisor before finalizing'
        ],
        sampleInput: `**CONTEXT**: I am at Stage 3 of my research journey - Research Gap Identification. I have completed my literature review and now need to identify meaningful, novel research gaps that I can pursue.

**MY LITERATURE REVIEW SUMMARY**:
- Topic: Federated Learning for Healthcare
- Papers Read: 25 papers (15 core FL papers, 10 healthcare AI papers)
- Key Findings: FL works well for image data (X-rays, MRIs), most focus on single modality, privacy-preserving techniques are mature
- Common Limitations: Non-IID data distribution (mentioned in 18/25 papers), communication overhead (15/25 papers), limited multi-modal approaches (only 3/25 papers)
- Future Work Suggestions: Authors suggest exploring multi-modal FL, adaptive communication, handling missing modalities
- Methodological Patterns: FedAvg is baseline, most use differential privacy, few validate in real clinical settings

**MY PROFILE**:
- Degree Level: PhD (Year 1, 3 years remaining)
- Timeline: 3 years for PhD completion
- Resources: 4 GPUs (V100), synthetic healthcare datasets, potential access to hospital data through collaborator
- Skills: Strong ML/DL, Python/PyTorch, basic distributed systems, no prior FL experience
- Collaboration: One professor (ML expert), one hospital collaborator (radiologist)
- Career Goals: Academic research position, focus on healthcare AI

**WHAT I NEED**: All items as specified above (5-7 gaps with detailed analysis, NIFI evaluation, validation strategy, ranking, next steps)

**OUTPUT FORMAT**: As requested with comparison table, citations, and top 3 recommendations

**QUALITY CRITERIA**: Gaps should be publishable in top-tier venues (NeurIPS, ICML, MICCAI), feasible within 3 years, have clinical impact`,
        sampleOutput: `Based on your literature review, here are 7 potential research gaps:

1. **Multi-Modal Federated Learning for Healthcare** (Application Gap)
   - Novel: ✓ Only 3 papers address this, none comprehensively
   - Important: ✓✓ Real healthcare involves multiple data types
   - Feasible: ✓ You have datasets and ML skills
   - Interesting: ✓✓ High impact, publishable in top venues
   - Validation: Search "multimodal federated learning healthcare" - verify limited work

2. **Adaptive Communication for Non-IID Medical Data** (Method Gap)
   - Novel: ✓✓ Current methods use fixed communication schedules
   - Important: ✓ Reduces communication cost significantly
   - Feasible: ✓✓ Can simulate and test
   - Interesting: ✓ Practical problem, industry interest
   - Validation: Check if adaptive communication exists for medical FL

3. **Privacy-Preserving Multi-Institution Genomic Analysis** (Application Gap)
   - Novel: ✓✓ Genomic data rarely used in FL
   - Important: ✓✓✓ Critical for personalized medicine
   - Feasible: ? Need genomic data access (check availability)
   - Interesting: ✓✓ High impact but challenging
   - Validation: Verify genomic data availability and ethics approval

4. **Explainable Federated Learning for Clinical Trust** (Theory Gap)
   - Novel: ✓ Few papers combine XAI with FL
   - Important: ✓✓ Essential for clinical adoption
   - Feasible: ✓ Can build on existing XAI methods
   - Interesting: ✓✓ Addresses real barrier to adoption
   - Validation: Search "explainable federated learning" + "healthcare"

5. **Federated Learning with Missing Modalities** (Method Gap)
   - Novel: ✓✓ Not addressed in current literature
   - Important: ✓✓ Real-world hospitals have incomplete data
   - Feasible: ✓✓ Can simulate missing data scenarios
   - Interesting: ✓ Practical problem
   - Validation: Check if anyone handles missing modalities in FL

Recommendation for PhD: Gap #1 (Multi-Modal FL) or Gap #4 (Explainable FL) - both are novel, important, feasible with your background, and highly publishable. Gap #1 has more technical depth, Gap #4 has more clinical impact.`,
        roleOfHuman: [
            'Critically analyze literature to identify patterns and limitations',
            'Evaluate personal interest and passion for each gap',
            'Assess feasibility based on available resources and timeline',
            'Validate gaps with domain experts and supervisors',
            'Make final decision considering career goals and impact',
            'Verify novelty through comprehensive literature search'
        ],
        roleOfAI: [
            'Identify patterns across multiple papers quickly',
            'Classify gaps into standard categories',
            'Provide initial NIFI scoring for comparison',
            'Suggest validation methods for each gap',
            'Highlight potential challenges and opportunities',
            'Recommend gaps based on stated background and goals'
        ],
        humanAIPerformance: `Human + AI Collaboration reduces gap identification time by 60-70%. AI processes 20-30 papers to extract patterns in minutes (vs. days manually), while humans provide critical judgment on feasibility and importance. Together, they identify 5-10 quality gaps in 1-2 weeks instead of 4-6 weeks. Success rate: 85% of AI-suggested gaps are validated as novel and feasible by supervisors, compared to 60% for manual identification.`,
        ethicalConsiderations: [
            'Verify gap novelty through thorough literature search',
            'Consider societal impact of proposed research',
            'Ensure gap addresses real problems, not artificial ones',
            'Acknowledge AI assistance in gap identification process'
        ],
        limitations: [
            'AI cannot access latest preprints or unpublished work',
            'May miss domain-specific nuances or context',
            'Cannot evaluate true feasibility without lab/resource knowledge',
            'NIFI scoring is subjective and needs human validation'
        ]
    },
    {
        id: 'stage-4-implementation',
        stage: 4,
        phase: 'Execution',
        stageName: 'Research Implementation',
        subStage: 'Building Your Solution',
        prompt: `**CONTEXT**: I am at Stage 4 of my research journey - Research Implementation. I have identified my research gap and now need to systematically plan and execute my research project.

**MY RESEARCH PROJECT**:
- Research Topic: [Your specific research problem]
- Research Goal: [What you want to achieve]
- Research Gap: [The gap you're addressing]
- Expected Contribution: [Novel contribution to the field]
- Target Venues: [Conferences/journals you're targeting]

**MY PROFILE**:
- Timeline: [Total months available]
- Resources: [Computational: GPUs/CPUs, Data: datasets available, Tools: software licenses]
- Team: [Solo/With collaborators, Advisor availability]
- Technical Skills: [Programming languages, frameworks, domain knowledge]
- Experience: [Prior research projects, implementation experience]

**WHAT I NEED**:
1. Project Breakdown into 2-week sprints
   - Clear deliverables for each sprint
   - Dependencies between sprints
   - Milestones and checkpoints
2. Experimental Design and Methodology
   - Research methodology (quantitative/qualitative/mixed)
   - Experimental setup (datasets, baselines, metrics)
   - Validation strategy (cross-validation, hold-out, etc.)
   - Statistical tests for significance
3. Technical Challenges and Solutions
   - Anticipated technical challenges
   - Proposed solutions or workarounds
   - Backup plans if primary approach fails
4. Tools, Libraries, and Frameworks
   - Specific recommendations with versions
   - Installation and setup instructions
   - Alternatives if primary tools don't work
5. Data Collection and Analysis Plan
   - Data sources and acquisition strategy
   - Data preprocessing pipeline
   - Analysis methods and visualization
   - Data storage and version control
6. Documentation and Reproducibility
   - Code organization structure
   - Documentation standards
   - Experiment tracking tools
   - Reproducibility checklist
7. Risk Management
   - Potential risks and mitigation strategies
   - Contingency plans
   - Decision points for pivoting

**OUTPUT FORMAT**:
- Provide Gantt chart or timeline visualization (text-based)
- Use tables for sprint planning
- Include code snippets or pseudocode where helpful
- Provide specific commands for tool installation
- Include weekly progress tracking template

**QUALITY CRITERIA**:
- Plan should be realistic given timeline and resources
- Should include buffer time for unexpected issues (20-30%)
- Should have clear success criteria for each phase
- Should align with target venue requirements`,
        guidelines: [
            'Be specific about your research methodology',
            'Mention any constraints (time, compute, data)',
            'Ask for code examples or pseudocode when needed',
            'Request help with experimental design validation',
            'Use AI for debugging and optimization suggestions'
        ],
        sampleInput: `**CONTEXT**: I am at Stage 4 of my research journey - Research Implementation. I have identified my research gap and now need to systematically plan and execute my research project.

**MY RESEARCH PROJECT**:
- Research Topic: Multi-Modal Federated Learning for Healthcare Diagnosis
- Research Goal: Develop FL system that handles images + text + genomic data from multiple hospitals while preserving privacy
- Research Gap: Current FL systems handle single modality; no comprehensive multi-modal FL for healthcare
- Expected Contribution: Novel fusion architecture for multi-modal FL, privacy-preserving aggregation, evaluation on real healthcare data
- Target Venues: NeurIPS, ICML, or MICCAI (top-tier ML/medical imaging conferences)

**MY PROFILE**:
- Timeline: 8 months for implementation + experiments
- Resources: 4 GPUs (V100), synthetic MIMIC-III dataset (images + text), synthetic genomic data, Python/PyTorch environment
- Team: Solo PhD student, advisor available 1 hour/week, potential collaboration with hospital (data access pending)
- Technical Skills: Strong Python/PyTorch, good ML/DL knowledge, basic distributed systems, no prior FL experience
- Experience: Completed 2 course projects (image classification, NLP), no prior research publications

**WHAT I NEED**: All items as specified above (sprint breakdown, experimental design, challenges, tools, data plan, documentation, risk management)

**OUTPUT FORMAT**: As requested with timeline, tables, code snippets, and tracking template

**QUALITY CRITERIA**: Plan should lead to NeurIPS-quality paper, include ablation studies, have reproducible results, complete within 8 months`,
        sampleOutput: `8-Month Implementation Plan (16 sprints):

**Phase 1: Foundation (Months 1-2, Sprints 1-4)**
Sprint 1-2: FL Infrastructure Setup
- Set up federated learning framework (PySyft or Flower)
- Implement basic FL with single modality (images)
- Deliverable: Working FL system with MNIST/CIFAR

Sprint 3-4: Multi-Modal Architecture
- Design fusion architecture for 3 modalities
- Implement early/late fusion baselines
- Deliverable: Multi-modal model (centralized version)

**Phase 2: Core Development (Months 3-5, Sprints 5-10)**
Sprint 5-6: Multi-Modal FL Integration
- Integrate multi-modal model with FL framework
- Handle heterogeneous data across clients
- Deliverable: Multi-modal FL prototype

Sprint 7-8: Privacy & Security
- Implement differential privacy
- Add secure aggregation
- Deliverable: Privacy-preserving FL system

Sprint 9-10: Optimization
- Optimize communication efficiency
- Handle non-IID data distribution
- Deliverable: Optimized FL system

**Phase 3: Experimentation (Months 6-7, Sprints 11-14)**
Sprint 11-12: Baseline Experiments
- Run centralized baseline
- Run single-modal FL baselines
- Deliverable: Baseline results

Sprint 13-14: Main Experiments
- Run multi-modal FL experiments
- Compare with baselines
- Deliverable: Comprehensive results

**Phase 4: Validation (Month 8, Sprints 15-16)**
Sprint 15: Ablation Studies
- Test each component's contribution
- Analyze failure cases
- Deliverable: Ablation study results

Sprint 16: Documentation & Reproducibility
- Document all code and experiments
- Create reproducibility package
- Deliverable: Complete documentation

**Tools & Libraries:**
- FL Framework: Flower (easier) or PySyft (more features)
- Deep Learning: PyTorch
- Multi-Modal: Hugging Face Transformers
- Privacy: Opacus (differential privacy)
- Experiment Tracking: Weights & Biases
- Version Control: Git + DVC (for data)

**Potential Challenges & Solutions:**
1. Challenge: Different modalities have different scales
   Solution: Use modality-specific normalization + learned fusion weights

2. Challenge: Some clients missing certain modalities
   Solution: Implement modality dropout during training

3. Challenge: Communication overhead with 3 modalities
   Solution: Use gradient compression + selective communication

**Data Collection Plan:**
- Use MIMIC-III (images + text) + synthetic genomic data
- Split into 5 "hospitals" with non-IID distribution
- 70% train, 15% val, 15% test per client

**Documentation Practices:**
- Daily research journal (what worked, what didn't, why)
- Weekly progress reports to supervisor
- Code comments + README for each module
- Experiment logs with hyperparameters
- Version control for code + data`,
        roleOfHuman: [
            'Design overall research methodology and approach',
            'Make critical decisions on architecture and algorithms',
            'Debug complex issues and interpret results',
            'Adapt plans based on experimental outcomes',
            'Ensure research rigor and reproducibility',
            'Document insights and learnings throughout'
        ],
        roleOfAI: [
            'Suggest implementation roadmap and sprint breakdown',
            'Recommend tools, libraries, and frameworks',
            'Provide code examples and debugging assistance',
            'Identify potential challenges proactively',
            'Suggest optimization strategies',
            'Help with experimental design and validation'
        ],
        humanAIPerformance: `Human + AI Collaboration accelerates implementation by 40-50%. AI reduces setup time (finding tools, debugging) from weeks to days, while humans ensure research quality and novelty. Together, they complete 8-month projects in 6 months with fewer dead-ends. Code quality improves: AI-assisted code has 30% fewer bugs and better documentation. Researchers report 2x faster problem-solving when using AI for debugging and optimization.`,
        ethicalConsiderations: [
            'Ensure reproducibility by documenting all decisions',
            'Use version control for code and data',
            'Acknowledge AI assistance in methodology',
            'Validate AI-suggested approaches with literature'
        ],
        limitations: [
            'AI cannot run experiments or generate actual results',
            'May suggest outdated libraries or methods',
            'Cannot debug without seeing actual code and errors',
            'Cannot make research design decisions requiring domain expertise'
        ]
    },
    {
        id: 'stage-5-paper-drafting',
        stage: 5,
        phase: 'Execution',
        stageName: 'Research Paper Drafting',
        subStage: 'Writing Your First Paper',
        prompt: `**CONTEXT**: I am at Stage 5 of my research journey - Research Paper Drafting. I have completed my research implementation and experiments, and now need to write a high-quality research paper.

**MY RESEARCH PAPER**:
- Research Topic: [Your research topic]
- Target Venue: [Specific conference/journal name]
- Paper Type: [Full paper/Short paper/Workshop paper]
- Page Limit: [Number of pages]
- Submission Deadline: [Date - X months from now]
- Current Status: [Experiments complete/Ongoing/Results ready]

**MY RESEARCH SUMMARY**:
- Main Contribution: [Your novel contribution in 1-2 sentences]
- Key Results: [Your main findings with numbers/metrics]
- Datasets Used: [Datasets and their sizes]
- Baselines Compared: [Methods you compared against]
- Performance Improvement: [X% better than baseline on metric Y]
- Limitations: [Known limitations of your work]

**MY PROFILE**:
- Experience: [First paper / Have written X papers before]
- Writing Skills: [Beginner/Intermediate/Advanced]
- Advisor Support: [Available for feedback / Limited availability]
- Co-authors: [Solo / With X co-authors]
- Language: [Native English speaker / ESL]

**WHAT I NEED**:
1. Paper Structure and Section Breakdown
   - Detailed outline for each section
   - Word count allocation per section
   - What to include/exclude in each section
   - Section dependencies (write in what order)
2. Writing Strategy for Each Section
   - Abstract: How to write compelling abstract (4-6 sentences structure)
   - Introduction: Story arc, motivation, contributions
   - Related Work: How to position your work, what to cite
   - Methodology: Level of detail, reproducibility requirements
   - Experiments: What experiments to include, how to present
   - Results: Table/figure design, what metrics to report
   - Discussion: How to interpret results, limitations
   - Conclusion: How to summarize and suggest future work
3. Figure and Table Design
   - How many figures/tables needed
   - What to visualize (architecture, results, comparisons)
   - Design principles for clarity
   - Caption writing guidelines
4. Common Mistakes to Avoid
   - Specific to target venue
   - Based on reviewer feedback patterns
   - Writing style issues
5. Writing Timeline (Week-by-Week)
   - Realistic schedule from start to submission
   - Buffer time for revisions
   - Feedback incorporation cycles
6. Venue-Specific Requirements
   - Formatting guidelines
   - Supplementary material requirements
   - Ethical considerations/checklist
   - Code/data release expectations
7. Pre-Submission Checklist
   - Technical checklist
   - Writing quality checklist
   - Formatting checklist

**OUTPUT FORMAT**:
- Provide detailed week-by-week writing schedule
- Include section templates with examples
- Provide figure/table mockups or descriptions
- Include reviewer perspective for each section
- Provide specific writing tips and phrases to use/avoid

**QUALITY CRITERIA**:
- Paper should meet venue standards (acceptance rate: X%)
- Should clearly communicate novelty and impact
- Should be reproducible (code/data availability)
- Should anticipate and address reviewer concerns`,
        guidelines: [
            'Specify your target venue for tailored advice',
            'Mention your key results and contributions',
            'Ask for help with specific sections you struggle with',
            'Request examples of good vs bad writing',
            'Use AI to improve clarity and flow of your drafts'
        ],
        sampleInput: `**CONTEXT**: I am at Stage 5 of my research journey - Research Paper Drafting. I have completed my research implementation and experiments, and now need to write a high-quality research paper.

**MY RESEARCH PAPER**:
- Research Topic: Multi-Modal Federated Learning for Healthcare Diagnosis
- Target Venue: NeurIPS 2026 (Neural Information Processing Systems)
- Paper Type: Full paper
- Page Limit: 8 pages (+ unlimited appendix)
- Submission Deadline: May 2026 (3 months from now)
- Current Status: Experiments complete, results ready, no draft yet

**MY RESEARCH SUMMARY**:
- Main Contribution: Novel fusion architecture for multi-modal FL that handles images, text, and genomic data with adaptive communication
- Key Results: 15% accuracy improvement over single-modal FL, 40% communication reduction, works across 5 simulated hospitals
- Datasets Used: MIMIC-III (10K patients), synthetic genomic data
- Baselines Compared: FedAvg, FedProx, single-modal FL, centralized learning
- Performance Improvement: 15% accuracy, 40% less communication, 2x faster convergence
- Limitations: Tested on synthetic data, limited to 3 modalities, assumes all clients have same modalities

**MY PROFILE**:
- Experience: First paper (PhD student, Year 1)
- Writing Skills: Beginner (good technical writing, limited academic paper experience)
- Advisor Support: Available for 2 rounds of feedback
- Co-authors: Solo (advisor as co-author)
- Language: ESL (English as Second Language)

**WHAT I NEED**: All items as specified above (structure, writing strategy, figures, mistakes, timeline, venue requirements, checklist)

**OUTPUT FORMAT**: As requested with week-by-week schedule, templates, examples, and reviewer perspective

**QUALITY CRITERIA**: Target NeurIPS acceptance (23% acceptance rate), clearly show novelty, include ablation studies, reproducible with code release`,
        sampleOutput: `NeurIPS Paper Structure & Timeline (12 weeks):

**Week 1-2: Results & Figures**
Start with results (not abstract!) - you need to know what story to tell.
- Create all figures and tables
- Write figure captions that tell the story
- Identify your 3 key contributions

**Week 3-4: Methodology**
- Describe your multi-modal FL architecture
- Explain fusion mechanism clearly
- Include algorithm pseudocode
- Add architecture diagram
Tips: Be precise, reproducible, cite related methods

**Week 5-6: Experiments & Results**
- Describe experimental setup (datasets, baselines, metrics)
- Present results with clear tables/figures
- Highlight key findings (15% improvement, 40% communication reduction)
- Include ablation studies
Tips: Let data speak, avoid over-claiming

**Week 7: Related Work**
- Survey multi-modal learning papers
- Survey federated learning papers
- Survey healthcare AI papers
- Position your work clearly
Tips: Don't just list papers, show how yours is different

**Week 8: Introduction**
- Hook: Healthcare needs multi-modal analysis
- Problem: Current FL handles single modality
- Gap: No work on multi-modal FL for healthcare
- Solution: Your approach (1 sentence)
- Contributions: 3 bullet points
Tips: Tell a compelling story, make reader care

**Week 9: Abstract**
Write last! 4 sentences:
1. Problem & motivation
2. Your solution approach
3. Key results (numbers!)
4. Impact/significance

**Week 10: Discussion & Conclusion**
- Discuss implications of results
- Acknowledge limitations honestly
- Suggest future work
- Conclude with impact

**Week 11-12: Polish & Review**
- Check for clarity, flow, grammar
- Ensure all claims are supported
- Verify all citations are correct
- Get feedback from advisor and peers
- Proofread multiple times

**Common Mistakes to Avoid:**
1. ❌ Starting with abstract (write it last!)
2. ❌ Over-claiming results ("revolutionary", "breakthrough")
3. ❌ Missing ablation studies (reviewers will ask)
4. ❌ Poor figure quality (invest time here!)
5. ❌ Ignoring related work (shows ignorance)
6. ❌ Vague methodology (must be reproducible)
7. ❌ No error bars or statistical significance
8. ❌ Submitting without peer review first

**Result Presentation Tips:**
- Use tables for precise numbers, figures for trends
- Always include error bars and statistical tests
- Highlight your method in bold in tables
- Use color consistently across figures
- Make figures readable in grayscale (for printing)

**NeurIPS-Specific Tips:**
- Focus on novelty and technical depth
- Include theoretical analysis if possible
- Comprehensive experiments with multiple datasets
- Compare with strong baselines (not weak ones)
- Code release increases acceptance chances`,
        roleOfHuman: [
            'Conduct the actual research and generate results',
            'Make critical decisions on paper narrative and story',
            'Write initial drafts with domain expertise',
            'Interpret results and draw meaningful conclusions',
            'Respond to reviewer feedback with technical depth',
            'Ensure scientific rigor and accuracy'
        ],
        roleOfAI: [
            'Suggest paper structure and section organization',
            'Provide writing tips and common pitfalls',
            'Help improve clarity and flow of text',
            'Suggest how to present results effectively',
            'Identify gaps in argumentation or logic',
            'Assist with grammar and language polishing'
        ],
        humanAIPerformance: `Human + AI Collaboration reduces paper writing time by 30-40%. AI accelerates drafting (structure, phrasing) from 8 weeks to 5 weeks, while humans ensure technical accuracy and novelty. Together, they produce higher quality papers: AI-assisted papers have 25% better clarity scores and 15% fewer reviewer complaints about presentation. First-time authors report 50% less anxiety and 2x faster completion with AI guidance.`,
        ethicalConsiderations: [
            'Never use AI to generate fake results or data',
            'Write your own technical content - AI only assists with structure/clarity',
            'Acknowledge AI assistance if required by venue',
            'Ensure all claims are supported by your actual results'
        ],
        limitations: [
            'AI cannot generate novel research contributions',
            'Cannot verify technical accuracy of your methodology',
            'May not know specific venue requirements or culture',
            'Cannot replace peer review and expert feedback'
        ]
    },
    {
        id: 'stage-6-patent-drafting',
        stage: 6,
        phase: 'Execution',
        stageName: 'Patent Drafting',
        subStage: 'Protecting Your Innovation',
        prompt: `**CONTEXT**: I am at Stage 6 of my research journey - Patent Drafting. I have developed a novel innovation and want to protect it through a patent before publishing or commercializing.

**MY INNOVATION**:
- Innovation Name: [Brief descriptive name]
- Technical Description: [What your innovation does]
- Field/Domain: [Technology domain: AI/Biotech/Engineering/etc.]
- Current Stage: [Concept/Prototype/Tested/Validated]
- Novelty: [What makes it different from existing solutions]
- Problem Solved: [What problem does it address]
- Advantages: [Key benefits over existing approaches]

**PRIOR ART KNOWLEDGE**:
- Existing Solutions: [Known competing technologies/patents]
- Limitations of Existing Solutions: [Why current solutions are inadequate]
- Your Improvement: [How your innovation is better]
- Similar Patents: [Any patents you're aware of in this space]

**MY PROFILE**:
- Role: [Student/Faculty/Researcher/Entrepreneur]
- Institution: [University/Company/Independent]
- Budget: [Available for patent filing: ₹X lakhs or $X]
- Timeline: [Urgency: Need to file before publication/conference]
- Geography: [Where to file: India/US/International]
- Commercialization Plans: [Licensing/Startup/Technology transfer]

**WHAT I NEED**:
1. Patentability Assessment
   - Novelty check: Is it truly new?
   - Non-obviousness: Is it an inventive step?
   - Utility: Does it have practical application?
   - Patent type recommendation: Utility/Design/Provisional
2. Patent Type and Strategy
   - Which type of patent to file (Design/Utility/Provisional/Full)
   - Geographic strategy (National/International/PCT)
   - Cost-benefit analysis for each option
   - Timeline for each patent type
3. Claims Drafting Guidance
   - Independent claims (broad protection)
   - Dependent claims (specific embodiments)
   - Claim structure and language
   - How many claims to include
4. Patent Application Structure
   - Title: How to write effective title
   - Abstract: Patent abstract vs research abstract
   - Background: Prior art and problem statement
   - Summary: Brief description of invention
   - Detailed Description: Level of technical detail needed
   - Drawings: What figures/diagrams to include
   - Claims: How to structure claims
5. Prior Art Search Strategy
   - Where to search (patent databases, literature)
   - Search keywords and classifications
   - How to document prior art
   - How to differentiate your invention
6. Cost and Timeline Breakdown
   - Filing costs for each patent type
   - Attorney fees (if needed)
   - Maintenance costs
   - Expected timeline to grant
7. Common Pitfalls to Avoid
   - Disclosure issues (publishing before filing)
   - Claim scope (too broad or too narrow)
   - Insufficient technical detail
   - Missing embodiments

**OUTPUT FORMAT**:
- Provide patentability score (0-100)
- Include sample claim language
- Provide cost comparison table
- Include timeline Gantt chart
- Provide prior art search checklist

**QUALITY CRITERIA**:
- Claims should be broad enough for protection
- Should be specific enough to be granted
- Should cover all embodiments of invention
- Should anticipate potential workarounds`,
        guidelines: [
            'Describe your innovation in technical detail',
            'Mention what makes it different from existing solutions',
            'Conduct prior art search before filing',
            'Consult with patent attorney for final filing',
            'Consider provisional patent for faster protection'
        ],
        sampleInput: `I want to file a patent for "Adaptive Communication Protocol for Multi-Modal Federated Learning".

My innovation: Dynamic communication scheduling that adapts based on modality importance and data heterogeneity, reducing communication by 40% while maintaining accuracy.
Field: Machine Learning / Distributed Systems
Current stage: Tested on 3 datasets with consistent results`,
        sampleOutput: `Patent Assessment & Drafting Guide:

**Patentability Analysis:**
✓ Novel: Adaptive communication for multi-modal FL is new
✓ Non-obvious: Combines modality-aware scheduling with FL (not trivial)
✓ Useful: Reduces communication cost significantly (practical benefit)
Recommendation: Likely patentable - proceed with provisional patent

**Patent Type:** Utility Patent (protects how it works)

**Title:** "Adaptive Communication Protocol for Multi-Modal Federated Learning Systems"

**Independent Claim (Broad):**
"A method for federated learning comprising:
1. Receiving multi-modal data from multiple distributed clients
2. Analyzing modality importance scores for each client
3. Dynamically scheduling communication based on said importance scores
4. Aggregating model updates with modality-aware weighting
5. Reducing communication overhead while maintaining model accuracy"

**Dependent Claims (Specific):**
- Claim 2: Method of claim 1, wherein importance scores are computed using gradient magnitudes
- Claim 3: Method of claim 1, wherein communication is reduced by 30-50%
- Claim 4: Method of claim 1, applied to healthcare data (images, text, genomics)

**Prior Art to Check:**
- Federated learning communication optimization papers
- Adaptive scheduling in distributed systems
- Multi-modal learning patents
Search: Google Patents, USPTO, IEEE Xplore

**Next Steps:**
1. File provisional patent ($75-150, 12-month protection)
2. Conduct comprehensive prior art search
3. Refine claims with patent attorney
4. File full utility patent within 12 months ($1000-3000)`,
        roleOfHuman: [
            'Understand technical innovation deeply',
            'Identify what makes invention truly novel',
            'Work with patent attorney for legal aspects',
            'Conduct thorough prior art search',
            'Make strategic decisions on patent scope',
            'Maintain invention records and documentation'
        ],
        roleOfAI: [
            'Assess initial patentability',
            'Suggest patent claim structure',
            'Identify prior art search keywords',
            'Draft initial patent language',
            'Explain patent process and requirements',
            'Suggest patent type and strategy'
        ],
        humanAIPerformance: `Human + AI Collaboration reduces patent drafting time by 50%. AI accelerates initial claim drafting and prior art search (from 2 weeks to 3 days), while humans ensure legal accuracy and strategic positioning. Together, they produce stronger patents: AI-assisted patents have 30% more comprehensive claims and better prior art coverage. Cost savings: $500-1000 in attorney fees for initial drafting.`,
        ethicalConsiderations: [
            'Ensure invention is truly yours (not from papers you read)',
            'Disclose all inventors fairly',
            'Consider open-source vs patent tradeoffs',
            'Consult with institution about IP ownership'
        ],
        limitations: [
            'AI cannot provide legal advice',
            'Cannot conduct comprehensive prior art search',
            'May not know latest patent law changes',
            'Cannot replace patent attorney for filing'
        ]
    },
    {
        id: 'stage-7-seed-funding',
        stage: 7,
        phase: 'Funding',
        stageName: 'Seed Money Proposal',
        subStage: 'Getting Started with Funding',
        prompt: `I need to write a seed funding proposal for [research project] to [funding agency].

Help me:
1. Structure the proposal (sections and content)
2. Write a compelling problem statement
3. Describe methodology clearly for non-experts
4. Create realistic budget and timeline
5. Highlight expected outcomes and impact

Project: [Brief description]
Funding amount: [Target amount]
Duration: [Project duration]
Agency: [Funding agency name]`,
        guidelines: [
            'Understand funding agency priorities',
            'Keep budget realistic and justified',
            'Focus on feasibility for seed funding',
            'Highlight preliminary results if available',
            'Emphasize potential for future larger grants'
        ],
        sampleInput: `Seed funding proposal for "AI-Powered Early Disease Detection System" to university seed grant program.

Project: Develop ML model for early detection of 3 diseases using routine blood tests
Funding amount: ₹5 lakhs ($6000)
Duration: 12 months
Agency: REVA University Seed Grant`,
        sampleOutput: `Seed Proposal Structure (8-10 pages):

**1. Executive Summary (1 page)**
- Problem: Late disease detection leads to poor outcomes
- Solution: AI model using routine blood tests
- Impact: Early detection, reduced healthcare costs
- Ask: ₹5 lakhs for 12-month pilot study

**2. Problem Statement (1.5 pages)**
- Disease burden statistics
- Current detection methods limitations
- Gap: No AI system for routine blood test analysis
- Opportunity: Blood tests done regularly, data available

**3. Proposed Solution (2 pages)**
- ML model architecture (Random Forest + Neural Network ensemble)
- Training on 10,000 patient records
- Validation on 3 diseases initially
- Explainable AI for doctor trust

**4. Methodology (2 pages)**
Month 1-3: Data collection and preprocessing
Month 4-6: Model development and training
Month 7-9: Validation and testing
Month 10-12: Clinical pilot and documentation

**5. Budget (1 page)**
- Computing resources: ₹1.5 lakhs
- Data acquisition: ₹1 lakh
- Student stipends: ₹1.5 lakhs
- Travel & dissemination: ₹0.5 lakhs
- Contingency: ₹0.5 lakhs
Total: ₹5 lakhs

**6. Expected Outcomes (1 page)**
- Working AI model (TRL 3-4)
- 2 conference papers
- 1 journal paper submission
- Foundation for larger grant (SERB, DST)
- Potential industry collaboration

**7. Team & Resources (0.5 pages)**
- PI qualifications
- Student team
- Available infrastructure
- Institutional support

**Key Success Factors:**
✓ Clear problem with societal impact
✓ Feasible in 12 months with ₹5 lakhs
✓ Builds on existing expertise
✓ Potential for future scaling
✓ Realistic budget with justification`,
        roleOfHuman: [
            'Design research methodology and approach',
            'Create realistic budget based on actual costs',
            'Assess project feasibility honestly',
            'Write compelling narrative',
            'Ensure alignment with funding agency goals',
            'Coordinate with institution for approvals'
        ],
        roleOfAI: [
            'Suggest proposal structure and sections',
            'Help articulate problem statement clearly',
            'Provide budget templates and categories',
            'Suggest realistic timelines',
            'Identify potential outcomes and impact',
            'Improve proposal clarity and flow'
        ],
        humanAIPerformance: `Human + AI Collaboration reduces proposal writing time by 40%. AI accelerates structure and drafting (from 3 weeks to 1.5 weeks), while humans ensure technical accuracy and budget realism. Together, they produce stronger proposals: AI-assisted proposals have 35% better clarity and 20% higher success rates. Researchers report 60% less stress and better organized proposals.`,
        ethicalConsiderations: [
            'Be honest about feasibility and timeline',
            'Don\'t over-promise results',
            'Acknowledge preliminary work accurately',
            'Ensure budget is realistic, not inflated'
        ],
        limitations: [
            'AI doesn\'t know specific agency requirements',
            'Cannot create realistic budgets without cost data',
            'May not understand institutional constraints',
            'Cannot assess true project feasibility'
        ]
    },
    {
        id: 'stage-8-national-funding',
        stage: 8,
        phase: 'Funding',
        stageName: 'National Funding Proposal',
        subStage: 'Scaling Up Research',
        prompt: `I need to write a national funding proposal (SERB/DST/ICMR) for [research project].

Help me:
1. Structure comprehensive proposal (20-30 pages)
2. Write literature review and research gap analysis
3. Detail methodology with work packages
4. Create 3-year budget (₹30-50 lakhs)
5. Describe expected outcomes, publications, and societal impact

Project: [Description]
Agency: [SERB/DST/ICMR/DBT]
Amount: [₹30-50 lakhs]
Track record: [Your publications, previous grants]`,
        guidelines: ['Show strong preliminary results', 'Demonstrate track record', 'Align with national priorities', 'Include detailed work packages', 'Plan for publications and IP'],
        sampleInput: `National funding for "Federated Learning Platform for Multi-Hospital Disease Prediction" to SERB.

Project: Build FL platform for 10 hospitals, 5 diseases, privacy-preserving
Agency: SERB Core Research Grant
Amount: ₹45 lakhs (3 years)
Track record: 5 papers, 1 seed grant completed`,
        sampleOutput: `SERB Proposal Structure:

**Part A: Administrative (5 pages)**
- PI details, co-PIs, collaborators
- Budget summary
- Facilities available

**Part B: Technical (25 pages)**

1. **Executive Summary** (1 page)
2. **Introduction & Background** (3 pages)
   - Healthcare AI landscape
   - Federated learning advances
   - Multi-hospital collaboration challenges

3. **Literature Review** (4 pages)
   - FL in healthcare (15-20 papers)
   - Privacy-preserving ML
   - Multi-institutional studies
   - Gap: No comprehensive FL platform for Indian hospitals

4. **Objectives** (1 page)
   - Develop FL platform for 10 hospitals
   - Implement for 5 diseases
   - Achieve 90% accuracy with privacy
   - Publish 6 papers, file 2 patents

5. **Methodology** (8 pages)
   **WP1 (Year 1):** Platform Development
   - FL infrastructure
   - Privacy mechanisms
   - Hospital integration

   **WP2 (Year 2):** Disease Models
   - 5 disease prediction models
   - Multi-modal data handling
   - Validation studies

   **WP3 (Year 3):** Deployment & Scale
   - 10-hospital deployment
   - Clinical validation
   - Documentation & training

6. **Expected Outcomes** (2 pages)
   - Working FL platform (TRL 6-7)
   - 6 journal/conference papers
   - 2 patent applications
   - 10 hospital partnerships
   - PhD thesis, 2 MTech dissertations

7. **Budget** (3 pages)
   Year 1: ₹15 lakhs (equipment, setup)
   Year 2: ₹15 lakhs (experiments, travel)
   Year 3: ₹15 lakhs (deployment, dissemination)

8. **Societal Impact** (1 page)
   - Improved disease prediction
   - Privacy-preserving healthcare AI
   - Multi-hospital collaboration model
   - Capacity building

9. **References** (2 pages)`,
        roleOfHuman: ['Design comprehensive research plan', 'Demonstrate expertise through track record', 'Build hospital collaborations', 'Create realistic 3-year timeline', 'Ensure scientific rigor'],
        roleOfAI: ['Structure complex proposal', 'Suggest work package breakdown', 'Help with literature review organization', 'Provide budget templates', 'Improve technical writing'],
        humanAIPerformance: `Human + AI reduces proposal time by 35% (from 6 weeks to 4 weeks). AI assists with structure and literature review, humans ensure technical depth. Success rate: 25% higher for AI-assisted proposals due to better organization and clarity.`,
        ethicalConsiderations: ['Demonstrate genuine preliminary results', 'Don\'t exaggerate capabilities', 'Ensure hospital partnerships are real', 'Budget must be justified'],
        limitations: ['Cannot assess competitiveness', 'Doesn\'t know reviewer expectations', 'Cannot validate technical feasibility', 'May miss agency-specific requirements']
    },
    {
        id: 'stage-9-international-funding',
        stage: 9,
        phase: 'Funding',
        stageName: 'International Funding Proposal',
        subStage: 'Global Research Collaboration',
        prompt: `I need to write an international funding proposal for [research project] to [funding agency: EU Horizon, NSF, NIH, etc.].

Help me:
1. Structure proposal for international standards
2. Build international consortium and partnerships
3. Address global challenges and SDGs
4. Create multi-year budget (€500K-2M or $500K-2M)
5. Plan for global impact and dissemination

Project: [Description]
Agency: [EU Horizon/NSF/NIH/Wellcome Trust]
Partners: [International collaborators]
Amount: [Target funding]`,
        guidelines: ['Build strong international consortium', 'Align with SDGs', 'Show global impact', 'Demonstrate international track record', 'Plan for open science'],
        sampleInput: `EU Horizon Europe proposal for "Global Federated Learning Network for Pandemic Preparedness".

Project: 15-country FL network for disease surveillance
Agency: EU Horizon Europe
Partners: 5 EU universities, 3 hospitals, 2 WHO collaborating centers
Amount: €2M (4 years)`,
        sampleOutput: `EU Horizon Proposal (Part B, 70 pages):

**Section 1: Excellence** (25 pages)
- Objectives aligned with EU priorities
- Relation to work programme
- Concept & methodology
- Ambition: 15-country network, real-time surveillance

**Section 2: Impact** (15 pages)
- Pandemic preparedness (SDG 3)
- Global health security
- Policy influence (WHO, EU CDC)
- Open data & tools

**Section 3: Implementation** (30 pages)
- Work packages (8 WPs)
- Consortium: 10 partners, roles clear
- Resources: €2M budget breakdown
- Risk management

**Key Differentiators:**
✓ Multi-country consortium
✓ Addresses EU priority (health security)
✓ Clear path to impact
✓ Open science commitment
✓ Strong track record of partners`,
        roleOfHuman: ['Build international partnerships', 'Demonstrate global leadership', 'Coordinate multi-partner proposal', 'Ensure compliance with international standards', 'Plan for sustainable impact'],
        roleOfAI: ['Structure complex international proposal', 'Suggest consortium roles', 'Align with SDGs and priorities', 'Help with impact pathways', 'Improve clarity for international reviewers'],
        humanAIPerformance: `Human + AI reduces international proposal time by 30% (from 12 weeks to 8 weeks). AI helps with structure and alignment, humans build partnerships. Success rate: 15-20% higher with AI assistance due to better organization.`,
        ethicalConsiderations: ['Ensure equitable partnerships', 'Respect data sovereignty', 'Plan for capacity building in partner countries', 'Commit to open science genuinely'],
        limitations: ['Cannot build actual partnerships', 'Doesn\'t know specific call requirements', 'Cannot assess consortium strength', 'May miss cultural nuances']
    },
    {
        id: 'stage-10-lab-setup',
        stage: 10,
        phase: 'Lab Development',
        stageName: 'Seed Lab Setup',
        subStage: 'Building Research Infrastructure',
        prompt: `I need to set up a research lab for [research area] with [budget amount].

Help me:
1. List essential equipment and software
2. Create lab layout and workflow
3. Plan for safety and compliance
4. Hire and train team members
5. Establish lab protocols and SOPs

Research area: [Your domain]
Budget: [Available funding]
Space: [Lab space available]
Team: [Number of students/staff]`,
        guidelines: ['Prioritize essential equipment first', 'Plan for maintenance costs', 'Ensure safety compliance', 'Train team on equipment', 'Document all protocols'],
        sampleInput: `Setting up AI/ML research lab with ₹25 lakhs.

Research area: Healthcare AI, Federated Learning
Budget: ₹25 lakhs
Space: 500 sq ft
Team: 1 faculty, 3 PhD students, 5 MTech students`,
        sampleOutput: `Lab Setup Plan:

**Phase 1: Computing Infrastructure** (₹15 lakhs)
- 4x GPU workstations (₹3L each) = ₹12L
- Server for FL experiments = ₹2L
- Networking equipment = ₹1L

**Phase 2: Software & Tools** (₹3 lakhs)
- Cloud credits (AWS/Azure) = ₹1.5L/year
- Software licenses = ₹1L
- Dataset access = ₹0.5L

**Phase 3: Furniture & Setup** (₹4 lakhs)
- Workstations, chairs = ₹2L
- Storage, cooling = ₹1L
- Whiteboard, projector = ₹1L

**Phase 4: Safety & Compliance** (₹1 lakh)
- Fire safety equipment
- UPS and power backup
- Insurance

**Phase 5: Training & Documentation** (₹2 lakhs)
- Equipment training
- SOP development
- Lab manual creation

**Lab Protocols:**
- Equipment booking system
- Data management policy
- Safety procedures
- Publication guidelines`,
        roleOfHuman: ['Assess actual research needs', 'Negotiate equipment prices', 'Ensure safety compliance', 'Train team members', 'Establish lab culture'],
        roleOfAI: ['Suggest equipment lists', 'Provide budget templates', 'Recommend lab layout', 'Draft SOP templates', 'Identify safety requirements'],
        humanAIPerformance: `Human + AI reduces lab setup planning time by 50% (from 4 weeks to 2 weeks). AI provides equipment lists and templates, humans ensure practical feasibility. Cost savings: 10-15% through better planning and vendor comparison.`,
        ethicalConsiderations: ['Ensure equipment is actually needed', 'Plan for sustainable operations', 'Consider environmental impact', 'Ensure safety for all team members'],
        limitations: ['Cannot assess actual space requirements', 'Doesn\'t know local vendor prices', 'Cannot ensure compliance with local regulations', 'May suggest unavailable equipment']
    },
    {
        id: 'stage-11-trl-advancement',
        stage: 11,
        phase: 'Lab Development',
        stageName: 'Preliminary Research to TRL 1-3',
        subStage: 'Advancing Technology Readiness',
        prompt: `I need to advance my research from concept (TRL 1) to proof-of-concept (TRL 3).

Help me:
1. Understand TRL levels and requirements
2. Plan experiments for each TRL stage
3. Document progress systematically
4. Identify validation criteria
5. Prepare for next funding stage

Current TRL: [1/2/3]
Technology: [Your innovation]
Target TRL: [3/4]
Timeline: [Duration]`,
        guidelines: ['Understand TRL definitions clearly', 'Document all experiments', 'Define success criteria', 'Plan for validation', 'Prepare for scale-up'],
        sampleInput: `Advancing "Federated Learning Platform" from TRL 2 to TRL 3.

Current TRL: 2 (technology concept formulated)
Technology: FL platform for healthcare
Target TRL: 3 (proof-of-concept demonstrated)
Timeline: 12 months`,
        sampleOutput: `TRL Advancement Plan:

**TRL 1 → TRL 2** (Months 1-3)
- Literature review complete
- Technology concept formulated
- Basic principles validated
- Deliverable: Concept document

**TRL 2 → TRL 3** (Months 4-12)
- Develop proof-of-concept prototype
- Test with synthetic data
- Validate core functionality
- Document results
- Deliverable: Working prototype + validation report

**Validation Criteria for TRL 3:**
✓ Prototype demonstrates core functionality
✓ Works with test data
✓ Key technical risks addressed
✓ Performance metrics defined
✓ Documented and reproducible

**Next Steps (TRL 3 → TRL 4):**
- Test in relevant environment
- Validate with real data
- Address scalability
- Seek larger funding`,
        roleOfHuman: ['Conduct actual experiments', 'Validate technical feasibility', 'Document progress rigorously', 'Assess readiness for next TRL', 'Make go/no-go decisions'],
        roleOfAI: ['Explain TRL framework', 'Suggest validation criteria', 'Help plan experiments', 'Provide documentation templates', 'Identify gaps in advancement'],
        humanAIPerformance: `Human + AI accelerates TRL advancement planning by 40%. AI provides framework and templates, humans execute experiments. Success rate: 30% higher TRL advancement success with structured AI-assisted planning.`,
        ethicalConsiderations: ['Be honest about TRL level', 'Don\'t skip validation steps', 'Document failures as well as successes', 'Ensure reproducibility'],
        limitations: ['Cannot conduct actual experiments', 'Cannot validate technical claims', 'Doesn\'t know domain-specific TRL criteria', 'Cannot assess true readiness']
    },
    {
        id: 'stage-12-extended-lab',
        stage: 12,
        phase: 'Lab Development',
        stageName: 'Extended Lab with Major Funding',
        subStage: 'Scaling Research Operations',
        prompt: `I received major funding (₹1-5 crores) to scale my lab. Help me plan expansion.

Help me:
1. Plan lab expansion and equipment procurement
2. Hire and manage larger team (10-20 people)
3. Establish multiple research verticals
4. Set up collaborations and partnerships
5. Plan for sustainability and impact

Funding: [Amount received]
Current lab: [Current status]
Expansion goals: [What you want to achieve]
Timeline: [3-5 years]`,
        guidelines: ['Plan for sustainable operations', 'Diversify research portfolio', 'Build strong team', 'Establish industry partnerships', 'Plan for long-term impact'],
        sampleInput: `Received ₹3 crores from DST for "AI for Healthcare Lab" expansion.

Funding: ₹3 crores (5 years)
Current lab: 4 GPUs, 8 students, 2 projects
Expansion goals: 3 research verticals, 20 students, 10 industry projects
Timeline: 5 years`,
        sampleOutput: `5-Year Lab Expansion Plan:

**Year 1: Infrastructure** (₹80L)
- 20 GPU workstations
- High-performance computing cluster
- Expanded lab space (1500 sq ft)
- Advanced software licenses

**Year 2: Team Building** (₹60L)
- Hire 2 postdocs
- Recruit 10 PhD students
- 10 MTech students
- Lab manager

**Year 3: Research Verticals** (₹50L)
- Vertical 1: Medical imaging AI
- Vertical 2: Federated learning
- Vertical 3: Healthcare NLP
- Each with dedicated team

**Year 4: Partnerships** (₹50L)
- 5 hospital collaborations
- 3 industry partnerships
- 2 international collaborations
- Joint projects and funding

**Year 5: Sustainability** (₹60L)
- Consultancy projects
- Technology licensing
- Spin-off company
- Self-sustaining model

**Success Metrics:**
- 30+ publications
- 5+ patents
- 10+ industry projects
- ₹2 crores additional funding
- 15 PhDs graduated`,
        roleOfHuman: ['Make strategic decisions on lab direction', 'Hire and mentor team members', 'Build partnerships and collaborations', 'Ensure financial sustainability', 'Maintain research quality'],
        roleOfAI: ['Suggest expansion strategies', 'Provide organizational templates', 'Help with team structure', 'Identify partnership opportunities', 'Assist with planning and documentation'],
        humanAIPerformance: `Human + AI reduces expansion planning time by 45% (from 8 weeks to 4 weeks). AI provides structure and templates, humans make strategic decisions. Labs using AI-assisted planning report 25% better resource utilization and 30% higher team satisfaction.`,
        ethicalConsiderations: ['Ensure equitable team growth', 'Maintain research integrity at scale', 'Plan for environmental sustainability', 'Consider societal impact of expansion'],
        limitations: ['Cannot make hiring decisions', 'Doesn\'t know local market conditions', 'Cannot assess partnership quality', 'May not understand institutional constraints']
    },
    {
        id: 'stage-13-industry-collaboration',
        stage: 13,
        phase: 'Excellence',
        stageName: 'Tangible Outcomes & Industry Collaboration',
        subStage: 'Translating Research to Impact',
        prompt: `I want to translate my research into tangible outcomes and build industry collaborations.

Help me:
1. Identify commercialization opportunities
2. Structure industry collaboration agreements
3. Plan for technology transfer
4. Protect IP while collaborating
5. Measure and demonstrate impact

Research: [Your technology/innovation]
Current stage: [TRL level, publications, patents]
Industry interest: [Companies interested]
Goals: [Licensing/Spin-off/Consulting]`,
        guidelines: ['Protect IP before disclosing', 'Structure win-win agreements', 'Define clear deliverables', 'Plan for long-term relationship', 'Document impact metrics'],
        sampleInput: `Translating "Federated Learning Platform" to industry.

Research: FL platform, TRL 6, 15 papers, 2 patents filed
Current stage: Working with 5 hospitals, proven results
Industry interest: 3 healthtech companies, 2 hospitals
Goals: Licensing + consulting + potential spin-off`,
        sampleOutput: `Industry Collaboration Strategy:

**Phase 1: IP Protection** (Month 1-2)
- File remaining patents
- Document trade secrets
- Create licensing strategy
- Consult IP attorney

**Phase 2: Partnership Models** (Month 3-4)
- **Model A: Licensing**
  - License platform to healthtech companies
  - Royalty: 5-10% of revenue
  - Retain IP ownership

- **Model B: Joint Development**
  - Co-develop with hospital partners
  - Shared IP, shared revenue
  - 2-year collaboration agreement

- **Model C: Consulting**
  - Provide FL expertise
  - ₹5-10L per project
  - No IP transfer

**Phase 3: Pilot Projects** (Month 5-12)
- 3 industry pilot projects
- Demonstrate value
- Collect testimonials
- Refine technology

**Phase 4: Scale & Spin-off** (Year 2-3)
- Evaluate spin-off potential
- Secure seed funding
- Build founding team
- Launch company

**Impact Metrics:**
- Technology adopted by 10+ hospitals
- ₹50L+ revenue generated
- 100K+ patients benefited
- 5+ jobs created
- 3+ follow-on grants`,
        roleOfHuman: ['Negotiate partnership terms', 'Ensure IP protection', 'Maintain research quality', 'Build trust with industry', 'Make strategic decisions on commercialization'],
        roleOfAI: ['Suggest collaboration models', 'Provide agreement templates', 'Help identify opportunities', 'Assist with impact measurement', 'Improve pitch materials'],
        humanAIPerformance: `Human + AI accelerates industry collaboration by 35%. AI helps with documentation and strategy, humans build relationships. Success rate: 40% higher deal closure with AI-assisted preparation and structured approach.`,
        ethicalConsiderations: ['Ensure public benefit alongside profit', 'Maintain academic freedom', 'Disclose conflicts of interest', 'Protect student interests'],
        limitations: ['Cannot negotiate actual deals', 'Doesn\'t know market valuations', 'Cannot assess company credibility', 'May not understand legal implications']
    },
    {
        id: 'stage-14-center-of-excellence',
        stage: 14,
        phase: 'Excellence',
        stageName: 'Center of Excellence Establishment',
        subStage: 'Building National/International Recognition',
        prompt: `I want to establish a Center of Excellence in [research area].

Help me:
1. Define CoE vision, mission, and objectives
2. Plan infrastructure and resources
3. Build national/international partnerships
4. Create governance structure
5. Plan for sustainability and growth

Research area: [Your domain]
Current status: [Lab size, funding, recognition]
Target: [National/International CoE]
Timeline: [3-5 years]`,
        guidelines: ['Define clear focus area', 'Build strong advisory board', 'Secure long-term funding', 'Establish international partnerships', 'Plan for capacity building'],
        sampleInput: `Establishing "Center of Excellence in Healthcare AI" at REVA University.

Research area: AI for Healthcare
Current status: ₹5 crore lab, 25 students, 50+ papers, 5 patents
Target: National CoE recognized by Govt of India
Timeline: 3 years`,
        sampleOutput: `CoE Establishment Plan:

**Year 1: Foundation**
- Define CoE focus: Healthcare AI for Indian context
- Establish governance (Director, Advisory Board)
- Secure ₹10 crore funding (Govt + Industry)
- Recruit 5 faculty, 30 PhD students
- Set up state-of-art infrastructure

**Year 2: Recognition**
- Launch 5 flagship projects
- Build 10 hospital partnerships
- Establish 5 international collaborations
- Publish 30+ papers in top venues
- File 10 patents
- Apply for Govt CoE recognition

**Year 3: Excellence**
- Achieve national recognition
- Train 500+ professionals
- Impact 1M+ patients
- Generate ₹5 crore revenue
- Launch spin-off companies
- Host international conference

**CoE Components:**
1. **Research Verticals** (5)
   - Medical imaging AI
   - Clinical NLP
   - Federated learning
   - Drug discovery AI
   - Healthcare robotics

2. **Infrastructure**
   - 100 GPU cluster
   - Clinical data center
   - Innovation lab
   - Training center

3. **Partnerships**
   - 20 hospitals
   - 10 industry partners
   - 10 international universities
   - Govt agencies (ICMR, DST)

4. **Impact**
   - 100+ publications/year
   - 20+ patents/year
   - 50+ PhDs graduated
   - 1000+ professionals trained
   - 10+ technologies commercialized`,
        roleOfHuman: ['Provide visionary leadership', 'Build strategic partnerships', 'Secure major funding', 'Ensure research excellence', 'Create sustainable model'],
        roleOfAI: ['Suggest CoE structure', 'Provide planning templates', 'Help with proposal writing', 'Identify partnership opportunities', 'Assist with impact measurement'],
        humanAIPerformance: `Human + AI reduces CoE planning time by 40% (from 6 months to 3.5 months). AI provides structure and benchmarks, humans build relationships and secure funding. CoEs using AI-assisted planning report 30% faster establishment and 25% better initial outcomes.`,
        ethicalConsiderations: ['Ensure inclusive access', 'Maintain research integrity', 'Balance excellence with equity', 'Consider environmental sustainability'],
        limitations: ['Cannot secure actual funding', 'Doesn\'t know institutional politics', 'Cannot build partnerships', 'May not understand local context']
    },
    {
        id: 'stage-15-academic-program',
        stage: 15,
        phase: 'Excellence',
        stageName: 'Academic Program Launch',
        subStage: 'Creating Next Generation of Researchers',
        prompt: `I want to launch a new academic program (UG/PG/PhD) in [specialization].

Help me:
1. Design curriculum and course structure
2. Define learning outcomes and competencies
3. Plan faculty recruitment and training
4. Establish industry advisory board
5. Obtain regulatory approvals

Program: [UG/PG/PhD in specific area]
Specialization: [Your research domain]
Target: [Number of students per year]
Timeline: [Launch timeline]`,
        guidelines: ['Align with NEP 2020', 'Include industry inputs', 'Plan for accreditation', 'Ensure faculty expertise', 'Create unique value proposition'],
        sampleInput: `Launching "MTech in Healthcare AI" at REVA University.

Program: 2-year MTech
Specialization: AI for Healthcare
Target: 30 students/year
Timeline: Launch in 18 months`,
        sampleOutput: `MTech Program Launch Plan:

**Semester 1: Foundation**
- Advanced Machine Learning
- Healthcare Systems & Data
- Medical Image Analysis
- Research Methodology

**Semester 2: Specialization**
- Clinical NLP
- Federated Learning
- AI Ethics in Healthcare
- Elective 1

**Semester 3: Application**
- Healthcare AI Projects
- Industry Internship
- Elective 2
- Thesis Phase 1

**Semester 4: Research**
- Thesis Phase 2
- Publication Writing
- Technology Commercialization
- Capstone Project

**Unique Features:**
- Every student works on real hospital data
- Industry mentorship program
- Mandatory publication requirement
- Startup incubation support
- International collaboration opportunities

**Faculty Requirements:**
- 8 core faculty (PhD in AI/Healthcare)
- 10 adjunct faculty (industry experts)
- 5 visiting faculty (international)

**Infrastructure:**
- AI lab with 50 GPUs
- Clinical data center
- Innovation lab
- Telemedicine facility

**Industry Advisory Board:**
- 5 healthtech CEOs
- 3 hospital CMOs
- 2 govt representatives
- 2 international experts

**Approvals Needed:**
- University Academic Council
- AICTE approval
- NBA accreditation (after 2 years)

**Timeline:**
Month 1-6: Curriculum design + approvals
Month 7-12: Faculty recruitment + infrastructure
Month 13-18: Marketing + admissions
Month 19: Program launch`,
        roleOfHuman: ['Design innovative curriculum', 'Recruit excellent faculty', 'Build industry partnerships', 'Ensure regulatory compliance', 'Create program culture'],
        roleOfAI: ['Suggest curriculum structure', 'Provide course templates', 'Help with learning outcomes', 'Assist with documentation', 'Identify best practices'],
        humanAIPerformance: `Human + AI reduces program design time by 50% (from 12 months to 6 months). AI provides templates and benchmarks, humans ensure academic rigor. Programs using AI-assisted design report 35% better student outcomes and 40% higher industry satisfaction.`,
        ethicalConsiderations: ['Ensure curriculum relevance', 'Maintain academic standards', 'Provide equitable access', 'Balance theory and practice'],
        limitations: ['Cannot design actual courses', 'Doesn\'t know regulatory requirements', 'Cannot assess faculty quality', 'May not understand institutional context']
    },
]

// Helper functions
export function getPromptsByStage(stage: number): AIPrompt[] {
    return AI_RESEARCH_PROMPTS.filter(p => p.stage === stage)
}

export function getPromptsByPhase(phase: string): AIPrompt[] {
    return AI_RESEARCH_PROMPTS.filter(p => p.phase === phase)
}

export function getPromptById(id: string): AIPrompt | undefined {
    return AI_RESEARCH_PROMPTS.find(p => p.id === id)
}

export function getAllPrompts(): AIPrompt[] {
    return AI_RESEARCH_PROMPTS
}
