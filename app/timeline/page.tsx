'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { JOURNEY_STAGES, PHASES } from '@/lib/journey-data'

// Convert duration strings to months
function durationToMonths(duration: string): number {
    const lower = duration.toLowerCase()

    if (lower.includes('week')) {
        const weeks = parseInt(lower.match(/\d+/)?.[0] || '1')
        return weeks / 4
    } else if (lower.includes('month')) {
        const match = lower.match(/(\d+)-?(\d+)?/)
        if (match) {
            const min = parseInt(match[1])
            const max = match[2] ? parseInt(match[2]) : min
            return (min + max) / 2
        }
    }
    return 1
}

export default function TimelinePage() {
    // Calculate cumulative start times for each stage
    const stagesWithTiming = JOURNEY_STAGES.map((stage, index) => {
        const duration = durationToMonths(stage.duration)
        const startMonth = JOURNEY_STAGES.slice(0, index).reduce((sum, s) => sum + durationToMonths(s.duration), 0)
        return {
            ...stage,
            durationMonths: duration,
            startMonth,
            endMonth: startMonth + duration
        }
    })

    const totalMonths = Math.ceil(stagesWithTiming[stagesWithTiming.length - 1].endMonth)
    const monthsPerYear = 12
    const totalYears = Math.ceil(totalMonths / monthsPerYear)

    // Phase colors
    const phaseColors: Record<string, { bg: string; border: string; text: string }> = {
        'Foundation': { bg: 'bg-blue-500', border: 'border-blue-600', text: 'text-blue-700' },
        'Execution': { bg: 'bg-green-500', border: 'border-green-600', text: 'text-green-700' },
        'Funding': { bg: 'bg-purple-500', border: 'border-purple-600', text: 'text-purple-700' },
        'Lab Development': { bg: 'bg-orange-500', border: 'border-orange-600', text: 'text-orange-700' },
        'Excellence': { bg: 'bg-red-500', border: 'border-red-600', text: 'text-red-700' }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Research Journey Timeline</h1>
                                <p className="text-sm text-gray-600">Gantt Chart: From Zero to Research Excellence</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{totalYears} Years Journey</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Summary */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Journey Overview</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {PHASES.map(phase => {
                            const phaseStages = stagesWithTiming.filter(s => s.phase === phase.name)
                            const phaseDuration = phaseStages.reduce((sum, s) => sum + s.durationMonths, 0)
                            const colors = phaseColors[phase.name]

                            return (
                                <div key={phase.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border-l-4" style={{ borderColor: colors.border.replace('border-', '') }}>
                                    <div className={`text-sm font-semibold ${colors.text} mb-1`}>Phase {phase.id}</div>
                                    <div className="font-bold text-gray-900 mb-2">{phase.name}</div>
                                    <div className="text-sm text-gray-600 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {Math.round(phaseDuration)} months
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">{phaseStages.length} stages</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Gantt Chart */}
                <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Gantt Chart</h2>

                    {/* Chart Container */}
                    <div className="min-w-[1200px]">
                        {/* Timeline Header */}
                        <div className="flex mb-4">
                            <div className="w-80 flex-shrink-0"></div>
                            <div className="flex-1 flex">
                                {Array.from({ length: totalYears }, (_, yearIndex) => (
                                    <div key={yearIndex} className="flex-1 border-l border-gray-300">
                                        <div className="text-center font-semibold text-gray-700 mb-2 bg-blue-50 py-2">
                                            Year {yearIndex + 1}
                                        </div>
                                        <div className="flex">
                                            {Array.from({ length: 12 }, (_, monthIndex) => {
                                                const absoluteMonth = yearIndex * 12 + monthIndex
                                                if (absoluteMonth >= totalMonths) return null
                                                return (
                                                    <div key={monthIndex} className="flex-1 border-l border-gray-200 text-center">
                                                        <div className="text-xs text-gray-500 py-1">M{monthIndex + 1}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stages */}
                        <div className="space-y-1">
                            {PHASES.map(phase => {
                                const phaseStages = stagesWithTiming.filter(s => s.phase === phase.name)
                                const colors = phaseColors[phase.name]

                                return (
                                    <div key={phase.id} className="mb-6">
                                        {/* Phase Header */}
                                        <div className="flex items-center mb-2">
                                            <div className="w-80 flex-shrink-0">
                                                <div className={`font-bold text-lg ${colors.text} bg-gradient-to-r from-gray-50 to-white px-4 py-2 rounded-lg border-l-4 ${colors.border}`}>
                                                    Phase {phase.id}: {phase.name}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phase Stages */}
                                        {phaseStages.map(stage => {
                                            const leftPercent = (stage.startMonth / totalMonths) * 100
                                            const widthPercent = (stage.durationMonths / totalMonths) * 100

                                            return (
                                                <div key={stage.id} className="flex items-center mb-2 hover:bg-gray-50 transition-colors rounded-lg">
                                                    <div className="w-80 flex-shrink-0 px-4 py-2">
                                                        <div className="font-semibold text-gray-900 text-sm">
                                                            Stage {stage.id}: {stage.title}
                                                        </div>
                                                        <div className="text-xs text-gray-600 mt-1">
                                                            {stage.duration}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 relative h-12 border-l border-gray-200">
                                                        <div
                                                            className={`absolute ${colors.bg} rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-10 top-1 flex items-center justify-center text-white text-xs font-semibold px-2`}
                                                            style={{
                                                                left: `${leftPercent}%`,
                                                                width: `${widthPercent}%`
                                                            }}
                                                            title={`${stage.title} (${stage.duration})`}
                                                        >
                                                            <span className="truncate">{stage.subtitle}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Timeline Footer */}
                        <div className="flex mt-4 border-t pt-4">
                            <div className="w-80 flex-shrink-0 flex items-center justify-end pr-4">
                                <span className="text-sm font-semibold text-gray-700">Total Duration:</span>
                            </div>
                            <div className="flex-1 flex items-center">
                                <div className="bg-gradient-to-r from-blue-500 to-red-500 h-8 rounded-lg shadow-md flex items-center justify-center text-white font-bold text-sm px-4" style={{ width: '100%' }}>
                                    {totalMonths} Months ({totalYears} Years) - Complete Research Journey
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Phase Legend</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {PHASES.map(phase => {
                            const colors = phaseColors[phase.name]
                            return (
                                <div key={phase.id} className="flex items-center gap-3">
                                    <div className={`w-8 h-8 ${colors.bg} rounded shadow-md`}></div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{phase.name}</div>
                                        <div className="text-xs text-gray-600">{phase.stages.length} stages</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Milestones */}
                <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h2>
                    <div className="space-y-4">
                        {PHASES.map(phase => {
                            const phaseStages = stagesWithTiming.filter(s => s.phase === phase.name)
                            const phaseStart = Math.round(phaseStages[0].startMonth)
                            const phaseEnd = Math.round(phaseStages[phaseStages.length - 1].endMonth)
                            const colors = phaseColors[phase.name]

                            return (
                                <div key={phase.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                                        {phase.id}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-gray-900 mb-1">{phase.name}</div>
                                        <div className="text-sm text-gray-600 mb-2">
                                            Months {phaseStart}-{phaseEnd} • {phaseStages.length} stages
                                        </div>
                                        <div className="text-sm text-gray-700">
                                            {phaseStages.map(s => s.title).join(' → ')}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
