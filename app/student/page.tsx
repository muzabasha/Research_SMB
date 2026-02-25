'use client'

import { useState } from 'react'
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

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

export default function StudentPortal() {
    const [currentStep, setCurrentStep] = useState(1)
    const [score, setScore] = useState(0)
    const [selectedDomain, setSelectedDomain] = useState('')
    const [problem, setProblem] = useState('')

    const handleDomainSelect = (domain: string) => {
        setSelectedDomain(domain)
        setScore(25)
    }

    const handleProblemSubmit = () => {
        if (problem.length > 50) {
            setScore(45)
            setCurrentStep(3)
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
                                className={`text-center p-4 rounded-lg border-2 transition-all ${currentStep === step.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : canProgress(step.id)
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-gray-200 bg-gray-50'
                                    }`}
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
                    {currentStep === 1 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Choose Your Research Domain</h2>
                            <p className="text-gray-600 mb-6 text-lg">Select an area that interests you</p>

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

                    {currentStep === 2 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Define Your Research Problem</h2>
                            <p className="text-gray-600 mb-6 text-lg">Domain: <span className="font-bold text-blue-600">{selectedDomain}</span></p>

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
                                disabled={problem.length < 50}
                                className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                Continue to Literature Hunt <ArrowRight />
                            </button>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Literature Review</h2>
                            <p className="text-gray-600 mb-6 text-lg">Explore existing research in {selectedDomain}</p>

                            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-xl mb-2">🚧 Coming Soon</h3>
                                <p className="text-gray-700">AI-powered literature search and analysis will be available here.</p>
                            </div>

                            <button
                                onClick={() => {
                                    setScore(65)
                                    setCurrentStep(4)
                                }}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 flex items-center gap-2"
                            >
                                Continue to Experiment Builder <ArrowRight />
                            </button>
                        </div>
                    )}

                    {currentStep >= 4 && (
                        <div className="text-center py-12">
                            <h2 className="text-3xl font-bold mb-4">Great Progress! 🎉</h2>
                            <p className="text-xl text-gray-600">More interactive modules coming soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
