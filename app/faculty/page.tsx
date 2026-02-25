'use client'

import { useState } from 'react'
import { Upload, Search, FileText, TrendingUp } from 'lucide-react'

// Faculty Psychology Assessment
const FACULTY_PSYCHOLOGY = {
    question: "What's your primary motivation for pursuing research funding?",
    options: [
        { id: 'a', text: "Building a world-class research program", mindset: "Visionary Leader" },
        { id: 'b', text: "Solving critical societal problems", mindset: "Impact Champion" },
        { id: 'c', text: "Advancing my academic career", mindset: "Career Strategist" },
        { id: 'd', text: "Mentoring students and building research capacity", mindset: "Educator Mentor" }
    ],
    interpretations: {
        'a': {
            title: "Visionary Leader 🎯",
            description: "You're driven by building excellence and creating lasting research infrastructure. You think long-term and aim for transformative impact.",
            strengths: "Strategic thinking, program building, institutional impact, long-term vision",
            motivation: "Your vision for research excellence will inspire others! Focus on building sustainable programs that outlast individual projects. Great leaders create ecosystems, not just projects. Your strategic approach will build lasting research capacity.",
            tips: ["Develop 5-year research roadmaps", "Build collaborative research networks", "Focus on infrastructure and capacity building", "Mentor junior faculty in program development"]
        },
        'b': {
            title: "Impact Champion 🌍",
            description: "You're motivated by solving real-world problems and creating tangible societal benefits. Your research has purpose beyond academia.",
            strengths: "Problem-focused, stakeholder engagement, practical applications, societal relevance",
            motivation: "Your commitment to societal impact makes research meaningful! Funding agencies value researchers who connect science to society. Highlight real-world applications and stakeholder benefits in your proposals. Your impact-first approach will resonate with funders.",
            tips: ["Engage with industry and community partners", "Document societal impact of your work", "Build interdisciplinary collaborations", "Communicate research benefits to non-academics"]
        },
        'c': {
            title: "Career Strategist 📈",
            description: "You're focused on professional growth and academic advancement. This ambition drives productivity and excellence.",
            strengths: "Goal-oriented, productivity-focused, strategic planning, career awareness",
            motivation: "Ambition drives achievement! Your career focus will help you stay productive and strategic. Balance external recognition with intrinsic satisfaction. Build a portfolio that showcases both quantity and quality. Strategic career planning is smart, not selfish.",
            tips: ["Set clear publication and funding milestones", "Build your h-index strategically", "Network at conferences and workshops", "Seek high-visibility collaborations"]
        },
        'd': {
            title: "Educator Mentor 🎓",
            description: "You're driven by developing the next generation of researchers. Your legacy is in the people you train and inspire.",
            strengths: "Mentorship, capacity building, student development, knowledge transfer",
            motivation: "Your mentorship multiplies your impact! Every student you train extends your research reach. Funding agencies value researchers who build capacity. Highlight your mentorship track record and training plans. Your investment in people creates lasting change.",
            tips: ["Document student success stories", "Develop structured mentorship programs", "Include student training in proposals", "Build collaborative learning environments"]
        }
    }
}

export default function FacultyPortal() {
    const [activeTab, setActiveTab] = useState('profile')
    const [psychologyAnswer, setPsychologyAnswer] = useState<string>('')
    const [showInterpretation, setShowInterpretation] = useState(false)

    const handlePsychologyAnswer = (answerId: string) => {
        setPsychologyAnswer(answerId)
        setShowInterpretation(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-purple-600">Faculty Research Studio</h1>
                    <p className="text-sm text-gray-600">Funding Intelligence & Proposal Builder</p>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-8 mb-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-3">🎓 Faculty Research Studio</h2>
                    <p className="text-xl mb-4">
                        Navigate the funding landscape with confidence. We'll help you discover opportunities, build strong proposals, and maximize your research impact.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <div className="text-3xl mb-2">🔍</div>
                            <h3 className="font-bold mb-1">Smart Matching</h3>
                            <p className="text-sm opacity-90">Find funding aligned with your expertise</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <div className="text-3xl mb-2">📊</div>
                            <h3 className="font-bold mb-1">Success Insights</h3>
                            <p className="text-sm opacity-90">Learn from winning proposals</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <div className="text-3xl mb-2">🚀</div>
                            <h3 className="font-bold mb-1">Build Your Legacy</h3>
                            <p className="text-sm opacity-90">Create impactful research programs</p>
                        </div>
                    </div>
                </div>

                {/* Faculty Psychology Assessment */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-8 mb-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">?</div>
                        <h3 className="text-2xl font-bold text-purple-900">Discover Your Research Motivation Profile</h3>
                    </div>
                    <p className="text-lg font-semibold mb-6 text-gray-800">
                        {FACULTY_PSYCHOLOGY.question}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {FACULTY_PSYCHOLOGY.options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handlePsychologyAnswer(option.id)}
                                className={`p-5 rounded-xl text-left transition-all border-2 ${psychologyAnswer === option.id
                                        ? 'bg-purple-600 text-white border-purple-600 shadow-xl scale-105'
                                        : 'bg-white border-purple-200 hover:border-purple-400 text-gray-700 hover:shadow-lg'
                                    }`}
                            >
                                <div className="font-bold mb-2 text-lg">{option.id.toUpperCase()}.</div>
                                <div>{option.text}</div>
                                {psychologyAnswer === option.id && (
                                    <div className="mt-2 text-sm opacity-90">✓ Selected</div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Interpretation */}
                    {showInterpretation && psychologyAnswer && (
                        <div className="bg-white rounded-xl p-6 border-2 border-purple-400 shadow-lg animate-fadeIn">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🎯</div>
                                <h4 className="text-2xl font-bold text-purple-900">
                                    {FACULTY_PSYCHOLOGY.interpretations[psychologyAnswer].title}
                                </h4>
                            </div>
                            <p className="text-gray-700 mb-4 text-lg">
                                {FACULTY_PSYCHOLOGY.interpretations[psychologyAnswer].description}
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-purple-50 rounded-lg p-4">
                                    <p className="font-semibold text-purple-900 mb-2">💪 Your Strengths:</p>
                                    <p className="text-sm text-gray-700">
                                        {FACULTY_PSYCHOLOGY.interpretations[psychologyAnswer].strengths}
                                    </p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <p className="font-semibold text-blue-900 mb-2">📋 Action Tips:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        {FACULTY_PSYCHOLOGY.interpretations[psychologyAnswer].tips.map((tip, idx) => (
                                            <li key={idx}>• {tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-l-4 border-green-500">
                                <p className="font-semibold text-green-900 mb-2">🚀 Motivation Boost:</p>
                                <p className="text-sm text-gray-700">
                                    {FACULTY_PSYCHOLOGY.interpretations[psychologyAnswer].motivation}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-xl shadow-lg mb-8">
                    <div className="flex border-b">
                        {[
                            { id: 'profile', label: 'Profile Setup', icon: Upload },
                            { id: 'funding', label: 'Funding Matches', icon: Search },
                            { id: 'proposal', label: 'Proposal Builder', icon: FileText },
                            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-6 py-4 font-bold text-lg flex items-center justify-center gap-2 ${activeTab === tab.id
                                    ? 'border-b-4 border-purple-600 text-purple-600'
                                    : 'text-gray-500'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        {activeTab === 'profile' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Build Your Research Profile</h2>

                                {/* Educational Content */}
                                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-xl">
                                    <h3 className="font-bold text-lg mb-2 text-purple-900">💡 Why Your Profile Matters</h3>
                                    <p className="text-gray-700 mb-3">
                                        A strong research profile helps funding agencies understand your expertise, track record, and potential for success. It's your research identity!
                                    </p>
                                    <div className="bg-white p-4 rounded-lg mt-3">
                                        <h4 className="font-bold mb-2 text-purple-800">Profile Building Tips:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>✓ Keep your CV updated with recent publications</li>
                                            <li>✓ Highlight interdisciplinary collaborations</li>
                                            <li>✓ Include both completed and ongoing projects</li>
                                            <li>✓ Showcase impact beyond citations (patents, products, policies)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                        <p className="text-lg">Upload CV/Resume</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input type="number" placeholder="Publications" className="p-4 border-2 rounded-xl text-lg" />
                                        <input type="number" placeholder="H-Index" className="p-4 border-2 rounded-xl text-lg" />
                                    </div>
                                    <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
                                        Analyze Profile
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'funding' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Funding Call Matches</h2>

                                {/* Educational Content */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-xl">
                                    <h3 className="font-bold text-lg mb-2 text-blue-900">💰 Finding the Right Funding</h3>
                                    <p className="text-gray-700 mb-3">
                                        Successful funding requires matching your expertise with the right opportunities. Look for alignment in research area, career stage, and institutional eligibility.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg mt-3">
                                        <h4 className="font-bold mb-2 text-blue-800">Major Funding Sources in India:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>✓ <strong>SERB:</strong> Science & Engineering Research Board</li>
                                            <li>✓ <strong>DST:</strong> Department of Science & Technology</li>
                                            <li>✓ <strong>DBT:</strong> Department of Biotechnology</li>
                                            <li>✓ <strong>ICMR:</strong> Indian Council of Medical Research</li>
                                            <li>✓ <strong>CSIR:</strong> Council of Scientific & Industrial Research</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                                    <p className="text-lg">Complete your profile to see AI-powered funding matches.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'proposal' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Proposal Builder</h2>

                                {/* Educational Content */}
                                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-xl">
                                    <h3 className="font-bold text-lg mb-2 text-green-900">📝 Crafting Winning Proposals</h3>
                                    <p className="text-gray-700 mb-3">
                                        A strong proposal clearly articulates the problem, your innovative solution, expected impact, and why you're the right person to do this work.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg mt-3">
                                        <h4 className="font-bold mb-2 text-green-800">Essential Proposal Elements:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>✓ <strong>Problem Statement:</strong> Clear, compelling, evidence-based</li>
                                            <li>✓ <strong>Objectives:</strong> Specific, measurable, achievable</li>
                                            <li>✓ <strong>Methodology:</strong> Detailed, feasible, innovative</li>
                                            <li>✓ <strong>Impact:</strong> Academic, social, economic benefits</li>
                                            <li>✓ <strong>Budget:</strong> Justified, realistic, aligned with activities</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <input type="text" placeholder="Proposal Title" className="w-full p-4 border-2 rounded-xl text-lg" />
                                    <textarea placeholder="Methodology" className="w-full h-48 p-4 border-2 rounded-xl text-lg" />
                                    <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
                                        Get AI Evaluation
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
