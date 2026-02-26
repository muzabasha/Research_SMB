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
                        impact: 'Your reading experience becomes your writing advantage. You know what good looks like!',
                        actionTip: 'THIS MONTH: Take your best project. Write it in paper format: Intro, Method, Results, Discussion. Just draft it!',
                        speakerInsight: 'My first paper was my Masters project reformatted. Took 2 weeks. Got accepted! Your work is publishable!'
                    },
                    d: {
                        title: '✍️ The "Almost There" Author',
                        analogy: 'You\'ve cooked the meal (drafted paper), now you need to plate it beautifully (format and submit)! You\'re 80% done!',
                        currentState: 'You\'re closer than most - you have content!',
                        reality: 'Draft paper = hardest part done. Formatting and submission are mechanical steps!',
                        betterApproach: 'Get feedback from supervisor/peers. Revise once. Then submit. Don\'t aim for perfection!',
                        impact: 'Submitted paper = learning opportunity. Even if rejected, you get expert feedback!',
                        actionTip: 'THIS WEEK: Show draft to 2 people. Get feedback. Revise. Submit within 2 weeks!',
                        speakerInsight: 'I polished my first draft for 6 months. Colleague submitted in 2 weeks. Both got accepted. Submit faster!'
                    }
                }
            },
            actionQuestion: {
                question: 'What will you DO THIS MONTH for publication?',
                context: 'Publication requires action, not just intention!',
                speakerNote: 'This month determines if you become a published researcher or remain a dreamer!',
                options: [
                    { id: 'a', text: 'Maybe read some papers...', emoji: '🤔' },
                    { id: 'b', text: 'Start drafting my paper', emoji: '✍️' },
                    { id: 'c', text: 'Complete draft and get feedback', emoji: '📝' },
                    { id: 'd', text: 'Submit to a journal!', emoji: '🚀' }
                ],
                interpretations: {
                    a: {
                        title: '🤔 The "Maybe" Procrastinator',
                        analogy: 'You\'re like someone saying "maybe I\'ll exercise" while eating pizza! "Maybe" = never. Commit or quit!',
                        currentState: 'You\'re stuck in thinking mode',
                        reality: 'Reading without writing = entertainment, not progress. You need to produce!',
                        betterApproach: 'Set deadline: "I will draft introduction by [date]". Start writing, not just reading!',
                        impact: 'Every month of delay = competitors publishing before you. Time is ticking!',
                        actionTip: 'TODAY: Write 500 words. Any 500 words about your research. Just start!',
                        speakerInsight: 'I "maybe-d" for 2 years. Colleague started writing immediately. She has 5 papers, I had 0. Start now!'
                    },
                    b: {
                        title: '✍️ The "Action Taker"',
                        analogy: 'You\'re actually cooking, not just watching cooking shows! This is how papers get written!',
                        currentState: 'You\'re making real progress',
                        reality: 'Drafting = you\'re ahead of 80% who just think about it. Keep going!',
                        betterApproach: 'Write messy first draft. Don\'t edit while writing. Get words on paper first!',
                        impact: 'Draft paper = tangible progress. You can improve draft. Can\'t improve blank page!',
                        actionTip: 'THIS WEEK: Write 1000 words daily. In 5 days, you\'ll have complete draft!',
                        speakerInsight: 'My first draft was terrible. But it existed! Revised 3 times. Got published. Start messy!'
                    },
                    c: {
                        title: '📝 The "Smart Writer"',
                        analogy: 'You\'re like a chef who tastes while cooking! Draft + feedback = recipe for success!',
                        currentState: 'You\'re demonstrating writing maturity',
                        reality: 'Feedback catches blind spots. Your paper will be 10x better with input!',
                        betterApproach: 'Get diverse feedback: supervisor (content), peer (clarity), senior (structure). Revise once!',
                        impact: 'Feedback-improved paper has higher acceptance rate. Smart strategy!',
                        actionTip: 'AFTER FEEDBACK: Revise within 1 week. Don\'t overthink. Implement suggestions and submit!',
                        speakerInsight: 'Peer feedback caught 5 major issues in my draft. Saved me from rejection. Get feedback!'
                    },
                    d: {
                        title: '🚀 The "Publication Warrior"',
                        analogy: 'You\'re like an entrepreneur launching product! Submission = you\'re in the game!',
                        currentState: 'You\'re demonstrating exceptional commitment',
                        reality: 'Submitted paper = learning opportunity. Acceptance or rejection, you grow!',
                        betterApproach: 'After submission, start next paper. Don\'t wait idle. Build publication pipeline!',
                        impact: 'First submission = you\'re now a researcher, not just a student. Identity shift!',
                        actionTip: 'AFTER SUBMISSION: Celebrate! Then start paper #2. Build momentum!',
                        speakerInsight: 'My first submission was rejected. But I learned so much from reviews. Revised and got accepted elsewhere!'
                    }
                }
            }
        }
    ]
}

export const ALL_TOPIC_ORIENTATIONS = [PUBLICATION_ORIENTATION]
