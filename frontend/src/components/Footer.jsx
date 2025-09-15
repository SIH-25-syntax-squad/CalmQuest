import { Heart, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Brand & Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CalmQuest</span>
            </div>
            <p className="text-sm text-gray-600 mb-2 max-w-xs">
              Empowering college students with comprehensive mental health support and resources.
            </p>
            <div className="text-sm text-gray-600">
              <p>A project by students, for students. Building a stigma-free future.</p>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col items-start md:items-end text-sm gap-2">
            <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-600" />
              <span className="font-medium">+91-9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              calmquest@gmail.com
              <span></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">Available nationwide</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2024 CalmQuest. Built with care for student mental health.
        </div>
      </div>
    </footer>
  )
}
