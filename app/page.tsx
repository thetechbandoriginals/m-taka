import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ParallaxHero from "@/components/parallax-hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/mtaka-logo.svg" alt="M-Taka Logo" width={536} height={189} className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-primary font-semibold">
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
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Download App</Button>
          </div>
        </div>
      </nav>

      <ParallaxHero
        backgroundImage="/african-community-members-sorting-recyclable-waste.jpg"
        backgroundAlt="Community recycling in Kisumu"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Building a Zero-Waste Future</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-8 text-pretty">
          M-Taka is a tech-driven social enterprise transforming waste management in Kisumu, Kenya. Join us in our
          mission to
          <span className="text-white font-semibold"> #SeparateKwaSource</span> and build cleaner, greener communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Download the M-Taka App
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Get Involved
          </Button>
        </div>
      </ParallaxHero>

      <section className="py-20 px-8 bg-gradient-to-br from-background via-card to-muted/30 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="recycling-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary" />
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#recycling-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main heading with enhanced typography */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance leading-tight">
                Cultivating Sustainable
                <span className="block text-accent">Zero Waste Communities</span>
              </h2>
            </div>

            {/* Enhanced description with better typography */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-foreground/80 mb-6 text-pretty leading-relaxed">
                M-Taka aims to educate the community on sustainable waste management practices, connect people in the
                waste value chain and improve the livelihoods of waste actors.
              </p>

              {/* Key impact points */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Education</h3>
                    <p className="text-sm text-muted-foreground">Building awareness and changing behaviors</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Connection</h3>
                    <p className="text-sm text-muted-foreground">Linking stakeholders in the value chain</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Empowerment</h3>
                    <p className="text-sm text-muted-foreground">Improving livelihoods and dignity</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                Join Us in Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Learn More About Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Building Sustainable Zero Waste Circular Economy Communities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 text-pretty">
            M-Taka aims to educate the community on sustainable waste management practices, connect people in the waste
            value chain and improve the livelihoods of waste actors.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/community-education-workshop-about-waste-separatio.jpg"
                    alt="Community education"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-xl">WE EDUCATE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improve the recycling culture in the community by inducing behaviour change
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/waste-collectors-and-recyclers-working-together-in.jpg"
                    alt="Community connection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-xl">CONNECT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improve the livelihoods and welfare of waste actors (Dignifying waste work)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/empowered-waste-workers-in-kenya-receiving-trainin.jpg"
                    alt="Worker empowerment"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-xl">EMPOWER</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collect data to influence and strengthen policy formulation, and decision making
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How We Do It</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Connect Through Technology</h3>
                    <p className="text-muted-foreground">Use M-taka App to connect users with waste collectors.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Build Networks</h3>
                    <p className="text-muted-foreground">Connect users with M-taka recycling agents.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Capacity Building</h3>
                    <p className="text-muted-foreground">
                      Empowering waste actors through trainings and capacity building.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Collection</h3>
                    <p className="text-muted-foreground">Train Agents to collect data on the M-taka Platform.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Impact at a Glance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming communities through sustainable waste management and creating lasting positive change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Waste Recycled Card */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-background">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-1 to-chart-2"></div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-chart-1/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-chart-1 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-chart-1 mb-2 group-hover:scale-105 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">Tons Recycled</div>
                  <p className="text-sm text-muted-foreground">
                    Waste diverted from landfills and transformed into valuable resources
                  </p>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-chart-1 to-chart-2 h-full rounded-full w-4/5 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>

            {/* People Engaged Card */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-background">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-2 to-chart-3"></div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-chart-2/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-chart-2 mb-2 group-hover:scale-105 transition-transform duration-300">
                    4,000+
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">People Engaged</div>
                  <p className="text-sm text-muted-foreground">
                    Community members actively participating in sustainable practices
                  </p>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-chart-2 to-chart-3 h-full rounded-full w-5/6 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>

            {/* Jobs Created Card */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-background">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-3 to-chart-1"></div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-chart-3/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-chart-3 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-chart-3 mb-2 group-hover:scale-105 transition-transform duration-300">
                    30+
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">Jobs Created</div>
                  <p className="text-sm text-muted-foreground">
                    Sustainable employment opportunities for waste actors and community members
                  </p>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-chart-3 to-chart-1 h-full rounded-full w-3/4 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Impact Metrics */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 shadow-md bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm font-medium text-foreground">Communities Served</div>
                  <p className="text-xs text-muted-foreground">Across Kisumu and surrounding areas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gradient-to-r from-secondary/5 to-primary/5">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">85%</div>
                  <div className="text-sm font-medium text-foreground">Waste Diversion Rate</div>
                  <p className="text-xs text-muted-foreground">From landfills to recycling facilities</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/impact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg">
                Explore Our Full Impact Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Explore M-Taka</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-background">
              <CardHeader className="pb-4">
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/team-of-diverse-professionals-working-on-environme.jpg"
                    alt="About M-Taka team"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Learn About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover our mission, story, and what sets us apart in the fight against waste pollution.
                </p>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group w-full"
                  >
                    About M-Taka
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-background">
              <CardHeader className="pb-4">
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/mobile-phone-showing-m-taka-app-interface-with-was.jpg"
                    alt="M-Taka mobile app"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Download Our App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get the M-Taka App and start making a difference in your community today.
                </p>
                <Link href="/app">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group w-full"
                  >
                    Get the App
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-background">
              <CardHeader className="pb-4">
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/volunteers-and-community-members-working-together-.jpg"
                    alt="Community involvement"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Get Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our movement and help us build zero-waste communities across Kenya.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent group w-full"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white text-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/mtaka-logo.svg" alt="M-Taka Logo" width={536} height={189} className="h-8 w-auto" />
            </div>
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
