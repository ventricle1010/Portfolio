import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "2D Art-Style Adventure Game",
      description:
        "A stylized 2D adventure game built in Godot featuring custom UI integration, character animations, and immersive storytelling mechanics.",
      image: "/2d-adventure-game-with-artistic-style-and-ui-eleme.jpg",
      technologies: ["Godot", "GDScript", "2D Animation", "UI Design"],
      category: "Godot",
      links: {
        demo: "https://drive.google.com/file/d/1nepI7rUqf_KTkCq_PRKXXltAe3lpktMl/view?usp=sharing",
        github: "https://github.com/ventricle1010/2dgodot_game.git",
      },
    },
    {
      title: "Environmental Level Design",
      description:
        "A showcase of environmental storytelling and level design techniques across multiple game engines, featuring atmospheric lighting and detailed world-building.",
      image: "/game-environment-level-design-with-atmospheric-lig.jpg",
      technologies: ["Unreal Engine", "Unity", "3D Modeling", "Lighting"],
      category: "Level Design",
      links: {
        demo: "https://drive.google.com/file/d/1UsN1HeT8660_-TpcsLefI9tI5C_UjyUc/view?usp=sharing",
        github: "https://github.com/ventricle1010/unrealleveldesign.git",
      },
    },
  ]

  const categories = ["All", "Unreal Engine", "Unity", "Godot", "Level Design"]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Featured
            <span className="text-primary"> Game Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            A collection of game development projects showcasing technical expertise, creative design, and proficiency
            across multiple game engines and platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
