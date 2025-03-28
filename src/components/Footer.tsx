
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} DraftLinker. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-brand-600">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-brand-600">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-brand-600">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
