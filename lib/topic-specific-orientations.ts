// Topic-Specific Research Orientations
// Common for both Students and Faculty

export interface TopicOrientation {
    id: string
    title: string
    subtitle: string
    targetAudience: string[]
    duration: string
    stages: TopicStage[]
}

export interface TopicStage {
    id: number
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
                impact: string
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
                impact: string
                actionTip: string
                speakerInsight: string
            }
        }
    }
}

// 1. PUBLICATION ORIENTATION - First Research Paper
export const PUBLICATION_ORIENTATION: TopicOrientation = {
    id: 'publication',
    title: 'Publishing Your First Research Paper',
    subtitle: 'From Draft to Published: A Complete Journey',
    targetAudience: ['UG Students', 'PG Students', 'PhD Scholars', 'Faculty'],
    duration: '60-90 minutes',
    stages: [
        {
            id: 1,
            title: 'Understanding Publication Process',
            duration: '15 minutes',
            currentStateQuestion: {
                question: 'What\'s your current understanding of research publication?',
                context: 'Let\'s assess your publication readiness!',
                speakerNote: 'Most people think publication is mysterious. It\'s not - it\'s a learnable process!',
                options: [
                    { id: 'a', text: 'Publication? That\'s for professors only!', emoji: '😰' },
                    { id: 'b', text: 'I know journals exist, that\'s about it', emoji: '🤷' },
                    { id: 'c', text: 'I\'ve read papers, but never written one', emoji: '📖' },
                    { id: 'd', text: 'I\'ve drafted a paper, need guidance on submission', emoji: '✍️' }
                ],
                interpretations: {
                    a: {
                        title: '🎬 The "Oscars Are For Celebrities" Myth',
                        analogy: 'You think publication is like winning an Oscar - only for the elite! Reality: It\'s more like uploading a YouTube video. Anyone can do it with the right content and process!',
                        currentState: 'You\'ve built an imaginary wall between you and publication',
                        reality: 'Students publish in top journals every year. Age and position don\'t matter - quality research does!',
                        betterApproach: 'Start by reading 5 papers in your area. Notice the structure. It\'s a template, not magic!',
                        impact: 'First publication opens doors: scholarships, PhD admissions, job offers. It\'s your research passport!',
                        actionTip: 'THIS WEEK: Pick ONE journal in your field. Read 3 recent papers. Notice: Abstract, Intro, Method, Results, Discussion. That\'s the recipe!',
                        speakerInsight: 'My first paper was rejected 3 times. Fourth journal accepted it. Now I have 50+. Everyone starts somewhere!'
                    },
                    b: {
                        title: '🗺️ The "I Know The Destination" Navigator',
                        analogy: 'You know journals exist like knowing Paris exists - but you\'ve never been there! Time to book that ticket and actually go!',
                        currentState: 'You have awareness but no roadmap',
                        reality: 'Knowing journals exist ≠ knowing how to publish. It\'s like knowing restaurants exist but not knowing how to cook!',
                        betterApproach: 'Learn the publication journey: Write → Format → Submit → Review → Revise → Accept. Each step is learnable!',
                        impact: 'Understanding the process removes fear. You\'ll see it\'s systematic, not mysterious!',
                        actionTip: 'TODAY: Watch ONE YouTube video on "How to publish research paper". Demystify the process!',
                        speakerInsight: 'I was exactly here! Watched a 20-minute video, suddenly it all made sense. Knowledge removes fear!'
                    },
                    c: {
                        title: '📚 The "Consumer Ready to Produce"',
                        analogy: 'You\'ve been eating at restaurants (reading papers), now it\'s time to cook (write papers)! You know what good food tastes like - that\'s half the battle!',
                        currentState: 'You\'re at the perfect starting point - you understand quality!',
                        reality: 'Reading papers = understanding what journals want. You\'re more ready than you think!',
                        betterApproach: 'Pick your best project/assignment. Expand it into paper format using the structure you\'ve seen in papers!',
           