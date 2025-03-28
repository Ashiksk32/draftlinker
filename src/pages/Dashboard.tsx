
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Mock data for letters
  const letters = [
    { id: 1, title: 'Job Application Letter', lastEdited: '2025-03-25', preview: 'Dear Hiring Manager, I am writing to express my interest...' },
    { id: 2, title: 'Recommendation Request', lastEdited: '2025-03-24', preview: 'Dear Professor Smith, I hope this message finds you well...' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Letters</h1>
          <Link to="/editor">
            <Button className="bg-brand-600 hover:bg-brand-700">
              <Plus className="mr-2 h-4 w-4" /> New Letter
            </Button>
          </Link>
        </div>

        {letters.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {letters.map(letter => (
              <Card key={letter.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-brand-600" />
                    {letter.title}
                  </CardTitle>
                  <CardDescription>Last edited: {letter.lastEdited}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{letter.preview}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to={`/editor/${letter.id}`}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-semibold mb-2">No letters yet</h2>
            <p className="text-gray-500 mb-6">Create your first letter to get started</p>
            <Link to="/editor">
              <Button className="bg-brand-600 hover:bg-brand-700">
                <Plus className="mr-2 h-4 w-4" /> Create Letter
              </Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
