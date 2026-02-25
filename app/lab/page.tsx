'use client'

import { useState } from 'react'
import { Beaker, Users, Target, BarChart } from 'lucide-react'

export default function LabPortal() {
    const [labName, setLabName] = useState('')
    const [seedAmount, setSeedAmount] = useState('')

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-green-600">Research Lab Incubator</h1>
                    <p className="text-sm text-gray-600">Build & Track Your Research Lab</p>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold mb-6">Create New Lab</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-lg font-bold mb-2">Lab Name</label>
                                <input
                                    type="text"
                                    value={labName}
                                    onChange={(e) => setLabName(e.target.value)}
                                    placeholder="e.g., AI Research Lab"
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-bold mb-2">Seed Funding (₹)</label>
                                <input
                                    type="number"
                                    value={seedAmount}
                                    onChange={(e) => setSeedAmount(e.target.value)}
                                    placeholder="e.g., 500000"
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-bold mb-2">Principal Investigator</label>
                                <input
                                    type="text"
                                    placeholder="Faculty name"
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-lg font-bold mb-2">PG Students</label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold mb-2">UG Students</label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700">
                                Create Lab & Calculate ROI
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">ROI Prediction</h3>
                            <div className="text-center py-8">
                                <div className="text-6xl font-bold text-green-600 mb-2">--</div>
                                <p className="text-gray-600">Predicted ROI</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-blue-600">--</div>
                                    <div className="text-sm text-gray-600">Publications</div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-purple-600">--</div>
                                    <div className="text-sm text-gray-600">Funding Success</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Lab Features</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Users className="w-6 h-6 text-green-600" />
                                    <span className="text-lg">Team Management</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Target className="w-6 h-6 text-green-600" />
                                    <span className="text-lg">Research Roadmap</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BarChart className="w-6 h-6 text-green-600" />
                                    <span className="text-lg">Output Tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
