import { Button } from "@/components/ui/button"
import { Heart, Menu } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">CalmQuest</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            to="#resources"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <Link
            to="#community"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            to="#support"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link className="cursor-pointer" to="/login"><Button variant="ghost" size="sm" className="hidden md:inline-flex cursor-pointer">
            Sign In
          </Button></Link>
          <Link to="/signup"><Button className="cursor-pointer" size="sm">Get Started</Button></Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
