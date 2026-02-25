import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

/**
 * Evaluate research proposal using AI
 */
export async function evaluateProposal(proposal: {
    title: string
    methodology?: string
    budget?: number
    callTitle: string
}): Promise<{
    score: number
    clarity: number
    novelty: number
    feasibility: number
    impact: number
    fundingAlignment: number
    suggestions: string[]
    riskFlags: string[]
}> {
    const prompt = `Evaluate the following research proposal:

Title: ${proposal.title}
Methodology: ${proposal.methodology || 'Not provided'}
Budget: ${proposal.budget ? `₹${proposal.budget}` : 'Not specified'}
Funding Call: ${proposal.callTitle}

Evaluate based on:
1. Clarity (0-100): How clear and well-structured is the proposal?
2. Novelty (0-100): How innovative and original is the research?
3. Feasibility (0-100): How realistic is the implementation?
4. Impact (0-100): What is the potential research impact?
5. Funding Alignment (0-100): How well does it match the funding call?

Provide:
- Scores for each criterion
- 3-5 improvement suggestions
- Any risk flags

Return as JSON with structure:
{
  "clarity": number,
  "novelty": number,
  "feasibility": number,
  "impact": number,
  "fundingAlignment": number,
  "suggestions": string[],
  "riskFlags": string[]
}`

    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'system',
                content: 'You are an expert research proposal evaluator. Provide constructive, actionable feedback.',
            },
            { role: 'user', content: prompt },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
    })

    const result = JSON.parse(response.choices[0].message.content || '{}')

    const score =
        (result.clarity * 0.2 +
            result.novelty * 0.25 +
            result.feasibility * 0.2 +
            result.impact * 0.25 +
            result.fundingAlignment * 0.1)

    return {
        score: Math.round(score),
        ...result,
    }
}

/**
 * Generate research suggestions for students
 */
export async function generateResearchSuggestions(domain: string): Promise<string[]> {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'system',
                content: 'You are a research mentor helping students identify research problems.',
            },
            {
                role: 'user',
                content: `Suggest 5 current research problems in the domain of ${domain} suitable for undergraduate/postgraduate students.`,
            },
        ],
        temperature: 0.8,
    })

    const content = response.choices[0].message.content || ''
    return content.split('\n').filter((line: string) => line.trim().length > 0).slice(0, 5)
}

/**
 * Calculate Lab ROI prediction
 */
export function calculateLabROI(params: {
    seedAmount: number
    publicationCount: number
    hIndex: number
    pgCount: number
    sugCount: number
}): number {
    const publicationWeight = params.publicationCount * 0.3
    const hIndexWeight = params.hIndex * 0.25
    const teamWeight = (params.pgCount * 2 + params.sugCount) * 0.15
    const fundingProbability = 0.3 // 30% success rate

    const predictedROI =
        params.seedAmount * (publicationWeight + hIndexWeight + teamWeight) * fundingProbability

    return Math.round(predictedROI)
}
