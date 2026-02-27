'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Target, AlertCircle, Lightbulb, XCircle, Play, BookOpen } from 'lucide-react'
import { getStageById } from '@/lib/journey-data'
import { getAssessmentsByStage } from '@/lib/assessments-data'

type ActivityStep = 'overview' | 'pre-assessment' | 'orientation' | 'activity' | 'reflection' | 'post-assessment' | 'complete'

export default function StageDetailPage() {
    const params = useParams()
    const router = useRouter()
    const stageId = parseInt(params.stageId as string)
    const stage = getStageById(stageId)

    const [currentStep, setCurrentStep] = useState<ActivityStep>('overview')
    const [preAssessmentScore, setPreAssessmentScore] = useState<number | null>(null)
    const [postAssessmentScore, setPostAssessmentScore] = useState<number | null>(null)
    const [selectedPreOption, setSelectedPreOption] = useState<string>('')
    const [selectedPostOption, setSelectedPostOption] = useState<string>('')

    if (!stage) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Stage Not Found</h1>
                    <Link href="/journey" className="text-blue-600 hover:underline">
                        ← Back to Journey
                    </Link>
                </div>
            </div>
        )
    }

    const preAssessment = getAssessmentsByStage(stageId, 'pre')
    const postAssessment = getAssessmentsByStage(stageId, 'post')

    const steps: { id: ActivityStep; label: string; icon: any }[] = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'pre-assessment', label: 'Pre-Assessment', icon: Target },
        { id: 'orientation', label: 'Orientation', icon: Lightbulb },
        { id: 'activity', label: 'Activity', icon: Play },
        { id: 'reflection', label: 'Reflection', icon: AlertCircle },
        { id: 'post-assessment', label: 'Post-Assessment', icon: CheckCircle },
        { id: 'complete', label: 'Complete', icon: CheckCircle }
    ]

    const currentStepIndex = steps.findIndex(s => s.id === currentStep)

    const handleNext = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStep(steps[currentStepIndex + 1].id)
        }
    }

    const handlePrevious = () => {
        if (currentStepIndex > 0) {
            setCurrentStep(steps[currentStepIndex - 1].id)
        }
    }

    const handlePreAssessment = (optionId: string, score: number) => {
        setSelectedPreOption(optionId)
        setPreAssessmentScore(score)
    }

    const handlePostAssessment = (optionId: string, score: number) => {
        setSelectedPostOption(optionId)
        setPostAssessmentScore(score)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/journey"
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <div className="text-sm text-gray-600">Stage {stage.id} • {stage.phase}</div>
                                <h1 className="text-2xl font-bold text-gray-900">{stage.title}</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{stage.activityDuration}</span>
                        </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="mt-6 flex items-center justify-between">
                        {steps.map((step, index) => {
                            const isActive = step.id === currentStep
                            const isCompleted = index < currentStepIndex
                            const Icon = step.icon

                            return (
                                <div key={step.id} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center flex-1">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isCompleted ? 'bg-green-500 text-white' :
                                                isActive ? 'bg-blue-600 text-white' :
                                                    'bg-gray-200 text-gray-400'
                                            }`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className={`text-xs mt-2 text-center ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                                            }`}>
                                            {step.label}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`h-1 flex-1 mx-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'
                                            }`} />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    {/* Overview Step */}
                    {currentStep === 'overview' && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{stage.title}</h2>
                                <p className="text-xl text-gray-600">{stage.subtitle}</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                                <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                            </div>

                            {/* Transformation */}
                            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    Transformation Goal
                                </h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">From</div>
                                        <div className="text-lg font-semibold text-red-600">{stage.transformation.from}</div>
                                    </div>
                                    <ArrowRight className="w-8 h-8 text-gray-400" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">To</div>
                                        <div className="text-lg font-semibold text-green-600">{stage.transformation.to}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Learning Objectives */}
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Learning Objectives</h3>
                                <ul className="space-y-2">
                                    {stage.learningObjectives.map((obj, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{obj}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Do's and Don'ts */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-50 rounded-lg p-6">
                                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        What TO DO
                                    </h3>
                                    <ul className="space-y-2">
                                        {stage.dosList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                                                <span className="text-green-600 font-bold">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-red-50 rounded-lg p-6">
                                    <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" />
                                        What NOT to DO
                                    </h3>
                                    <ul className="space-y-2">
                                        {stage.dontsList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-red-800">
                                                <span className="text-red-600 font-bold">✗</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Success Story */}
                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Success Story</h3>
                                <blockquote className="text-gray-700 italic mb-3">
                                    "{stage.successStory.quote}"
                                </blockquote>
                                <div className="text-sm text-gray-600">
                                    <div className="font-semibold">{stage.successStory.author}</div>
                                    <div>{stage.successStory.role}</div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleNext}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    Start Activity
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Pre-Assessment Step */}
                    {currentStep === 'pre-assessment' && preAssessment && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pre-Activity Assessment</h2>
                                <p className="text-gray-600">Let's assess where you are right now. Be honest - there are no wrong answers!</p>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">{preAssessment.question}</h3>
                                <div className="space-y-3">
                                    {preAssessment.options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePreAssessment(option.id, option.score)}
                                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedPreOption === option.id
                                                    ? 'border-blue-600 bg-blue-100'
                                                    : 'border-gray-200 hover:border-blue-300 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{option.emoji}</span>
                                                <span className="flex-1 font-medium text-gray-900">{option.text}</span>
                                                {selectedPreOption === option.id && (
                                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedPreOption && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <p className="text-green-800">
                                        {preAssessment.options.find(o => o.id === selectedPreOption)?.feedback}
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <button
                                    onClick={handlePrevious}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!selectedPreOption}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Continue
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Orientation, Activity, Reflection steps - Coming in next part */}
                    {(currentStep === 'orientation' || currentStep === 'activity' || currentStep === 'reflection') && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🚧</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Activity Content Coming Soon</h2>
                            <p className="text-gray-600 mb-6">
                                This section will contain the interactive {currentStep} content.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={handlePrevious}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Post-Assessment Step */}
                    {currentStep === 'post-assessment' && postAssessment && (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Post-Activity Assessment</h2>
                                <p className="text-gray-600">Now let's see how you've progressed. What will you commit to doing?</p>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">{postAssessment.question}</h3>
                                <div className="space-y-3">
                                    {postAssessment.options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handlePostAssessment(option.id, option.score)}
                                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedPostOption === option.id
                                                    ? 'border-purple-600 bg-purple-100'
                                                    : 'border-gray-200 hover:border-purple-300 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{option.emoji}</span>
                                                <span className="flex-1 font-medium text-gray-900">{option.text}</span>
                                                {selectedPostOption === option.id && (
                                                    <CheckCircle className="w-5 h-5 text-purple-600" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedPostOption && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <p className="text-green-800">
                                        {postAssessment.options.find(o => o.id === selectedPostOption)?.feedback}
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <button
                                    onClick={handlePrevious}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!selectedPostOption}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Complete Stage
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Complete Step */}
                    {currentStep === 'complete' && (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stage Complete! 🎉</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Congratulations! You've completed {stage.title}
                            </p>

                            {preAssessmentScore !== null && postAssessmentScore !== null && (
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
                                    <h3 className="font-semibold text-gray-900 mb-4">Your Transformation</h3>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-600">{preAssessmentScore}</div>
                                            <div className="text-sm text-gray-600">Before</div>
                                        </div>
                                        <ArrowRight className="w-8 h-8 text-gray-400" />
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600">{postAssessmentScore}</div>
                                            <div className="text-sm text-gray-600">After</div>
                                        </div>
                                    </div>
                                    {postAssessmentScore > preAssessmentScore && (
                                        <p className="text-green-700 font-medium">
                                            Great progress! You've grown through this activity.
                                        </p>
                                    )}
                                </div>
                            )}

                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/journey"
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Back to Journey
                                </Link>
                                {stage.id < 15 && (
                                    <Link
                                        href={`/journey/${stage.id + 1}`}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                                    >
                                        Next Stage
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
