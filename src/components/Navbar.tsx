
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import useMobile from "@/hooks/use-mobile";
import { Menu, X, FileText, LayoutDashboard, Edit, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { user, signIn, signOut } = useAuth();
  const isMobile = useMobile();
  
  const links = [
    { name: "Home", path: "/", icon: <FileText className="h-4 w-4 mr-2" /> },
    { name: "Editor", path: "/editor", icon: <Edit className="h-4 w-4 mr-2" /> },
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { name: "Portfolio", path: "/portfolio", icon: <User className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-sm border-b h-14 px-4 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-brand-600">
          DraftLinker
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-brand-600 flex items-center"
              >
                {link.icon} {link.name}
              </Link>
            ))}
            <div className="ml-4">
              {user ? (
                <Button variant="outline" onClick={signOut}>
                  Sign Out
                </Button>
              ) : (
                <Button
                  className="bg-brand-600 hover:bg-brand-700 text-white"
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
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-600 hover:text-brand-600 flex items-center py-2"
                  >
                    {link.icon} {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  {user ? (
                    <Button variant="outline" onClick={signOut} className="w-full">
                      Sign Out
                    </Button>
                  ) : (
                    <Button
                      className="bg-brand-600 hover:bg-brand-700 text-white w-full"
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
