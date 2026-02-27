'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Download, Play, Wrench } from 'lucide-react'
import { RESOURCE_LIBRARY, RESOURCE_CATEGORIES } from '@/lib/resource-library'

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
                            <p className="text-gray-600 mt-1">Explore all guides, templates, tools & activities</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Categories */}
                {RESOURCE_CATEGORIES.filter(cat => cat.id !== 'all').map(category => {
                    const resources = RESOURCE_LIBRARY.filter(r => r.category === category.id)
                    if (resources.length === 0) return null

                    const getCategoryColor = () => {
                        switch (category.id) {
                            case 'guide': return 'from-blue-500 to-blue-600'
                            case 'template': return 'from-green-500 to-green-600'
                            case 'tool': return 'from-purple-500 to-purple-600'
                            case 'activity': return 'from-orange-500 to-orange-600'
                            default: return 'from-gray-500 to-gray-600'
                        }
                    }

                    const getCategoryIcon = () => {
                        switch (category.id) {
                            case 'guide': return <BookOpen className="w-6 h-6" />
                            case 'template': return <Download className="w-6 h-6" />
                            case 'tool': return <Wrench className="w-6 h-6" />
                            case 'activity': return <Play className="w-6 h-6" />
                            default: return null
                        }
                    }

                    return (
                        <div key={category.id} className="mb-12">
                            <div className={`bg-gradient-to-r ${getCategoryColor()} text-white rounded-xl p-6 mb-6`}>
                                <div className="flex items-center gap-3">
                                    {getCategoryIcon()}
                                    <div>
                                        <h2 className="text-2xl font-bold">{category.name}</h2>
                                        <p className="text-white/90">{resources.length} resources available</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {resources.map(resource => (
                                    <Link
                                        key={resource.id}
                                        href={`/resources/${resource.id}`}
                                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-200 hover:border-blue-400 overflow-hidden group"
                                    >
                                        <div className={`bg-gradient-to-r ${getCategoryColor()} text-white p-4`}>
                                            <div className="text-4xl mb-2">{resource.icon}</div>
                                            <h3 className="font-bold text-lg">{resource.title}</h3>
                                            {resource.stage && (
                                                <div className="text-xs bg-white/20 inline-block px-2 py-1 rounded mt-2">
                                                    Stage {resource.stage}
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                                            <div className="flex items-center gap-2 mb-3">
                                                {resource.downloadable && (
                                                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                                                        Downloadable
                                                    </span>
                                                )}
                                                {resource.interactive && (
                                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                                                        Interactive
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-gray-500">{resource.features.length} features</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
