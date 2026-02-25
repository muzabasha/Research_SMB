'use client'

import { TrendingUp, Users, Beaker, DollarSign } from 'lucide-react'

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-orange-600">Institutional Dashboard</h1>
                    <p className="text-sm text-gray-600">Research Analytics & Insights</p>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <Users className="w-10 h-10 text-blue-600" />
                            <div className="text-3xl font-bold text-blue-600">--</div>
                        </div>
                        <h3 className="text-lg font-bold">Active Faculty</h3>
                        <p className="text-sm text-gray-600">Research profiles</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <Beaker className="w-10 h-10 text-green-600" />
                            <div className="text-3xl font-bold text-green-600">--</div>
                        </div>
                        <h3 className="text-lg font-bold">Research Labs</h3>
                        <p className="text-sm text-gray-600">Active labs</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <DollarSign className="w-10 h-10 text-purple-600" />
                            <div className="text-3xl font-bold text-purple-600">--</div>
                        </div>
                        <h3 className="text-lg font-bold">Funding Secured</h3>
                        <p className="text-sm text-gray-600">Total amount</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <TrendingUp className="w-10 h-10 text-orange-600" />
                            <div className="text-3xl font-bold text-orange-600">--</div>
                        </div>
                        <h3 className="text-lg font-bold">Success Rate</h3>
                        <p className="text-sm text-gray-600">Proposal approval</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Top Performing Departments</h2>
                        <div className="space-y-4">
                            {['Computer Science', 'Biotechnology', 'Mechanical Engineering'].map((dept, i) => (
                                <div key={dept} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div>
                                        <div className="font-bold text-lg">{dept}</div>
                                        <div className="text-sm text-gray-600">Publications & Funding</div>
                                    </div>
                                    <div className="text-2xl font-bold text-orange-600">#{i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-xl">
                                <div className="font-bold">New Funding Match</div>
                                <div className="text-sm text-gray-600">Dr. Smith - AI Research Grant</div>
                            </div>
                            <div className="p-4 bg-green-50 rounded-xl">
                                <div className="font-bold">Lab Created</div>
                                <div className="text-sm text-gray-600">Quantum Computing Lab</div>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-xl">
                                <div className="font-bold">Proposal Submitted</div>
                                <div className="text-sm text-gray-600">Dr. Johnson - SERB Grant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
