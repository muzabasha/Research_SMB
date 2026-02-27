'use client'

import Link from 'next/link'
import { Play, Users, Lightbulb, ArrowRight, Sparkles, Award, Target, BookOpen, Rocket, Zap, Calendar, CheckCircle } from 'lucide-react'
import ResourceLibrary from '@/components/ResourceLibrary'

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
                href="/timeline"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                View Timeline
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

      {/* Resource Person Section - NEW */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered Research Assistant
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Resource Person</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized guidance, instant answers, and expert support throughout your research journey
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Features */}
              <div className="p-10 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                <h3 className="text-3xl font-bold mb-6">Scholar Sparkle</h3>
                <p className="text-lg mb-8 text-purple-100">
                  Your AI-powered research companion that understands your journey and provides contextual support at every stage.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Instant Answers</h4>
                      <p className="text-purple-100 text-sm">Get immediate responses to your research questions, 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Personalized Guidance</h4>
                      <p className="text-purple-100 text-sm">Tailored advice based on your stage and research area</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Research Resources</h4>
                      <p className="text-purple-100 text-sm">Access curated papers, tools, and templates instantly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Mentor Connection</h4>
                      <p className="text-purple-100 text-sm">Connect with experts and get feedback on your work</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="https://scholar-sparkle-web.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-2xl transition-all text-lg group"
                  >
                    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Launch Scholar Sparkle
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side - Preview/Demo */}
              <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <p className="text-gray-700 font-medium">How do I identify a good research gap?</p>
                    </div>
                    <div className="flex items-start gap-3 ml-11">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        Great question! Use the NIFI framework: Novel, Important, Feasible, Interesting. Let me guide you through each criterion...
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">Q</span>
                      </div>
                      <p className="text-gray-700 font-medium">Can you suggest papers on AI in healthcare?</p>
                    </div>
                    <div className="flex items-start gap-3 ml-11">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        Here are 5 highly-cited recent papers in AI for healthcare diagnostics, along with their key contributions...
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What You Can Ask
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Research methodology questions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Paper recommendations
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Writing and formatting help
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Tool and software suggestions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        Career guidance and opportunities
                      </li>
                    </ul>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-500 mb-3">Available 24/7 • Free for all students</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">Join 500+ researchers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Library Section - NEW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ResourceLibrary />
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
