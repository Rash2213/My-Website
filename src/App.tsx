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
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const isGerman = language === 'de';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const skills = {
    programming: ['Java', 'Scala', 'Python', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'R', 'C', 'React', 'Cypress'],
    tools: ['Git', 'GitHub', 'Artificial Intelligence', 'Windows', 'Linux', 'macOS', 'Supabase', 'Clerk'],
    languages: [
      { lang: 'Deutsch', flag: '🇩🇪', level: { de: 'Muttersprache', en: 'Native language' } },
      { lang: 'Englisch', flag: '🇬🇧', level: { de: 'Muttersprache', en: 'Native language' } },
      { lang: 'Arabisch', flag: '🇪🇬', level: { de: 'Muttersprache', en: 'Native language' } }
    ]
  };

  const projects = [
    {
      id: 'sasl',
      title: { de: 'SASL-Compiler (Uni-Teamprojekt)', en: 'SASL Compiler (University Team Project)' },
      description: { de: 'Compiler für die SASL-Programmiersprache', en: 'Compiler for the SASL programming language' },
      tech: ['Scala', 'SASL', 'Git', 'GitHub']
    },
    {
      id: 'website',
      title: { de: 'Diese Webseite', en: 'This Website' },
      description: { de: 'Persönliche Portfolio-Website', en: 'Personal portfolio website' },
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub']
    },
    {
      id: 'tour',
      title: { de: 'Tour-Guide-Website', en: 'Tour Guide Website' },
      description: { de: 'Webseite für eine ägyptische Reiseführerin mit echten Nutzern weltweit', en: 'Website for an Egyptian tour guide with real users worldwide' },
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'SQL', 'Supabase', 'Clerk']
    }
  ];

  const labels = isGerman ? {
    home: 'Home', about: 'Über mich', experience: 'Erfahrung', skills: 'Fähigkeiten', projects: 'Projekte', contact: 'Kontakt',
    greeting: 'Hallo, ich bin', role: 'Informatikstudent | Software Entwickler', address: 'Schickhardtstraße 9, Tübingen',
    contactCta: 'Kontakt aufnehmen', projectsCta: 'Projekte ansehen', aboutTitle: 'Über mich', experienceTitle: 'Berufserfahrung',
    educationTitle: 'Ausbildung', skillsTitle: 'Fähigkeiten', programmingTitle: 'Programmiersprachen & Technologien', toolsTitle: 'Tools & Plattformen',
    languagesTitle: 'Sprachen', projectsTitle: 'Projekte', certificatesTitle: '📜 Zertifikate & Nachweise', contactTitle: 'Kontakt aufnehmen',
    contactText: 'Lassen Sie uns über spannende Projekte und Möglichkeiten sprechen!', email: 'E-Mail', phone: 'Telefon', location: 'Standort',
    liveDemo: 'Live-Demo ansehen', githubRepo: 'GitHub-Repository ansehen', pdf: 'PDF ansehen', moreProof: 'Weitere Nachweise auf Anfrage erhältlich',
    footerText: 'Informatikstudent mit Leidenschaft für innovative Softwarelösungen.', rights: 'Alle Rechte vorbehalten', present: 'heute', native: 'Muttersprache'
  } : {
    home: 'Home', about: 'About me', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact',
    greeting: 'Hello, I am', role: 'Computer Science Student | Software Engineer', address: 'Schickhardtstraße 9, Tübingen',
    contactCta: 'Get in touch', projectsCta: 'View projects', aboutTitle: 'About me', experienceTitle: 'Work experience',
    educationTitle: 'Education', skillsTitle: 'Skills', programmingTitle: 'Programming Languages & Technologies', toolsTitle: 'Tools & Platforms',
    languagesTitle: 'Languages', projectsTitle: 'Projects', certificatesTitle: '📜 Certificates & Documents', contactTitle: 'Get in touch',
    contactText: 'Let us talk about exciting projects and opportunities!', email: 'Email', phone: 'Phone', location: 'Location',
    liveDemo: 'View live demo', githubRepo: 'View GitHub repository', pdf: 'View PDF', moreProof: 'Additional documents available upon request',
    footerText: 'Computer Science student passionate about innovative software solutions.', rights: 'All rights reserved', present: 'present', native: 'Native language'
  };

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
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a2f] to-[#101c2c]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#101c2c]/90 backdrop-blur-md z-50 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Yassein Rashwan
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">{labels.home}</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">{labels.about}</a>
              <a href="#experience" className="text-white hover:text-blue-400 transition-colors">{labels.experience}</a>
              <a href="#skills" className="text-white hover:text-blue-400 transition-colors">{labels.skills}</a>
              <a href="#projects" className="text-white hover:text-blue-400 transition-colors">{labels.projects}</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">{labels.contact}</a>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-blue-800 bg-[#16213a] p-1" role="group" aria-label="Language selection">
              <button
                type="button"
                onClick={() => setLanguage('de')}
                aria-pressed={isGerman}
                className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-all ${isGerman ? 'bg-blue-500 text-white shadow-lg' : 'text-blue-200 hover:text-white'}`}
              >
                DEUTSCH
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={!isGerman}
                className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-all ${!isGerman ? 'bg-blue-500 text-white shadow-lg' : 'text-blue-200 hover:text-white'}`}
              >
                ENGLISH
              </button>
            </div>
            
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#101c2c] border-t border-blue-900">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-white hover:text-blue-400">{labels.home}</a>
              <a href="#about" className="block py-2 text-white hover:text-blue-400">{labels.about}</a>
              <a href="#experience" className="block py-2 text-white hover:text-blue-400">{labels.experience}</a>
              <a href="#skills" className="block py-2 text-white hover:text-blue-400">{labels.skills}</a>
              <a href="#projects" className="block py-2 text-white hover:text-blue-400">{labels.projects}</a>
              <a href="#contact" className="block py-2 text-white hover:text-blue-400">{labels.contact}</a>
              <div className="flex gap-2 border-t border-blue-900 pt-2">
                <button type="button" onClick={() => setLanguage('de')} className={`rounded-full px-3 py-1 text-xs font-bold ${isGerman ? 'bg-blue-500 text-white' : 'text-blue-200'}`}>DEUTSCH</button>
                <button type="button" onClick={() => setLanguage('en')} className={`rounded-full px-3 py-1 text-xs font-bold ${!isGerman ? 'bg-blue-500 text-white' : 'text-blue-200'}`}>ENGLISH</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-[#0a1a2f] via-[#101c2c] to-[#1a2540] flex flex-col items-center justify-center min-h-[80vh]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="space-y-4 text-center">
            <div className="text-lg text-white font-semibold">{labels.greeting}</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Yassein
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Rashwan</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              {labels.role}
            </p>
            <div className="flex items-center justify-center space-x-2 text-white">
              <MapPin className="w-4 h-4" />
              <span>{labels.address}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>{labels.contactCta}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#projects" className="border-2 border-blue-900 text-blue-200 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center space-x-2">
                <Code className="w-5 h-5" />
                <span>{labels.projectsCta}</span>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-6">
              <a href="https://www.linkedin.com/in/yassein-rashwan" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Rash2213" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center">
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
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-[#101c2c]"
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
            <h2 className="text-4xl font-bold text-white">{labels.aboutTitle}</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-[#16213a] rounded-2xl p-8 lg:p-12"
              variants={fadeInUp}
            >
              <p className="text-lg text-blue-200 leading-relaxed text-center">
                {isGerman
                  ? 'Ich bin ein engagierter Informatikstudent mit Leidenschaft für Softwareentwicklung. Mein Fokus liegt auf der Entwicklung innovativer Lösungen, die echten Mehrwert schaffen. Ich bringe Erfahrung in agilen Teams, Testing, Hardware-Integration sowie Internettechnologien mit und strebe stets nach technologischer Weiterentwicklung.'
                  : 'I am a dedicated Computer Science student with a passion for software development. My focus is on creating innovative solutions that deliver real value. I bring experience in agile teams, testing, hardware integration and web technologies, and continuously strive to grow technically.'}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 bg-[#16213a]"
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
            <h2 className="text-4xl font-bold text-white">{labels.experienceTitle}</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
            className="bg-[#101c2c] rounded-2xl p-8 lg:p-12 shadow-lg"
              variants={fadeInRight}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{isGerman ? 'Software Entwickler' : 'Software Engineer'}</h3>
                  <p className="text-blue-400 font-semibold">Fresenius Medical Care (Xenios AG), Reutlingen</p>
                  <div className="flex items-center space-x-2 text-blue-200 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>2024 – 2025</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Entwicklung und Erweiterung von PC-Software für NFC-Lese-/Schreibgeräte, die Visualisierung von EKG-Daten und die Analyse von Logdaten.' : 'Developed and extended PC software for NFC read/write devices, ECG data visualisation and log-data analysis.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Unterstützung bei der Entwicklung von Service-Tools für medizinische Geräte sowie bei Softwaretests, Testvorbereitungen und Prüfständen.' : 'Supported service-tool development for medical devices and contributed to software testing, test preparation and bench-test environments.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Arbeit an Schnittstellen zwischen Software und Hardware, Prototypen und technischer Dokumentation in einem regulierten Entwicklungsumfeld.' : 'Worked across software and hardware interfaces, prototypes and technical documentation in a regulated engineering environment.'}</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <motion.div 
            className="bg-[#101c2c] rounded-2xl p-8 lg:p-12 shadow-lg"
              variants={fadeInRight}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{isGerman ? 'Software Entwickler' : 'Software Engineer'}</h3>
                  <p className="text-blue-400 font-semibold">Allianz Technology SE, Stuttgart-Vaihingen</p>
                  <div className="flex items-center space-x-2 text-blue-200 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>2025 – {labels.present}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Mitarbeit an der Full-Stack-Softwareentwicklung über Frontend- und Backend-Komponenten hinweg, einschließlich Implementierung, Integration und Auslieferung.' : 'Contribute to full-stack software development across front-end and back-end components, with responsibility spanning implementation, integration and delivery.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Arbeit an Deployment- und CI/CD-Workflows, einschließlich Jenkins-Pipelines, Release-Prozessen und der technischen Auslieferung webbasierter Anwendungen.' : 'Work across deployment and CI/CD workflows, including Jenkins pipelines, release processes and the technical delivery of web-based applications.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Entwicklung und Pflege datenbankbezogener Lösungen und Integrationen zur zuverlässigen Verarbeitung und Anbindung von Anwendungsdaten.' : 'Develop and maintain database-related solutions and integrations, connecting application functionality with reliable data handling.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Eigenständige Konzeption und Implementierung einer umfassenden End-to-End-Testsuite für interne Webanwendungen zur Automatisierung der Testabdeckung und Erhöhung der Release-Sicherheit.' : 'Independently designed and implemented a comprehensive end-to-end test suite from scratch for internal web applications, establishing automated coverage and improving confidence in releases.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Enge Zusammenarbeit mit Fach Ownern und Stakeholdern zur Übersetzung von Geschäftsanforderungen in technische Lösungen und zur Ausrichtung der Entwicklung an den Produktanforderungen.' : 'Collaborate closely with Fach Owners and business stakeholders to translate business requirements into technical solutions and align development with product needs.'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{isGerman ? 'Mitwirkung über die Implementierung hinaus in den Bereichen Projektplanung, Koordination, Priorisierung sowie bei Abstimmungen zu Anforderungen, Umfang und Auslieferung.' : 'Contribute beyond implementation through project planning, coordination, prioritisation and discussions around requirements, scope and delivery.'}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <section className="py-20 bg-[#101c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">{labels.educationTitle}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-[#16213a] rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Abitur</h3>
                  <p className="text-purple-400 font-semibold">Europa Schule Kairo</p>
                  <p className="text-blue-200">2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#16213a] rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{isGerman ? 'Bachelor of Science – Informatik' : 'Bachelor of Science – Computer Science'}</h3>
                  <p className="text-blue-400 font-semibold">Eberhard Karls Universität Tübingen</p>
                  <p className="text-blue-200">2023 – 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 bg-[#16213a]"
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
            <h2 className="text-4xl font-bold text-white">{labels.skillsTitle}</h2>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Programming Languages */}
            <motion.div 
              className="bg-[#101c2c] rounded-2xl p-8 shadow-lg"
              variants={fadeInLeft}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-white">{labels.programmingTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Tools */}
            <motion.div 
              className="bg-[#101c2c] rounded-2xl p-8 shadow-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-white">{labels.toolsTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Languages */}
            <motion.div 
              className="bg-[#101c2c] rounded-2xl p-8 shadow-lg"
              variants={fadeInRight}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-white">{labels.languagesTitle}</h3>
              </div>
              <div className="space-y-3">
                {skills.languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium text-white">{language.lang}</span>
                    </div>
                    <span className="text-sm text-blue-200">{language.level[isGerman ? 'de' : 'en']}</span>
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
        className="py-20 bg-[#101c2c]"
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
            <h2 className="text-4xl font-bold text-white">{labels.projectsTitle}</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className={`group bg-[#16213a] rounded-2xl p-6 hover:bg-[#101c2c] hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  project.id === 'sasl' ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (project.id === 'sasl') {
                    window.open('https://github.com/Rash2213/SASL-Compiler.git', '_blank');
                  }
                  if (project.id === 'website') {
                    window.open('https://github.com/Rash2213/My-Website.git', '_blank');
                  }

                }}
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title[language]}
                  </h3>
                  <p className="text-blue-200">{project.description[language]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-900 text-blue-200 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.id === 'tour' && (
                    <div className="space-y-2">
                      <div 
                        className="flex items-center space-x-2 text-blue-400 text-sm font-medium cursor-pointer hover:text-blue-200 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://daliaibrahim.netlify.app', '_blank');
                        }}
                      >
                        <Globe className="w-4 h-4" />
                        <span>{labels.liveDemo}</span>
                      </div>
                    </div>
                  )}
                  {project.id === 'sasl' && (
                    <div className="flex items-center space-x-2 text-green-400 text-sm font-medium">
                      <Github className="w-4 h-4" />
                      <span>{labels.githubRepo}</span>
                    </div>
                  )}
                  {project.id === 'website' && (
                    <div className="flex items-center space-x-2 text-green-400 text-sm font-medium">
                      <Github className="w-4 h-4" />
                      <span>{labels.githubRepo}</span>
                    </div>
                  )}
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <section className="py-20 bg-[#16213a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">{labels.certificatesTitle}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div 
              className="bg-[#101c2c] rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/Abiturzeugnis.pdf', '_blank')}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">{isGerman ? 'Abiturzeugnis (auch als Nachweis für Deutsch Niveau C2)' : 'High school diploma (also proof of German level C2)'}</h3>
                  <div className="flex items-center space-x-2 text-blue-400 text-sm font-medium mt-2">
                    <Download className="w-4 h-4" />
                    <span>{labels.pdf}</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-[#101c2c] rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/Immatrikulationsbescheinigung.pdf', '_blank')}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">{isGerman ? 'Immatrikulationsbescheinigung' : 'Certificate of enrollment'}</h3>
                  <div className="flex items-center space-x-2 text-blue-400 text-sm font-medium mt-2">
                    <Download className="w-4 h-4" />
                    <span>{labels.pdf}</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-[#101c2c] rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/WS.pdf', '_blank')}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">{isGerman ? 'Nachweis der Tätigkeit bei Xenios AG' : 'Proof of employment at Xenios AG'}</h3>
                  <div className="flex items-center space-x-2 text-blue-400 text-sm font-medium mt-2">
                    <Download className="w-4 h-4" />
                    <span>{labels.pdf}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br/>
          <p className="text-blue-200">{labels.moreProof}</p>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#101c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">{labels.contactTitle}</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              {labels.contactText}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <a href="mailto:yassinrash7@gmail.com" className="group bg-[#16213a] rounded-2xl p-8 hover:bg-blue-900 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{labels.email}</h3>
                  <p className="text-blue-200">yassinrash7@gmail.com</p>
                </div>
              </div>
            </a>
            
            <a href="tel:+4917631212528" className="group bg-[#16213a] rounded-2xl p-8 hover:bg-green-900 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{labels.phone}</h3>
                  <p className="text-blue-200">+49 176 31212528</p>
                </div>
              </div>
            </a>
            
            <div className="group bg-[#16213a] rounded-2xl p-8 hover:bg-purple-900 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{labels.location}</h3>
                  <p className="text-blue-200">Schickhardtstraße 9<br />{isGerman ? 'Deutschland' : 'Germany'}<br />{isGerman ? 'Baden-Württemberg' : 'Baden-Württemberg'}<br />Tübingen 72072</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a2f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
            <span className="text-xl font-bold text-blue-200">Yassein Rashwan</span>
            </div>
            
            <p className="text-blue-200 max-w-2xl mx-auto">
              {labels.footerText}
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="www.linkedin.com/in/yassein-rashwan" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Rash2213" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:yassinrash7@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-blue-900 pt-6">
              <p className="text-blue-200">© 2025 Yassein Rashwan. {labels.rights}.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;