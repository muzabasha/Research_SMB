import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

/**
 * Generate embedding vector for text using OpenAI
 */
export async function generateEmbedding(text: string): Promise<number[]> {
    const response = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: text,
    })
    return response.data[0].embedding
}

/**
 * Calculate cosine similarity between two vectors
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) {
        throw new Error('Vectors must have the same length')
    }

    let dotProduct = 0
    let normA = 0
    let normB = 0

    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i]
        normA += vecA[i] * vecA[i]
        normB += vecB[i] * vecB[i]
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

/**
 * Calculate relevance score between faculty and funding call
 */
export interface RelevanceInput {
    facultyKeywords: string[]
    facultyPublications: number
    facultyHIndex: number
    facultyCitations: number
    facultyPastFunding: any[]
    facultyDomainVector: number[]

    callKeywords: string[]
    callDomainVector: number[]
    callBudgetMin?: number
    callBudgetMax?: number
    callPiEligibility?: string
}

export async function calculateRelevanceScore(input: RelevanceInput): Promise<{
    totalScore: number
    domainSimilarity: number
    publicationMatch: number
    eligibilityCompliance: number
    thematicAlignment: number
    pastFundingSimilarity: number
    collaborationScore: number
    outcomeCapability: number
    institutionalAlignment: number
}> {
    // 1. Domain Similarity (25%) - Using embeddings
    const domainSimilarity = cosineSimilarity(
        input.facultyDomainVector,
        input.callDomainVector
    ) * 100

    // 2. Publication Match (15%) - Based on h-index and citations
    const publicationMatch = Math.min(
        ((input.facultyHIndex / 50) * 0.6 + (input.facultyPublications / 100) * 0.4) * 100,
        100
    )

    // 3. Eligibility Compliance (15%)
    const eligibilityCompliance = 100 // Simplified - should check actual eligibility

    // 4. Thematic Alignment (10%) - Keyword overlap
    const keywordOverlap = input.facultyKeywords.filter(k =>
        input.callKeywords.some(ck => ck.toLowerCase().includes(k.toLowerCase()))
    ).length
    const thematicAlignment = Math.min((keywordOverlap / input.callKeywords.length) * 100, 100)

    // 5. Past Funding Similarity (10%)
    const pastFundingSimilarity = input.facultyPastFunding.length > 0 ? 75 : 30

    // 6. Collaboration Score (10%)
    const collaborationScore = 70 // Placeholder

    // 7. Outcome Capability (10%)
    const outcomeCapability = Math.min((input.facultyCitations / 500) * 100, 100)

    // 8. Institutional Alignment (5%)
    const institutionalAlignment = 80 // Placeholder

    // Calculate weighted total
    const totalScore =
        domainSimilarity * 0.25 +
        publicationMatch * 0.15 +
        eligibilityCompliance * 0.15 +
        thematicAlignment * 0.10 +
        pastFundingSimilarity * 0.10 +
        collaborationScore * 0.10 +
        outcomeCapability * 0.10 +
        institutionalAlignment * 0.05

    return {
        totalScore: Math.round(totalScore * 100) / 100,
        domainSimilarity,
        publicationMatch,
        eligibilityCompliance,
        thematicAlignment,
        pastFundingSimilarity,
        collaborationScore,
        outcomeCapability,
        institutionalAlignment,
    }
}
