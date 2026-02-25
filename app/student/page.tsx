'use client'

import { useState } from 'react'
import { CheckCircle, Circle, ArrowRight, BookOpen, Search, Plus, Trash2, Beaker, Target, TrendingUp, Award } from 'lucide-react'

const RESEARCH_STEPS = [
    { id: 1, title: 'Choose Domain', description: 'Select your research area', threshold: 0 },
    { id: 2, title: 'Problem Builder', description: 'Identify research problem', threshold: 20 },
    { id: 3, title: 'Literature Hunt', description: 'Review existing research', threshold: 40 },
    { id: 4, title: 'Experiment Builder', description: 'Design methodology', threshold: 60 },
    { id: 5, title: 'Outcome Path', description: 'Define expected results', threshold: 80 },
]

const DOMAINS = [
    'Artificial Intelligence', 'Machine Learning', 'Data Science',
    'Cybersecurity', 'IoT', 'Blockchain', 'Cloud Computing',
    'Biotechnology', 'Renewable Energy', 'Quantum Computing'
]

const SAMPLE_PAPERS = [
    { id: 1, title: 'Deep Learning for Image Recognition', year: 2023, citations: 245, relevance: 95 },
    { id: 2, title: 'Neural Networks in Computer Vision', year: 2022, citations: 189, relevance: 88 },
    { id: 3, title: 'Transfer Learning Applications', year: 2024, citations: 67, relevance: 82 },
    { id: 4, title: 'Convolutional Neural Networks Survey', year: 2023, citations: 312, relevance: 90 },
    { id: 5, title: 'AI Ethics and Bias Detection', year: 2024, citations: 45, relevance: 75 },
]

const EXPERIMENT_TYPES = [
    { id: 'quantitative', name: 'Quantitative', icon: '📊', description: 'Numerical data and statistical analysis' },
    { id: 'qualitative', name: 'Qualitative', icon: '📝', description: 'Descriptive and observational data' },
    { id: 'mixed', name: 'Mixed Methods', icon: '🔬', description: 'Combination of both approaches' },
    { id: 'computational', name: 'Computational', icon: '💻', description: 'Algorithm and simulation based' },
]

// Psychology Questions for Each Step
const PSYCHOLOGY_QUESTIONS = {
    1: {
        question: "When choosing a research area, what drives you most?",
        options: [
            { id: 'a', text: "Solving real-world problems that impact society", mindset: "Impact-Driven Innovator" },
            { id: 'b', text: "Exploring cutting-edge technology and new frontiers", mindset: "Curious Explorer" },
            { id: 'c', text: "Building on existing knowledge systematically", mindset: "Methodical Builder" },
            { id: 'd', text: "Following my passion regardless of trends", mindset: "Passionate Pioneer" }
        ],
        interpretations: {
            'a': {
                title: "Impact-Driven Innovator 🌍",
                description: "You're motivated by making a tangible difference. Your research will likely focus on practical applications and societal benefits.",
                strengths: "Strong sense of purpose, practical thinking, stakeholder awareness",
                motivation: "Remember: The best research solves real problems. Your impact-first mindset will help you stay focused on what truly matters. Keep asking 'Who benefits from this?'"
            },
            'b': {
                title: "Curious Explorer 🔭",
                description: "You're driven by discovery and innovation. You thrive on pushing boundaries and exploring uncharted territories.",
                strengths: "Creative thinking, adaptability, enthusiasm for learning",
                motivation: "Your curiosity is your superpower! Great researchers ask 'What if?' Channel this energy into systematic exploration. Every breakthrough started with someone like you asking bold questions."
            },
            'c': {
                title: "Methodical Builder 🏗️",
                description: "You value structure and incremental progress. You excel at building comprehensive understanding through systematic approaches.",
                strengths: "Attention to detail, systematic thinking, thoroughness",
                motivation: "Your methodical approach is invaluable in research. Science advances through careful, systematic work. Your patience and precision will lead to reliable, reproducible results."
            },
            'd': {
                title: "Passionate Pioneer 🔥",
                description: "You're driven by intrinsic motivation and personal interest. Your enthusiasm will sustain you through research challenges.",
                strengths: "Intrinsic motivation, persistence, authentic engagement",
                motivation: "Passion is the fuel for long-term research success. Your genuine interest will help you overcome obstacles. Trust your instincts - the best research comes from authentic curiosity."
            }
        }
    },
    2: {
        question: "When you encounter a problem, what's your first instinct?",
        options: [
            { id: 'a', text: "Break it down into smaller, manageable parts", mindset: "Analytical Thinker" },
            { id: 'b', text: "Look for similar problems others have solved", mindset: "Collaborative Learner" },
            { id: 'c', text: "Imagine multiple creative solutions immediately", mindset: "Creative Synthesizer" },
            { id: 'd', text: "Question why the problem exists in the first place", mindset: "Critical Questioner" }
        ],
        interpretations: {
            'a': {
                title: "Analytical Thinker 🧩",
                description: "You excel at decomposing complex problems into manageable components. This systematic approach is crucial for research.",
                strengths: "Problem decomposition, logical reasoning, structured thinking",
                motivation: "Your analytical skills are perfect for research! Complex problems become solvable when broken down. Keep using this approach - it's how major breakthroughs happen."
            },
            'b': {
                title: "Collaborative Learner 🤝",
                description: "You value learning from others' experiences. This collaborative mindset accelerates research progress.",
                strengths: "Learning from others, building on existing work, networking",
                motivation: "Standing on the shoulders of giants is smart research! Your ability to learn from others will help you avoid pitfalls and build better solutions. Collaboration is key to modern research."
            },
            'c': {
                title: "Creative Synthesizer 🎨",
                description: "You generate multiple innovative solutions quickly. This creative thinking leads to novel research approaches.",
                strengths: "Divergent thinking, innovation, multiple perspectives",
                motivation: "Your creative mind is a research asset! Novel solutions come from thinking differently. Balance creativity with rigor, and you'll make unique contributions to your field."
            },
            'd': {
                title: "Critical Questioner 🤔",
                description: "You challenge assumptions and dig deeper into root causes. This critical thinking is essential for impactful research.",
                strengths: "Critical thinking, root cause analysis, challenging assumptions",
                motivation: "Questioning assumptions leads to paradigm shifts! Your critical mindset helps identify truly important problems. Keep asking 'why' - that's how we discover what really matters."
            }
        }
    },
    3: {
        question: "How do you prefer to learn new information?",
        options: [
            { id: 'a', text: "Reading comprehensive reviews and summaries", mindset: "Systematic Learner" },
            { id: 'b', text: "Diving into original research papers directly", mindset: "Deep Diver" },
            { id: 'c', text: "Watching videos and visual explanations", mindset: "Visual Learner" },
            { id: 'd', text: "Discussing and debating with peers", mindset: "Social Learner" }
        ],
        interpretations: {
            'a': {
                title: "Systematic Learner 📚",
                description: "You build knowledge systematically through structured resources. This approach ensures comprehensive understanding.",
                strengths: "Structured learning, comprehensive understanding, efficient synthesis",
                motivation: "Your systematic approach to literature review will give you a solid foundation. Review papers are your friends - they provide the big picture you need to identify gaps."
            },
            'b': {
                title: "Deep Diver 🏊",
                description: "You prefer primary sources and original research. This depth-first approach reveals nuances others might miss.",
                strengths: "Deep understanding, attention to detail, critical reading",
                motivation: "Your willingness to engage with primary sources is admirable! You'll catch details others miss. Balance depth with breadth to ensure you see the full landscape."
            },
            'c': {
                title: "Visual Learner 👁️",
                description: "You process information best through visual representations. This helps you see patterns and connections.",
                strengths: "Pattern recognition, visual thinking, conceptual understanding",
                motivation: "Visual thinking helps you see connections others miss! Create concept maps and diagrams as you review literature. Your visual approach will help you synthesize complex information."
            },
            'd': {
                title: "Social Learner 💬",
                description: "You learn through discussion and collaboration. This social approach enriches understanding through multiple perspectives.",
                strengths: "Collaborative learning, perspective-taking, communication",
                motivation: "Discussion deepens understanding! Join research groups and journal clubs. Your social learning style will help you build networks and gain diverse perspectives on your research."
            }
        }
    },
    4: {
        question: "When designing an experiment, what concerns you most?",
        options: [
            { id: 'a', text: "Ensuring the methodology is rigorous and valid", mindset: "Quality Guardian" },
            { id: 'b', text: "Making sure it's feasible with available resources", mindset: "Pragmatic Planner" },
            { id: 'c', text: "Designing something innovative and novel", mindset: "Innovation Seeker" },
            { id: 'd', text: "Ensuring results will be reproducible by others", mindset: "Reliability Champion" }
        ],
        interpretations: {
            'a': {
                title: "Quality Guardian 🛡️",
                description: "You prioritize methodological rigor and validity. This ensures your research produces trustworthy results.",
                strengths: "Attention to validity, methodological rigor, quality focus",
                motivation: "Your commitment to quality is the hallmark of great research! Rigorous methodology is what separates science from speculation. Your high standards will earn respect in your field."
            },
            'b': {
                title: "Pragmatic Planner 📋",
                description: "You balance ambition with feasibility. This practical approach helps you complete research successfully.",
                strengths: "Resource awareness, practical thinking, project management",
                motivation: "Feasibility is crucial for research success! Your pragmatic approach means you'll actually finish your research. Better to complete a feasible study than abandon an impossible one."
            },
            'c': {
                title: "Innovation Seeker 💡",
                description: "You strive for novel approaches and creative methodologies. This innovation drives research forward.",
                strengths: "Creative methodology, innovation, novel approaches",
                motivation: "Innovation in methodology can be as important as findings! Your creative approach may open new research directions. Balance novelty with proven techniques for best results."
            },
            'd': {
                title: "Reliability Champion 🔄",
                description: "You value reproducibility and transparency. This commitment strengthens the entire research community.",
                strengths: "Reproducibility focus, transparency, scientific integrity",
                motivation: "Reproducibility is the foundation of science! Your commitment to transparency and replicability serves the entire research community. This mindset builds trust and lasting impact."
            }
        }
    },
    5: {
        question: "What motivates you most about completing research?",
        options: [
            { id: 'a', text: "Contributing new knowledge to humanity", mindset: "Knowledge Builder" },
            { id: 'b', text: "Solving a specific problem or challenge", mindset: "Problem Solver" },
            { id: 'c', text: "Personal growth and skill development", mindset: "Growth Seeker" },
            { id: 'd', text: "Recognition and career advancement", mindset: "Achievement Oriented" }
        ],
        interpretations: {
            'a': {
                title: "Knowledge Builder 🏛️",
                description: "You're motivated by contributing to collective human knowledge. This altruistic drive sustains long-term research careers.",
                strengths: "Long-term thinking, altruistic motivation, big-picture focus",
                motivation: "Your desire to contribute to human knowledge is noble and powerful! This intrinsic motivation will sustain you through challenges. Remember: every small contribution adds to our collective understanding."
            },
            'b': {
                title: "Problem Solver 🔧",
                description: "You're driven by finding solutions to specific challenges. This goal-oriented approach leads to practical impact.",
                strengths: "Goal orientation, practical focus, solution-minded",
                motivation: "Problem-solving is at the heart of applied research! Your focus on solutions will lead to tangible impact. Keep your problem clearly defined - it will guide you through challenges."
            },
            'c': {
                title: "Growth Seeker 🌱",
                description: "You value personal development and learning. This growth mindset is essential for research success.",
                strengths: "Growth mindset, learning orientation, self-improvement",
                motivation: "Research is the ultimate growth opportunity! Every challenge teaches you something new. Your growth mindset means you'll view obstacles as learning opportunities, not failures."
            },
            'd': {
                title: "Achievement Oriented 🏆",
                description: "You're motivated by recognition and career goals. This ambition drives productivity and excellence.",
                strengths: "Ambition, productivity, excellence pursuit",
                motivation: "Ambition drives achievement! Your goal-oriented approach will help you stay productive and focused. Balance external recognition with intrinsic satisfaction for sustainable success."
            }
        }
    }
}

export default function StudentPortal() {
    const [currentStep, setCurrentStep] = useState(1)
    const [score, setScore] = useState(0)
    const [selectedDomain, setSelectedDomain] = useState('')
    const [problem, setProblem] = useState('')

    // Literature Hunt state
    const [selectedPapers, setSelectedPapers] = useState<number[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [literatureNotes, setLiteratureNotes] = useState('')

    // Experiment Builder state
    const [experimentType, setExperimentType] = useState('')
    const [hypothesis, setHypothesis] = useState('')
    const [variables, setVariables] = useState<{ independent: string[], dependent: string[], controlled: string[] }>({
        independent: [],
        dependent: [],
        controlled: []
    })
    const [methodology, setMethodology] = useState('')
    const [newVariable, setNewVariable] = useState({ type: 'independent', value: '' })

    // Outcome Path state
    const [expectedOutcomes, setExpectedOutcomes] = useState<string[]>([])
    const [impactAreas, setImpactAreas] = useState<string[]>([])
    const [timeline, setTimeline] = useState('')
    const [newOutcome, setNewOutcome] = useState('')
    const [newImpact, setNewImpact] = useState('')

    // Psychology Question state
    const [psychologyAnswers, setPsychologyAnswers] = useState<{ [key: number]: string }>({})
    const [showInterpretation, setShowInterpretation] = useState<{ [key: number]: boolean }>({})

    const handlePsychologyAnswer = (stepId: number, answerId: string) => {
        setPsychologyAnswers(prev => ({ ...prev, [stepId]: answerId }))
        setShowInterpretation(prev => ({ ...prev, [stepId]: true }))
    }

    const handleDomainSelect = (domain: string) => {
        setSelectedDomain(domain)
        setScore(25)
    }

    const handleProblemSubmit = () => {
        if (problem.length > 50) {
            setScore(45)
        }
        setCurrentStep(3)
    }

    const handleLiteratureComplete = () => {
        if (selectedPapers.length >= 3 && literatureNotes.length > 100) {
            setScore(65)
        }
        setCurrentStep(4)
    }

    const handleExperimentComplete = () => {
        if (experimentType && hypothesis && variables.independent.length > 0 && methodology.length > 50) {
            setScore(85)
        }
        setCurrentStep(5)
    }

    const handleOutcomeComplete = () => {
        if (expectedOutcomes.length >= 2 && impactAreas.length >= 2 && timeline) {
            setScore(100)
        }
    }

    const togglePaper = (paperId: number) => {
        setSelectedPapers(prev =>
            prev.includes(paperId) ? prev.filter(id => id !== paperId) : [...prev, paperId]
        )
    }

    const addVariable = () => {
        if (newVariable.value.trim()) {
            setVariables(prev => ({
                ...prev,
                [newVariable.type]: [...prev[newVariable.type as keyof typeof prev], newVariable.value]
            }))
            setNewVariable({ ...newVariable, value: '' })
        }
    }

    const removeVariable = (type: string, index: number) => {
        setVariables(prev => ({
            ...prev,
            [type]: prev[type as keyof typeof prev].filter((_, i) => i !== index)
        }))
    }

    const addOutcome = () => {
        if (newOutcome.trim()) {
            setExpectedOutcomes(prev => [...prev, newOutcome])
            setNewOutcome('')
        }
    }

    const addImpact = () => {
        if (newImpact.trim()) {
            setImpactAreas(prev => [...prev, newImpact])
            setNewImpact('')
        }
    }

    const canProgress = (step: number) => {
        const stepData = RESEARCH_STEPS.find(s => s.id === step)
        return stepData ? score >= stepData.threshold : false
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-blue-600">Student Research Playground</h1>
                    <p className="text-sm text-gray-600">Experiential Learning - NEP 2020</p>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Welcome Section for Beginners */}
                {currentStep === 1 && score === 0 && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-8 mb-8 shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">🎓 Welcome to Your Research Journey!</h2>
                        <p className="text-xl mb-4">
                            Starting from zero? Perfect! This platform will guide you step-by-step from complete beginner to confident researcher.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                                <div className="text-3xl mb-2">🎯</div>
                                <h3 className="font-bold mb-1">No Experience Needed</h3>
                                <p className="text-sm opacity-90">We'll teach you everything from scratch</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                                <div className="text-3xl mb-2">📚</div>
                                <h3 className="font-bold mb-1">Learn by Doing</h3>
                                <p className="text-sm opacity-90">Build your research plan interactively</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                                <div className="text-3xl mb-2">🚀</div>
                                <h3 className="font-bold mb-1">Your Pace, Your Way</h3>
                                <p className="text-sm opacity-90">Explore freely, no pressure</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Progress Bar */}
                <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Your Research Journey</h2>
                        <div className="text-3xl font-bold text-blue-600">{score}%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500"
                            style={{ width: `${score}%` }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-5 gap-4">
                        {RESEARCH_STEPS.map((step) => (
                            <div
                                key={step.id}
                                className={`text-center p-4 rounded-lg border-2 transition-all cursor-pointer ${currentStep === step.id
                                    ? 'border-blue-500 bg-blue-50'
                                    : canProgress(step.id)
                                        ? 'border-green-500 bg-green-50'
                                        : 'border-gray-200 bg-gray-50'
                                    }`}
                                onClick={() => canProgress(step.id) && setCurrentStep(step.id)}
                            >
                                {canProgress(step.id) ? (
                                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                ) : (
                                    <Circle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                )}
                                <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                    {/* Step 1: Choose Domain */}
                    {currentStep === 1 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Choose Your Research Domain</h2>
                            <p className="text-gray-600 mb-6 text-lg">Select an area that interests you</p>

                            {/* Psychology Question */}
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6 mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">?</div>
                                    <h3 className="text-xl font-bold text-indigo-900">Mindset Discovery</h3>
                                </div>
                                <p className="text-lg font-semibold mb-4 text-gray-800">
                                    {PSYCHOLOGY_QUESTIONS[1].question}
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 mb-4">
                                    {PSYCHOLOGY_QUESTIONS[1].options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePsychologyAnswer(1, option.id)}
                                            className={`p-4 rounded-lg text-left transition-all border-2 ${psychologyAnswers[1] === option.id
                                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                                                : 'bg-white border-indigo-200 hover:border-indigo-400 text-gray-700'
                                                }`}
                                        >
                                            <div className="font-semibold mb-1">{option.id.toUpperCase()}.</div>
                                            <div className="text-sm">{option.text}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Interpretation */}
                                {showInterpretation[1] && psychologyAnswers[1] && (
                                    <div className="bg-white rounded-lg p-5 border-2 border-indigo-300 animate-fadeIn">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="text-2xl">🎯</div>
                                            <h4 className="text-xl font-bold text-indigo-900">
                                                {PSYCHOLOGY_QUESTIONS[1].interpretations[psychologyAnswers[1]].title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            {PSYCHOLOGY_QUESTIONS[1].interpretations[psychologyAnswers[1]].description}
                                        </p>
                                        <div className="bg-indigo-50 rounded-lg p-4 mb-3">
                                            <p className="text-sm font-semibold text-indigo-900 mb-1">Your Strengths:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[1].interpretations[psychologyAnswers[1]].strengths}
                                            </p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                            <p className="text-sm font-semibold text-green-900 mb-1">💪 Motivation Boost:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[1].interpretations[psychologyAnswers[1]].motivation}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Educational Content */}
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-xl">
                                <h3 className="font-bold text-lg mb-2 text-blue-900">💡 Why This Matters</h3>
                                <p className="text-gray-700 mb-3">
                                    Choosing the right domain is the foundation of your research journey. Pick something you're genuinely curious about - passion fuels persistence in research!
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-3">
                                    <h4 className="font-bold mb-2 text-blue-800">Quick Tips:</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>✓ Choose based on interest, not just trends</li>
                                        <li>✓ Consider available resources and mentors</li>
                                        <li>✓ Think about real-world problems you want to solve</li>
                                        <li>✓ Don't worry - you can explore multiple areas later!</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                {DOMAINS.map((domain) => (
                                    <button
                                        key={domain}
                                        onClick={() => handleDomainSelect(domain)}
                                        className={`p-6 rounded-xl border-2 text-left transition-all text-lg ${selectedDomain === domain
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-blue-300'
                                            }`}
                                    >
                                        {domain}
                                    </button>
                                ))}
                            </div>

                            {selectedDomain && (
                                <button
                                    onClick={() => setCurrentStep(2)}
                                    className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 flex items-center gap-2"
                                >
                                    Continue to Problem Builder <ArrowRight />
                                </button>
                            )}
                        </div>
                    )}


                    {/* Step 2: Problem Builder */}
                    {currentStep === 2 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Define Your Research Problem</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Domain: <span className="font-bold text-blue-600">{selectedDomain}</span>
                            </p>

                            {/* Psychology Question */}
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">?</div>
                                    <h3 className="text-xl font-bold text-purple-900">Mindset Discovery</h3>
                                </div>
                                <p className="text-lg font-semibold mb-4 text-gray-800">
                                    {PSYCHOLOGY_QUESTIONS[2].question}
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 mb-4">
                                    {PSYCHOLOGY_QUESTIONS[2].options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePsychologyAnswer(2, option.id)}
                                            className={`p-4 rounded-lg text-left transition-all border-2 ${psychologyAnswers[2] === option.id
                                                ? 'bg-purple-600 text-white border-purple-600 shadow-lg'
                                                : 'bg-white border-purple-200 hover:border-purple-400 text-gray-700'
                                                }`}
                                        >
                                            <div className="font-semibold mb-1">{option.id.toUpperCase()}.</div>
                                            <div className="text-sm">{option.text}</div>
                                        </button>
                                    ))}
                                </div>

                                {showInterpretation[2] && psychologyAnswers[2] && (
                                    <div className="bg-white rounded-lg p-5 border-2 border-purple-300 animate-fadeIn">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="text-2xl">🎯</div>
                                            <h4 className="text-xl font-bold text-purple-900">
                                                {PSYCHOLOGY_QUESTIONS[2].interpretations[psychologyAnswers[2]].title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            {PSYCHOLOGY_QUESTIONS[2].interpretations[psychologyAnswers[2]].description}
                                        </p>
                                        <div className="bg-purple-50 rounded-lg p-4 mb-3">
                                            <p className="text-sm font-semibold text-purple-900 mb-1">Your Strengths:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[2].interpretations[psychologyAnswers[2]].strengths}
                                            </p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                            <p className="text-sm font-semibold text-green-900 mb-1">💪 Motivation Boost:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[2].interpretations[psychologyAnswers[2]].motivation}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Educational Content */}
                            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-xl">
                                <h3 className="font-bold text-lg mb-2 text-purple-900">💡 What Makes a Good Research Problem?</h3>
                                <p className="text-gray-700 mb-3">
                                    A strong research problem is specific, measurable, and addresses a real gap in knowledge or practice. Think about what frustrates you or what could be improved in {selectedDomain}.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-3">
                                    <h4 className="font-bold mb-2 text-purple-800">Problem Statement Formula:</h4>
                                    <p className="text-sm text-gray-700 mb-2">
                                        "In [context], there is a problem with [issue], which affects [stakeholders], resulting in [consequences]."
                                    </p>
                                    <h4 className="font-bold mb-2 mt-3 text-purple-800">Example:</h4>
                                    <p className="text-sm text-gray-700 italic">
                                        "In healthcare AI systems, there is a problem with bias in diagnostic algorithms, which affects minority patients, resulting in misdiagnosis and health disparities."
                                    </p>
                                </div>
                            </div>

                            <textarea
                                value={problem}
                                onChange={(e) => setProblem(e.target.value)}
                                placeholder="Describe the problem you want to solve... (minimum 50 characters)"
                                className="w-full h-48 p-6 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none"
                            />

                            <div className="mt-4 text-sm text-gray-600">
                                Characters: {problem.length} / 50 minimum
                            </div>

                            <button
                                onClick={handleProblemSubmit}
                                className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 flex items-center gap-2"
                            >
                                Continue to Literature Hunt <ArrowRight />
                            </button>
                        </div>
                    )}

                    {/* Step 3: Literature Hunt */}
                    {currentStep === 3 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen className="w-10 h-10 text-blue-600" />
                                <div>
                                    <h2 className="text-3xl font-bold">Literature Hunt</h2>
                                    <p className="text-gray-600 text-lg">Explore existing research in {selectedDomain}</p>
                                </div>
                            </div>

                            {/* Psychology Question */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">?</div>
                                    <h3 className="text-xl font-bold text-blue-900">Mindset Discovery</h3>
                                </div>
                                <p className="text-lg font-semibold mb-4 text-gray-800">
                                    {PSYCHOLOGY_QUESTIONS[3].question}
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 mb-4">
                                    {PSYCHOLOGY_QUESTIONS[3].options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePsychologyAnswer(3, option.id)}
                                            className={`p-4 rounded-lg text-left transition-all border-2 ${psychologyAnswers[3] === option.id
                                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                                                : 'bg-white border-blue-200 hover:border-blue-400 text-gray-700'
                                                }`}
                                        >
                                            <div className="font-semibold mb-1">{option.id.toUpperCase()}.</div>
                                            <div className="text-sm">{option.text}</div>
                                        </button>
                                    ))}
                                </div>

                                {showInterpretation[3] && psychologyAnswers[3] && (
                                    <div className="bg-white rounded-lg p-5 border-2 border-blue-300 animate-fadeIn">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="text-2xl">🎯</div>
                                            <h4 className="text-xl font-bold text-blue-900">
                                                {PSYCHOLOGY_QUESTIONS[3].interpretations[psychologyAnswers[3]].title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            {PSYCHOLOGY_QUESTIONS[3].interpretations[psychologyAnswers[3]].description}
                                        </p>
                                        <div className="bg-blue-50 rounded-lg p-4 mb-3">
                                            <p className="text-sm font-semibold text-blue-900 mb-1">Your Strengths:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[3].interpretations[psychologyAnswers[3]].strengths}
                                            </p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                            <p className="text-sm font-semibold text-green-900 mb-1">💪 Motivation Boost:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[3].interpretations[psychologyAnswers[3]].motivation}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Educational Content */}
                            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-xl">
                                <h3 className="font-bold text-lg mb-2 text-green-900">📚 Why Literature Review is Critical</h3>
                                <p className="text-gray-700 mb-3">
                                    Literature review helps you understand what's already known, identify gaps, avoid repeating work, and build on existing knowledge. It's like standing on the shoulders of giants!
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-3">
                                    <h4 className="font-bold mb-2 text-green-800">What to Look For:</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>✓ Recent papers (last 3-5 years) for current trends</li>
                                        <li>✓ Highly cited papers for foundational knowledge</li>
                                        <li>✓ Research gaps and limitations mentioned by authors</li>
                                        <li>✓ Methodologies used by successful researchers</li>
                                        <li>✓ Contradictions or debates in the field</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="mb-6">
                                <div className="relative">
                                    <Search className="absolute left-4 top-4 text-gray-400 w-6 h-6" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for papers, keywords, authors..."
                                        className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Papers List */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">
                                    Relevant Papers ({selectedPapers.length} selected)
                                </h3>
                                <div className="space-y-3">
                                    {SAMPLE_PAPERS.map((paper) => (
                                        <div
                                            key={paper.id}
                                            onClick={() => togglePaper(paper.id)}
                                            className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${selectedPapers.includes(paper.id)
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg mb-2">{paper.title}</h4>
                                                    <div className="flex gap-4 text-sm text-gray-600">
                                                        <span>📅 {paper.year}</span>
                                                        <span>📚 {paper.citations} citations</span>
                                                        <span className="text-blue-600 font-semibold">
                                                            ⭐ {paper.relevance}% relevant
                                                        </span>
                                                    </div>
                                                </div>
                                                {selectedPapers.includes(paper.id) && (
                                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Literature Notes */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3">Your Literature Review Notes</h3>
                                <textarea
                                    value={literatureNotes}
                                    onChange={(e) => setLiteratureNotes(e.target.value)}
                                    placeholder="Summarize key findings, gaps in research, and how these papers relate to your problem... (minimum 100 characters)"
                                    className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                />
                                <div className="mt-2 text-sm text-gray-600">
                                    Characters: {literatureNotes.length} / 100 minimum
                                </div>
                            </div>

                            {/* Progress Indicator */}
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
                                <h4 className="font-bold mb-2">Completion Checklist:</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        {selectedPapers.length >= 3 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Select at least 3 papers ({selectedPapers.length}/3)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {literatureNotes.length >= 100 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Write review notes ({literatureNotes.length}/100 chars)</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleLiteratureComplete}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 flex items-center gap-2"
                            >
                                Continue to Experiment Builder <ArrowRight />
                            </button>
                        </div>
                    )}


                    {/* Step 4: Experiment Builder */}
                    {currentStep === 4 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Beaker className="w-10 h-10 text-purple-600" />
                                <div>
                                    <h2 className="text-3xl font-bold">Experiment Builder</h2>
                                    <p className="text-gray-600 text-lg">Design your research methodology</p>
                                </div>
                            </div>

                            {/* Psychology Question */}
                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">?</div>
                                    <h3 className="text-xl font-bold text-orange-900">Mindset Discovery</h3>
                                </div>
                                <p className="text-lg font-semibold mb-4 text-gray-800">
                                    {PSYCHOLOGY_QUESTIONS[4].question}
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 mb-4">
                                    {PSYCHOLOGY_QUESTIONS[4].options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePsychologyAnswer(4, option.id)}
                                            className={`p-4 rounded-lg text-left transition-all border-2 ${psychologyAnswers[4] === option.id
                                                ? 'bg-orange-600 text-white border-orange-600 shadow-lg'
                                                : 'bg-white border-orange-200 hover:border-orange-400 text-gray-700'
                                                }`}
                                        >
                                            <div className="font-semibold mb-1">{option.id.toUpperCase()}.</div>
                                            <div className="text-sm">{option.text}</div>
                                        </button>
                                    ))}
                                </div>

                                {showInterpretation[4] && psychologyAnswers[4] && (
                                    <div className="bg-white rounded-lg p-5 border-2 border-orange-300 animate-fadeIn">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="text-2xl">🎯</div>
                                            <h4 className="text-xl font-bold text-orange-900">
                                                {PSYCHOLOGY_QUESTIONS[4].interpretations[psychologyAnswers[4]].title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            {PSYCHOLOGY_QUESTIONS[4].interpretations[psychologyAnswers[4]].description}
                                        </p>
                                        <div className="bg-orange-50 rounded-lg p-4 mb-3">
                                            <p className="text-sm font-semibold text-orange-900 mb-1">Your Strengths:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[4].interpretations[psychologyAnswers[4]].strengths}
                                            </p>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                                            <p className="text-sm font-semibold text-green-900 mb-1">💪 Motivation Boost:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[4].interpretations[psychologyAnswers[4]].motivation}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Educational Content */}
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-xl">
                                <h3 className="font-bold text-lg mb-2 text-orange-900">🔬 Methodology: Your Research Blueprint</h3>
                                <p className="text-gray-700 mb-3">
                                    Your methodology is the roadmap showing HOW you'll answer your research question. A clear methodology makes your research reproducible and credible.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-3">
                                    <h4 className="font-bold mb-2 text-orange-800">Key Components:</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>✓ <strong>Hypothesis:</strong> Your educated guess about the outcome</li>
                                        <li>✓ <strong>Variables:</strong> What you change, measure, and control</li>
                                        <li>✓ <strong>Procedure:</strong> Step-by-step process anyone can follow</li>
                                        <li>✓ <strong>Data Collection:</strong> How you'll gather evidence</li>
                                        <li>✓ <strong>Analysis Plan:</strong> How you'll interpret results</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Experiment Type Selection */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">Select Experiment Type</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {EXPERIMENT_TYPES.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setExperimentType(type.id)}
                                            className={`p-6 rounded-xl border-2 text-left transition-all ${experimentType === type.id
                                                ? 'border-purple-500 bg-purple-50'
                                                : 'border-gray-200 hover:border-purple-300'
                                                }`}
                                        >
                                            <div className="text-4xl mb-2">{type.icon}</div>
                                            <h4 className="font-bold text-lg mb-1">{type.name}</h4>
                                            <p className="text-sm text-gray-600">{type.description}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Hypothesis */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3">Research Hypothesis</h3>
                                <textarea
                                    value={hypothesis}
                                    onChange={(e) => setHypothesis(e.target.value)}
                                    placeholder="State your hypothesis clearly... (e.g., 'Increasing X will result in Y because...')"
                                    className="w-full h-24 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                                />
                            </div>

                            {/* Variables */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">Define Variables</h3>

                                {/* Add Variable */}
                                <div className="flex gap-3 mb-4">
                                    <select
                                        value={newVariable.type}
                                        onChange={(e) => setNewVariable({ ...newVariable, type: e.target.value })}
                                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                                    >
                                        <option value="independent">Independent</option>
                                        <option value="dependent">Dependent</option>
                                        <option value="controlled">Controlled</option>
                                    </select>
                                    <input
                                        type="text"
                                        value={newVariable.value}
                                        onChange={(e) => setNewVariable({ ...newVariable, value: e.target.value })}
                                        placeholder="Variable name..."
                                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                                        onKeyPress={(e) => e.key === 'Enter' && addVariable()}
                                    />
                                    <button
                                        onClick={addVariable}
                                        className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 flex items-center gap-2"
                                    >
                                        <Plus className="w-5 h-5" /> Add
                                    </button>
                                </div>

                                {/* Variables List */}
                                <div className="grid md:grid-cols-3 gap-4">
                                    {/* Independent Variables */}
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <h4 className="font-bold mb-3 text-blue-700">Independent Variables</h4>
                                        <div className="space-y-2">
                                            {variables.independent.map((v, i) => (
                                                <div key={i} className="flex items-center justify-between bg-white p-2 rounded">
                                                    <span className="text-sm">{v}</span>
                                                    <button
                                                        onClick={() => removeVariable('independent', i)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                            {variables.independent.length === 0 && (
                                                <p className="text-sm text-gray-500 italic">No variables added</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Dependent Variables */}
                                    <div className="bg-green-50 rounded-xl p-4">
                                        <h4 className="font-bold mb-3 text-green-700">Dependent Variables</h4>
                                        <div className="space-y-2">
                                            {variables.dependent.map((v, i) => (
                                                <div key={i} className="flex items-center justify-between bg-white p-2 rounded">
                                                    <span className="text-sm">{v}</span>
                                                    <button
                                                        onClick={() => removeVariable('dependent', i)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                            {variables.dependent.length === 0 && (
                                                <p className="text-sm text-gray-500 italic">No variables added</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Controlled Variables */}
                                    <div className="bg-yellow-50 rounded-xl p-4">
                                        <h4 className="font-bold mb-3 text-yellow-700">Controlled Variables</h4>
                                        <div className="space-y-2">
                                            {variables.controlled.map((v, i) => (
                                                <div key={i} className="flex items-center justify-between bg-white p-2 rounded">
                                                    <span className="text-sm">{v}</span>
                                                    <button
                                                        onClick={() => removeVariable('controlled', i)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                            {variables.controlled.length === 0 && (
                                                <p className="text-sm text-gray-500 italic">No variables added</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Methodology */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-3">Detailed Methodology</h3>
                                <textarea
                                    value={methodology}
                                    onChange={(e) => setMethodology(e.target.value)}
                                    placeholder="Describe your experimental procedure step by step... (minimum 50 characters)"
                                    className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                                />
                                <div className="mt-2 text-sm text-gray-600">
                                    Characters: {methodology.length} / 50 minimum
                                </div>
                            </div>

                            {/* Progress Indicator */}
                            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 mb-6">
                                <h4 className="font-bold mb-2">Completion Checklist:</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        {experimentType ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Select experiment type</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {hypothesis.length > 0 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Write hypothesis</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {variables.independent.length > 0 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Add at least 1 independent variable</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {methodology.length >= 50 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Describe methodology ({methodology.length}/50 chars)</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleExperimentComplete}
                                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 flex items-center gap-2"
                            >
                                Continue to Outcome Path <ArrowRight />
                            </button>
                        </div>
                    )}


                    {/* Step 5: Outcome Path */}
                    {currentStep === 5 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-10 h-10 text-green-600" />
                                <div>
                                    <h2 className="text-3xl font-bold">Outcome Path</h2>
                                    <p className="text-gray-600 text-lg">Define expected results and impact</p>
                                </div>
                            </div>

                            {/* Psychology Question */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">?</div>
                                    <h3 className="text-xl font-bold text-green-900">Mindset Discovery</h3>
                                </div>
                                <p className="text-lg font-semibold mb-4 text-gray-800">
                                    {PSYCHOLOGY_QUESTIONS[5].question}
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 mb-4">
                                    {PSYCHOLOGY_QUESTIONS[5].options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePsychologyAnswer(5, option.id)}
                                            className={`p-4 rounded-lg text-left transition-all border-2 ${psychologyAnswers[5] === option.id
                                                ? 'bg-green-600 text-white border-green-600 shadow-lg'
                                                : 'bg-white border-green-200 hover:border-green-400 text-gray-700'
                                                }`}
                                        >
                                            <div className="font-semibold mb-1">{option.id.toUpperCase()}.</div>
                                            <div className="text-sm">{option.text}</div>
                                        </button>
                                    ))}
                                </div>

                                {showInterpretation[5] && psychologyAnswers[5] && (
                                    <div className="bg-white rounded-lg p-5 border-2 border-green-300 animate-fadeIn">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="text-2xl">🎯</div>
                                            <h4 className="text-xl font-bold text-green-900">
                                                {PSYCHOLOGY_QUESTIONS[5].interpretations[psychologyAnswers[5]].title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-700 mb-3">
                                            {PSYCHOLOGY_QUESTIONS[5].interpretations[psychologyAnswers[5]].description}
                                        </p>
                                        <div className="bg-green-50 rounded-lg p-4 mb-3">
                                            <p className="text-sm font-semibold text-green-900 mb-1">Your Strengths:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[5].interpretations[psychologyAnswers[5]].strengths}
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                            <p className="text-sm font-semibold text-blue-900 mb-1">💪 Motivation Boost:</p>
                                            <p className="text-sm text-gray-700">
                                                {PSYCHOLOGY_QUESTIONS[5].interpretations[psychologyAnswers[5]].motivation}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Educational Content */}
                            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded-r-xl">
                                <h3 className="font-bold text-lg mb-2 text-indigo-900">🎯 Planning for Impact</h3>
                                <p className="text-gray-700 mb-3">
                                    Great research doesn't just answer questions - it creates positive change. Think about who will benefit from your work and how it advances knowledge or solves real problems.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-3">
                                    <h4 className="font-bold mb-2 text-indigo-800">Types of Research Impact:</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>✓ <strong>Academic:</strong> Advancing theoretical knowledge</li>
                                        <li>✓ <strong>Practical:</strong> Solving real-world problems</li>
                                        <li>✓ <strong>Social:</strong> Improving lives and communities</li>
                                        <li>✓ <strong>Economic:</strong> Creating value and opportunities</li>
                                        <li>✓ <strong>Environmental:</strong> Protecting our planet</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Expected Outcomes */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">Expected Outcomes</h3>
                                <div className="flex gap-3 mb-4">
                                    <input
                                        type="text"
                                        value={newOutcome}
                                        onChange={(e) => setNewOutcome(e.target.value)}
                                        placeholder="Describe an expected outcome..."
                                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                                        onKeyPress={(e) => e.key === 'Enter' && addOutcome()}
                                    />
                                    <button
                                        onClick={addOutcome}
                                        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 flex items-center gap-2"
                                    >
                                        <Plus className="w-5 h-5" /> Add
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {expectedOutcomes.map((outcome, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                            <span className="flex-1">{outcome}</span>
                                            <button
                                                onClick={() => setExpectedOutcomes(prev => prev.filter((_, idx) => idx !== i))}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                    {expectedOutcomes.length === 0 && (
                                        <p className="text-gray-500 italic text-center py-4">No outcomes added yet</p>
                                    )}
                                </div>
                            </div>

                            {/* Impact Areas */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">Potential Impact Areas</h3>
                                <div className="flex gap-3 mb-4">
                                    <input
                                        type="text"
                                        value={newImpact}
                                        onChange={(e) => setNewImpact(e.target.value)}
                                        placeholder="Who or what will benefit from this research?"
                                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                                        onKeyPress={(e) => e.key === 'Enter' && addImpact()}
                                    />
                                    <button
                                        onClick={addImpact}
                                        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 flex items-center gap-2"
                                    >
                                        <Plus className="w-5 h-5" /> Add
                                    </button>
                                </div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {impactAreas.map((impact, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                                            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <span className="flex-1">{impact}</span>
                                            <button
                                                onClick={() => setImpactAreas(prev => prev.filter((_, idx) => idx !== i))}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                    {impactAreas.length === 0 && (
                                        <p className="text-gray-500 italic text-center py-4 col-span-2">No impact areas added yet</p>
                                    )}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">Research Timeline</h3>
                                <select
                                    value={timeline}
                                    onChange={(e) => setTimeline(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                                >
                                    <option value="">Select expected duration...</option>
                                    <option value="1-3 months">1-3 months (Short-term)</option>
                                    <option value="3-6 months">3-6 months (Medium-term)</option>
                                    <option value="6-12 months">6-12 months (Long-term)</option>
                                    <option value="1+ years">1+ years (Extended research)</option>
                                </select>
                            </div>

                            {/* Success Metrics */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4">How will you measure success?</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                                        <div className="text-3xl mb-2">📊</div>
                                        <h4 className="font-bold mb-1">Quantitative</h4>
                                        <p className="text-sm text-gray-600">Numerical data, statistics, measurements</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                                        <div className="text-3xl mb-2">📝</div>
                                        <h4 className="font-bold mb-1">Qualitative</h4>
                                        <p className="text-sm text-gray-600">Observations, feedback, case studies</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl text-center">
                                        <div className="text-3xl mb-2">🎯</div>
                                        <h4 className="font-bold mb-1">Milestones</h4>
                                        <p className="text-sm text-gray-600">Key achievements, deliverables</p>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Indicator */}
                            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
                                <h4 className="font-bold mb-2">Completion Checklist:</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        {expectedOutcomes.length >= 2 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Add at least 2 expected outcomes ({expectedOutcomes.length}/2)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {impactAreas.length >= 2 ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Add at least 2 impact areas ({impactAreas.length}/2)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {timeline ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-gray-400" />
                                        )}
                                        <span>Select research timeline</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleOutcomeComplete}
                                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 flex items-center gap-2"
                            >
                                Complete Research Journey <Award />
                            </button>

                            {/* Completion Message */}
                            {score === 100 && (
                                <div className="mt-8 space-y-6">
                                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl text-center">
                                        <Award className="w-16 h-16 mx-auto mb-4" />
                                        <h3 className="text-3xl font-bold mb-2">Congratulations! 🎉</h3>
                                        <p className="text-xl mb-4">You've completed your research journey!</p>
                                        <p className="text-lg opacity-90">
                                            You've successfully planned a complete research project from problem identification to outcome definition.
                                        </p>
                                    </div>

                                    {/* Mindset Profile Summary */}
                                    {Object.keys(psychologyAnswers).length === 5 && (
                                        <div className="bg-white border-2 border-purple-300 rounded-xl p-8">
                                            <h3 className="text-2xl font-bold mb-4 text-center text-purple-900">
                                                🧠 Your Complete Research Mindset Profile
                                            </h3>
                                            <p className="text-center text-gray-600 mb-6">
                                                Understanding your mindset helps you leverage your strengths and grow as a researcher
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[1, 2, 3, 4, 5].map((stepId) => {
                                                    const answer = psychologyAnswers[stepId]
                                                    if (!answer) return null
                                                    const interpretation = PSYCHOLOGY_QUESTIONS[stepId].interpretations[answer]
                                                    return (
                                                        <div key={stepId} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                                                    {stepId}
                                                                </div>
                                                                <h4 className="font-bold text-purple-900">{RESEARCH_STEPS[stepId - 1].title}</h4>
                                                            </div>
                                                            <p className="text-sm font-semibold text-gray-800 mb-1">
                                                                {interpretation.title}
                                                            </p>
                                                            <p className="text-xs text-gray-600">
                                                                {interpretation.strengths}
                                                            </p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
                                                <p className="text-lg font-semibold text-gray-800 mb-2">
                                                    🌟 Your Unique Research DNA
                                                </p>
                                                <p className="text-sm text-gray-700">
                                                    This combination of mindsets makes you uniquely equipped for research success.
                                                    Embrace your strengths, work on your growth areas, and remember: every great researcher
                                                    has their own unique approach. Your diversity of thinking is your superpower!
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
