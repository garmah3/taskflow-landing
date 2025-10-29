'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Zap, Shield, ArrowRight, Menu, X, BarChart3, Clock, Lock } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center mr-2">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">TaskFlow</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">
                Sign In
              </button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t"
            >
              <a href="#features" className="block py-2 text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-indigo-600">Pricing</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
              <button className="w-full mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Get Started
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Trusted by 10,000+ teams worldwide
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Project Management
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Stop juggling tools. TaskFlow brings your team, tasks, and timeline 
              together in one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                Start Free Trial 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                14-day free trial
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-96 flex items-center justify-center p-8">
                <div className="text-center text-white space-y-4">
                  <BarChart3 className="w-20 h-20 mx-auto opacity-80" />
                  <p className="text-2xl font-semibold">Beautiful Dashboard Interface</p>
                  <p className="text-indigo-100">Real-time analytics and project insights</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Active Teams' },
              { number: '500K+', label: 'Projects Completed' },
              { number: '99.9%', label: 'Uptime' },
              { number: '4.9/5', label: 'User Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that help teams collaborate better and deliver faster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Built for speed. Create projects, assign tasks, and track progress in seconds.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Team Collaboration",
                description: "Real-time updates, comments, and notifications keep everyone in sync.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Enterprise Security",
                description: "Bank-level encryption, SSO, and compliance with SOC 2 and GDPR.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Advanced Analytics",
                description: "Get insights into team productivity and project performance.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Time Tracking",
                description: "Automatic time tracking helps you understand where time is spent.",
                color: "from-red-500 to-rose-500"
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Custom Permissions",
                description: "Granular control over who can see and edit your projects.",
                color: "from-cyan-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$9",
                description: "Perfect for small teams just getting started",
                features: [
                  "Up to 5 team members",
                  "10 active projects",
                  "Basic support",
                  "5GB storage",
                  "Mobile app access"
                ]
              },
              {
                name: "Professional",
                price: "$29",
                description: "For growing teams that need more power",
                features: [
                  "Up to 20 team members",
                  "Unlimited projects",
                  "Priority support",
                  "50GB storage",
                  "Advanced analytics",
                  "Custom integrations"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$99",
                description: "Advanced features for large organizations",
                features: [
                  "Unlimited team members",
                  "Unlimited projects",
                  "24/7 dedicated support",
                  "500GB storage",
                  "Advanced security",
                  "Custom contracts",
                  "Onboarding assistance"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-indigo-600 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-indigo-300 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">Billed annually</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Start {plan.name} Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "TaskFlow transformed how our team works. We're 3x more productive and actually enjoy project management now.",
                author: "Sarah Chen",
                role: "Product Manager at TechCorp",
                rating: 5
              },
              {
                quote: "The best investment we made this year. Simple, powerful, and the support team is incredible.",
                author: "Michael Rodriguez",
                role: "CEO at StartupXYZ",
                rating: 5
              },
              {
                quote: "We tried every tool out there. TaskFlow is the only one that our entire team actually uses daily.",
                author: "Emily Watson",
                role: "Creative Director at DesignCo",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join 10,000+ teams already using TaskFlow to work smarter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl">
                Start Your Free Trial
              </button>
              <button className="bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-800 transition-all border-2 border-white/20">
                Talk to Sales
              </button>
            </div>
            <p className="mt-6 text-indigo-200 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center mr-2">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">TaskFlow</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered project management for modern teams. Work smarter, ship faster.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 TaskFlow. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Made with ❤️ for productive teams</p>
          </div>
        </div>
      </footer>
    </div>
  )
}