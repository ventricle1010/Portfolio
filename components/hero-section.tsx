"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Gamepad2, Zap, Cpu, Layers } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,206,84,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)]" />

      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse rotate-45" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-orange-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-3xl blur-lg animate-bounce"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
                <Gamepad2 className="w-4 h-4" />
                Game Developer & Level Designer
                <Zap className="w-4 h-4 text-secondary animate-pulse" />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-secondary animate-pulse">
                  Sowmik
                </span>
                <br />
                <span className="text-2xl md:text-4xl text-muted-foreground font-medium">Crafting Digital Worlds</span>
              </h1>

              <p className="text-lg text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                Dive into worlds of imagination — where <span className="text-primary font-medium">level design</span>,{" "}
                <span className="text-purple-700 font-medium">gameplay meets storytelling</span>, and every level is an
                adventure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="glow-animation bg-primary hover:bg-primary/90 text-white shadow-lg"
              >
                View My Games
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/5 backdrop-blur-sm bg-transparent"
              >
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/ventricle1010" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Enhanced gradient border with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-3xl p-1 animate-pulse">
                  <div className="w-full h-full bg-background rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/profile-picture.png"
                      alt="Sowmik Hasan Niloy - Game Developer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm border border-white/20 animate-pulse">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-medium">Unity</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-purple-700 text-white rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm border border-white/20 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Unreal</span>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-8 bg-cyan-600 text-white rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm border border-white/20 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span className="text-sm font-medium">Godot</span>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-10 -left-16 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl float-animation"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Level Design</span>
                </div>
              </div>

              <div
                className="absolute bottom-10 -right-16 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl float-animation"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Game Engine</span>
                </div>
              </div>

              <div
                className="absolute top-1/3 -left-12 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-3 shadow-2xl float-animation"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-medium">3D Modeling</span>
                </div>
              </div>

              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-ping" />
              <div
                className="absolute bottom-1/4 -left-8 w-6 h-6 bg-gradient-to-r from-secondary to-orange-500 rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              />
              <div
                className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
