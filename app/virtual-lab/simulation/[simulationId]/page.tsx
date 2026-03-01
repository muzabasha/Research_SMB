import Link from 'next/link'
import { getSimulationById, RESEARCH_VIRTUAL_LAB } from '@/lib/virtual-lab'
import SimulationClient from './SimulationClient'

export function generateStaticParams() {
    return RESEARCH_VIRTUAL_LAB.simulations.map((simulation) => ({
        simulationId: simulation.id,
    }))
}

export default function SimulationPage({ params }: { params: { simulationId: string } }) {
    const simulation = getSimulationById(params.simulationId)

    if (!simulation) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Simulation Not Found</h1>
                    <Link href="/virtual-lab" className="text-blue-600 hover:underline">
                        Return to Virtual Lab
                    </Link>
                </div>
            </div>
        )
    }

    return <SimulationClient simulation={simulation} />
}
