'use client'

import { useState } from 'react'
import { Download, BookOpen, CheckSquare, Play, Lightbulb, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { getStageResources } from '@/lib/journey-guides-integration'

interface StageResourcesProps {
    stageId: number
}

export default function StageResources({ stageId }: StageResourcesProps) {
    const resources = getStageResources(stageId)
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        guides: true,
        templates: true,
        activities: true,
        exercises: true
    })

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    if (resources.totalResources === 0) {
        return null
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    Stage Resources & Tools
                </h2>
                <p className="text-gray-700 mb-4">
                    Access {resources.totalResources} practical resources to complete this stage successfully
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {resources.hasGuides && (
                        <div className="bg-white rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-blue-600">{resources.guides.length}</div>
                            <div className="text-sm text-gray-600">Guides</div>
                        </div>
                    )}
                    {resources.hasTemplates && (
                        <div className="bg-white rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-green-600">{resources.templates.length}</div>
                            <div className="text-sm text-gray-600">Templates</div>
                        </div>
                    )}
                    {resources.hasActivities && (
                        <div className="bg-white rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-purple-600">{resources.activities.length}</div>
                            <div className="text-sm text-gray-600">Activities</div>
                        </div>
                    )}
                    {resources.hasExercises && (
                        <div className="bg-white rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-orange-600">{resources.exercises.length}</div>
                            <div className="text-sm text-gray-600">Exercises</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Guides Section */}
            {resources.hasGuides && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleSection('guides')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-5 h-5" />
                            <span className="font-semibold text-lg">Comprehensive Guides ({resources.guides.length})</span>
                        </div>
                        {expandedSections.guides ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    {expandedSections.guides && (
                        <div className="p-6 space-y-4">
                            {resources.guides.map((guide, index) => (
                                <div key={guide.id} className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4 hover:bg-blue-100 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 mb-1">{guide.title}</h3>
                                            <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded">
                                                    {guide.type}
                                                </span>
                                                <span>Source: {guide.source}</span>
                                            </div>
                                        </div>
                                        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
                                            <ExternalLink className="w-4 h-4" />
                                            View Guide
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Templates Section */}
            {resources.hasTemplates && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleSection('templates')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Download className="w-5 h-5" />
                            <span className="font-semibold text-lg">Downloadable Templates ({resources.templates.length})</span>
                        </div>
                        {expandedSections.templates ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    {expandedSections.templates && (
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                {resources.templates.map((template) => (
                                    <div key={template.id} className="border-2 border-green-200 rounded-lg p-4 hover:border-green-400 hover:shadow-md transition-all">
                                        <div className="flex items-start gap-3">
                                            <div className="text-3xl">{template.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 mb-1">{template.title}</h3>
                                                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                                                        {template.type.toUpperCase()}
                                                    </span>
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                                        {template.category}
                                                    </span>
                                                </div>
                                                <button className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                                    <Download className="w-4 h-4" />
                                                    Download {template.type.toUpperCase()}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Activities Section */}
            {resources.hasActivities && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleSection('activities')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Play className="w-5 h-5" />
                            <span className="font-semibold text-lg">Interactive Activities ({resources.activities.length})</span>
                        </div>
                        {expandedSections.activities ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    {expandedSections.activities && (
                        <div className="p-6 space-y-4">
                            {resources.activities.map((activity) => (
                                <div key={activity.id} className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                                            <p className="text-gray-600 mb-3">{activity.description}</p>
                                            <div className="flex items-center gap-4 text-sm">
                                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                                                    {activity.type}
                                                </span>
                                                <span className="text-gray-600">⏱️ {activity.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-purple-50 rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-3">Activity Steps:</h4>
                                        <div className="space-y-3">
                                            {activity.steps.map((step, idx) => (
                                                <div key={step.id} className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                        {idx + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-semibold text-gray-900 mb-1">{step.title}</h5>
                                                        <p className="text-sm text-gray-600 mb-2">{step.instruction}</p>
                                                        {step.checkpoints && step.checkpoints.length > 0 && (
                                                            <div className="mt-2 space-y-1">
                                                                {step.checkpoints.map((checkpoint, cpIdx) => (
                                                                    <div key={cpIdx} className="flex items-start gap-2 text-xs text-gray-600">
                                                                        <CheckSquare className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                                                                        <span>{checkpoint}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                                        <h4 className="font-semibold text-green-900 mb-1 flex items-center gap-2">
                                            <CheckSquare className="w-4 h-4" />
                                            Deliverable:
                                        </h4>
                                        <p className="text-green-800">{activity.deliverable}</p>
                                    </div>

                                    {activity.tips && activity.tips.length > 0 && (
                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                                                <Lightbulb className="w-4 h-4" />
                                                Pro Tips:
                                            </h4>
                                            <ul className="space-y-1">
                                                {activity.tips.map((tip, idx) => (
                                                    <li key={idx} className="text-sm text-yellow-800 flex items-start gap-2">
                                                        <span className="text-yellow-600">•</span>
                                                        <span>{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <button className="mt-4 w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 font-semibold">
                                        <Play className="w-5 h-5" />
                                        Start This Activity
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Practical Exercises Section */}
            {resources.hasExercises && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleSection('exercises')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Lightbulb className="w-5 h-5" />
                            <span className="font-semibold text-lg">Practical Exercises ({resources.exercises.length})</span>
                        </div>
                        {expandedSections.exercises ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    {expandedSections.exercises && (
                        <div className="p-6 space-y-4">
                            {resources.exercises.map((exercise) => (
                                <div key={exercise.id} className="border-2 border-orange-200 rounded-lg p-5 hover:border-orange-400 hover:shadow-md transition-all">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{exercise.title}</h3>
                                    <p className="text-gray-600 mb-3">{exercise.description}</p>
                                    <div className="text-sm text-gray-600 mb-4">⏱️ Duration: {exercise.duration}</div>

                                    <div className="bg-orange-50 rounded-lg p-4 mb-3">
                                        <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
                                        <ol className="space-y-2">
                                            {exercise.steps.map((step, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="font-bold text-orange-600">{idx + 1}.</span>
                                                    <span>{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-3">
                                        <span className="font-semibold text-green-900">Deliverable: </span>
                                        <span className="text-green-800">{exercise.deliverable}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
