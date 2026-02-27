'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Lock, Play, BookOpen, Target, Lightbulb, Rocket, Award } from 'lucide-react'
import { JOURNEY_STAGES, PHASES } from '@/lib/journey-data'

export default function JourneyPage() {
    const [completedStages, setCompletedStages] = useState<number[]>([])
    const [currentStage, setCurrentStage] = useState(1)

    const getPhaseIcon = (phaseName: string) => {
        switch (phaseName) {
            case 'Foundation': return <BookOpen className="w-6 h-6" />
            case 'Execution': return <Target className="w-6 h-6" />
            case 'Funding': return <Lightbulb className="w-6 h-6" />
            case 'Lab Development': return <Rocket className="w-6 h-6" />
            case 'Excellence': return <Award className="w-6 h-6" />
            default: return <Play className="w-6 h-6" />
        }
    }

    const getPhaseColor = (phaseName: string) => {
        switch (phaseName) {
            case 'Foundation': return 'from-blue-500 to-blue-600'
            case 'Execution': return 'from-green-500 to-green-600'
            case 'Funding': return 'from-purple-500 to-purple-600'
            case 'Lab Development': return 'from-orange-500 to-orange-600'
            case 'Excellence': return 'from-red-500 to-red-600'
            default: return 'from-gray-500 to-gray-600'
        }
    }

    const isStageUnlocked = (stageId: number) => {
        // Stage 1 is always unlocked
        if (stageId === 1) return true
        // Other stages unlock when previous stage is completed
        return completedStages.includes(stageId - 1)
    }

    const progress = (completedStages.length / JOURNEY_STAGES.length) * 100

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Research Journey</h1>
                            <p className="text-gray-600 mt-1">From Zero to Research Excellence</p>
                        </div>
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            ← Back to Home
                        </Link>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>Overall Progress</span>
                            <span className="font-semibold">{completedStages.length} / {JOURNEY_STAGES.length} Stages</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Journey Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Phases */}
                {PHASES.map((phase, phaseIndex) => {
                    const phaseStages = JOURNEY_STAGES.filter(s => s.phase === phase.name)
                    const phaseCompleted = phaseStages.every(s => completedStages.includes(s.id))
                    const phaseInProgress = phaseStages.some(s => s.id === currentStage)

                    return (
                        <div key={phase.id} className="mb-16">
                            {/* Phase Header */}
                            <div className={`bg-gradient-to-r ${getPhaseColor(phase.name)} rounded-xl p-6 text-white mb-8`}>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/20 p-3 rounded-lg">
                                        {getPhaseIcon(phase.name)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-2xl font-bold">Phase {phase.id}: {phase.name}</h2>
                                            {phaseCompleted && <CheckCircle className="w-6 h-6" />}
                                            {phaseInProgress && !phaseCompleted && (
                                                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">In Progress</span>
                                            )}
                                        </div>
                                        <p className="text-white/90 mt-1">
                                            {phaseStages.length} stages • {phaseStages[0].duration} - {phaseStages[phaseStages.length - 1].duration}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stages in Phase */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {phaseStages.map((stage) => {
                                    const isCompleted = completedStages.includes(stage.id)
                                    const isUnlocked = isStageUnlocked(stage.id)
                                    const isCurrent = stage.id === currentStage

                                    return (
                                        <div
                                            key={stage.id}
                                            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isUnlocked ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-60'
                                                } ${isCurrent ? 'ring-2 ring-blue-500' : ''}`}
                                        >
                                            {/* Stage Header */}
                                            <div className={`p-4 ${isCompleted ? 'bg-green-50' : isUnlocked ? 'bg-blue-50' : 'bg-gray-50'}`}>
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-sm font-semibold text-gray-600">Stage {stage.id}</span>
                                                            {isCompleted && <CheckCircle className="w-4 h-4 text-green-600" />}
                                                            {!isUnlocked && <Lock className="w-4 h-4 text-gray-400" />}
                                                        </div>
                                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                                            {stage.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mt-1">{stage.subtitle}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stage Content */}
                                            <div className="p-4">
                                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                                    {stage.description}
                                                </p>

                                                {/* Transformation */}
                                                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-3 mb-4">
                                                    <p className="text-xs font-semibold text-gray-700 mb-1">Transformation</p>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <span className="text-red-600">{stage.transformation.from}</span>
                                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                                        <span className="text-green-600 font-semibold">{stage.transformation.to}</span>
                                                    </div>
                                                </div>

                                                {/* Duration */}
                                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{stage.duration}</span>
                                                </div>

                                                {/* Action Button */}
                                                {isUnlocked ? (
                                                    <Link
                                                        href={`/journey/${stage.id}`}
                                                        className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isCompleted
                                                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                                            }`}
                                                    >
                                                        {isCompleted ? (
                                                            <>
                                                                <CheckCircle className="w-4 h-4" />
                                                                Review Stage
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Play className="w-4 h-4" />
                                                                Start Activity
                                                            </>
                                                        )}
                                                    </Link>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-400 cursor-not-allowed"
                                                    >
                                                        <Lock className="w-4 h-4" />
                                                        Locked
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

                {/* Completion Message */}
                {completedStages.length === JOURNEY_STAGES.length && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white text-center">
                        <Award className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-2">Congratulations! 🎉</h2>
                        <p className="text-xl mb-4">You've completed the entire research journey!</p>
                        <p className="text-white/90">
                            From zero knowledge to research excellence - you've transformed yourself into an impactful researcher!
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
