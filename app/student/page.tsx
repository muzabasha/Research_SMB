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

    const handleLiteratureComplete = () => {
        if (selectedPapers.length >= 3 && literatureNotes.length > 100) {
            setScore(65)
            setCurrentStep(4)
        }
    }

    const handleExperimentComplete = () => {
        if (experimentType && hypothesis && variables.independent.length > 0 && methodology.length > 50) {
            setScore(85)
            setCurrentStep(5)
        }
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
                                disabled={selectedPapers.length < 3 || literatureNotes.length < 100}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
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
                                disabled={!experimentType || !hypothesis || variables.independent.length === 0 || methodology.length < 50}
                                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
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
                                disabled={expectedOutcomes.length < 2 || impactAreas.length < 2 || !timeline}
                                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                Complete Research Journey <Award />
                            </button>

                            {/* Completion Message */}
                            {score === 100 && (
                                <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl text-center">
                                    <Award className="w-16 h-16 mx-auto mb-4" />
                                    <h3 className="text-3xl font-bold mb-2">Congratulations! 🎉</h3>
                                    <p className="text-xl mb-4">You've completed your research journey!</p>
                                    <p className="text-lg opacity-90">
                                        You've successfully planned a complete research project from problem identification to outcome definition.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
