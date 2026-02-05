 import { Star, MapPin, Calendar, IndianRupee } from "lucide-react";
 import { Card, CardContent, CardFooter } from "@/components/ui/card";
 import { Badge } from "@/components/ui/badge";
 import { Button } from "@/components/ui/button";
 import type { Itinerary } from "@/data/itineraries";
 
 interface ItineraryCardProps {
   itinerary: Itinerary;
 }
 
 const ItineraryCard = ({ itinerary }: ItineraryCardProps) => {
   const formatBudget = (amount: number) => {
     return new Intl.NumberFormat("en-IN").format(amount);
   };
 
   return (
     <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
       <div className="relative h-48 overflow-hidden">
         <img
           src={itinerary.image}
           alt={itinerary.title}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
         />
         <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
           {itinerary.region}
         </Badge>
       </div>
       
       <CardContent className="p-5">
         <h3 className="font-bold text-lg mb-2 text-foreground line-clamp-1">
           {itinerary.title}
         </h3>
         
         <div className="flex items-center gap-1 text-muted-foreground mb-3">
           <MapPin className="h-4 w-4" />
           <span className="text-sm line-clamp-1">{itinerary.destination}</span>
         </div>
         
         <div className="flex items-center justify-between mb-3">
           <div className="flex items-center gap-1">
             <Calendar className="h-4 w-4 text-muted-foreground" />
             <span className="text-sm font-medium">{itinerary.days} Days</span>
           </div>
           
           <div className="flex items-center gap-1">
             <Star className="h-4 w-4 fill-secondary text-secondary" />
             <span className="text-sm font-medium">{itinerary.rating}</span>
             <span className="text-xs text-muted-foreground">
               ({itinerary.reviewCount})
             </span>
           </div>
         </div>
         
         <div className="flex items-center gap-1 text-foreground">
           <IndianRupee className="h-4 w-4" />
           <span className="font-semibold">
             {formatBudget(itinerary.budgetMin)} - {formatBudget(itinerary.budgetMax)}
           </span>
         </div>
       </CardContent>
       
       <CardFooter className="p-5 pt-0">
         <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
           View Details
         </Button>
       </CardFooter>
     </Card>
   );
 };
 
 export default ItineraryCard;