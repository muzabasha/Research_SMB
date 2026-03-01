import Link from 'next/link'
import { getExperimentById, RESEARCH_VIRTUAL_LAB } from '@/lib/virtual-lab'
import ExperimentClient from './ExperimentClient'

export function generateStaticParams() {
    return RESEARCH_VIRTUAL_LAB.experiments.map((experiment) => ({
        experimentId: experiment.id,
    }))
}

export default function ExperimentPage({ params }: { params: { experimentId: string } }) {
    const experiment = getExperimentById(params.experimentId)

    if (!experiment) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Experiment Not Found</h1>
                    <Link href="/virtual-lab" className="text-blue-600 hover:underline">
                        Return to Virtual Lab
                    </Link>
                </div>
            </div>
        )
    }

    return <ExperimentClient experiment={experiment} />
}
