import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Github, Mail, ExternalLink, Code, Zap, Brain, Briefcase, Award, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please use the email option.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Praise Ajayi - Prompt Engineer & AI Specialist</title>
        <meta name="description" content="Prompt Engineer and Software Developer specializing in AI automation, chatbot systems, and optimized prompt engineering workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Prompt Engineer, AI Specialist, Software Developer, AI Automation, ChatGPT" />
        <meta property="og:title" content="Praise Ajayi - Prompt Engineer & AI Specialist" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Praise Ajayi
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors">
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>

        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
                Based in Europe
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
              Turning AI Into Business Results
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-4xl mx-auto leading-relaxed">
              Prompt Engineer | Software Developer | AI Systems Optimizer
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Prompt Engineer and Software Developer with 2+ years of coding experience specializing in AI automation, chatbot systems, and optimized prompt engineering workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.co/U9vHsmf3X6" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                Hire Me
              </a>
              <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105">
                View Projects
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a Prompt Engineer with a strong foundation in Python development and over 2 years of hands-on coding experience. My expertise lies in designing, testing, and optimizing prompts for large language models, transforming complex human intentions into precise, structured AI instructions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I specialize in building intelligent automation systems, integrating APIs, and creating AI-assisted workflows that deliver measurable business value. From AI bots and crypto projects to content automation tools and business assistants, I've developed solutions that bridge the gap between cutting-edge AI technology and practical business applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about AI alignment and scalable systems, I'm committed to building AI solutions that are not just powerful, but also reliable, ethical, and designed to grow with your business needs.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center mb-4">
                  <Brain className="text-blue-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Prompt Engineering</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Zero-shot prompting', 'Few-shot prompting', 'Chain-of-thought reasoning', 'Prompt optimization', 'System prompts', 'Prompt templates', 'Multi-step workflows', 'Hallucination reduction'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center mb-4">
                  <Code className="text-cyan-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Programming & Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'API integration', 'Automation scripts', 'Backend logic', 'Git and GitHub'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">AI Tools & Systems</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Large Language Models', 'OpenAI-style APIs', 'AI agents', 'Chatbots', 'Virtual assistants', 'AI content moderation', 'Data preprocessing'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-green-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Technical Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['CLI', 'Debugging', 'Technical documentation', 'Markdown', 'Web scraping', 'Deployment'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Prompt Engineer</h3>
                    <p className="text-gray-400">Freelance • 2024 - Present</p>
                  </div>
                  <Award className="text-blue-400 mt-4 md:mt-0" size={32} />
                </div>
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">Specialized in designing and optimizing prompt systems for AI automation, building reusable frameworks that power intelligent business solutions.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Designed optimized prompt systems for AI automation across multiple domains</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Built reusable prompt templates for chatbots and business applications</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Improved output accuracy and consistency through rigorous testing</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Integrated prompts with APIs for seamless automation workflows</li>
                  </ul>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Improved AI output relevance by 40% through advanced prompt optimization</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Built autonomous AI bots with self-improving capabilities</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Supported crypto, content creation, and business automation projects</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Software Developer</h3>
                    <p className="text-gray-400">Python Focused • 2023 - 2024</p>
                  </div>
                  <Code className="text-cyan-400 mt-4 md:mt-0" size={32} />
                </div>
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">Developed automation scripts, API integrations, and AI-powered applications using Python and modern development practices.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Built automation scripts to streamline repetitive tasks</li>
                    <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Created API bots for various business use cases</li>
                    <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Debugged and optimized codebases for better performance</li>
                    <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Integrated AI capabilities into existing applications</li>
                  </ul>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Delivered functional tools that solved real-world problems</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Successfully transitioned into AI engineering and prompt optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all transform hover:scale-105">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8">
                  <Brain className="text-blue-400 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Autonomous AI Bot</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Trend analysis and monitoring</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Automated content posting</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Prompt-driven reasoning engine</li>
                    <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Advanced API integration</li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-all">View Demo</button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all transform hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8">
                  <MessageSquare className="text-purple-400 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">AI Content Assistant</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Structured content generation</li>
                    <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Dynamic tone control</li>
                    <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Advanced formatting logic</li>
                    <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Reduced editing time by 50%</li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-all">View Demo</button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all transform hover:scale-105">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8">
                  <Briefcase className="text-green-400 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Prompt Template Library</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Business prompt templates</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Chatbot conversation flows</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Content creation prompts</li>
                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Reusable frameworks</li>
                  </ul>
                  <button className="w-full px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/20 transition-all">View Demo</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Services</h2>
            <p className="text-gray-400 text-center mb-12 text-lg">Transform your business with cutting-edge AI solutions</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Custom ChatGPT Prompt Engineering', description: 'Get precisely optimized prompts that deliver consistent, high-quality results for your specific use case', icon: Brain },
                { title: 'AI Chatbot Setup', description: 'Deploy intelligent chatbots that engage customers, answer questions, and drive conversions 24/7', icon: MessageSquare },
                { title: 'Business Automation', description: 'Automate repetitive tasks and workflows to save time, reduce errors, and scale your operations', icon: Zap },
                { title: 'AI Assistant Development', description: 'Build custom AI assistants tailored to your business needs, from customer service to internal operations', icon: Brain },
                { title: 'Python Automation Scripts', description: 'Create powerful automation scripts that handle data processing, API integration, and complex workflows', icon: Code },
                { title: 'AI Agent Development', description: 'Develop autonomous AI agents that can reason, make decisions, and execute tasks with minimal supervision', icon: Briefcase },
                { title: 'Workflow Optimization', description: 'Analyze and optimize your existing workflows with AI to boost efficiency and productivity', icon: Award }
              ].map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all transform hover:scale-105">
                  <service.icon className="text-blue-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
            <div className="bg-gray-800 rounded-xl p-12 border border-gray-700">
              <p className="text-2xl text-gray-400 mb-4">Coming Soon</p>
              <p className="text-gray-500">Building amazing projects for clients. Testimonials will be featured here soon.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-y border-blue-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Build Something Powerful With AI?</h2>
            <p className="text-xl text-gray-400 mb-10">Let's turn your ideas into intelligent, automated solutions that drive real business results</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">Contact Me</button>
              <a href="https://t.co/U9vHsmf3X6" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Hire Me On Fiverr
                <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8">Have a project in mind? I'd love to hear about it. Drop me a message and let's discuss how we can work together.</p>
                <div className="space-y-4">
                  <a href="mailto:spectrolite.praise@gmail.com" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Mail className="mr-3" size={20} />
                    spectrolite.praise@gmail.com
                  </a>
                  <a href="https://t.co/wXzHurNfVf" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Github className="mr-3" size={20} />
                    GitHub Profile
                  </a>
                  <a href="https://t.co/U9vHsmf3X6" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="mr-3" size={20} />
                    Fiverr Profile
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" disabled={isSubmitting} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" placeholder="your.email@example.com" disabled={isSubmitting} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..." disabled={isSubmitting}></textarea>
                </div>
                {submitMessage && (
                  <div className={`p-3 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                    {submitMessage}
                  </div>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p className="mb-2">© 2025 Praise Ajayi. All rights reserved.</p>
            <p className="text-sm">Prompt Engineer | Software Developer | AI Systems Optimizer</p>
          </div>
        </footer>
      </div>
    </>
  );
}
