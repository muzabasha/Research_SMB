'use client'

import { useState } from 'react'
import { Upload, Search, FileText, TrendingUp } from 'lucide-react'

export default function FacultyPortal() {
    const [activeTab, setActiveTab] = useState('profile')

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-purple-600">Faculty Research Studio</h1>
                    <p className="text-sm text-gray-600">Funding Intelligence & Proposal Builder</p>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-8 mb-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-3">🎓 Faculty Research Studio</h2>
                    <p className="text-xl mb-4">
                        Navigate the funding landscape with confidence. We'll help you discover opportunities, build strong proposals, and maximize your research impact.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <div className="text-3xl mb-2">🔍</div>
                            <h3 className="font-bold mb-1">Smart Matching</h3>
                            <p className="text-sm opacity-90">Find funding aligned with your expertise</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <div className="text-3xl mb-2">📊</div>
                            <h3 className="font-bold mb-1">Success Insights</h3>
                            <p className="text-sm opacity-90">Learn from winning proposals</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <div className="text-3xl mb-2">🚀</div>
                            <h3 className="font-bold mb-1">Build Your Legacy</h3>
                            <p className="text-sm opacity-90">Create impactful research programs</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg mb-8">
                    <div className="flex border-b">
                        {[
                            { id: 'profile', label: 'Profile Setup', icon: Upload },
                            { id: 'funding', label: 'Funding Matches', icon: Search },
                            { id: 'proposal', label: 'Proposal Builder', icon: FileText },
                            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-6 py-4 font-bold text-lg flex items-center justify-center gap-2 ${activeTab === tab.id
                                    ? 'border-b-4 border-purple-600 text-purple-600'
                                    : 'text-gray-500'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        {activeTab === 'profile' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Build Your Research Profile</h2>

                                {/* Educational Content */}
                                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-xl">
                                    <h3 className="font-bold text-lg mb-2 text-purple-900">💡 Why Your Profile Matters</h3>
                                    <p className="text-gray-700 mb-3">
                                        A strong research profile helps funding agencies understand your expertise, track record, and potential for success. It's your research identity!
                                    </p>
                                    <div className="bg-white p-4 rounded-lg mt-3">
                                        <h4 className="font-bold mb-2 text-purple-800">Profile Building Tips:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>✓ Keep your CV updated with recent publications</li>
                                            <li>✓ Highlight interdisciplinary collaborations</li>
                                            <li>✓ Include both completed and ongoing projects</li>
                                            <li>✓ Showcase impact beyond citations (patents, products, policies)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                        <p className="text-lg">Upload CV/Resume</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input type="number" placeholder="Publications" className="p-4 border-2 rounded-xl text-lg" />
                                        <input type="number" placeholder="H-Index" className="p-4 border-2 rounded-xl text-lg" />
                                    </div>
                                    <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
                                        Analyze Profile
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'funding' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Funding Call Matches</h2>

                                {/* Educational Content */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-xl">
                                    <h3 className="font-bold text-lg mb-2 text-blue-900">💰 Finding the Right Funding</h3>
                                    <p className="text-gray-700 mb-3">
                                        Successful funding requires matching your expertise with the right opportunities. Look for alignment in research area, career stage, and institutional eligibility.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg mt-3">
                                        <h4 className="font-bold mb-2 text-blue-800">Major Funding Sources in India:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>✓ <strong>SERB:</strong> Science & Engineering Research Board</li>
                                            <li>✓ <strong>DST:</strong> Department of Science & Technology</li>
                                            <li>✓ <strong>DBT:</strong> Department of Biotechnology</li>
                                            <li>✓ <strong>ICMR:</strong> Indian Council of Medical Research</li>
                                            <li>✓ <strong>CSIR:</strong> Council of Scientific & Industrial Research</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                                    <p className="text-lg">Complete your profile to see AI-powered funding matches.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'proposal' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Proposal Builder</h2>

                                {/* Educational Content */}
                                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-xl">
                                    <h3 className="font-bold text-lg mb-2 text-green-900">📝 Crafting Winning Proposals</h3>
                                    <p className="text-gray-700 mb-3">
                                        A strong proposal clearly articulates the problem, your innovative solution, expected impact, and why you're the right person to do this work.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg mt-3">
                                        <h4 className="font-bold mb-2 text-green-800">Essential Proposal Elements:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>✓ <strong>Problem Statement:</strong> Clear, compelling, evidence-based</li>
                                            <li>✓ <strong>Objectives:</strong> Specific, measurable, achievable</li>
                                            <li>✓ <strong>Methodology:</strong> Detailed, feasible, innovative</li>
                                            <li>✓ <strong>Impact:</strong> Academic, social, economic benefits</li>
                                            <li>✓ <strong>Budget:</strong> Justified, realistic, aligned with activities</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <input type="text" placeholder="Proposal Title" className="w-full p-4 border-2 rounded-xl text-lg" />
                                    <textarea placeholder="Methodology" className="w-full h-48 p-4 border-2 rounded-xl text-lg" />
                                    <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
                                        Get AI Evaluation
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
