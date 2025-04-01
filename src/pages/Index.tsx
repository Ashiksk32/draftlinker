
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { FileText, Edit, PenLine, Save, Layout, Mail, Check, Shield, Clock, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const { user, signIn } = useAuth();

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Marketing Director",
      content: "DraftLinker has transformed how I create and manage business correspondence. The direct Google Drive integration saves me hours every week.",
      avatar: "A"
    },
    {
      name: "Sarah Williams",
      role: "Legal Assistant",
      content: "The templates are professional and easy to customize. I use DraftLinker daily for client communications and internal memos.",
      avatar: "S"
    },
    {
      name: "Michael Cheng",
      role: "Business Owner",
      content: "Clean interface, reliable cloud storage, and excellent templates. DraftLinker has become an essential tool for my business.",
      avatar: "M"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block mb-4 bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Professional Letter Creation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
              Create and Save Letters to 
              <span className="text-primary"> Google Drive</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              DraftLinker is the professional solution for writing, formatting, and saving 
              your important correspondence directly to Google Drive.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {!user ? (
                <Button 
                  onClick={signIn}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8"
                >
                  Get Started with Google
                </Button>
              ) : (
                <Link to="/editor">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white font-medium flex items-center h-12 px-8"
                  >
                    <Edit className="mr-2 h-5 w-5" />
                    Create New Letter
                  </Button>
                </Link>
              )}
              <Link to="#features">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-medium flex items-center h-12 px-8 border-gray-300"
                >
                  Learn More
                  <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-16">
              <div className="relative rounded-lg shadow-card overflow-hidden border border-gray-100">
                <img 
                  src="https://placehold.co/1200x600/f8fafc/e2e8f0?text=DraftLinker+Interface" 
                  alt="DraftLinker Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Navigation Section */}
        <section id="features" className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <NavigationMenu className="flex justify-center">
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary hover:text-primary/90 font-medium">
                    Key Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem 
                        title="Simple Editor" 
                        href="/editor" 
                        icon={<PenLine className="h-4 w-4 text-primary" />}
                      >
                        Write letters with a clean, distraction-free interface
                      </ListItem>
                      <ListItem 
                        title="Google Drive Sync" 
                        href="/dashboard" 
                        icon={<Save className="h-4 w-4 text-primary" />}
                      >
                        Save letters directly to your Google Drive with one click
                      </ListItem>
                      <ListItem 
                        title="Template Library" 
                        href="/dashboard" 
                        icon={<Layout className="h-4 w-4 text-primary" />}
                      >
                        Access professional templates for various letter types
                      </ListItem>
                      <ListItem 
                        title="Letter Management" 
                        href="/dashboard" 
                        icon={<FileText className="h-4 w-4 text-primary" />}
                      >
                        Organize and manage all your saved letters in one place
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/dashboard" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <FileText className="mr-2 h-4 w-4 text-primary" />
                      Dashboard
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/editor" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <Edit className="mr-2 h-4 w-4 text-primary" />
                      Create Letter
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <Mail className="mr-2 h-4 w-4 text-primary" />
                      Contact
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Professional Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive set of tools helps you create professional correspondence 
                with efficiency and elegance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-card text-center">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                  <Edit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simple Editor</h3>
                <p className="text-gray-600 mb-6">
                  Write letters with a clean, distraction-free interface designed for productivity.
                </p>
                <Link to="/editor" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                  Try the editor <MoveRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-card text-center">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                  <Save className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Drive Sync</h3>
                <p className="text-gray-600 mb-6">
                  Save letters directly to your Google Drive with one click for secure cloud storage.
                </p>
                <Link to="/dashboard" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                  View your documents <MoveRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-card text-center">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access Anywhere</h3>
                <p className="text-gray-600 mb-6">
                  Access your letters from any device with Google Drive integration.
                </p>
                <a onClick={signIn} className="text-primary hover:text-primary/80 font-medium inline-flex items-center cursor-pointer">
                  Connect your account <MoveRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose DraftLinker</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers unique advantages for professionals who value efficiency and quality.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-green-50 p-2 rounded-full mt-1 mr-4">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Time Efficiency</h3>
                      <p className="text-gray-600 text-sm">
                        Create professional letters in minutes with our streamlined editor and template library.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-green-50 p-2 rounded-full mt-1 mr-4">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Secure Storage</h3>
                      <p className="text-gray-600 text-sm">
                        Your documents are securely stored in your personal Google Drive account.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-green-50 p-2 rounded-full mt-1 mr-4">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Version Control</h3>
                      <p className="text-gray-600 text-sm">
                        Track changes and maintain a history of all your document versions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how DraftLinker has helped professionals streamline their document workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-gray-100 shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <p className="text-gray-600 italic">"{testimonial.content}"</p>
                      </div>
                      <div className="mt-auto flex items-center">
                        <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center text-primary font-medium mr-3">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Document Workflow?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust DraftLinker for their important correspondence.
            </p>
            <Button 
              onClick={signIn} 
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-medium"
            >
              Get Started for Free
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                Have questions or need assistance? Our team is here to help you get the most out of DraftLinker.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-2">For general inquiries</p>
                  <a href="mailto:support@draftlinker.com" className="text-primary hover:text-primary/80 font-medium text-sm">
                    support@draftlinker.com
                  </a>
                </div>
                <div>
                  <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-600 text-sm mb-2">Available 9am-5pm ET</p>
                  <p className="text-primary font-medium text-sm">+1 (555) 123-4567</p>
                </div>
                <div>
                  <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 shadow-sm">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Help Center</h3>
                  <p className="text-gray-600 text-sm mb-2">Browse our knowledge base</p>
                  <a href="#" className="text-primary hover:text-primary/80 font-medium text-sm">
                    Visit Help Center
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Index;
