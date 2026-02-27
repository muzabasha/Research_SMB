'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Download, Play, ChevronDown, ChevronUp, ExternalLink, Filter, X } from 'lucide-react'
import { RESOURCE_LIBRARY, RESOURCE_CATEGORIES, getResourcesByCategory, searchResources } from '@/lib/resource-library'

export default function ResourceLibrary() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [expandedResource, setExpandedResource] = useState<string | null>(null)

    const filteredResources = searchQuery
        ? searchResources(searchQuery)
        : getResourcesByCategory(selectedCategory)

    const toggleResource = (id: string) => {
        setExpandedResource(expandedResource === id ? null : id)
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'guide': return 'from-blue-500 to-blue-600'
            case 'template': return 'from-green-500 to-green-600'
            case 'tool': return 'from-purple-500 to-purple-600'
            case 'activity': return 'from-orange-500 to-orange-600'
            default: return 'from-gray-500 to-gray-600'
        }
    }

    const getResourceBorderColor = (category: string) => {
        switch (category) {
            case 'guide': return 'border-blue-300 hover:border-blue-500'
            case 'template': return 'border-green-300 hover:border-green-500'
            case 'tool': return 'border-purple-300 hover:border-purple-500'
            case 'activity': return 'border-orange-300 hover:border-orange-500'
            default: return 'border-gray-300 hover:border-gray-500'
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <div className="text-3xl">📚</div>
                    <div className="text-left">
                        <h2 className="text-2xl font-bold">Resource Library</h2>
                        <p className="text-sm text-indigo-100">
                            {RESOURCE_LIBRARY.length} guides, templates, tools & activities
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-lg">
                        <span>📖 {RESOURCE_LIBRARY.filter(r => r.category === 'guide').length} Guides</span>
                        <span>•</span>
                        <span>📄 {RESOURCE_LIBRARY.filter(r => r.category === 'template').length} Templates</span>
                        <span>•</span>
                        <span>🛠️ {RESOURCE_LIBRARY.filter(r => r.category === 'tool').length} Tools</span>
                        <span>•</span>
                        <span>🎯 {RESOURCE_LIBRARY.filter(r => r.category === 'activity').length} Activities</span>
                    </div>
                    {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>
            </button>

            {/* Resource Library Content */}
            {isOpen && (
                <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                    {/* Search and Filter Bar */}
                    <div className="mb-6 space-y-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search resources by name, description, or features..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-gray-900"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="w-5 h-5 text-gray-600" />
                            {RESOURCE_CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setSelectedCategory(cat.id)
                                        setSearchQuery('')
                                    }}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === cat.id
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                        }`}
                                >
                                    <span className="mr-2">{cat.icon}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Results Count */}
                        <div className="text-sm text-gray-600">
                            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
                            {searchQuery && ` for "${searchQuery}"`}
                        </div>
                    </div>

                    {/* Resources Grid */}
                    {filteredResources.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredResources.map(resource => (
                                <div
                                    key={resource.id}
                                    className={`bg-white rounded-lg border-2 ${getResourceBorderColor(resource.category)} transition-all hover:shadow-lg`}
                                >
                                    {/* Resource Header */}
                                    <div className={`bg-gradient-to-r ${getCategoryColor(resource.category)} text-white p-4`}>
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="text-4xl">{resource.icon}</div>
                                            <div className="flex gap-2">
                                                {resource.downloadable && (
                                                    <div className="bg-white/20 p-1.5 rounded" title="Downloadable">
                                                        <Download className="w-4 h-4" />
                                                    </div>
                                                )}
                                                {resource.interactive && (
                                                    <div className="bg-white/20 p-1.5 rounded" title="Interactive">
                                                        <Play className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-lg mb-1">{resource.title}</h3>
                                        {resource.stage && (
                                            <div className="text-xs bg-white/20 inline-block px-2 py-1 rounded">
                                                Stage {resource.stage}
                                            </div>
                                        )}
                                    </div>

                                    {/* Resource Body */}
                                    <div className="p-4">
                                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            {resource.description}
                                        </p>

                                        {/* Category Badge */}
                                        <div className="mb-3">
                                            <span className={`text-xs px-2 py-1 rounded-full ${resource.category === 'guide' ? 'bg-blue-100 text-blue-800' :
                                                resource.category === 'template' ? 'bg-green-100 text-green-800' :
                                                    resource.category === 'tool' ? 'bg-purple-100 text-purple-800' :
                                                        'bg-orange-100 text-orange-800'
                                                }`}>
                                                {resource.category.toUpperCase()}
                                            </span>
                                            <span className="text-xs text-gray-500 ml-2">
                                                {resource.file}
                                            </span>
                                        </div>

                                        {/* Toggle Features */}
                                        <button
                                            onClick={() => toggleResource(resource.id)}
                                            className="w-full flex items-center justify-between text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-2"
                                        >
                                            <span>
                                                {expandedResource === resource.id ? 'Hide' : 'Show'} Features ({resource.features.length})
                                            </span>
                                            {expandedResource === resource.id ?
                                                <ChevronUp className="w-4 h-4" /> :
                                                <ChevronDown className="w-4 h-4" />
                                            }
                                        </button>

                                        {/* Features List */}
                                        {expandedResource === resource.id && (
                                            <div className="mb-3 bg-gray-50 rounded-lg p-3">
                                                <ul className="space-y-1.5">
                                                    {resource.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                                                            <span className="text-indigo-600 mt-0.5">✓</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/resources/${resource.id}`}
                                                className={`flex-1 px-4 py-2 bg-gradient-to-r ${getCategoryColor(resource.category)} text-white rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm font-medium`}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Explore
                                            </Link>
                                            {resource.downloadable && (
                                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                                    <Download className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Quick Stats */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center border-2 border-blue-200">
                            <div className="text-3xl font-bold text-blue-600">
                                {RESOURCE_LIBRARY.filter(r => r.category === 'guide').length}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Comprehensive Guides</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center border-2 border-green-200">
                            <div className="text-3xl font-bold text-green-600">
                                {RESOURCE_LIBRARY.filter(r => r.downloadable).length}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Downloadable Resources</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-200">
                            <div className="text-3xl font-bold text-purple-600">
                                {RESOURCE_LIBRARY.filter(r => r.interactive).length}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Interactive Tools</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center border-2 border-orange-200">
                            <div className="text-3xl font-bold text-orange-600">
                                {RESOURCE_LIBRARY.length}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Total Resources</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
