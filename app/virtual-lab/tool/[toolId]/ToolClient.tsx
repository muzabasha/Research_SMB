'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    ArrowLeft, Upload, Download, Play, Save, Copy, CheckCircle,
    FileText, BarChart3, Calculator, Users, Sparkles, Info
} from 'lucide-react'
import { LabTool } from '@/lib/virtual-lab'

interface ToolClientProps {
    tool: LabTool
}

export default function ToolClient({ tool }: ToolClientProps) {
    const [activeTab, setActiveTab] = useState<'tool' | 'tutorials'>('tool')
    const [inputData, setInputData] = useState('')
    const [outputData, setOutputData] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [savedItems, setSavedItems] = useState<string[]>([])

    const handleProcess = async () => {
        setIsProcessing(true)

        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Generate mock output based on tool category
        let output = ''
        if (tool.category === 'analysis') {
            output = generateAnalysisOutput()
        } else if (tool.category === 'visualization') {
            output = generateVisualizationOutput()
        } else if (tool.category === 'computation') {
            output = generateComputationOutput()
        } else {
            output = generateCollaborationOutput()
        }

        setOutputData(output)
        setIsProcessing(false)
    }

    const generateAnalysisOutput = () => {
        return `Analysis Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Statistical Summary:
   • Total Papers Analyzed: 30
   • Average Citation Count: 45.2
   • Publication Year Range: 2020-2024
   • Most Common Method: Deep Learning (60%)

🔍 Key Findings:
   1. Machine Learning dominates (75% of papers)
   2. Healthcare applications growing rapidly
   3. Explainability is emerging concern
   4. Limited multi-modal approaches

📈 Trends:
   • 2020: 5 papers
   • 2021: 6 papers
   • 2022: 8 papers
   • 2023: 7 papers
   • 2024: 4 papers

🎯 Research Gaps Identified:
   1. Multi-modal data integration
   2. Real-time processing methods
   3. Edge computing applications
   4. Privacy-preserving techniques
   5. Interpretability frameworks

✅ Analysis Complete!`
    }

    const generateVisualizationOutput = () => {
        return `Visualization Generated:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Chart Type: Interactive Dashboard
📐 Dimensions: 1920x1080 (HD)
🎨 Color Scheme: Professional Blue

Components Created:
✓ Timeline Chart (2020-2024)
✓ Method Distribution Pie Chart
✓ Citation Network Graph
✓ Correlation Heatmap
✓ Trend Line Analysis

Export Options:
• PNG (High Resolution)
• SVG (Vector Format)
• PDF (Publication Ready)
• Interactive HTML

Accessibility:
✓ Color-blind friendly palette
✓ Alt text included
✓ Screen reader compatible
✓ WCAG 2.1 AA compliant

Ready for download!`
    }

    const generateComputationOutput = () => {
        return `Proposal Generated:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 Research Proposal Draft

Title: AI-Powered Medical Diagnosis System

Abstract: [250 words]
This proposal presents a novel approach...

1. Introduction (1 page)
   • Background and motivation
   • Problem statement
   • Research objectives

2. Literature Review (2 pages)
   • Current state of the art
   • Identified gaps
   • Proposed contribution

3. Methodology (2 pages)
   • Research design
   • Data collection plan
   • Analysis approach
   • Validation strategy

4. Timeline (1 page)
   • Month 1-6: Data collection
   • Month 7-12: Model development
   • Month 13-18: Validation
   • Month 19-24: Publication

5. Budget (1 page)
   • Equipment: ₹5,00,000
   • Personnel: ₹15,00,000
   • Travel: ₹3,00,000
   • Consumables: ₹2,00,000
   Total: ₹25,00,000

✅ Proposal draft ready for review!`
    }

    const generateCollaborationOutput = () => {
        return `Collaboration Session Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👥 Team Members: 5
📅 Session Date: ${new Date().toLocaleDateString()}
⏱️ Duration: 2 hours

Discussion Topics:
1. Research methodology refinement
2. Data collection strategy
3. Timeline adjustments
4. Budget allocation

Decisions Made:
✓ Approved mixed-methods approach
✓ Extended data collection by 2 months
✓ Allocated additional budget for tools
✓ Scheduled weekly check-ins

Action Items:
• John: Prepare IRB application (Due: Next week)
• Sarah: Finalize survey instrument (Due: 3 days)
• Mike: Set up data infrastructure (Due: 2 weeks)
• Lisa: Draft literature review (Due: 1 month)

Next Meeting: ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}

✅ Session notes saved!`
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(outputData)
        alert('Copied to clipboard!')
    }

    const handleSave = () => {
        const timestamp = new Date().toLocaleString()
        setSavedItems([...savedItems, `${tool.name} - ${timestamp}`])
        alert('Saved successfully!')
    }

    const handleDownload = () => {
        const blob = new Blob([outputData], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${tool.name.replace(/\s+/g, '-')}-output.txt`
        a.click()
        URL.revokeObjectURL(url)
    }

    const getToolIcon = () => {
        switch (tool.category) {
            case 'analysis': return <BarChart3 className="w-8 h-8" />
            case 'visualization': return <Sparkles className="w-8 h-8" />
            case 'computation': return <Calculator className="w-8 h-8" />
            case 'collaboration': return <Users className="w-8 h-8" />
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/virtual-lab" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    {getToolIcon()}
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">{tool.name}</h1>
                                    <p className="text-sm text-gray-600">{tool.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                                Quick Start Guide
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mt-4 border-b">
                        <button
                            onClick={() => setActiveTab('tool')}
                            className={`px-4 py-2 font-semibold transition-colors ${activeTab === 'tool'
                                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Tool Interface
                        </button>
                        <button
                            onClick={() => setActiveTab('tutorials')}
                            className={`px-4 py-2 font-semibold transition-colors ${activeTab === 'tutorials'
                                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Tutorials
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'tool' ? (
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Input Panel */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Input</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Upload or Enter Data
                                        </label>
                                        <textarea
                                            value={inputData}
                                            onChange={(e) => setInputData(e.target.value)}
                                            placeholder={`Enter your data here...\n\nExample:\n- Research papers\n- Dataset\n- Proposal outline\n- Team information`}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none min-h-[300px] font-mono text-sm"
                                        />
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                            <Upload className="w-4 h-4" />
                                            Upload File
                                        </button>
                                        <button
                                            onClick={() => setInputData('')}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            Clear
                                        </button>
                                    </div>

                                    <button
                                        onClick={handleProcess}
                                        disabled={!inputData || isProcessing}
                                        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center justify-center gap-2"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <Play className="w-5 h-5" />
                                                Process
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
                                <div className="space-y-2">
                                    {tool.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Output Panel */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">Output</h3>
                                    {outputData && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleCopy}
                                                className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                                title="Copy"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                                title="Save"
                                            >
                                                <Save className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={handleDownload}
                                                className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                                title="Download"
                                            >
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 min-h-[400px] font-mono text-sm whitespace-pre-wrap">
                                    {outputData || (
                                        <div className="flex items-center justify-center h-[400px] text-gray-400">
                                            <div className="text-center">
                                                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                                <p>Output will appear here after processing</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Saved Items */}
                            {savedItems.length > 0 && (
                                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Saved Items</h3>
                                    <div className="space-y-2">
                                        {savedItems.map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {tool.tutorials.map((tutorial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-indigo-300 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{tutorial}</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Step-by-step guide to help you master this feature.
                                        </p>
                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
                                            Start Tutorial
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
