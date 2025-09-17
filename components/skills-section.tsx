import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Gamepad2, Palette, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Level Design",
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: [
        { name: "Environment Creation", level: 95 },
        { name: "Gameplay Flow", level: 90 },
        { name: "Asset Integration", level: 88 },
      ],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C# (Unity/Unreal)", level: 92 },
        { name: "Java", level: 85 },
        { name: "Unreal Blueprint", level: 90 },
      ],
    },
    {
      title: "3D Modeling",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Asset Creation", level: 80 },
        { name: "Texturing", level: 75 },
        { name: "Optimization", level: 85 },
      ],
    },
    {
      title: "Lighting & Rendering",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Scene Lighting", level: 88 },
        { name: "Post-Processing", level: 82 },
        { name: "Performance Optimization", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Technical Skills &<span className="text-primary"> Creative Abilities</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            A comprehensive skill set spanning game development, programming, and creative design, honed through
            academic study and hands-on project experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Game Engines */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Game Engines & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Unreal Engine", "Unity", "Godot", "Blender", "Photoshop", "Visual Studio"].map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
