
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { FileText, Edit, PenLine, Save, Layout, Mail } from "lucide-react";
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
import React from "react";

const Index = () => {
  const { user, signIn } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Create and Save Letters to Google Drive
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              DraftLinker makes it easy to write professional letters and save them directly to your Google Drive.
            </p>
            
            {!user ? (
              <Button 
                onClick={signIn}
                size="lg" 
                className="bg-brand-600 hover:bg-brand-700 text-white font-medium"
              >
                Get Started with Google
              </Button>
            ) : (
              <Link to="/editor">
                <Button 
                  size="lg" 
                  className="bg-brand-600 hover:bg-brand-700 text-white font-medium flex items-center"
                >
                  <Edit className="mr-2 h-5 w-5" />
                  Create New Letter
                </Button>
              </Link>
            )}
          </div>
        </section>

        {/* Feature Navigation Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <NavigationMenu className="flex justify-center">
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-brand-600 hover:text-brand-700">Key Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem 
                        title="Simple Editor" 
                        href="/editor" 
                        icon={<PenLine className="h-4 w-4 text-brand-600" />}
                      >
                        Write letters with a clean, distraction-free interface
                      </ListItem>
                      <ListItem 
                        title="Google Drive Sync" 
                        href="/dashboard" 
                        icon={<Save className="h-4 w-4 text-brand-600" />}
                      >
                        Save letters directly to your Google Drive with one click
                      </ListItem>
                      <ListItem 
                        title="Template Library" 
                        href="/dashboard" 
                        icon={<Layout className="h-4 w-4 text-brand-600" />}
                      >
                        Access professional templates for various letter types
                      </ListItem>
                      <ListItem 
                        title="Letter Management" 
                        href="/dashboard" 
                        icon={<FileText className="h-4 w-4 text-brand-600" />}
                      >
                        Organize and manage all your saved letters in one place
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/dashboard" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <FileText className="mr-2 h-4 w-4 text-brand-600" />
                      Dashboard
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/editor" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <Edit className="mr-2 h-4 w-4 text-brand-600" />
                      Create Letter
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <Mail className="mr-2 h-4 w-4 text-brand-600" />
                      Contact
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-brand-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Edit className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simple Editor</h3>
                <p className="text-gray-600">Write letters with a clean, distraction-free interface.</p>
                <Link to="/editor" className="mt-4 inline-block text-brand-600 hover:text-brand-700 font-medium">
                  Try the editor →
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-brand-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Drive Sync</h3>
                <p className="text-gray-600">Save letters directly to your Google Drive with one click.</p>
                <Link to="/dashboard" className="mt-4 inline-block text-brand-600 hover:text-brand-700 font-medium">
                  View your documents →
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-brand-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access Anywhere</h3>
                <p className="text-gray-600">Access your letters from any device with Google Drive.</p>
                <a onClick={signIn} className="mt-4 inline-block text-brand-600 hover:text-brand-700 font-medium cursor-pointer">
                  Connect your account →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you get the most out of DraftLinker.
            </p>
            <div className="flex justify-center">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
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
