import Link from 'next/link'
import { getResourceById, RESOURCE_LIBRARY } from '@/lib/resource-library'
import ResourceDetailClient from '@/components/ResourceDetailClient'

// Import guide data
import { PAPER_COMPONENTS, WRITING_TIPS, REVIEWER_CONCERNS } from '@/lib/paper-writing-guide'
import { DESK_REJECTION_REASONS, SUBMISSION_TIMELINE, REJECTION_SCENARIOS } from '@/lib/desk-rejection-guide'
import { REVIEWER_COMMENT_TYPES, RESPONSE_STRATEGIES, REVISION_PROCESS } from '@/lib/reviewer-response-guide'
import { PROPOSAL_COMPONENTS } from '@/lib/proposal-drafting-guide'
import { INDUSTRY_PROPOSAL_COMPONENTS } from '@/lib/industry-proposal-guide'
import { PATENT_TYPES, PATENT_FILING_PROCESS } from '@/lib/patent-drafting-guide'
import { getAllTemplates } from '@/lib/templates-data'
import { getAllActivities } from '@/lib/interactive-activities'

// Generate static params for all resources
export function generateStaticParams() {
    return RESOURCE_LIBRARY.map((resource) => ({
        resourceId: resource.id,
    }))
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ resourceId: string }> }) {
    const { resourceId } = await params
    const resource = getResourceById(resourceId)

    if (!resource) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Resource Not Found</h1>
                    <Link href="/resources" className="text-blue-600 hover:underline">
                        ← Back to Resources
                    </Link>
                </div>
            </div>
        )
    }

    // Get actual content based on resource ID
    const getResourceContent = () => {
        switch (resourceId) {
            case 'paper-writing-guide':
                return { type: 'paper-guide', data: PAPER_COMPONENTS, tips: WRITING_TIPS, concerns: REVIEWER_CONCERNS }
            case 'desk-rejection-guide':
                return { type: 'desk-rejection', data: DESK_REJECTION_REASONS, timeline: SUBMISSION_TIMELINE, scenarios: REJECTION_SCENARIOS }
            case 'reviewer-response-guide':
                return { type: 'reviewer-response', data: REVIEWER_COMMENT_TYPES, strategies: RESPONSE_STRATEGIES, process: REVISION_PROCESS }
            case 'proposal-drafting-guide':
                return { type: 'proposal-guide', data: PROPOSAL_COMPONENTS }
            case 'industry-proposal-guide':
                return { type: 'industry-proposal', data: INDUSTRY_PROPOSAL_COMPONENTS }
            case 'patent-drafting-guide':
                return { type: 'patent', types: PATENT_TYPES, process: PATENT_FILING_PROCESS }
            case 'templates-library':
                return { type: 'templates', data: getAllTemplates() }
            case 'interactive-activities':
                return { type: 'activities', data: getAllActivities() }
            default:
                return { type: 'info', data: null }
        }
    }

    const content = getResourceContent()

    return <ResourceDetailClient resource={resource} content={content} />
}
