 import { useState } from "react";
 import { Filter, MapPin } from "lucide-react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { Slider } from "@/components/ui/slider";
 import { Checkbox } from "@/components/ui/checkbox";
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import ItineraryCard from "@/components/ItineraryCard";
 import { itineraries } from "@/data/itineraries";
 
 const Explore = () => {
   const [budgetRange, setBudgetRange] = useState([15000, 80000]);
   
   const approvedItineraries = itineraries.filter(i => i.status === "approved");
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
       
       {/* Page Header */}
       <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
         <div className="container mx-auto px-6">
           <div className="flex items-center gap-3 mb-2">
             <MapPin className="h-8 w-8 text-primary" />
             <h1 className="text-4xl font-bold text-foreground">Explore Itineraries</h1>
           </div>
           <p className="text-muted-foreground text-lg">
             Discover verified travel plans for Jammu & Kashmir
           </p>
         </div>
       </section>
 
       <div className="container mx-auto px-6 py-12">
         <div className="flex gap-8">
           {/* Filter Sidebar */}
           <aside className="w-72 shrink-0">
             <Card className="sticky top-24">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <Filter className="h-5 w-5" />
                   Filters
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-6">
                 {/* Budget Filter */}
                 <div>
                   <h4 className="font-medium mb-3">Budget Range</h4>
                   <Slider
                     value={budgetRange}
                     onValueChange={setBudgetRange}
                     min={10000}
                     max={100000}
                     step={5000}
                     className="mb-2"
                   />
                   <div className="flex justify-between text-sm text-muted-foreground">
                     <span>₹{budgetRange[0].toLocaleString("en-IN")}</span>
                     <span>₹{budgetRange[1].toLocaleString("en-IN")}</span>
                   </div>
                 </div>
 
                 {/* Duration Filter */}
                 <div>
                   <h4 className="font-medium mb-3">Duration</h4>
                   <div className="space-y-2">
                     {["1-3 Days", "4-7 Days", "7+ Days"].map((duration) => (
                       <label key={duration} className="flex items-center gap-2 cursor-pointer">
                         <Checkbox />
                         <span className="text-sm">{duration}</span>
                       </label>
                     ))}
                   </div>
                 </div>
 
                 {/* Region Filter */}
                 <div>
                   <h4 className="font-medium mb-3">Region</h4>
                   <Select>
                     <SelectTrigger>
                       <SelectValue placeholder="All Regions" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="all">All Regions</SelectItem>
                       <SelectItem value="kashmir">Kashmir Valley</SelectItem>
                       <SelectItem value="jammu">Jammu</SelectItem>
                       <SelectItem value="ladakh">Ladakh Region</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
               </CardContent>
             </Card>
           </aside>
 
           {/* Itinerary Grid */}
           <main className="flex-1">
             <div className="flex items-center justify-between mb-6">
               <p className="text-muted-foreground">
                 Showing <span className="font-medium text-foreground">{approvedItineraries.length}</span> verified itineraries
               </p>
               <Select defaultValue="popular">
                 <SelectTrigger className="w-48">
                   <SelectValue />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="popular">Most Popular</SelectItem>
                   <SelectItem value="rating">Highest Rated</SelectItem>
                   <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                   <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                 </SelectContent>
               </Select>
             </div>
 
             <div className="grid grid-cols-3 gap-6">
               {approvedItineraries.map((itinerary) => (
                 <ItineraryCard key={itinerary.id} itinerary={itinerary} />
               ))}
             </div>
           </main>
         </div>
       </div>
 
       <Footer />
     </div>
   );
 };
 
 export default Explore;