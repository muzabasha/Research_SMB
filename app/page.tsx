import Link from 'next/link'
import { GraduationCap, Users, Beaker, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">🎓 Research Navigator 4.1</h1>
          <p className="text-sm text-gray-600">NEP 2020 Experiential Research Ecosystem</p>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Transform Research Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered platform for experiential research, funding intelligence, and lab incubation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/student" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Student Portal</h3>
              <p className="text-gray-600 mb-4">Interactive research learning simulator</p>
              <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Start Learning →
              </div>
            </div>
          </Link>

          <Link href="/faculty" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-500">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Faculty Studio</h3>
              <p className="text-gray-600 mb-4">Funding intelligence & proposal builder</p>
              <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Explore Funding →
              </div>
            </div>
          </Link>

          <Link href="/lab" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-500">
              <Beaker className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Lab Incubator</h3>
              <p className="text-gray-600 mb-4">Build & track research labs</p>
              <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Create Lab →
              </div>
            </div>
          </Link>

          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-orange-500">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Dashboard</h3>
              <p className="text-gray-600 mb-4">Institutional analytics & insights</p>
              <div className="text-orange-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View Analytics →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold mb-2">AI Matching Engine</h4>
              <p className="text-gray-600 text-sm">Semantic similarity between faculty expertise and funding calls</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📊</div>
              <h4 className="font-bold mb-2">ROI Prediction</h4>
              <p className="text-gray-600 text-sm">Data-driven lab funding success forecasting</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🤖</div>
              <h4 className="font-bold mb-2">AI Reviewer</h4>
              <p className="text-gray-600 text-sm">Automated proposal evaluation and feedback</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
