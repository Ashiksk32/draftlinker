
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-brand-600 mr-2" />
              <span className="text-xl font-semibold text-brand-800">DraftLinker</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Create professional letters and documents with ease. Connect with Google Drive for seamless storage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Pricing</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">API</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DraftLinker. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
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
      </div>
    </footer>
  );
};

export default Footer;
