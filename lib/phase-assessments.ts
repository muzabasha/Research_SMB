// Phase Prerequisites and Outcomes - Psychology Tests and Achievement Checklists

export interface PsychologyQuestion {
    id: string
    question: string
    options: {
        id: string
        text: string
        emoji: string
        score: number
        feedback: string
    }[]
}

export interface OutcomeChecklistItem {
    id: string
    statement: string
    category: string
}

export interface FunnyReflectionQuestion {
    id: string
    question: string
    options: {
        id: string
        text: string
        emoji: string
    }[]
}

export interface PhaseAssessment {
    phaseId: number
    phaseName: string
    prerequisite: {
        title: string
        description: string
        psychologyQuestions: PsychologyQuestion[]
        interpretation: {
            range: string
            title: string
            description: string
            advice: string
        }[]
    }
    outcome: {
        title: string
        description: string
        checklistItems: OutcomeChecklistItem[]
        funnyQuestions: FunnyReflectionQuestion[]
        celebrationMessage: string
    }
}

export const PHASE_ASSESSMENTS: PhaseAssessment[] = [
    // Phase 1: Foundation
    {
        phaseId: 1,
        phaseName: "Foundation",
        prerequisite: {
            title: "Foundation Phase Readiness Check",
            description: "Let's assess your mindset and readiness to begin your research journey. Answer honestly - this helps us understand where you are!",
            psychologyQuestions: [
                {
                    id: "P1-Q1",
                    question: "When you think about starting research, how do you feel?",
                    options: [
                        {
                            id: "a",
                            text: "Terrified! I have no idea where to start",
                            emoji: "😰",
                            score: 1,
                            feedback: "That's completely normal! Everyone starts here. This phase will guide you step by step."
                        },
                        {
                            id: "b",
                            text: "Nervous but curious to learn",
                            emoji: "😬",
                            score: 2,
                            feedback: "Great! Curiosity is your best friend in research. Let's channel that energy!"
                        },
                        {
                            id: "c",
                            text: "Excited and ready to explore",
                            emoji: "😊",
                            score: 3,
                            feedback: "Excellent mindset! Your enthusiasm will carry you far."
                        },
                        {
                            id: "d",
                            text: "Confident! I've done some reading already",
                            emoji: "😎",
                            score: 4,
                            feedback: "Wonderful! You're ahead of the curve. This phase will structure your knowledge."
                        }
                    ]
                },
                {
                    id: "P1-Q2",
                    question: "How do you typically approach learning something completely new?",
                    options: [
                        {
                            id: "a",
                            text: "I avoid it until absolutely necessary",
                            emoji: "🙈",
                            score: 1,
                            feedback: "Research requires embracing the unknown. Let's work on building that comfort!"
                        },
                        {
                            id: "b",
                            text: "I jump in randomly and hope for the best",
                            emoji: "🎲",
                            score: 2,
                            feedback: "Enthusiasm is great! We'll add structure to that energy."
                        },
                        {
                            id: "c",
                            text: "I research first, then take small steps",
                            emoji: "📚",
                            score: 3,
                            feedback: "Perfect approach! You're already thinking like a researcher."
                        },
                        {
                            id: "d",
                            text: "I create a learning plan and follow it",
                            emoji: "📋",
                            score: 4,
                            feedback: "Excellent! Systematic learning is key to research success."
                        }
                    ]
                },
                {
                    id: "P1-Q3",
                    question: "When you read something you don't understand, what do you do?",
                    options: [
                        {
                            id: "a",
                            text: "Give up and move to something easier",
                            emoji: "😓",
                            score: 1,
                            feedback: "Research is full of difficult concepts. Let's build your persistence muscle!"
                        },
                        {
                            id: "b",
                            text: "Skim through and pretend I understood",
                            emoji: "🤷",
                            score: 2,
                            feedback: "Honesty is important in research. It's okay to not understand everything immediately!"
                        },
                        {
                            id: "c",
                            text: "Google it and try to understand",
                            emoji: "🔍",
                            score: 3,
                            feedback: "Great! Resourcefulness is a researcher's superpower."
                        },
                        {
                            id: "d",
                            text: "Break it down, research each part, ask experts",
                            emoji: "🧩",
                            score: 4,
                            feedback: "Perfect strategy! You're already using advanced learning techniques."
                        }
                    ]
                },
                {
                    id: "P1-Q4",
                    question: "How comfortable are you with not knowing the answer?",
                    options: [
                        {
                            id: "a",
                            text: "Very uncomfortable - I need answers NOW!",
                            emoji: "😤",
                            score: 1,
                            feedback: "Research is about living with uncertainty. We'll help you embrace it!"
                        },
                        {
                            id: "b",
                            text: "Somewhat uncomfortable but I can manage",
                            emoji: "😐",
                            score: 2,
                            feedback: "Good start! Tolerance for ambiguity grows with practice."
                        },
                        {
                            id: "c",
                            text: "Comfortable - I see it as a learning opportunity",
                            emoji: "🤔",
                            score: 3,
                            feedback: "Excellent mindset! Not knowing is the beginning of discovery."
                        },
                        {
                            id: "d",
                            text: "Love it! The unknown excites me",
                            emoji: "🚀",
                            score: 4,
                            feedback: "Perfect researcher mindset! You'll thrive in this journey."
                        }
                    ]
                },
                {
                    id: "P1-Q5",
                    question: "When choosing what to learn, you usually pick based on:",
                    options: [
                        {
                            id: "a",
                            text: "What everyone else is doing (trends)",
                            emoji: "👥",
                            score: 1,
                            feedback: "Following trends can be risky. Let's find YOUR passion!"
                        },
                        {
                            id: "b",
                            text: "What seems easiest or fastest",
                            emoji: "⚡",
                            score: 2,
                            feedback: "Easy isn't always fulfilling. Let's find what excites you!"
                        },
                        {
                            id: "c",
                            text: "What interests me personally",
                            emoji: "❤️",
                            score: 3,
                            feedback: "Great! Passion fuels persistence in research."
                        },
                        {
                            id: "d",
                            text: "What interests me AND has impact potential",
                            emoji: "🎯",
                            score: 4,
                            feedback: "Perfect balance! You're thinking like a successful researcher."
                        }
                    ]
                }
            ],
            interpretation: [
                {
                    range: "5-10",
                    title: "Research Beginner - Welcome!",
                    description: "You're at the starting line, and that's perfectly okay! Everyone begins here.",
                    advice: "Focus on building curiosity and comfort with the unknown. Take it one step at a time."
                },
                {
                    range: "11-15",
                    title: "Emerging Researcher",
                    description: "You have some foundation but need structure and guidance.",
                    advice: "Work on systematic learning approaches and building persistence. You're on the right track!"
                },
                {
                    range: "16-20",
                    title: "Ready Researcher",
                    description: "You have a good mindset and are ready to dive into research!",
                    advice: "Channel your enthusiasm into structured activities. You'll excel in this phase!"
                }
            ]
        },
        outcome: {
            title: "Foundation Phase Completion",
            description: "Reflect on what you've learned and achieved in the Foundation Phase",
            checklistItems: [],
            funnyQuestions: [],
            celebrationMessage: "Congratulations on completing the Foundation Phase!"
        }
    }
]
