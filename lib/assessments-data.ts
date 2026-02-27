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
    },
    // Stage 4: Research Implementation
    {
        id: 'stage4-pre',
        stageId: 4,
        type: 'pre',
        question: 'Where are you in implementing your research solution?',
        options: [
            {
                id: 'a',
                text: 'Have an idea but no implementation plan',
                emoji: '💭',
                score: 1,
                feedback: 'Great starting point! This activity will help you create a concrete implementation plan.'
            },
            {
                id: 'b',
                text: 'Have a plan but haven\'t started coding/building',
                emoji: '📋',
                score: 2,
                feedback: 'Good preparation! Now it\'s time to turn that plan into action.'
            },
            {
                id: 'c',
                text: 'Started implementation but progress is slow',
                emoji: '🐌',
                score: 3,
                feedback: 'You\'re on the right track! We\'ll help you accelerate with agile methods.'
            },
            {
                id: 'd',
                text: 'Making steady progress with regular milestones',
                emoji: '🚀',
                score: 4,
                feedback: 'Excellent! This activity will help you optimize and document your process.'
            }
        ]
    },
    {
        id: 'stage4-post',
        stageId: 4,
        type: 'post',
        question: 'What will you DO THIS SPRINT (2 weeks) for implementation?',
        options: [
            {
                id: 'a',
                text: 'Maybe start working on it...',
                emoji: '🤷',
                score: 1,
                feedback: 'Action beats intention! Set specific tasks and deadlines for this sprint.'
            },
            {
                id: 'b',
                text: 'Complete 1 major feature/module',
                emoji: '⚙️',
                score: 3,
                feedback: 'Good goal! Breaking work into features makes progress visible.'
            },
            {
                id: 'c',
                text: 'Complete 2-3 features with testing',
                emoji: '✅',
                score: 4,
                feedback: 'Excellent! Testing as you go ensures quality and prevents rework.'
            },
            {
                id: 'd',
                text: 'Complete features + document + weekly supervisor meeting',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! Documentation and feedback loops are key to research success!'
            }
        ]
    },
    // Stage 5: Research Paper Drafting
    {
        id: 'stage5-pre',
        stageId: 5,
        type: 'pre',
        question: 'What\'s your current experience with academic writing?',
        options: [
            {
                id: 'a',
                text: 'Never written a research paper before',
                emoji: '😰',
                score: 1,
                feedback: 'Perfect! This is your chance to learn. We\'ll guide you step-by-step through the process.'
            },
            {
                id: 'b',
                text: 'Written reports but not journal papers',
                emoji: '📝',
                score: 2,
                feedback: 'Good foundation! We\'ll help you transition from reports to publication-quality papers.'
            },
            {
                id: 'c',
                text: 'Drafted papers but not published yet',
                emoji: '📄',
                score: 3,
                feedback: 'You\'re close! We\'ll help you polish and submit for publication.'
            },
            {
                id: 'd',
                text: 'Published papers, want to improve quality',
                emoji: '📚',
                score: 4,
                feedback: 'Great experience! This activity will help you write higher-impact papers.'
            }
        ]
    },
    {
        id: 'stage5-post',
        stageId: 5,
        type: 'post',
        question: 'What will you DO THIS MONTH for paper writing?',
        options: [
            {
                id: 'a',
                text: 'Collect some references...',
                emoji: '📚',
                score: 1,
                feedback: 'References are important, but writing is what matters! Start with 500 words daily.'
            },
            {
                id: 'b',
                text: 'Write 500 words daily for 30 days',
                emoji: '✍️',
                score: 3,
                feedback: 'Excellent commitment! Daily writing builds momentum and completes papers.'
            },
            {
                id: 'c',
                text: 'Complete draft + get peer feedback',
                emoji: '👥',
                score: 4,
                feedback: 'Perfect approach! Peer feedback catches issues before submission.'
            },
            {
                id: 'd',
                text: 'Complete, revise, and submit to journal',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re ready to become a published researcher!'
            }
        ]
    },
    // Stage 6: Patent Drafting
    {
        id: 'stage6-pre',
        stageId: 6,
        type: 'pre',
        question: 'What\'s your understanding of patents and IP protection?',
        options: [
            {
                id: 'a',
                text: 'No idea about patents or how they work',
                emoji: '❓',
                score: 1,
                feedback: 'No problem! This activity will teach you everything about patents from scratch.'
            },
            {
                id: 'b',
                text: 'Know patents exist but never filed one',
                emoji: '🤔',
                score: 2,
                feedback: 'Good awareness! We\'ll guide you through the entire filing process.'
            },
            {
                id: 'c',
                text: 'Understand patents, ready to draft',
                emoji: '📝',
                score: 3,
                feedback: 'Great! We\'ll help you draft strong claims and specifications.'
            },
            {
                id: 'd',
                text: 'Filed patents before, want to improve',
                emoji: '⚖️',
                score: 4,
                feedback: 'Excellent experience! This activity will help you draft stronger patents.'
            }
        ]
    },
    {
        id: 'stage6-post',
        stageId: 6,
        type: 'post',
        question: 'What will you DO THIS MONTH for patent filing?',
        options: [
            {
                id: 'a',
                text: 'Read about patents...',
                emoji: '📖',
                score: 1,
                feedback: 'Reading is good, but action is better! Start with prior art search this week.'
            },
            {
                id: 'b',
                text: 'Complete prior art search',
                emoji: '🔍',
                score: 3,
                feedback: 'Essential step! Prior art search proves your novelty.'
            },
            {
                id: 'c',
                text: 'Draft claims with attorney review',
                emoji: '⚖️',
                score: 4,
                feedback: 'Excellent! Attorney review ensures strong, defensible claims.'
            },
            {
                id: 'd',
                text: 'File provisional patent application',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re protecting your innovation. Now you can publish safely!'
            }
        ]
    },
    // Stage 7: Seed Money Proposal
    {
        id: 'stage7-pre',
        stageId: 7,
        type: 'pre',
        question: 'What\'s your experience with writing funding proposals?',
        options: [
            {
                id: 'a',
                text: 'Never written a proposal before',
                emoji: '😰',
                score: 1,
                feedback: 'Perfect timing! This activity will teach you proposal writing from basics.'
            },
            {
                id: 'b',
                text: 'Written proposals but never funded',
                emoji: '📝',
                score: 2,
                feedback: 'Good experience! We\'ll help you understand what reviewers want to see.'
            },
            {
                id: 'c',
                text: 'Got small grants, want bigger funding',
                emoji: '💰',
                score: 3,
                feedback: 'Great progress! We\'ll help you scale up to larger grants.'
            },
            {
                id: 'd',
                text: 'Successfully funded multiple times',
                emoji: '🎯',
                score: 4,
                feedback: 'Excellent track record! This activity will refine your proposal skills further.'
            }
        ]
    },
    {
        id: 'stage7-post',
        stageId: 7,
        type: 'post',
        question: 'What will you DO THIS MONTH for seed funding?',
        options: [
            {
                id: 'a',
                text: 'Think about what to propose...',
                emoji: '💭',
                score: 1,
                feedback: 'Ideas are good, but proposals win funding! Start writing this week.'
            },
            {
                id: 'b',
                text: 'Draft complete proposal',
                emoji: '📄',
                score: 3,
                feedback: 'Good progress! Make sure to get feedback before submitting.'
            },
            {
                id: 'c',
                text: 'Draft + peer review + revise',
                emoji: '👥',
                score: 4,
                feedback: 'Excellent process! Peer review dramatically improves success rates.'
            },
            {
                id: 'd',
                text: 'Submit to institutional seed grant',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re on your way to securing your first research funding!'
            }
        ]
    },
    // Stage 8: National Funding Proposal
    {
        id: 'stage8-pre',
        stageId: 8,
        type: 'pre',
        question: 'How familiar are you with national funding agencies?',
        options: [
            {
                id: 'a',
                text: 'Don\'t know any national funding schemes',
                emoji: '❓',
                score: 1,
                feedback: 'No worries! We\'ll introduce you to SERB, DST, ICMR, DBT and more.'
            },
            {
                id: 'b',
                text: 'Know agencies but never applied',
                emoji: '🤔',
                score: 2,
                feedback: 'Good awareness! We\'ll help you craft competitive national proposals.'
            },
            {
                id: 'c',
                text: 'Applied but not successful yet',
                emoji: '📝',
                score: 3,
                feedback: 'Persistence pays! We\'ll help you understand what reviewers want.'
            },
            {
                id: 'd',
                text: 'Successfully funded by national agencies',
                emoji: '🏆',
                score: 4,
                feedback: 'Excellent! This activity will help you secure even larger grants.'
            }
        ]
    },
    {
        id: 'stage8-post',
        stageId: 8,
        type: 'post',
        question: 'What will you DO in NEXT 2 MONTHS for national funding?',
        options: [
            {
                id: 'a',
                text: 'Browse funding websites...',
                emoji: '🌐',
                score: 1,
                feedback: 'Browsing is step 1, but writing is what wins grants! Start your draft.'
            },
            {
                id: 'b',
                text: 'Analyze 5 successful proposals',
                emoji: '📚',
                score: 3,
                feedback: 'Smart strategy! Learning from winners improves your chances.'
            },
            {
                id: 'c',
                text: 'Draft complete SERB/DST proposal',
                emoji: '📄',
                score: 4,
                feedback: 'Excellent! National proposals take time - you\'re on the right track.'
            },
            {
                id: 'd',
                text: 'Submit to 2-3 national schemes',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding strategy! Multiple submissions increase success probability!'
            }
        ]
    },
    // Stage 9: International Funding Proposal
    {
        id: 'stage9-pre',
        stageId: 9,
        type: 'pre',
        question: 'What\'s your experience with international collaborations?',
        options: [
            {
                id: 'a',
                text: 'No international connections yet',
                emoji: '🌍',
                score: 1,
                feedback: 'Great opportunity ahead! We\'ll help you build international networks.'
            },
            {
                id: 'b',
                text: 'Know some international researchers',
                emoji: '👥',
                score: 2,
                feedback: 'Good start! We\'ll help you convert connections into collaborations.'
            },
            {
                id: 'c',
                text: 'Have active international collaborations',
                emoji: '🤝',
                score: 3,
                feedback: 'Excellent! Now let\'s secure international funding together.'
            },
            {
                id: 'd',
                text: 'Applied for international grants before',
                emoji: '🌐',
                score: 4,
                feedback: 'Great experience! This activity will improve your success rate.'
            }
        ]
    },
    {
        id: 'stage9-post',
        stageId: 9,
        type: 'post',
        question: 'What will you DO in NEXT 3 MONTHS for international funding?',
        options: [
            {
                id: 'a',
                text: 'Research international opportunities...',
                emoji: '🔍',
                score: 1,
                feedback: 'Research is important, but partnerships are key! Start networking.'
            },
            {
                id: 'b',
                text: 'Connect with 3 international researchers',
                emoji: '🤝',
                score: 3,
                feedback: 'Perfect! International funding requires strong partnerships.'
            },
            {
                id: 'c',
                text: 'Draft collaborative proposal with partners',
                emoji: '📄',
                score: 4,
                feedback: 'Excellent! Collaborative proposals have higher success rates.'
            },
            {
                id: 'd',
                text: 'Submit to EU/NSF/NIH with partners',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re competing at the global level now!'
            }
        ]
    },
    // Stage 10: Seed Lab Setup
    {
        id: 'stage10-pre',
        stageId: 10,
        type: 'pre',
        question: 'Where are you in setting up your research lab?',
        options: [
            {
                id: 'a',
                text: 'No lab space or equipment yet',
                emoji: '🏗️',
                score: 1,
                feedback: 'Exciting journey ahead! We\'ll help you plan and build your lab.'
            },
            {
                id: 'b',
                text: 'Have space but no equipment',
                emoji: '📦',
                score: 2,
                feedback: 'Good start! We\'ll help you prioritize and procure equipment.'
            },
            {
                id: 'c',
                text: 'Have basic equipment, need more',
                emoji: '⚙️',
                score: 3,
                feedback: 'Making progress! We\'ll help you scale up strategically.'
            },
            {
                id: 'd',
                text: 'Lab operational with team',
                emoji: '🔬',
                score: 4,
                feedback: 'Excellent! This activity will help you optimize operations.'
            }
        ]
    },
    {
        id: 'stage10-post',
        stageId: 10,
        type: 'post',
        question: 'What will you DO in NEXT 3 MONTHS for lab setup?',
        options: [
            {
                id: 'a',
                text: 'Make a wish list of equipment...',
                emoji: '📝',
                score: 1,
                feedback: 'Lists are good, but action is better! Get quotes and start procurement.'
            },
            {
                id: 'b',
                text: 'Procure 3-5 essential equipment',
                emoji: '📦',
                score: 3,
                feedback: 'Smart prioritization! Start with essentials, expand later.'
            },
            {
                id: 'c',
                text: 'Setup lab + recruit 2-3 team members',
                emoji: '👥',
                score: 4,
                feedback: 'Excellent! Equipment + people = productive lab.'
            },
            {
                id: 'd',
                text: 'Operational lab with first experiments running',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! Your lab is generating results. That\'s success!'
            }
        ]
    },
    // Stage 11: Preliminary Research to TRL 1-3
    {
        id: 'stage11-pre',
        stageId: 11,
        type: 'pre',
        question: 'What\'s your understanding of Technology Readiness Levels (TRL)?',
        options: [
            {
                id: 'a',
                text: 'Never heard of TRL before',
                emoji: '❓',
                score: 1,
                feedback: 'Perfect! We\'ll teach you the TRL framework and how to progress.'
            },
            {
                id: 'b',
                text: 'Know TRL but haven\'t built prototypes',
                emoji: '🤔',
                score: 2,
                feedback: 'Good awareness! Now it\'s time to build and test.'
            },
            {
                id: 'c',
                text: 'Built prototypes but not systematic',
                emoji: '🔧',
                score: 3,
                feedback: 'Great hands-on experience! We\'ll help you systematize the process.'
            },
            {
                id: 'd',
                text: 'Systematically progressing through TRLs',
                emoji: '📈',
                score: 4,
                feedback: 'Excellent! This activity will accelerate your TRL progression.'
            }
        ]
    },
    {
        id: 'stage11-post',
        stageId: 11,
        type: 'post',
        question: 'What will you DO in NEXT 6 MONTHS for prototype development?',
        options: [
            {
                id: 'a',
                text: 'Think about prototype design...',
                emoji: '💭',
                score: 1,
                feedback: 'Thinking is good, but building is better! Start with simplest version.'
            },
            {
                id: 'b',
                text: 'Build first prototype (TRL 2)',
                emoji: '🔧',
                score: 3,
                feedback: 'Great start! First prototype teaches you what works and what doesn\'t.'
            },
            {
                id: 'c',
                text: 'Build + test + iterate 3-5 versions',
                emoji: '🔄',
                score: 4,
                feedback: 'Excellent! Iteration is key to reaching working prototype.'
            },
            {
                id: 'd',
                text: 'Achieve TRL 3 with performance data',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! Proof of concept with data is ready for scale-up!'
            }
        ]
    },
    // Stage 12: Extended Lab with Major Funding
    {
        id: 'stage12-pre',
        stageId: 12,
        type: 'pre',
        question: 'How experienced are you with managing large research projects?',
        options: [
            {
                id: 'a',
                text: 'Never managed a large project',
                emoji: '😰',
                score: 1,
                feedback: 'Great learning opportunity! We\'ll teach you project management skills.'
            },
            {
                id: 'b',
                text: 'Managed small projects, ready to scale',
                emoji: '📈',
                score: 2,
                feedback: 'Good foundation! Scaling requires new skills - we\'ll help you learn.'
            },
            {
                id: 'c',
                text: 'Managing medium projects with team',
                emoji: '👥',
                score: 3,
                feedback: 'Great experience! We\'ll help you scale to major projects.'
            },
            {
                id: 'd',
                text: 'Successfully managed major funded projects',
                emoji: '🏆',
                score: 4,
                feedback: 'Excellent! This activity will help you optimize and expand further.'
            }
        ]
    },
    {
        id: 'stage12-post',
        stageId: 12,
        type: 'post',
        question: 'What will you DO in NEXT 12 MONTHS for lab expansion?',
        options: [
            {
                id: 'a',
                text: 'Plan for expansion...',
                emoji: '📋',
                score: 1,
                feedback: 'Planning is important, but execution is what matters! Start hiring.'
            },
            {
                id: 'b',
                text: 'Expand team to 10+ members',
                emoji: '👥',
                score: 3,
                feedback: 'Great! Larger team means more parallel projects and faster progress.'
            },
            {
                id: 'c',
                text: 'Scale prototype to pilot (TRL 6)',
                emoji: '🏭',
                score: 4,
                feedback: 'Excellent! Pilot scale proves commercial viability.'
            },
            {
                id: 'd',
                text: 'Publish 5+ papers + file 3+ patents',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! High output shows your lab is world-class!'
            }
        ]
    },
    // Stage 13: Tangible Outcomes & Industry Collaboration
    {
        id: 'stage13-pre',
        stageId: 13,
        type: 'pre',
        question: 'What\'s your experience with industry partnerships?',
        options: [
            {
                id: 'a',
                text: 'No industry connections yet',
                emoji: '🏢',
                score: 1,
                feedback: 'Great opportunity! We\'ll help you build industry partnerships.'
            },
            {
                id: 'b',
                text: 'Know industry people but no projects',
                emoji: '🤝',
                score: 2,
                feedback: 'Good network! We\'ll help you convert connections into collaborations.'
            },
            {
                id: 'c',
                text: 'Have 1-2 industry projects',
                emoji: '💼',
                score: 3,
                feedback: 'Great start! We\'ll help you scale to multiple partnerships.'
            },
            {
                id: 'd',
                text: 'Multiple industry partnerships with revenue',
                emoji: '💰',
                score: 4,
                feedback: 'Excellent! This activity will help you maximize impact and revenue.'
            }
        ]
    },
    {
        id: 'stage13-post',
        stageId: 13,
        type: 'post',
        question: 'What will you DO in NEXT 12 MONTHS for industry collaboration?',
        options: [
            {
                id: 'a',
                text: 'Attend industry events...',
                emoji: '🎤',
                score: 1,
                feedback: 'Networking is good, but proposals win projects! Start pitching.'
            },
            {
                id: 'b',
                text: 'Partner with 2-3 companies',
                emoji: '🤝',
                score: 3,
                feedback: 'Great! Multiple partnerships diversify risk and increase impact.'
            },
            {
                id: 'c',
                text: 'Develop market-ready product (TRL 9)',
                emoji: '📦',
                score: 4,
                feedback: 'Excellent! Market-ready products create real-world impact.'
            },
            {
                id: 'd',
                text: 'Generate ₹50L+ revenue from partnerships',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! Revenue proves your research has commercial value!'
            }
        ]
    },
    // Stage 14: Center of Excellence Establishment
    {
        id: 'stage14-pre',
        stageId: 14,
        type: 'pre',
        question: 'How ready are you to establish a Center of Excellence?',
        options: [
            {
                id: 'a',
                text: 'Just starting to think about it',
                emoji: '💭',
                score: 1,
                feedback: 'Perfect timing! We\'ll help you plan and build your CoE.'
            },
            {
                id: 'b',
                text: 'Have vision but need execution plan',
                emoji: '🎯',
                score: 2,
                feedback: 'Good vision! We\'ll help you create actionable implementation plan.'
            },
            {
                id: 'c',
                text: 'Building CoE with institutional support',
                emoji: '🏗️',
                score: 3,
                feedback: 'Great progress! We\'ll help you accelerate and optimize.'
            },
            {
                id: 'd',
                text: 'CoE operational with national recognition',
                emoji: '🏆',
                score: 4,
                feedback: 'Excellent! This activity will help you achieve international recognition.'
            }
        ]
    },
    {
        id: 'stage14-post',
        stageId: 14,
        type: 'post',
        question: 'What will you DO in NEXT 24 MONTHS for CoE establishment?',
        options: [
            {
                id: 'a',
                text: 'Draft CoE vision document...',
                emoji: '📄',
                score: 1,
                feedback: 'Vision is important, but execution is what matters! Start building.'
            },
            {
                id: 'b',
                text: 'Secure multi-year funding (₹1Cr+)',
                emoji: '💰',
                score: 3,
                feedback: 'Essential! Sustainable funding ensures long-term success.'
            },
            {
                id: 'c',
                text: 'Build team of 20+ researchers',
                emoji: '👥',
                score: 4,
                feedback: 'Excellent! Large team enables multiple research thrusts.'
            },
            {
                id: 'd',
                text: 'Achieve national recognition as leading CoE',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re building an institution that will outlast you!'
            }
        ]
    },
    // Stage 15: Academic Program Launch
    {
        id: 'stage15-pre',
        stageId: 15,
        type: 'pre',
        question: 'What\'s your experience with curriculum design and program launch?',
        options: [
            {
                id: 'a',
                text: 'Never designed a curriculum before',
                emoji: '📚',
                score: 1,
                feedback: 'Exciting opportunity! We\'ll teach you NEP 2020 curriculum design.'
            },
            {
                id: 'b',
                text: 'Taught courses but never designed program',
                emoji: '👨‍🏫',
                score: 2,
                feedback: 'Good teaching experience! Now let\'s create a complete program.'
            },
            {
                id: 'c',
                text: 'Involved in curriculum committees',
                emoji: '📋',
                score: 3,
                feedback: 'Great experience! We\'ll help you lead program development.'
            },
            {
                id: 'd',
                text: 'Successfully launched academic programs',
                emoji: '🎓',
                score: 4,
                feedback: 'Excellent! This activity will help you create even better programs.'
            }
        ]
    },
    {
        id: 'stage15-post',
        stageId: 15,
        type: 'post',
        question: 'What will you DO in NEXT 12 MONTHS for program launch?',
        options: [
            {
                id: 'a',
                text: 'Research other programs...',
                emoji: '🔍',
                score: 1,
                feedback: 'Research is good, but design is what matters! Start curriculum draft.'
            },
            {
                id: 'b',
                text: 'Design NEP 2020 compliant curriculum',
                emoji: '📚',
                score: 3,
                feedback: 'Perfect! NEP 2020 alignment ensures future-ready education.'
            },
            {
                id: 'c',
                text: 'Get approvals + recruit faculty',
                emoji: '✅',
                score: 4,
                feedback: 'Excellent! Approvals and faculty are critical for launch.'
            },
            {
                id: 'd',
                text: 'Launch program with first batch of students',
                emoji: '🎯',
                score: 4,
                feedback: 'Outstanding! You\'re creating the next generation of researchers!'
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
