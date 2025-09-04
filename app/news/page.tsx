import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Lightbulb, BookOpen, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
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
              <Link href="/news" className="text-primary font-semibold">
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
            Stay Informed, Stay Inspired
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8 text-pretty">
            Discover the latest updates, tips, and stories from M-Taka as we lead the charge against waste pollution.
            Get insights into sustainable living and learn from our community's success stories.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-primary text-primary-foreground mb-4">Featured Story</Badge>
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>April 22, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>M-Taka Team</span>
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary mb-4">
                  Earth Day 2024: M-Taka's Fight Against Plastic Pollution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">
                  On Earth Day 2024, our community came together in an unprecedented show of environmental solidarity.
                  In just one day, we mobilized over 500 volunteers across Kisumu to collect and properly sort 50 tons
                  of plastic waste. This remarkable achievement demonstrates the power of community action and
                  technology working hand in hand.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Full Story <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest News & Updates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2024</span>
                  </div>
                  <CardTitle className="text-primary">Empowering Women in Waste</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Meet the women transforming Kisumu's waste landscape with M-Taka's support. From collectors to
                    entrepreneurs, these inspiring stories showcase resilience and innovation.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>February 28, 2024</span>
                  </div>
                  <CardTitle className="text-primary">Tech for Good: How AI Drives Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Explore how M-Taka uses artificial intelligence to optimize waste collection routes, predict
                    recycling patterns, and provide data-driven insights for policy makers.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>February 10, 2024</span>
                  </div>
                  <CardTitle className="text-primary">Partnership with Kisumu County Government</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    M-Taka signs landmark agreement with Kisumu County to integrate our waste management solutions into
                    the county's environmental strategy.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>January 20, 2024</span>
                  </div>
                  <CardTitle className="text-primary">M-Taka App Reaches 5,000 Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our mobile app has reached a major milestone with over 5,000 downloads and 500+ active daily users
                    making a difference in their communities.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 15, 2023</span>
                  </div>
                  <CardTitle className="text-primary">School Education Program Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    M-Taka launches comprehensive waste education program in 10 primary schools across Kisumu, reaching
                    over 2,000 students with #SeparateKwaSource training.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 30, 2023</span>
                  </div>
                  <CardTitle className="text-primary">Community Buy-Back Centers Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Three new community buy-back centers open across Kisumu, providing convenient recycling drop-off
                    points and creating 15 new jobs for local waste actors.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Resources */}
      <section className="py-16 px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Tips for Sustainable Living</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Waste Segregation at Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn how to properly sort waste at home with our comprehensive #SeparateKwaSource guide. Simple
                    steps that make a big difference.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Download Guide <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Reduce Single-Use Plastics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover 5 simple steps to dramatically reduce your single-use plastic consumption and find
                    sustainable alternatives for everyday items.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Read Tips <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Video className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Composting Made Easy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Turn your organic waste into nutrient-rich compost with our step-by-step video tutorial. Perfect for
                    urban and rural settings.
                  </p>
                  <Button variant="link" className="text-primary p-0">
                    Watch Video <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Subscribe to our newsletter and never miss the latest news, tips, and success stories from the M-Taka
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe to Newsletter
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Browse All Articles
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
