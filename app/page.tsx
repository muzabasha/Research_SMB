'use client'

import Link from 'next/link'
import { Play, Users, GraduationCap, Building2, Lightbulb, ArrowRight, Sparkles, Award, Target, BookOpen, Rocket, CheckCircle, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              NEP 2020 Aligned • Experiential Learning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              From Zero to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Research Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform yourself through 15 interactive stages. Learn by doing, not just listening.
              Make research fun, engaging, and impactful!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/journey"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 text-lg"
              >
                <Play className="w-5 h-5" />
                Start Your Journey
              </Link>
              <Link
                href="/roadmap"
                className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200 flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                View Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Mindset</h2>
          <p className="text-gray-600">Experience real transformation through experiential learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { from: 'Rigid', to: 'Proactive', icon: Zap, color: 'blue' },
            { from: 'Blaming', to: 'Owning', icon: Target, color: 'green' },
            { from: 'Consumer', to: 'Producer', icon: Rocket, color: 'purple' },
            { from: 'Solo', to: 'Collaborative', icon: Users, color: 'orange' },
            { from: 'Theory', to: 'Practice', icon: BookOpen, color: 'red' },
            { from: 'Passive', to: 'Active', icon: Sparkles, color: 'pink' }
          ].map((transformation, index) => {
            const Icon = transformation.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${transformation.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${transformation.color}-600`} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-600 font-semibold">{transformation.from}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-green-600 font-semibold">{transformation.to}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Journey Phases */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your 15-Stage Journey</h2>
            <p className="text-gray-600">Five phases from foundation to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                phase: 'Foundation',
                stages: '1-3',
                icon: BookOpen,
                color: 'blue',
                description: 'Discover domain, read papers, find gaps'
              },
              {
                phase: 'Execution',
                stages: '4-6',
                icon: Target,
                color: 'green',
                description: 'Implement, write paper, draft patent'
              },
              {
                phase: 'Funding',
                stages: '7-9',
                icon: Lightbulb,
                color: 'purple',
                description: 'Seed, national, international proposals'
              },
              {
                phase: 'Lab Development',
                stages: '10-12',
                icon: Rocket,
                color: 'orange',
                description: 'Setup lab, build prototypes, scale'
              },
              {
                phase: 'Excellence',
                stages: '13-15',
                icon: Award,
                color: 'red',
                description: 'Industry collaboration, CoE, programs'
              }
            ].map((phase, index) => {
              const Icon = phase.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-300 transition-all">
                  <div className={`w-12 h-12 bg-${phase.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${phase.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{phase.phase}</h3>
                  <div className="text-sm text-gray-600 mb-3">Stages {phase.stages}</div>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Explore All 15 Stages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This Works</h2>
          <p className="text-gray-600">Experiential learning that transforms</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">80% Hands-On</h3>
            <p className="text-gray-600">Learn by doing, not just listening. Interactive activities at every stage.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative</h3>
            <p className="text-gray-600">Work with peers, learn from each other, build your research network.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fun & Engaging</h3>
            <p className="text-gray-600">Gamification, competitions, funny analogies make learning enjoyable.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of students and faculty on the journey from zero to research excellence
          </p>
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all text-lg"
          >
            <Play className="w-5 h-5" />
            Start Your Journey Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Research Navigator</h3>
              <p className="text-gray-400 text-sm">
                Transforming research culture through experiential learning
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/journey" className="hover:text-white">Journey</Link></li>
                <li><Link href="/roadmap" className="hover:text-white">Roadmap</Link></li>
                <li><Link href="/student" className="hover:text-white">Student Portal</Link></li>
                <li><Link href="/faculty" className="hover:text-white">Faculty Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Activity Guides</a></li>
                <li><a href="#" className="hover:text-white">Facilitator Manual</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Dr. Syed Muzamil Basha<br />
                Professor, REVA University<br />
                School of Computer Science
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Research Navigator. NEP 2020 Aligned. Built with ❤️ for experiential learning.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
