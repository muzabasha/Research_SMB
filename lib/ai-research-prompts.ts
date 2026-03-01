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
        prompt: `I am a [your role: student/faculty/researcher] interested in exploring research domains in [broad field: e.g., Computer Science, Biology, Engineering]. 

Please help me:
1. Identify 5 emerging research domains in this field
2. For each domain, provide:
   - Brief description (2-3 sentences)
   - Current trends and hot topics
   - Potential research gaps
   - Required foundational knowledge
3. Suggest which domain might be suitable for a [beginner/intermediate/advanced] researcher

Context: [Add any specific interests, background, or constraints]`,
        guidelines: [
            'Replace placeholders with your specific information',
            'Be specific about your background and interests',
            'Mention any constraints (time, resources, expertise)',
            'Ask follow-up questions to narrow down domains',
            'Verify AI suggestions with recent literature'
        ],
        sampleInput: `I am a final year Computer Science student interested in exploring research domains in Artificial Intelligence. 

Please help me identify 5 emerging research domains, provide descriptions, trends, gaps, and required knowledge for each.

Context: I have strong programming skills in Python, basic knowledge of machine learning, and interest in healthcare applications.`,
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
        prompt: `I am conducting a literature review on [specific research topic]. 

Please help me:
1. Generate 10 relevant search queries for academic databases
2. Suggest key authors and research groups in this area
3. Identify seminal papers (foundational works) I should read first
4. Recommend recent survey/review papers (last 2-3 years)
5. Suggest related keywords and synonyms for comprehensive search

My research focus: [Describe your specific angle or research question]
Target: [Number] papers to review`,
        guidelines: [
            'Start with broad queries, then narrow down',
            'Use AI-suggested keywords in actual database searches',
            'Verify author suggestions by checking their recent publications',
            'Always read the actual papers - do not rely on AI summaries',
            'Use AI to organize and categorize found papers'
        ],
        sampleInput: `I am conducting a literature review on "Explainable AI for Medical Image Diagnosis". 

Please help me generate search queries, suggest key authors, identify seminal papers, recommend recent surveys, and suggest related keywords.

My research focus: Understanding how XAI techniques improve trust and adoption of AI in radiology
Target: 50 papers to review`,
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
        prompt: `I have read [number] papers on [research topic]. Help me identify meaningful research gaps.

Please analyze and suggest:
1. 5-7 potential research gaps based on common patterns in literature
2. For each gap, classify the type: Knowledge gap, Method gap, Theory gap, Application gap, or Population gap
3. Evaluate each gap using NIFI criteria:
   - Novel: Is it truly unexplored?
   - Important: Does it matter to the field?
   - Feasible: Can it be done with available resources?
   - Interesting: Does it excite researchers?
4. Suggest validation methods for each gap
5. Recommend which gap might be most suitable for a [PhD/Masters/Faculty] researcher

Context: [Describe your literature review findings, common limitations you noticed, and your research interests]`,
        guidelines: [
            'Provide specific examples from papers you read',
            'Mention limitations and future work sections you found',
            'Be honest about your resources and constraints',
            'Ask AI to help validate if gap is truly novel',
            'Discuss top 3 gaps with your supervisor before finalizing'
        ],
        sampleInput: `I have read 25 papers on "Federated Learning for Healthcare". Help me identify meaningful research gaps.

Context: Most papers focus on image data (X-rays, MRIs). Few address multi-modal data (combining images, text, genomics). Common limitations: non-IID data distribution, communication overhead, privacy-utility tradeoff. I'm a PhD student with strong ML background and access to healthcare datasets.`,
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
        prompt: `I am implementing my research on [research topic]. Help me plan and execute systematically.

Please help me:
1. Break down my research into 2-week sprints with clear deliverables
2. Suggest experimental design and methodology
3. Identify potential technical challenges and solutions
4. Recommend tools, libraries, and frameworks
5. Create a data collection and analysis plan
6. Suggest documentation practices for reproducibility

My research goal: [Describe your research objective]
Timeline: [Duration available]
Resources: [Computational resources, datasets, tools available]
Background: [Your technical skills and experience]`,
        guidelines: [
            'Be specific about your research methodology',
            'Mention any constraints (time, compute, data)',
            'Ask for code examples or pseudocode when needed',
            'Request help with experimental design validation',
            'Use AI for debugging and optimization suggestions'
        ],
        sampleInput: `I am implementing "Multi-Modal Federated Learning for Healthcare Diagnosis". Help me plan execution.

Research goal: Develop FL system that handles images + text + genomic data from 5 hospitals
Timeline: 8 months
Resources: 4 GPUs, synthetic healthcare datasets, Python/PyTorch
Background: Strong ML, basic distributed systems, no FL experience`,
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
        prompt: `I need to write a research paper on [research topic] for [target venue: conference/journal name].

Please help me:
1. Suggest paper structure and section breakdown
2. Provide writing tips for each section (Abstract, Introduction, Related Work, Methodology, Results, Discussion, Conclusion)
3. Recommend how to present my results effectively
4. Suggest common mistakes to avoid
5. Provide a writing timeline (weeks to complete each section)

My research: [Brief description of your work]
Target venue: [Conference/Journal name and typical paper length]
Deadline: [Submission deadline]
Experience: [First paper / Have written X papers before]`,
        guidelines: [
            'Specify your target venue for tailored advice',
            'Mention your key results and contributions',
            'Ask for help with specific sections you struggle with',
            'Request examples of good vs bad writing',
            'Use AI to improve clarity and flow of your drafts'
        ],
        sampleInput: `I need to write a research paper on "Multi-Modal Federated Learning for Healthcare" for NeurIPS (8 pages).

My research: Developed FL system handling images+text+genomics from 5 hospitals. Achieved 15% accuracy improvement over single-modal FL with 40% less communication.
Target venue: NeurIPS (top ML conference, 8 pages)
Deadline: 3 months from now
Experience: First paper`,
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
        prompt: `I want to file a patent for my research innovation: [brief description].

Help me:
1. Determine if my innovation is patentable (novelty, non-obviousness, utility)
2. Identify the type of patent needed (utility, design, provisional)
3. Draft patent claims (independent and dependent)
4. Describe the invention clearly for patent application
5. Identify prior art that might affect patentability

My innovation: [Describe your technical solution]
Field: [Technology domain]
Current stage: [Prototype/Concept/Tested]`,
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
