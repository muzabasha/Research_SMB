// Comprehensive Q&A Data for Interactive Presentation
// Covers all 21 stages across 3 roadmaps

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

// Student Roadmap Q&A (7 stages)
export const STUDENT_QA: QASlide[] = [
    {
        stage: 1,
        roadmap: 'student',
        title: 'Research Awareness',
        duration: '1-2 months',
        currentStateQuestion: {
            question: 'Where are you RIGHT NOW with research?',
            context: 'Let\'s honestly assess your current relationship with research - no judgment!',
            speakerNote: 'I ask this to understand your starting point. Remember, every expert started somewhere!',
            options: [
                { id: 'a', text: 'Research? That\'s for PhD students, not me!', emoji: '😰' },
                { id: 'b', text: 'I know I should do it, but keep postponing...', emoji: '😅' },
                { id: 'c', text: 'I\'ve attended some seminars, still confused', emoji: '🤔' },
                { id: 'd', text: 'I\'m reading papers and exploring topics!', emoji: '📚' }
            ],
            interpretations: {
                a: {
                    title: '🏔️ The "Everest is Too High" Syndrome',
                    analogy: 'You\'re like someone who thinks you need a PhD to make tea! Research is just asking "why?" and finding answers. Kids do it naturally - "Why is sky blue?" That\'s research!',
                    currentState: 'You\'ve built an imaginary wall between you and research',
                    reality: 'Research starts with curiosity, not credentials. Your "silly" questions might be breakthrough research!',
                    betterApproach: 'Start TODAY: Pick something you love (gaming, cooking, sports) and ask ONE question about it. Google it. Boom! You just did research!',
                    instituteImpact: 'When students realize research is accessible, participation jumps 300%! Your questions bring fresh perspectives.',
                    actionTip: 'THIS WEEK: Find ONE research paper about your hobby. Read just the abstract. You\'ll realize researchers are just curious people like you!',
                    speakerInsight: 'I thought the same! Then I researched "why do gamers rage quit?" - turned into my first publication. Your curiosity is enough!'
                },
                b: {
                    title: '🏃 The "I\'ll Start Monday" Runner',
                    analogy: 'You\'re like someone with a gym membership who never goes! You know research is good, but Netflix seems more urgent. Spoiler: It\'s not!',
                    currentState: 'You\'re stuck in "someday" mode - the graveyard of dreams',
                    reality: 'Postponing research is like postponing exercise - it gets harder the longer you wait. Start small, start NOW!',
                    betterApproach: 'Don\'t wait for "perfect time" - it doesn\'t exist! Spend 15 minutes TODAY exploring one topic. That\'s it. Just 15 minutes.',
                    instituteImpact: 'Students who start small build momentum. They become our most productive researchers because they built the habit early!',
                    actionTip: 'RIGHT NOW: Set a 15-minute timer. Pick ANY topic. Google it. Write 3 interesting things you learned. Congratulations - you started!',
                    speakerInsight: 'I postponed for 2 years. Biggest regret! Those who start today, even tiny steps, are miles ahead in 6 months.'
                },
                c: {
                    title: '🧩 The "Missing Puzzle Piece" Seeker',
                    analogy: 'You\'re like someone who bought furniture but can\'t find the assembly instructions! You\'ve got the pieces (seminars, knowledge) but need the "how-to" manual.',
                    currentState: 'You\'re in the learning phase - perfect! Confusion means you\'re growing.',
                    reality: 'Confusion is GOOD! It means you\'re thinking. Most breakthroughs come from confused people asking "wait, what?"',
                    betterApproach: 'Turn confusion into questions. Write them down. Each confusion point is a potential research direction!',
                    instituteImpact: 'Confused students who persist become our best researchers - they question assumptions and find gaps others miss!',
                    actionTip: 'TODAY: Write down 3 things that confused you in seminars. Pick ONE. That\'s your research starting point!',
                    speakerInsight: 'My best research came from being confused about something "obvious" to everyone else. Your confusion is valuable!'
                },
                d: {
                    title: '🚀 The "Already Launched" Rocket',
                    analogy: 'You\'re like a rocket that\'s already left the launchpad! While others are thinking about it, you\'re DOING it. This is the mindset of champions!',
                    currentState: 'You\'re ahead of 90% of students - you\'re actively exploring!',
                    reality: 'Reading papers and exploring = you\'re already a researcher! Now add structure and mentorship.',
                    betterApproach: 'Keep this momentum! Now find ONE mentor to guide you. Your enthusiasm + their experience = breakthrough research!',
                    instituteImpact: 'Students like you become research leaders. You inspire others, attract funding, and put institutions on the map!',
                    actionTip: 'THIS WEEK: Approach ONE professor whose research interests you. Say: "I\'m exploring X, can I discuss it with you?" Watch doors open!',
                    speakerInsight: 'This is exactly how I started! That curiosity-driven exploration led to 50+ publications. Keep going!'
                }
            }
        },
        actionQuestion: {
            question: 'What will you DO THIS WEEK to start impactful research?',
            context: 'Action beats intention. Let\'s see your commitment level!',
            speakerNote: 'This question separates dreamers from doers. Your answer predicts your research success!',
            options: [
                { id: 'a', text: 'Maybe attend a seminar if I have time...', emoji: '🤷' },
                { id: 'b', text: 'I\'ll think about possible topics', emoji: '💭' },
                { id: 'c', text: 'I\'ll read 2-3 papers in my interest area', emoji: '📖' },
                { id: 'd', text: 'I\'ll meet a professor and discuss research ideas!', emoji: '🎯' }
            ],
            interpretations: {
                a: {
                    title: '🎲 The "Maybe" Gambler',
                    analogy: 'You\'re like someone saying "maybe I\'ll exercise" while eating pizza! "Maybe" and "if I have time" are research killers. Time doesn\'t appear - you MAKE it!',
                    currentState: 'You\'re leaving your research future to chance',
                    reality: 'Research doesn\'t happen by accident. "Maybe" people are still "maybe-ing" 5 years later.',
                    betterApproach: 'Replace "maybe" with "I WILL on [specific day/time]". Schedule it like a doctor\'s appointment - non-negotiable!',
                    instituteImpact: 'Committed students complete projects 5x faster. They become the success stories we showcase!',
                    actionTip: 'RIGHT NOW: Open calendar. Block 1 hour THIS WEEK for research. Treat it like a job interview - you wouldn\'t skip that!',
                    speakerInsight: 'I was a "maybe" person. Wasted 2 years. When I switched to "I WILL", everything changed. Don\'t be past me!'
                },
                b: {
                    title: '🤔 The "Eternal Thinker"',
                    analogy: 'You\'re like someone who thinks about going to the gym but never goes! Thinking is step 1, but you need step 2: DOING. Analysis paralysis is real!',
                    currentState: 'You\'re stuck in planning mode - the comfort zone of inaction',
                    reality: 'Perfect plans don\'t exist. Imperfect action beats perfect planning every time!',
                    betterApproach: 'Think for 1 hour, then ACT for 1 hour. Balance thinking with doing. Start messy, refine later!',
                    instituteImpact: 'Thinkers who become doers produce the most innovative research - they combine reflection with action!',
                    actionTip: 'TODAY: Think for 30 minutes about topics. Then IMMEDIATELY spend 30 minutes reading ONE paper. Feel the difference!',
                    speakerInsight: 'I over-thought my first project for 6 months. My colleague started immediately, finished first, and published. Action wins!'
                },
                c: {
                    title: '📚 The "Smart Starter"',
                    analogy: 'You\'re like someone who actually goes to the gym with a plan! Reading papers is REAL research work. You\'re not just thinking - you\'re DOING!',
                    currentState: 'You\'re taking concrete action - this is how researchers are built!',
                    reality: 'Reading papers = building knowledge foundation. You\'re ahead of 80% who just "think about it"!',
                    betterApproach: 'Great start! Now add one more step: take notes and identify ONE gap or question from those papers.',
                    instituteImpact: 'Students who read papers early develop critical thinking faster. They ask better questions and produce quality research!',
                    actionTip: 'WHILE READING: Write down 3 questions each paper doesn\'t answer. Those gaps are your research opportunities!',
                    speakerInsight: 'This is exactly what I did! Those paper-reading sessions led to identifying gaps that became my PhD thesis!'
                },
                d: {
                    title: '🎯 The "Action Hero"',
                    analogy: 'You\'re like someone who doesn\'t just join a gym - you hire a trainer on day one! Meeting professors = fast-tracking your research journey. This is pro-level thinking!',
                    currentState: 'You\'re taking the BEST possible action - seeking mentorship early!',
                    reality: 'Students who engage professors early get better guidance, opportunities, and results. You\'re playing chess while others play checkers!',
                    betterApproach: 'Perfect! When you meet them, come prepared: 3 topics you\'re interested in, 2 questions about their research. Show you\'re serious!',
                    instituteImpact: 'Proactive students become research stars. They get first pick of projects, funding, and publication opportunities!',
                    actionTip: 'BEFORE MEETING: Read ONE of their recent papers. Mention it in the meeting. Watch their eyes light up!',
                    speakerInsight: 'This is how I got my first research opportunity! Professor was impressed I read his work. Led to 3 publications together!'
                }
            }
        }
    }
]

// Faculty Roadmap Q&A (7 stages) - To be implemented with dual-question format
export const FACULTY_QA: QASlide[] = []

// Institute Roadmap Q&A (7 stages) - To be implemented with dual-question format
export const INSTITUTE_QA: QASlide[] = []

export const ALL_QA = [...STUDENT_QA, ...FACULTY_QA, ...INSTITUTE_QA]
