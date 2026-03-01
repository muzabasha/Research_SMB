'use client'

import Link from 'next/link'
import { Play, Users, Lightbulb, ArrowRight, Sparkles, Award, Target, BookOpen, Rocket, Zap, Calendar, CheckCircle, TrendingUp, Brain, Globe, Beaker } from 'lucide-react'
import ResourceLibrary from '@/components/ResourceLibrary'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/30 shadow-lg">
              <Sparkles className="w-4 h-4 animate-pulse" />
              NEP 2020 Aligned • Experiential Learning • AI-Powered
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              From Zero to
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Research Excellence
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform yourself through <span className="font-bold text-yellow-300">15 interactive stages</span>.
              Learn by doing, not just listening. Make research fun, engaging, and impactful!
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-10 text-white">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">15</div>
                <div className="text-sm md:text-base text-white/80">Stages</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
                <div className="text-sm md:text-base text-white/80">Phases</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">80%</div>
                <div className="text-sm md:text-base text-white/80">Hands-On</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-sm md:text-base text-white/80">Researchers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/journey"
                className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-3 text-lg hover:scale-105 transform"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/virtual-lab"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2 text-lg hover:scale-105 transform"
              >
                <Beaker className="w-5 h-5" />
                Virtual Lab
              </Link>
              <Link
                href="/timeline"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2 text-lg border-2 border-white/30"
              >
                <Calendar className="w-5 h-5" />
                View Timeline
              </Link>
              <Link
                href="/resources/ai-research-prompts"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2 text-lg hover:scale-105 transform"
              >
                <Brain className="w-5 h-5" />
                AI Prompts
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)" />
          </svg>
        </div>
      </div>

      {/* NEW: AI Research Prompts Highlight */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-6xl shadow-2xl">
                  🤖
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  NEW TOOL
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ethical Use of AI in Research Journey
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Domain-specific AI prompts for every research stage with guidelines, examples, and ethical considerations.
                  Learn how to effectively leverage AI tools while maintaining academic integrity.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm">
                    ✓ 15 Stage-Specific Prompts
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm">
                    ✓ Usage Guidelines
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm">
                    ✓ Sample Inputs & Outputs
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm">
                    ✓ Ethical Considerations
                  </span>
                </div>
                <Link
                  href="/resources/ai-research-prompts"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-2xl transition-all text-lg"
                >
                  <Lightbulb className="w-5 h-5" />
                  Explore AI Prompts
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Section - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Mindset Transformation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mindset</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience real transformation through experiential learning at every stage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { from: 'Rigid', to: 'Proactive', icon: Zap, color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
            { from: 'Blaming', to: 'Owning', icon: Target, color: 'green', gradient: 'from-green-500 to-emerald-500' },
            { from: 'Consumer', to: 'Producer', icon: Rocket, color: 'purple', gradient: 'from-purple-500 to-pink-500' },
            { from: 'Solo', to: 'Collaborative', icon: Users, color: 'orange', gradient: 'from-orange-500 to-red-500' },
            { from: 'Theory', to: 'Practice', icon: BookOpen, color: 'indigo', gradient: 'from-indigo-500 to-purple-500' },
            { from: 'Passive', to: 'Active', icon: Sparkles, color: 'pink', gradient: 'from-pink-500 to-rose-500' }
          ].map((transformation, index) => {
            const Icon = transformation.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${transformation.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-red-600 font-bold text-lg mb-1 line-through decoration-2">{transformation.from}</div>
                    <div className="text-gray-400 text-sm">Old Mindset</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-purple-500 group-hover:scale-125 transition-all flex-shrink-0" />
                  <div className="flex-1 text-right">
                    <div className="text-green-600 font-bold text-lg mb-1">{transformation.to}</div>
                    <div className="text-gray-400 text-sm">New Mindset</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Journey Phases - Enhanced */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Complete Research Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15-Stage Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five progressive phases from foundation to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                phase: 'Foundation',
                stages: '1-3',
                icon: BookOpen,
                gradient: 'from-blue-500 to-cyan-500',
                description: 'Discover domain, read papers, find gaps',
                duration: '8-12 weeks'
              },
              {
                phase: 'Execution',
                stages: '4-6',
                icon: Target,
                gradient: 'from-green-500 to-emerald-500',
                description: 'Implement, write paper, draft patent',
                duration: '6-12 months'
              },
              {
                phase: 'Funding',
                stages: '7-9',
                icon: Lightbulb,
                gradient: 'from-purple-500 to-pink-500',
                description: 'Seed, national, international proposals',
                duration: '3-6 months'
              },
              {
                phase: 'Lab Development',
                stages: '10-12',
                icon: Rocket,
                gradient: 'from-orange-500 to-red-500',
                description: 'Setup lab, build prototypes, scale',
                duration: '2-5 years'
              },
              {
                phase: 'Excellence',
                stages: '13-15',
                icon: Award,
                gradient: 'from-indigo-500 to-purple-500',
                description: 'Industry collaboration, CoE, programs',
                duration: '3-5 years'
              }
            ].map((phase, index) => {
              const Icon = phase.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{phase.phase}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                      Stages {phase.stages}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{phase.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {phase.duration}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/journey"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl transition-all text-lg hover:scale-105 transform"
            >
              Explore All 15 Stages
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Proven Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why This <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiential learning that transforms researchers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">80% Hands-On</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn by doing, not just listening. Interactive activities, workshops, and real projects at every stage.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">vs 20% theory</div>
            </div>
          </div>

          <div className="group text-center bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Collaborative</h3>
            <p className="text-gray-600 leading-relaxed">
              Work with peers, learn from each other, build your research network through group activities.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">500+ researchers connected</div>
            </div>
          </div>

          <div className="group text-center bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fun & Engaging</h3>
            <p className="text-gray-600 leading-relaxed">
              Gamification, competitions, funny analogies, and interactive challenges make learning enjoyable.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-500">95% engagement rate</div>
            </div>
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
