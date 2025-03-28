
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Share2, Calendar, Clock, User, ChevronRight, ListFilter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Dashboard = () => {
  const { user } = useAuth();
  
  // Mock data for letters
  const letters = [
    { id: 1, title: 'Job Application Letter', lastEdited: '2025-03-25', preview: 'Dear Hiring Manager, I am writing to express my interest in the Software Engineer position at your company...', status: 'Draft', category: 'Professional' },
    { id: 2, title: 'Recommendation Request', lastEdited: '2025-03-24', preview: 'Dear Professor Smith, I hope this message finds you well. I am writing to request a letter of recommendation...', status: 'Complete', category: 'Academic' },
    { id: 3, title: 'Client Proposal', lastEdited: '2025-03-22', preview: 'Dear Ms. Johnson, Thank you for the opportunity to submit this proposal for the redesign of your company website...', status: 'In Progress', category: 'Business' },
  ];

  // Recent activity mock data
  const recentActivity = [
    { id: 1, action: 'Created new letter', date: '2025-03-25', letterTitle: 'Job Application Letter' },
    { id: 2, action: 'Edited letter', date: '2025-03-24', letterTitle: 'Recommendation Request' },
    { id: 3, action: 'Shared letter', date: '2025-03-22', letterTitle: 'Client Proposal' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm border border-blue-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {user?.displayName || 'User'}!</h1>
          <p className="text-gray-600 mb-4">Here's an overview of your letters and recent activity.</p>
          <Link to="/editor" className="inline-flex">
            <Button className="bg-brand-600 hover:bg-brand-700 h-10 shadow-sm group">
              <Plus className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" /> Create New Letter
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Overview</h2>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-auto grid grid-cols-3 gap-8 md:flex md:space-x-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600">{letters.length}</div>
                  <div className="text-sm text-gray-500 mt-1">Total Letters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">2</div>
                  <div className="text-sm text-gray-500 mt-1">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">1</div>
                  <div className="text-sm text-gray-500 mt-1">Completed</div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                <Link to="/editor">
                  <Button variant="outline" size="sm" className="border-brand-200 text-brand-600 hover:bg-brand-50">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Letters Table */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-brand-600" /> My Letters
            </h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 flex items-center">
                <Calendar className="mr-2 h-4 w-4" /> Sort
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 flex items-center">
                <ListFilter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
          
          <Card className="shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Edited</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {letters.map(letter => (
                    <TableRow key={letter.id} className="hover:bg-gray-50/70">
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-brand-600" />
                          <span>{letter.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{letter.category}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          letter.status === 'Draft' ? 'bg-gray-100 text-gray-800' : 
                          letter.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {letter.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {letter.lastEdited}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
                          <Link to={`/editor/${letter.id}`}>
                            <Button variant="ghost" size="sm" className="text-brand-600 hover:bg-brand-50 hover:text-brand-700">
                              Edit
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t border-gray-100 py-2 px-6">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">3</span> of <span className="font-medium">3</span> letters
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
            <Clock className="h-5 w-5 mr-2 text-brand-600" /> Recent Activity
          </h2>
          <Card className="shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-4">
              <ul className="space-y-4">
                {recentActivity.map(activity => (
                  <li key={activity.id} className="flex items-start group hover:bg-gray-50 p-2 rounded-md transition-colors">
                    <div className="h-9 w-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mr-3">
                      {activity.action.includes('Created') && <Plus className="h-5 w-5" />}
                      {activity.action.includes('Edited') && <FileText className="h-5 w-5" />}
                      {activity.action.includes('Shared') && <Share2 className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{activity.action}</p>
                      <p className="text-gray-500 text-sm">{activity.letterTitle} • {activity.date}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/editor`}>
                        <Button variant="ghost" size="sm" className="text-brand-600 hover:bg-brand-50">
                          View
                        </Button>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
