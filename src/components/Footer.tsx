
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { FileText, LayoutDashboard, Edit, User } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Home", path: "/", icon: <FileText className="h-4 w-4 mr-2" /> },
    { name: "Editor", path: "/editor", icon: <Edit className="h-4 w-4 mr-2" /> },
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { name: "Portfolio", path: "/portfolio", icon: <User className="h-4 w-4 mr-2" /> },
  ];

  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DraftLinker</h3>
            <p className="text-gray-600 mb-4">
              Create and save your professional letters directly to Google Drive.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-brand-600 flex items-center"
                  >
                    {link.icon} {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Have questions or need help? Reach out to our support team.
            </p>
            <a
              href="mailto:support@draftlinker.com"
              className="text-brand-600 hover:text-brand-700 inline-block mt-2"
            >
              support@draftlinker.com
            </a>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} DraftLinker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
