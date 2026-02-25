import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calculateRelevanceScore } from '@/lib/similarity'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const facultyId = searchParams.get('facultyId')

        if (!facultyId) {
            return NextResponse.json({ error: 'Faculty ID required' }, { status: 400 })
        }

        const faculty = await prisma.facultyProfile.findUnique({
            where: { id: facultyId },
        })

        if (!faculty) {
            return NextResponse.json({ error: 'Faculty not found' }, { status: 404 })
        }

        const fundingCalls = await prisma.fundingCall.findMany({
            where: {
                deadline: {
                    gte: new Date(),
                },
            },
            orderBy: {
                deadline: 'asc',
            },
        })

        const matches = await Promise.all(
            fundingCalls.map(async (call: any) => {
                const relevance = await calculateRelevanceScore({
                    facultyKeywords: faculty.keywords,
                    facultyPublications: faculty.publications,
                    facultyHIndex: faculty.hIndex,
                    facultyCitations: faculty.citations,
                    facultyPastFunding: (faculty.pastFunding as any[]) || [],
                    facultyDomainVector: faculty.domainVector,
                    callKeywords: call.domainKeywords,
                    callDomainVector: [], // Would need to generate this
                    callBudgetMin: call.budgetMin || undefined,
                    callBudgetMax: call.budgetMax || undefined,
                    callPiEligibility: call.piEligibility || undefined,
                })

                return {
                    call,
                    relevance,
                }
            })
        )

        matches.sort((a: any, b: any) => b.relevance.totalScore - a.relevance.totalScore)

        return NextResponse.json({ matches })
    } catch (error) {
        console.error('Funding matches error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch funding matches' },
            { status: 500 }
        )
    }
}
