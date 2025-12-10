'use client'
import { ArrowUpRight, Github, Calendar, Target, BookOpen, Code, Lightbulb, FolderOpen } from 'lucide-react'
import { PageLayout, PageSection, SectionHeader, PageHeader } from '@/components/page-layout'
import { CHALLENGES } from '../data'

const typeIcons = {
  coding: Code,
  reading: BookOpen,
  learning: Lightbulb,
  project: FolderOpen
}

const typeColors = {
  coding: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  reading: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  learning: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  project: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
}

function ChallengeCard({ challenge }: { challenge: typeof CHALLENGES[0] }) {
  const Icon = typeIcons[challenge.type]
  
  // Calculate efficiency
  const efficiency = challenge.plannedDays && challenge.actualDaysSpent 
    ? Math.round(((challenge.plannedDays - challenge.actualDaysSpent) / challenge.plannedDays) * 100)
    : null
  
  const isAheadOfSchedule = efficiency && efficiency > 0
  const isBehindSchedule = efficiency && efficiency < 0
  
  return (
    <div className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${typeColors[challenge.type]}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-tight">{challenge.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[challenge.type]}`}>
                {challenge.type}
              </span>
              {challenge.status === 'active' && (
                <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Live
                </span>
              )}
              {challenge.status === 'completed' && efficiency !== null && (
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  isAheadOfSchedule 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    : isBehindSchedule
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                }`}>
                  {isAheadOfSchedule ? `${Math.abs(efficiency)}% faster` : 
                   isBehindSchedule ? `${Math.abs(efficiency)}% slower` : 'On time'}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {challenge.githubRepo && (
          <a
            href={challenge.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {challenge.description}
      </p>

      {challenge.challengeProgress !== undefined && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Challenge Progress</span>
            <span className="font-medium">{challenge.challengeProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
            <div 
              className="bg-black dark:bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${challenge.challengeProgress}%` }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
        {challenge.currentDay && (
          <span className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            Day {challenge.currentDay} content
          </span>
        )}
        {challenge.actualDaysSpent && (
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {challenge.actualDaysSpent} days spent
          </span>
        )}
        {challenge.plannedDays && (
          <span className="text-gray-500 dark:text-gray-500">
            Planned: {challenge.plannedDays} days
          </span>
        )}
        {challenge.status === 'completed' && challenge.endDate && (
          <span className="text-gray-500 dark:text-gray-500">
            Completed: {new Date(challenge.endDate).toLocaleDateString()}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {challenge.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ChallengesPage() {
  const activeChallenges = CHALLENGES.filter(c => c.status === 'active')
  const completedChallenges = CHALLENGES.filter(c => c.status === 'completed')

  return (
    <PageLayout>
      <PageHeader 
        title="Current Challenges" 
        description="Tracking my learning journey through coding challenges, reading goals, and skill-building projects."
      />

      {activeChallenges.length > 0 && (
        <PageSection>
          <SectionHeader>Live Challenges</SectionHeader>
          <div className="space-y-6">
            {activeChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </PageSection>
      )}

      {completedChallenges.length > 0 && (
        <PageSection>
          <SectionHeader>Recently Completed</SectionHeader>
          <div className="space-y-6">
            {completedChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </PageSection>
      )}

      {activeChallenges.length === 0 && completedChallenges.length === 0 && (
        <PageSection>
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No challenges yet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for updates on my learning journey!
            </p>
          </div>
        </PageSection>
      )}
    </PageLayout>
  )
}
