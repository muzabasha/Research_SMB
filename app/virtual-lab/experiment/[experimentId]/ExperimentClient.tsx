'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    ArrowLeft, Play, Pause, RotateCcw, CheckCircle, AlertCircle,
    Settings, Download, Share2, Save, Lightbulb, Target, Clock,
    TrendingUp, BarChart3, Sliders, Eye, EyeOff, Zap, Award
} from 'lucide-react'
import { Experiment } from '@/lib/virtual-lab'

interface ExperimentClientProps {
    experiment: Experiment
}

export default function ExperimentClient({ experiment }: ExperimentClientProps) {
    // Experiment State
    const [currentStep, setCurrentStep] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [completedSteps, setCompletedSteps] = useState<number[]>([])
    const [stepData, setStepData] = useState<any>({})
    const [showHints, setShowHints] = useState(true)
    const [showVisualization, setShowVisualization] = useState(true)
    const [experimentSpeed, setExperimentSpeed] = useState(1)
    const [notes, setNotes] = useState('')
    const [timeSpent, setTimeSpent] = useState(0)
    const [score, setScore] = useState(0)

    // User Controls State
    const [parameters, setParameters] = useState<any>({
        dataSize: 30,
        analysisDepth: 'medium',
        visualizationType: 'all',
        autoSave: true,
        showCheckpoints: true
    })

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isRunning && !isPaused) {
            interval = setInterval(() => {
                setTimeSpent(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRunning, isPaused])

    const progress = (completedSteps.length / experiment.procedure.length) * 100

    const handleStartExperiment = () => {
        setIsRunning(true)
        setIsPaused(false)
    }

    const handlePauseExperiment = () => {
        setIsPaused(!isPaused)
    }

    const handleResetExperiment = () => {
        if (confirm('Are you sure you want to reset the experiment? All progress will be lost.')) {
            setCurrentStep(0)
            setIsRunning(false)
            setIsPaused(false)
            setCompletedSteps([])
            setStepData({})
            setTimeSpent(0)
            setScore(0)
        }
    }

    const handleCompleteStep = () => {
        if (!completedSteps.includes(currentStep)) {
            setCompletedSteps([...completedSteps, currentStep])
            setScore(score + 10)
        }
        if (currentStep < experiment.procedure.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleNextStep = () => {
        if (currentStep < experiment.procedure.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const currentStepData = experiment.procedure[currentStep]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/virtual-lab"
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">{experiment.title}</h1>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${experiment.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                                        experiment.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        {experiment.difficulty.toUpperCase()}
                                    </span>
                                    <span className="text-sm text-gray-600">{experiment.domain}</span>
                                    <span className="text-sm text-gray-600">•</span>
                                    <span className="text-sm text-gray-600">{experiment.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">{Math.round(progress)}%</div>
                                <div className="text-xs text-gray-600">Progress</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">{score}</div>
                                <div className="text-xs text-gray-600">Score</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">{formatTime(timeSpent)}</div>
                                <div className="text-xs text-gray-600">Time</div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Control Panel */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Experiment Controls</h3>
                                <div className="flex items-center gap-2">
                                    {!isRunning ? (
                                        <button
                                            onClick={handleStartExperiment}
                                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-semibold"
                                        >
                                            <Play className="w-4 h-4" />
                                            Start
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handlePauseExperiment}
                                            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 font-semibold"
                                        >
                                            <Pause className="w-4 h-4" />
                                            {isPaused ? 'Resume' : 'Pause'}
                                        </button>
                                    )}
                                    <button
                                        onClick={handleResetExperiment}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold"
                                    >
                                        <RotateCcw className="w-4 h-4" />
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* Quick Settings */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <button
                                    onClick={() => setShowHints(!showHints)}
                                    className={`px-3 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${showHints ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-600'
                                        }`}
                                >
                                    {showHints ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    <span className="text-sm font-medium">Hints</span>
                                </button>
                                <button
                                    onClick={() => setShowVisualization(!showVisualization)}
                                    className={`px-3 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${showVisualization ? 'bg-purple-50 border-purple-300 text-purple-700' : 'bg-gray-50 border-gray-200 text-gray-600'
                                        }`}
                                >
                                    <BarChart3 className="w-4 h-4" />
                                    <span className="text-sm font-medium">Visuals</span>
                                </button>
                            </div>

                            {/* Speed Control */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Zap className="w-4 h-4 inline mr-1" />
                                    Experiment Speed: {experimentSpeed}x
                                </label>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.5"
                                    value={experimentSpeed}
                                    onChange={(e) => setExperimentSpeed(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>0.5x Slow</span>
                                    <span>1x Normal</span>
                                    <span>2x Fast</span>
                                </div>
                            </div>

                            {/* Data Size Control */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Sliders className="w-4 h-4 inline mr-1" />
                                    Dataset Size: {parameters.dataSize} papers
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="10"
                                    value={parameters.dataSize}
                                    onChange={(e) => setParameters({ ...parameters, dataSize: parseInt(e.target.value) })}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>10 (Quick)</span>
                                    <span>50 (Standard)</span>
                                    <span>100 (Comprehensive)</span>
                                </div>
                            </div>

                            {/* Analysis Depth */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Analysis Depth
                                </label>
                                <select
                                    value={parameters.analysisDepth}
                                    onChange={(e) => setParameters({ ...parameters, analysisDepth: e.target.value })}
                                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="basic">Basic (Fast)</option>
                                    <option value="medium">Medium (Balanced)</option>
                                    <option value="deep">Deep (Thorough)</option>
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-3 gap-2">
                                <button className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-1 text-sm font-medium">
                                    <Save className="w-4 h-4" />
                                    Save
                                </button>
                                <button className="px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center gap-1 text-sm font-medium">
                                    <Download className="w-4 h-4" />
                                    Export
                                </button>
                                <button className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center gap-1 text-sm font-medium">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </div>

                        {/* Current Step */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">
                                    Step {currentStep + 1} of {experiment.procedure.length}
                                </h3>
                                {completedSteps.includes(currentStep) && (
                                    <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full">
                                        <CheckCircle className="w-4 h-4" />
                                        <span className="text-sm font-semibold">Completed</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{currentStepData.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{currentStepData.description}</p>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <div className="flex items-start gap-2">
                                        <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-semibold text-blue-900 mb-1">Action Required:</div>
                                            <p className="text-blue-800 text-sm">{currentStepData.action}</p>
                                        </div>
                                    </div>
                                </div>

                                {showHints && currentStepData.example && (
                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                        <div className="flex items-start gap-2">
                                            <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-semibold text-yellow-900 mb-1">Example:</div>
                                                <p className="text-yellow-800 text-sm">{currentStepData.example}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {parameters.showCheckpoints && (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-semibold text-green-900 mb-2">Checkpoint:</div>
                                                <p className="text-green-800 text-sm">{currentStepData.checkpoint}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Interactive Input Area */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Work:
                                    </label>
                                    <textarea
                                        value={stepData[currentStep] || ''}
                                        onChange={(e) => setStepData({ ...stepData, [currentStep]: e.target.value })}
                                        placeholder="Enter your observations, data, or notes here..."
                                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none min-h-[100px]"
                                        disabled={!isRunning || isPaused}
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-6 pt-6 border-t">
                                <button
                                    onClick={handlePreviousStep}
                                    disabled={currentStep === 0}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                                >
                                    Previous
                                </button>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCompleteStep}
                                        disabled={!isRunning || isPaused || completedSteps.includes(currentStep)}
                                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4" />
                                        Complete Step
                                    </button>
                                    <button
                                        onClick={handleNextStep}
                                        disabled={currentStep === experiment.procedure.length - 1}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Visualization Area */}
                        {showVisualization && currentStepData.visualization && (
                            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-purple-600" />
                                    Visualization
                                </h3>
                                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 min-h-[300px] flex items-center justify-center border-2 border-purple-200">
                                    <div className="text-center">
                                        <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                                        <p className="text-gray-700">{currentStepData.visualization}</p>
                                        <p className="text-sm text-gray-500 mt-2">Interactive visualization will appear here</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notes Section */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Experiment Notes</h3>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Take notes about your observations, insights, and learnings..."
                                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none min-h-[150px]"
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Steps Overview */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Steps Overview</h3>
                            <div className="space-y-2">
                                {experiment.procedure.map((step, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentStep(index)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${index === currentStep
                                            ? 'bg-blue-100 border-2 border-blue-500'
                                            : completedSteps.includes(index)
                                                ? 'bg-green-50 border-2 border-green-300'
                                                : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${index === currentStep
                                                    ? 'bg-blue-600 text-white'
                                                    : completedSteps.includes(index)
                                                        ? 'bg-green-600 text-white'
                                                        : 'bg-gray-300 text-gray-600'
                                                    }`}>
                                                    {completedSteps.includes(index) ? '✓' : index + 1}
                                                </div>
                                                <span className={`text-sm font-medium ${index === currentStep ? 'text-blue-900' : 'text-gray-700'
                                                    }`}>
                                                    {step.title}
                                                </span>
                                            </div>
                                            {index === currentStep && (
                                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
                            <div className="space-y-2">
                                {experiment.resources.map((resource, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="block px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm text-gray-700"
                                    >
                                        {resource}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Achievement */}
                        {completedSteps.length === experiment.procedure.length && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 text-white">
                                <div className="text-center">
                                    <Award className="w-16 h-16 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Experiment Complete!</h3>
                                    <p className="text-white/90 mb-4">
                                        Congratulations! You've completed all steps.
                                    </p>
                                    <div className="bg-white/20 rounded-lg p-4 mb-4">
                                        <div className="text-3xl font-bold mb-1">{score}</div>
                                        <div className="text-sm">Final Score</div>
                                    </div>
                                    <button className="w-full px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                                        Download Certificate
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Help */}
                        <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Need Help?</h3>
                            <p className="text-sm text-blue-800 mb-4">
                                Access tutorials, FAQs, and support resources.
                            </p>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                Get Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
