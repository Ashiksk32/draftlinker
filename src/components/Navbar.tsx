import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, FileText, LayoutDashboard, Edit } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { user, signIn, logOut } = useAuth();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/", icon: <FileText className="h-4 w-4 mr-2" /> },
    { name: "Editor", path: "/editor", icon: <Edit className="h-4 w-4 mr-2" /> },
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
  ];

  // Check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-nav sticky top-0 z-50 h-16 border-b">
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary flex items-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6 mr-2"
          >
            <path d="M18 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
            <path d="M18 12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6" />
            <path d="M2 12h20" />
            <path d="M2 12a4 4 0 0 0 4-4V6" />
            <path d="M22 12a4 4 0 0 1-4-4V6" />
          </svg>
          DraftLinker
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.icon} {link.name}
              </Link>
            ))}
            <div className="ml-6 pl-6 border-l border-gray-200">
              {user ? (
                <Button variant="outline" onClick={logOut} className="font-medium">
                  Sign Out
                </Button>
              ) : (
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-medium"
                  onClick={signIn}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center py-2 px-2 rounded-md text-sm font-medium ${
                      isActive(link.path)
                        ? "bg-secondary text-primary"
                        : "text-gray-600 hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {link.icon} {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  {user ? (
                    <Button variant="outline" onClick={logOut} className="w-full font-medium">
                      Sign Out
                    </Button>
                  ) : (
                    <Button
                      className="bg-primary hover:bg-primary/90 text-white w-full font-medium"
                      onClick={signIn}
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
