'use client'

import Link from 'next/link'
import { ArrowLeft, Beaker, Brain, Users, Database, Wrench, MessageSquare, Award, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { RESEARCH_VIRTUAL_LAB, getLabStatistics } from '@/lib/virtual-lab'

export default function VirtualLabPage() {
    const stats = getLabStatistics()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex-1">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                    <Beaker className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">{RESEARCH_VIRTUAL_LAB.name}</h1>
                                    <p className="text-sm text-gray-600">NEP 2020 Aligned Experiential Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            NEP 2020 Compliant
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Virtual Research Laboratory
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                            {RESEARCH_VIRTUAL_LAB.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-3xl font-bold mb-1">{stats.totalExperiments}</div>
                                <div className="text-sm text-white/80">Experiments</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-3xl font-bold mb-1">{stats.totalSimulations}</div>
                                <div className="text-sm text-white/80">Simulations</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-3xl font-bold mb-1">{stats.totalDatasets}</div>
                                <div className="text-sm text-white/80">Datasets</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-3xl font-bold mb-1">{stats.totalTools}</div>
                                <div className="text-sm text-white/80">Tools</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-3xl font-bold mb-1">{stats.nep2020Competencies}</div>
                                <div className="text-sm text-white/80">Competencies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* NEP 2020 Alignment */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-2 border-green-200">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">NEP 2020 Alignment</h3>
                            <p className="text-gray-700">
                                This virtual lab is designed according to National Education Policy 2020 guidelines,
                                emphasizing experiential learning, multidisciplinary approach, and holistic development.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-green-600" />
                                Key Competencies Developed
                            </h4>
                            <ul className="space-y-2">
                                {RESEARCH_VIRTUAL_LAB.nep2020Alignment.competencies.map((comp, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{comp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Target className="w-5 h-5 text-green-600" />
                                Learning Outcomes
                            </h4>
                            <ul className="space-y-2">
                                {RESEARCH_VIRTUAL_LAB.nep2020Alignment.learningOutcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Experiments Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Beaker className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Virtual Experiments</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {RESEARCH_VIRTUAL_LAB.experiments.map((experiment) => (
                            <div key={experiment.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100 hover:border-blue-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${experiment.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                                        experiment.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        {experiment.difficulty.toUpperCase()}
                                    </div>
                                    <span className="text-sm text-gray-600">{experiment.duration}</span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 mb-2">{experiment.title}</h4>
                                <p className="text-gray-600 mb-4 text-sm">{experiment.objective}</p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <Target className="w-4 h-4 text-blue-600" />
                                        <span className="font-medium">{experiment.domain}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <Lightbulb className="w-4 h-4 text-yellow-600" />
                                        <span>{experiment.procedure.length} Steps</span>
                                    </div>
                                </div>

                                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                    Start Experiment
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Simulations Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Interactive Simulations</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {RESEARCH_VIRTUAL_LAB.simulations.map((simulation) => (
                            <div key={simulation.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100 hover:border-purple-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                                        {simulation.type.toUpperCase()}
                                    </div>
                                    <span className="text-sm text-gray-600">{simulation.scenarios.length} Scenarios</span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 mb-2">{simulation.title}</h4>
                                <p className="text-gray-600 mb-4">{simulation.description}</p>

                                <div className="space-y-2 mb-4">
                                    {simulation.scenarios.map((scenario) => (
                                        <div key={scenario.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                            <span className="text-sm font-medium text-gray-700">{scenario.name}</span>
                                            <span className={`text-xs px-2 py-1 rounded ${scenario.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                scenario.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {scenario.difficulty}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                                    Launch Simulation
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <Wrench className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Research Tools</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {RESEARCH_VIRTUAL_LAB.tools.map((tool) => (
                            <div key={tool.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100 hover:border-indigo-300">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Wrench className="w-6 h-6 text-indigo-600" />
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h4>
                                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>

                                <div className="mb-4">
                                    <div className="text-xs font-semibold text-gray-500 mb-2">KEY FEATURES:</div>
                                    <ul className="space-y-1">
                                        {tool.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                                <CheckCircle className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm">
                                    Open Tool
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Datasets Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <Database className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Research Datasets</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {RESEARCH_VIRTUAL_LAB.datasets.map((dataset) => (
                            <div key={dataset.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100 hover:border-green-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Database className="w-6 h-6 text-green-600" />
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold">
                                        {dataset.size}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-2">{dataset.name}</h4>
                                <p className="text-sm text-gray-600 mb-3">{dataset.description}</p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <span className="font-semibold">Domain:</span>
                                        <span>{dataset.domain}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <span className="font-semibold">Format:</span>
                                        <span>{dataset.format}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs font-semibold text-gray-500 mb-2">USE CASES:</div>
                                    <div className="flex flex-wrap gap-1">
                                        {dataset.useCases.slice(0, 3).map((useCase, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">
                                                {useCase}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
                                    Access Dataset
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Collaboration Spaces */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Collaboration Spaces</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {RESEARCH_VIRTUAL_LAB.collaborationSpaces.map((space) => (
                            <div key={space.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100 hover:border-orange-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">{space.name}</h4>
                                        <p className="text-sm text-gray-600">{space.purpose}</p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-xs font-semibold text-gray-500 mb-2">FEATURES:</div>
                                    <ul className="space-y-1">
                                        {space.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">
                                        <strong>Capacity:</strong> {space.capacity}
                                    </span>
                                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm">
                                        Enter Space
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Start Your Research Journey?</h3>
                    <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                        Access all experiments, simulations, tools, and datasets. Learn by doing with our NEP 2020 aligned virtual lab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/journey"
                            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-xl transition-all"
                        >
                            Start Research Journey
                        </Link>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/20 transition-all border-2 border-white/30">
                            Take Virtual Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
