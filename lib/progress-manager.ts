// Progress Management System with Local Storage Persistence

export interface StageProgress {
    stageId: number
    status: 'not-started' | 'in-progress' | 'completed'
    startedAt?: string
    completedAt?: string
    preAssessmentScore?: number
    postAssessmentScore?: number
    activitiesCompleted: string[]
    timeSpent: number // in minutes
    notes: string
    badges: string[]
}

export interface UserProgress {
    userId: string
    userName: string
    userType: 'student' | 'faculty' | 'researcher'
    level: 'ug' | 'pg' | 'phd' | 'faculty'
    startedAt: string
    lastActive: string
    stages: StageProgress[]
    totalTimeSpent: number
    overallProgress: number
    achievements: Achievement[]
    preferences: UserPreferences
}

export interface Achievement {
    id: string
    title: string
    description: string
    icon: string
    unlockedAt: string
    category: 'completion' | 'speed' | 'quality' | 'consistency' | 'collaboration'
}

export interface UserPreferences {
    theme: 'light' | 'dark' | 'auto'
    notifications: boolean
    emailUpdates: boolean
    showHints: boolean
    language: 'en' | 'hi' | 'kn'
}

const STORAGE_KEY = 'research-navigator-progress'

// Initialize default progress
export function initializeProgress(userId: string, userName: string, userType: 'student' | 'faculty' | 'researcher', level: 'ug' | 'pg' | 'phd' | 'faculty'): UserProgress {
    const stages: StageProgress[] = Array.from({ length: 15 }, (_, i) => ({
        stageId: i + 1,
        status: 'not-started',
        activitiesCompleted: [],
        timeSpent: 0,
        notes: '',
        badges: []
    }))

    return {
        userId,
        userName,
        userType,
        level,
        startedAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        stages,
        totalTimeSpent: 0,
        overallProgress: 0,
        achievements: [],
        preferences: {
            theme: 'light',
            notifications: true,
            emailUpdates: false,
            showHints: true,
            language: 'en'
        }
    }
}

// Load progress from localStorage
export function loadProgress(): UserProgress | null {
    if (typeof window === 'undefined') return null

    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return null
        return JSON.parse(stored)
    } catch (error) {
        console.error('Error loading progress:', error)
        return null
    }
}

// Save progress to localStorage
export function saveProgress(progress: UserProgress): void {
    if (typeof window === 'undefined') return

    try {
        progress.lastActive = new Date().toISOString()
        progress.overallProgress = calculateOverallProgress(progress)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch (error) {
        console.error('Error saving progress:', error)
    }
}

// Update stage progress
export function updateStageProgress(
    progress: UserProgress,
    stageId: number,
    updates: Partial<StageProgress>
): UserProgress {
    const stageIndex = progress.stages.findIndex(s => s.stageId === stageId)
    if (stageIndex === -1) return progress

    progress.stages[stageIndex] = {
        ...progress.stages[stageIndex],
        ...updates
    }

    // Check for achievements
    checkAndUnlockAchievements(progress, stageId)

    saveProgress(progress)
    return progress
}

// Mark stage as started
export function startStage(progress: UserProgress, stageId: number): UserProgress {
    return updateStageProgress(progress, stageId, {
        status: 'in-progress',
        startedAt: new Date().toISOString()
    })
}

// Mark stage as completed
export function completeStage(progress: UserProgress, stageId: number): UserProgress {
    return updateStageProgress(progress, stageId, {
        status: 'completed',
        completedAt: new Date().toISOString()
    })
}

// Add activity completion
export function completeActivity(
    progress: UserProgress,
    stageId: number,
    activityId: string
): UserProgress {
    const stage = progress.stages.find(s => s.stageId === stageId)
    if (!stage) return progress

    if (!stage.activitiesCompleted.includes(activityId)) {
        stage.activitiesCompleted.push(activityId)
    }

    return updateStageProgress(progress, stageId, stage)
}

// Update time spent
export function addTimeSpent(
    progress: UserProgress,
    stageId: number,
    minutes: number
): UserProgress {
    const stage = progress.stages.find(s => s.stageId === stageId)
    if (!stage) return progress

    stage.timeSpent += minutes
    progress.totalTimeSpent += minutes

    return updateStageProgress(progress, stageId, stage)
}

// Calculate overall progress
export function calculateOverallProgress(progress: UserProgress): number {
    const completed = progress.stages.filter(s => s.status === 'completed').length
    return Math.round((completed / 15) * 100)
}

// Get stage progress
export function getStageProgress(progress: UserProgress, stageId: number): StageProgress | undefined {
    return progress.stages.find(s => s.stageId === stageId)
}

// Check if stage is unlocked
export function isStageUnlocked(progress: UserProgress, stageId: number): boolean {
    // Stage 1 is always unlocked
    if (stageId === 1) return true

    // For now, all stages are unlocked for exploration
    // In production, you might want sequential unlocking
    return true

    // Sequential unlocking logic (commented out):
    // const previousStage = progress.stages.find(s => s.stageId === stageId - 1)
    // return previousStage?.status === 'completed'
}

// Achievement checking
function checkAndUnlockAchievements(progress: UserProgress, stageId: number): void {
    const stage = progress.stages.find(s => s.stageId === stageId)
    if (!stage) return

    // First stage completion
    if (stageId === 1 && stage.status === 'completed') {
        unlockAchievement(progress, {
            id: 'first-steps',
            title: 'First Steps',
            description: 'Completed your first research stage!',
            icon: '🎯',
            unlockedAt: new Date().toISOString(),
            category: 'completion'
        })
    }

    // Phase completion
    const phaseStages = getPhaseStages(stageId)
    const phaseCompleted = phaseStages.every(id =>
        progress.stages.find(s => s.stageId === id)?.status === 'completed'
    )
    if (phaseCompleted) {
        const phaseName = getPhaseNameByStage(stageId)
        unlockAchievement(progress, {
            id: `phase-${phaseName.toLowerCase()}`,
            title: `${phaseName} Master`,
            description: `Completed all stages in ${phaseName} phase!`,
            icon: '🏆',
            unlockedAt: new Date().toISOString(),
            category: 'completion'
        })
    }

    // Speed achievements
    if (stage.timeSpent && stage.timeSpent < 60) {
        unlockAchievement(progress, {
            id: `speed-${stageId}`,
            title: 'Speed Learner',
            description: `Completed Stage ${stageId} in under an hour!`,
            icon: '⚡',
            unlockedAt: new Date().toISOString(),
            category: 'speed'
        })
    }

    // Quality achievements (high assessment scores)
    if (stage.postAssessmentScore && stage.postAssessmentScore >= 90) {
        unlockAchievement(progress, {
            id: `quality-${stageId}`,
            title: 'Excellence Achieved',
            description: `Scored 90%+ in Stage ${stageId} assessment!`,
            icon: '⭐',
            unlockedAt: new Date().toISOString(),
            category: 'quality'
        })
    }

    // Consistency achievements (daily activity)
    const recentActivity = progress.stages.filter(s => {
        if (!s.completedAt) return false
        const daysSince = Math.floor(
            (Date.now() - new Date(s.completedAt).getTime()) / (1000 * 60 * 60 * 24)
        )
        return daysSince <= 7
    })
    if (recentActivity.length >= 3) {
        unlockAchievement(progress, {
            id: 'consistency-week',
            title: 'Consistent Learner',
            description: 'Completed 3 stages in one week!',
            icon: '🔥',
            unlockedAt: new Date().toISOString(),
            category: 'consistency'
        })
    }

    // All stages completed
    const allCompleted = progress.stages.every(s => s.status === 'completed')
    if (allCompleted) {
        unlockAchievement(progress, {
            id: 'journey-complete',
            title: 'Research Master',
            description: 'Completed the entire research journey!',
            icon: '👑',
            unlockedAt: new Date().toISOString(),
            category: 'completion'
        })
    }
}

function unlockAchievement(progress: UserProgress, achievement: Achievement): void {
    // Check if already unlocked
    if (progress.achievements.some(a => a.id === achievement.id)) return

    progress.achievements.push(achievement)

    // Show notification (if enabled)
    if (progress.preferences.notifications && typeof window !== 'undefined') {
        showAchievementNotification(achievement)
    }
}

function showAchievementNotification(achievement: Achievement): void {
    // This would integrate with a toast/notification system
    console.log(`🎉 Achievement Unlocked: ${achievement.title}`)
}

function getPhaseStages(stageId: number): number[] {
    if (stageId <= 3) return [1, 2, 3]
    if (stageId <= 6) return [4, 5, 6]
    if (stageId <= 9) return [7, 8, 9]
    if (stageId <= 12) return [10, 11, 12]
    return [13, 14, 15]
}

function getPhaseNameByStage(stageId: number): string {
    if (stageId <= 3) return 'Foundation'
    if (stageId <= 6) return 'Execution'
    if (stageId <= 9) return 'Funding'
    if (stageId <= 12) return 'Lab Development'
    return 'Excellence'
}

// Export progress as JSON
export function exportProgress(progress: UserProgress): string {
    return JSON.stringify(progress, null, 2)
}

// Import progress from JSON
export function importProgress(jsonString: string): UserProgress | null {
    try {
        const progress = JSON.parse(jsonString)
        saveProgress(progress)
        return progress
    } catch (error) {
        console.error('Error importing progress:', error)
        return null
    }
}

// Clear all progress
export function clearProgress(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(STORAGE_KEY)
}

// Get statistics
export interface ProgressStats {
    totalStages: number
    completedStages: number
    inProgressStages: number
    notStartedStages: number
    totalTimeSpent: number
    averageTimePerStage: number
    completionRate: number
    achievements: number
    currentStreak: number
}

export function getProgressStats(progress: UserProgress): ProgressStats {
    const completed = progress.stages.filter(s => s.status === 'completed')
    const inProgress = progress.stages.filter(s => s.status === 'in-progress')
    const notStarted = progress.stages.filter(s => s.status === 'not-started')

    return {
        totalStages: 15,
        completedStages: completed.length,
        inProgressStages: inProgress.length,
        notStartedStages: notStarted.length,
        totalTimeSpent: progress.totalTimeSpent,
        averageTimePerStage: completed.length > 0
            ? Math.round(progress.totalTimeSpent / completed.length)
            : 0,
        completionRate: progress.overallProgress,
        achievements: progress.achievements.length,
        currentStreak: calculateStreak(progress)
    }
}

function calculateStreak(progress: UserProgress): number {
    const completedStages = progress.stages
        .filter(s => s.completedAt)
        .sort((a, b) => new Date(b.completedAt!).getTime() - new Date(a.completedAt!).getTime())

    if (completedStages.length === 0) return 0

    let streak = 1
    let currentDate = new Date(completedStages[0].completedAt!)

    for (let i = 1; i < completedStages.length; i++) {
        const prevDate = new Date(completedStages[i].completedAt!)
        const daysDiff = Math.floor(
            (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24)
        )

        if (daysDiff <= 1) {
            streak++
            currentDate = prevDate
        } else {
            break
        }
    }

    return streak
}
