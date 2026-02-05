 import { CheckCircle, XCircle, Clock, Shield } from "lucide-react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { Badge } from "@/components/ui/badge";
 import { Button } from "@/components/ui/button";
 import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { itineraries } from "@/data/itineraries";
 
 const Admin = () => {
   const pendingCount = itineraries.filter(i => i.status === "pending").length;
   const approvedCount = itineraries.filter(i => i.status === "approved").length;
   const rejectedCount = itineraries.filter(i => i.status === "rejected").length;
 
   const stats = [
     { label: "Pending", count: pendingCount, icon: Clock, color: "bg-secondary text-secondary-foreground" },
     { label: "Approved", count: approvedCount, icon: CheckCircle, color: "bg-primary text-primary-foreground" },
     { label: "Rejected", count: rejectedCount, icon: XCircle, color: "bg-destructive text-destructive-foreground" },
   ];
 
   const getStatusBadge = (status: string) => {
     switch (status) {
       case "pending":
         return <Badge className="bg-secondary text-secondary-foreground">Pending</Badge>;
       case "approved":
         return <Badge className="bg-primary text-primary-foreground">Approved</Badge>;
       case "rejected":
         return <Badge variant="destructive">Rejected</Badge>;
       default:
         return null;
     }
   };
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
 
       {/* Page Header */}
       <section className="py-12 bg-accent text-accent-foreground">
         <div className="container mx-auto px-6">
           <div className="flex items-center gap-3 mb-2">
             <Shield className="h-8 w-8" />
             <h1 className="text-4xl font-bold">Admin Dashboard</h1>
           </div>
           <p className="text-accent-foreground/80 text-lg">
             Itinerary Approvals & Quality Control
           </p>
         </div>
       </section>
 
       <div className="container mx-auto px-6 py-12">
         {/* Stats Cards */}
         <div className="grid grid-cols-3 gap-6 mb-8">
           {stats.map((stat) => (
             <Card key={stat.label}>
               <CardContent className="flex items-center gap-4 p-6">
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                   <stat.icon className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="text-3xl font-bold text-foreground">{stat.count}</p>
                   <p className="text-muted-foreground">{stat.label}</p>
                 </div>
               </CardContent>
             </Card>
           ))}
         </div>
 
         {/* Submissions Table */}
         <Card>
           <CardHeader>
             <CardTitle>Submitted Itineraries</CardTitle>
           </CardHeader>
           <CardContent>
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead>Title</TableHead>
                   <TableHead>Submitted By</TableHead>
                   <TableHead>Destination</TableHead>
                   <TableHead>Date</TableHead>
                   <TableHead>Status</TableHead>
                   <TableHead className="text-right">Actions</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {itineraries.map((itinerary) => (
                   <TableRow key={itinerary.id}>
                     <TableCell className="font-medium">{itinerary.title}</TableCell>
                     <TableCell>{itinerary.submittedBy}</TableCell>
                     <TableCell>{itinerary.destination}</TableCell>
                     <TableCell>{new Date(itinerary.submittedDate).toLocaleDateString("en-IN")}</TableCell>
                     <TableCell>{getStatusBadge(itinerary.status)}</TableCell>
                     <TableCell className="text-right">
                       {itinerary.status === "pending" ? (
                         <div className="flex gap-2 justify-end">
                           <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                             <CheckCircle className="h-4 w-4 mr-1" />
                             Approve
                           </Button>
                           <Button size="sm" variant="destructive">
                             <XCircle className="h-4 w-4 mr-1" />
                             Reject
                           </Button>
                         </div>
                       ) : (
                         <span className="text-muted-foreground text-sm">—</span>
                       )}
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </CardContent>
         </Card>
 
         {/* Quality Control Note */}
         <Card className="mt-8 border-primary/20 bg-primary/5">
           <CardContent className="p-6">
             <div className="flex items-start gap-4">
               <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
               <div>
                 <h4 className="font-semibold text-foreground mb-2">Quality Control Process</h4>
                 <p className="text-muted-foreground">
                   All submitted itineraries go through a verification process to ensure accuracy, 
                   safety, and authenticity. Our team reviews each submission for practical details, 
                   budget accuracy, and up-to-date information before approving them for the community.
                 </p>
               </div>
             </div>
           </CardContent>
         </Card>
       </div>
 
       <Footer />
     </div>
   );
 };
 
 export default Admin;