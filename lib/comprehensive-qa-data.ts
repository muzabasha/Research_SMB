// Comprehensive Q&A Data for Interactive Presentation
// Covers all 21 stages across 3 roadmaps

export const SPEAKER_PROFILE = {
    name: 'Dr. Research Navigator',
    role: 'Research Excellence Catalyst',
    credentials: ['15+ Years Experience', '50+ Publications', '100+ Students Mentored', 'Multiple Research Grants'],
    philosophy: 'Research is not about being brilliant - it\'s about being curious, persistent, and strategic!',
    welcomeMessage: 'Welcome to this interactive orientation! Today, we\'ll transform how you think about research. Get ready to participate, reflect, and discover your research potential!'
}

export interface QASlide {
    stage: number
    roadmap: 'student' | 'faculty' | 'institute'
    title: string
    duration: string
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

// Student Roadmap Q&A (7 stages)
export const STUDENT_QA: QASlide[] = [
    {
        stage: 1,
        roadmap: 'student',
        title: 'Research Awareness',
        duration: '1-2 months',
        question: 'When you hear "research," what\'s your honest first thought?',
        context: 'No judgment here! Your answer reveals your starting point.',
        speakerNote: 'I ask this to every new researcher. Your answer is your starting point, and EVERY starting point is valid!',
        options: [
            { id: 'a', text: 'Research is only for brilliant people, not for me', emoji: '😰' },
            { id: 'b', text: 'I\'ll do it if someone forces me to', emoji: '😑' },
            { id: 'c', text: 'I\'m curious but completely lost', emoji: '🤔' },
            { id: 'd', text: 'I\'m excited! Show me how!', emoji: '🚀' }
        ],
        interpretations: {
            a: {
                title: '🏔️ The Everest Syndrome',
                analogy: 'You\'re at Everest\'s base thinking you must summit tomorrow! Research is a nature walk that builds skills gradually.',
                currentState: 'You\'ve put research on an unreachable pedestal',
                reality: 'Every "brilliant" researcher started confused and intimidated',
                betterApproach: 'Start with ONE small question about something you love. That\'s research!',
                instituteImpact: 'Fearless beginners bring fresh perspectives experts miss!',
                actionTip: 'TODAY: Find one paper about your hobby. Read the abstract. You just did research!',
                speakerInsight: 'I was exactly like you! Then I realized - curiosity is the only requirement.'
            },
            b: {
                title: '🚗 The Passenger Syndrome',
                analogy: 'You\'re a passenger in someone else\'s car. Research is YOUR road trip - you pick everything!',
                currentState: 'Waiting for external motivation instead of internal drive',
                reality: 'Forced research = mediocre results + miserable researcher',
                betterApproach: 'Find what makes YOU curious. That\'s your research fuel!',
                instituteImpact: 'Self-driven researchers produce breakthroughs and inspire others!',
                actionTip: 'THIS WEEK: List 3 things you wonder about. You just created 3 research questions!',
                speakerInsight: 'Best research comes from curiosity, not orders!'
            },
            c: {
                title: '🧭 Explorer Without a Map',
                analogy: 'You\'re Columbus - you know there\'s something amazing, you just need a compass!',
                currentState: 'You have curiosity - the most important ingredient!',
                reality: 'Curiosity + Guidance = Research Success. You\'re halfway there!',
                betterApproach: 'Add structure: explore domains, talk to researchers, attend seminars.',
                instituteImpact: 'Curious students with guidance become our best researchers!',
                actionTip: 'TOMORROW: Attend ONE seminar. Ask ONE question. Watch researchers love it!',
                speakerInsight: 'Curiosity is gold. Now let\'s add direction!'
            },
            d: {
                title: '🚀 The Natural Researcher',
                analogy: 'You\'re a rocket ready for launch - all systems go! Now add fuel and direction.',
                currentState: 'Perfect research mindset - enthusiasm + openness!',
                reality: 'Enthusiasm overcomes all obstacles!',
                betterApproach: 'Channel energy strategically: ONE domain, ONE mentor, ONE project.',
                instituteImpact: 'Enthusiastic researchers energize departments and attract funding!',
                actionTip: 'TODAY: Start "Research Wonder Journal" - write everything that makes you wonder!',
                speakerInsight: 'This energy is your superpower. Let\'s focus it!'
            }
        }
    },
    {
        stage: 2,
        roadmap: 'student',
        title: 'Topic Selection',
        duration: '2-3 months',
        question: 'How are you choosing your research topic?',
        context: 'Your topic choice determines your next 2 years. Choose wisely!',
        speakerNote: 'This is THE most important decision. You\'ll live with this topic for years!',
        options: [
            { id: 'a', text: 'Whatever my supervisor assigns', emoji: '📋' },
            { id: 'b', text: 'The easiest topic I can find', emoji: '🍔' },
            { id: 'c', text: 'Something trending in my field', emoji: '📈' },
            { id: 'd', text: 'A problem I want to solve', emoji: '🎯' }
        ],
        interpretations: {
            a: {
                title: '💍 The Arranged Marriage Trap',
                analogy: 'Treating your topic like arranged marriage! You\'ll spend 2+ years with it. Better love it!',
                currentState: 'Giving away your power to choose',
                reality: 'Assigned topics often lead to abandoned projects',
                betterApproach: 'Collaborate: "I\'m interested in X, Y, Z - which aligns with your research?"',
                instituteImpact: 'Students who own their choice complete faster and publish more!',
                actionTip: 'TOMORROW: List 3 topics YOU like. Ask supervisor which aligns with their focus.',
                speakerInsight: 'Research is a love marriage, not arranged!'
            },
            b: {
                title: '🍔 The Fast Food Fallacy',
                analogy: 'Choosing research like fast food - quick and easy. Research is a gourmet meal!',
                currentState: 'Optimizing for short-term ease, not long-term satisfaction',
                reality: 'Easy research rarely makes impact',
                betterApproach: 'Choose based on interest and impact. "Will I be proud in 5 years?"',
                instituteImpact: 'Challenging research gets published, cited, and attracts funding!',
                actionTip: 'THIS WEEK: Find one "difficult but fascinating" problem. Break it down.',
                speakerInsight: 'Challenging topic you love > easy topic you hate!'
            },
            c: {
                title: '👗 The Fashion Follower',
                analogy: 'Following trends like fashion! Trendy but crowded. 1000 people on same topic = lost in crowd.',
                currentState: 'Aware of trends but following the herd',
                reality: 'Crowded areas = fierce competition + incremental contributions',
                betterApproach: 'Look at trends, ask: "What gap is everyone missing?"',
                instituteImpact: 'Unique angles create breakthroughs. Innovators, not imitators!',
                actionTip: 'TODAY: Pick trending topic. Ask: "What aspect is everyone ignoring?"',
                speakerInsight: 'Be a trendsetter, not follower!'
            },
            d: {
                title: '🦸 Problem-Solver Extraordinaire',
                analogy: 'You\'re a superhero seeing a problem: "I MUST solve this!" Passion is your superpower!',
                currentState: 'Ideal motivation - problem-driven passion!',
                reality: 'Passionate researchers never burn out',
                betterApproach: 'Add strategy: ensure feasibility, supervisor support, resources.',
                instituteImpact: 'Passionate researchers produce breakthroughs and attract collaborations!',
                actionTip: 'TODAY: Write "Research Manifesto" - why this matters. Read when motivation dips!',
                speakerInsight: 'Passion + Planning = Research Success!'
            }
        }
    }
]

// Faculty Roadmap Q&A (7 stages) - Sample
export const FACULTY_QA: QASlide[] = [
    {
        stage: 1,
        roadmap: 'faculty',
        title: 'Profile Building',
        duration: '3-6 months',
        question: 'What\'s your primary motivation for building a research profile?',
        context: 'Your motivation shapes your research trajectory.',
        speakerNote: 'Faculty research starts with WHY. Let\'s discover yours!',
        options: [
            { id: 'a', text: 'Promotion requirements force me', emoji: '📄' },
            { id: 'b', text: 'Everyone else is doing it', emoji: '👥' },
            { id: 'c', text: 'Want to contribute to my field', emoji: '🎓' },
            { id: 'd', text: 'Passionate about solving problems', emoji: '🔥' }
        ],
        interpretations: {
            a: {
                title: '📋 The Checkbox Researcher',
                analogy: 'Treating research like a checkbox on promotion form. Research is a journey, not a checkbox!',
                currentState: 'Compliance-driven, not passion-driven',
                reality: 'Checkbox research produces mediocre output',
                betterApproach: 'Find ONE problem you genuinely care about. Make it count!',
                instituteImpact: 'Passionate faculty attract funding and inspire students!',
                actionTip: 'THIS WEEK: Identify ONE problem in your field that bothers you. Start there!',
                speakerInsight: 'Transform obligation into opportunity!'
            },
            b: {
                title: '🐑 The Herd Mentality',
                analogy: 'Following the crowd like sheep. But research needs shepherds, not sheep!',
                currentState: 'External pressure, not internal drive',
                reality: 'Herd research gets lost in the crowd',
                betterApproach: 'Find your unique angle. What can YOU contribute that others can\'t?',
                instituteImpact: 'Unique research profiles put institutions on the map!',
                actionTip: 'TODAY: List your unique skills/interests. How can they create unique research?',
                speakerInsight: 'Your uniqueness is your competitive advantage!'
            },
            c: {
                title: '🎓 The Scholar',
                analogy: 'You see research as contribution to knowledge. Noble and sustainable!',
                currentState: 'Field-driven motivation - solid foundation',
                reality: 'Contribution mindset leads to quality research',
                betterApproach: 'Add impact focus: How can your contribution solve real problems?',
                instituteImpact: 'Scholarly research builds institutional reputation!',
                actionTip: 'THIS MONTH: Identify gaps in your field. Pick ONE to address.',
                speakerInsight: 'Contribution mindset is excellent. Now add impact!'
            },
            d: {
                title: '🔥 The Research Warrior',
                analogy: 'You\'re on a mission to solve problems! This passion is unstoppable!',
                currentState: 'Problem-driven passion - ideal research motivation',
                reality: 'Passionate researchers produce breakthrough innovations',
                betterApproach: 'Channel passion strategically: funding, team, publications.',
                instituteImpact: 'Passionate faculty become research leaders and attract grants!',
                actionTip: 'TODAY: Write your research vision. Share with colleagues. Build your tribe!',
                speakerInsight: 'This is the mindset of research leaders!'
            }
        }
    }
]

// Institute Roadmap Q&A (7 stages) - Sample
export const INSTITUTE_QA: QASlide[] = [
    {
        stage: 1,
        roadmap: 'institute',
        title: 'Research Culture Building',
        duration: '6-12 months',
        question: 'What\'s your institution\'s current approach to research culture?',
        context: 'Culture is the foundation of research excellence.',
        speakerNote: 'Institutional research starts with culture. Let\'s assess yours!',
        options: [
            { id: 'a', text: 'Research is optional, teaching is priority', emoji: '📚' },
            { id: 'b', text: 'We encourage but don\'t support', emoji: '🤷' },
            { id: 'c', text: 'We have some initiatives', emoji: '🌱' },
            { id: 'd', text: 'Research is core to our identity', emoji: '🏆' }
        ],
        interpretations: {
            a: {
                title: '📚 The Teaching-Only Trap',
                analogy: 'Treating research like a hobby, not a priority. But research and teaching are twins!',
                currentState: 'Research seen as optional extra',
                reality: 'Teaching-only institutions fall behind in rankings',
                betterApproach: 'Integrate research into teaching. Research-informed teaching is best teaching!',
                instituteImpact: 'Research culture attracts best faculty and students!',
                actionTip: 'THIS QUARTER: Launch ONE research initiative. Start small, build momentum!',
                speakerInsight: 'Research and teaching enhance each other!'
            },
            b: {
                title: '🤷 The Lip Service Syndrome',
                analogy: 'Saying "do research" without providing tools. Like asking someone to build a house without tools!',
                currentState: 'Encouragement without enablement',
                reality: 'Words without resources = frustration',
                betterApproach: 'Provide time, funding, infrastructure, mentorship. Enable, don\'t just encourage!',
                instituteImpact: 'Enabled faculty produce 10x more research!',
                actionTip: 'THIS MONTH: Allocate research time, seed funding, or mentorship program.',
                speakerInsight: 'Support speaks louder than words!'
            },
            c: {
                title: '🌱 The Growing Garden',
                analogy: 'You\'ve planted seeds! Now nurture them into a forest!',
                currentState: 'Early-stage research culture - good foundation',
                reality: 'Initiatives need sustained support to flourish',
                betterApproach: 'Scale what works. Measure impact. Celebrate wins. Build momentum!',
                instituteImpact: 'Growing research culture attracts grants and rankings!',
                actionTip: 'THIS QUARTER: Identify most successful initiative. Double down on it!',
                speakerInsight: 'You\'re on the right path. Now accelerate!'
            },
            d: {
                title: '🏆 The Research Powerhouse',
                analogy: 'Research is your DNA! Now maintain and enhance this excellence!',
                currentState: 'Strong research culture - competitive advantage',
                reality: 'Excellence requires continuous innovation',
                betterApproach: 'Stay ahead: emerging areas, interdisciplinary research, global collaborations.',
                instituteImpact: 'Research powerhouses attract top talent and funding!',
                actionTip: 'THIS YEAR: Launch ONE cutting-edge initiative. Stay ahead of curve!',
                speakerInsight: 'Excellence is a journey, not a destination!'
            }
        }
    }
]

export const ALL_QA = [...STUDENT_QA, ...FACULTY_QA, ...INSTITUTE_QA]
