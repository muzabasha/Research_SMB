'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, CheckCircle, ExternalLink, BookOpen, AlertCircle, Lightbulb, XCircle, Maximize2, Minimize2, ChevronLeft, ChevronRight, Copy, Check, Edit3, Save, RotateCcw, Sparkles } from 'lucide-react'
import type { ResourceItem } from '@/lib/resource-library'

interface ResourceDetailClientProps {
    resource: ResourceItem
    content: any
}

export default function ResourceDetailClient({ resource, content }: ResourceDetailClientProps) {
    const [isPresentationMode, setIsPresentationMode] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})
    const [editingPrompts, setEditingPrompts] = useState<{ [key: string]: string }>({})
    const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({})

    const getCategoryColor = () => {
        switch (resource.category) {
            case 'guide': return 'from-blue-500 to-blue-600'
            case 'template': return 'from-green-500 to-green-600'
            case 'tool': return 'from-purple-500 to-purple-600'
            case 'activity': return 'from-orange-500 to-orange-600'
            default: return 'from-gray-500 to-gray-600'
        }
    }

    // Prepare slides for presentation mode
    const prepareSlides = () => {
        const slides: any[] = []

        // Title slide
        slides.push({
            type: 'title',
            title: resource.title,
            description: resource.description,
            icon: resource.icon
        })

        // Features slide
        slides.push({
            type: 'features',
            title: 'Key Features',
            features: resource.features
        })

        // Content slides based on type
        if (content.type === 'patent' && content.types) {
            // Patent types slides
            content.types.forEach((patentType: any) => {
                slides.push({
                    type: 'patent-type',
                    data: patentType
                })
            })
        } else if (content.type === 'templates' && content.data) {
            // Group templates by category
            const categories = [...new Set(content.data.map((t: any) => t.category))]
            categories.forEach((category: string) => {
                const categoryTemplates = content.data.filter((t: any) => t.category === category)
                slides.push({
                    type: 'templates',
                    category: category,
                    templates: categoryTemplates
                })
            })
        } else if (content.type === 'ai-prompts' && content.data) {
            // AI prompts slides - one slide per stage
            content.data.forEach((prompt: any) => {
                slides.push({
                    type: 'ai-prompt',
                    data: prompt
                })
            })
        } else if (content.data && Array.isArray(content.data)) {
            // Regular content slides
            content.data.forEach((item: any) => {
                slides.push({
                    type: 'content',
                    data: item
                })
            })
        }

        return slides
    }

    const slides = prepareSlides()
    const totalSlides = slides.length

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    const togglePresentationMode = () => {
        setIsPresentationMode(!isPresentationMode)
        setCurrentSlide(0)
    }

    // Interactive features for AI prompts
    const copyToClipboard = async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedStates({ ...copiedStates, [id]: true })
            setTimeout(() => {
                setCopiedStates({ ...copiedStates, [id]: false })
            }, 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const startEditing = (id: string, originalText: string) => {
        setEditingPrompts({ ...editingPrompts, [id]: originalText })
        setIsEditing({ ...isEditing, [id]: true })
    }

    const saveEdit = (id: string) => {
        setIsEditing({ ...isEditing, [id]: false })
    }

    const resetPrompt = (id: string, originalText: string) => {
        setEditingPrompts({ ...editingPrompts, [id]: originalText })
    }

    const downloadPrompt = (prompt: any) => {
        const content = `# ${prompt.stageName} - Stage ${prompt.stage}
${prompt.subStage ? `## ${prompt.subStage}\n` : ''}
## AI Prompt
${editingPrompts[prompt.id] || prompt.prompt}

## Usage Guidelines
${prompt.guidelines.map((g: string, i: number) => `${i + 1}. ${g}`).join('\n')}

## Role of Human
${prompt.roleOfHuman.map((r: string, i: number) => `${i + 1}. ${r}`).join('\n')}

## Role of AI
${prompt.roleOfAI.map((r: string, i: number) => `${i + 1}. ${r}`).join('\n')}

## Human + AI Performance
${prompt.humanAIPerformance}

## Sample Input
${prompt.sampleInput}

## Sample Output
${prompt.sampleOutput}

## Ethical Considerations
${prompt.ethicalConsiderations.map((e: string, i: number) => `${i + 1}. ${e}`).join('\n')}

## Limitations
${prompt.limitations.map((l: string, i: number) => `${i + 1}. ${l}`).join('\n')}
`
        const blob = new Blob([content], { type: 'text/markdown' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `stage-${prompt.stage}-${prompt.id}.md`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isPresentationMode) return

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault()
                nextSlide()
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault()
                prevSlide()
            } else if (e.key === 'Escape') {
                setIsPresentationMode(false)
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [isPresentationMode, currentSlide])

    return (
        <>
            {/* Presentation Mode */}
            {isPresentationMode && (
                <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-50 flex flex-col">
                    {/* Presentation Header */}
                    <div className="bg-black/30 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between border-b border-white/10 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-2xl sm:text-4xl">{resource.icon}</span>
                            <div>
                                <h1 className="text-base sm:text-2xl font-bold text-white line-clamp-1">{resource.title}</h1>
                                <p className="text-white/70 text-xs sm:text-sm hidden sm:block">Presentation Mode</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-white/70 text-sm sm:text-lg font-mono">
                                {currentSlide + 1} / {totalSlides}
                            </span>
                            <button
                                onClick={togglePresentationMode}
                                className="p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Slide Content */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-8">
                        <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-center">
                            {slides[currentSlide]?.type === 'title' && (
                                <div className="text-center space-y-4 sm:space-y-6 py-4 sm:py-8">
                                    <div className="text-5xl sm:text-8xl mb-4 sm:mb-6">{slides[currentSlide].icon}</div>
                                    <h1 className="text-3xl sm:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                                        {slides[currentSlide].title}
                                    </h1>
                                    <p className="text-lg sm:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto px-4">
                                        {slides[currentSlide].description}
                                    </p>
                                </div>
                            )}

                            {slides[currentSlide]?.type === 'features' && (
                                <div className="space-y-4 sm:space-y-6 w-full py-4 sm:py-8">
                                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8 text-center px-2">
                                        {slides[currentSlide].title}
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 sm:gap-6 max-h-[60vh] overflow-y-auto pr-2 sm:pr-4">
                                        {slides[currentSlide].features.map((feature: string, idx: number) => (
                                            <div key={idx} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                                <CheckCircle className="w-6 h-6 sm:w-10 sm:h-10 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                                                <span className="text-base sm:text-2xl text-white leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {slides[currentSlide]?.type === 'content' && (
                                <div className="space-y-4 sm:space-y-6 w-full py-2 sm:py-4 max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-280px)] overflow-y-auto pr-2 sm:pr-4">
                                    <h2 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 sticky top-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pb-3 sm:pb-4 z-10 px-2">
                                        {slides[currentSlide].data.title ||
                                            slides[currentSlide].data.reason ||
                                            slides[currentSlide].data.commentType ||
                                            slides[currentSlide].data.type ||
                                            'Content'}
                                    </h2>

                                    {slides[currentSlide].data.description && (
                                        <p className="text-base sm:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6 px-2">
                                            {slides[currentSlide].data.description}
                                        </p>
                                    )}

                                    {slides[currentSlide].data.purpose && (
                                        <div className="bg-blue-500/20 border-l-4 sm:border-l-8 border-blue-400 p-4 sm:p-6 rounded-r-xl mb-4 sm:mb-6">
                                            <p className="text-base sm:text-2xl text-blue-200">
                                                <strong className="text-blue-100">Purpose:</strong> {slides[currentSlide].data.purpose}
                                            </p>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.goodExample && (
                                        <div className="bg-green-500/20 border-l-4 sm:border-l-8 border-green-400 p-4 sm:p-6 rounded-r-xl mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-green-100 mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                                                <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8" />
                                                {slides[currentSlide].data.goodExample.title}
                                            </h3>
                                            <p className="text-sm sm:text-xl text-green-100 mb-2 sm:mb-3 whitespace-pre-wrap leading-relaxed">
                                                {slides[currentSlide].data.goodExample.content}
                                            </p>
                                            <p className="text-xs sm:text-lg text-green-200 italic">
                                                <strong>Why:</strong> {slides[currentSlide].data.goodExample.why}
                                            </p>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.badExample && (
                                        <div className="bg-red-500/20 border-l-4 sm:border-l-8 border-red-400 p-4 sm:p-6 rounded-r-xl mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-red-100 mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                                                <XCircle className="w-5 h-5 sm:w-8 sm:h-8" />
                                                {slides[currentSlide].data.badExample.title}
                                            </h3>
                                            <p className="text-sm sm:text-xl text-red-100 mb-2 sm:mb-3 whitespace-pre-wrap leading-relaxed">
                                                {slides[currentSlide].data.badExample.content}
                                            </p>
                                            <p className="text-xs sm:text-lg text-red-200 italic">
                                                <strong>Why:</strong> {slides[currentSlide].data.badExample.why}
                                            </p>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.tips && slides[currentSlide].data.tips.length > 0 && (
                                        <div className="bg-blue-500/20 rounded-xl p-4 sm:p-6 border border-blue-400/30 mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-blue-100 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                                <Lightbulb className="w-5 h-5 sm:w-8 sm:h-8" />
                                                Tips
                                            </h3>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {slides[currentSlide].data.tips.map((tip: string, idx: number) => (
                                                    <li key={idx} className="text-sm sm:text-xl text-blue-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                        <span className="text-blue-300 text-lg sm:text-2xl">•</span>
                                                        <span>{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.commonMistakes && slides[currentSlide].data.commonMistakes.length > 0 && (
                                        <div className="bg-orange-500/20 rounded-xl p-4 sm:p-6 border border-orange-400/30 mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-orange-100 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                                <AlertCircle className="w-5 h-5 sm:w-8 sm:h-8" />
                                                Common Mistakes
                                            </h3>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {slides[currentSlide].data.commonMistakes.map((mistake: string, idx: number) => (
                                                    <li key={idx} className="text-sm sm:text-xl text-orange-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                        <span className="text-orange-300 text-lg sm:text-2xl">✗</span>
                                                        <span>{mistake}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Word Count */}
                                    {slides[currentSlide].data.wordCount && (
                                        <div className="bg-purple-500/20 border-l-4 sm:border-l-8 border-purple-400 p-4 sm:p-6 rounded-r-xl mb-4 sm:mb-6">
                                            <p className="text-base sm:text-2xl text-purple-200">
                                                <strong className="text-purple-100">Word Count:</strong> {slides[currentSlide].data.wordCount}
                                            </p>
                                        </div>
                                    )}

                                    {/* Structure */}
                                    {slides[currentSlide].data.structure && slides[currentSlide].data.structure.length > 0 && (
                                        <div className="bg-indigo-500/20 rounded-xl p-4 sm:p-6 border border-indigo-400/30 mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-indigo-100 mb-3 sm:mb-4">Structure</h3>
                                            <ul className="space-y-1.5 sm:space-y-2">
                                                {slides[currentSlide].data.structure.map((struct: string, idx: number) => (
                                                    <li key={idx} className="text-sm sm:text-xl text-indigo-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                        <span className="text-indigo-300 text-lg sm:text-2xl">▸</span>
                                                        <span>{struct}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* How to Avoid (for desk rejection) */}
                                    {slides[currentSlide].data.howToAvoid && slides[currentSlide].data.howToAvoid.length > 0 && (
                                        <div className="bg-green-500/20 rounded-xl p-4 sm:p-6 border border-green-400/30 mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-green-100 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                                <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8" />
                                                How to Avoid
                                            </h3>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {slides[currentSlide].data.howToAvoid.map((avoid: string, idx: number) => (
                                                    <li key={idx} className="text-sm sm:text-xl text-green-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                        <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-300 flex-shrink-0 mt-0.5 sm:mt-1" />
                                                        <span>{avoid}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* How to Respond (for reviewer comments) */}
                                    {slides[currentSlide].data.howToRespond && slides[currentSlide].data.howToRespond.length > 0 && (
                                        <div className="bg-purple-500/20 rounded-xl p-4 sm:p-6 border border-purple-400/30 mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-purple-100 mb-3 sm:mb-4">How to Respond</h3>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {slides[currentSlide].data.howToRespond.map((respond: string, idx: number) => (
                                                    <li key={idx} className="text-sm sm:text-xl text-purple-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                        <span className="text-purple-300 text-lg sm:text-2xl">→</span>
                                                        <span>{respond}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Examples (for reviewer response) */}
                                    {slides[currentSlide].data.examples && (
                                        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                                            {slides[currentSlide].data.examples.reviewerComment && (
                                                <div className="bg-gray-500/20 rounded-xl p-4 sm:p-6 border border-gray-400/30">
                                                    <p className="text-base sm:text-xl font-semibold text-gray-100 mb-2 sm:mb-3">Reviewer Comment:</p>
                                                    <p className="text-sm sm:text-lg text-gray-200 italic leading-relaxed">"{slides[currentSlide].data.examples.reviewerComment}"</p>
                                                </div>
                                            )}
                                            {slides[currentSlide].data.examples.badResponse && (
                                                <div className="bg-red-500/20 rounded-xl p-4 sm:p-6 border border-red-400/30">
                                                    <p className="text-base sm:text-xl font-semibold text-red-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                        <XCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                                                        Bad Response:
                                                    </p>
                                                    <p className="text-sm sm:text-lg text-red-200 leading-relaxed">"{slides[currentSlide].data.examples.badResponse}"</p>
                                                </div>
                                            )}
                                            {slides[currentSlide].data.examples.goodResponse && (
                                                <div className="bg-green-500/20 rounded-xl p-4 sm:p-6 border border-green-400/30">
                                                    <p className="text-base sm:text-xl font-semibold text-green-100 mb-2 sm:mb-3 flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                                                        Good Response:
                                                    </p>
                                                    <p className="text-sm sm:text-lg text-green-200 mb-2 sm:mb-3 leading-relaxed">"{slides[currentSlide].data.examples.goodResponse}"</p>
                                                    {slides[currentSlide].data.examples.why && (
                                                        <p className="text-xs sm:text-base text-green-300 italic">
                                                            <strong>Why:</strong> {slides[currentSlide].data.examples.why}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Steps (for activities) */}
                                    {slides[currentSlide].data.steps && slides[currentSlide].data.steps.length > 0 && (
                                        <div className="bg-orange-500/20 rounded-xl p-4 sm:p-6 border border-orange-400/30 mb-4 sm:mb-6">
                                            <h3 className="text-xl sm:text-3xl font-bold text-orange-100 mb-4 sm:mb-6">Steps</h3>
                                            <div className="space-y-4 sm:space-y-5">
                                                {slides[currentSlide].data.steps.map((step: any, idx: number) => (
                                                    <div key={idx} className="flex items-start gap-3 sm:gap-4">
                                                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-xl">
                                                            {step.id || idx + 1}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-lg sm:text-2xl font-bold text-orange-100 mb-1 sm:mb-2">{step.title}</h4>
                                                            <p className="text-sm sm:text-lg text-orange-200 mb-1 sm:mb-2 leading-relaxed">{step.instruction}</p>
                                                            {step.action && (
                                                                <p className="text-xs sm:text-base text-orange-300">
                                                                    <strong>Action:</strong> {step.action}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Deliverable (for activities) */}
                                    {slides[currentSlide].data.deliverable && (
                                        <div className="bg-green-500/20 border-l-4 sm:border-l-8 border-green-400 p-4 sm:p-6 rounded-r-xl">
                                            <p className="text-base sm:text-xl font-semibold text-green-100 mb-1 sm:mb-2">Deliverable:</p>
                                            <p className="text-sm sm:text-lg text-green-200 leading-relaxed">{slides[currentSlide].data.deliverable}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Patent Type Slide */}
                            {slides[currentSlide]?.type === 'patent-type' && (
                                <div className="space-y-4 sm:space-y-6 w-full py-4 sm:py-8">
                                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 text-center px-2">
                                        {slides[currentSlide].data.type}
                                    </h2>
                                    <div className="bg-indigo-500/20 rounded-xl p-6 sm:p-8 border border-indigo-400/30">
                                        <p className="text-base sm:text-2xl text-indigo-100 mb-4 sm:mb-6 leading-relaxed">
                                            {slides[currentSlide].data.description}
                                        </p>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="bg-indigo-600/20 rounded-lg p-4 sm:p-6">
                                                <p className="text-base sm:text-xl text-indigo-100">
                                                    <strong className="text-indigo-50">Protects:</strong> {slides[currentSlide].data.protects}
                                                </p>
                                            </div>
                                            <div className="bg-indigo-600/20 rounded-lg p-4 sm:p-6">
                                                <p className="text-base sm:text-xl text-indigo-100">
                                                    <strong className="text-indigo-50">Duration:</strong> {slides[currentSlide].data.duration}
                                                </p>
                                            </div>
                                            <div className="bg-indigo-600/20 rounded-lg p-4 sm:p-6">
                                                <p className="text-base sm:text-xl text-indigo-100">
                                                    <strong className="text-indigo-50">Cost:</strong> {slides[currentSlide].data.cost}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* AI Prompt Slide */}
                            {slides[currentSlide]?.type === 'ai-prompt' && (
                                <div className="space-y-4 sm:space-y-6 w-full py-2 sm:py-4 max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-280px)] overflow-y-auto pr-2 sm:pr-4">
                                    <div className="sticky top-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pb-3 sm:pb-4 z-10">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-full text-xs sm:text-base font-semibold">
                                                Stage {slides[currentSlide].data.stage}
                                            </span>
                                            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-500/30 text-purple-100 rounded-full text-xs sm:text-base font-semibold">
                                                {slides[currentSlide].data.phase}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-5xl font-bold text-white mb-2 px-2">
                                            {slides[currentSlide].data.stageName}
                                        </h2>
                                        {slides[currentSlide].data.subStage && (
                                            <p className="text-base sm:text-2xl text-white/80 italic px-2">
                                                {slides[currentSlide].data.subStage}
                                            </p>
                                        )}
                                    </div>

                                    {/* AI Prompt */}
                                    <div className="bg-indigo-500/20 rounded-xl p-4 sm:p-6 border border-indigo-400/30 mb-4 sm:mb-6">
                                        <h3 className="text-xl sm:text-3xl font-bold text-indigo-100 mb-3 sm:mb-4 flex items-center gap-2">
                                            🤖 AI Prompt
                                        </h3>
                                        <pre className="text-xs sm:text-lg text-indigo-100 whitespace-pre-wrap font-mono bg-indigo-900/30 p-3 sm:p-4 rounded-lg leading-relaxed">
                                            {slides[currentSlide].data.prompt}
                                        </pre>
                                    </div>

                                    {/* Human + AI Performance */}
                                    <div className="bg-purple-500/20 rounded-xl p-4 sm:p-6 border border-purple-400/30 mb-4 sm:mb-6">
                                        <h3 className="text-xl sm:text-3xl font-bold text-purple-100 mb-3 sm:mb-4 flex items-center gap-2">
                                            🚀 Human + AI Performance
                                        </h3>
                                        <p className="text-sm sm:text-xl text-purple-100 leading-relaxed">
                                            {slides[currentSlide].data.humanAIPerformance}
                                        </p>
                                    </div>

                                    {/* Role of Human */}
                                    <div className="bg-green-500/20 rounded-xl p-4 sm:p-6 border border-green-400/30 mb-4 sm:mb-6">
                                        <h3 className="text-xl sm:text-3xl font-bold text-green-100 mb-3 sm:mb-4 flex items-center gap-2">
                                            👤 Role of Human
                                        </h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {slides[currentSlide].data.roleOfHuman.slice(0, 4).map((role: string, idx: number) => (
                                                <li key={idx} className="text-sm sm:text-xl text-green-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                    <span className="text-green-300 text-base sm:text-2xl flex-shrink-0">→</span>
                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Role of AI */}
                                    <div className="bg-blue-500/20 rounded-xl p-4 sm:p-6 border border-blue-400/30 mb-4 sm:mb-6">
                                        <h3 className="text-xl sm:text-3xl font-bold text-blue-100 mb-3 sm:mb-4 flex items-center gap-2">
                                            🤖 Role of AI
                                        </h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {slides[currentSlide].data.roleOfAI.slice(0, 4).map((role: string, idx: number) => (
                                                <li key={idx} className="text-sm sm:text-xl text-blue-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                    <span className="text-blue-300 text-base sm:text-2xl flex-shrink-0">→</span>
                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Ethical Considerations */}
                                    <div className="bg-yellow-500/20 rounded-xl p-4 sm:p-6 border border-yellow-400/30">
                                        <h3 className="text-xl sm:text-3xl font-bold text-yellow-100 mb-3 sm:mb-4 flex items-center gap-2">
                                            ⚖️ Ethical Considerations
                                        </h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {slides[currentSlide].data.ethicalConsiderations.map((consideration: string, idx: number) => (
                                                <li key={idx} className="text-sm sm:text-xl text-yellow-100 flex items-start gap-2 sm:gap-3 leading-relaxed">
                                                    <span className="text-yellow-300 text-base sm:text-2xl flex-shrink-0">⚠</span>
                                                    <span>{consideration}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Templates Slide */}
                            {slides[currentSlide]?.type === 'templates' && (
                                <div className="space-y-4 sm:space-y-6 w-full py-2 sm:py-4 max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-280px)] overflow-y-auto pr-2 sm:pr-4">
                                    <h2 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 sticky top-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pb-3 sm:pb-4 z-10 px-2">
                                        {slides[currentSlide].category.charAt(0).toUpperCase() + slides[currentSlide].category.slice(1)} Templates
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                        {slides[currentSlide].templates.map((template: any, idx: number) => (
                                            <div key={idx} className="bg-green-500/20 rounded-xl p-4 sm:p-6 border border-green-400/30">
                                                <div className="flex items-start gap-3 sm:gap-4">
                                                    <div className="text-3xl sm:text-5xl">{template.icon}</div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl sm:text-3xl font-bold text-green-100 mb-2 sm:mb-3">{template.title}</h3>
                                                        <p className="text-base sm:text-xl text-green-200 mb-3 sm:mb-4 leading-relaxed">{template.description}</p>
                                                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600/30 text-green-100 rounded-lg text-sm sm:text-lg font-semibold">
                                                                {template.type.toUpperCase()}
                                                            </span>
                                                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 text-white rounded-lg text-sm sm:text-lg">
                                                                {template.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="bg-black/30 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-t border-white/10 flex-shrink-0">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            <span className="text-sm sm:text-xl text-white font-semibold hidden sm:inline">Previous</span>
                            <span className="text-sm text-white font-semibold sm:hidden">Prev</span>
                        </button>

                        <div className="text-center hidden sm:block">
                            <p className="text-white/70 text-sm sm:text-base mb-0.5 sm:mb-1">Navigation</p>
                            <p className="text-white/50 text-xs sm:text-sm">← → Arrow Keys | Space | ESC to Exit</p>
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === totalSlides - 1}
                            className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors"
                        >
                            <span className="text-sm sm:text-xl text-white font-semibold">Next</span>
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </button>
                    </div>
                </div>
            )}

            {/* Normal Mode */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/resources"
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl">{resource.icon}</span>
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900">{resource.title}</h1>
                                        <p className="text-sm text-gray-600">{resource.file}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={togglePresentationMode}
                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                                >
                                    <Maximize2 className="w-4 h-4" />
                                    Present
                                </button>
                                {resource.downloadable && (
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                )}
                                {resource.stage && (
                                    <Link
                                        href={`/journey/${resource.stage}`}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Go to Stage {resource.stage}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Description */}
                    <div className={`bg-gradient-to-r ${getCategoryColor()} text-white rounded-xl p-8 mb-8`}>
                        <h2 className="text-3xl font-bold mb-4">About This Resource</h2>
                        <p className="text-lg text-white/90 mb-6">{resource.description}</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {resource.category.toUpperCase()}
                            </span>
                            {resource.downloadable && (
                                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                    Downloadable
                                </span>
                            )}
                            {resource.interactive && (
                                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                    Interactive
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            Key Features
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {resource.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comprehensive Content Display */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Resource Content</h2>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                            <p className="text-blue-900 font-medium">
                                This resource contains comprehensive, detailed content to guide you through every aspect.
                                All components include examples, tips, common mistakes, and step-by-step instructions.
                            </p>
                        </div>

                        {/* Render content based on type */}
                        {content.data && Array.isArray(content.data) && content.data.map((item: any, idx: number) => (
                            <div key={idx} className="mb-8 pb-8 border-b border-gray-200 last:border-0">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {item.title || item.reason || item.commentType || item.type || `Item ${idx + 1}`}
                                </h3>

                                {item.description && (
                                    <p className="text-gray-700 mb-4">{item.description}</p>
                                )}

                                {item.purpose && (
                                    <p className="text-blue-600 mb-4"><strong>Purpose:</strong> {item.purpose}</p>
                                )}

                                {item.wordCount && (
                                    <p className="text-gray-600 mb-4"><strong>Word Count:</strong> {item.wordCount}</p>
                                )}

                                {/* Good Example */}
                                {item.goodExample && (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4 rounded-r-lg">
                                        <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            {item.goodExample.title}
                                        </h4>
                                        <p className="text-sm text-green-800 mb-2 whitespace-pre-wrap">{item.goodExample.content}</p>
                                        <p className="text-xs text-green-700 italic"><strong>Why:</strong> {item.goodExample.why}</p>
                                    </div>
                                )}

                                {/* Bad Example */}
                                {item.badExample && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4 rounded-r-lg">
                                        <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                            <XCircle className="w-5 h-5" />
                                            {item.badExample.title}
                                        </h4>
                                        <p className="text-sm text-red-800 mb-2 whitespace-pre-wrap">{item.badExample.content}</p>
                                        <p className="text-xs text-red-700 italic"><strong>Why:</strong> {item.badExample.why}</p>
                                    </div>
                                )}

                                {/* Tips */}
                                {item.tips && item.tips.length > 0 && (
                                    <div className="bg-blue-50 rounded-lg p-5 mb-4">
                                        <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                                            <Lightbulb className="w-5 h-5" />
                                            Tips:
                                        </h4>
                                        <ul className="space-y-2">
                                            {item.tips.map((tip: string, tipIdx: number) => (
                                                <li key={tipIdx} className="text-sm text-blue-800 flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Common Mistakes */}
                                {item.commonMistakes && item.commonMistakes.length > 0 && (
                                    <div className="bg-orange-50 rounded-lg p-5 mb-4">
                                        <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                                            <AlertCircle className="w-5 h-5" />
                                            Common Mistakes:
                                        </h4>
                                        <ul className="space-y-2">
                                            {item.commonMistakes.map((mistake: string, mIdx: number) => (
                                                <li key={mIdx} className="text-sm text-orange-800 flex items-start gap-2">
                                                    <span className="text-orange-600">✗</span>
                                                    <span>{mistake}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Structure */}
                                {item.structure && item.structure.length > 0 && (
                                    <div className="bg-gray-50 rounded-lg p-5 mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-3">Structure:</h4>
                                        <ul className="space-y-1">
                                            {item.structure.map((struct: string, sIdx: number) => (
                                                <li key={sIdx} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="text-blue-600">▸</span>
                                                    <span>{struct}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* How to Avoid (for desk rejection) */}
                                {item.howToAvoid && item.howToAvoid.length > 0 && (
                                    <div className="bg-blue-50 rounded-lg p-5 mb-4">
                                        <h4 className="font-semibold text-blue-900 mb-3">How to Avoid:</h4>
                                        <ul className="space-y-2">
                                            {item.howToAvoid.map((avoid: string, aIdx: number) => (
                                                <li key={aIdx} className="text-sm text-blue-800 flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span>{avoid}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* How to Respond (for reviewer comments) */}
                                {item.howToRespond && item.howToRespond.length > 0 && (
                                    <div className="bg-purple-50 rounded-lg p-5 mb-4">
                                        <h4 className="font-semibold text-purple-900 mb-3">How to Respond:</h4>
                                        <ul className="space-y-2">
                                            {item.howToRespond.map((respond: string, rIdx: number) => (
                                                <li key={rIdx} className="text-sm text-purple-800 flex items-start gap-2">
                                                    <span className="text-purple-600">→</span>
                                                    <span>{respond}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Examples (for reviewer response) */}
                                {item.examples && (
                                    <div className="space-y-4 mb-4">
                                        {item.examples.reviewerComment && (
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-sm font-semibold text-gray-900 mb-2">Reviewer Comment:</p>
                                                <p className="text-sm text-gray-700 italic">"{item.examples.reviewerComment}"</p>
                                            </div>
                                        )}
                                        {item.examples.badResponse && (
                                            <div className="bg-red-50 rounded-lg p-4">
                                                <p className="text-sm font-semibold text-red-900 mb-2">❌ Bad Response:</p>
                                                <p className="text-sm text-red-800">"{item.examples.badResponse}"</p>
                                            </div>
                                        )}
                                        {item.examples.goodResponse && (
                                            <div className="bg-green-50 rounded-lg p-4">
                                                <p className="text-sm font-semibold text-green-900 mb-2">✅ Good Response:</p>
                                                <p className="text-sm text-green-800 mb-2">"{item.examples.goodResponse}"</p>
                                                {item.examples.why && (
                                                    <p className="text-xs text-green-700 italic"><strong>Why:</strong> {item.examples.why}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Steps (for activities) */}
                                {item.steps && item.steps.length > 0 && (
                                    <div className="bg-orange-50 rounded-lg p-6 mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-4">Steps:</h4>
                                        <div className="space-y-4">
                                            {item.steps.map((step: any, sIdx: number) => (
                                                <div key={sIdx} className="flex items-start gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                                                        {step.id || sIdx + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-gray-900 mb-1">{step.title}</h5>
                                                        <p className="text-sm text-gray-700 mb-2">{step.instruction}</p>
                                                        {step.action && (
                                                            <p className="text-sm text-gray-600"><strong>Action:</strong> {step.action}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Deliverable (for activities) */}
                                {item.deliverable && (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                        <p className="text-sm font-semibold text-green-900 mb-1">Deliverable:</p>
                                        <p className="text-sm text-green-800">{item.deliverable}</p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Templates Display */}
                        {content.type === 'templates' && content.data && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {content.data.map((template: any) => (
                                    <div key={template.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
                                        <div className="text-4xl mb-3">{template.icon}</div>
                                        <h3 className="font-bold text-gray-900 mb-2">{template.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                                                {template.type.toUpperCase()}
                                            </span>
                                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                                {template.category}
                                            </span>
                                        </div>
                                        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm">
                                            <Download className="w-4 h-4" />
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Patent Types Display */}
                        {content.type === 'patent' && content.types && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Patent Types</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {content.types.map((patentType: any, idx: number) => (
                                        <div key={idx} className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                                            <h4 className="text-xl font-bold text-indigo-900 mb-2">{patentType.type}</h4>
                                            <p className="text-sm text-gray-700 mb-4">{patentType.description}</p>
                                            <div className="space-y-2">
                                                <p className="text-sm"><strong>Protects:</strong> {patentType.protects}</p>
                                                <p className="text-sm"><strong>Duration:</strong> {patentType.duration}</p>
                                                <p className="text-sm"><strong>Cost:</strong> {patentType.cost}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* AI Research Prompts Display - Enhanced */}
                        {content.type === 'ai-prompts' && content.data && (
                            <div className="space-y-12">
                                {/* Page Header */}
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                                        <Sparkles className="w-4 h-4" />
                                        15 Stage-Specific AI Prompts
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Ethical Use of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI in Research</span>
                                    </h2>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                        Domain-specific prompts with guidelines, examples, and ethical considerations for every research stage
                                    </p>
                                </div>

                                {/* Prompts Grid */}
                                {content.data.map((prompt: any, idx: number) => (
                                    <div
                                        key={idx}
                                        id={`stage-${prompt.stage}`}
                                        className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-indigo-300"
                                    >
                                        {/* Header with Gradient */}
                                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 md:p-8">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold border border-white/30">
                                                    Stage {prompt.stage}
                                                </span>
                                                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                                                    {prompt.phase}
                                                </span>
                                                <div className="ml-auto flex items-center gap-2">
                                                    <span className="text-white/80 text-sm">#{prompt.id}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{prompt.stageName}</h3>
                                            {prompt.subStage && (
                                                <p className="text-xl text-white/90 italic">{prompt.subStage}</p>
                                            )}
                                        </div>

                                        <div className="p-6 md:p-8 space-y-6">
                                            {/* AI Prompt Section - Enhanced */}
                                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                                    <h4 className="text-2xl font-bold text-indigo-900 flex items-center gap-3">
                                                        <span className="text-3xl">🤖</span>
                                                        AI Prompt Template
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <button
                                                            onClick={() => copyToClipboard(editingPrompts[prompt.id] || prompt.prompt, prompt.id)}
                                                            className="px-4 py-2 bg-white hover:bg-indigo-50 rounded-lg transition-all flex items-center gap-2 text-sm font-medium shadow-sm border border-indigo-200 hover:border-indigo-300 hover:scale-105 transform"
                                                            title="Copy to clipboard"
                                                        >
                                                            {copiedStates[prompt.id] ? (
                                                                <>
                                                                    <Check className="w-4 h-4 text-green-600" />
                                                                    <span className="text-green-600 font-semibold">Copied!</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Copy className="w-4 h-4 text-indigo-600" />
                                                                    <span className="text-indigo-600">Copy</span>
                                                                </>
                                                            )}
                                                        </button>
                                                        {!isEditing[prompt.id] ? (
                                                            <button
                                                                onClick={() => startEditing(prompt.id, prompt.prompt)}
                                                                className="px-4 py-2 bg-white hover:bg-blue-50 rounded-lg transition-all flex items-center gap-2 text-sm font-medium shadow-sm border border-blue-200 hover:border-blue-300 hover:scale-105 transform"
                                                                title="Edit prompt"
                                                            >
                                                                <Edit3 className="w-4 h-4 text-blue-600" />
                                                                <span className="text-blue-600">Edit</span>
                                                            </button>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    onClick={() => saveEdit(prompt.id)}
                                                                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all flex items-center gap-2 text-sm font-medium shadow-sm hover:scale-105 transform"
                                                                    title="Save changes"
                                                                >
                                                                    <Save className="w-4 h-4" />
                                                                    <span>Save</span>
                                                                </button>
                                                                <button
                                                                    onClick={() => resetPrompt(prompt.id, prompt.prompt)}
                                                                    className="px-4 py-2 bg-white hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2 text-sm font-medium shadow-sm border border-gray-200 hover:border-gray-300"
                                                                    title="Reset to original"
                                                                >
                                                                    <RotateCcw className="w-4 h-4 text-gray-600" />
                                                                    <span className="text-gray-600">Reset</span>
                                                                </button>
                                                            </>
                                                        )}
                                                        <button
                                                            onClick={() => downloadPrompt(prompt)}
                                                            className="px-4 py-2 bg-white hover:bg-purple-50 rounded-lg transition-all flex items-center gap-2 text-sm font-medium shadow-sm border border-purple-200 hover:border-purple-300 hover:scale-105 transform"
                                                            title="Download as markdown"
                                                        >
                                                            <Download className="w-4 h-4 text-purple-600" />
                                                            <span className="text-purple-600">Download</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {!isEditing[prompt.id] ? (
                                                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono bg-white p-6 rounded-xl border-2 border-indigo-100 overflow-x-auto leading-relaxed shadow-inner">
                                                        {editingPrompts[prompt.id] || prompt.prompt}
                                                    </pre>
                                                ) : (
                                                    <textarea
                                                        value={editingPrompts[prompt.id] || prompt.prompt}
                                                        onChange={(e) => setEditingPrompts({ ...editingPrompts, [prompt.id]: e.target.value })}
                                                        className="w-full text-sm text-gray-800 font-mono bg-white p-6 rounded-xl border-2 border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none min-h-[250px] shadow-inner"
                                                        placeholder="Edit your prompt here..."
                                                    />
                                                )}
                                            </div>

                                            {/* Two Column Layout for Roles */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* Role of Human */}
                                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-shadow">
                                                    <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                                                        <span className="text-2xl">👤</span>
                                                        Role of Human
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {prompt.roleOfHuman.map((role: string, rIdx: number) => (
                                                            <li key={rIdx} className="text-sm text-green-800 flex items-start gap-3 leading-relaxed">
                                                                <span className="text-green-600 mt-0.5 font-bold text-lg flex-shrink-0">→</span>
                                                                <span>{role}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Role of AI */}
                                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-shadow">
                                                    <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                                                        <span className="text-2xl">🤖</span>
                                                        Role of AI
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {prompt.roleOfAI.map((role: string, rIdx: number) => (
                                                            <li key={rIdx} className="text-sm text-blue-800 flex items-start gap-3 leading-relaxed">
                                                                <span className="text-blue-600 mt-0.5 font-bold text-lg flex-shrink-0">→</span>
                                                                <span>{role}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Human + AI Performance - Highlighted */}
                                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-lg">
                                                <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                    <span className="text-3xl">🚀</span>
                                                    Human + AI Performance
                                                </h4>
                                                <p className="text-base leading-relaxed text-white/95">
                                                    {prompt.humanAIPerformance}
                                                </p>
                                            </div>

                                            {/* Usage Guidelines */}
                                            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                                                    <span className="text-2xl">📋</span>
                                                    Usage Guidelines
                                                </h4>
                                                <ul className="space-y-3">
                                                    {prompt.guidelines.map((guideline: string, gIdx: number) => (
                                                        <li key={gIdx} className="text-sm text-blue-800 flex items-start gap-3 leading-relaxed">
                                                            <span className="text-blue-600 mt-0.5 font-bold text-lg flex-shrink-0">✓</span>
                                                            <span>{guideline}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Sample Input/Output - Collapsible */}
                                            <details className="group/details bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 overflow-hidden">
                                                <summary className="cursor-pointer p-6 hover:bg-gray-50 transition-colors flex items-center justify-between">
                                                    <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                                        <span className="text-2xl">💡</span>
                                                        Sample Input & Output
                                                    </h4>
                                                    <span className="text-gray-400 group-open/details:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="p-6 pt-0 space-y-4">
                                                    <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                                                        <h5 className="text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                                                            📝 Sample Input
                                                        </h5>
                                                        <pre className="text-sm text-green-800 whitespace-pre-wrap leading-relaxed">
                                                            {prompt.sampleInput}
                                                        </pre>
                                                    </div>
                                                    <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                                                        <h5 className="text-base font-bold text-purple-900 mb-3 flex items-center gap-2">
                                                            💡 Sample Output
                                                        </h5>
                                                        <pre className="text-sm text-purple-800 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
                                                            {prompt.sampleOutput}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </details>

                                            {/* Ethical Considerations & Limitations */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                                                    <h4 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-3">
                                                        <span className="text-2xl">⚖️</span>
                                                        Ethical Considerations
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {prompt.ethicalConsiderations.map((consideration: string, cIdx: number) => (
                                                            <li key={cIdx} className="text-sm text-yellow-800 flex items-start gap-3 leading-relaxed">
                                                                <span className="text-yellow-600 mt-0.5 font-bold text-lg flex-shrink-0">⚠</span>
                                                                <span>{consideration}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                                                    <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-3">
                                                        <span className="text-2xl">🚫</span>
                                                        Limitations
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {prompt.limitations.map((limitation: string, lIdx: number) => (
                                                            <li key={lIdx} className="text-sm text-red-800 flex items-start gap-3 leading-relaxed">
                                                                <span className="text-red-600 mt-0.5 font-bold text-lg flex-shrink-0">!</span>
                                                                <span>{limitation}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* No content message */}
                        {!content.data && content.type === 'info' && (
                            <div className="text-center py-12">
                                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Content Coming Soon</h3>
                                <p className="text-gray-600">Detailed content for this resource is being prepared.</p>
                            </div>
                        )}
                    </div>
                </div >
            </div >
        </>
    )
}
