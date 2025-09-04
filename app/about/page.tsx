import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-semibold">
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
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
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
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">About M-Taka</h1>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8 text-pretty">
            We envision a world where waste is a resource, not a burden. Based in Kisumu, Kenya, we're building
            sustainable, zero-waste communities by combining technology, education, and empowerment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-foreground mb-12 text-center text-pretty">
              At M-Taka, we envision a world where waste is a resource, not a burden. Based in Kisumu, Kenya, we're
              building sustainable, zero-waste communities by combining technology, education, and empowerment. Our
              approach transforms how communities manage waste while uplifting the lives of those who work in the waste
              value chain.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Educate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inspire communities to adopt sustainable waste management practices.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Link waste generators, collectors, and recyclers for seamless collaboration.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Empower</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dignify waste work by improving livelihoods through training and support.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Innovate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use technology and data to drive policy change and sustainable solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We educate locals on waste segregation and recycling to foster behavior change.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tech-Enabled</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The M-Taka App connects waste generators to collectors and recyclers, streamlining the process.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Empowering Lives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide training, healthcare, and financial support to waste actors, particularly women and
                    youth.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Data-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our platform collects data to inform policies and strengthen waste management systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Story</h3>
            <p className="text-lg text-foreground mb-8 text-pretty text-center">
              Founded in Kisumu, M-Taka was born from a passion to tackle waste pollution while creating opportunities
              for underserved communities. By leveraging technology and partnerships, we're turning waste into wealth
              and building a brighter, cleaner future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn More About Our Team
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                See Our Impact
              </Button>
            </div>
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
