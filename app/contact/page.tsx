import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Users, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/mtaka-logo.svg" alt="M-Taka Logo" width={536} height={189} className="h-8 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/app" className="text-foreground hover:text-primary transition-colors">
                M-Taka App
              </Link>
              <Link href="/impact" className="text-foreground hover:text-primary transition-colors">
                Impact
              </Link>
              <Link href="/news" className="text-foreground hover:text-primary transition-colors">
                News & Insight
              </Link>
              <Link href="/contact" className="text-primary font-semibold">
                Contact Us
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Download App</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">Join the M-Taka Movement</h1>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8 text-pretty">
            Have questions, ideas, or want to collaborate? We'd love to hear from you! Together, we can build a
            zero-waste future for Kenya and beyond.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">M-Taka Waste Solutions Ltd.</p>
                  <p className="text-muted-foreground mb-2">Kisumu, Kenya</p>
                  <p className="text-muted-foreground">East Africa</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">+(254) 708-497-381</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground">8:00 AM - 6:00 PM EAT</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">info@m-taka.co.ke</p>
                  <p className="text-sm text-muted-foreground">We respond within</p>
                  <p className="text-sm text-muted-foreground">24 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Send Us a Message</h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="What is this about?" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry, feedback, or how you'd like to get involved..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Follow Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Stay connected for tips, updates, and success stories from our community:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                  <Link href="#" className="text-primary hover:underline">
                    @mtaka_solutions
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">Daily tips and community highlights</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Twitter</h3>
                  <Link href="#" className="text-primary hover:underline">
                    @mtaka_solutions
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">Latest news and updates</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Facebook</h3>
                  <Link href="#" className="text-primary hover:underline">
                    @mtaka_solutions
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">Community discussions and events</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Ways to Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-center">Volunteer</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Join our community recycling events and help educate others about sustainable waste management
                    practices.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-center">Partner</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Collaborate with us to scale our impact. We work with businesses, NGOs, and government agencies.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-center">Feedback</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Share your feedback and ideas to help us improve our services and better serve our community.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Give Feedback
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Subscribe to our newsletter for the latest updates, tips, and success stories from the M-Taka community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white text-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/mtaka-logo.svg" alt="M-Taka Logo" width={536} height={189} className="h-8 w-auto" />
            </Link>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">© 2024 M-Taka Waste Solutions Ltd. All rights reserved.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Building a zero-waste future, one community at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
