import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Calendar, BookOpen, Users, BarChart3, Shield, Clock, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Guided First Aid Support",
    description: "Interactive chatbot offering personalized coping strategies and professional referrals when needed.",
    badge: "Available 24/7",
    color: "text-primary",
  },
  {
    icon: Calendar,
    title: "Confidential Booking System",
    description: "Secure appointment scheduling with on-campus counselors and mental health helplines.",
    badge: "Private & Secure",
    color: "text-secondary",
  },
  {
    icon: BookOpen,
    title: "Psychoeducational Resources",
    description: "Comprehensive library of videos, audio guides, and wellness materials in multiple languages.",
    badge: "Multilingual",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Peer Support Platform",
    description: "Moderated community forums with trained student volunteers for peer-to-peer support.",
    badge: "Community Driven",
    color: "text-chart-1",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description: "Anonymous analytics helping administrators recognize trends and plan effective interventions.",
    badge: "Data Insights",
    color: "text-chart-2",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "End-to-end encryption and anonymous data handling to ensure complete confidentiality.",
    badge: "Encrypted",
    color: "text-chart-3",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Available Anytime",
    description: "Access support whenever you need it, day or night.",
  },
  {
    icon: Globe,
    title: "Culturally Sensitive",
    description: "Resources tailored to diverse cultural backgrounds and contexts.",
  },
  {
    icon: Heart,
    title: "Stigma-Free Environment",
    description: "Safe space designed to eliminate judgment and promote healing.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Comprehensive Mental Health Support
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need for your mental wellness journey, designed specifically for college students.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-background ${feature.color}`}
                  >
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Why Choose CalmQuest?</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">{benefit.title}</h4>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
