
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Save, FileUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Editor = () => {
  const [letterContent, setLetterContent] = useState('');
  const [letterTitle, setLetterTitle] = useState('Untitled Letter');
  const { toast } = useToast();
  
  const handleSave = () => {
    // This will be implemented with Google Drive API later
    console.log('Saving letter:', { title: letterTitle, content: letterContent });
    toast({
      title: "Letter saved",
      description: "Your letter has been saved as a draft",
    });
  };
  
  const handleSaveToGoogleDrive = () => {
    // This will be implemented with Google Drive API later
    console.log('Saving to Google Drive:', { title: letterTitle, content: letterContent });
    toast({
      title: "Saved to Google Drive",
      description: "Your letter has been saved to Google Drive",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              value={letterTitle}
              onChange={(e) => setLetterTitle(e.target.value)}
              className="text-3xl font-bold border-none outline-none focus:ring-0 text-gray-800 bg-transparent"
              placeholder="Letter Title"
            />
            <div className="flex space-x-2">
              <Button 
                onClick={handleSave} 
                variant="outline"
                className="flex items-center"
              >
                <Save className="mr-2 h-4 w-4" /> Save Draft
              </Button>
              <Button 
                onClick={handleSaveToGoogleDrive}
                className="bg-brand-600 hover:bg-brand-700 flex items-center"
              >
                <FileUp className="mr-2 h-4 w-4" /> Save to Drive
              </Button>
            </div>
          </div>
          
          <Card className="mb-6 p-8 min-h-[60vh] shadow-lg">
            <textarea
              value={letterContent}
              onChange={(e) => setLetterContent(e.target.value)}
              className="w-full h-full min-h-[55vh] border-none outline-none focus:ring-0 bg-transparent resize-none"
              placeholder="Write your letter here..."
            ></textarea>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
