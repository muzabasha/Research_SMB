import { JOURNEY_STAGES } from '@/lib/journey-data'

// Generate static params for all 15 stages
export function generateStaticParams() {
    return JOURNEY_STAGES.map((stage) => ({
        stageId: stage.id.toString(),
    }))
}

export default function StageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
