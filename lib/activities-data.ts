// Research Culture Activities - Mindset Transformation System
// Progressive ladder with pre/post assessments

export interface ActivityQuestion {
    id: string
    question: string
    options: {
        id: string
        text: string
        mindsetLevel: 'rigid' | 'transitioning' | 'open' | 'growth'
    }[]
    interpretations: {
        [key: string]: {
            title: string
            currentState: string
            growthPath: string
            actionSteps: string[]
            encouragement: string
        }
    }
}

export interface Activity {
    id: string
    level: number
    title: string
    duration: string
    goal: string
    transformation: string
    preQuestion: ActivityQuestion
    guidelines: {
        overview: string
        steps: string[]
        resources: string[]
        deliverable: string
    }
    postQuestion: ActivityQuestion
    nextActivity: string
}

// LEVEL 1: FOUNDATION - Opening the Mind
export const LEVEL_1_ACTIVITIES: Activity[] = [
    {
        id: 'L1A1',
        level: 1,
        title: 'Research Awareness Challenge',
        duration: '30 minutes',
        goal: 'Shift from "research is for experts" to "research is for everyone"',
        transformation: 'Rigid → Open-minded',
        preQuestion: {
            id: 'L1A1_PRE',
            question: 'When you hear the word "research," what is your immediate reaction?',
            options: [
