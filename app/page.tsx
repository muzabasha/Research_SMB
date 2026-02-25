import Link from 'next/link'
import { GraduationCap, Users, Beaker, TrendingUp, BookOpen, Target, Award, Lightbulb } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">🎓 Research Navigator 4.1</h1>
          <p className="text-sm text-gray-600">Your Guide from Zero to Impactful Research</p>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NEP 2020 Aligned • Experiential Learning Platform
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Start Your Research Journey Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From complete beginner to impactful researcher. We provide step-by-step guidance,
            educational resources, and practical tools to help you succeed in research.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/student" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Start Learning Now
            </Link>
            <Link href="/faculty" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all border-2 border-blue-600">
              Explore Funding
            </Link>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-blue-100">Experience Required</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Guided Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-blue-100">Impact Potential</div>
            </div>
          </div>
        </div>

        {/* Main Portals */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Choose Your Path</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/student" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500 h-full">
                <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Student Portal</h3>
                <p className="text-gray-600 mb-4">Interactive research learning simulator with step-by-step guidance</p>
                <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Start Learning →
                </div>
              </div>
            </Link>

            <Link href="/faculty" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-500 h-full">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Faculty Studio</h3>
                <p className="text-gray-600 mb-4">Funding intelligence, proposal builder, and research management</p>
                <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Explore Funding →
                </div>
              </div>
            </Link>

            <Link href="/lab" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-500 h-full">
                <Beaker className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Lab Incubator</h3>
                <p className="text-gray-600 mb-4">Build and track research labs with ROI prediction</p>
                <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Create Lab →
                </div>
              </div>
            </Link>

            <Link href="/dashboard" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-orange-500 h-full">
                <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Dashboard</h3>
                <p className="text-gray-600 mb-4">Institutional analytics and research insights</p>
                <div className="text-orange-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Analytics →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Your Research Learning Journey</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">1. Learn Fundamentals</h4>
              <p className="text-gray-600 text-sm">Understand what research is, why it matters, and how to get started</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">2. Plan Your Research</h4>
              <p className="text-gray-600 text-sm">Define problems, review literature, design methodology step-by-step</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">3. Create Impact</h4>
              <p className="text-gray-600 text-sm">Execute research, publish findings, and make meaningful contributions</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Research Navigator?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Guided Learning</h4>
              <p className="text-gray-600 text-sm">Step-by-step guidance from zero to expert</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="font-bold mb-2">Educational Content</h4>
              <p className="text-gray-600 text-sm">Tips, best practices, and resources at every step</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-bold mb-2">Smart Tools</h4>
              <p className="text-gray-600 text-sm">Interactive builders and planning tools</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold mb-2">NEP 2020 Aligned</h4>
              <p className="text-gray-600 text-sm">Experiential learning approach</p>
            </div>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Complete Beginner? Start Here!</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 text-blue-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Understand What Research Is</h4>
                  <p className="text-gray-600">Research is systematic investigation to discover new knowledge or solve problems. It's not just for scientists - anyone can do research!</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-purple-100 text-purple-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Explore Your Interests</h4>
                  <p className="text-gray-600">Visit the Student Portal and browse research domains. Pick something that excites you - passion drives persistence!</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-green-100 text-green-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Follow the Interactive Guide</h4>
                  <p className="text-gray-600">Our platform walks you through each step with tips, examples, and best practices. Learn by doing!</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-orange-100 text-orange-600 font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Build Your Research Plan</h4>
                  <p className="text-gray-600">By the end, you'll have a complete research plan ready to discuss with mentors or supervisors.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                <strong>Remember:</strong> Every expert researcher started exactly where you are now. The journey of a thousand miles begins with a single step!
              </p>
              <Link href="/student" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Take Your First Step →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
          <Lightbulb className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Research Journey?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students and faculty transforming their research careers
          </p>
          <Link href="/student" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
            Begin Your Journey Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600">
          <p className="mb-2">Built with ❤️ for NEP 2020 Experiential Research Learning</p>
          <p className="text-sm">Empowering the next generation of researchers</p>
        </div>
      </footer>
    </div>
  )
}
