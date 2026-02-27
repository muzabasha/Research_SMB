'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
    ChevronLeft, ChevronRight, Maximize, Minimize, Map, X,
    CheckCircle, Circle, ArrowRight, Home, Play, Pause
} from 'lucide-react'
import { getStageById, JOURNEY_STAGES, PHASES } from '@/lib/journey-data'

export default function PresentationMode() {
    const params = useParams()
    const router = useRouter()
    const stageId = parseInt(params.stageId as string)
    const stage = getStageById(stageId)

    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showMindMap, setShowMindMap] = useState(true)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showHelp, setShowHelp] = useState(false)

    // Auto-advance slides
    useEffect(() => {
        if (!isPlaying) return
        const timer = setInterval(() => {
            setCurrentSlide(prev => {
                const maxSlides = getSlideCount()
                return prev < maxSlides - 1 ? prev + 1 : prev
            })
        }, 8000) // 8 seconds per slide
        return () => clearInterval(timer)
    }, [isPlaying, stage])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                if (e.shiftKey) {
                    prevStage()
                } else {
                    prevSlide()
                }
            } else if (e.key === 'ArrowRight') {
                if (e.shiftKey) {
                    nextStage()
                } else {
                    nextSlide()
                }
            } else if (e.key === 'f' || e.key === 'F') {
                toggleFullscreen()
            } else if (e.key === 'm' || e.key === 'M') {
                setShowMindMap(prev => !prev)
            } else if (e.key === ' ') {
                e.preventDefault()
                setIsPlaying(prev => !prev)
            } else if (e.key === 'Escape') {
                if (document.fullscreenElement) {
                    document.exitFullscreen()
                    setIsFullscreen(false)
                } else if (showHelp) {
                    setShowHelp(false)
                }
            } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
                setShowHelp(prev => !prev)
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [currentSlide, stageId])

    if (!stage) {
        return <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Stage Not Found</h1>
                <button
                    onClick={() => router.push('/journey')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg text-xl"
                >
                    Back to Journey
                </button>
            </div>
        </div>
    }

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }

    const getSlideCount = () => {
        let count = 5 // Title, Objectives, Transformation, Do's/Don'ts, Success Story
        if (stage.subStages && stage.subStages.length > 0) count++
        if (stage.activities && stage.activities.length > 0) {
            count += stage.activities.length
        }
        return count
    }

    const nextSlide = () => {
        const maxSlides = getSlideCount()
        if (currentSlide < maxSlides - 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const nextStage = () => {
        if (stageId < 15) {
            router.push(`/presentation/${stageId + 1}`)
            setCurrentSlide(0)
        }
    }

    const prevStage = () => {
        if (stageId > 1) {
            router.push(`/presentation/${stageId - 1}`)
            setCurrentSlide(0)
        }
    }

    const goToStage = (id: number) => {
        router.push(`/presentation/${id}`)
        setCurrentSlide(0)
    }

    const getCurrentPhase = () => {
        return PHASES.find(p => p.stages.includes(stageId))
    }

    const renderSlide = () => {
        let slideIndex = 0

        // Slide 0: Title
        if (currentSlide === slideIndex++) {
            return (
                <div className="animate-fadeIn">
                    <div className="text-center mb-12">
                        <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-2xl font-semibold mb-6">
                            Stage {stage.id} • {stage.phase} Phase
                        </div>
                        <h1 className="text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            {stage.title}
                        </h1>
                        <p className="text-4xl text-gray-600 mb-8">{stage.subtitle}</p>
                        <div className="flex items-center justify-center gap-4 text-2xl text-gray-500">
                            <span className="px-4 py-2 bg-gray-100 rounded-lg">⏱️ {stage.duration}</span>
                            <span className="px-4 py-2 bg-gray-100 rounded-lg">🎯 {stage.activityType}</span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
                        <p className="text-3xl text-gray-700 leading-relaxed text-center">
                            {stage.description}
                        </p>
                    </div>
                </div>
            )
        }

        // Slide 1: Learning Objectives
        if (currentSlide === slideIndex++) {
            return (
                <div className="animate-fadeIn">
                    <h2 className="text-6xl font-bold text-gray-900 mb-12">🎯 Learning Objectives</h2>
                    <div className="space-y-6">
                        {stage.learningObjectives.map((obj, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg animate-slideInLeft"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-3xl text-gray-700 pt-2">{obj}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        // Slide 2: Transformation
        if (currentSlide === slideIndex++) {
            return (
                <div className="animate-fadeIn">
                    <h2 className="text-6xl font-bold text-gray-900 mb-12 text-center">🦋 Your Transformation Journey</h2>
                    <div className="flex items-center justify-center gap-12 mb-16">
                        <div className="flex-1 bg-red-50 rounded-3xl p-12 text-center animate-slideInLeft">
                            <div className="text-3xl text-red-600 font-semibold mb-4">FROM</div>
                            <div className="text-5xl font-bold text-red-700">{stage.transformation.from}</div>
                        </div>
                        <ArrowRight className="w-24 h-24 text-gray-400 animate-pulse" />
                        <div className="flex-1 bg-green-50 rounded-3xl p-12 text-center animate-slideInRight">
                            <div className="text-3xl text-green-600 font-semibold mb-4">TO</div>
                            <div className="text-5xl font-bold text-green-700">{stage.transformation.to}</div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-12">
                        <p className="text-3xl text-gray-700 text-center leading-relaxed">
                            This stage will transform your mindset and capabilities, taking you from where you are to where you want to be!
                        </p>
                    </div>
                </div>
            )
        }

        // Slide 3: Do's and Don'ts
        if (currentSlide === slideIndex++) {
            return (
                <div className="animate-fadeIn">
                    <h2 className="text-6xl font-bold text-gray-900 mb-12 text-center">✅ Success Strategies & ⚠️ Pitfalls</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-green-50 rounded-3xl p-10 animate-slideInLeft">
                            <h3 className="text-4xl font-bold text-green-900 mb-8 flex items-center gap-4">
                                <CheckCircle className="w-12 h-12" />
                                What TO DO
                            </h3>
                            <ul className="space-y-4">
                                {stage.dosList.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-2xl text-green-800">
                                        <span className="text-green-600 font-bold text-3xl">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-50 rounded-3xl p-10 animate-slideInRight">
                            <h3 className="text-4xl font-bold text-red-900 mb-8 flex items-center gap-4">
                                <X className="w-12 h-12" />
                                What NOT to DO
                            </h3>
                            <ul className="space-y-4">
                                {stage.dontsList.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-2xl text-red-800">
                                        <span className="text-red-600 font-bold text-3xl">✗</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }

        // Slide 4: Sub-Stages (if available)
        if (stage.subStages && stage.subStages.length > 0 && currentSlide === slideIndex++) {
            return (
                <div className="animate-fadeIn">
                    <h2 className="text-6xl font-bold text-gray-900 mb-12">📋 Stage Breakdown</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {stage.subStages.map((subStage, index) => (
                            <div
                                key={subStage.id}
                                className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-blue-500 animate-slideInUp"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{subStage.title}</h3>
                                        <p className="text-xl text-gray-600 mb-3">{subStage.description}</p>
                                        <div className="flex items-center gap-4 text-lg text-gray-500">
                                            <span>⏱️ {subStage.duration}</span>
                                            <span>📦 {subStage.deliverable}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        // Activity Slides
        if (stage.activities && stage.activities.length > 0) {
            const activityIndex = currentSlide - slideIndex
            if (activityIndex >= 0 && activityIndex < stage.activities.length) {
                const activity = stage.activities[activityIndex]
                return (
                    <div className="animate-fadeIn">
                        <div className="mb-8">
                            <div className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-2xl font-semibold mb-4">
                                Activity {activityIndex + 1} of {stage.activities.length}
                            </div>
                            <h2 className="text-6xl font-bold text-gray-900 mb-4">{activity.title}</h2>
                            <div className="flex items-center gap-6 text-2xl text-gray-600">
                                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">{activity.type}</span>
                                <span>⏱️ {activity.duration}</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 mb-8">
                            <p className="text-3xl text-gray-700 leading-relaxed">{activity.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">📋 Steps</h3>
                                <ol className="space-y-3">
                                    {activity.steps.slice(0, 6).map((step, index) => (
                                        <li key={index} className="flex items-start gap-3 text-xl text-gray-700">
                                            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                {index + 1}
                                            </span>
                                            <span className="pt-1">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-green-50 rounded-2xl p-8">
                                    <h3 className="text-3xl font-bold text-green-900 mb-4">🛠️ Materials</h3>
                                    <ul className="space-y-2">
                                        {activity.materials.slice(0, 5).map((material, index) => (
                                            <li key={index} className="flex items-start gap-2 text-xl text-green-800">
                                                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                                                <span>{material}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-purple-50 rounded-2xl p-8">
                                    <h3 className="text-3xl font-bold text-purple-900 mb-4">🎯 Expected Output</h3>
                                    <p className="text-xl text-purple-800">{activity.expectedOutput}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            slideIndex += stage.activities.length
        }

        // Last Slide: Success Story
        if (currentSlide === slideIndex) {
            return (
                <div className="animate-fadeIn">
                    <h2 className="text-6xl font-bold text-gray-900 mb-12 text-center">💡 Success Story</h2>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-16">
                        <div className="text-8xl mb-8 text-center">💬</div>
                        <blockquote className="text-4xl text-gray-700 italic mb-12 text-center leading-relaxed">
                            "{stage.successStory.quote}"
                        </blockquote>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stage.successStory.author}</div>
                            <div className="text-2xl text-gray-600">{stage.successStory.role}</div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-green-100 text-green-800 px-8 py-4 rounded-2xl text-3xl font-semibold">
                            🎉 Ready to start this stage? Let's go!
                        </div>
                    </div>
                </div>
            )
        }

        return null
    }

    const currentPhase = getCurrentPhase()

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Mind Map Sidebar */}
            <div
                className={`fixed left-0 top-0 h-full bg-white shadow-2xl transition-all duration-300 z-50 ${showMindMap ? 'w-96' : 'w-0'
                    } overflow-hidden`}
            >
                <div className="p-6 h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Research Journey</h3>
                        <button
                            onClick={() => setShowMindMap(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {PHASES.map((phase) => {
                        const phaseStages = JOURNEY_STAGES.filter(s => s.phase === phase.name)
                        const isCurrentPhase = phase.name === currentPhase?.name

                        return (
                            <div key={phase.id} className="mb-6">
                                <div className={`font-bold text-lg mb-3 px-3 py-2 rounded-lg ${isCurrentPhase ? 'bg-blue-100 text-blue-900' : 'text-gray-700'
                                    }`}>
                                    Phase {phase.id}: {phase.name}
                                </div>
                                <div className="space-y-2 ml-4">
                                    {phaseStages.map((s) => {
                                        const isCurrent = s.id === stageId
                                        const isCompleted = s.id < stageId

                                        return (
                                            <button
                                                key={s.id}
                                                onClick={() => goToStage(s.id)}
                                                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${isCurrent
                                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                                    : isCompleted
                                                        ? 'bg-green-50 text-green-700 hover:bg-green-100'
                                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {isCompleted ? (
                                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                                ) : isCurrent ? (
                                                    <Circle className="w-5 h-5 flex-shrink-0 fill-current" />
                                                ) : (
                                                    <Circle className="w-5 h-5 flex-shrink-0" />
                                                )}
                                                <div className="flex-1">
                                                    <div className="font-semibold">{s.id}. {s.title}</div>
                                                    <div className="text-xs opacity-75">{s.duration}</div>
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className={`transition-all duration-300 ${showMindMap ? 'ml-96' : 'ml-0'}`}>
                {/* Top Control Bar */}
                <div className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => router.push('/journey')}
                            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Home className="w-6 h-6" />
                        </button>
                        {!showMindMap && (
                            <button
                                onClick={() => setShowMindMap(true)}
                                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2"
                            >
                                <Map className="w-5 h-5" />
                                Show Mind Map
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-lg font-semibold text-gray-700">
                            Slide {currentSlide + 1} of {getSlideCount()}
                        </div>
                        <button
                            onClick={() => setShowHelp(true)}
                            className="p-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                            title="Keyboard Shortcuts (?)"
                        >
                            <span className="text-xl font-bold">?</span>
                        </button>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`p-3 rounded-lg transition-colors ${isPlaying ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                }`}
                            title={isPlaying ? 'Pause Auto-play (Space)' : 'Start Auto-play (Space)'}
                        >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                        </button>
                        <button
                            onClick={toggleFullscreen}
                            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                        >
                            {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Presentation Content */}
                <div className="p-12 pb-32 min-h-[calc(100vh-80px)]">
                    <div className="max-w-7xl mx-auto">
                        {renderSlide()}
                    </div>
                </div>

                {/* Floating Navigation Buttons - Left & Right Arrows */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="fixed left-4 top-1/2 -translate-y-1/2 z-40 p-4 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 border-2 border-blue-200"
                    title="Previous Slide"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === getSlideCount() - 1}
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-40 p-4 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 border-2 border-blue-200"
                    title="Next Slide"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Bottom Navigation Bar - Compact & Elegant */}
                <div className={`fixed bottom-0 right-0 bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md shadow-2xl transition-all duration-300 z-40 border-t-2 border-blue-100 ${showMindMap ? 'left-96' : 'left-0'}`}>
                    <div className="px-6 py-4 flex items-center justify-between gap-4">
                        {/* Previous Stage Button */}
                        <button
                            onClick={prevStage}
                            disabled={stageId === 1}
                            className="group px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 text-base font-medium shadow-md hover:shadow-lg disabled:hover:shadow-md"
                            title={stageId > 1 ? `Go to Stage ${stageId - 1}` : 'First stage'}
                        >
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="hidden sm:inline">Prev Stage</span>
                        </button>

                        {/* Center Info */}
                        <div className="flex items-center gap-4">
                            {/* Slide Counter */}
                            <div className="px-4 py-2 bg-white/80 rounded-lg shadow-md border border-blue-100">
                                <div className="text-sm font-semibold text-gray-700">
                                    <span className="text-blue-600">{currentSlide + 1}</span>
                                    <span className="text-gray-400 mx-1">/</span>
                                    <span className="text-gray-500">{getSlideCount()}</span>
                                </div>
                            </div>

                            {/* Slide Navigation Buttons */}
                            <div className="hidden md:flex items-center gap-2">
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                    className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                    title="Previous Slide (←)"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentSlide === getSlideCount() - 1}
                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                    title="Next Slide (→)"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Stage Info */}
                            <div className="hidden lg:block px-4 py-2 bg-white/80 rounded-lg shadow-md border border-blue-100">
                                <div className="text-sm font-medium text-gray-700">
                                    Stage {stageId}: <span className="text-blue-600">{stage.title}</span>
                                </div>
                            </div>
                        </div>

                        {/* Next Stage Button */}
                        <button
                            onClick={nextStage}
                            disabled={stageId === 15}
                            className="group px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 text-base font-medium shadow-md hover:shadow-lg disabled:hover:shadow-md"
                            title={stageId < 15 ? `Go to Stage ${stageId + 1}` : 'Last stage'}
                        >
                            <span className="hidden sm:inline">Next Stage</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1 bg-gray-200">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                            style={{ width: `${((currentSlide + 1) / getSlideCount()) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Keyboard Shortcuts Help Overlay */}
            {showHelp && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-scaleIn">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-900">⌨️ Keyboard Shortcuts</h2>
                            <button
                                onClick={() => setShowHelp(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-3">Navigation</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Next Slide</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">→</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Previous Slide</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">←</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Next Stage</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Shift + →</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Previous Stage</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Shift + ←</kbd>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-3">Controls</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Play/Pause</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Space</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Fullscreen</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">F</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Toggle Mind Map</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">M</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Show Help</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">?</kbd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Close/Exit</span>
                                        <kbd className="px-3 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Esc</kbd>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                                💡 <strong>Pro Tip:</strong> Use arrow keys for quick navigation, or click the floating arrows on the sides!
                            </p>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setShowHelp(false)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Got it!
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideInLeft {
                    from { 
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInRight {
                    from { 
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.6s ease-out;
                }
                .animate-slideInRight {
                    animation: slideInRight 0.6s ease-out;
                }
                .animate-slideInUp {
                    animation: slideInUp 0.6s ease-out;
                }
            `}</style>
        </div>
    )
}
