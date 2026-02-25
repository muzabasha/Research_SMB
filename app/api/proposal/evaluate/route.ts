import { NextRequest, NextResponse } from 'next/server'
import { evaluateProposal } from '@/lib/ai'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { title, methodology, budget, callTitle } = body as {
            title: string
            methodology?: string
            budget?: number
            callTitle: string
        }

        const evaluation = await evaluateProposal({
            title,
            methodology,
            budget,
            callTitle,
        })

        return NextResponse.json({ evaluation })
    } catch (error) {
        console.error('Proposal evaluation error:', error)
        return NextResponse.json(
            { error: 'Failed to evaluate proposal' },
            { status: 500 }
        )
    }
}
