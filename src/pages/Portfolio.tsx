import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  CheckCircle, 
  DollarSign, 
  Plus, 
  Trash2,
  ArrowRight,
  User,
  Code,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const features = [
    {
      icon: <Plus className="h-6 w-6" />,
      title: "Add Items Easily",
      description: "Quickly add shopping items with names and prices using a clean, intuitive interface."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Track Purchases",
      description: "Check off items as you shop with visual feedback and strikethrough effects."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Budget Management",
      description: "Real-time tracking of total budget and remaining amount to spend."
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "Manage Items",
      description: "Remove unwanted items with confirmation toasts and smooth animations."
    }
  ];

  const techStack = [
    "React", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide Icons", "React Router"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Navigation */}
      <nav className="p-6 border-b border-border/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Morgan's Portfolio</h2>
          </div>
          <Link to="/app">
            <Button className="bg-primary hover:bg-primary/90">
              Try the App
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <ShoppingCart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Smart Shopping List
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modern, intuitive shopping list application built with React and TypeScript. 
            Track items, manage budgets, and never forget what to buy again.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
          <Link to="/app">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Smartphone className="h-5 w-5 mr-2" />
              Launch Application
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <Card className="shadow-soft border-0 mb-16">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">Technical Implementation</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frontend Architecture</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 18 with TypeScript for type safety</li>
                  <li>• Tailwind CSS for responsive design system</li>
                  <li>• Radix UI components for accessibility</li>
                  <li>• React Router for navigation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">User Experience</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Smooth animations and transitions</li>
                  <li>• Toast notifications for user feedback</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Intuitive interface with visual cues</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/40">
              <h4 className="font-semibold text-foreground mb-3">Core Functionality</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">State Management</h5>
                  <p className="text-sm text-muted-foreground">React hooks for local state with real-time updates</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">Data Persistence</h5>
                  <p className="text-sm text-muted-foreground">Ready for database integration with structured data models</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">Performance</h5>
                  <p className="text-sm text-muted-foreground">Optimized rendering with efficient component updates</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-soft border-0 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Experience It?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Try out the shopping list application and see how it can simplify your shopping experience.
              </p>
              <Link to="/app">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center pt-16 pb-8">
          <p className="text-muted-foreground">
            Built by Morgan • Showcasing modern web development practices
          </p>
        </footer>
      </div>
    </div>
  );
}