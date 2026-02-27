// Comprehensive Guide to Responding to Reviewer Comments
// How to handle peer review and avoid rejection after revisions

export interface ReviewerCommentType {
    id: string
    commentType: string
    description: string
    howToRespond: string[]
    examples: {
        reviewerComment: string
        badResponse: string
        goodResponse: string
        why: string
    }
    severity: 'Major' | 'Minor' | 'Critical'
}

export const REVIEWER_COMMENT_TYPES: ReviewerCommentType[] = [
    {
        id: 'insufficient-comparison',
        commentType: 'Insufficient Comparison with Baselines',
        description: 'Reviewer wants more comprehensive comparison with existing methods',
        severity: 'Major',
        howToRespond: [
            'Acknowledge the limitation',
            'Add comparisons with suggested methods',
            'Explain why certain methods were not included (if valid)',
            'Update results table with new comparisons',
            'Discuss implications of new comparisons',
            'Thank reviewer for the suggestion'
        ],
        examples: {
            reviewerComment: 'The authors only compared with 2 baselines. Recent methods like X, Y, and Z should be included for comprehensive evaluation.',
            badResponse: 'We believe our comparison is sufficient. Methods X, Y, Z are not relevant to our work.',
            goodResponse: 'Thank you for this valuable suggestion. We have added comparisons with methods X, Y, and Z as recommended. The updated Table 2 (page 8) shows that our method outperforms X by 5.2%, Y by 3.8%, and Z by 4.1%. We have also added discussion of these results in Section 4.2 (page 9). These additional comparisons strengthen our contribution and we appreciate the reviewer bringing this to our attention.',
            why: 'Good response: (1) Thanks reviewer, (2) Shows action taken, (3) Provides specific page numbers, (4) Summarizes new findings, (5) Acknowledges value of suggestion. Bad response: Defensive and dismissive.'
        }
    },
    {
        id: 'missing-ablation',
        commentType: 'Missing Ablation Study',
        description: 'Reviewer wants to understand contribution of individual components',
        severity: 'Major',
        howToRespond: [
            'Conduct systematic ablation study',
            'Remove one component at a time',
            'Measure impact on performance',
            'Create ablation table',
            'Discuss which components contribute most',
            'Explain design choices based on ablation'
        ],
        examples: {
            reviewerComment: 'The proposed method has multiple components (attention mechanism, multi-scale features, data augmentation). An ablation study is needed to understand the contribution of each component.',
            badResponse: 'All components are necessary for the method to work.',
            goodResponse: 'We agree that ablation study is essential. We have added Table 4 (page 10) showing systematic ablation results. Removing attention mechanism reduces accuracy by 3.2%, removing multi-scale features reduces it by 2.1%, and removing data augmentation reduces it by 1.8%. The full model achieves 96.2% accuracy. This analysis (discussed in Section 4.3, page 10) shows that attention mechanism contributes most significantly, validating our design choice. We thank the reviewer for this important suggestion.',
            why: 'Good response: Provides specific numbers, creates new table, discusses implications, validates design choices. Shows thorough analysis rather than defensive stance.'
        }
    },
    {
        id: 'statistical-significance',
        commentType: 'Missing Statistical Significance Tests',
        description: 'Reviewer wants proof that improvements are statistically significant',
        severity: 'Major',
        howToRespond: [
            'Perform appropriate statistical tests (t-test, ANOVA, etc.)',
            'Report p-values and confidence intervals',
            'Run experiments multiple times with different seeds',
            'Add error bars to figures',
            'Discuss statistical significance in results',
            'Use standard significance levels (p < 0.05, 0.01, 0.001)'
        ],
        examples: {
            reviewerComment: 'The authors claim their method is better, but no statistical significance tests are provided. Are the improvements statistically significant?',
            badResponse: 'The improvements are clearly significant as shown in Table 2.',
            goodResponse: 'Thank you for pointing this out. We have now run all experiments 5 times with different random seeds and performed paired t-tests. The updated Table 2 (page 8) includes mean ± standard deviation for all methods. Our method achieves 96.2 ± 0.3% accuracy compared to the best baseline at 90.1 ± 0.5% (p < 0.001, paired t-test). All improvements are statistically significant at p < 0.001 level. We have added this analysis to Section 4.1 (page 8) and included error bars in Figure 3 (page 9).',
            why: 'Good response: Provides specific statistical tests, reports p-values, shows multiple runs, adds error bars. Demonstrates rigor rather than making unsupported claims.'
        }
    },
    {
        id: 'unclear-methodology',
        commentType: 'Unclear or Incomplete Methodology',
        description: 'Reviewer cannot reproduce the work due to missing details',
        severity: 'Major',
        howToRespond: [
            'Add all missing hyperparameters',
            'Specify hardware and software versions',
            'Describe preprocessing steps in detail',
            'Provide training time and convergence criteria',
            'Add pseudocode or algorithm box if helpful',
            'Offer to share code repository',
            'Include supplementary material with full details'
        ],
        examples: {
            reviewerComment: 'The methodology section lacks important details. What learning rate was used? How many epochs? What optimizer? What batch size? These details are essential for reproducibility.',
            badResponse: 'We used standard hyperparameters. Details can be found in our code.',
            goodResponse: 'We apologize for the incomplete details. We have significantly expanded Section 3.3 (page 6) to include all hyperparameters: learning rate = 0.001 with cosine annealing, Adam optimizer (β1=0.9, β2=0.999), batch size = 32, 100 epochs with early stopping (patience=10), weight decay = 0.0001. Training took 8 hours on NVIDIA V100 GPU. We have also added Table 1 (page 6) summarizing all hyperparameters and created a supplementary document with complete training details. Code is available at github.com/user/repo. We thank the reviewer for emphasizing reproducibility.',
            why: 'Good response: Provides complete details, creates summary table, offers code, acknowledges importance of reproducibility. Shows commitment to open science.'
        }
    },
    {
        id: 'limited-dataset',
        commentType: 'Limited Dataset or Generalization Concerns',
        description: 'Reviewer questions if results generalize beyond the specific dataset',
        severity: 'Major',
        howToRespond: [
            'Test on additional datasets if possible',
            'Discuss dataset limitations honestly',
            'Explain why dataset is representative',
            'Perform cross-dataset evaluation',
            'Discuss generalization in limitations section',
            'Suggest future work on larger datasets'
        ],
        examples: {
            reviewerComment: 'The method is only evaluated on one dataset with 5,000 samples. Can the authors test on additional datasets to demonstrate generalization?',
            badResponse: 'Our dataset is sufficient for this study. Testing on more datasets is future work.',
            goodResponse: 'This is an excellent point. We have now evaluated our method on two additional publicly available datasets: Dataset B (10,000 samples) and Dataset C (8,000 samples). The updated Table 3 (page 9) shows that our method achieves 94.8% on Dataset B and 95.1% on Dataset C, compared to original 96.2% on Dataset A. The consistent performance across three diverse datasets (different sources, demographics, and acquisition protocols) demonstrates good generalization. We have added cross-dataset analysis in Section 4.4 (page 10) and discussed implications. If additional datasets are suggested, we are happy to evaluate further.',
            why: 'Good response: Takes action by testing on more datasets, shows consistent performance, discusses generalization, remains open to more evaluation. Demonstrates thoroughness.'
        }
    },
    {
        id: 'writing-quality',
        commentType: 'Writing Quality Issues',
        description: 'Reviewer finds writing unclear, verbose, or grammatically incorrect',
        severity: 'Minor',
        howToRespond: [
            'Get professional editing if needed',
            'Rewrite unclear sections',
            'Simplify complex sentences',
            'Fix all grammatical errors',
            'Improve figure captions',
            'Add transitions between sections',
            'Have native speaker proofread'
        ],
        examples: {
            reviewerComment: 'The paper has numerous grammatical errors and unclear sentences. Section 3 is particularly difficult to follow. The writing needs significant improvement.',
            badResponse: 'We have fixed some typos.',
            goodResponse: 'We sincerely apologize for the writing quality issues. We have completely revised the manuscript with help from a professional editing service. Section 3 has been rewritten for clarity with simplified sentences and better organization. We have also: (1) Fixed all grammatical errors throughout, (2) Improved all figure captions for clarity, (3) Added transition sentences between sections, (4) Simplified technical jargon where possible. The revised manuscript has been proofread by two native English speakers. We believe the writing quality is now significantly improved and hope it meets the journal standards.',
            why: 'Good response: Takes responsibility, shows concrete actions (professional editing, native speakers), lists specific improvements, demonstrates commitment to quality.'
        }
    },
    {
        id: 'missing-related-work',
        commentType: 'Missing Important Related Work',
        description: 'Reviewer identifies key papers that should be cited and discussed',
        severity: 'Minor',
        howToRespond: [
            'Add suggested citations',
            'Read and understand the papers',
            'Discuss how they relate to your work',
            'Compare your results with theirs if applicable',
            'Update related work section',
            'Thank reviewer for the references'
        ],
        examples: {
            reviewerComment: 'The authors missed several important recent papers: [Paper A], [Paper B], and [Paper C] are highly relevant and should be discussed.',
            badResponse: 'We have added these citations.',
            goodResponse: 'Thank you for bringing these important papers to our attention. We have carefully read all three papers and added substantial discussion: (1) Paper A [new ref 15] proposed a similar attention mechanism but for different domain - we have compared our approach in Section 2.2 (page 4) and Table 2 (page 8), showing our method achieves 2.3% higher accuracy. (2) Paper B [new ref 23] addresses related problem - we discuss differences in problem formulation in Section 2.3 (page 5). (3) Paper C [new ref 31] provides theoretical analysis - we reference this in our discussion of why our method works (Section 5.1, page 11). These additions strengthen our literature review and positioning.',
            why: 'Good response: Shows papers were actually read and understood, integrates them meaningfully into paper, compares when appropriate, strengthens positioning.'
        }
    },
    {
        id: 'overstated-claims',
        commentType: 'Overstated Claims or Conclusions',
        description: 'Reviewer thinks claims are too strong given the evidence',
        severity: 'Major',
        howToRespond: [
            'Tone down strong claims',
            'Add qualifiers (e.g., "suggests", "indicates")',
            'Acknowledge limitations',
            'Be more precise with language',
            'Remove superlatives ("best", "revolutionary")',
            'Ensure claims match evidence'
        ],
        examples: {
            reviewerComment: 'The authors claim their method is "the best" and will "revolutionize" the field. These claims are too strong. The method shows good results but has limitations that are not adequately discussed.',
            badResponse: 'Our results clearly show we have the best method.',
            goodResponse: 'We appreciate this feedback and agree our claims were too strong. We have revised the manuscript to: (1) Removed superlatives like "best" and "revolutionary", (2) Changed "our method is superior" to "our method shows improvements", (3) Added comprehensive limitations section (Section 5.3, page 12) discussing: dataset size constraints, computational requirements, and failure cases, (4) Toned down abstract and conclusion to match evidence. We now present our work as a solid contribution with specific improvements (6-8% accuracy gain) rather than making broad claims. Thank you for helping us maintain scientific rigor.',
            why: 'Good response: Acknowledges overstatement, shows specific revisions, adds limitations, maintains scientific tone. Demonstrates maturity and honesty.'
        }
    },
    {
        id: 'missing-error-analysis',
        commentType: 'Missing Error Analysis or Failure Cases',
        description: 'Reviewer wants to understand when and why the method fails',
        severity: 'Minor',
        howToRespond: [
            'Analyze failure cases systematically',
            'Show examples of failures',
            'Discuss why failures occur',
            'Quantify failure rates',
            'Suggest how to address failures',
            'Add error analysis section'
        ],
        examples: {
            reviewerComment: 'The paper only shows successful cases. What about failure cases? When does the method not work well? Error analysis is needed.',
            badResponse: 'Our method works well in most cases. Failures are rare.',
            goodResponse: 'Excellent point. We have added comprehensive error analysis in Section 4.5 (page 11). We identified three main failure modes: (1) Images with severe artifacts (8% of test set) - accuracy drops to 82%, (2) Rare disease subtypes (<1% prevalence) - sensitivity is 76%, (3) Poor image quality (low resolution, motion blur) - 15% error rate. Figure 6 (page 12) shows example failure cases with analysis. We discuss potential solutions: preprocessing for artifacts, data augmentation for rare cases, and quality filtering. This analysis helps understand method limitations and guides future improvements. We thank the reviewer for this important suggestion.',
            why: 'Good response: Provides systematic analysis, quantifies failures, shows examples, discusses causes and solutions. Demonstrates thorough understanding of method limitations.'
        }
    }
]

// Response strategies for different reviewer tones
export interface ResponseStrategy {
    reviewerTone: string
    characteristics: string[]
    responseApproach: string[]
    examplePhrases: string[]
}

export const RESPONSE_STRATEGIES: ResponseStrategy[] = [
    {
        reviewerTone: 'Constructive and Supportive',
        characteristics: [
            'Provides specific suggestions',
            'Acknowledges strengths',
            'Offers helpful references',
            'Wants to see paper succeed'
        ],
        responseApproach: [
            'Thank them genuinely',
            'Implement all reasonable suggestions',
            'Show appreciation for their time',
            'Explain if you cannot implement something',
            'Maintain positive, collaborative tone'
        ],
        examplePhrases: [
            'Thank you for this valuable suggestion...',
            'We appreciate your constructive feedback...',
            'Your suggestion has significantly improved...',
            'We are grateful for your thorough review...',
            'This is an excellent point that we had not considered...'
        ]
    },
    {
        reviewerTone: 'Critical but Fair',
        characteristics: [
            'Points out real weaknesses',
            'Demands rigor',
            'Questions methodology',
            'Expects high standards'
        ],
        responseApproach: [
            'Address every concern seriously',
            'Provide detailed responses with evidence',
            'Acknowledge valid criticisms',
            'Show you have done additional work',
            'Maintain professional, respectful tone'
        ],
        examplePhrases: [
            'We acknowledge this limitation and have...',
            'This is a valid concern. We have addressed it by...',
            'We agree that this needed clarification...',
            'Thank you for identifying this issue...',
            'We have conducted additional experiments to address...'
        ]
    },
    {
        reviewerTone: 'Harsh or Dismissive',
        characteristics: [
            'Uses strong negative language',
            'Questions novelty or significance',
            'May seem unfair or biased',
            'Focuses on weaknesses only'
        ],
        responseApproach: [
            'Stay calm and professional',
            'Do not be defensive',
            'Address substance, ignore tone',
            'Provide evidence for your claims',
            'Appeal to editor if truly unfair',
            'Consider if criticism has merit'
        ],
        examplePhrases: [
            'We respectfully disagree with this assessment because...',
            'We understand the concern, however...',
            'While we appreciate the feedback, we would like to clarify...',
            'We have provided additional evidence to support...',
            'We believe this concern is addressed by...'
        ]
    },
    {
        reviewerTone: 'Confused or Misunderstood',
        characteristics: [
            'Misinterprets your method',
            'Asks questions answered in paper',
            'Seems to have skimmed',
            'Makes incorrect assumptions'
        ],
        responseApproach: [
            'Clarify politely without being condescending',
            'Improve clarity in paper',
            'Add examples or diagrams',
            'Reorganize if needed',
            'Thank them for opportunity to clarify'
        ],
        examplePhrases: [
            'We apologize for the confusion. To clarify...',
            'We have revised Section X to make this clearer...',
            'Perhaps we did not explain this well. We have now...',
            'Thank you for this question. We have added...',
            'We have reorganized this section to improve clarity...'
        ]
    }
]


// Step-by-step revision process
export interface RevisionStep {
    step: number
    title: string
    description: string
    timeEstimate: string
    tasks: string[]
    tips: string[]
}

export const REVISION_PROCESS: RevisionStep[] = [
    {
        step: 1,
        title: 'Initial Reading and Emotional Processing',
        description: 'Read reviews, process emotions, and prepare for constructive response',
        timeEstimate: '1-2 days',
        tasks: [
            'Read all reviews completely',
            'Take a break if reviews are harsh (24-48 hours)',
            'Read again with fresh perspective',
            'Identify common themes across reviewers',
            'Categorize comments: Major, Minor, Easy, Hard',
            'Discuss with co-authors'
        ],
        tips: [
            'Do not respond immediately if upset',
            'Remember: reviewers are trying to improve your paper',
            'Focus on substance, not tone',
            'Most papers get major revisions - it is normal',
            'Rejection is not personal'
        ]
    },
    {
        step: 2,
        title: 'Create Response Document',
        description: 'Set up organized response document with all comments',
        timeEstimate: '2-3 hours',
        tasks: [
            'Create response letter document',
            'Copy all reviewer comments',
            'Number each comment (R1.1, R1.2, R2.1, etc.)',
            'Add space for response under each comment',
            'Create summary table of changes',
            'Set up revision tracking in manuscript'
        ],
        tips: [
            'Use clear formatting (bold for comments, regular for responses)',
            'Keep original comment text unchanged',
            'Number comments for easy reference',
            'Use track changes in manuscript',
            'Create backup of original submission'
        ]
    },
    {
        step: 3,
        title: 'Plan Revisions',
        description: 'Prioritize and plan how to address each comment',
        timeEstimate: '1 day',
        tasks: [
            'Categorize each comment: Accept, Partially Accept, Disagree',
            'Identify comments requiring new experiments',
            'Estimate time for each revision',
            'Assign tasks to co-authors',
            'Create revision timeline',
            'Identify potential challenges'
        ],
        tips: [
            'Address major concerns first',
            'Be realistic about what can be done',
            'Plan for 2-4 weeks of revision work',
            'Some comments may require saying "no" politely',
            'Discuss difficult comments with senior colleagues'
        ]
    },
    {
        step: 4,
        title: 'Conduct Additional Experiments',
        description: 'Perform new experiments requested by reviewers',
        timeEstimate: '1-3 weeks',
        tasks: [
            'Run additional baseline comparisons',
            'Perform ablation studies',
            'Test on additional datasets',
            'Conduct statistical significance tests',
            'Analyze failure cases',
            'Document all new results'
        ],
        tips: [
            'Keep detailed notes of all experiments',
            'Save all data and code',
            'Create new figures/tables as needed',
            'Ensure reproducibility',
            'Run experiments multiple times for robustness'
        ]
    },
    {
        step: 5,
        title: 'Revise Manuscript',
        description: 'Make all changes to the manuscript',
        timeEstimate: '1-2 weeks',
        tasks: [
            'Revise text based on comments',
            'Add new sections if needed',
            'Update all figures and tables',
            'Improve clarity where confused',
            'Add missing citations',
            'Strengthen weak sections',
            'Proofread thoroughly'
        ],
        tips: [
            'Use track changes to show modifications',
            'Highlight major changes in color',
            'Update figure/table numbers if adding new ones',
            'Ensure consistency throughout',
            'Have co-authors review changes'
        ]
    },
    {
        step: 6,
        title: 'Write Response Letter',
        description: 'Craft detailed, professional response to each comment',
        timeEstimate: '3-5 days',
        tasks: [
            'Write response to each comment',
            'Provide specific page/line numbers',
            'Quote relevant text from revised manuscript',
            'Explain what was changed and why',
            'Thank reviewers for suggestions',
            'Be respectful even if disagreeing'
        ],
        tips: [
            'Start with summary of major changes',
            'Use consistent formatting',
            'Be specific and concrete',
            'Show evidence of changes',
            'Maintain professional tone throughout',
            'Proofread response letter carefully'
        ]
    },
    {
        step: 7,
        title: 'Final Review and Submission',
        description: 'Final checks before resubmission',
        timeEstimate: '2-3 days',
        tasks: [
            'All co-authors review revised manuscript',
            'All co-authors review response letter',
            'Check all page/line numbers are correct',
            'Verify all changes are tracked',
            'Ensure all comments are addressed',
            'Prepare clean version (no track changes)',
            'Submit before deadline'
        ],
        tips: [
            'Do not miss revision deadline',
            'Submit both tracked and clean versions',
            'Include detailed response letter',
            'Double-check all file uploads',
            'Save confirmation email',
            'Notify co-authors of submission'
        ]
    }
]

// Common mistakes in responding to reviewers
export const RESPONSE_MISTAKES = [
    {
        mistake: 'Being Defensive',
        description: 'Arguing with reviewers or dismissing their concerns',
        example: 'The reviewer clearly did not read our paper carefully. This is already explained in Section 3.',
        betterApproach: 'We apologize if this was unclear. We have revised Section 3 to make this point more explicit (page 6, lines 145-152).'
    },
    {
        mistake: 'Vague Responses',
        description: 'Not providing specific details about changes made',
        example: 'We have addressed this comment.',
        betterApproach: 'We have added comparison with Method X in Table 2 (page 8), showing our method achieves 3.2% higher accuracy. This is discussed in Section 4.2 (page 9, lines 234-241).'
    },
    {
        mistake: 'Ignoring Comments',
        description: 'Not responding to some comments',
        example: '[No response provided]',
        betterApproach: 'Every single comment must be addressed, even if briefly. If you disagree, explain why respectfully.'
    },
    {
        mistake: 'Making Excuses',
        description: 'Explaining why you could not do something instead of doing it',
        example: 'We did not have time to run additional experiments.',
        betterApproach: 'We have now conducted the suggested experiments (results in Table 4, page 10) which strengthen our conclusions.'
    },
    {
        mistake: 'Minimal Changes',
        description: 'Making superficial changes without addressing core concerns',
        example: 'We have added a sentence about this.',
        betterApproach: 'We have substantially revised Section 4 (pages 8-10) to address this concern, including new experiments, analysis, and discussion.'
    },
    {
        mistake: 'No Evidence of Changes',
        description: 'Claiming changes were made without showing where',
        example: 'We have improved the writing quality.',
        betterApproach: 'We have revised the manuscript with professional editing service. Major changes include: Section 3 rewritten (pages 5-7), all figure captions improved, transitions added between sections.'
    }
]

// Response letter template
export const RESPONSE_LETTER_TEMPLATE = `
Dear Editor and Reviewers,

We thank the editor and reviewers for their thoughtful and constructive feedback on our manuscript. We have carefully considered all comments and made substantial revisions to address them. Below, we provide point-by-point responses to each comment, with changes highlighted in the revised manuscript using track changes.

SUMMARY OF MAJOR CHANGES:
1. [Major change 1 - e.g., Added comparison with 5 additional baseline methods]
2. [Major change 2 - e.g., Conducted ablation study showing contribution of each component]
3. [Major change 3 - e.g., Tested on two additional datasets to demonstrate generalization]
4. [Major change 4 - e.g., Added statistical significance tests with p-values]
5. [Major change 5 - e.g., Substantially revised Section 3 for clarity]

We believe these revisions have significantly strengthened the manuscript and hope it now meets the standards for publication in [Journal Name].

---

REVIEWER 1:

Comment 1.1: [Copy exact comment from reviewer]

Response: [Your detailed response with specific page/line numbers]

Comment 1.2: [Next comment]

Response: [Your response]

---

REVIEWER 2:

Comment 2.1: [Copy exact comment]

Response: [Your response]

---

REVIEWER 3:

[Continue for all reviewers]

---

We thank the reviewers again for their valuable feedback and hope the revised manuscript addresses all concerns.

Sincerely,
[Author names]
`

// Helper functions
export function getCommentTypeById(id: string): ReviewerCommentType | undefined {
    return REVIEWER_COMMENT_TYPES.find(type => type.id === id)
}

export function getRevisionStepByNumber(step: number): RevisionStep | undefined {
    return REVISION_PROCESS.find(s => s.step === step)
}

export function getResponseStrategyByTone(tone: string): ResponseStrategy | undefined {
    return RESPONSE_STRATEGIES.find(strategy => strategy.reviewerTone === tone)
}

export function getTotalRevisionTime(): string {
    const totalDays = REVISION_PROCESS.reduce((total, step) => {
        const match = step.timeEstimate.match(/(\d+)-?(\d+)?/)
        if (match) {
            const min = parseInt(match[1])
            const max = match[2] ? parseInt(match[2]) : min
            return total + (min + max) / 2
        }
        return total
    }, 0)
    return `${Math.round(totalDays)} days (${Math.round(totalDays / 7)} weeks)`
}
