// Comprehensive Roadmap Data with Sub-stages, Planning Phases, and Interactive Q&A

export interface SubStage {
    id: string
    title: string
    duration: string
    activities: string[]
    deliverables: string[]
}

export interface PlanningPhase {
    phase: string
    focus: string
    actions: string[]
}

export interface QuestionSlide {
    question: string
    context: string
    options: {
        id: string
        text: string
        mindset: 'reactive' | 'transitioning' | 'proactive' | 'growth'
    }[]
}

export interface AnswerSlide {
    interpretations: {
        [key: string]: {
            title: string
            analogy: string
            currentState: string
            betterApproach: string
            instituteImpact: string
            actionTip: string
        }
    }
}

export interface DetailedStage {
    id: number
    title: string
    duration: string
    description: string
    dependencies: number[]
    links?: string[]
    subStages: SubStage[]
    planningPhases: PlanningPhase[]
    qa: {
        question: QuestionSlide
        answer: AnswerSlide
    }
}

// STUDENT ROADMAP - Detailed
export const STUDENT_DETAILED_ROADMAP: DetailedStage[] = [
    {
        id: 1,
        title: 'Research Awareness',
        duration: '1-2 months',
        description: 'Understanding research fundamentals and opportunities',
        dependencies: [],
        subStages: [
            {
                id: '1.1',
                title: 'What is Research?',
                duration: '1 week',
                activities: [
                    'Attend research orientation sessions',
                    'Watch introductory videos on research',
                    'Read "Research for Beginners" articles'
                ],
                deliverables: ['Understanding of research definition', 'List of research types']
            },
            {
                id: '1.2',
                title: 'Why Research Matters',
                duration: '1 week',
                activities: [
                    'Explore career opportunities in research',
                    'Meet with research scholars',
                    'Understand societal impact of research'
                ],
                deliverables: ['Personal motivation statement', 'Career pathway map']
            },
            {
                id: '1.3',
                title: 'Research Opportunities',
                duration: '2 weeks',
                activities: [
                    'Browse department research areas',
                    'Attend research seminars',
                    'Connect with potential supervisors'
                ],
                deliverables: ['List of 3-5 interesting research areas', 'Supervisor contact list']
            }
        ],
        planningPhases: [
            {
                phase: 'Exploration',
                focus: 'Discover what research means',
                actions: ['Read widely', 'Ask questions', 'Attend events']
            },
            {
                phase: 'Reflection',
                focus: 'Understand personal interest',
                actions: ['Journal thoughts', 'Discuss with peers', 'Identify passions']
            },
            {
                phase: 'Connection',
                focus: 'Link interests to research',
                actions: ['Map interests to domains', 'Find mentors', 'Join research clubs']
            }
        ],
        qa: {
            question: {
                question: 'When you think about starting research, what\'s your first thought?',
                context: 'Understanding your starting mindset helps us guide you better',
                options: [
                    {
                        id: 'a',
                        text: 'Research is too difficult for me',
                        mindset: 'reactive'
                    },
                    {
                        id: 'b',
                        text: 'I\'ll do it if my professor tells me to',
                        mindset: 'reactive'
                    },
                    {
                        id: 'c',
                        text: 'I\'m curious but don\'t know where to start',
                        mindset: 'transitioning'
                    },
                    {
                        id: 'd',
                        text: 'I\'m excited to explore and discover new things!',
                        mindset: 'proactive'
                    }
                ]
            },
            answer: {
                interpretations: {
                    a: {
                        title: 'The Mountain Climber\'s Mindset 🏔️',
                        analogy: 'You\'re like someone looking at Mount Everest from the base - it seems impossible! But remember, every climber started with a single step. Research isn\'t about climbing Everest on day one; it\'s about taking a pleasant hike and gradually building your skills.',
                        currentState: 'You see research as an insurmountable challenge',
                        betterApproach: 'Start with small, manageable research questions. Think of it as solving puzzles, not climbing mountains. Every expert was once a beginner who felt exactly like you!',
                        instituteImpact: 'When students overcome this fear, they contribute fresh perspectives and innovative ideas. Your unique viewpoint as a beginner is actually valuable - you see things experts might miss!',
                        actionTip: 'This week: Find ONE research paper on a topic you love (maybe gaming, cooking, or sports) and just read the abstract. See? Research is everywhere!'
                    },
                    b: {
                        title: 'The GPS vs Explorer Mindset 🗺️',
                        analogy: 'You\'re like someone who only goes where GPS tells them. But imagine being an explorer who discovers new paths! Research isn\'t about following orders; it\'s about curiosity-driven adventure.',
                        currentState: 'You\'re waiting for external direction instead of internal motivation',
                        betterApproach: 'Research thrives on curiosity, not compliance. Ask yourself: "What am I genuinely curious about?" That\'s your research compass! The best researchers are driven by "I wonder..." not "I was told..."',
                        instituteImpact: 'Self-motivated researchers drive innovation and bring passion to projects. They inspire others and create a vibrant research culture. Your initiative can spark a chain reaction!',
                        actionTip: 'Today: Write down 3 things you\'ve always wondered about. Congratulations - you just created 3 potential research questions!'
                    },
                    c: {
                        title: 'The Recipe Follower Ready to Cook 👨‍🍳',
                        analogy: 'You\'re like someone who loves food and wants to cook but doesn\'t know which recipe to start with. Good news: we have the cookbook, and you have the appetite!',
                        currentState: 'You have curiosity but need direction - perfect starting point!',
                        betterApproach: 'Your curiosity is the fuel; we\'ll provide the roadmap. Start by exploring different "flavors" of research. Attend seminars, talk to researchers, browse topics. You\'ll find your recipe!',
                        instituteImpact: 'Curious students who get proper guidance become our best researchers. They ask great questions, challenge assumptions, and drive quality research output.',
                        actionTip: 'This week: Attend one research seminar (any topic!) and ask at least one question. Notice how researchers love curious minds!'
                    },
                    d: {
                        title: 'The Natural Explorer 🧭',
                        analogy: 'You\'re like a kid in a candy store - excited about all the possibilities! This enthusiasm is gold. Now let\'s channel it into systematic exploration.',
                        currentState: 'You have the perfect research mindset - curiosity + enthusiasm!',
                        betterApproach: 'Keep this energy! Now add structure: explore systematically, document your interests, connect with mentors. Your excitement will carry you through challenges.',
                        instituteImpact: 'Enthusiastic researchers energize entire departments! They inspire peers, attract funding, and create breakthrough innovations. Your attitude is contagious - spread it!',
                        actionTip: 'Today: Start a "Research Wonder Journal" - write down everything that makes you think "I wonder why..." You\'re already thinking like a researcher!'
                    }
                }
            }
        }
    },
    {
        id: 2,
        title: 'Topic Selection',
        duration: '2-3 months',
        description: 'Identifying research area and problem statement',
        dependencies: [1],
        subStages: [
            {
                id: '2.1',
                title: 'Domain Exploration',
                duration: '3 weeks',
                activities: [
                    'Deep dive into 3-5 potential domains',
                    'Read recent papers in each domain',
                    'Attend domain-specific seminars'
                ],
                deliverables: ['Domain comparison matrix', 'Top 2 domain choices']
            },
            {
                id: '2.2',
                title: 'Problem Identification',
                duration: '3 weeks',
                activities: [
                    'Identify gaps in chosen domain',
                    'Discuss problems with experts',
                    'Evaluate problem feasibility'
                ],
                deliverables: ['List of 5-10 potential problems', 'Feasibility analysis']
            },
            {
                id: '2.3',
                title: 'Problem Refinement',
                duration: '2-3 weeks',
                activities: [
                    'Narrow down to 1-2 problems',
                    'Write problem statements',
                    'Get supervisor feedback'
                ],
                deliverables: ['Refined problem statement', 'Research question draft']
            }
        ],
        planningPhases: [
            {
                phase: 'Divergence',
                focus: 'Explore widely',
                actions: ['Cast a wide net', 'Consider multiple domains', 'Stay open-minded']
            },
            {
                phase: 'Convergence',
                focus: 'Narrow down choices',
                actions: ['Evaluate feasibility', 'Consider resources', 'Assess interest level']
            },
            {
                phase: 'Commitment',
                focus: 'Make informed decision',
                actions: ['Choose one problem', 'Get supervisor buy-in', 'Document rationale']
            }
        ],
        qa: {
            question: {
                question: 'How are you choosing your research topic?',
                context: 'Your approach to topic selection reveals your research maturity',
                options: [
                    {
                        id: 'a',
                        text: 'Whatever my supervisor assigns me',
                        mindset: 'reactive'
                    },
                    {
                        id: 'b',
                        text: 'The easiest topic I can find',
                        mindset: 'reactive'
                    },
                    {
                        id: 'c',
                        text: 'Something trending in my field',
                        mindset: 'transitioning'
                    },
                    {
                        id: 'd',
                        text: 'A problem I\'m genuinely passionate about solving',
                        mindset: 'proactive'
                    }
                ]
            },
            answer: {
                interpretations: {
                    a: {
                        title: 'The Arranged Marriage vs Love Marriage 💑',
                        analogy: 'You\'re treating research like an arranged marriage - letting others decide for you. But research is more like a love marriage - you\'ll spend years with this topic, so you better love it! Imagine being stuck with a topic you hate for 2 years. Yikes!',
                        currentState: 'You\'re giving away your power to choose',
                        betterApproach: 'Collaborate with your supervisor, don\'t just accept assignments. Say: "I\'m interested in X, Y, Z - which aligns with your research?" This shows initiative while respecting their expertise.',
                        instituteImpact: 'Students who own their topic choice produce better research, stay motivated through challenges, and complete projects faster. They become research ambassadors, not reluctant participants.',
                        actionTip: 'Tomorrow: List 3 topics YOU find interesting. Then ask your supervisor: "Which of these aligns with your research focus?" See the difference?'
                    },
                    b: {
                        title: 'The Fast Food vs Gourmet Meal 🍔',
                        analogy: 'You\'re choosing research like picking fast food - quick and easy. But research is a gourmet meal - it takes time to prepare, but the satisfaction is worth it! Easy topics often lead to mediocre results and bored researchers.',
                        currentState: 'You\'re optimizing for short-term ease, not long-term satisfaction',
                        betterApproach: 'Choose based on interest and impact, not just ease. Ask: "Will I be proud of this work in 5 years?" A challenging topic you love beats an easy topic you hate!',
                        instituteImpact: 'Easy research rarely makes institutional impact. Challenging, well-executed research gets published, cited, and attracts funding. Your "difficult" choice today becomes the institute\'s pride tomorrow!',
                        actionTip: 'This week: Find one "difficult but fascinating" problem. Break it into smaller parts. Suddenly, it\'s manageable AND exciting!'
                    },
                    c: {
                        title: 'The Fashion Follower vs Trendsetter 👗',
                        analogy: 'You\'re like someone who only wears what\'s trending. Trendy is good, but crowded! Imagine a research area so hot that 1000 people are working on it. Your work might get lost in the crowd. Be a trendsetter, not just a follower!',
                        currentState: 'You\'re aware of trends but might be following the herd',
                        betterApproach: 'Look at trends, then ask: "What\'s the gap everyone\'s missing?" Or "What will be trending in 2 years?" Early movers in emerging areas become leaders, not followers.',
                        instituteImpact: 'Trend-aware researchers who find unique angles create breakthrough work. They put the institute on the map as innovators, not imitators. Your unique angle = institute\'s competitive advantage!',
                        actionTip: 'Today: Pick a trending topic. Now ask: "What aspect of this is everyone ignoring?" That\'s your golden opportunity!'
                    },
                    d: {
                        title: 'The Problem-Solver Extraordinaire 🦸',
                        analogy: 'You\'re like a superhero who sees a problem and thinks "I must solve this!" This passion is your superpower. Research fueled by genuine passion overcomes all obstacles. You\'ll work weekends not because you have to, but because you want to!',
                        currentState: 'You have the ideal research motivation - problem-driven passion!',
                        betterApproach: 'Keep this fire! Now add strategy: ensure your passion problem is feasible, has supervisor support, and aligns with resources. Passion + Planning = Research Success!',
                        instituteImpact: 'Passionate researchers produce the highest quality work. They inspire others, attract collaborations, and create innovations that put institutions on the global map. Your passion becomes institutional excellence!',
                        actionTip: 'Today: Write your "research manifesto" - why this problem matters to you, to society, and to the institute. Read it when motivation dips!'
                    }
                }
            }
        }
    }
]

// Add similar detailed structures for Faculty and Institute roadmaps...
// (Due to length, showing pattern for one complete example)

export const FACULTY_DETAILED_ROADMAP: DetailedStage[] = [
    // Similar structure with faculty-specific content
]

export const INSTITUTE_DETAILED_ROADMAP: DetailedStage[] = [
    // Similar structure with institutional-specific content
]
