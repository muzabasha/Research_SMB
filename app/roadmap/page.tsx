'use client'

import { useState, useEffect } from 'react'
import { GraduationCap, Users, Building2, ArrowRight, Maximize2, Minimize2, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Link from 'next/link'

// Roadmap data structure
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

    // Slideshow auto-advance
    useEffect(() => {
        if (isPlaying && slideshowMode) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % getTotalSlides())
            }, 5000) // 5 seconds per slide
            return () => clearInterval(timer)
        }
    }, [isPlaying, slideshowMode])

    const getTotalSlides = () => {
        return Object.keys(ROADMAPS).length + 1 // +1 for overview slide
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

    const toggleSlideshow = () => {
        setSlideshowMode(!slideshowMode)
        if (!slideshowMode) {
            setCurrentSlide(0)
        }
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % getTotalSlides())
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides())
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
                    {currentSlide === 0 ? (
                        // Overview Slide
                        <div className="text-center animate-fadeIn">
                            <h1 className="text-6xl font-bold mb-8 animate-slideUp">Research Excellence Roadmap</h1>
                            <p className="text-2xl mb-12 text-gray-300 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                                Three Interconnected Pathways to Research Success
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {Object.entries(ROADMAPS).map(([key, roadmap], idx) => {
                                    const Icon = roadmap.icon
                                    const colors = getColorClasses(roadmap.color)
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
                    ) : (
                        // Individual Roadmap Slides
                        (() => {
                            const roadmapKeys = Object.keys(ROADMAPS)
                            const roadmapKey = roadmapKeys[currentSlide - 1]
                            const roadmap = ROADMAPS[roadmapKey as keyof typeof ROADMAPS]
                            const Icon = roadmap.icon
                            const colors = getColorClasses(roadmap.color)

                            return (
                                <div className="w-full max-w-7xl animate-fadeIn">
                                    <div className="text-center mb-12">
                                        <Icon className="w-20 h-20 mx-auto mb-4 animate-bounce" />
                                        <h2 className="text-5xl font-bold mb-4">{roadmap.title}</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {roadmap.stages.map((stage, idx) => (
                                            <div
                                                key={stage.id}
                                                className="bg-white/10 backdrop-blur rounded-xl p-6 animate-slideUp"
                                                style={{ animationDelay: `${idx * 0.1}s` }}
                                            >
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center font-bold`}>
                                                        {stage.id}
                                                    </div>
                                                    <h3 className="text-xl font-bold">{stage.title}</h3>
                                                </div>
                                                <p className="text-sm text-gray-300 mb-2">{stage.duration}</p>
                                                <p className="text-gray-400">{stage.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })()
                    )}
                </div>

                {/* Slide Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({ length: getTotalSlides() }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/40'
                                }`}
                        />
                    ))}
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
                                <div className="flex items-center gap-2 text-sm font-semibold ${colors.text}">
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
