
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { FileText, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { user, signIn, logOut } = useAuth();

  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-brand-600" />
          <Link to="/" className="text-xl font-bold text-brand-800">DraftLinker</Link>
        </div>
        
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-brand-600 hover:text-brand-800 hover:bg-brand-50">
                  Dashboard
                </Button>
              </Link>
              <Link to="/editor">
                <Button variant="outline" className="text-brand-600 border-brand-200 hover:border-brand-600">
                  New Letter
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.photoURL || undefined} />
                    <AvatarFallback className="bg-brand-100 text-brand-700">
                      {user.displayName?.substring(0, 2) || user.email?.substring(0, 2) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <span>{user.displayName || user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logOut()} className="cursor-pointer text-red-500 hover:text-red-700">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button onClick={signIn} variant="default" className="bg-brand-600 hover:bg-brand-700">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
