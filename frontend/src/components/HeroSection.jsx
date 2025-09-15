import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Calendar, BookOpen, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Your Mental Health <span className="text-primary">Matters</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
            A safe, confidential, and culturally sensitive platform designed specifically for college students. Get
            support, connect with peers, and access resources - all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link to="#" className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 flex justify-center items-center px-8 rounded-lg font-medium transition-colors">
              Start Your Journey
            </Link>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold">AI Support Chat</h3>
            <p className="mt-2 text-sm text-muted-foreground">Get instant support and coping strategies</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mt-4 font-semibold">Book Appointment</h3>
            <p className="mt-2 text-sm text-muted-foreground">Schedule with campus counselors</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 font-semibold">Resource Hub</h3>
            <p className="mt-2 text-sm text-muted-foreground">Access guides, videos, and tools</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10">
              <Users className="h-6 w-6 text-chart-1" />
            </div>
            <h3 className="mt-4 font-semibold">Peer Community</h3>
            <p className="mt-2 text-sm text-muted-foreground">Connect with fellow students</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
