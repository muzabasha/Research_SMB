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
    // Phase 2: Execution
    {
        id: 4,
        phase: "Execution",
        title: "Research Implementation",
        subtitle: "Build Your Solution",
        duration: "6-12 months",
        description: "Transform from 'I have a plan' to 'I have results!' Implement your research solution systematically with weekly milestones, continuous experimentation, and data collection. This is where theory meets reality!",
        learningObjectives: [
            "Break research into weekly milestones",
            "Set up experiments and data collection",
            "Document methodology rigorously",
            "Iterate based on results",
            "Maintain research journal"
        ],
        transformation: {
            from: "Theory (I have a plan)",
            to: "Practice (I have results)"
        },
        prerequisites: ["Research gap from Stage 3", "Methodology designed", "Resources identified"],
        outcomes: [
            "Working prototype or solution",
            "Experimental data collected",
            "Results documented",
            "Challenges identified and addressed"
        ],
        activityType: "Build-a-thon Sprint",
        activityDuration: "6-12 months",
        dosList: [
            "Break work into 2-week sprints",
            "Document everything (code, data, decisions)",
            "Meet weekly with supervisor",
            "Test incrementally, not at the end",
            "Keep a research journal",
            "Share progress with peers"
        ],
        dontsList: [
            "Don't disappear for 6 months and then show up",
            "Don't skip documentation ('I'll do it later')",
            "Don't ignore negative results (they're valuable!)",
            "Don't work in isolation without feedback",
            "Don't change methodology mid-way without reason"
        ],
        successStory: {
            quote: "I broke my 12-month research into 24 sprints. Every 2 weeks, I had something to show. When things didn't work, I pivoted quickly. Finished in 10 months with solid results!",
            author: "Amit Kumar",
            role: "PhD Scholar, Machine Learning"
        }
    },
    {
        id: 5,
        phase: "Execution",
        title: "Research Paper Drafting",
        subtitle: "Write for Publication",
        duration: "2-3 months",
        description: "Transform from 'I'll write later' to 'My paper is submitted!' Learn the art and science of academic writing. Structure your paper using IMRaD format, write clearly, and target the right journal.",
        learningObjectives: [
            "Master IMRaD structure (Intro, Methods, Results, Discussion)",
            "Write clear, concise academic prose",
            "Create effective figures and tables",
            "Target appropriate journals",
            "Handle peer review feedback"
        ],
        transformation: {
            from: "Doer (I have results)",
            to: "Communicator (I published!)"
        },
        prerequisites: ["Research results from Stage 4", "Data analysis complete", "Figures prepared"],
        outcomes: [
            "Complete paper draft",
            "Paper submitted to journal",
            "Peer review feedback received",
            "Revisions completed"
        ],
        activityType: "30-Day Writing Sprint",
        activityDuration: "30 days intensive",
        dosList: [
            "Write 500 words daily (consistency > perfection)",
            "Follow journal's author guidelines exactly",
            "Get feedback from 3 peers before submitting",
            "Use reference manager (Zotero/Mendeley)",
            "Proofread 3 times before submission",
            "Respond to reviewers respectfully"
        ],
        dontsList: [
            "Don't wait for 'perfect' results to start writing",
            "Don't copy-paste from other papers (plagiarism!)",
            "Don't ignore journal formatting guidelines",
            "Don't submit without peer review first",
            "Don't take reviewer comments personally",
            "Don't submit to predatory journals"
        ],
        successStory: {
            quote: "I procrastinated for 6 months. Then joined a 30-day writing challenge. Wrote 500 words daily. Day 30: paper submitted. Day 90: accepted! Writing daily was the key.",
            author: "Divya Menon",
            role: "Assistant Professor, Biotechnology"
        }
    },
    {
        id: 6,
        phase: "Execution",
        title: "Patent Drafting",
        subtitle: "Protect Your Innovation",
        duration: "1-2 months",
        description: "Transform research into intellectual property! Learn to identify patentable aspects, document novelty, draft claims, and file patent applications. Your research can be both published AND patented!",
        learningObjectives: [
            "Identify patentable aspects of research",
            "Conduct prior art search",
            "Draft patent claims (independent & dependent)",
            "Create detailed drawings and flowcharts",
            "Understand patent filing process"
        ],
        transformation: {
            from: "Researcher (I have results)",
            to: "Innovator (I have IP!)"
        },
        prerequisites: ["Novel solution from Stage 4", "Technical documentation", "Proof of concept"],
        outcomes: [
            "Patent draft ready",
            "Prior art search completed",
            "Patent application filed",
            "Patent number received"
        ],
        activityType: "Innovation Documentation Workshop",
        activityDuration: "4 weeks",
        dosList: [
            "File patent BEFORE publishing paper",
            "Document every novel aspect clearly",
            "Use patent attorney for final draft",
            "Include detailed diagrams and flowcharts",
            "File provisional patent first (cheaper)",
            "Consider international filing (PCT)"
        ],
        dontsList: [
            "Don't publish before filing patent (you'll lose rights!)",
            "Don't copy claims from other patents",
            "Don't skip prior art search",
            "Don't file without attorney review",
            "Don't assume everything is patentable",
            "Don't ignore patent maintenance fees"
        ],
        successStory: {
            quote: "I published my paper first, then tried to patent - too late! Lost IP rights. Second time, I filed provisional patent, then published. Now I have both paper AND patent!",
            author: "Dr. Rajesh Iyer",
            role: "Associate Professor, Electronics"
        }
    },
    // Phase 3: Funding
    {
        id: 7,
        phase: "Funding",
        title: "Seed Money Proposal",
        subtitle: "Get Institutional Funding",
        duration: "2-3 weeks",
        description: "Transform from 'I need money' to 'I secured funding!' Draft your first institutional seed grant proposal. Learn to write compelling objectives, methodology, budget, and expected outcomes. Start small, think big!",
        learningObjectives: [
            "Understand seed grant requirements",
            "Write SMART objectives",
            "Create realistic budget with justification",
            "Define clear deliverables and timeline",
            "Present proposal effectively"
        ],
        transformation: {
            from: "Dependent (I need money)",
            to: "Proposer (I secured funding!)"
        },
        prerequisites: ["Research plan from Stage 4", "Preliminary results", "Budget estimate"],
        outcomes: [
            "Seed grant proposal submitted",
            "Funding secured (₹50K-5L)",
            "Budget approved",
            "Project timeline set"
        ],
        activityType: "Proposal Boot Camp",
        activityDuration: "2 weeks intensive",
        dosList: [
            "Read previous successful proposals",
            "Align with institutional priorities",
            "Create detailed, justified budget",
            "Show preliminary results/proof of concept",
            "Get feedback from funded colleagues",
            "Submit before deadline (not on deadline!)"
        ],
        dontsList: [
            "Don't ask for money without clear plan",
            "Don't inflate budget unrealistically",
            "Don't copy-paste from other proposals",
            "Don't ignore institutional guidelines",
            "Don't submit without proofreading",
            "Don't give up after first rejection"
        ],
        successStory: {
            quote: "First seed proposal: rejected. I asked for feedback, revised, resubmitted. Got ₹2L! Used it for equipment, published 2 papers, then got ₹25L national grant!",
            author: "Dr. Kavita Sharma",
            role: "Assistant Professor, Chemistry"
        }
    },
    {
        id: 8,
        phase: "Funding",
        title: "National Funding Proposal",
        subtitle: "Scale to National Level",
        duration: "1-2 months",
        description: "Transform from institutional to national funding! Target SERB, DST, ICMR, DBT, AICTE, UGC. Learn to write competitive proposals that reviewers love. National funding = national recognition!",
        learningObjectives: [
            "Understand national funding landscape",
            "Write literature review for proposals",
            "Design multi-year research plan",
            "Create comprehensive budget (₹10L-50L)",
            "Address reviewer concerns proactively"
        ],
        transformation: {
            from: "Local (Institutional funding)",
            to: "National (SERB/DST funded!)"
        },
        prerequisites: ["Preliminary results", "2-3 publications", "Institutional support"],
        outcomes: [
            "National grant proposal submitted",
            "Funding secured (₹10L-50L)",
            "3-year research plan approved",
            "National recognition"
        ],
        activityType: "Grant Writing Intensive",
        activityDuration: "6 weeks",
        dosList: [
            "Study funded proposals in your domain",
            "Highlight novelty and national relevance",
            "Show strong publication track record",
            "Get institutional endorsement letter",
            "Address all evaluation criteria",
            "Submit to multiple schemes"
        ],
        dontsList: [
            "Don't apply without publications",
            "Don't ignore scheme-specific requirements",
            "Don't underestimate competition",
            "Don't skip the 'broader impact' section",
            "Don't submit generic proposals",
            "Don't miss resubmission opportunities"
        ],
        successStory: {
            quote: "Applied to SERB 3 times. First two: rejected. Third time: incorporated reviewer feedback, highlighted societal impact. Got ₹35L for 3 years! Persistence pays!",
            author: "Dr. Suresh Patel",
            role: "Associate Professor, Civil Engineering"
        }
    },
    {
        id: 9,
        phase: "Funding",
        title: "International Funding Proposal",
        subtitle: "Go Global",
        duration: "2-3 months",
        description: "Transform from national to international researcher! Target NSF, EU Horizon, NIH, Wellcome Trust, Gates Foundation. Learn to write globally competitive proposals with international collaborations. Think global, act local!",
        learningObjectives: [
            "Understand international funding landscape",
            "Build international collaborations",
            "Write globally competitive proposals",
            "Address global challenges",
            "Manage international projects"
        ],
        transformation: {
            from: "National (India-focused)",
            to: "International (Global impact!)"
        },
        prerequisites: ["Strong publication record", "International collaborations", "National funding success"],
        outcomes: [
            "International grant proposal submitted",
            "Funding secured (₹50L-5Cr)",
            "International partnerships established",
            "Global recognition"
        ],
        activityType: "Global Grant Challenge",
        activityDuration: "8 weeks",
        dosList: [
            "Partner with international researchers",
            "Address global challenges (SDGs)",
            "Show international publication record",
            "Highlight unique Indian context/data",
            "Get letters of support from partners",
            "Budget for international travel/collaboration"
        ],
        dontsList: [
            "Don't apply without international network",
            "Don't ignore cultural/regional differences",
            "Don't underestimate proposal complexity",
            "Don't skip the 'global impact' narrative",
            "Don't forget currency conversion in budget",
            "Don't ignore intellectual property clauses"
        ],
        successStory: {
            quote: "Collaborated with MIT professor I met at conference. Co-wrote EU Horizon proposal. Got €500K! International funding opened doors I never imagined. Network globally!",
            author: "Dr. Meera Krishnan",
            role: "Professor, Computational Biology"
        }
    },
    // Phase 4: Lab Development
    {
        id: 10,
        phase: "Lab Development",
        title: "Seed Lab Setup",
        subtitle: "Build Your Research Lab",
        duration: "3-6 months",
        description: "Transform from 'I work in someone else's lab' to 'I have my own lab!' Plan equipment, space, safety protocols, and team structure. Your lab = your research identity. Build it right!",
        learningObjectives: [
            "Design lab layout and workflow",
            "Procure essential equipment",
            "Establish safety protocols",
            "Recruit and train team members",
            "Set up lab management systems"
        ],
        transformation: {
            from: "Individual (I work alone)",
            to: "Team Leader (I lead a lab!)"
        },
        prerequisites: ["Seed funding from Stage 7", "Space allocated", "Equipment list ready"],
        outcomes: [
            "Functional lab operational",
            "Equipment installed and calibrated",
            "Team recruited (2-3 members)",
            "First experiments running"
        ],
        activityType: "Lab Design Workshop",
        activityDuration: "3 months",
        dosList: [
            "Prioritize essential equipment first",
            "Plan for future expansion",
            "Establish SOPs from day 1",
            "Train team on safety protocols",
            "Set up lab notebook system",
            "Create equipment maintenance schedule"
        ],
        dontsList: [
            "Don't buy equipment without training plan",
            "Don't ignore safety regulations",
            "Don't micromanage your team",
            "Don't skip equipment calibration",
            "Don't forget consumables budget",
            "Don't work in isolation - collaborate!"
        ],
        successStory: {
            quote: "Got ₹5L seed money. Spent ₹4L on one fancy equipment, ₹1L on everything else. Big mistake! Second lab: distributed budget wisely. Much more productive!",
            author: "Dr. Arun Desai",
            role: "Assistant Professor, Materials Science"
        }
    },
    {
        id: 11,
        phase: "Lab Development",
        title: "Preliminary Research to TRL 1-3",
        subtitle: "Build Proof of Concept",
        duration: "6-12 months",
        description: "Transform from 'I have an idea' to 'I have a working prototype!' Move from Technology Readiness Level (TRL) 1 (basic principles) to TRL 3 (proof of concept). Show it works in lab conditions!",
        learningObjectives: [
            "Understand TRL framework (1-9)",
            "Design proof-of-concept experiments",
            "Build and test prototypes",
            "Document technical feasibility",
            "Prepare for scale-up"
        ],
        transformation: {
            from: "Theory (I have an idea)",
            to: "Prototype (It works in lab!)"
        },
        prerequisites: ["Lab setup from Stage 10", "Research team", "Equipment operational"],
        outcomes: [
            "Working prototype (TRL 3)",
            "Technical feasibility proven",
            "Performance data collected",
            "Scale-up plan ready"
        ],
        activityType: "Prototype Sprint",
        activityDuration: "6 months",
        dosList: [
            "Start simple, iterate quickly",
            "Test early and often",
            "Document every experiment",
            "Measure performance metrics",
            "Compare with existing solutions",
            "Plan for next TRL levels"
        ],
        dontsList: [
            "Don't aim for perfection in first prototype",
            "Don't skip baseline comparisons",
            "Don't ignore failure modes",
            "Don't work without safety protocols",
            "Don't forget to patent before publishing",
            "Don't scale up without validation"
        ],
        successStory: {
            quote: "Built 7 prototypes. First 6 failed. Learned from each failure. Prototype 7: worked! Published paper, filed patent, got ₹50L to scale up. Failure is part of research!",
            author: "Dr. Lakshmi Narayan",
            role: "Associate Professor, Mechanical Engineering"
        }
    },
    {
        id: 12,
        phase: "Lab Development",
        title: "Extended Lab with Major Funding",
        subtitle: "Scale Your Operations",
        duration: "12-24 months",
        description: "Transform from small lab to major research facility! Use national/international funding to expand team, equipment, and research scope. Move from TRL 3 to TRL 6 (pilot scale). Think big, scale smart!",
        learningObjectives: [
            "Manage large research grants",
            "Scale team (5-10 members)",
            "Procure advanced equipment",
            "Establish collaborations",
            "Publish high-impact papers"
        ],
        transformation: {
            from: "Small (3-person lab)",
            to: "Scaled (10+ person facility!)"
        },
        prerequisites: ["Major funding from Stage 8/9", "TRL 3 prototype", "Publication record"],
        outcomes: [
            "Expanded lab (3x space)",
            "Team of 10+ members",
            "Advanced equipment installed",
            "Multiple projects running",
            "High-impact publications"
        ],
        activityType: "Scale-Up Planning",
        activityDuration: "12 months",
        dosList: [
            "Hire diverse team (skills + backgrounds)",
            "Invest in training and development",
            "Establish clear roles and responsibilities",
            "Create collaborative culture",
            "Plan for sustainability beyond grant",
            "Mentor junior researchers"
        ],
        dontsList: [
            "Don't expand too fast (quality > quantity)",
            "Don't ignore team dynamics",
            "Don't micromanage scaled operations",
            "Don't forget original research vision",
            "Don't neglect grant reporting",
            "Don't burn out yourself or team"
        ],
        successStory: {
            quote: "Got ₹2Cr grant. Hired 12 people in 3 months. Chaos! Learned to hire slowly, train thoroughly. Now we're productive, happy, and publishing 10 papers/year!",
            author: "Dr. Venkat Raman",
            role: "Professor, Nanotechnology"
        }
    },
    // Phase 5: Excellence
    {
        id: 13,
        phase: "Excellence",
        title: "Tangible Outcomes & Industry Collaboration",
        subtitle: "Create Real-World Impact",
        duration: "12-18 months",
        description: "Transform from academic to applied research! Develop products, file patents, publish papers, and collaborate with industry. Move from TRL 6 to TRL 9 (market ready). Research that matters!",
        learningObjectives: [
            "Develop market-ready products",
            "Establish industry partnerships",
            "Manage technology transfer",
            "Generate revenue from research",
            "Create societal impact"
        ],
        transformation: {
            from: "Academic (Lab-only research)",
            to: "Applied (Market-ready products!)"
        },
        prerequisites: ["Extended lab from Stage 12", "TRL 6 prototype", "Industry connections"],
        outcomes: [
            "Products developed (TRL 9)",
            "Industry partnerships (3-5)",
            "Patents filed (5-10)",
            "Revenue generated",
            "Societal impact demonstrated"
        ],
        activityType: "Industry Partnership Summit",
        activityDuration: "12 months",
        dosList: [
            "Identify industry pain points",
            "Customize solutions for industry needs",
            "Establish clear IP agreements",
            "Create win-win partnerships",
            "Measure and document impact",
            "Publish case studies"
        ],
        dontsList: [
            "Don't give away IP without agreements",
            "Don't ignore market needs",
            "Don't expect industry to fund basic research",
            "Don't compromise academic freedom",
            "Don't forget to publish (industry allows it!)",
            "Don't work with just one company"
        ],
        successStory: {
            quote: "Partnered with 5 companies. Customized our tech for each. Generated ₹50L revenue, filed 8 patents, published 12 papers. Industry collaboration ≠ selling out!",
            author: "Dr. Anita Deshmukh",
            role: "Professor, Industrial Biotechnology"
        }
    },
    {
        id: 14,
        phase: "Excellence",
        title: "Center of Excellence Establishment",
        subtitle: "Build an Institution",
        duration: "24-36 months",
        description: "Transform from lab to institution! Create vision, governance, and sustainability plan for Center of Excellence. Become the go-to place for your research domain. Build legacy!",
        learningObjectives: [
            "Design CoE vision and mission",
            "Establish governance structure",
            "Create sustainability model",
            "Build national/international reputation",
            "Mentor next generation of researchers"
        ],
        transformation: {
            from: "Lab (One research group)",
            to: "Institution (Center of Excellence!)"
        },
        prerequisites: ["Industry collaborations from Stage 13", "Strong reputation", "Sustained funding"],
        outcomes: [
            "Center of Excellence established",
            "Multi-stakeholder governance",
            "Sustainable funding model",
            "National recognition",
            "20+ researchers"
        ],
        activityType: "CoE Design Charrette",
        activityDuration: "24 months",
        dosList: [
            "Define clear focus area (don't be everything)",
            "Build diverse advisory board",
            "Create multiple revenue streams",
            "Establish international collaborations",
            "Invest in infrastructure and people",
            "Plan for 10-year sustainability"
        ],
        dontsList: [
            "Don't create CoE just for name",
            "Don't depend on single funding source",
            "Don't ignore institutional politics",
            "Don't forget to document processes",
            "Don't neglect succession planning",
            "Don't lose sight of research quality"
        ],
        successStory: {
            quote: "Started with 3 people in 2015. Today: 25 researchers, ₹5Cr annual budget, partnerships with 15 companies, recognized as national CoE. Dream big, work systematically!",
            author: "Dr. Ramesh Kumar",
            role: "Director, Center for AI & Robotics"
        }
    },
    {
        id: 15,
        phase: "Excellence",
        title: "Academic Program Launch (UG/PG)",
        subtitle: "Educate Next Generation",
        duration: "12-24 months",
        description: "Transform from researcher to educator! Design NEP 2020 compliant academic program using your Center of Excellence. Create curriculum, recruit faculty, admit students. Your research becomes education!",
        learningObjectives: [
            "Design NEP 2020 compliant curriculum",
            "Establish program governance",
            "Recruit qualified faculty",
            "Set up admission process",
            "Create industry-academia bridge"
        ],
        transformation: {
            from: "Researcher (I do research)",
            to: "Educator (I shape future!)"
        },
        prerequisites: ["Center of Excellence from Stage 14", "University approval", "Faculty team"],
        outcomes: [
            "New UG/PG program launched",
            "First batch admitted",
            "NEP 2020 compliant curriculum",
            "Industry-integrated learning",
            "Research-teaching synergy"
        ],
        activityType: "Curriculum Design Workshop",
        activityDuration: "12 months",
        dosList: [
            "Align with NEP 2020 (multidisciplinary, flexible)",
            "Integrate research into teaching",
            "Create industry internship opportunities",
            "Design outcome-based curriculum",
            "Establish continuous assessment",
            "Plan for program accreditation"
        ],
        dontsList: [
            "Don't copy existing programs",
            "Don't ignore industry requirements",
            "Don't create theory-heavy curriculum",
            "Don't forget hands-on learning (80%!)",
            "Don't neglect soft skills development",
            "Don't launch without proper planning"
        ],
        successStory: {
            quote: "Launched M.Tech in AI & Robotics using our CoE. 80% hands-on, industry projects, research integration. First batch: 100% placement, 5 startups! Education + Research = Magic!",
            author: "Dr. Priya Nair",
            role: "Dean, School of Advanced Computing"
        }
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
