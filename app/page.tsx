'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2, Minimize2, Mic, Users, GraduationCap, Building2, Lightbulb, CheckCircle, ArrowRight, Sparkles, Award, Target } from 'lucide-react'
import { SPEAKER_PROFILE, ALL_QA, STUDENT_QA, FACULTY_QA, INSTITUTE_QA } from '@/lib/comprehensive-qa-data'

export default function InteractivePresentationHome() {
  const [presentationMode, setPresentationMode] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showInterpretation, setShowInterpretation] = useState(false)

  // Generate all presentation slides
  const generateSlides = () => {
    const slides: any[] = []

    // Welcome slide
    slides.push({ type: 'welcome' })

    // Speaker introduction
    slides.push({ type: 'speaker' })

    // Overview
    slides.push({ type: 'overview' })

    // Student Roadmap
    slides.push({ type: 'roadmap-intro', roadmap: 'student' })
    STUDENT_QA.forEach((qa) => {
      slides.push({ type: 'stage-intro', data: qa })
      slides.push({ type: 'question', data: qa })
      slides.push({ type: 'answer', data: qa })
    })

    // Faculty Roadmap
    slides.push({ type: 'roadmap-intro', roadmap: 'faculty' })
    FACULTY_QA.forEach((qa) => {
      slides.push({ type: 'stage-intro', data: qa })
      slides.push({ type: 'question', data: qa })
      slides.push({ type: 'answer', data: qa })
    })

    // Institute Roadmap
    slides.push({ type: 'roadmap-intro', roadmap: 'institute' })
    INSTITUTE_QA.forEach((qa) => {
      slides.push({ type: 'stage-intro', data: qa })
      slides.push({ type: 'question', data: qa })
      slides.push({ type: 'answer', data: qa })
    })

    // Closing
    slides.push({ type: 'closing' })

    return slides
  }

  const allSlides = generateSlides()

  // Auto-advance
  useEffect(() => {
    if (isPlaying && presentationMode) {
      const timer = setInterval(() => {
        if (allSlides[currentSlide]?.type !== 'question') {
          nextSlide()
        }
      }, 6000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, presentationMode, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allSlides.length)
    setSelectedAnswer(null)
    setShowInterpretation(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length)
    setSelectedAnswer(null)
    setShowInterpretation(false)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleAnswerSelect = (optionId: string) => {
    setSelectedAnswer(optionId)
    setShowInterpretation(true)
  }

  const getRoadmapColor = (roadmap: string) => {
    const colors = {
      student: { bg: 'from-blue-600 to-blue-700', text: 'text-blue-600', light: 'bg-blue-50' },
      faculty: { bg: 'from-purple-600 to-purple-700', text: 'text-purple-600', light: 'bg-purple-50' },
      institute: { bg: 'from-green-600 to-green-700', text: 'text-green-600', light: 'bg-green-50' }
    }
    return colors[roadmap as keyof typeof colors] || colors.student
  }

  const renderSlide = () => {
    const slide = allSlides[currentSlide]
    if (!slide) return null

    switch (slide.type) {
      case 'welcome':
        return (
          <div className="text-center animate-fadeIn">
            <Sparkles className="w-24 h-24 mx-auto mb-8 text-yellow-400 animate-pulse" />
            <h1 className="text-7xl font-bold mb-6 animate-slideUp">Research Excellence Orientation</h1>
            <p className="text-3xl text-gray-300 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Interactive Journey from Zero to Impactful Research
            </p>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <p className="text-2xl text-gray-200 mb-4">
                This is NOT a lecture - it's an interactive experience!
              </p>
              <p className="text-xl text-gray-300">
                You'll answer questions, reflect on your mindset, and discover your research path
              </p>
            </div>
          </div>
        )

      case 'speaker':
        return (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-4">{SPEAKER_PROFILE.name}</h2>
              <p className="text-2xl text-gray-300 mb-6">{SPEAKER_PROFILE.role}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {SPEAKER_PROFILE.credentials.map((cred, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <span className="text-xl">{cred}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                Philosophy
              </h3>
              <p className="text-2xl text-gray-200 mb-6">{SPEAKER_PROFILE.philosophy}</p>
              <p className="text-xl text-gray-300 italic">{SPEAKER_PROFILE.welcomeMessage}</p>
            </div>
          </div>
        )

      case 'overview':
        return (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <h2 className="text-6xl font-bold text-center mb-12">What We'll Cover Today</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <GraduationCap className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Student Journey</h3>
                <p className="text-xl text-gray-300 mb-4">7 Stages</p>
                <p className="text-lg text-gray-400">From curious beginner to published researcher</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <Users className="w-16 h-16 text-purple-400 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Faculty Excellence</h3>
                <p className="text-xl text-gray-300 mb-4">7 Stages</p>
                <p className="text-lg text-gray-400">From profile building to research leadership</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <Building2 className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Institutional Strategy</h3>
                <p className="text-xl text-gray-300 mb-4">7 Stages</p>
                <p className="text-lg text-gray-400">From culture building to ranking excellence</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500 rounded-2xl p-8 text-center">
              <p className="text-3xl font-bold mb-4">21 Interactive Q&A Sessions</p>
              <p className="text-xl text-gray-300 mb-2">Duration: 90-120 minutes</p>
              <p className="text-lg text-gray-400">Format: Question → Reflection → Interpretation → Action</p>
            </div>
          </div>
        )

      case 'roadmap-intro':
        const roadmapData = {
          student: { title: 'Student Research Journey', subtitle: 'From Zero to Published Researcher', icon: GraduationCap },
          faculty: { title: 'Faculty Research Excellence', subtitle: 'From Profile Building to Research Leadership', icon: Users },
          institute: { title: 'Institutional Strategy', subtitle: 'From Culture Building to Ranking Excellence', icon: Building2 }
        }
        const roadmap = roadmapData[slide.roadmap as keyof typeof roadmapData]
        const Icon = roadmap.icon
        const colors = getRoadmapColor(slide.roadmap)

        return (
          <div className="max-w-5xl mx-auto animate-fadeIn text-center">
            <Icon className="w-24 h-24 mx-auto mb-8 animate-bounce" />
            <h2 className="text-6xl font-bold mb-6">{roadmap.title}</h2>
            <p className="text-3xl text-gray-300 mb-12">{roadmap.subtitle}</p>
            <div className={`bg-gradient-to-r ${colors.bg} rounded-2xl p-8 text-white`}>
              <p className="text-2xl mb-4">7 Transformative Stages</p>
              <p className="text-xl opacity-90">Each with interactive Q&A to assess and transform your mindset</p>
            </div>
          </div>
        )

      case 'stage-intro':
        const stageColors = getRoadmapColor(slide.data.roadmap)
        return (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="text-center mb-8">
              <div className={`inline-block bg-gradient-to-r ${stageColors.bg} text-white px-8 py-3 rounded-full text-2xl font-bold mb-6`}>
                Stage {slide.data.stage}
              </div>
              <h2 className="text-5xl font-bold mb-4">{slide.data.title}</h2>
              <p className="text-2xl text-gray-300 mb-2">⏱️ Duration: {slide.data.duration}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-yellow-400" />
                Objective
              </h3>
              <p className="text-2xl text-gray-200">{slide.data.question}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Mic className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Speaker Note:</h4>
                  <p className="text-xl text-gray-200 italic">{slide.data.speakerNote}</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'question':
        return (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-10">
              <div className="text-center mb-8">
                <Lightbulb className="w-20 h-20 mx-auto mb-6 text-yellow-400 animate-pulse" />
                <h2 className="text-4xl font-bold mb-4">💭 Reflection Time</h2>
                <p className="text-xl text-gray-300 mb-6">{slide.data.context}</p>
              </div>

              <div className="bg-white/5 rounded-xl p-8 mb-8">
                <h3 className="text-3xl font-bold text-center mb-6">{slide.data.question}</h3>
              </div>

              <div className="grid gap-4">
                {slide.data.options.map((option: any) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    className={`text-left p-6 rounded-xl transition-all text-xl ${selectedAnswer === option.id
                      ? 'bg-blue-500 text-white scale-105 shadow-2xl'
                      : 'bg-white/10 hover:bg-white/20'
                      }`}
                  >
                    <span className="text-3xl mr-4">{option.emoji}</span>
                    <span className="font-bold mr-3">{option.id.toUpperCase()}.</span>
                    {option.text}
                  </button>
                ))}
              </div>

              {selectedAnswer && !showInterpretation && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowInterpretation(true)}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-xl text-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg animate-pulse"
                  >
                    See Your Interpretation →
                  </button>
                </div>
              )}
            </div>
          </div>
        )

      case 'answer':
        if (!selectedAnswer || !showInterpretation) {
          return (
            <div className="max-w-4xl mx-auto animate-fadeIn text-center">
              <Lightbulb className="w-32 h-32 mx-auto mb-8 text-yellow-400" />
              <h2 className="text-5xl font-bold mb-6">Select an answer on the previous slide</h2>
              <p className="text-2xl text-gray-300">Go back to choose your response</p>
            </div>
          )
        }

        const interpretation = slide.data.interpretations[selectedAnswer]
        return (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-2xl font-bold mb-6">
                  Your Choice: {selectedAnswer.toUpperCase()}
                </div>
                <h2 className="text-5xl font-bold mb-4">{interpretation.title}</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-4">😄 Funny Analogy</h3>
                  <p className="text-2xl text-gray-200">{interpretation.analogy}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3">📍 Where You Are</h3>
                    <p className="text-lg text-gray-200">{interpretation.currentState}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-3">💡 Reality Check</h3>
                    <p className="text-lg text-gray-200">{interpretation.reality}</p>
                  </div>
                </div>

                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-4">✨ Better Approach</h3>
                  <p className="text-2xl text-gray-200">{interpretation.betterApproach}</p>
                </div>

                <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-4">🏛️ Institute Impact</h3>
                  <p className="text-2xl text-gray-200">{interpretation.instituteImpact}</p>
                </div>

                <div className="bg-orange-500/20 border-2 border-orange-500 rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-4">🎯 Action Tip</h3>
                  <p className="text-2xl text-gray-200">{interpretation.actionTip}</p>
                </div>

                <div className="bg-purple-500/20 border-2 border-purple-500 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <Mic className="w-10 h-10 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Speaker Insight</h3>
                      <p className="text-xl text-gray-200 italic">{interpretation.speakerInsight}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'closing':
        return (
          <div className="max-w-5xl mx-auto animate-fadeIn text-center">
            <Award className="w-32 h-32 mx-auto mb-8 text-yellow-400 animate-bounce" />
            <h2 className="text-6xl font-bold mb-8">Congratulations!</h2>
            <p className="text-3xl text-gray-300 mb-12">
              You've completed the Research Excellence Orientation
            </p>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500 rounded-2xl p-10 mb-8">
              <h3 className="text-4xl font-bold mb-6">What's Next?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 rounded-xl p-6">
                  <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Reflect</h4>
                  <p className="text-lg text-gray-300">Review your answers and action tips</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Act</h4>
                  <p className="text-lg text-gray-300">Implement your action tips TODAY</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <CheckCircle className="w-12 h-12 text-purple-400 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Engage</h4>
                  <p className="text-lg text-gray-300">Explore our interactive portals</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <p className="text-2xl text-gray-200 mb-6">
                "Research is not about being brilliant - it's about being curious, persistent, and strategic!"
              </p>
              <p className="text-xl text-gray-300">- {SPEAKER_PROFILE.name}</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (presentationMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
        {/* Controls */}
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition-all"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setPresentationMode(false)}
            className="bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition-all"
          >
            Exit
          </button>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur p-4 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur p-4 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="h-screen flex items-center justify-center p-12">
          {renderSlide()}
        </div>

        {/* Progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
          <span className="font-bold text-xl">{currentSlide + 1}</span> / {allSlides.length}
        </div>
      </div>
    )
  }

  // Landing page (non-presentation mode)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold mb-6 animate-bounce">
              🎯 Interactive Research Excellence Orientation
            </div>
            <h1 className="text-7xl font-bold text-gray-900 mb-6">
              Transform Your Research Journey
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Experience an interactive orientation with exhaustive Q&A covering all research roadmaps.
              Discover your mindset, get personalized guidance, and start your transformation today!
            </p>

            <button
              onClick={() => {
                setPresentationMode(true)
                setCurrentSlide(0)
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center gap-4 mx-auto"
            >
              <Play className="w-8 h-8" />
              Start Interactive Orientation
            </button>

            <p className="text-gray-500 mt-6 text-lg">
              Duration: 90-120 minutes • 21 Interactive Q&A Sessions • Instant Feedback
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Experience */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold text-center mb-12">What You'll Experience</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interactive Q&A</h3>
            <p className="text-gray-600 text-lg">
              Answer thought-provoking questions about your research mindset and approach
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Mic className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Speaker Insights</h3>
            <p className="text-gray-600 text-lg">
              Get expert commentary and real-world insights from experienced research mentors
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Actionable Guidance</h3>
            <p className="text-gray-600 text-lg">
              Receive personalized action tips you can implement immediately
            </p>
          </div>
        </div>

        {/* Roadmap Coverage */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Complete Roadmap Coverage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <GraduationCap className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Student Journey</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Research Awareness</li>
                <li>✓ Topic Selection</li>
                <li>✓ Literature Review</li>
                <li>✓ Methodology Design</li>
                <li>✓ Data Collection</li>
                <li>✓ Analysis & Results</li>
                <li>✓ Publication</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Users className="w-16 h-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Faculty Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Profile Building</li>
                <li>✓ Funding Acquisition</li>
                <li>✓ Lab Setup</li>
                <li>✓ Student Mentorship</li>
                <li>✓ Research Execution</li>
                <li>✓ Publications & Patents</li>
                <li>✓ Collaborations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Building2 className="w-16 h-16 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Institutional Strategy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Research Culture</li>
                <li>✓ Infrastructure Development</li>
                <li>✓ Faculty Development</li>
                <li>✓ Student Programs</li>
                <li>✓ Quality Metrics</li>
                <li>✓ Industry Partnerships</li>
                <li>✓ Ranking Improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="font-bold text-lg mb-2">21 Q&A Sessions</h4>
            <p className="text-gray-600 text-sm">Comprehensive coverage of all stages</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">😄</div>
            <h4 className="font-bold text-lg mb-2">Funny Analogies</h4>
            <p className="text-gray-600 text-sm">Memorable learning through humor</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">💡</div>
            <h4 className="font-bold text-lg mb-2">Instant Feedback</h4>
            <p className="text-gray-600 text-sm">Personalized interpretations</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h4 className="font-bold text-lg mb-2">NEP 2020 Aligned</h4>
            <p className="text-gray-600 text-sm">Experiential learning approach</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
          <Sparkles className="w-20 h-20 mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Research Mindset?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join this interactive orientation and discover your research potential
          </p>
          <button
            onClick={() => {
              setPresentationMode(true)
              setCurrentSlide(0)
            }}
            className="bg-white text-blue-600 px-10 py-5 rounded-xl text-2xl font-bold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-4"
          >
            <Play className="w-8 h-8" />
            Begin Your Journey
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600">
          <p className="mb-2">Built with ❤️ for NEP 2020 Experiential Research Learning</p>
          <p className="text-sm">Empowering the next generation of researchers through interactive orientation</p>
        </div>
      </footer>
    </div>
  )
}
