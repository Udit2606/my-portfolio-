"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Palette,
  Zap,
  Users,
  Star,
  ArrowRight,
  Send,
  MapPin,
  Calendar,
  Award,
  Brain,
} from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { useTheme } from "next-themes"

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

function TypingAnimation({ texts, className }: { texts: string[]; className?: string }) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:bg-accent/20 transition-all duration-300 hover:scale-110"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const scrollY = useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experiences", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experiences", label: "Work & Internship Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"
      } border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-primary hover:scale-105 transition-transform cursor-pointer">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse" />
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-110 transition-transform"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

function HeroSection() {
  const scrollY = useScrollAnimation()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <ParticleBackground />

      <div
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="animate-fade-in-up">
          <Avatar className="w-40 h-40 mx-auto mb-8 animate-float shadow-2xl ring-4 ring-primary/20">
            <AvatarImage src="/IMG_6655.jpg" alt="Profile" style={{ objectFit: 'cover' }} />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
              UM
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance text-foreground">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">Udit Mittal</span>
          </h1>
          <div className="text-2xl sm:text-3xl text-muted-foreground mb-8 h-12">
            <TypingAnimation
              texts={["Software Developer", "GenAI", "Problem Solver", "Creative Thinker"]}
              className="font-semibold"
            />
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Motivated learner with a blend of technical skills and adaptability. Looking forward to contributing to projects that create real value.
          </p>
        </div>

        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-primary-foreground"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group bg-transparent hover:bg-primary/5 border-2 hover:border-primary transition-all duration-300 hover:scale-105 text-foreground hover:text-primary"
            onClick={() => window.open("https://drive.google.com/file/d/1tjxkfNaiJKgzqHYYnYP9ICBgkSnrwJli/view?usp=drive_link", "_blank")}
          >
            <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            Download CV
          </Button>
        </div>

      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Learn more about my journey, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Code className="h-8 w-8 text-primary" />
              My Story
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A third-year B.Tech CSE student at VIT, passionate about technology, problem-solving, 
                and continuous learning. I aim to apply my skills to real-world projects and grow as a professional.
              </p>
              <p>
                Summer Intern at Core Integra Global Services Pvt Ltd. – Developed a chatbot using Spring Boot, SQL, 
                and API integration, while exploring OpenAI APIs and gaining corporate development exposure.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
                or mentoring aspiring developers in the community.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">May 2025 - June 2025</div>
                  <div className="text-sm text-muted-foreground">Summer Intern at Core Integra Global Services Pvt Ltd.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up space-y-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  Current Role
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Perplexity Campus Partner
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Representing Perplexity AI on campus, promoting AI literacy and demonstrating cutting-edge AI tools to students and faculty.
                  </p>
                </div>
                <Separator />
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Internshala Student Partner
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Promoting Internshala's platform and opportunities among students, helping peers discover internships and skill development programs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">GenAI</h4>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Development</h4>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and advanced reporting capabilities.",
      image: "/modern-dashboard.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "#",
      demo: "#",
      featured: true,
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/30 overflow-hidden ${
                project.featured ? "md:grid md:grid-cols-2 md:gap-0" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? "md:order-1" : ""}`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>

              <div className={`p-8 ${project.featured ? "md:order-2 flex flex-col justify-center" : ""}`}>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </CardTitle>
                  <CardDescription className="text-pretty text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-foreground"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 group/btn bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg text-primary-foreground"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperiencesSection() {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Core Integra Global Services Pvt Ltd.",
      duration: "May 2025 - June 2025",
      description: "Developed a chatbot project by working on backend services using Spring Boot and managing SQL queries. Integrated frontend with backend APIs and explored the use of OpenAI APIs for chatbot interactions. Gained exposure to software development workflows, teamwork, and corporate project delivery. Strengthened skills in Spring Boot, SQL, API integration, backend-frontend connectivity, and improved problem-solving and communication in a corporate setting.",
      icon: <Calendar className="h-6 w-6" />,
    }
  ]

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Work & Internship Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey and hands-on experiences in the tech industry.
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    {experience.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {experience.duration}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{experience.company}</h4>
                    <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Technical",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "SQL", level: 90 },
        { name: "Python", level: 88 },
        { name: "C/C++", level: 85 },
        { name: "Java", level: 82 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "ReactJS", level: 88 },
        { name: "Data Structures and Algorithm", level: 85 },
        { name: "OOPs", level: 90 },
      ],
    },
    {
      title: "Tools",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Spring Boot", level: 85 },
      ],
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The tools and technologies I use to bring ideas to life, with proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-muted" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">meet.uditmittal@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-sm text-muted-foreground">Saharanpur, Uttar Pradesh</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg text-primary-foreground"
                onClick={() => window.open("https://www.linkedin.com/in/meetudit", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent hover:bg-primary/5 text-foreground hover:text-primary"
                onClick={() => window.open("https://github.com/Udit2606", "_blank")}
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@gmail.com"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Query"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your query..."
                  rows={5}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg text-primary-foreground"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary">Udit Mittal</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software Developer, passionate about creating exceptional digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.location.href = "mailto:meet.uditmittal@gmail.com"}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-transparent text-foreground hover:text-primary"
                onClick={() => window.open("https://www.linkedin.com/in/meetudit", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-transparent text-foreground hover:text-primary"
                onClick={() => window.open("https://github.com/Udit2606", "_blank")}
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Udit Mittal. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and lots of ☕</p>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperiencesSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
