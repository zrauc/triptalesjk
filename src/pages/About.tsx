 import { Shield, Users, CheckCircle, AlertTriangle, MapPin, Heart } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 
 const About = () => {
   const trustPillars = [
     {
       icon: Users,
       title: "Real Travelers, Real Stories",
       description: "Every itinerary comes from someone who has actually traveled the route. No sponsored content, no paid promotions—just genuine experiences from fellow adventurers.",
     },
     {
       icon: Heart,
       title: "Community-Driven Ratings",
       description: "Our community rates and reviews each itinerary. The more travelers engage, the better our recommendations become. Trust the wisdom of the crowd.",
     },
     {
       icon: Shield,
       title: "Admin-Verified Quality",
       description: "Before any itinerary goes live, our team reviews it for accuracy, safety, and completeness. We ensure every plan is practical and up-to-date.",
     },
   ];
 
   const problems = [
     "Sponsored content disguised as genuine recommendations",
     "Outdated information that leads to wasted time and money",
     "Fake reviews on popular travel platforms",
     "Scattered information across multiple unreliable sources",
     "Generic itineraries that don't reflect local insights",
   ];
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
 
       {/* Hero Section */}
       <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
         <div className="container mx-auto px-6 text-center">
           <h1 className="text-4xl font-bold text-foreground mb-4">About TripTales</h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Building trust in travel planning through authentic, community-verified itineraries for Jammu & Kashmir.
           </p>
         </div>
       </section>
 
       {/* Why We Exist */}
       <section className="py-16">
         <div className="container mx-auto px-6">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-foreground mb-6">Why TripTales Exists</h2>
             <p className="text-lg text-muted-foreground mb-6">
               Planning a trip to Jammu & Kashmir should be exciting, not frustrating. Yet, travelers 
               often struggle to find reliable information. Online sources are cluttered with 
               sponsored content, outdated details, and reviews that can't be trusted.
             </p>
             <p className="text-lg text-muted-foreground">
               TripTales was born from a simple idea: <span className="font-semibold text-foreground">What if 
               travelers could learn from each other?</span> Real experiences, honestly shared, and 
               carefully verified. That's what we're building.
             </p>
           </div>
         </div>
       </section>
 
       {/* Trust Pillars */}
       <section className="py-16 bg-muted/50">
         <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Trust Pillars</h2>
           <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
             {trustPillars.map((pillar, index) => (
               <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                 <CardContent className="p-8">
                   <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                     <pillar.icon className="h-7 w-7 text-primary" />
                   </div>
                   <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                   <p className="text-muted-foreground">{pillar.description}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
       </section>
 
       {/* The Problem We Solve */}
       <section className="py-16">
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             <div className="flex items-start gap-6 mb-8">
               <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                 <AlertTriangle className="h-7 w-7 text-destructive" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-foreground mb-4">The Problem We Solve</h2>
                 <p className="text-lg text-muted-foreground">
                   Traditional travel planning is broken. Here's what travelers face every day:
                 </p>
               </div>
             </div>
             
             <ul className="space-y-4 ml-20">
               {problems.map((problem, index) => (
                 <li key={index} className="flex items-start gap-3">
                   <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                     <span className="text-destructive text-sm">✕</span>
                   </div>
                   <span className="text-foreground">{problem}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </section>
 
       {/* J&K Focus */}
       <section className="py-16 bg-primary text-primary-foreground">
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto flex items-center gap-12">
             <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center shrink-0">
               <MapPin className="h-10 w-10" />
             </div>
             <div>
               <h2 className="text-3xl font-bold mb-4">Focused on Jammu & Kashmir</h2>
               <p className="text-lg text-primary-foreground/90">
                 Instead of trying to cover the entire world, we've chosen to focus exclusively on 
                 Jammu & Kashmir. This focus allows us to build deep expertise, verify information 
                 more thoroughly, and create a community of travelers who share a specific passion. 
                 From the houseboats of Dal Lake to the slopes of Gulmarg, from the pilgrimage of 
                 Vaishno Devi to the valleys of Pahalgam—we know this region.
               </p>
             </div>
           </div>
         </div>
       </section>
 
       {/* Our Mission */}
       <section className="py-16">
         <div className="container mx-auto px-6 text-center">
           <div className="max-w-3xl mx-auto">
             <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
             <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
             <p className="text-xl text-muted-foreground">
               To become the most trusted platform for Jammu & Kashmir travel planning by 
               empowering real travelers to share authentic experiences, fostering a supportive 
               community, and maintaining the highest standards of quality through careful verification.
             </p>
           </div>
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default About;