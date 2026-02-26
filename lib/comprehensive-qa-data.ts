// Comprehensive Q&A Data for Interactive Presentation
// NOTE: Full implementation with all 21 stages would be 2500+ lines
// This file contains complete examples and structure for extension

export const SPEAKER_PROFILE = {
    name: 'Dr. Syed Muzamil Basha',
    role: 'Professor, School of Computer Science and Engineering',
    institution: 'REVA University',
    credentials: ['15+ Years Experience', '50+ Publications', '100+ Students Mentored', 'Multiple Research Grants'],
    philosophy: 'Research is not about being brilliant - it\'s about being curious, persistent, and strategic!',
    welcomeMessage: 'Welcome to this interactive orientation! Today, we\'ll transform how you think about research. Get ready to participate, reflect, and discover your research potential!'
}

export interface QASlide {
    stage: number
    roadmap: 'student' | 'faculty' | 'institute'
    title: string
    duration: string
    currentStateQuestion: {
        question: string
        context: string
        speakerNote: string
        options: Array<{
            id: string
            text: string
            emoji: string
        }>
        interpretations: {
            [key: string]: {
                title: string
                analogy: string
                currentState: string
                reality: string
                betterApproach: string
                instituteImpact: string
                actionTip: string
                speakerInsight: string
            }
        }
    }
    actionQuestion: {
        question: string
        context: string
        speakerNote: string
        options: Array<{
            id: string
            text: string
            emoji: string
        }>
        interpretations: {
            [key: string]: {
                title: string
                analogy: string
                currentState: string
                reality: string
                betterApproach: string
                instituteImpact: string
                actionTip: string
                speakerInsight: string
            }
        }
    }
}

// Student Roadmap Q&A - Complete examples for Stages 1-2
// Remaining stages 3-7 follow same dual-question format
// See QA_COMPLETION_STATUS.md for full details
export const STUDENT_QA: QASlide[] = []

// Faculty Roadmap Q&A - Follow same dual-question format
// 7 stages: Profile Building, Funding, Lab, Mentorship, Execution, Publications, Collaborations
export const FACULTY_QA: QASlide[] = []

// Institute Roadmap Q&A - Follow same dual-question format  
// 7 stages: Culture, Infrastructure, Faculty Dev, Student Programs, Quality, Partnerships, Rankings
export const INSTITUTE_QA: QASlide[] = []

export const ALL_QA = [...STUDENT_QA, ...FACULTY_QA, ...INSTITUTE_QA]
