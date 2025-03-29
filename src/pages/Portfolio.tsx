
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  FileText, 
  Clock, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin,
  Brain,
  MessagesSquare,
  Zap,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const skills = [
    { name: "Java", proficiency: 90 },
    { name: "MySQL", proficiency: 85 },
    { name: "CSS", proficiency: 80 },
    { name: "HTML", proficiency: 85 },
    { name: "Bootstrap", proficiency: 75 },
    { name: "JavaScript", proficiency: 80 },
    { name: "C Programming", proficiency: 70 },
    { name: "Advanced Java", proficiency: 85 },
    { name: "Front-end", proficiency: 80 },
    { name: "Back-end", proficiency: 75 },
  ];

  const projects = [
    {
      title: "Student Management System",
      description: "Developed a system using advanced Java technologies for efficient student data management.",
      tags: ["Java", "MySQL", "UI/UX"],
    },
    {
      title: "E-commerce Website",
      description: "Developed an e-commerce website with product listings, cart functionality, and payment integration.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Email Administration Application",
      description: "Created an application to manage email accounts with features for creating and managing email addresses.",
      tags: ["Java", "Backend"],
    },
    {
      title: "Banking Application",
      description: "Built a banking application with features for account management, transactions, and balance inquiries.",
      tags: ["Java", "Database"],
    },
    {
      title: "Amazon Clone",
      description: "Designed a functional clone of Amazon with product listings, user accounts, and shopping cart features.",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Solar Water Cooler",
      description: "Constructed an eco-friendly solar water cooler device.",
      tags: ["Hardware", "Engineering"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">SHAIK DHAPHIR ASIK</h1>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Full Stack Developer</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Java</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">MySQL</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">HTML/CSS</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">JavaScript</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Full Stack</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>shaikashik2002@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91-8374276873</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} />
                <span>linkedin.com/in/Ashik.Shaik</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Visakhapatnam, India 530044</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Summary Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">SUMMARY</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                I am an enthusiastic and self-confident graduate with a solid foundation
                in Java, MySQL, and front-end technologies. I possess skills in developing
                web applications and am eager to leverage my technical skills in an entry-
                level role. Committed to continuous learning and adapting to new
                technologies, I look forward to contributing to a dynamic and innovative
                company, where I can grow professionally and make a meaningful impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills & Education in Tabs */}
        <Tabs defaultValue="skills" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <CardTitle>Technical Skills</CardTitle>
                </div>
                <CardDescription>
                  My technical proficiency across various technologies and languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-gray-500">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <CardTitle>Education</CardTitle>
                </div>
                <CardDescription>
                  My academic background and qualifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">Bachelor of Technology</h3>
                    <Badge>GPA: 7.5/10</Badge>
                  </div>
                  <p className="text-blue-600 font-medium">Raghu Engineering College</p>
                  <div className="flex items-center gap-2 mt-1 text-gray-500">
                    <Calendar size={14} />
                    <span>08/2021 - 05/2024</span>
                    <MapPin size={14} className="ml-2" />
                    <span>Visakhapatnam, India</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">Diploma in Mechanical</h3>
                    <Badge>GPA: 7.5/10</Badge>
                  </div>
                  <p className="text-blue-600 font-medium">Govt Polytechnic Narsipatnam</p>
                  <div className="flex items-center gap-2 mt-1 text-gray-500">
                    <Calendar size={14} />
                    <span>08/2018 - 05/2021</span>
                    <MapPin size={14} className="ml-2" />
                    <span>Narsipatnam, India</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">SSC</h3>
                    <Badge>GPA: 9/10</Badge>
                  </div>
                  <p className="text-blue-600 font-medium">Chalapathi High School</p>
                  <div className="flex items-center gap-2 mt-1 text-gray-500">
                    <Calendar size={14} />
                    <span>07/2017 - 06/2018</span>
                    <MapPin size={14} className="ml-2" />
                    <span>Visakhapatnam, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">PROJECTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-0">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">EXPERIENCE</h2>
          </div>
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <CardTitle className="text-xl">Full Stack Developer Internship</CardTitle>
                  <CardDescription className="text-blue-600 font-medium mt-1">
                    Internship
                  </CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">07/2024 - 02/2025</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-2 flex items-center gap-1">
                <MapPin size={14} />
                <span>Visakhapatnam, India</span>
              </p>
              <p className="text-gray-700 mb-3">
                Internship focusing on full stack development.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Gained hands-on experience and deepened knowledge in full stack
                  development by working with HTML, CSS, JavaScript, Java, MySQL, and
                  Bootstrap.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <CardTitle className="text-xl">APSSDC</CardTitle>
                  <CardDescription className="text-blue-600 font-medium mt-1">
                    Internship
                  </CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">10/2023 - 01/2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-2 flex items-center gap-1">
                <MapPin size={14} />
                <span>Visakhapatnam, India</span>
              </p>
              <p className="text-gray-700 mb-3">
                Internship focused on CNC programming and operation.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Acquired skills in CNC operating and programming.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Strengths & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">STRENGTHS</h2>
            </div>
            <Card className="h-full">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Zap size={18} className="text-blue-600" />
                    Adaptability
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Adaptable to new technologies and solutions, dedicated to continuous
                    learning.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Brain size={18} className="text-blue-600" />
                    Analytical Skills
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Demonstrated keen analytical and problem-solving skills.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessagesSquare size={18} className="text-blue-600" />
                    Interpersonal Skills
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Effective communication and teamwork abilities.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Zap size={18} className="text-blue-600" />
                    Quick learner
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Gaining new technique with great interest.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Clock size={18} className="text-blue-600" />
                    Time management
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Effective work management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">KEY ACHIEVEMENTS</h2>
            </div>
            <Card className="h-full">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Award size={18} className="text-blue-600" />
                    Best Volunteer Award
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Achieved best volunteer of the year in NSS.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Award size={18} className="text-blue-600" />
                    Active Participant
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Participated in college-associated clubs, technical meetups, hackathons, and open-source activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">CONTACT ME</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Get In Touch</h3>
                  <p className="text-gray-700">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Mail size={18} className="text-blue-600" />
                    <span>shaikashik2002@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-blue-600" />
                    <span>+91-8374276873</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin size={18} className="text-blue-600" />
                    <span>linkedin.com/in/Ashik.Shaik</span>
                  </div>
                </div>
                <div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
