
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Save, FileUp, Download, Copy, Share } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

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

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(letterContent);
    toast({
      title: "Copied to clipboard",
      description: "Letter content copied to clipboard",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gray-50 py-4 px-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800">Letter Editor</h1>
          <p className="text-gray-600 text-sm">Create and format your professional correspondence</p>
        </div>
      </div>
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-card border border-gray-200 overflow-hidden">
              <div className="bg-white p-4 md:p-6 border-b border-gray-100">
                <div className="flex justify-between items-center flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    value={letterTitle}
                    onChange={(e) => setLetterTitle(e.target.value)}
                    className="text-2xl font-semibold border-none outline-none focus:ring-0 text-gray-800 bg-transparent px-0 w-full md:w-auto"
                    placeholder="Letter Title"
                  />
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleSave} 
                      variant="outline"
                      className="flex items-center text-sm"
                      size="sm"
                    >
                      <Save className="mr-1.5 h-3.5 w-3.5" /> Save Draft
                    </Button>
                    <Button 
                      onClick={handleSaveToGoogleDrive}
                      className="bg-primary hover:bg-primary/90 flex items-center text-sm"
                      size="sm"
                    >
                      <FileUp className="mr-1.5 h-3.5 w-3.5" /> Save to Drive
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="bg-gray-50 px-4 py-2 border-b flex justify-center overflow-x-auto">
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" className="text-xs">Normal Text</Button>
                  <Button variant="ghost" size="sm" className="text-xs font-bold">Bold</Button>
                  <Button variant="ghost" size="sm" className="text-xs italic">Italic</Button>
                  <Button variant="ghost" size="sm" className="text-xs underline">Underline</Button>
                  <Separator orientation="vertical" className="mx-1 h-8" />
                  <Button variant="ghost" size="sm" className="text-xs">Align</Button>
                  <Button variant="ghost" size="sm" className="text-xs">List</Button>
                  <Button variant="ghost" size="sm" className="text-xs">Indent</Button>
                  <Separator orientation="vertical" className="mx-1 h-8" />
                  <Button variant="ghost" size="sm" className="text-xs">Font</Button>
                  <Button variant="ghost" size="sm" className="text-xs">Size</Button>
                </div>
              </div>
              
              <div className="p-0 min-h-[60vh] bg-white shadow-inner">
                <textarea
                  value={letterContent}
                  onChange={(e) => setLetterContent(e.target.value)}
                  className="w-full h-full min-h-[60vh] border-none outline-none focus:ring-0 bg-transparent resize-none p-8 font-serif text-gray-800 leading-relaxed"
                  placeholder="Dear Recipient,

Begin your professional letter here. This editor provides a clean interface to focus on your content.

Best regards,
Your Name"
                ></textarea>
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {letterContent ? `${letterContent.length} characters` : 'Start typing to create your letter'}
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={handleCopyToClipboard} className="text-sm">
                    <Copy className="mr-1.5 h-3.5 w-3.5" /> Copy
                  </Button>
                  <Button variant="outline" size="sm" className="text-sm">
                    <Download className="mr-1.5 h-3.5 w-3.5" /> Download
                  </Button>
                  <Button variant="outline" size="sm" className="text-sm">
                    <Share className="mr-1.5 h-3.5 w-3.5" /> Share
                  </Button>
                </div>
              </div>
            </Card>
            
            <div className="text-center mt-8 text-sm text-gray-500">
              <p>Need help? Visit our <a href="#" className="text-primary hover:underline">help center</a> or <a href="#" className="text-primary hover:underline">contact support</a>.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
