
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { FileText, Edit } from "lucide-react";
import { Link } from "react-router-dom";

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
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-brand-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Drive Sync</h3>
                <p className="text-gray-600">Save letters directly to your Google Drive with one click.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-brand-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access Anywhere</h3>
                <p className="text-gray-600">Access your letters from any device with Google Drive.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
