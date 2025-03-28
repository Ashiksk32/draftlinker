
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FileText className="h-5 w-5 text-brand-600 mr-2" />
            <span className="text-lg font-semibold text-brand-800">DraftLinker</span>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-brand-600">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-brand-600">
              Dashboard
            </Link>
            <a href="#" className="text-gray-600 hover:text-brand-600">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-600">
              Terms
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DraftLinker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
