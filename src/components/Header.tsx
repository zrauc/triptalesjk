import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/explore",
    label: "Explore"
  }, {
    path: "/about",
    label: "About"
  }, {
    path: "/admin",
    label: "Admin"
  }];
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
       <div className="container mx-auto px-6 py-4 bg-primary-foreground shadow">
         <div className="flex items-center justify-between">
           <Link to="/" className="flex items-center gap-3">
             <img alt="TripTales Logo" className="h-12 w-auto rounded-lg" src="/lovable-uploads/15211662-4558-4183-ae8d-4a11926a5391.png" />
           </Link>
           
           <nav className="flex items-center gap-8">
             {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
                 {link.label}
               </Link>)}
           </nav>
         </div>
       </div>
     </header>;
};
export default Header;