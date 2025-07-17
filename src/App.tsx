import { useState } from 'react';
import profileImage from './assets/profile.jpeg';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Calendar,
  Wrench,
  Download
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const skills = {
    programming: ['Java', 'Scala', 'Python', 'C++', 'Rust', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'R', 'C', 'C#', 'React', 'NodeJS', 'Cypress', 'LaTeX'],
    tools: ['Git', 'GitHub', 'Microsoft Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'SharePoint', 'Copilot', 'ChatGPT', 'Canva', 'Artificial Intelligence', 'Windows', 'Linux', 'macOS', 'Docker'],
    languages: [
      { lang: 'Deutsch', flag: '🇩🇪', level: 'Muttersprache' },
      { lang: 'Englisch', flag: '🇬🇧', level: 'Muttersprache' },
      { lang: 'Arabisch', flag: '🇪🇬', level: 'Muttersprache' }
    ]
  };

  const projects = [
    {
      title: 'NFC Card Programming Tools (Werkstudentetätigkeit)',
      description: 'Entwicklung von Tools für Kartenerkennung und -verifikation',
      tech: ['Java', 'Python', 'C++']
    },
    {
      title: 'ECG Datenkonverter (Werkstudentetätigkeit)',
      description: 'Automatisierte Umwandlung von ECG-Daten in CSV-Format',
      tech: ['Python', 'Excel', 'AI']
    },
    {
      title: 'ECG Konsolenanzeige (Werkstudentetätigkeit)',
      description: 'Visualisierung von ECG-Daten aus Hardware',
      tech: ['Python']
    },
  
    {
      title: 'SASL-Compiler (Uni Team Projekt)',
      description: 'Compiler für die SASL-Programmiersprache',
      tech: ['Scala', 'SASL', 'Git', 'GitHub']
    },
    {
      title: 'Weather Website (privat)',
      description: 'einfach Wetter-Webseite mit Fokus auf Testing und API',
      tech: ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub', 'Cypress']
    },
    {
      title: 'Diese Webseite (privat)',
      description: 'Persönliche Portfolio-Website',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub']
    }
  ];

  // Animation variants for scroll effects
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yassein Rashwan
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Über mich</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Erfahrung</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Fähigkeiten</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projekte</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
            </div>
            
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">Über mich</a>
              <a href="#experience" className="block py-2 text-gray-700 hover:text-blue-600">Erfahrung</a>
              <a href="#skills" className="block py-2 text-gray-700 hover:text-blue-600">Fähigkeiten</a>
              <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-600">Projekte</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Kontakt</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-lg text-blue-600 font-semibold">🧑‍💻 Hallo, ich bin</div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Yassein
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Rashwan</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Informatikstudent | Software Entwickler
                </p>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Schickhardtstraße 9, Tübingen</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Kontakt aufnehmen</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#projects" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Projekte ansehen</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="https://www.linkedin.com/in/yassein-rashwan" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Rash2213" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Yassein Rashwan" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      console.log('Image failed to load:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900">🎯 Über mich</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 lg:p-12"
              variants={fadeInUp}
            >
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Ich bin ein engagierter Informatikstudent mit Leidenschaft für Softwareentwicklung und Webentwicklung. 
                Mein Fokus liegt auf der Entwicklung innovativer Lösungen, die echten Mehrwert schaffen. Ich bringe 
                Erfahrung in agilen Teams, Testing, Hardware-Integration sowie Datenanalyse mit und strebe stets nach 
                technologischer Weiterentwicklung.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900">💼 Berufserfahrung</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
              variants={fadeInRight}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Werkstudent – Software Entwicklung & Testing</h3>
                  <p className="text-blue-600 font-semibold">Xenios AG, Reutlingen</p>
                  <div className="flex items-center space-x-2 text-gray-600 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>Okt 2024 – Jun 2025</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Entwicklung von Tools für NFC-Kartenprogrammierung, -Identifikation und -Verifikation (Java, Python)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Konvertierung von ECG-Daten in CSV-Dateien (Python, Excel, C++)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Entwicklung einer Visualisierungskonsole für aktuelle ECG-Daten (Python)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Dokumentation & Datenaufzeichnung (Linux/Windows, Word, Excel)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">🎓 Ausbildung</h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Science – Informatik</h3>
                  <p className="text-blue-600 font-semibold">Eberhard Karls Universität Tübingen</p>
                  <p className="text-gray-600">2023 – aktuell</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Abitur</h3>
                  <p className="text-purple-600 font-semibold">Europa Schule Kairo</p>
                  <p className="text-gray-600">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900">🛠️ Fähigkeiten</h2>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Programming Languages */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={fadeInLeft}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Programmiersprachen & Technologien</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Tools */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tools & Plattformen</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Languages */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={fadeInRight}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sprachen</h3>
              </div>
              <div className="space-y-3">
                {skills.languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium text-gray-900">{language.lang}</span>
                    </div>
                    <span className="text-sm text-gray-600">{language.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900">🔬 Projekte</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className={`group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  project.title.includes('SASL-Compiler') || project.title.includes('Diese Webseite') ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (project.title.includes('SASL-Compiler')) {
                    window.open('https://github.com/Rash2213/SASL-Compiler.git', '_blank');
                  }
                  if (project.title.includes('Diese Webseite')) {
                    window.open('https://github.com/Rash2213/My-Website.git', '_blank');
                  }
                }}
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.title.includes('Weather Website') && (
                    <div className="space-y-2">
                      <div 
                        className="flex items-center space-x-2 text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://rashweather.netlify.app', '_blank');
                        }}
                      >
                        <Globe className="w-4 h-4" />
                        <span>Live Demo ansehen</span>
                      </div>
                      <div 
                        className="flex items-center space-x-2 text-green-600 text-sm font-medium cursor-pointer hover:text-green-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://github.com/Rash2213/Weather.git', '_blank');
                        }}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Repository ansehen</span>
                      </div>
                    </div>
                  )}
                  {project.title.includes('SASL-Compiler') && (
                    <div className="flex items-center space-x-2 text-green-600 text-sm font-medium">
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository ansehen</span>
                    </div>
                  )}
                  {project.title.includes('Diese Webseite') && (
                    <div className="flex items-center space-x-2 text-green-600 text-sm font-medium">
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository ansehen</span>
                    </div>
                  )}
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">📜 Zertifikate & Nachweise</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/Abiturzeugnis.pdf', '_blank')}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Abiturzeugnis (auch als Nachweis für Deutsch Niveau C2)</h3>
                  <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium mt-2">
                    <Download className="w-4 h-4" />
                    <span>PDF ansehen</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-white rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/Immatrikulationsbescheinigung.pdf', '_blank')}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Immatrikulationsbescheinigung</h3>
                  <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium mt-2">
                    <Download className="w-4 h-4" />
                    <span>PDF ansehen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br/>
          <p className="text-gray-600">Weitere Nachweise auf Anfrage erhältlich</p>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Kontakt aufnehmen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lassen Sie uns über spannende Projekte und Möglichkeiten sprechen!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <a href="mailto:yassinrash7@gmail.com" className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">E-Mail</h3>
                  <p className="text-gray-600">yassinrash7@gmail.com</p>
                </div>
              </div>
            </a>
            
            <a href="tel:+4917631212528" className="group bg-gray-50 rounded-2xl p-8 hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                  <p className="text-gray-600">+49 176 31212528</p>
                </div>
              </div>
            </a>
            
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Standort</h3>
                  <p className="text-gray-600">Schickhardtstraße 9<br />Deutschland<br />Baden Württemberg<br />Tübingen 72072</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Yassein Rashwan</span>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              Informatikstudent mit Leidenschaft für innovative Softwarelösungen.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="www.linkedin.com/in/yassein-rashwan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Rash2213" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:yassinrash7@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">© 2025 Yassein Rashwan. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;