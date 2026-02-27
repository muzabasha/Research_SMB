// Research Journey Data - 15 Stages from Zero to Excellence

export interface SubStage {
    id: string
    title: string
    description: string
    duration: string
    deliverable: string
}

export interface Activity {
    id: string
    title: string
    type: string
    duration: string
    description: string
    steps: string[]
    materials: string[]
    expectedOutput: string
}

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
    subStages: SubStage[]
    activities: Activity[]
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
        subStages: [
            {
                id: "1.1",
                title: "Domain Exploration",
                description: "Explore 5 different research domains through papers, videos, and researcher interviews",
                duration: "1 week",
                deliverable: "Domain comparison matrix with ratings"
            },
            {
                id: "1.2",
                title: "Problem Identification",
                description: "Identify 3-5 interesting problems in each explored domain",
                duration: "1 week",
                deliverable: "Problem list with personal interest ratings"
            },
            {
                id: "1.3",
                title: "Domain Selection",
                description: "Choose your primary domain based on passion, feasibility, and funding",
                duration: "3 days",
                deliverable: "Domain choice document with justification"
            },
            {
                id: "1.4",
                title: "Deep Dive Planning",
                description: "Create a learning plan for your chosen domain",
                duration: "3 days",
                deliverable: "30-day domain learning roadmap"
            }
        ],
        activities: [
            {
                id: "1-A",
                title: "Domain Dating Speed Round",
                type: "Interactive Workshop",
                duration: "90 minutes",
                description: "Speed-date with 5 research domains through hands-on demos, paper abstracts, and researcher videos. Rate each domain on excitement, feasibility, and personal fit.",
                steps: [
                    "Visit 5 domain stations (AI, IoT, Healthcare, Energy, Education)",
                    "Spend 5 minutes at each: watch video, try demo, read abstracts",
                    "Rate each domain on 3 criteria (1-10): Excitement, Feasibility, Personal Fit",
                    "Calculate total scores and identify top 2 domains",
                    "Discuss findings with peers who chose similar domains"
                ],
                materials: [
                    "5 domain station setups with demos",
                    "Recent paper abstracts (3 per domain)",
                    "3-minute researcher videos per domain",
                    "Rating sheets and pens",
                    "Timer for rotations"
                ],
                expectedOutput: "Completed rating sheet with top 2 domain choices and reasons"
            },
            {
                id: "1-B",
                title: "Problem Hunting Expedition",
                type: "Research Exercise",
                duration: "2 hours",
                description: "Deep dive into your top 2 domains to identify real, unsolved problems that personally interest you. Create a problem portfolio.",
                steps: [
                    "For each of your top 2 domains, read 5 recent papers",
                    "Extract 'Future Work' sections and limitations",
                    "Identify 5 problems per domain (10 total)",
                    "Rate each problem: Novel? Important? Feasible? Interesting to me?",
                    "Select top 3 problems that score highest",
                    "Write 1 paragraph per problem explaining why it matters to you"
                ],
                materials: [
                    "Access to Google Scholar or IEEE Xplore",
                    "Problem identification template",
                    "Rating criteria checklist",
                    "Problem portfolio document template"
                ],
                expectedOutput: "Problem portfolio with 3 well-documented problems and personal interest statements"
            },
            {
                id: "1-C",
                title: "Researcher Interview Challenge",
                type: "Networking Activity",
                duration: "1 week",
                description: "Interview 3 researchers working in your top domains to understand real-world challenges, opportunities, and career paths.",
                steps: [
                    "Identify 3 researchers in your top 2 domains (faculty, PhD scholars, industry)",
                    "Prepare 10 questions about domain challenges, opportunities, and advice",
                    "Schedule and conduct 20-minute interviews (in-person or virtual)",
                    "Take detailed notes on insights, warnings, and recommendations",
                    "Synthesize findings into a domain decision matrix",
                    "Make final domain choice based on all gathered information"
                ],
                materials: [
                    "Researcher contact list",
                    "Interview question template",
                    "Note-taking template",
                    "Domain decision matrix template"
                ],
                expectedOutput: "Interview summary report and final domain choice with comprehensive justification"
            }
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
        subStages: [
            {
                id: "2.1",
                title: "Reading Method Mastery",
                description: "Learn and practice the 3-Pass reading method",
                duration: "3 days",
                deliverable: "3 papers read using 3-Pass method with notes"
            },
            {
                id: "2.2",
                title: "Paper Marathon Week 1",
                description: "Read 5 foundational papers in your domain",
                duration: "1 week",
                deliverable: "5 paper summaries with key insights"
            },
            {
                id: "2.3",
                title: "Paper Marathon Week 2",
                description: "Read 5 recent papers (last 2 years)",
                duration: "1 week",
                deliverable: "5 paper summaries with trend analysis"
            },
            {
                id: "2.4",
                title: "Paper Marathon Week 3",
                description: "Read 5 highly-cited papers in your domain",
                duration: "1 week",
                deliverable: "5 paper summaries with citation analysis"
            },
            {
                id: "2.5",
                title: "Paper Marathon Week 4",
                description: "Read 5 papers from top conferences/journals",
                duration: "1 week",
                deliverable: "5 paper summaries with quality assessment"
            },
            {
                id: "2.6",
                title: "Knowledge Synthesis",
                description: "Create comprehensive literature review summary",
                duration: "3 days",
                deliverable: "Literature review document with trends and gaps"
            }
        ],
        activities: [
            {
                id: "2-A",
                title: "3-Pass Reading Bootcamp",
                type: "Skill-Building Workshop",
                duration: "2 hours",
                description: "Master the efficient 3-Pass method for reading research papers. Practice on 3 papers with peer feedback.",
                steps: [
                    "Learn Pass 1: Skim (title, abstract, intro, conclusion) - 5 minutes",
                    "Learn Pass 2: Read (skip proofs, note figures) - 1 hour",
                    "Learn Pass 3: Deep dive (understand every detail) - 4-5 hours",
                    "Practice Pass 1 on 3 papers, share findings with group",
                    "Practice Pass 2 on 1 paper, create structured notes",
                    "Discuss when to stop at Pass 1 vs go deeper"
                ],
                materials: [
                    "3 sample papers of varying difficulty",
                    "3-Pass method guide handout",
                    "Note-taking template for each pass",
                    "Timer for practice sessions",
                    "Peer review checklist"
                ],
                expectedOutput: "Completed notes for 3 papers using 3-Pass method with peer feedback"
            },
            {
                id: "2-B",
                title: "Paper Bingo Challenge",
                type: "Gamified Reading",
                duration: "4 weeks",
                description: "Complete a bingo card by reading 20 papers across different categories. Compete with peers for completion speed and quality.",
                steps: [
                    "Receive bingo card with 20 categories (foundational, recent, highly-cited, etc.)",
                    "Read 1 paper per category, create structured summary",
                    "Mark off bingo squares as you complete each paper",
                    "Share summaries in weekly group discussions",
                    "First to complete a row/column/diagonal wins mini-prizes",
                    "Complete full card for grand prize and recognition"
                ],
                materials: [
                    "Paper Bingo card template (5x4 grid)",
                    "Paper summary template",
                    "Access to digital libraries",
                    "Weekly discussion forum",
                    "Progress tracking sheet"
                ],
                expectedOutput: "Completed bingo card with 20 paper summaries and participation in 4 weekly discussions"
            },
            {
                id: "2-C",
                title: "Paper Presentation Tournament",
                type: "Peer Learning",
                duration: "4 weeks",
                description: "Present 4 papers to peers (1 per week) in 10-minute presentations. Receive feedback and learn from others' presentations.",
                steps: [
                    "Select 4 papers to present (1 foundational, 1 recent, 1 controversial, 1 favorite)",
                    "Create 10-minute presentation for each (problem, solution, results, gaps)",
                    "Present to group of 5-6 peers each week",
                    "Answer questions and defend paper's contributions",
                    "Receive structured feedback on presentation and understanding",
                    "Attend 15-20 other presentations to learn diverse papers"
                ],
                materials: [
                    "Presentation template (10 slides max)",
                    "Peer feedback form",
                    "Presentation schedule",
                    "Recording equipment (optional)",
                    "Q&A guidelines"
                ],
                expectedOutput: "4 paper presentations delivered, feedback received, and notes from 15+ peer presentations"
            }
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
        subStages: [
            {
                id: "3.1",
                title: "Gap Identification Techniques",
                description: "Learn 5 methods to identify research gaps from literature",
                duration: "3 days",
                deliverable: "Gap identification toolkit with examples"
            },
            {
                id: "3.2",
                title: "Initial Gap Hunting",
                description: "Identify 10-15 potential gaps from your 20 papers",
                duration: "1 week",
                deliverable: "List of 10-15 potential gaps with sources"
            },
            {
                id: "3.3",
                title: "Gap Validation",
                description: "Validate gaps using NIFI criteria (Novel, Important, Feasible, Interesting)",
                duration: "1 week",
                deliverable: "3-5 validated gaps with NIFI scores"
            },
            {
                id: "3.4",
                title: "Gap Selection & Problem Statement",
                description: "Choose one gap and draft clear problem statement",
                duration: "1 week",
                deliverable: "Problem statement document (1-2 pages)"
            }
        ],
        activities: [
            {
                id: "3-A",
                title: "Gap Hunting Treasure Hunt",
                type: "Competitive Exercise",
                duration: "90 minutes",
                description: "Race against peers to find research gaps in papers. Use 5 gap-finding techniques to identify opportunities.",
                steps: [
                    "Learn 5 gap types: Knowledge, Method, Theory, Application, Population",
                    "Receive 5 papers with hidden gaps",
                    "Use gap-finding checklist to identify 2-3 gaps per paper",
                    "Present findings to group (2 minutes per person)",
                    "Vote on most promising gaps",
                    "Discuss why some gaps are better than others"
                ],
                materials: [
                    "5 papers with identifiable gaps",
                    "Gap-finding checklist",
                    "Gap documentation template",
                    "Timer for presentations",
                    "Voting cards"
                ],
                expectedOutput: "10-15 identified gaps with gap type classification and initial assessment"
            },
            {
                id: "3-B",
                title: "NIFI Validation Workshop",
                type: "Analytical Exercise",
                duration: "2 hours",
                description: "Validate your identified gaps using NIFI criteria (Novel, Important, Feasible, Interesting). Score and rank gaps.",
                steps: [
                    "List all identified gaps (10-15) in a spreadsheet",
                    "For each gap, score on 4 criteria (1-10): Novel, Important, Feasible, Interesting",
                    "Calculate total NIFI score (max 40 points)",
                    "Research if gap is truly novel (Google Scholar search)",
                    "Discuss feasibility with supervisor/mentor",
                    "Rank gaps by total score and select top 3",
                    "Write 1-paragraph justification for each top gap"
                ],
                materials: [
                    "NIFI scoring spreadsheet",
                    "Novelty check guide",
                    "Feasibility assessment checklist",
                    "Access to Google Scholar",
                    "Supervisor meeting time"
                ],
                expectedOutput: "NIFI-scored gap list with top 3 gaps and detailed justifications"
            },
            {
                id: "3-C",
                title: "Problem Statement Drafting Sprint",
                type: "Writing Workshop",
                duration: "3 hours",
                description: "Draft a clear, compelling problem statement for your chosen gap. Get peer and mentor feedback.",
                steps: [
                    "Choose your #1 gap from NIFI validation",
                    "Use problem statement template (Context, Gap, Impact, Research Question)",
                    "Write first draft (1-2 pages) in 60 minutes",
                    "Exchange drafts with 2 peers for feedback",
                    "Revise based on peer feedback (30 minutes)",
                    "Present to mentor/supervisor for validation",
                    "Finalize problem statement with mentor input"
                ],
                materials: [
                    "Problem statement template",
                    "Peer review rubric",
                    "Example problem statements (good and bad)",
                    "Revision checklist",
                    "Mentor feedback form"
                ],
                expectedOutput: "Finalized problem statement (1-2 pages) validated by mentor and peers"
            }
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
        subStages: [
            {
                id: "4.1",
                title: "Methodology Design",
                description: "Design detailed research methodology and experimental plan",
                duration: "2 weeks",
                deliverable: "Methodology document with experimental design"
            },
            {
                id: "4.2",
                title: "Sprint 1-6: Foundation Building",
                description: "Build basic infrastructure, tools, and initial prototype",
                duration: "3 months",
                deliverable: "Basic working prototype (v0.1)"
            },
            {
                id: "4.3",
                title: "Sprint 7-12: Feature Development",
                description: "Implement core features and conduct initial experiments",
                duration: "3 months",
                deliverable: "Feature-complete prototype (v0.5) with initial results"
            },
            {
                id: "4.4",
                title: "Sprint 13-18: Optimization & Testing",
                description: "Optimize solution, conduct comprehensive experiments",
                duration: "3 months",
                deliverable: "Optimized solution (v1.0) with comprehensive results"
            },
            {
                id: "4.5",
                title: "Sprint 19-24: Validation & Documentation",
                description: "Validate results, compare with baselines, document everything",
                duration: "3 months",
                deliverable: "Validated results with complete documentation"
            }
        ],
        activities: [
            {
                id: "4-A",
                title: "2-Week Sprint Planning Workshop",
                type: "Agile Planning",
                duration: "4 hours",
                description: "Break your 6-12 month research into 2-week sprints with clear milestones and deliverables.",
                steps: [
                    "List all tasks needed to complete your research",
                    "Estimate time for each task (hours)",
                    "Group tasks into 2-week sprints (80 hours per sprint)",
                    "Define clear deliverable for each sprint",
                    "Identify dependencies between sprints",
                    "Create sprint calendar with review dates",
                    "Set up weekly check-in schedule with supervisor"
                ],
                materials: [
                    "Sprint planning template",
                    "Task estimation worksheet",
                    "Gantt chart tool",
                    "Sprint review checklist",
                    "Calendar for scheduling"
                ],
                expectedOutput: "Complete sprint plan (12-24 sprints) with deliverables and review schedule"
            },
            {
                id: "4-B",
                title: "Research Journal Challenge",
                type: "Documentation Practice",
                duration: "Ongoing (daily)",
                description: "Maintain daily research journal documenting experiments, results, decisions, and learnings. Build evidence trail.",
                steps: [
                    "Set up research journal (digital or physical)",
                    "Write daily entries (15 minutes): What I did, What worked, What didn't, Why, Next steps",
                    "Include screenshots, code snippets, data plots",
                    "Weekly review: Summarize week's progress and learnings",
                    "Monthly review: Identify patterns, pivot points, major insights",
                    "Share weekly summaries with supervisor"
                ],
                materials: [
                    "Research journal template",
                    "Daily entry checklist",
                    "Screenshot tools",
                    "Weekly summary template",
                    "Cloud storage for backups"
                ],
                expectedOutput: "Complete research journal with daily entries, weekly summaries, and monthly reviews"
            },
            {
                id: "4-C",
                title: "Experiment Design & Execution Marathon",
                type: "Hands-on Research",
                duration: "6-12 months",
                description: "Design, execute, and document experiments systematically. Iterate based on results.",
                steps: [
                    "Design experiment protocol (hypothesis, variables, controls, metrics)",
                    "Set up experimental environment (tools, data, infrastructure)",
                    "Run pilot experiment to validate setup",
                    "Execute main experiments in batches",
                    "Collect and organize data systematically",
                    "Analyze results after each batch",
                    "Iterate experimental design based on findings",
                    "Document everything in research journal"
                ],
                materials: [
                    "Experiment design template",
                    "Data collection sheets",
                    "Analysis tools (Python, R, MATLAB)",
                    "Version control system (Git)",
                    "Lab notebook",
                    "Statistical analysis guides"
                ],
                expectedOutput: "Complete experimental data with analysis, documented methodology, and reproducible results"
            }
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
        subStages: [
            {
                id: "5.1",
                title: "Journal Selection & Guidelines",
                description: "Research and select target journal, study author guidelines",
                duration: "3 days",
                deliverable: "Target journal list with rationale"
            },
            {
                id: "5.2",
                title: "Paper Structure & Outline",
                description: "Create detailed outline following IMRaD structure",
                duration: "2 days",
                deliverable: "Complete paper outline with section headings"
            },
            {
                id: "5.3",
                title: "Writing Sprint Week 1-2",
                description: "Write Methods and Results sections (easiest first)",
                duration: "2 weeks",
                deliverable: "Methods and Results sections (draft)"
            },
            {
                id: "5.4",
                title: "Writing Sprint Week 3-4",
                description: "Write Introduction and Discussion sections",
                duration: "2 weeks",
                deliverable: "Introduction and Discussion sections (draft)"
            },
            {
                id: "5.5",
                title: "Figures, Tables & References",
                description: "Create all figures, tables, and format references",
                duration: "1 week",
                deliverable: "All figures, tables, and formatted references"
            },
            {
                id: "5.6",
                title: "Peer Review & Revision",
                description: "Get feedback from 3 peers and revise",
                duration: "1 week",
                deliverable: "Revised paper incorporating peer feedback"
            },
            {
                id: "5.7",
                title: "Submission & Response",
                description: "Submit paper and respond to reviewer comments",
                duration: "2-4 weeks",
                deliverable: "Submitted paper and response to reviewers"
            }
        ],
        activities: [
            {
                id: "5-A",
                title: "30-Day Writing Challenge",
                type: "Structured Writing",
                duration: "30 days",
                description: "Write 500 words daily for 30 days. Complete your paper draft through consistent daily practice.",
                steps: [
                    "Set daily writing time (same time every day)",
                    "Write 500 words minimum (no editing during writing)",
                    "Track daily word count and cumulative progress",
                    "Share daily progress with accountability partner",
                    "Weekly review: Edit and refine previous week's writing",
                    "Celebrate milestones (5000, 10000, 15000 words)"
                ],
                materials: [
                    "Writing tracker spreadsheet",
                    "Daily writing checklist",
                    "Word count tool",
                    "Accountability partner",
                    "Milestone rewards list"
                ],
                expectedOutput: "Complete paper draft (15,000+ words) written in 30 days"
            },
            {
                id: "5-B",
                title: "Paper Dissection Workshop",
                type: "Reverse Engineering",
                duration: "4 hours",
                description: "Dissect 3 published papers from your target journal to understand structure, style, and conventions.",
                steps: [
                    "Select 3 recent papers from target journal",
                    "Analyze structure: Count paragraphs per section, sentences per paragraph",
                    "Study writing style: Tense usage, voice (active/passive), vocabulary",
                    "Examine figures and tables: Types, captions, placement",
                    "Note citation patterns: How many refs, where cited, self-citations",
                    "Create style guide based on analysis",
                    "Apply learned patterns to your paper"
                ],
                materials: [
                    "3 target journal papers",
                    "Paper analysis template",
                    "Style guide template",
                    "Highlighters for marking patterns",
                    "Note-taking tools"
                ],
                expectedOutput: "Custom style guide based on target journal analysis"
            },
            {
                id: "5-C",
                title: "Peer Review Simulation",
                type: "Collaborative Review",
                duration: "1 week",
                description: "Exchange papers with 3 peers, provide detailed reviews, revise based on feedback. Simulate real peer review.",
                steps: [
                    "Form review group of 4 people (you + 3 peers)",
                    "Exchange papers anonymously (blind review)",
                    "Review each paper using journal's review criteria",
                    "Write detailed reviews (strengths, weaknesses, suggestions)",
                    "Discuss reviews in group meeting",
                    "Revise your paper based on all feedback",
                    "Submit revised version to group for final check"
                ],
                materials: [
                    "Peer review rubric",
                    "Review form template",
                    "Anonymous submission system",
                    "Group meeting schedule",
                    "Revision checklist"
                ],
                expectedOutput: "Revised paper with peer review feedback incorporated and response letter"
            }
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
        subStages: [
            {
                id: "6.1",
                title: "Patentability Assessment",
                description: "Assess if your innovation is patentable (novel, non-obvious, useful)",
                duration: "3 days",
                deliverable: "Patentability assessment report"
            },
            {
                id: "6.2",
                title: "Prior Art Search",
                description: "Search existing patents and publications to ensure novelty",
                duration: "1 week",
                deliverable: "Prior art search report with analysis"
            },
            {
                id: "6.3",
                title: "Claims Drafting",
                description: "Draft independent and dependent claims",
                duration: "1 week",
                deliverable: "Patent claims (independent + dependent)"
            },
            {
                id: "6.4",
                title: "Specification Writing",
                description: "Write detailed specification with drawings",
                duration: "2 weeks",
                deliverable: "Complete patent specification with figures"
            },
            {
                id: "6.5",
                title: "Attorney Review & Filing",
                description: "Get patent attorney review and file application",
                duration: "1 week",
                deliverable: "Filed patent application with number"
            }
        ],
        activities: [
            {
                id: "6-A",
                title: "Patent Anatomy Workshop",
                type: "Learning Session",
                duration: "3 hours",
                description: "Dissect 5 granted patents to understand structure, claims, and specification writing.",
                steps: [
                    "Study 5 granted patents in your domain",
                    "Identify parts: Abstract, Claims, Specification, Drawings",
                    "Analyze claim structure: Independent vs dependent",
                    "Study how novelty is described",
                    "Note common phrases and legal language",
                    "Create patent writing template based on analysis"
                ],
                materials: [
                    "5 granted patents from your domain",
                    "Patent structure guide",
                    "Claims analysis worksheet",
                    "Patent writing template",
                    "Legal terminology glossary"
                ],
                expectedOutput: "Patent writing template and claims structure understanding"
            },
            {
                id: "6-B",
                title: "Prior Art Search Marathon",
                type: "Research Exercise",
                duration: "1 week",
                description: "Comprehensive search of existing patents and publications to prove novelty.",
                steps: [
                    "Search Google Patents with key terms",
                    "Search USPTO/EPO/WIPO databases",
                    "Search Google Scholar for related publications",
                    "Document all similar inventions found",
                    "Analyze differences between your invention and prior art",
                    "Create comparison table highlighting novelty",
                    "Write novelty statement"
                ],
                materials: [
                    "Access to patent databases",
                    "Search strategy guide",
                    "Prior art documentation template",
                    "Comparison table template",
                    "Novelty statement template"
                ],
                expectedOutput: "Prior art search report with comparison table and novelty statement"
            },
            {
                id: "6-C",
                title: "Claims Drafting Sprint",
                type: "Writing Workshop",
                duration: "1 week",
                description: "Draft patent claims (independent and dependent) with attorney guidance.",
                steps: [
                    "Identify core novel features of your invention",
                    "Draft 1-3 independent claims (broadest scope)",
                    "Draft 10-20 dependent claims (specific features)",
                    "Use proper claim language and structure",
                    "Review with patent attorney",
                    "Revise based on attorney feedback",
                    "Finalize claims for filing"
                ],
                materials: [
                    "Claims drafting guide",
                    "Independent claim template",
                    "Dependent claim template",
                    "Patent attorney consultation",
                    "Claims review checklist"
                ],
                expectedOutput: "Complete set of patent claims reviewed by attorney"
            }
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
        subStages: [
            {
                id: "7.1",
                title: "Institutional Requirements Analysis",
                description: "Study institutional seed grant guidelines and requirements",
                duration: "2 days",
                deliverable: "Requirements checklist and compliance plan"
            },
            {
                id: "7.2",
                title: "Proposal Outline & Objectives",
                description: "Create proposal outline with SMART objectives",
                duration: "3 days",
                deliverable: "Proposal outline with 3-5 SMART objectives"
            },
            {
                id: "7.3",
                title: "Budget Development",
                description: "Create detailed budget with line-item justifications",
                duration: "3 days",
                deliverable: "Complete budget with justifications"
            },
            {
                id: "7.4",
                title: "Proposal Writing",
                description: "Write complete proposal following institutional format",
                duration: "1 week",
                deliverable: "Complete proposal draft"
            },
            {
                id: "7.5",
                title: "Review & Submission",
                description: "Get feedback, revise, and submit proposal",
                duration: "3 days",
                deliverable: "Submitted proposal with acknowledgment"
            }
        ],
        activities: [
            {
                id: "7-A",
                title: "Successful Proposal Analysis",
                type: "Learning Workshop",
                duration: "3 hours",
                description: "Analyze 5 successful seed proposals to understand winning elements and common patterns.",
                steps: [
                    "Collect 5 successful seed proposals from colleagues",
                    "Analyze structure, objectives, methodology, budget",
                    "Identify common success factors",
                    "Note persuasive language and presentation style",
                    "Create proposal template based on analysis",
                    "List do's and don'ts from examples"
                ],
                materials: [
                    "5 successful seed proposals",
                    "Analysis worksheet",
                    "Proposal template",
                    "Success factors checklist",
                    "Writing style guide"
                ],
                expectedOutput: "Proposal template and success factors checklist"
            },
            {
                id: "7-B",
                title: "Budget Building Workshop",
                type: "Financial Planning",
                duration: "4 hours",
                description: "Create realistic, justified budget for your research project with line-item details.",
                steps: [
                    "List all required resources (equipment, consumables, travel, etc.)",
                    "Research current market prices for each item",
                    "Create budget spreadsheet with categories",
                    "Write justification for each line item",
                    "Add contingency (10-15%)",
                    "Review with finance office for compliance",
                    "Finalize budget with all justifications"
                ],
                materials: [
                    "Budget template spreadsheet",
                    "Price quotations from vendors",
                    "Institutional budget guidelines",
                    "Justification writing guide",
                    "Finance office contact"
                ],
                expectedOutput: "Complete budget with line-item justifications"
            },
            {
                id: "7-C",
                title: "Proposal Writing Sprint",
                type: "Intensive Writing",
                duration: "1 week",
                description: "Write complete seed proposal in 1 week with daily targets and peer review.",
                steps: [
                    "Day 1-2: Write objectives and significance",
                    "Day 3-4: Write methodology and timeline",
                    "Day 5: Write expected outcomes and impact",
                    "Day 6: Create all required attachments",
                    "Day 7: Peer review, revise, and finalize",
                    "Submit before deadline"
                ],
                materials: [
                    "Proposal template",
                    "Daily writing targets",
                    "Peer review checklist",
                    "Institutional guidelines",
                    "Submission checklist"
                ],
                expectedOutput: "Complete, peer-reviewed proposal ready for submission"
            }
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
        subStages: [
            {
                id: "8.1",
                title: "Funding Scheme Selection",
                description: "Identify suitable national schemes (SERB, DST, ICMR, DBT, AICTE, UGC) matching your research",
                duration: "3 days",
                deliverable: "Shortlist of 3-5 schemes with eligibility confirmation"
            },
            {
                id: "8.2",
                title: "Comprehensive Literature Review",
                description: "Write detailed literature review showing research gap and national relevance",
                duration: "1 week",
                deliverable: "10-15 page literature review with 50+ references"
            },
            {
                id: "8.3",
                title: "Multi-Year Research Plan",
                description: "Design 3-year research plan with yearly milestones and deliverables",
                duration: "1 week",
                deliverable: "3-year research plan with Gantt chart"
            },
            {
                id: "8.4",
                title: "Comprehensive Budget Preparation",
                description: "Create detailed budget (₹10L-50L) with equipment, manpower, travel, consumables",
                duration: "4 days",
                deliverable: "Detailed budget with vendor quotations and justifications"
            },
            {
                id: "8.5",
                title: "Proposal Writing & Documentation",
                description: "Write complete proposal addressing all evaluation criteria",
                duration: "2 weeks",
                deliverable: "Complete proposal with all required documents"
            },
            {
                id: "8.6",
                title: "Review, Revision & Submission",
                description: "Get expert feedback, revise proposal, and submit before deadline",
                duration: "3 days",
                deliverable: "Submitted proposal with acknowledgment receipt"
            }
        ],
        activities: [
            {
                id: "8-A",
                title: "National Funding Landscape Workshop",
                type: "Strategic Planning",
                duration: "4 hours",
                description: "Deep dive into national funding agencies (SERB, DST, ICMR, DBT) to identify best-fit schemes for your research.",
                steps: [
                    "Study 5 major national funding agencies and their schemes",
                    "Analyze eligibility criteria, funding amounts, and success rates",
                    "Review funded projects in your domain from last 3 years",
                    "Identify 3-5 schemes matching your research profile",
                    "Create comparison matrix (eligibility, amount, timeline, fit)",
                    "Prioritize schemes based on success probability",
                    "Plan submission timeline for multiple schemes"
                ],
                materials: [
                    "Agency websites (SERB, DST, ICMR, DBT, AICTE, UGC)",
                    "Funded projects database",
                    "Scheme comparison template",
                    "Eligibility checklist",
                    "Success rate analysis sheet"
                ],
                expectedOutput: "Prioritized list of 3-5 schemes with submission timeline and strategy"
            },
            {
                id: "8-B",
                title: "Winning Proposal Deconstruction",
                type: "Learning Exercise",
                duration: "6 hours",
                description: "Analyze 5 successful national proposals to understand winning strategies, structure, and reviewer expectations.",
                steps: [
                    "Collect 5 funded proposals from SERB/DST in your domain",
                    "Analyze structure: abstract, objectives, methodology, impact",
                    "Identify how they addressed evaluation criteria",
                    "Note persuasive elements and evidence presentation",
                    "Study budget allocation patterns",
                    "Extract key phrases and writing style",
                    "Create proposal template based on winning patterns",
                    "List common success factors and red flags"
                ],
                materials: [
                    "5 successful national proposals",
                    "Evaluation criteria rubric",
                    "Analysis worksheet",
                    "Success factors checklist",
                    "Proposal template builder"
                ],
                expectedOutput: "Customized proposal template with success factors checklist"
            },
            {
                id: "8-C",
                title: "National Proposal Writing Marathon",
                type: "Intensive Writing",
                duration: "3 weeks",
                description: "Write complete national funding proposal with daily targets, peer reviews, and expert feedback.",
                steps: [
                    "Week 1: Literature review, research gap, objectives, significance",
                    "Week 2: Detailed methodology, timeline, expected outcomes",
                    "Week 3: Budget, broader impact, team qualifications, references",
                    "Daily target: 2-3 pages of quality content",
                    "Peer review sessions every 3 days",
                    "Expert review at end of each week",
                    "Incorporate feedback and revise continuously",
                    "Final polish and submission preparation"
                ],
                materials: [
                    "Proposal writing schedule",
                    "Daily writing targets",
                    "Peer review group (3-4 people)",
                    "Expert reviewer contact",
                    "Revision checklist",
                    "Submission requirements list"
                ],
                expectedOutput: "Complete national proposal (30-50 pages) ready for submission"
            }
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
        subStages: [
            {
                id: "9.1",
                title: "International Funding Landscape Analysis",
                description: "Study international funding agencies (NSF, EU Horizon, NIH, Wellcome Trust, Gates Foundation)",
                duration: "1 week",
                deliverable: "Analysis of 5 international schemes with eligibility and requirements"
            },
            {
                id: "9.2",
                title: "International Collaboration Building",
                description: "Establish partnerships with international researchers and institutions",
                duration: "2 weeks",
                deliverable: "Letters of support from 2-3 international collaborators"
            },
            {
                id: "9.3",
                title: "Global Impact Narrative Development",
                description: "Craft compelling narrative addressing global challenges and SDGs",
                duration: "1 week",
                deliverable: "Global impact statement with SDG alignment"
            },
            {
                id: "9.4",
                title: "International Budget & Compliance",
                description: "Create international budget with currency conversion, travel, and compliance requirements",
                duration: "1 week",
                deliverable: "Detailed international budget (₹50L-5Cr) with compliance checklist"
            },
            {
                id: "9.5",
                title: "Collaborative Proposal Writing",
                description: "Co-write proposal with international partners addressing global standards",
                duration: "3 weeks",
                deliverable: "Complete international proposal with partner contributions"
            },
            {
                id: "9.6",
                title: "Legal Review & Submission",
                description: "Review IP clauses, institutional agreements, and submit proposal",
                duration: "1 week",
                deliverable: "Submitted international proposal with all legal clearances"
            }
        ],
        activities: [
            {
                id: "9-A",
                title: "Global Funding Opportunities Masterclass",
                type: "Strategic Workshop",
                duration: "6 hours",
                description: "Comprehensive analysis of international funding landscape (NSF, EU, NIH, Wellcome, Gates) to identify opportunities.",
                steps: [
                    "Study 5 major international funding agencies and their programs",
                    "Analyze eligibility for Indian researchers (direct vs collaborative)",
                    "Review funded projects from India in last 5 years",
                    "Understand evaluation criteria and success rates",
                    "Identify schemes requiring international partnerships",
                    "Study currency, budget, and compliance requirements",
                    "Create target scheme list with submission strategy"
                ],
                materials: [
                    "International agency websites (NSF, EU Horizon, NIH, Wellcome, Gates)",
                    "India-specific eligibility guides",
                    "Funded projects database",
                    "Scheme comparison matrix",
                    "Compliance requirements checklist"
                ],
                expectedOutput: "Prioritized list of 3 international schemes with partnership requirements and strategy"
            },
            {
                id: "9-B",
                title: "International Collaboration Speed Networking",
                type: "Networking Event",
                duration: "Ongoing (2-3 months)",
                description: "Build international research network through conferences, virtual meetings, and collaborative platforms.",
                steps: [
                    "Identify potential international collaborators in your domain",
                    "Attend international conferences (virtual or in-person)",
                    "Present your work to attract collaboration interest",
                    "Schedule one-on-one meetings with potential partners",
                    "Discuss mutual research interests and funding opportunities",
                    "Draft collaboration agreement and research plan",
                    "Secure letters of support from partners",
                    "Establish regular communication channels"
                ],
                materials: [
                    "International conference list",
                    "Researcher database (ResearchGate, LinkedIn)",
                    "Collaboration proposal template",
                    "Letter of support template",
                    "MOU/Agreement templates",
                    "Video conferencing tools"
                ],
                expectedOutput: "2-3 active international collaborations with letters of support"
            },
            {
                id: "9-C",
                title: "Global Impact Proposal Writing Sprint",
                type: "Intensive Collaborative Writing",
                duration: "4 weeks",
                description: "Co-write internationally competitive proposal with global impact narrative and partner contributions.",
                steps: [
                    "Week 1: Global challenge framing, SDG alignment, literature review",
                    "Week 2: Collaborative methodology, work package distribution, timeline",
                    "Week 3: Budget (multi-country), impact pathways, risk management",
                    "Week 4: Partner contributions, data management, IP agreements, final polish",
                    "Daily coordination with international partners",
                    "Weekly review sessions with all partners",
                    "Legal and compliance review by institutional office",
                    "Final submission with all required signatures"
                ],
                materials: [
                    "International proposal template",
                    "SDG alignment framework",
                    "Multi-country budget template",
                    "Work package distribution sheet",
                    "IP and data management templates",
                    "Legal review checklist",
                    "Collaboration tools (Google Docs, Overleaf)"
                ],
                expectedOutput: "Complete international proposal (50-100 pages) with all partner signatures and legal clearances"
            }
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
        subStages: [
            {
                id: "10.1",
                title: "Lab Space Planning",
                description: "Design optimal lab layout for workflow efficiency",
                duration: "2 weeks",
                deliverable: "Lab floor plan with equipment placement"
            },
            {
                id: "10.2",
                title: "Equipment Procurement",
                description: "Identify, quote, and purchase essential equipment",
                duration: "4 weeks",
                deliverable: "Equipment list with quotes and purchase orders"
            },
            {
                id: "10.3",
                title: "Safety Protocol Setup",
                description: "Establish lab safety procedures and compliance",
                duration: "2 weeks",
                deliverable: "Safety manual and training materials"
            },
            {
                id: "10.4",
                title: "Team Recruitment",
                description: "Hire research assistants, PhD scholars, and technicians",
                duration: "4 weeks",
                deliverable: "Team of 2-3 members recruited and onboarded"
            },
            {
                id: "10.5",
                title: "Lab Management Systems",
                description: "Set up inventory, booking, and documentation systems",
                duration: "2 weeks",
                deliverable: "Digital lab management system operational"
            },
            {
                id: "10.6",
                title: "Lab Inauguration",
                description: "Official launch with stakeholders and first experiments",
                duration: "1 week",
                deliverable: "Lab operational with first experiments running"
            }
        ],
        activities: [
            {
                id: "10-A",
                title: "Lab Layout Design Challenge",
                type: "Design Workshop",
                duration: "1 week",
                description: "Design your dream lab layout considering workflow, safety, and future expansion",
                steps: [
                    "Measure available space (length, width, height)",
                    "List all equipment with dimensions",
                    "Identify workflow zones (wet lab, dry lab, storage, office)",
                    "Plan electrical, water, gas connections",
                    "Design safety features (exits, showers, extinguishers)",
                    "Create 2D floor plan using free tools (RoomSketcher, Floorplanner)",
                    "Get feedback from experienced researchers",
                    "Finalize layout with contingency space (20%)"
                ],
                materials: ["Graph paper or design software", "Equipment dimension sheets", "Safety regulation guidelines", "Budget allocation sheet"],
                expectedOutput: "Professional lab floor plan with equipment placement, safety features, and workflow optimization"
            },
            {
                id: "10-B",
                title: "Equipment Procurement Sprint",
                type: "Procurement Exercise",
                duration: "2 weeks",
                description: "Master the art of buying research equipment without breaking the bank",
                steps: [
                    "Prioritize equipment: Essential (must-have), Important (nice-to-have), Future (can wait)",
                    "Get 3 quotes for each essential equipment",
                    "Compare specifications, warranty, service support",
                    "Negotiate for educational discounts (10-30% possible!)",
                    "Check for refurbished/demo equipment (50% savings!)",
                    "Plan installation, training, and calibration costs",
                    "Create equipment maintenance schedule",
                    "Document everything for future reference"
                ],
                materials: ["Equipment priority matrix", "Vendor contact list", "Quote comparison sheet", "Budget tracker"],
                expectedOutput: "Complete equipment procurement plan with quotes, justifications, and maintenance schedule"
            },
            {
                id: "10-C",
                title: "Team Building Workshop",
                type: "Recruitment Activity",
                duration: "3 weeks",
                description: "Recruit and onboard your first research team members",
                steps: [
                    "Define roles: Research Assistant, PhD Scholar, Lab Technician",
                    "Create job descriptions with clear expectations",
                    "Advertise through university, LinkedIn, research forums",
                    "Conduct interviews focusing on skills + attitude",
                    "Check references and previous work",
                    "Onboard with lab tour, safety training, and mentorship plan",
                    "Assign first project with clear milestones",
                    "Schedule weekly team meetings for coordination"
                ],
                materials: ["Job description templates", "Interview question bank", "Onboarding checklist", "Project assignment sheet"],
                expectedOutput: "Recruited team of 2-3 members with clear roles, trained on safety, and working on first projects"
            }
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
        subStages: [
            {
                id: "11.1",
                title: "TRL Framework Understanding",
                description: "Learn Technology Readiness Levels 1-9 and assess current position",
                duration: "1 week",
                deliverable: "TRL assessment report for your technology"
            },
            {
                id: "11.2",
                title: "Proof-of-Concept Design",
                description: "Design experiments to prove technical feasibility",
                duration: "3 weeks",
                deliverable: "Experimental protocol with success criteria"
            },
            {
                id: "11.3",
                title: "Prototype Development",
                description: "Build first working prototype in lab conditions",
                duration: "8 weeks",
                deliverable: "Working prototype (TRL 2-3)"
            },
            {
                id: "11.4",
                title: "Performance Testing",
                description: "Test prototype against defined metrics and benchmarks",
                duration: "4 weeks",
                deliverable: "Performance data and comparison with existing solutions"
            },
            {
                id: "11.5",
                title: "Failure Analysis",
                description: "Identify failure modes and improvement opportunities",
                duration: "2 weeks",
                deliverable: "Failure analysis report with improvement plan"
            },
            {
                id: "11.6",
                title: "Scale-Up Planning",
                description: "Plan transition from TRL 3 to TRL 6 (pilot scale)",
                duration: "2 weeks",
                deliverable: "Scale-up roadmap with resource requirements"
            }
        ],
        activities: [
            {
                id: "11-A",
                title: "TRL Assessment Workshop",
                type: "Assessment Exercise",
                duration: "1 week",
                description: "Understand where your technology stands on the TRL 1-9 scale and plan progression",
                steps: [
                    "Study TRL framework: TRL 1 (basic principles) to TRL 9 (proven in operations)",
                    "Assess current TRL: What have you proven so far?",
                    "Identify gaps: What experiments needed to reach TRL 3?",
                    "Define success criteria: How will you know it works?",
                    "Plan experiments: What tests will prove feasibility?",
                    "Estimate resources: Time, money, equipment needed",
                    "Create timeline: Realistic milestones for TRL progression",
                    "Document everything: TRL assessment report"
                ],
                materials: ["TRL framework guide", "Technology assessment template", "Experiment planning sheet", "Resource estimation tool"],
                expectedOutput: "Complete TRL assessment with experiment plan to reach TRL 3"
            },
            {
                id: "11-B",
                title: "Rapid Prototyping Sprint",
                type: "Hands-on Building",
                duration: "8 weeks",
                description: "Build, test, fail, learn, iterate - the research cycle in action!",
                steps: [
                    "Start with simplest version (Minimum Viable Prototype)",
                    "Build prototype 1 using available materials",
                    "Test against success criteria (will likely fail!)",
                    "Analyze failure: Why didn't it work?",
                    "Redesign based on learnings",
                    "Build prototype 2 (improved version)",
                    "Test again, measure performance",
                    "Iterate until success criteria met (typically 3-7 iterations)",
                    "Document each iteration: what worked, what didn't, why"
                ],
                materials: ["Lab equipment", "Prototyping materials", "Testing instruments", "Lab notebook", "Camera for documentation"],
                expectedOutput: "Working prototype (TRL 3) with documented development journey showing all iterations"
            },
            {
                id: "11-C",
                title: "Performance Benchmarking Challenge",
                type: "Comparative Analysis",
                duration: "3 weeks",
                description: "Compare your prototype with existing solutions - be honest about strengths and weaknesses",
                steps: [
                    "Identify 3-5 existing solutions (commercial or research)",
                    "Define performance metrics (speed, accuracy, cost, efficiency, etc.)",
                    "Test your prototype on all metrics",
                    "Test existing solutions (or get data from literature)",
                    "Create comparison table: your solution vs. existing",
                    "Identify your unique value proposition: What's better?",
                    "Acknowledge limitations: What needs improvement?",
                    "Plan improvements: How to close performance gaps?",
                    "Prepare presentation: Show data, be honest, inspire confidence"
                ],
                materials: ["Performance testing equipment", "Existing solutions (if available)", "Literature data", "Comparison template", "Data visualization tools"],
                expectedOutput: "Comprehensive benchmarking report showing how your prototype compares with existing solutions, with honest assessment of strengths and weaknesses"
            }
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
        subStages: [
            {
                id: "12.1",
                title: "Grant Management Setup",
                description: "Establish systems for managing large multi-year grants",
                duration: "2 weeks",
                deliverable: "Grant management system with budget tracking"
            },
            {
                id: "12.2",
                title: "Team Scaling Strategy",
                description: "Plan and execute hiring of 10+ team members",
                duration: "3 months",
                deliverable: "Expanded team with clear roles and responsibilities"
            },
            {
                id: "12.3",
                title: "Advanced Equipment Procurement",
                description: "Acquire state-of-the-art research equipment",
                duration: "4 months",
                deliverable: "Advanced equipment installed and operational"
            },
            {
                id: "12.4",
                title: "Collaboration Network Building",
                description: "Establish partnerships with national/international labs",
                duration: "3 months",
                deliverable: "Active collaborations with 5+ institutions"
            },
            {
                id: "12.5",
                title: "Research Output Acceleration",
                description: "Scale research output with multiple parallel projects",
                duration: "6 months",
                deliverable: "5+ high-impact publications submitted"
            },
            {
                id: "12.6",
                title: "TRL 6 Achievement",
                description: "Scale prototype from lab (TRL 3) to pilot scale (TRL 6)",
                duration: "6 months",
                deliverable: "Pilot-scale demonstration successful"
            }
        ],
        activities: [
            {
                id: "12-A",
                title: "Strategic Hiring Workshop",
                type: "Team Building",
                duration: "2 months",
                description: "Build a diverse, high-performing research team that works like a well-oiled machine",
                steps: [
                    "Define team structure: PIs, postdocs, PhD students, research assistants, technicians",
                    "Create role descriptions with clear expectations and growth paths",
                    "Prioritize diversity: skills, backgrounds, perspectives (better research!)",
                    "Advertise widely: university, LinkedIn, ResearchGate, conferences",
                    "Interview for skills + cultural fit (both matter!)",
                    "Onboard systematically: lab tour, safety training, project assignment, mentorship",
                    "Establish team rituals: weekly meetings, journal clubs, social events",
                    "Create feedback culture: regular 1-on-1s, performance reviews, growth plans"
                ],
                materials: ["Role description templates", "Interview rubrics", "Onboarding checklist", "Team culture handbook"],
                expectedOutput: "High-performing team of 10+ members with clear roles, strong culture, and collaborative spirit"
            },
            {
                id: "12-B",
                title: "Research Portfolio Management",
                type: "Project Planning",
                duration: "1 month",
                description: "Manage multiple parallel research projects without losing your mind!",
                steps: [
                    "Map current projects: What's running, what's planned?",
                    "Identify synergies: Which projects can share resources/data?",
                    "Assign project leads: Empower team members to own projects",
                    "Create project timelines with milestones and deliverables",
                    "Establish weekly project review meetings",
                    "Use project management tools (Trello, Asana, or simple spreadsheet)",
                    "Track publications: Which projects ready for papers?",
                    "Plan resource allocation: People, equipment, budget",
                    "Build in buffer time: Things always take longer than expected!"
                ],
                materials: ["Project management tool", "Timeline templates", "Resource allocation sheet", "Publication tracker"],
                expectedOutput: "Well-organized research portfolio with 5+ parallel projects, clear ownership, and realistic timelines"
            },
            {
                id: "12-C",
                title: "Scale-Up Engineering Challenge",
                type: "Technical Development",
                duration: "6 months",
                description: "Take your lab prototype (TRL 3) to pilot scale (TRL 6) - where things get real!",
                steps: [
                    "Analyze lab prototype: What works at small scale?",
                    "Identify scale-up challenges: Heat transfer, mixing, materials, cost",
                    "Design pilot-scale system (10-100x larger than lab)",
                    "Build pilot setup with proper instrumentation",
                    "Test systematically: Start small, scale gradually",
                    "Measure performance: Does it match lab results?",
                    "Troubleshoot issues: Scale-up always reveals surprises!",
                    "Optimize for cost and efficiency",
                    "Document everything: Scale-up is valuable IP!",
                    "Plan next scale: TRL 7-8 (demonstration scale)"
                ],
                materials: ["Pilot-scale equipment", "Instrumentation", "Scale-up engineering guides", "Cost analysis tools"],
                expectedOutput: "Working pilot-scale system (TRL 6) with performance data, cost analysis, and plan for further scaling"
            }
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
        subStages: [
            {
                id: "13.1",
                title: "Market Analysis",
                description: "Identify industry needs and market opportunities for your technology",
                duration: "1 month",
                deliverable: "Market analysis report with target industries"
            },
            {
                id: "13.2",
                title: "Product Development",
                description: "Transform prototype (TRL 6) to market-ready product (TRL 9)",
                duration: "6 months",
                deliverable: "Market-ready product with user documentation"
            },
            {
                id: "13.3",
                title: "IP Protection",
                description: "File patents and establish IP protection strategy",
                duration: "3 months",
                deliverable: "5-10 patents filed with strong claims"
            },
            {
                id: "13.4",
                title: "Industry Partnership Development",
                description: "Establish partnerships with 3-5 industry players",
                duration: "4 months",
                deliverable: "Signed MOUs/agreements with industry partners"
            },
            {
                id: "13.5",
                title: "Technology Transfer",
                description: "Transfer technology to industry through licensing or collaboration",
                duration: "3 months",
                deliverable: "Technology transfer agreements with revenue terms"
            },
            {
                id: "13.6",
                title: "Impact Documentation",
                description: "Measure and document societal/economic impact",
                duration: "2 months",
                deliverable: "Impact report with metrics and case studies"
            }
        ],
        activities: [
            {
                id: "13-A",
                title: "Industry Needs Discovery Sprint",
                type: "Market Research",
                duration: "3 weeks",
                description: "Talk to industry to understand real problems - not what you think they need!",
                steps: [
                    "Identify 10-15 companies in your target domain",
                    "Reach out via LinkedIn, email, conferences (warm introductions work best!)",
                    "Conduct discovery interviews: What are their pain points?",
                    "Listen more, pitch less (80% listening, 20% talking)",
                    "Identify common patterns: What problems appear repeatedly?",
                    "Assess willingness to pay: Would they fund solution development?",
                    "Map your technology to their needs: Where's the fit?",
                    "Prioritize opportunities: Impact × Feasibility × Revenue potential",
                    "Create target list: Top 5 companies to partner with"
                ],
                materials: ["Company research database", "Interview guide", "Pain point tracker", "Opportunity matrix"],
                expectedOutput: "Market analysis report identifying top 5 industry partners and specific problems your technology can solve"
            },
            {
                id: "13-B",
                title: "Patent Filing Marathon",
                type: "IP Protection",
                duration: "2 months",
                description: "Protect your innovations before someone else does - patents are your research insurance!",
                steps: [
                    "Identify patentable innovations: What's novel and non-obvious?",
                    "Conduct prior art search: Has someone already patented this?",
                    "Work with patent attorney (university TTO can help!)",
                    "Draft patent applications with strong claims",
                    "File provisional patents first (cheaper, faster, 1-year protection)",
                    "Test market response during provisional period",
                    "Convert to full patents for promising technologies",
                    "Consider international patents (PCT) for global markets",
                    "Maintain patent portfolio: Pay fees, track deadlines",
                    "Use patents in negotiations: Licensing, partnerships, startups"
                ],
                materials: ["Patent search databases", "Patent attorney contact", "Innovation disclosure forms", "Patent filing budget"],
                expectedOutput: "5-10 patent applications filed with strong claims protecting your key innovations"
            },
            {
                id: "13-C",
                title: "Industry Partnership Bootcamp",
                type: "Collaboration Building",
                duration: "3 months",
                description: "Build win-win partnerships where both academia and industry benefit",
                steps: [
                    "Approach top 5 companies from your target list",
                    "Present customized pitch: How you solve their specific problem",
                    "Negotiate partnership terms: Funding, IP, publications, students",
                    "Establish clear IP agreements BEFORE starting work (critical!)",
                    "Define deliverables and timelines: What, when, how much?",
                    "Set up regular communication: Monthly meetings, quarterly reviews",
                    "Deliver on promises: Build trust through results",
                    "Publish results (with industry approval): Show impact",
                    "Expand partnerships: Successful projects lead to more opportunities",
                    "Generate revenue: Licensing, consulting, sponsored research"
                ],
                materials: ["Partnership proposal template", "IP agreement templates", "Project plan template", "Communication schedule"],
                expectedOutput: "3-5 active industry partnerships with signed agreements, clear deliverables, and revenue generation"
            }
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
        subStages: [
            {
                id: "14.1",
                title: "Vision & Mission Design",
                description: "Define clear focus area and long-term vision for CoE",
                duration: "2 months",
                deliverable: "Vision document with mission, values, and strategic goals"
            },
            {
                id: "14.2",
                title: "Governance Structure",
                description: "Establish advisory board, steering committee, and management team",
                duration: "3 months",
                deliverable: "Governance framework with roles and decision-making processes"
            },
            {
                id: "14.3",
                title: "Funding Model Development",
                description: "Create diversified funding strategy for sustainability",
                duration: "4 months",
                deliverable: "10-year financial plan with multiple revenue streams"
            },
            {
                id: "14.4",
                title: "Infrastructure Expansion",
                description: "Expand physical space, equipment, and digital infrastructure",
                duration: "6 months",
                deliverable: "State-of-the-art facility with advanced equipment"
            },
            {
                id: "14.5",
                title: "Team Scaling to 20+",
                description: "Build diverse team of researchers, staff, and students",
                duration: "6 months",
                deliverable: "Team of 20+ members with clear roles"
            },
            {
                id: "14.6",
                title: "National Recognition Campaign",
                description: "Build reputation through publications, events, and partnerships",
                duration: "6 months",
                deliverable: "National recognition as leading CoE in domain"
            }
        ],
        activities: [
            {
                id: "14-A",
                title: "CoE Vision Workshop",
                type: "Strategic Planning",
                duration: "1 month",
                description: "Define what makes your CoE unique and why it matters",
                steps: [
                    "Analyze landscape: What CoEs already exist in your domain?",
                    "Identify gap: What's missing that you can provide?",
                    "Define focus: Be specific! (Don't try to be everything)",
                    "Craft vision: Where will CoE be in 10 years?",
                    "Define mission: What will you do to achieve vision?",
                    "Establish values: What principles guide your work?",
                    "Set strategic goals: 3-5 measurable goals for 5 years",
                    "Get stakeholder buy-in: University, industry, government",
                    "Document everything: Vision document is your north star"
                ],
                materials: ["CoE landscape analysis", "SWOT analysis template", "Vision workshop guide", "Stakeholder feedback forms"],
                expectedOutput: "Compelling vision document that differentiates your CoE and inspires stakeholders"
            },
            {
                id: "14-B",
                title: "Sustainable Funding Strategy",
                type: "Financial Planning",
                duration: "2 months",
                description: "Build multiple revenue streams - don't depend on single source!",
                steps: [
                    "Map current funding: Grants, industry, university, other",
                    "Identify funding gaps: What's needed vs. what's available?",
                    "Diversify sources: Government grants (30%), industry (30%), university (20%), other (20%)",
                    "Plan grant pipeline: Always have 3-5 proposals in works",
                    "Develop industry partnerships: Long-term sponsored research",
                    "Create service offerings: Testing, consulting, training",
                    "Explore endowments: Alumni, philanthropists, CSR funds",
                    "Plan for sustainability: What happens when grants end?",
                    "Create 10-year financial model: Revenue, expenses, growth",
                    "Establish financial controls: Budget tracking, reporting"
                ],
                materials: ["Financial planning template", "Grant pipeline tracker", "Partnership proposal templates", "Budget models"],
                expectedOutput: "10-year financial plan with diversified funding sources ensuring CoE sustainability"
            },
            {
                id: "14-C",
                title: "Reputation Building Campaign",
                type: "Branding & Outreach",
                duration: "6 months",
                description: "Make your CoE the go-to place for your research domain",
                steps: [
                    "Define brand identity: What do you want to be known for?",
                    "Create visual identity: Logo, colors, templates",
                    "Build website: Professional, informative, updated regularly",
                    "Publish high-impact papers: Quality > quantity",
                    "Organize conferences/workshops: Bring community to you",
                    "Engage media: Press releases, interviews, articles",
                    "Build social media presence: LinkedIn, Twitter, YouTube",
                    "Create success stories: Show impact with real examples",
                    "Establish awards/fellowships: Attract top talent",
                    "Network strategically: Conferences, advisory boards, collaborations"
                ],
                materials: ["Brand identity guide", "Website content", "Media kit", "Social media calendar", "Success story templates"],
                expectedOutput: "Strong brand presence with national recognition as leading CoE in your domain"
            }
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
        subStages: [
            {
                id: "15.1",
                title: "Program Conceptualization",
                description: "Define program vision, objectives, and unique value proposition",
                duration: "1 month",
                deliverable: "Program concept document with differentiation strategy"
            },
            {
                id: "15.2",
                title: "NEP 2020 Curriculum Design",
                description: "Design multidisciplinary, flexible, outcome-based curriculum",
                duration: "3 months",
                deliverable: "Complete curriculum with course outlines and learning outcomes"
            },
            {
                id: "15.3",
                title: "University Approval Process",
                description: "Navigate institutional approvals and regulatory requirements",
                duration: "4 months",
                deliverable: "Program approved by university and regulatory bodies"
            },
            {
                id: "15.4",
                title: "Faculty Recruitment",
                description: "Recruit qualified faculty with research and industry experience",
                duration: "3 months",
                deliverable: "Faculty team of 5-8 members recruited"
            },
            {
                id: "15.5",
                title: "Student Admission",
                description: "Design admission process and admit first batch",
                duration: "2 months",
                deliverable: "First batch of 20-30 students admitted"
            },
            {
                id: "15.6",
                title: "Program Launch",
                description: "Launch program with industry partnerships and research integration",
                duration: "1 month",
                deliverable: "Program operational with students, faculty, and industry partners"
            }
        ],
        activities: [
            {
                id: "15-A",
                title: "NEP 2020 Curriculum Design Sprint",
                type: "Curriculum Development",
                duration: "2 months",
                description: "Design curriculum that's 80% hands-on, multidisciplinary, and industry-relevant",
                steps: [
                    "Study NEP 2020 guidelines: Multidisciplinary, flexible, outcome-based",
                    "Analyze industry needs: What skills do employers want?",
                    "Map learning outcomes: What should students be able to do?",
                    "Design course structure: Core (50%), electives (30%), projects (20%)",
                    "Integrate research: Every course has research component",
                    "Plan hands-on learning: Labs, projects, internships (80% time!)",
                    "Include soft skills: Communication, teamwork, ethics",
                    "Design assessment: Continuous, outcome-based, not just exams",
                    "Plan industry integration: Guest lectures, projects, internships",
                    "Create flexibility: Choice-based credit system, interdisciplinary options"
                ],
                materials: ["NEP 2020 guidelines", "Industry skill requirements", "Outcome mapping template", "Course design templates"],
                expectedOutput: "Complete NEP 2020 compliant curriculum with 80% hands-on learning and strong industry integration"
            },
            {
                id: "15-B",
                title: "Faculty Dream Team Building",
                type: "Faculty Recruitment",
                duration: "2 months",
                description: "Recruit faculty who are researchers, educators, and industry-connected",
                steps: [
                    "Define faculty profiles: Research expertise + teaching passion + industry connections",
                    "Advertise widely: Academic networks, LinkedIn, conferences",
                    "Look for diversity: Gender, background, expertise, perspectives",
                    "Interview for fit: Research record + teaching philosophy + cultural fit",
                    "Check teaching ability: Ask for demo lecture",
                    "Verify industry connections: Can they bring real-world projects?",
                    "Onboard systematically: Curriculum training, research integration, mentorship",
                    "Build faculty community: Regular meetings, peer learning, collaboration",
                    "Support development: Teaching workshops, research funding, conference travel",
                    "Evaluate and improve: Student feedback, peer review, continuous improvement"
                ],
                materials: ["Faculty profile templates", "Interview rubrics", "Demo lecture guidelines", "Onboarding checklist"],
                expectedOutput: "High-quality faculty team of 5-8 members with strong research, teaching, and industry credentials"
            },
            {
                id: "15-C",
                title: "Industry-Academia Integration Workshop",
                type: "Partnership Building",
                duration: "1 month",
                description: "Create seamless bridge between classroom and industry",
                steps: [
                    "Identify industry partners: Companies aligned with program focus",
                    "Design industry advisory board: Guide curriculum, provide feedback",
                    "Plan guest lectures: Industry experts share real-world insights",
                    "Create internship program: Every student gets industry experience",
                    "Design capstone projects: Solve real industry problems",
                    "Establish mentorship: Industry professionals mentor students",
                    "Plan industry visits: Students see research in action",
                    "Create job placement pipeline: From classroom to career",
                    "Measure outcomes: Placement rates, startup creation, impact",
                    "Iterate and improve: Continuous feedback from all stakeholders"
                ],
                materials: ["Industry partner list", "Advisory board charter", "Internship program guide", "Project proposal templates"],
                expectedOutput: "Strong industry-academia integration with internships, projects, mentorship, and placement support"
            }
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
