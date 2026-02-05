 import { Link } from "react-router-dom";
 
 const Footer = () => {
   return (
     <footer className="bg-accent text-accent-foreground py-12">
       <div className="container mx-auto px-6">
         <div className="grid grid-cols-4 gap-8">
           <div className="col-span-2">
             <h3 className="text-xl font-bold mb-4">TripTales</h3>
             <p className="text-accent-foreground/80 max-w-md">
               Discover authentic travel itineraries for Jammu & Kashmir, 
               shared and rated by real travelers. Plan smarter. Travel better.
             </p>
           </div>
           
           <div>
             <h4 className="font-semibold mb-4">Quick Links</h4>
             <ul className="space-y-2">
               <li>
                 <Link to="/" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                   Home
                 </Link>
               </li>
               <li>
                 <Link to="/explore" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                   Explore Itineraries
                 </Link>
               </li>
               <li>
                 <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                   About Us
                 </Link>
               </li>
             </ul>
           </div>
           
           <div>
             <h4 className="font-semibold mb-4">Destinations</h4>
             <ul className="space-y-2 text-accent-foreground/80">
               <li>Srinagar</li>
               <li>Gulmarg</li>
               <li>Pahalgam</li>
               <li>Vaishno Devi</li>
             </ul>
           </div>
         </div>
         
         <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
           <p>© 2026 TripTales. All rights reserved. | Promoting authentic J&K tourism.</p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;