// Stage-specific activity content for orientation, activity, and reflection steps

export interface StageActivityContent {
    stageId: number
    orientation: {
        title: string
        whatIs: string
        whyMatters: string
        keyPoints: string[]
        tips: string[]
    }
    activity: {
        title: string
        duration: string
        description: string
        steps: {
            title: string
            duration: string
            instructions: string[]
        }[]
    }
    reflection: {
        title: string
        questions: string[]
        groupActivity?: string
        takeaways: string[]
    }
}

export const STAGE_ACTIVITIES: StageActivityContent[] = [
    // Stage 1: Domain Knowledge Discovery
    {
        stageId: 1,
        orientation: {
            title: "Understanding Domain Discovery",
            whatIs: "Domain discovery is like dating before marriage - explore multiple research areas before committing to 2-5 years of focused work. You'll explore 5 different domains to find what truly excites you.",
            whyMatters: "Choosing the wrong domain leads to a miserable research journey. The right domain means you'll work weekends and love it! Passion fuels persistence through inevitable challenges.",
            keyPoints: [
                "Research domains are vast: AI, IoT, Healthcare, Energy, Education, etc.",
                "Your domain should excite you for minimum 2-5 years",
                "It's okay to change later, but commit for now",
                "Multiple domains can intersect (interdisciplinary research)"
            ],
            tips: [
                "Follow your curiosity, not trends",
                "Talk to researchers in different domains",
                "Read recent papers to understand current challenges",
                "Check funding availability in your chosen domain"
            ]
        },
