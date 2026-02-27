'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, CheckCircle, ExternalLink, BookOpen, AlertCircle, Lightbulb, XCircle, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ResourceItem } from '@/lib/resource-library'

interface ResourceDetailClientProps {
    resource: ResourceItem
    content: any
}

export default function ResourceDetailClient({ resource, content }: ResourceDetailClientProps) {
    const [isPresentationMode, setIsPresentationMode] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

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

        // Content slides
        if (content.data && Array.isArray(content.data)) {
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
                    <div className="bg-black/30 backdrop-blur-sm px-8 py-4 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-4">
                            <span className="text-6xl">{resource.icon}</span>
                            <div>
                                <h1 className="text-3xl font-bold text-white">{resource.title}</h1>
                                <p className="text-white/70 text-lg">Presentation Mode</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-white/70 text-xl font-mono">
                                {currentSlide + 1} / {totalSlides}
                            </span>
                            <button
                                onClick={togglePresentationMode}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <Minimize2 className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Slide Content */}
                    <div className="flex-1 flex items-center justify-center p-12 overflow-auto">
                        <div className="w-full max-w-7xl">
                            {slides[currentSlide]?.type === 'title' && (
                                <div className="text-center space-y-8">
                                    <div className="text-9xl mb-8">{slides[currentSlide].icon}</div>
                                    <h1 className="text-7xl font-bold text-white mb-6">
                                        {slides[currentSlide].title}
                                    </h1>
                                    <p className="text-3xl text-white/80 leading-relaxed max-w-5xl mx-auto">
                                        {slides[currentSlide].description}
                                    </p>
                                </div>
                            )}

                            {slides[currentSlide]?.type === 'features' && (
                                <div className="space-y-8">
                                    <h2 className="text-6xl font-bold text-white mb-12 text-center">
                                        {slides[currentSlide].title}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-8">
                                        {slides[currentSlide].features.map((feature: string, idx: number) => (
                                            <div key={idx} className="flex items-start gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                                <CheckCircle className="w-12 h-12 text-green-400 flex-shrink-0 mt-2" />
                                                <span className="text-3xl text-white leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {slides[currentSlide]?.type === 'content' && (
                                <div className="space-y-8">
                                    <h2 className="text-6xl font-bold text-white mb-8">
                                        {slides[currentSlide].data.title ||
                                            slides[currentSlide].data.reason ||
                                            slides[currentSlide].data.commentType ||
                                            slides[currentSlide].data.type ||
                                            'Content'}
                                    </h2>

                                    {slides[currentSlide].data.description && (
                                        <p className="text-3xl text-white/90 leading-relaxed mb-8">
                                            {slides[currentSlide].data.description}
                                        </p>
                                    )}

                                    {slides[currentSlide].data.purpose && (
                                        <div className="bg-blue-500/20 border-l-8 border-blue-400 p-8 rounded-r-2xl mb-8">
                                            <p className="text-3xl text-blue-200">
                                                <strong className="text-blue-100">Purpose:</strong> {slides[currentSlide].data.purpose}
                                            </p>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.goodExample && (
                                        <div className="bg-green-500/20 border-l-8 border-green-400 p-8 rounded-r-2xl mb-8">
                                            <h3 className="text-4xl font-bold text-green-100 mb-4 flex items-center gap-4">
                                                <CheckCircle className="w-10 h-10" />
                                                {slides[currentSlide].data.goodExample.title}
                                            </h3>
                                            <p className="text-2xl text-green-100 mb-4 whitespace-pre-wrap leading-relaxed">
                                                {slides[currentSlide].data.goodExample.content}
                                            </p>
                                            <p className="text-xl text-green-200 italic">
                                                <strong>Why:</strong> {slides[currentSlide].data.goodExample.why}
                                            </p>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.badExample && (
                                        <div className="bg-red-500/20 border-l-8 border-red-400 p-8 rounded-r-2xl mb-8">
                                            <h3 className="text-4xl font-bold text-red-100 mb-4 flex items-center gap-4">
                                                <XCircle className="w-10 h-10" />
                                                {slides[currentSlide].data.badExample.title}
                                            </h3>
                                            <p className="text-2xl text-red-100 mb-4 whitespace-pre-wrap leading-relaxed">
                                                {slides[currentSlide].data.badExample.content}
                                            </p>
                                            <p className="text-xl text-red-200 italic">
                                                <strong>Why:</strong> {slides[currentSlide].data.badExample.why}
                                            </p>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.tips && slides[currentSlide].data.tips.length > 0 && (
                                        <div className="bg-blue-500/20 rounded-2xl p-8 border border-blue-400/30">
                                            <h3 className="text-4xl font-bold text-blue-100 mb-6 flex items-center gap-4">
                                                <Lightbulb className="w-10 h-10" />
                                                Tips
                                            </h3>
                                            <ul className="space-y-4">
                                                {slides[currentSlide].data.tips.slice(0, 4).map((tip: string, idx: number) => (
                                                    <li key={idx} className="text-2xl text-blue-100 flex items-start gap-4 leading-relaxed">
                                                        <span className="text-blue-300 text-3xl">•</span>
                                                        <span>{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {slides[currentSlide].data.commonMistakes && slides[currentSlide].data.commonMistakes.length > 0 && (
                                        <div className="bg-orange-500/20 rounded-2xl p-8 border border-orange-400/30 mt-8">
                                            <h3 className="text-4xl font-bold text-orange-100 mb-6 flex items-center gap-4">
                                                <AlertCircle className="w-10 h-10" />
                                                Common Mistakes
                                            </h3>
                                            <ul className="space-y-4">
                                                {slides[currentSlide].data.commonMistakes.slice(0, 4).map((mistake: string, idx: number) => (
                                                    <li key={idx} className="text-2xl text-orange-100 flex items-start gap-4 leading-relaxed">
                                                        <span className="text-orange-300 text-3xl">✗</span>
                                                        <span>{mistake}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="bg-black/30 backdrop-blur-sm px-8 py-6 flex items-center justify-between border-t border-white/10">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition-colors"
                        >
                            <ChevronLeft className="w-8 h-8 text-white" />
                            <span className="text-2xl text-white font-semibold">Previous</span>
                        </button>

                        <div className="text-center">
                            <p className="text-white/70 text-lg mb-2">Navigation</p>
                            <p className="text-white/50 text-base">← → Arrow Keys | Space | ESC to Exit</p>
                        </div>

                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === totalSlides - 1}
                            className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition-colors"
                        >
                            <span className="text-2xl text-white font-semibold">Next</span>
                            <ChevronRight className="w-8 h-8 text-white" />
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

                        {/* No content message */}
                        {!content.data && content.type === 'info' && (
                            <div className="text-center py-12">
                                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Content Coming Soon</h3>
                                <p className="text-gray-600">Detailed content for this resource is being prepared.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
