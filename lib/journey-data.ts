// Research Journey Data - 15 Stages from Zero to Excellence

export interface JourneyStage {
    id: number
    phase: string
    title: string
    subtitle: string
    duration: string
    description: string
    learningObjectives: string[]
    transformation: {
        from: string
        to: string
    }
    prerequisites: string[]
    outcomes: string[]
    activityType: string
    activityDuration: string
    dosList: string[]
    dontsList: string[]
    successStory: {
        quote: string
        author: string
        role: string
    }
}

export const JOURNEY_STAGES: JourneyStage[] = [
    // Phase 1: Foundation
    {
        id: 1,
        phase: "Foundation",
        title: "Domain Knowledge Discovery",
        subtitle: "Find Your Research Passion",
        duration: "2-4 weeks",
        description: "Explore multiple research domains and identify the one that excites you. This is like dating before marriage - explore before committing to 2-5 years of research!",
        learningObjectives: [
            "Explore 5 different research domains",
            "Understand current trends and challenges in each domain",
            "Identify problems that personally interest you",
            "Make an informed domain choice based on passion, not trends"
        ],
        transformation: {
            from: "Rigid (I don't know what to research)",
            to: "Open (I'm passionate about [specific domain])"
        },
        prerequisites: ["Curiosity", "Open mind", "Willingness to explore"],
        outcomes: [
            "Clear domain choice with reasoning",
            "List of 3-5 interesting problems in chosen domain",
            "Understanding of domain landscape",
            "Excitement and motivation to proceed"
        ],
        activityType: "Domain Dating Workshop",
        activityDuration: "90 minutes",
        dosList: [
            "Explore 5 different domains (not just 1)",
            "Read 2-3 recent papers in each domain",
            "Talk to researchers in those domains",
            "Identify problems that bug you personally",
            "Check funding availability in that domain"
        ],
        dontsList: [
            "Don't pick based on 'what's hot' or trending",
            "Don't choose because your friend chose it",
            "Don't select based on perceived 'easiness'",
            "Don't commit without exploring alternatives",
            "Don't ignore your natural curiosity"
        ],
        successStory: {
            quote: "I thought I'd do AI because everyone was doing it. Hated it. Then I explored healthcare tech - found my calling! Now I have 5 papers and love my research!",
            author: "Dr. Priya Sharma",
            role: "Assistant Professor, REVA University"
        }
    },
    {
        id: 2,
        phase: "Foundation",
        title: "Research Article Reading",
        subtitle: "Master Critical Reading Skills",
        duration: "4-6 weeks",
        description: "Transform from 'papers are boring and confusing' to 'I can critically analyze research papers'. Learn strategic reading techniques and build your research knowledge base.",
        learningObjectives: [
            "Master the 3-pass reading method",
            "Take structured notes from papers",
            "Identify key elements: problem, solution, gap, contribution",
            "Read 20 papers systematically in your domain"
        ],
        transformation: {
            from: "Consumer (Papers are intimidating)",
            to: "Analyst (I can critically read papers)"
        },
        prerequisites: ["Domain choice from Stage 1", "Basic English reading skills", "Note-taking tools"],
        outcomes: [
            "20 papers read with structured notes",
            "Paper summary database created",
            "Understanding of research landscape",
            "Confidence in reading academic papers"
        ],
        activityType: "Paper Reading Marathon",
        activityDuration: "2 hours",
        dosList: [
            "Use the 3-Pass Method (Skim → Read → Deep dive)",
            "Take structured notes (not random highlights)",
            "Create a paper summary template",
            "Read 20 papers in your domain (4 per week)",
            "Discuss papers with peers"
        ],
        dontsList: [
            "Don't hoard 100 papers without reading",
            "Don't read linearly from start to finish",
            "Don't highlight everything (= highlighting nothing)",
            "Don't read alone - discuss with others",
            "Don't skip the methodology section"
        ],
        successStory: {
            quote: "I used to download 50 papers and read none. Then I committed to 3 papers/week with notes. In 2 months, I identified my research gap!",
            author: "Rahul Verma",
            role: "PhD Scholar, Computer Science"
        }
    },
    {
        id: 3,
        phase: "Foundation",
        title: "Research Gap Identification",
        subtitle: "Find Your Research Opportunity",
        duration: "3-4 weeks",
        description: "Transform from 'everything has been done' to 'I found 5 research gaps!' Learn to identify meaningful gaps that can become your research contribution.",
        learningObjectives: [
            "Understand different types of research gaps",
            "Identify gaps from literature review",
            "Validate gaps using 4 criteria (Novel, Important, Feasible, Interesting)",
            "Choose one validated gap to pursue"
        ],
        transformation: {
            from: "Passive (Everything is already done)",
            to: "Active (I found research opportunities)"
        },
        prerequisites: ["20 papers read from Stage 2", "Understanding of domain", "Critical thinking skills"],
        outcomes: [
            "5-10 potential gaps identified",
            "3 gaps validated with supervisor",
            "1 gap chosen for research",
            "Clear problem statement drafted"
        ],
        activityType: "Gap Hunting Challenge",
        activityDuration: "90 minutes",
        dosList: [
            "Read 'Future Work' sections in papers",
            "Look for contradictory results across papers",
            "Identify limitations in current methods",
            "Find problems mentioned but not solved",
            "Validate gap with supervisor/experts"
        ],
        dontsList: [
            "Don't force a gap that doesn't exist",
            "Don't pick a gap just because it's easy",
            "Don't ignore if someone already solved it",
            "Don't choose a gap without checking feasibility",
            "Don't work on a gap without passion"
        ],
        successStory: {
            quote: "I read 25 papers. Found 10 gaps. Discussed with my guide. 3 were already solved, 4 were too hard, 2 were unfeasible. But 1 was perfect - that became my PhD!",
            author: "Sneha Reddy",
            role: "PhD Scholar, Biotechnology"
        }
    },
    // Phase 2: Execution (Placeholders - to be detailed)
    {
        id: 4,
        phase: "Execution",
        title: "Research Implementation",
        subtitle: "Build Your Solution",
        duration: "6-12 months",
        description: "Transform from planning to doing. Implement your research solution with weekly milestones and continuous feedback.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Planning", to: "Doing" },
        prerequisites: ["Research gap from Stage 3"],
        outcomes: ["Working prototype/solution"],
        activityType: "Build-a-thon",
        activityDuration: "Ongoing",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 5,
        phase: "Execution",
        title: "Research Paper Drafting",
        subtitle: "Write for Publication",
        duration: "2-3 months",
        description: "Transform from thinking to writing. Draft your first research paper in 30 days with peer review.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Thinking", to: "Writing" },
        prerequisites: ["Research results from Stage 4"],
        outcomes: ["Complete paper draft"],
        activityType: "Writing Sprint",
        activityDuration: "30 days",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 6,
        phase: "Execution",
        title: "Patent Drafting",
        subtitle: "Protect Your Innovation",
        duration: "1-2 months",
        description: "Transform research into innovation. Document novelty and create patent draft.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Research", to: "Innovation" },
        prerequisites: ["Novel solution from Stage 4"],
        outcomes: ["Patent draft ready"],
        activityType: "Innovation Documentation",
        activityDuration: "4 weeks",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    // Phase 3: Funding (Placeholders)
    {
        id: 7,
        phase: "Funding",
        title: "Seed Money Proposal",
        subtitle: "Get Institutional Funding",
        duration: "2-3 weeks",
        description: "Draft institutional seed grant proposal to kickstart your research.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Asking", to: "Proposing" },
        prerequisites: ["Research plan from Stage 4"],
        outcomes: ["Seed grant proposal"],
        activityType: "Proposal Boot Camp",
        activityDuration: "2 weeks",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 8,
        phase: "Funding",
        title: "National Funding Proposal",
        subtitle: "Scale Nationally",
        duration: "1-2 months",
        description: "Target national funding agencies (SERB, DST, ICMR, DBT).",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Local", to: "National" },
        prerequisites: ["Preliminary results"],
        outcomes: ["National grant proposal"],
        activityType: "Grant Writing Intensive",
        activityDuration: "6 weeks",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 9,
        phase: "Funding",
        title: "International Funding Proposal",
        subtitle: "Go Global",
        duration: "2-3 months",
        description: "Target international agencies (NSF, EU, etc.) for global research.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "National", to: "International" },
        prerequisites: ["Strong publication record"],
        outcomes: ["International grant proposal"],
        activityType: "Global Grant Challenge",
        activityDuration: "8 weeks",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    // Phase 4: Lab Development (Placeholders)
    {
        id: 10,
        phase: "Lab Development",
        title: "Seed Lab Setup",
        subtitle: "Build Your Lab",
        duration: "3-6 months",
        description: "Plan equipment, space, and team structure for your research lab.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Individual", to: "Team Leader" },
        prerequisites: ["Seed funding"],
        outcomes: ["Functional lab"],
        activityType: "Lab Design Workshop",
        activityDuration: "3 months",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 11,
        phase: "Lab Development",
        title: "Preliminary Research to TRL 1-3",
        subtitle: "Build Prototypes",
        duration: "6-12 months",
        description: "Build proof-of-concept and validate hypothesis (TRL 1-3).",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Theory", to: "Prototype" },
        prerequisites: ["Lab setup"],
        outcomes: ["Working prototype"],
        activityType: "Prototype Sprint",
        activityDuration: "6 months",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 12,
        phase: "Lab Development",
        title: "Extended Lab with Major Funding",
        subtitle: "Scale Operations",
        duration: "12-24 months",
        description: "Expand team, equipment, and research scope with major funding.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Small", to: "Scaled" },
        prerequisites: ["Major funding"],
        outcomes: ["Expanded lab"],
        activityType: "Scale-Up Planning",
        activityDuration: "12 months",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    // Phase 5: Excellence (Placeholders)
    {
        id: 13,
        phase: "Excellence",
        title: "Tangible Outcomes & Industry Collaboration",
        subtitle: "Real-World Impact",
        duration: "12-18 months",
        description: "Develop products, file patents, publish papers, and collaborate with industry.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Academic", to: "Applied" },
        prerequisites: ["Extended lab"],
        outcomes: ["Products, patents, papers"],
        activityType: "Industry Partnership Summit",
        activityDuration: "12 months",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 14,
        phase: "Excellence",
        title: "Center of Excellence Establishment",
        subtitle: "Build Institution",
        duration: "24-36 months",
        description: "Create vision, governance, and sustainability plan for Center of Excellence.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Lab", to: "Institution" },
        prerequisites: ["Industry collaborations"],
        outcomes: ["Center of Excellence"],
        activityType: "CoE Design Charrette",
        activityDuration: "24 months",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    },
    {
        id: 15,
        phase: "Excellence",
        title: "Academic Program Launch (UG/PG)",
        subtitle: "Educate Next Generation",
        duration: "12-24 months",
        description: "Design NEP 2020 compliant academic program using your Center of Excellence.",
        learningObjectives: ["Coming soon"],
        transformation: { from: "Researcher", to: "Educator" },
        prerequisites: ["Center of Excellence"],
        outcomes: ["New academic program"],
        activityType: "Curriculum Design Workshop",
        activityDuration: "12 months",
        dosList: ["To be detailed"],
        dontsList: ["To be detailed"],
        successStory: { quote: "Coming soon", author: "TBD", role: "TBD" }
    }
]

export const PHASES = [
    { id: 1, name: "Foundation", stages: [1, 2, 3], color: "blue" },
    { id: 2, name: "Execution", stages: [4, 5, 6], color: "green" },
    { id: 3, name: "Funding", stages: [7, 8, 9], color: "purple" },
    { id: 4, name: "Lab Development", stages: [10, 11, 12], color: "orange" },
    { id: 5, name: "Excellence", stages: [13, 14, 15], color: "red" }
]

export function getStageById(id: number): JourneyStage | undefined {
    return JOURNEY_STAGES.find(stage => stage.id === id)
}

export function getStagesByPhase(phase: string): JourneyStage[] {
    return JOURNEY_STAGES.filter(stage => stage.phase === phase)
}

export function getNextStage(currentId: number): JourneyStage | undefined {
    return JOURNEY_STAGES.find(stage => stage.id === currentId + 1)
}

export function getPreviousStage(currentId: number): JourneyStage | undefined {
    return JOURNEY_STAGES.find(stage => stage.id === currentId - 1)
}
