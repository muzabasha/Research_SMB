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
