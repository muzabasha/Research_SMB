import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateEmbedding } from '@/lib/similarity'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { userId, publications, hIndex, citations, keywords, department } = body as {
            userId: string
            publications: number
            hIndex: number
            citations: number
            keywords: string[]
            department: string
        }

        // Generate embedding for faculty keywords
        const keywordText = keywords.join(' ')
        const domainVector = await generateEmbedding(keywordText)

        // Create or update faculty profile
        const profile = await prisma.facultyProfile.upsert({
            where: { userId },
            update: {
                publications,
                hIndex,
                citations,
                keywords,
                domainVector,
            },
            create: {
                userId,
                publications,
                hIndex,
                citations,
                keywords,
                domainVector,
            },
        })

        return NextResponse.json({ success: true, profile })
    } catch (error) {
        console.error('Faculty analysis error:', error)
        return NextResponse.json(
            { error: 'Failed to analyze faculty profile' },
            { status: 500 }
        )
    }
}
