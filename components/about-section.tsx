import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

export function AboutSection() {
  const education = [
    {
      degree: "MSc in Computer Science & Engineering (Data Science)",
      institution: "Daffodil International University",
      year: "2025",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      year: "2024",
      icon: <Award className="h-5 w-5" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Passionate About Creating
            <span className="text-primary"> Digital Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            I'm a dedicated game developer with a strong foundation in computer science and a specialization in data
            science. My journey combines technical expertise with creative vision to build engaging gaming experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                With a Master's degree in Computer Science & Engineering focusing on Data Science, I bring both
                analytical thinking and creative problem-solving to game development. My passion lies in crafting
                immersive worlds and engaging gameplay mechanics.
              </p>
              <p className="text-muted-foreground">
                I specialize in level design, core engine programming using C# and Java, 3D modeling, and lighting
                systems. My experience spans across multiple game engines including Unreal Engine, Unity, and Godot,
                allowing me to adapt to various project requirements.
              </p>
              <p className="text-muted-foreground">
                I thrive in collaborative environments and enjoy tackling complex technical challenges. Whether it's
                implementing physics-based mechanics or creating atmospheric lighting, I'm always eager to push the
                boundaries of what's possible in game development.
              </p>
            </div>
          </div>

          {/* Right Content - Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
