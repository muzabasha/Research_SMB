'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    ArrowLeft, Play, Pause, RotateCcw, Settings, Download, Share2,
    TrendingUp, BarChart3, Sliders, Award, Target, Clock, Zap,
    CheckCircle, AlertTriangle, Info
} from 'lucide-react'
import { Simulation } from '@/lib/virtual-lab'

interface SimulationClientProps {
    simulation: Simulation
}

export default function SimulationClient({ simulation }: SimulationClientProps) {
    const [isRunning, setIsRunning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [selectedScenario, setSelectedScenario] = useState(simulation.scenarios[0])
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [progress, setProgress] = useState(0)
    const [completedObjectives, setCompletedObjectives] = useState<string[]>([])
    const [simulationSpeed, setSimulationSpeed] = useState(1)
    const [events, setEvents] = useState<Array<{ time: number; message: string; type: 'info' | 'success' | 'warning' | 'error' }>>([])

    // Parameter values
    const [parameterValues, setParameterValues] = useState<Record<string, any>>(
        simulation.parameters.reduce((acc, param) => ({
            ...acc,
            [param.name]: param.defaultValue
        }), {})
    )

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isRunning && !isPaused) {
            interval = setInterval(() => {
                setTimeElapsed(prev => prev + 1)
                setProgress(prev => Math.min(prev + (0.5 * simulationSpeed), 100))

                // Simulate random events
                if (Math.random() < 0.1) {
                    addEvent('info', getRandomEvent())
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRunning, isPaused, simulationSpeed])

    const getRandomEvent = () => {
        const events = [
            'Literature review completed for 10 papers',
            'Data collection milestone reached',
            'Team meeting scheduled',
            'Budget review required',
            'Methodology validation in progress',
            'Preliminary results available',
            'Reviewer feedback received',
            'Experiment iteration completed'
        ]
        return events[Math.floor(Math.random() * events.length)]
    }

    const addEvent = (type: 'info' | 'success' | 'warning' | 'error', message: string) => {
        setEvents(prev => [...prev, { time: timeElapsed, message, type }].slice(-10))
    }

    const handleStart = () => {
        setIsRunning(true)
        setIsPaused(false)
        addEvent('success', `Started ${selectedScenario.name} scenario`)
    }

    const handlePause = () => {
        setIsPaused(!isPaused)
        addEvent('info', isPaused ? 'Simulation resumed' : 'Simulation paused')
    }

    const handleReset = () => {
        if (confirm('Reset simulation? All progress will be lost.')) {
            setIsRunning(false)
            setIsPaused(false)
            setTimeElapsed(0)
            setProgress(0)
            setCompletedObjectives([])
            setEvents([])
            addEvent('info', 'Simulation reset')
        }
    }

    const handleObjectiveComplete = (objective: string) => {
        if (!completedObjectives.includes(objective)) {
            setCompletedObjectives([...completedObjectives, objective])
            addEvent('success', `Objective completed: ${objective}`)
        }
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/virtual-lab" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">{simulation.title}</h1>
                                <p className="text-sm text-gray-600">{simulation.description}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">{Math.round(progress)}%</div>
                                <div className="text-xs text-gray-600">Progress</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">{formatTime(timeElapsed)}</div>
                                <div className="text-xs text-gray-600">Time</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Control Panel */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Simulation Controls</h3>
                                <div className="flex items-center gap-2">
                                    {!isRunning ? (
                                        <button
                                            onClick={handleStart}
                                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-semibold"
                                        >
                                            <Play className="w-4 h-4" />
                                            Start
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handlePause}
                                            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 font-semibold"
                                        >
                                            <Pause className="w-4 h-4" />
                                            {isPaused ? 'Resume' : 'Pause'}
                                        </button>
                                    )}
                                    <button
                                        onClick={handleReset}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold"
                                    >
                                        <RotateCcw className="w-4 h-4" />
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* Speed Control */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Zap className="w-4 h-4 inline mr-1" />
                                    Simulation Speed: {simulationSpeed}x
                                </label>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="3"
                                    step="0.5"
                                    value={simulationSpeed}
                                    onChange={(e) => setSimulationSpeed(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>0.5x</span>
                                    <span>1x</span>
                                    <span>2x</span>
                                    <span>3x</span>
                                </div>
                            </div>

                            {/* Parameters */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Parameters</h4>
                                {simulation.parameters.map((param) => (
                                    <div key={param.name}>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            {param.name}: {parameterValues[param.name]}
                                        </label>
                                        <p className="text-xs text-gray-600 mb-2">{param.description}</p>
                                        {typeof param.defaultValue === 'number' ? (
                                            <input
                                                type="range"
                                                min={param.range.split(' to ')[0].replace(/[^\d]/g, '')}
                                                max={param.range.split(' to ')[1].replace(/[^\d]/g, '')}
                                                value={parameterValues[param.name]}
                                                onChange={(e) => setParameterValues({
                                                    ...parameterValues,
                                                    [param.name]: parseInt(e.target.value)
                                                })}
                                                className="w-full"
                                                disabled={isRunning}
                                            />
                                        ) : (
                                            <select
                                                value={parameterValues[param.name]}
                                                onChange={(e) => setParameterValues({
                                                    ...parameterValues,
                                                    [param.name]: e.target.value
                                                })}
                                                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                                                disabled={isRunning}
                                            >
                                                {param.range.split(', ').map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visualization */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-purple-600" />
                                Live Visualization
                            </h3>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 min-h-[400px] flex items-center justify-center border-2 border-purple-200">
                                <div className="text-center">
                                    <TrendingUp className="w-20 h-20 text-purple-600 mx-auto mb-4" />
                                    <p className="text-gray-700 font-semibold mb-2">Research Lifecycle Simulation</p>
                                    <p className="text-sm text-gray-600">
                                        {isRunning ? 'Simulation running...' : 'Start simulation to see visualization'}
                                    </p>
                                    {isRunning && (
                                        <div className="mt-6 space-y-3">
                                            <div className="bg-white rounded-lg p-4 shadow">
                                                <div className="text-sm text-gray-600">Current Phase</div>
                                                <div className="text-lg font-bold text-purple-600">
                                                    {progress < 25 ? 'Planning' : progress < 50 ? 'Execution' : progress < 75 ? 'Analysis' : 'Publication'}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="bg-white rounded-lg p-3 shadow">
                                                    <div className="text-xs text-gray-600">Budget Used</div>
                                                    <div className="text-sm font-bold text-green-600">{Math.round(progress * 0.8)}%</div>
                                                </div>
                                                <div className="bg-white rounded-lg p-3 shadow">
                                                    <div className="text-xs text-gray-600">Team Morale</div>
                                                    <div className="text-sm font-bold text-blue-600">{Math.round(85 + Math.random() * 10)}%</div>
                                                </div>
                                                <div className="bg-white rounded-lg p-3 shadow">
                                                    <div className="text-xs text-gray-600">Quality</div>
                                                    <div className="text-sm font-bold text-purple-600">{Math.round(75 + Math.random() * 15)}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Events Log */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Event Log</h3>
                            <div className="space-y-2 max-h-[300px] overflow-y-auto">
                                {events.length === 0 ? (
                                    <p className="text-sm text-gray-500 text-center py-4">No events yet. Start the simulation to see events.</p>
                                ) : (
                                    events.map((event, index) => (
                                        <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${event.type === 'success' ? 'bg-green-50' :
                                                event.type === 'warning' ? 'bg-yellow-50' :
                                                    event.type === 'error' ? 'bg-red-50' : 'bg-blue-50'
                                            }`}>
                                            {event.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />}
                                            {event.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />}
                                            {event.type === 'info' && <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-gray-900">{event.message}</div>
                                                <div className="text-xs text-gray-600">{formatTime(event.time)}</div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Scenario Selection */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Scenarios</h3>
                            <div className="space-y-2">
                                {simulation.scenarios.map((scenario) => (
                                    <button
                                        key={scenario.id}
                                        onClick={() => !isRunning && setSelectedScenario(scenario)}
                                        disabled={isRunning}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedScenario.id === scenario.id
                                                ? 'bg-purple-50 border-purple-500'
                                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                            } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <div className="font-semibold text-gray-900 mb-1">{scenario.name}</div>
                                        <div className="text-sm text-gray-600 mb-2">{scenario.description}</div>
                                        <div className={`text-xs px-2 py-1 rounded-full inline-block ${scenario.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                scenario.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {scenario.difficulty}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Objectives */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Objectives</h3>
                            <div className="space-y-2">
                                {selectedScenario.objectives.map((objective, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <button
                                            onClick={() => handleObjectiveComplete(objective)}
                                            disabled={!isRunning || completedObjectives.includes(objective)}
                                            className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center ${completedObjectives.includes(objective)
                                                    ? 'bg-green-600 border-green-600'
                                                    : 'border-gray-300 hover:border-green-600'
                                                }`}
                                        >
                                            {completedObjectives.includes(objective) && (
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            )}
                                        </button>
                                        <span className={`text-sm ${completedObjectives.includes(objective)
                                                ? 'text-gray-500 line-through'
                                                : 'text-gray-700'
                                            }`}>
                                            {objective}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t">
                                <div className="text-sm text-gray-600">
                                    Completed: {completedObjectives.length} / {selectedScenario.objectives.length}
                                </div>
                            </div>
                        </div>

                        {/* Achievement */}
                        {progress >= 100 && (
                            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl shadow-lg p-6 text-white">
                                <div className="text-center">
                                    <Award className="w-16 h-16 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Simulation Complete!</h3>
                                    <p className="text-white/90 mb-4">
                                        You've completed the {selectedScenario.name} scenario.
                                    </p>
                                    <button className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                                        Download Report
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
