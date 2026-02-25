import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Seeding database...')

    // Sample Funding Calls
    const fundingCalls = [
        {
            agency: 'DST-SERB',
            title: 'Core Research Grant (CRG) - Artificial Intelligence',
            description: 'Support for fundamental research in AI and Machine Learning',
            deadline: new Date('2026-06-30'),
            domainKeywords: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks'],
            instituteEligibility: ['Universities', 'Research Institutes', 'IITs', 'NITs'],
            piEligibility: 'PhD with 3+ years experience',
            budgetMin: 500000,
            budgetMax: 5000000,
            url: 'https://serb.gov.in/crg',
        },
        {
            agency: 'ICSSR',
            title: 'Major Research Projects - Social Sciences',
            description: 'Research in social sciences and humanities',
            deadline: new Date('2026-08-15'),
            domainKeywords: ['Social Sciences', 'Economics', 'Psychology', 'Sociology'],
            instituteEligibility: ['Universities', 'Colleges'],
            piEligibility: 'PhD in relevant field',
            budgetMin: 300000,
            budgetMax: 2000000,
            url: 'https://icssr.org/mrp',
        },
        {
            agency: 'DBT',
            title: 'Biotechnology Research Grant',
            description: 'Advanced research in biotechnology and life sciences',
            deadline: new Date('2026-07-20'),
            domainKeywords: ['Biotechnology', 'Genomics', 'Proteomics', 'Bioinformatics'],
            instituteEligibility: ['Universities', 'Research Institutes'],
            piEligibility: 'PhD with research publications',
            budgetMin: 1000000,
            budgetMax: 10000000,
            url: 'https://dbtindia.gov.in',
        },
        {
            agency: 'AICTE',
            title: 'Research Promotion Scheme',
            description: 'Support for engineering and technology research',
            deadline: new Date('2026-09-30'),
            domainKeywords: ['Engineering', 'Technology', 'Innovation', 'IoT', 'Robotics'],
            instituteEligibility: ['AICTE Approved Institutions'],
            piEligibility: 'Faculty with PhD',
            budgetMin: 200000,
            budgetMax: 1500000,
            url: 'https://aicte-india.org/rps',
        },
        {
            agency: 'CSIR',
            title: 'Extramural Research Funding',
            description: 'Scientific and industrial research projects',
            deadline: new Date('2026-10-15'),
            domainKeywords: ['Chemistry', 'Physics', 'Materials Science', 'Nanotechnology'],
            instituteEligibility: ['Universities', 'Research Labs'],
            piEligibility: 'PhD with 5+ years experience',
            budgetMin: 800000,
            budgetMax: 8000000,
            url: 'https://csir.res.in',
        },
    ]

    for (const call of fundingCalls) {
        await prisma.fundingCall.create({
            data: call,
        })
    }

    console.log('✅ Created funding calls')

    // Sample Admin User
    const admin = await prisma.user.create({
        data: {
            email: 'admin@university.edu',
            name: 'Admin User',
            role: 'ADMIN',
            department: 'Administration',
        },
    })

    console.log('✅ Created admin user')

    // Sample Faculty Users
    const faculty1 = await prisma.user.create({
        data: {
            email: 'dr.smith@university.edu',
            name: 'Dr. John Smith',
            role: 'FACULTY',
            department: 'Computer Science',
            designation: 'Associate Professor',
            facultyProfile: {
                create: {
                    publications: 45,
                    hIndex: 18,
                    citations: 850,
                    keywords: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision'],
                    domainVector: Array(1536).fill(0.1), // Placeholder
                    pastFunding: [
                        {
                            agency: 'DST',
                            amount: 1200000,
                            year: 2023,
                            title: 'AI for Healthcare',
                        },
                    ],
                },
            },
        },
    })

    const faculty2 = await prisma.user.create({
        data: {
            email: 'dr.johnson@university.edu',
            name: 'Dr. Sarah Johnson',
            role: 'FACULTY',
            department: 'Biotechnology',
            designation: 'Professor',
            facultyProfile: {
                create: {
                    publications: 62,
                    hIndex: 24,
                    citations: 1450,
                    keywords: ['Genomics', 'Proteomics', 'Bioinformatics', 'Molecular Biology'],
                    domainVector: Array(1536).fill(0.1),
                    pastFunding: [
                        {
                            agency: 'DBT',
                            amount: 3500000,
                            year: 2022,
                            title: 'Genomic Analysis Platform',
                        },
                    ],
                },
            },
        },
    })

    console.log('✅ Created faculty users')

    // Sample Student
    const student = await prisma.user.create({
        data: {
            email: 'student@university.edu',
            name: 'Alex Kumar',
            role: 'STUDENT',
            department: 'Computer Science',
        },
    })

    console.log('✅ Created student user')

    // Sample Lab
    const lab = await prisma.lab.create({
        data: {
            labName: 'AI Research Lab',
            seedAmount: 500000,
            piId: faculty1.id,
            pgCount: 3,
            sugCount: 5,
            labScore: 75.5,
            roadmap: {
                milestones: [
                    { month: 1, task: 'Setup infrastructure' },
                    { month: 3, task: 'First publication' },
                    { month: 6, task: 'Grant application' },
                ],
            },
            outputs: {
                publications: 2,
                patents: 0,
                conferences: 3,
            },
        },
    })

    console.log('✅ Created sample lab')

    console.log('🎉 Seeding completed!')
    console.log('\n📧 Sample Credentials:')
    console.log('Admin: admin@university.edu')
    console.log('Faculty 1: dr.smith@university.edu')
    console.log('Faculty 2: dr.johnson@university.edu')
    console.log('Student: student@university.edu')
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
