import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, MapPin, Users, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AppPage() {
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
              <Link href="/app" className="text-primary font-semibold">
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
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
            Your Tool for a Cleaner Tomorrow
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8 text-pretty">
            The M-Taka App is at the heart of our mission. It connects households, businesses, and waste collectors to
            make recycling easy and impactful. Join thousands of users making a difference in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="text-left">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">1</Badge>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2">Schedule a Pickup</h4>
                      <p className="text-muted-foreground">
                        Request waste collection from verified agents in your area. Set your preferred time and location
                        for convenient pickup.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">2</Badge>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2">Recycle with Ease</h4>
                      <p className="text-muted-foreground">
                        Drop off recyclables at community buy-back centers or have them collected directly from your
                        location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">3</Badge>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2">Track Your Impact</h4>
                      <p className="text-muted-foreground">
                        See how your efforts contribute to a zero-waste future with detailed impact tracking and
                        community leaderboards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Smartphone className="h-80 w-40 text-primary" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-background mx-auto mb-2" />
                      <p className="text-xs text-background font-semibold">M-Taka App</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">App Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Location-Based Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Find nearby collection points and recycling centers with GPS integration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect with local waste collectors and other environmentally conscious users.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Impact Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor your recycling progress and see your environmental impact over time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Waste Segregation Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn proper waste sorting techniques with our #SeparateKwaSource guide.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Easy Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Book waste collection services with just a few taps on your phone.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Agent Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access our network of trained and verified waste collection agents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use M-Taka */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Use M-Taka?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">Simplifies waste segregation and collection for everyone.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">Supports local recyclers and waste actors in your community.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">Available on Google Play Store and App Store (coming soon).</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-foreground mb-8 text-pretty">
              Download the M-Taka App today and join thousands of users building a zero-waste future in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Download for Android
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                iOS Coming Soon
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Free to download • Available in English and Swahili</p>
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
