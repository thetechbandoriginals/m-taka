import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Heart, Globe, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ImpactPage() {
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
              <Link href="/impact" className="text-primary font-semibold">
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
            #SeparateKwaSource: Making a Difference
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8 text-pretty">
            M-Taka is creating lasting change in Kisumu and beyond. Our work addresses waste pollution, creates jobs,
            and empowers communities to take charge of their environment.
          </p>
        </div>
      </section>

      {/* Impact Stats Overview */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Impact at a Glance</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-4">500+</div>
              <p className="text-lg text-foreground font-semibold mb-2">tons of waste recycled</p>
              <p className="text-muted-foreground">Diverted from landfills and waterways</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-4">4,000+</div>
              <p className="text-lg text-foreground font-semibold mb-2">people engaged</p>
              <p className="text-muted-foreground">In sustainable waste management practices</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-4">30+</div>
              <p className="text-lg text-foreground font-semibold mb-2">direct jobs created</p>
              <p className="text-muted-foreground">For waste actors in our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Impact Metrics */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  Social Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Community members engaged</span>
                    <span className="font-bold text-foreground text-lg">4,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">School children educated</span>
                    <span className="font-bold text-foreground text-lg">200+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Agents trained</span>
                    <span className="font-bold text-foreground text-lg">200+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Direct jobs created</span>
                    <span className="font-bold text-foreground text-lg">30+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Indirect jobs created</span>
                    <span className="font-bold text-foreground text-lg">150+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Community events</span>
                    <span className="font-bold text-foreground text-lg">50+</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Leaf className="h-8 w-8 text-primary mr-3" />
                  Environmental Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Recyclables collected</span>
                    <span className="font-bold text-foreground text-lg">500+ tons</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Waste segregation increase</span>
                    <span className="font-bold text-foreground text-lg">57%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Plastic waste collection increase</span>
                    <span className="font-bold text-foreground text-lg">31%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Carbon emissions reduced</span>
                    <span className="font-bold text-foreground text-lg">Significant</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Landfill waste diverted</span>
                    <span className="font-bold text-foreground text-lg">500+ tons</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-card rounded-lg">
                    <span className="text-muted-foreground">Water bodies protected</span>
                    <span className="font-bold text-foreground text-lg">Lake Victoria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Stories of Change</h3>
            <p className="text-lg text-muted-foreground mb-12 text-center text-pretty">
              Real people, real impact. Meet the individuals whose lives have been transformed through M-Taka's work.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Jane's Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    From waste collector to trained agent, Jane now leads a community buy-back center, earning a stable
                    income and access to healthcare for her family.
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    "M-Taka gave me dignity and hope for the future."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Kisumu's Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Over 200 students are learning to #SeparateKwaSource, inspiring their families to recycle and
                    creating a ripple effect in their communities.
                  </p>
                  <p className="text-sm text-primary font-semibold">"The children are teaching us at home now."</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Entire neighborhoods in Kisumu have adopted waste segregation practices, leading to cleaner streets
                    and improved public health outcomes.
                  </p>
                  <p className="text-sm text-primary font-semibold">"Our community is cleaner and healthier."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our 2025 Goals</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              We're committed to scaling our impact and reaching even more communities across Kenya.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Scale Our Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Expand to 3 additional cities and engage 10,000+ community members in sustainable waste practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Recycle 1,000+ tons of waste and achieve 75% waste segregation rate in our target communities.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Support Our Mission</Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Partner With Us
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
