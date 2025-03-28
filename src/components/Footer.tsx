
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Twitter, Github, Linkedin, Heart } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Check on mount and add resize listener
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-8 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-brand-600 mr-2" />
              <span className="text-xl font-semibold text-brand-800">DraftLinker</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Create professional letters and documents with ease. Connect with Google Drive for seamless storage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          {isSmallScreen ? (
            <>
              <div className="col-span-2">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between">
                      <span className="font-semibold text-gray-800">Product</span>
                      <span>+</span>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pt-2 pl-2">
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Features</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Templates</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Integrations</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Pricing</a></li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="mt-2">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between">
                      <span className="font-semibold text-gray-800">Resources</span>
                      <span>+</span>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pt-2 pl-2">
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Documentation</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Guides</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Support</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">API</a></li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="mt-2">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full flex justify-between">
                      <span className="font-semibold text-gray-800">Legal</span>
                      <span>+</span>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pt-2 pl-2">
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Privacy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Terms</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Cookie Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1">Licenses</a></li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-1">
                <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Templates</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Integrations</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Pricing</a></li>
                </ul>
              </div>
              
              <div className="col-span-1">
                <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Guides</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Support</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">API</a></li>
                </ul>
              </div>
              
              <div className="col-span-1">
                <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Terms</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-600 block py-1 transition-colors">Licenses</a></li>
                </ul>
              </div>
            </>
          )}
        </div>
        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
            &copy; {new Date().getFullYear()} DraftLinker. Made with <Heart className="h-3.5 w-3.5 mx-1 text-red-500" /> for better documents.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors py-1">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-brand-600 transition-colors py-1">
              Dashboard
            </Link>
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors py-1">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors py-1">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
