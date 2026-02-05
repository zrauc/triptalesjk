import { Link } from "react-router-dom";
import { Search, Users, ShieldCheck, MapPin, Compass, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.jpeg";
const Index = () => {
  const howItWorks = [{
    icon: Search,
    title: "Explore Real Itineraries",
    description: "Browse through authentic travel plans shared by real travelers who've explored Jammu & Kashmir."
  }, {
    icon: Users,
    title: "Community Rates Them",
    description: "Fellow travelers rate and review itineraries, helping you find the best experiences."
  }, {
    icon: ShieldCheck,
    title: "Admin Approval Ensures Quality",
    description: "Every itinerary is verified by our team to ensure authenticity and accuracy."
  }];
  const featuredDestinations = [{
    name: "Srinagar",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400"
  }, {
    name: "Gulmarg",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400"
  }, {
    name: "Pahalgam",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400"
  }, {
    name: "Vaishno Devi",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 bg-primary">
        <div className="container mx-auto px-6">
          <div className="items-center text-center max-w-3xl mx-auto flex flex-col">
            <img alt="TripTales Logo" className="h-32 w-auto mb-8 shadow-lg rounded-3xl" src="/lovable-uploads/6c44e4e5-fb7d-4b80-92b0-1589e20fb9bb.png" />
            
            <h1 className="text-5xl font-bold mb-4 bg-white/0 text-primary">
              Plan smarter. Travel better.
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl text-muted-foreground">
              Discover authentic travel itineraries for Jammu & Kashmir, 
              shared and rated by real travelers.
            </p>
            
            <div className="flex gap-4">
              <Link to="/explore">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <Compass className="mr-2 h-5 w-5" />
                  Explore Itineraries
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8">
                Create Itinerary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              TripTales brings you verified, community-rated travel itineraries
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore the beauty of Jammu & Kashmir through our curated itineraries
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {featuredDestinations.map(destination => <Link key={destination.name} to="/explore" className="group">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg font-semibold">{destination.name}</span>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8" />
              <div>
                <h4 className="font-semibold text-lg">100+ Verified Itineraries</h4>
                <p className="text-primary-foreground/80">All reviewed by our team</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8" />
              <div>
                <h4 className="font-semibold text-lg">500+ Travelers</h4>
                <p className="text-primary-foreground/80">Active community members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8" />
              <div>
                <h4 className="font-semibold text-lg">J&K Focused</h4>
                <p className="text-primary-foreground/80">Exclusively for the region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your J&K Adventure?</h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Join our community of travelers and discover the best itineraries for your next trip.
          </p>
          <Link to="/explore">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Start Exploring
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      </div>;
};
export default Index;