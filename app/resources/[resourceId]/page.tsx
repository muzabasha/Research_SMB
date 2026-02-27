import Link from 'next/link'
import { ArrowLeft, Download, CheckCircle, ExternalLink, Play, BookOpen } from 'lucide-react'
import { getResourceById, RESOURCE_LIBRARY } from '@/lib/resource-library'

// Import guide data
import { PAPER_COMPONENTS } from '@/lib/paper-writing-guide'
import { DESK_REJECTION_REASONS, SUBMISSION_TIMELINE } from '@/lib/desk-rejection-guide'
import { REVIEWER_COMMENT_TYPES, RESPONSE_STRATEGIES } from '@/lib/reviewer-response-guide'
import { PROPOSAL_COMPONENTS } from '@/lib/proposal-drafting-guide'
import { INDUSTRY_PROPOSAL_COMPONENTS } from '@/lib/industry-proposal-guide'
import { PATENT_TYPES, PATENT_FILING_PROCESS } from '@/lib/patent-drafting-guide'
import { getAllTemplates } from '@/lib/templates-data'
import { getAllActivities } from '@/lib/interactive-activities'

// Generate static params for all resources
export function generateStaticParams() {
    return RESOURCE_LIBRARY.map((resource) => ({
        resourceId: resource.id,
    }))
}

export default function ResourceDetailPage({ params }: { params: { resourceId: string } }) {
    const resourceId = params.resourceId
    const resource = getResourceById(resourceId)

    if (!resource) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Resource Not Found</h1>
                    <Link href="/resources" className="text-blue-600 hover:underline">
                        ← Back to Resources
                    </Link>
                </div>
            </div>
        )
    }

    const getCategoryColor = () => {
        switch (resource.category) {
            case 'guide': return 'from-blue-500 to-blue-600'
            case 'template': return 'from-green-500 to-green-600'
            case 'tool': return 'from-purple-500 to-purple-600'
            case 'activity': return 'from-orange-500 to-orange-600'
            default: return 'from-gray-500 to-gray-600'
        }
    }

    // Get actual content based on resource ID
    const getResourceContent = () => {
        switch (resourceId) {
            case 'paper-writing-guide':
                return { type: 'components', data: PAPER_COMPONENTS }
            case 'desk-rejection-guide':
                return { type: 'reasons', data: DESK_REJECTION_REASONS, timeline: SUBMISSION_TIMELINE }
            case 'reviewer-response-guide':
                return { type: 'comments', data: REVIEWER_COMMENT_TYPES, strategies: RESPONSE_STRATEGIES }
            case 'proposal-drafting-guide':
                return { type: 'components', data: PROPOSAL_COMPONENTS }
            case 'industry-proposal-guide':
                return { type: 'components', data: INDUSTRY_PROPOSAL_COMPONENTS }
            case 'patent-drafting-guide':
                return { type: 'patent', types: PATENT_TYPES, process: PATENT_FILING_PROCESS }
            case 'templates-library':
                return { type: 'templates', data: getAllTemplates() }
            case 'interactive-activities':
                return { type: 'activities', data: getAllActivities() }
            default:
                return { type: 'info', data: null }
        }
    }

    const content = getResourceContent()

    return (
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

                {/* Content Display */}
                {content.type === 'components' && content.data && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Components</h2>
                        {content.data.map((component: any, idx: number) => (
                            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                                <p className="text-gray-600 mb-4">{component.description}</p>

                                {component.goodExample && (
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                                        <h4 className="font-semibold text-green-900 mb-2">{component.goodExample.title}</h4>
                                        <p className="text-sm text-green-800 mb-2">{component.goodExample.content}</p>
                                        <p className="text-xs text-green-700 italic">{component.goodExample.why}</p>
                                    </div>
                                )}

                                {component.badExample && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                                        <h4 className="font-semibold text-red-900 mb-2">{component.badExample.title}</h4>
                                        <p className="text-sm text-red-800 mb-2">{component.badExample.content}</p>
                                        <p className="text-xs text-red-700 italic">{component.badExample.why}</p>
                                    </div>
                                )}

                                {component.tips && component.tips.length > 0 && (
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-blue-900 mb-2">Tips:</h4>
                                        <ul className="space-y-1">
                                            {component.tips.map((tip: string, tipIdx: number) => (
                                                <li key={tipIdx} className="text-sm text-blue-800 flex items-start gap-2">
                                                    <span className="text-blue-600">•</span>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {content.type === 'templates' && content.data && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Templates</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {content.data.map((template: any) => (
                                <div key={template.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                                    <div className="text-3xl mb-3">{template.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-2">{template.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                                    <div className="flex items-center gap-2 mb-3">
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
                    </div>
                )}

                {content.type === 'activities' && content.data && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Activities</h2>
                        {content.data.map((activity: any) => (
                            <div key={activity.id} className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                                <p className="text-gray-600 mb-4">{activity.description}</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                        {activity.type}
                                    </span>
                                    <span className="text-gray-600">⏱️ {activity.duration}</span>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-6 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Steps:</h4>
                                    <div className="space-y-3">
                                        {activity.steps.map((step: any, idx: number) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-gray-900">{step.title}</h5>
                                                    <p className="text-sm text-gray-600">{step.instruction}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                                    <h4 className="font-semibold text-green-900 mb-1">Deliverable:</h4>
                                    <p className="text-green-800">{activity.deliverable}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {content.type === 'info' && (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Content Coming Soon</h3>
                        <p className="text-gray-600 mb-6">
                            Detailed content for this resource is being prepared. Check back soon!
                        </p>
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Resources
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
