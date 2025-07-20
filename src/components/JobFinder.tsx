import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Sparkles, RefreshCw, Zap, Brain, Rocket } from 'lucide-react';

const FUTURE_JOBS = [
  {
    title: "Quantum Ethicist",
    description: "Ensuring AI makes morally sound decisions across parallel universes 🌌",
    emoji: "⚛️"
  },
  {
    title: "AI Empathy Coach",
    description: "Teaching robots the art of understanding human emotions 🤖❤️",
    emoji: "🤗"
  },
  {
    title: "Neural UX Designer",
    description: "Creating mind-blowing interfaces that respond to thoughts 🧠✨",
    emoji: "🧠"
  },
  {
    title: "Robot Rights Advocate",
    description: "Fighting for artificial beings' freedom and dignity ⚖️🤖",
    emoji: "⚖️"
  },
  {
    title: "Digital Wellness Mentor",
    description: "Helping humans maintain sanity in a hyper-connected world 🧘‍♀️💻",
    emoji: "🧘‍♀️"
  },
  {
    title: "Metaverse Therapist",
    description: "Healing minds across virtual and augmented realities 🌐💚",
    emoji: "🌐"
  },
  {
    title: "Memory Curator",
    description: "Organizing and preserving human memories in digital archives 📚🧠",
    emoji: "📚"
  },
  {
    title: "Augmented Reality Life Coach",
    description: "Guiding people through life with AI-enhanced wisdom 👁️✨",
    emoji: "👁️"
  },
  {
    title: "Synthetic Food Engineer",
    description: "Crafting delicious meals from lab-grown ingredients 🧪🍽️",
    emoji: "🧪"
  },
  {
    title: "Climate Code Optimizer",
    description: "Programming Earth's systems for optimal sustainability 🌍💻",
    emoji: "🌍"
  },
  {
    title: "Hologram Storyteller",
    description: "Bringing narratives to life through immersive 3D experiences 📖✨",
    emoji: "📖"
  },
  {
    title: "Space Internet Architect",
    description: "Building communication networks between planets 🚀📡",
    emoji: "🚀"
  }
];

const JobFinder = () => {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [currentJob, setCurrentJob] = useState<typeof FUTURE_JOBS[0] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateJob = async () => {
    if (!name.trim()) return;
    
    setIsGenerating(true);
    
    // Add a slight delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const randomJob = FUTURE_JOBS[Math.floor(Math.random() * FUTURE_JOBS.length)];
    setCurrentJob(randomJob);
    setIsGenerating(false);
  };

  const resetJob = () => {
    setCurrentJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-background font-outfit flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-primary animate-glow-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Future Job Finder
            </h1>
            <Zap className="h-8 w-8 text-secondary animate-float" />
          </div>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Discover your perfect career in the year 2040 ✨
          </p>
        </div>

        {/* Main Form Card */}
        <Card className="p-8 bg-card/50 backdrop-blur-lg border-border/50 shadow-glass animate-fade-in">
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  What's your name?
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-foreground mb-2">
                  What are your interests or skills?
                </label>
                <Input
                  id="interests"
                  type="text"
                  placeholder="e.g., coding, art, helping people..."
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={generateJob}
                disabled={!name.trim() || isGenerating}
                className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium py-6 text-lg transition-all duration-300 hover:shadow-glow"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-2 h-5 w-5" />
                    Find My 2040 Job
                  </>
                )}
              </Button>
              
              {currentJob && (
                <Button
                  onClick={resetJob}
                  variant="outline"
                  className="bg-transparent border-border/50 text-foreground hover:bg-muted/50"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Results Card */}
        {currentJob && (
          <Card className="p-8 bg-gradient-secondary/10 backdrop-blur-lg border-secondary/20 shadow-glass animate-fade-in">
            <div className="text-center space-y-4">
              <div className="text-6xl animate-float">{currentJob.emoji}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {name}, you're destined to be a...
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
                  {currentJob.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {currentJob.description}
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Based on your interests: <span className="text-secondary font-medium">{interests || "general awesomeness"}</span>
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Powered by AI imagination ✨ Built for the future 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default JobFinder;