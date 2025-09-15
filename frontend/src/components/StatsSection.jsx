import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock access to mental health resources",
  },
  {
    number: "100%",
    label: "Confidential",
    description: "Your privacy and anonymity are guaranteed",
  },
  {
    number: "50+",
    label: "Resources",
    description: "Comprehensive library of mental health materials",
  },
  {
    number: "5+",
    label: "Languages",
    description: "Multilingual support for diverse communities",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Supporting Students Nationwide</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Join thousands of students who have found support and community through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards better mental health. Our platform is here to support you every step of the
              way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg font-medium transition-colors">
                Get Started Today
              </button>
              <button className="border border-border hover:bg-accent hover:text-accent-foreground h-12 px-8 rounded-lg font-medium transition-colors">
                Talk to Someone Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
