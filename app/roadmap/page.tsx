'use client'

import { useState, useEffect } from 'react'
import { GraduationCap, Users, Building2, ArrowRight, Maximize2, Minimize2, ChevronLeft, ChevronRight, Play, Pause, CheckCircle, Lightbulb, Target, Calendar, ListChecks } from 'lucide-react'
import Link from 'next/link'
import { STUDENT_DETAILED_ROADMAP, type DetailedStage } from '@/lib/roadmap-detailed-data'

// Enhanced roadmap data structure with Q&A
const ROADMAPS = {
    student: {
        title: 'UG/PG Research Journey',
        icon: GraduationCap,
        color: 'blue',
        stages: [
            { id: 1, title: 'Research Awareness', duration: '1-2 months', description: 'Understanding research fundamentals and opportunities', dependencies: [] },
            { id: 2, title: 'Topic Selection', duration: '2-3 months', description: 'Identifying research area and problem statement', dependencies: [1] },
            { id: 3, title: 'Literature Review', duration: '3-4 months', description: 'Comprehensive review of existing research', dependencies: [2] },
            { id: 4, title: 'Methodology Design', duration: '2-3 months', description: 'Planning research approach and methods', dependencies: [3] },
            { id: 5, title: 'Data Collection', duration: '4-6 months', description: 'Gathering research data and evidence', dependencies: [4] },
            { id: 6, title: 'Analysis & Results', duration: '3-4 months', description: 'Analyzing data and interpreting findings', dependencies: [5] },
            { id: 7, title: 'Publication', duration: '2-3 months', description: 'Writing and submitting research papers', dependencies: [6] }
        ]
    },
    faculty: {
        title: 'Faculty Research Excellence',
        icon: Users,
        color: 'purple',
        stages: [
            { id: 1, title: 'Profile Building', duration: '3-6 months', description: 'Establishing research credentials and expertise', dependencies: [] },
            { id: 2, title: 'Funding Acquisition', duration: '6-12 months', description: 'Securing research grants and funding', dependencies: [1] },
            { id: 3, title: 'Lab Setup', duration: '3-6 months', description: 'Building research infrastructure and team', dependencies: [2] },
            { id: 4, title: 'Student Mentorship', duration: 'Ongoing', description: 'Guiding UG/PG research projects', dependencies: [3], links: ['student-2', 'student-3'] },
            { id: 5, title: 'Research Execution', duration: '12-24 months', description: 'Conducting funded research projects', dependencies: [3, 4] },
            { id: 6, title: 'Publications & Patents', duration: 'Ongoing', description: 'Publishing findings and filing patents', dependencies: [5], links: ['student-7'] },
            { id: 7, title: 'Collaborations', duration: 'Ongoing', description: 'Building research networks and partnerships', dependencies: [1] }
        ]
    },
    institute: {
        title: 'Institutional Strategy & Rankings',
        icon: Building2,
        color: 'green',
        stages: [
            { id: 1, title: 'Research Culture', duration: '6-12 months', description: 'Building institutional research ecosystem', dependencies: [], links: ['student-1', 'faculty-1'] },
            { id: 2, title: 'Infrastructure Development', duration: '12-18 months', description: 'Establishing research facilities and resources', dependencies: [1], links: ['faculty-3'] },
            { id: 3, title: 'Faculty Development', duration: 'Ongoing', description: 'Training and supporting faculty research', dependencies: [1], links: ['faculty-1', 'faculty-2'] },
            { id: 4, title: 'Student Research Programs', duration: 'Ongoing', description: 'Promoting UG/PG research participation', dependencies: [1, 3], links: ['student-1', 'student-2'] },
            { id: 5, title: 'Quality Metrics', duration: 'Ongoing', description: 'Tracking publications, citations, and impact', dependencies: [3, 4], links: ['faculty-6', 'student-7'] },
            { id: 6, title: 'Industry Partnerships', duration: '12-24 months', description: 'Building industry collaborations', dependencies: [2, 5], links: ['faculty-7'] },
            { id: 7, title: 'Ranking Improvement', duration: '24-36 months', description: 'Achieving higher national/international rankings', dependencies: [5, 6] }
        ]
    }
}

export default function RoadmapPage() {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [slideshowMode, setSlideshowMode] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null)
    const [hoveredStage, setHoveredStage] = useState<string | null>(null)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [showAnswer, setShowAnswer] = useState(false)

    // Generate all slides for slideshow
    const generateSlides = () => {
        const slides: any[] = [{ type: 'overview' }]

        // For now, only Student roadmap has detailed data
        STUDENT_DETAILED_ROADMAP.forEach((stage) => {
            // Stage overview
            slides.push({ type: 'stage-overview', roadmap: 'student', stage })

            // Sub-stages
            stage.subStages.forEach((subStage) => {
                slides.push({ type: 'sub-stage', roadmap: 'student', stage, subStage })
            })

            // Planning phases
            slides.push({ type: 'planning-phases', roadmap: 'student', stage })

            // Q&A question
            slides.push({ type: 'question', roadmap: 'student', stage })

            // Q&A answer (will show based on selection)
            slides.push({ type: 'answer', roadmap: 'student', stage })
        })

        // Add other roadmaps (Faculty and Institute) with basic structure
        Object.entries(ROADMAPS).forEach(([key, roadmap]) => {
            if (key !== 'student') {
                roadmap.stages.forEach((stage) => {
                    slides.push({ type: 'basic-stage', roadmap: key, stage })
                })
            }
        })

        return slides
    }

    const allSlides = generateSlides()

    // Slideshow auto-advance
    useEffect(() => {
        if (isPlaying && slideshowMode) {
            const timer = setInterval(() => {
                // Don't auto-advance on question slides
                if (allSlides[currentSlide]?.type !== 'question') {
                    setCurrentSlide((prev) => (prev + 1) % allSlides.length)
                    setShowAnswer(false)
                    setSelectedAnswer(null)
                }
            }, 5000)
            return () => clearInterval(timer)
        }
    }, [isPlaying, slideshowMode, currentSlide, allSlides.length])

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }

    const toggleSlideshow = () => {
        setSlideshowMode(!slideshowMode)
        if (!slideshowMode) {
            setCurrentSlide(0)
            setShowAnswer(false)
            setSelectedAnswer(null)
        }
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % allSlides.length)
        setShowAnswer(false)
        setSelectedAnswer(null)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length)
        setShowAnswer(false)
        setSelectedAnswer(null)
    }

    const handleAnswerSelect = (optionId: string) => {
        setSelectedAnswer(optionId)
        setShowAnswer(true)
    }

    const getColorClasses = (color: string) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-500',
                text: 'text-blue-600',
                hover: 'hover:bg-blue-100',
                gradient: 'from-blue-500 to-blue-600'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-500',
                text: 'text-purple-600',
                hover: 'hover:bg-purple-100',
                gradient: 'from-purple-500 to-purple-600'
            },
            green: {
                bg: 'bg-green-50',
                border: 'border-green-500',
                text: 'text-green-600',
                hover: 'hover:bg-green-100',
                gradient: 'from-green-500 to-green-600'
            }
        }
        return colors[color as keyof typeof colors]
    }

    const renderSlideContent = () => {
        const slide = allSlides[currentSlide]
        if (!slide) return null

        switch (slide.type) {
            case 'overview':
                return (
                    <div className="text-center animate-fadeIn">
                        <h1 className="text-6xl font-bold mb-8 animate-slideUp">Research Excellence Roadmap</h1>
                        <p className="text-2xl mb-12 text-gray-300 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                            Three Interconnected Pathways to Research Success
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {Object.entries(ROADMAPS).map(([key, roadmap], idx) => {
                                const Icon = roadmap.icon
                                return (
                                    <div
                                        key={key}
                                        className="bg-white/10 backdrop-blur rounded-2xl p-8 animate-slideUp"
                                        style={{ animationDelay: `${0.4 + idx * 0.2}s` }}
                                    >
                                        <Icon className="w-16 h-16 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">{roadmap.title}</h3>
                                        <p className="text-gray-300">{roadmap.stages.length} Key Stages</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )

            case 'stage-overview':
                return (
                    <div className="w-full max-w-6xl animate-fadeIn">
                        <div className="text-center mb-8">
                            <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-xl font-bold mb-4">
                                Stage {slide.stage.id}
                            </div>
                            <h2 className="text-5xl font-bold mb-4">{slide.stage.title}</h2>
                            <p className="text-xl text-gray-300 mb-2">⏱️ Duration: {slide.stage.duration}</p>
                            <p className="text-2xl text-gray-200">{slide.stage.description}</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <Target className="w-12 h-12 mb-4 text-blue-400" />
                                <h3 className="text-xl font-bold mb-2">Sub-Stages</h3>
                                <p className="text-gray-300">{slide.stage.subStages.length} detailed steps</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <Calendar className="w-12 h-12 mb-4 text-purple-400" />
                                <h3 className="text-xl font-bold mb-2">Planning</h3>
                                <p className="text-gray-300">{slide.stage.planningPhases.length} strategic phases</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <Lightbulb className="w-12 h-12 mb-4 text-yellow-400" />
                                <h3 className="text-xl font-bold mb-2">Interactive Q&A</h3>
                                <p className="text-gray-300">Mindset assessment</p>
                            </div>
                        </div>
                    </div>
                )

            case 'sub-stage':
                return (
                    <div className="w-full max-w-5xl animate-fadeIn">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                                    {slide.subStage.id}
                                </div>
                                <h2 className="text-4xl font-bold">{slide.subStage.title}</h2>
                            </div>
                            <p className="text-xl text-gray-300 mb-8">⏱️ Duration: {slide.subStage.duration}</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <ListChecks className="w-6 h-6" />
                                        Activities
                                    </h3>
                                    <ul className="space-y-3">
                                        {slide.subStage.activities.map((activity: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                                <span className="text-lg text-gray-200">{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Target className="w-6 h-6" />
                                        Deliverables
                                    </h3>
                                    <ul className="space-y-3">
                                        {slide.subStage.deliverables.map((deliverable: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                                <span className="text-lg text-gray-200">{deliverable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'planning-phases':
                return (
                    <div className="w-full max-w-6xl animate-fadeIn">
                        <h2 className="text-5xl font-bold text-center mb-12">Planning Phases</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {slide.stage.planningPhases.map((phase: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="bg-white/10 backdrop-blur rounded-2xl p-8 animate-slideUp"
                                    style={{ animationDelay: `${idx * 0.2}s` }}
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                                        <p className="text-lg text-gray-300">{phase.focus}</p>
                                    </div>
                                    <div className="space-y-3">
                                        {phase.actions.map((action: string, actionIdx: number) => (
                                            <div key={actionIdx} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                                <span className="text-gray-200">{action}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )

            case 'question':
                return (
                    <div className="w-full max-w-4xl animate-fadeIn">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-10">
                            <div className="text-center mb-8">
                                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-400 animate-pulse" />
                                <h2 className="text-4xl font-bold mb-4">💭 Reflection Time</h2>
                                <p className="text-xl text-gray-300">{slide.stage.qa.question.context}</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-8 mb-8">
                                <h3 className="text-3xl font-bold mb-6 text-center">{slide.stage.qa.question.question}</h3>
                            </div>

                            <div className="grid gap-4">
                                {slide.stage.qa.question.options.map((option: any) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAnswerSelect(option.id)}
                                        className={`text-left p-6 rounded-xl transition-all text-lg ${selectedAnswer === option.id
                                            ? 'bg-blue-500 text-white scale-105 shadow-xl'
                                            : 'bg-white/10 hover:bg-white/20'
                                            }`}
                                    >
                                        <span className="font-bold mr-3">{option.id.toUpperCase()}.</span>
                                        {option.text}
                                    </button>
                                ))}
                            </div>

                            {selectedAnswer && !showAnswer && (
                                <div className="text-center mt-8">
                                    <button
                                        onClick={() => setShowAnswer(true)}
                                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
                                    >
                                        See Your Interpretation →
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )

            case 'answer':
                if (!selectedAnswer || !showAnswer) {
                    return (
                        <div className="w-full max-w-4xl animate-fadeIn text-center">
                            <Lightbulb className="w-24 h-24 mx-auto mb-6 text-yellow-400" />
                            <h2 className="text-4xl font-bold mb-4">Select an answer on the previous slide</h2>
                            <p className="text-xl text-gray-300">Go back to choose your response</p>
                        </div>
                    )
                }

                const interpretation = slide.stage.qa.answer.interpretations[selectedAnswer]
                return (
                    <div className="w-full max-w-5xl animate-fadeIn">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-10">
                            <div className="text-center mb-8">
                                <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-xl font-bold mb-4">
                                    Your Choice: {selectedAnswer.toUpperCase()}
                                </div>
                                <h2 className="text-4xl font-bold mb-4">{interpretation.title}</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                        😄 Funny Analogy
                                    </h3>
                                    <p className="text-lg text-gray-200">{interpretation.analogy}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            📍 Where You Are
                                        </h3>
                                        <p className="text-gray-200">{interpretation.currentState}</p>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            ✨ Better Approach
                                        </h3>
                                        <p className="text-gray-200">{interpretation.betterApproach}</p>
                                    </div>
                                </div>

                                <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                        🏛️ Institute Impact
                                    </h3>
                                    <p className="text-lg text-gray-200">{interpretation.instituteImpact}</p>
                                </div>

                                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                        💡 Action Tip
                                    </h3>
                                    <p className="text-lg text-gray-200">{interpretation.actionTip}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'basic-stage':
                const roadmap = ROADMAPS[slide.roadmap as keyof typeof ROADMAPS]
                const Icon = roadmap.icon
                const colors = getColorClasses(roadmap.color)
                return (
                    <div className="w-full max-w-5xl animate-fadeIn">
                        <div className="text-center mb-8">
                            <Icon className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold mb-2">{roadmap.title}</h3>
                        </div>
                        <div className={`bg-white/10 backdrop-blur rounded-2xl p-8`}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center font-bold text-xl`}>
                                    {slide.stage.id}
                                </div>
                                <h3 className="text-3xl font-bold">{slide.stage.title}</h3>
                            </div>
                            <p className="text-lg text-gray-300 mb-3">⏱️ Duration: {slide.stage.duration}</p>
                            <p className="text-xl text-gray-200">{slide.stage.description}</p>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    if (slideshowMode) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
                {/* Slideshow Controls */}
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition-all"
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition-all"
                    >
                        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={toggleSlideshow}
                        className="bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition-all"
                    >
                        Exit Slideshow
                    </button>
                </div>

                {/* Slide Navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur p-4 rounded-full hover:bg-white/30 transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur p-4 rounded-full hover:bg-white/30 transition-all"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Slide Content */}
                <div className="h-screen flex items-center justify-center p-12">
                    {renderSlideContent()}
                </div>

                {/* Slide Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
                    {allSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentSlide(idx)
                                setShowAnswer(false)
                                setSelectedAnswer(null)
                            }}
                            className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="font-bold">{currentSlide + 1}</span> / {allSlides.length}
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-blue-600">🎓 Research Navigator</Link>
                        <p className="text-sm text-gray-600">Research Excellence Roadmap</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={toggleSlideshow}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                        >
                            <Play className="w-5 h-5" />
                            Start Presentation
                        </button>
                        <button
                            onClick={toggleFullscreen}
                            className="flex items-center gap-2 bg-white border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                        >
                            <Maximize2 className="w-5 h-5" />
                            Fullscreen
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Research Excellence Roadmap
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Three interconnected pathways showing how student research, faculty excellence, and institutional strategy work together to achieve research success
                    </p>
                </div>

                {/* Roadmap Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {Object.entries(ROADMAPS).map(([key, roadmap]) => {
                        const Icon = roadmap.icon
                        const colors = getColorClasses(roadmap.color)
                        return (
                            <button
                                key={key}
                                onClick={() => setSelectedRoadmap(selectedRoadmap === key ? null : key)}
                                className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 text-left transition-all hover:shadow-xl ${selectedRoadmap === key ? 'ring-4 ring-offset-2' : ''
                                    }`}
                            >
                                <Icon className={`w-12 h-12 ${colors.text} mb-4`} />
                                <h3 className="text-2xl font-bold mb-2">{roadmap.title}</h3>
                                <p className="text-gray-600 mb-4">{roadmap.stages.length} stages</p>
                                <div className={`flex items-center gap-2 text-sm font-semibold ${colors.text}`}>
                                    {selectedRoadmap === key ? 'Hide Details' : 'View Roadmap'}
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* Detailed Roadmap View */}
                {selectedRoadmap && (
                    <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-fadeIn">
                        {(() => {
                            const roadmap = ROADMAPS[selectedRoadmap as keyof typeof ROADMAPS]
                            const Icon = roadmap.icon
                            const colors = getColorClasses(roadmap.color)

                            return (
                                <>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Icon className={`w-12 h-12 ${colors.text}`} />
                                        <h2 className="text-3xl font-bold">{roadmap.title}</h2>
                                    </div>
                                    <div className="space-y-4">
                                        {roadmap.stages.map((stage, idx) => (
                                            <div
                                                key={stage.id}
                                                onMouseEnter={() => setHoveredStage(`${selectedRoadmap}-${stage.id}`)}
                                                onMouseLeave={() => setHoveredStage(null)}
                                                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 transition-all ${colors.hover} ${hoveredStage === `${selectedRoadmap}-${stage.id}` ? 'scale-105 shadow-lg' : ''
                                                    }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                                                        {stage.id}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                                                        <p className="text-sm text-gray-600 mb-2">⏱️ Duration: {stage.duration}</p>
                                                        <p className="text-gray-700 mb-3">{stage.description}</p>
                                                        {stage.dependencies.length > 0 && (
                                                            <div className="flex items-center gap-2 text-sm">
                                                                <span className="font-semibold">Dependencies:</span>
                                                                <span className="text-gray-600">Stage {stage.dependencies.join(', ')}</span>
                                                            </div>
                                                        )}
                                                        {stage.links && stage.links.length > 0 && (
                                                            <div className="mt-2 flex flex-wrap gap-2">
                                                                {stage.links.map((link) => (
                                                                    <span key={link} className="text-xs bg-white px-3 py-1 rounded-full border">
                                                                        🔗 Linked to {link}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {idx < roadmap.stages.length - 1 && (
                                                    <div className="flex justify-center mt-4">
                                                        <ArrowRight className={`w-6 h-6 ${colors.text}`} />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )
                        })()}
                    </div>
                )}

                {/* Interconnections Section */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">How the Roadmaps Connect</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg mb-3 text-blue-600">Student → Faculty</h3>
                            <p className="text-sm text-gray-700">
                                Faculty mentor students through research journey, guiding topic selection, methodology, and publication
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg mb-3 text-purple-600">Faculty → Institute</h3>
                            <p className="text-sm text-gray-700">
                                Faculty research output (publications, patents, funding) directly contributes to institutional rankings
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="font-bold text-lg mb-3 text-green-600">Institute → Student</h3>
                            <p className="text-sm text-gray-700">
                                Institutional infrastructure, culture, and programs enable and support student research activities
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
