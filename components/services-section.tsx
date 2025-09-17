"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, Map, Cable as Cube, Lightbulb, Code, Palette } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Full-cycle Game Development",
      description:
        "Complete game development from concept to deployment using Unreal Engine, Unity, and Godot. Expertise in creating engaging gameplay mechanics and polished user experiences.",
      features: ["Unreal Engine", "Unity", "Godot", "Cross-platform"],
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Level Design & Environment Creation",
      description:
        "Crafting immersive game worlds with thoughtful level design, environmental storytelling, and optimized gameplay flow for enhanced player engagement.",
      features: ["Environment Design", "Gameplay Flow", "Asset Integration", "Optimization"],
    },
    {
      icon: <Cube className="h-8 w-8" />,
      title: "3D Asset Creation & Integration",
      description:
        "Creating and integrating high-quality 3D assets, models, and textures that enhance visual appeal while maintaining optimal performance standards.",
      features: ["3D Modeling", "Texturing", "Asset Optimization", "Pipeline Integration"],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Lighting & Rendering",
      description:
        "Professional lighting design and rendering optimization to create atmospheric and visually stunning game environments with excellent performance.",
      features: ["Scene Lighting", "Post-Processing", "Performance Tuning", "Visual Effects"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Gameplay Mechanics & Programming",
      description:
        "Implementing complex gameplay systems, physics-based interactions, and core engine programming using C#, Java, and visual scripting.",
      features: ["C# Programming", "Java Development", "Blueprint Scripting", "Physics Systems"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design for Games",
      description:
        "Designing intuitive and engaging user interfaces that enhance player experience while maintaining consistency with the game's visual style.",
      features: ["Interface Design", "User Experience", "Interactive Elements", "Responsive Design"],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Game Development
            <span className="text-primary"> Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Comprehensive game development services from initial concept to final deployment, specializing in creating
            engaging and technically sound gaming experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-secondary/10 text-secondary-foreground rounded text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={scrollToContact} size="lg" className="glow-animation">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
