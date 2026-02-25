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
                                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                                    <p className="text-lg">Complete your profile to see AI-powered funding matches.</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'proposal' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Proposal Builder</h2>
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
