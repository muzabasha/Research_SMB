import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calculateLabROI } from '@/lib/ai'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { labName, seedAmount, piId, pgCount, sugCount } = body as {
            labName: string
            seedAmount: number
            piId: string
            pgCount: number
            sugCount: number
        }

        const pi = await prisma.user.findUnique({
            where: { id: piId },
            include: { facultyProfile: true },
        })

        if (!pi || !pi.facultyProfile) {
            return NextResponse.json({ error: 'PI not found or no faculty profile' }, { status: 404 })
        }

        const predictedROI = calculateLabROI({
            seedAmount,
            publicationCount: pi.facultyProfile.publications,
            hIndex: pi.facultyProfile.hIndex,
            pgCount,
            sugCount,
        })

        const lab = await prisma.lab.create({
            data: {
                labName,
                seedAmount,
                piId,
                pgCount,
                sugCount,
                labScore: predictedROI,
            },
        })

        return NextResponse.json({ lab, predictedROI })
    } catch (error) {
        console.error('Lab creation error:', error)
        return NextResponse.json({ error: 'Failed to create lab' }, { status: 500 })
    }
}
