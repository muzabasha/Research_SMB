import Link from 'next/link'
import { RESEARCH_VIRTUAL_LAB } from '@/lib/virtual-lab'
import ToolClient from './ToolClient'

export function generateStaticParams() {
    return RESEARCH_VIRTUAL_LAB.tools.map((tool) => ({
        toolId: tool.id,
    }))
}

export default function ToolPage({ params }: { params: { toolId: string } }) {
    const tool = RESEARCH_VIRTUAL_LAB.tools.find(t => t.id === params.toolId)

    if (!tool) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Tool Not Found</h1>
                    <Link href="/virtual-lab" className="text-blue-600 hover:underline">
                        Return to Virtual Lab
                    </Link>
                </div>
            </div>
        )
    }

    return <ToolClient tool={tool} />
}
