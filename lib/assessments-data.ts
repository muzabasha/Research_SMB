// Assessment Questions for Each Stage

export interface AssessmentQuestion {
    id: string
    stageId: number
    type: 'pre' | 'post'
    question: string
    options: AssessmentOption[]
}

export interface AssessmentOption {
    id: string
    text: string
    emoji: string
    score: number
    feedback: string
}

export const ASSESSMENTS: AssessmentQuestion[] = [
    // Stage 1: Domain Knowledge Discovery
    {
        id: 'stage1-pre',
        stageId: 1,
        type: 'pre',
        question: 'How do you currently feel about choosing a research domain?',
        options: [
            {
                id: 'a',
                text: 'Completely lost, no idea where to start',
                emoji: '😰',
                score: 1,
                feedback: 'That\'s okay! This activity will help you explore and discover your passion.'
            },
            {
                id: 'b',
                text: 'Have vague interests, not sure if they\'re research-worthy',
                emoji: '🤔',
                score: 2,
                feedback: 'Good start! We\'ll help you validate and refine those interests.'
            },
            {
                id: 'c',
                text: 'Know 1-2 domains, want to explore more',
                emoji: '📚',
                score: 3,
                feedback: 'Great! Exploring multiple options will help you make the best choice.'
            },
            {
                id: 'd',
                text: 'Clear about my domain, ready to dive deep',
                emoji: '🎯',
                score: 4,
                feedback: 'Excellent! This activity will validate your choice and deepen your understanding.'
            }
        ]
    },
    {
        id: 'stage1-post',
        stageId: 1,
        type: 'post',
        question: 'What will you DO THIS WEEK for domain exploration?',
        options: [
            {
                id: 'a',
                text: 'Maybe think about domains...',
                emoji: '🤷',
                score: 1,
                feedback: 'Thinking is good, but action is better! Set a specific time to explore domains.'
            },
            {
                id: 'b',
                text: 'Read 5 papers in my chosen domain',
                emoji: '📖',
                score: 3,
                feedback: 'Good action plan! Reading papers will deepen your domain knowledge.'
            },
            {
                id: 'c',
                text: 'Talk to 2 researchers in my domain',
                emoji: '💬',
                score: 4,
                feedback: 'Excellent! Talking to researchers provides invaluable insights and connections.'
            },
            {
                id: 'd',
                text: 'Identify 3 specific problems to explore',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! Identifying specific problems shows you\'re ready for the next stage.'
            }
        ]
    },
    // Stage 2: Research Article Reading
    {
        id: 'stage2-pre',
        stageId: 2,
        type: 'pre',
        question: 'What\'s your current relationship with research papers?',
        options: [
            {
                id: 'a',
                text: 'Never read a full paper, too intimidating',
                emoji: '😰',
                score: 1,
                feedback: 'No worries! We\'ll teach you strategic reading techniques that make it easy.'
            },
            {
                id: 'b',
                text: 'Read abstracts, skip the rest',
                emoji: '🤷',
                score: 2,
                feedback: 'That\'s a start! We\'ll show you how to efficiently read the whole paper.'
            },
            {
                id: 'c',
                text: 'Read papers but don\'t understand everything',
                emoji: '📚',
                score: 3,
                feedback: 'Good progress! We\'ll help you understand and critically analyze papers.'
            },
            {
                id: 'd',
                text: 'Read papers critically, take notes',
                emoji: '📝',
                score: 4,
                feedback: 'Excellent! This activity will refine your skills and introduce advanced techniques.'
            }
        ]
    },
    {
        id: 'stage2-post',
        stageId: 2,
        type: 'post',
        question: 'What will you DO THIS MONTH for paper reading?',
        options: [
            {
                id: 'a',
                text: 'Download some papers...',
                emoji: '📥',
                score: 1,
                feedback: 'Downloading is step 1, but reading is what matters! Set a reading schedule.'
            },
            {
                id: 'b',
                text: 'Read 10 papers with basic notes',
                emoji: '📝',
                score: 3,
                feedback: 'Good plan! Consistent reading with notes builds strong foundation.'
            },
            {
                id: 'c',
                text: 'Read 20 papers with gap matrix',
                emoji: '📊',
                score: 4,
                feedback: 'Excellent! Gap matrix will prepare you perfectly for Stage 3.'
            },
            {
                id: 'd',
                text: 'Read 30 papers + discuss with peers weekly',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! Peer discussion multiplies learning. You\'re on track for success!'
            }
        ]
    },
    // Stage 3: Research Gap Identification
    {
        id: 'stage3-pre',
        stageId: 3,
        type: 'pre',
        question: 'How do you currently identify research gaps?',
        options: [
            {
                id: 'a',
                text: 'No idea what a research gap is',
                emoji: '😰',
                score: 1,
                feedback: 'Perfect timing! This activity will teach you exactly what gaps are and how to find them.'
            },
            {
                id: 'b',
                text: 'I see gaps but not sure if they\'re valid',
                emoji: '🤔',
                score: 2,
                feedback: 'Good observation skills! We\'ll teach you validation criteria to confirm your gaps.'
            },
            {
                id: 'c',
                text: 'I can identify gaps from papers',
                emoji: '📚',
                score: 3,
                feedback: 'Great skill! We\'ll help you validate and prioritize those gaps.'
            },
            {
                id: 'd',
                text: 'I have a validated gap ready to work on',
                emoji: '🎯',
                score: 4,
                feedback: 'Excellent! This activity will help you refine it and prepare for implementation.'
            }
        ]
    },
    {
        id: 'stage3-post',
        stageId: 3,
        type: 'post',
        question: 'What will you DO THIS WEEK for gap identification?',
        options: [
            {
                id: 'a',
                text: 'Think about possible gaps...',
                emoji: '🤔',
                score: 1,
                feedback: 'Thinking is good, but documenting is better! Write down your gap ideas.'
            },
            {
                id: 'b',
                text: 'List 5 potential gaps',
                emoji: '📝',
                score: 3,
                feedback: 'Good start! Having multiple options helps you choose the best one.'
            },
            {
                id: 'c',
                text: 'Validate 3 gaps with supervisor',
                emoji: '💬',
                score: 4,
                feedback: 'Excellent! Supervisor validation ensures you\'re on the right track.'
            },
            {
                id: 'd',
                text: 'Choose 1 gap and start working!',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re ready to move to Stage 4: Research Implementation!'
            }
        ]
    }
]

export function getAssessmentsByStage(stageId: number, type: 'pre' | 'post'): AssessmentQuestion | undefined {
    return ASSESSMENTS.find(a => a.stageId === stageId && a.type === type)
}

export function calculateTransformationScore(preScore: number, postScore: number): {
    score: number
    level: string
    message: string
} {
    const improvement = postScore - preScore
    const percentage = (improvement / 3) * 100 // Max improvement is 3 points (1 to 4)

    if (percentage >= 66) {
        return {
            score: percentage,
            level: 'Excellent Transformation',
            message: 'You\'ve made outstanding progress! Your mindset has transformed significantly.'
        }
    } else if (percentage >= 33) {
        return {
            score: percentage,
            level: 'Good Progress',
            message: 'You\'re making solid progress! Keep up the momentum.'
        }
    } else if (percentage > 0) {
        return {
            score: percentage,
            level: 'Some Progress',
            message: 'You\'ve started the transformation. Continue engaging with activities for better results.'
        }
    } else {
        return {
            score: 0,
            level: 'No Change Yet',
            message: 'Transformation takes time. Stay engaged and the change will come!'
        }
    }
}
