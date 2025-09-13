import { useState } from 'react';
import { 
  Home, 
  Zap, 
  Trophy, 
  Target, 
  MessageSquare, 
  Database, 
  Calendar, 
  TrendingUp,
  Leaf,
  Sun,
  Droplets,
  Recycle,
  Award,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';

const EcoTracker = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [electricalUsage, setElectricalUsage] = useState(1250);
  const [waterUsage] = useState(85);
  const [wasteReduction] = useState(67);
  const [carbonFootprint] = useState(2.4);

  // Sample data for charts and leaderboard
  const weeklyData = [
    { day: 'Mon', usage: 45 },
    { day: 'Tue', usage: 52 },
    { day: 'Wed', usage: 38 },
    { day: 'Thu', usage: 61 },
    { day: 'Fri', usage: 42 },
    { day: 'Sat', usage: 33 },
    { day: 'Sun', usage: 28 }
  ];

  const leaderboardData = [
    { name: 'Alex Green', score: 2850, avatar: '🌱' },
    { name: 'Sarah Eco', score: 2720, avatar: '♻️' },
    { name: 'Mike Clean', score: 2650, avatar: '🌍' },
    { name: 'You', score: 2480, avatar: '⭐' },
    { name: 'John Save', score: 2340, avatar: '💚' }
  ];

  const challenges = [
    { title: 'Reduce Energy by 20%', progress: 75, reward: '50 EcoPoints', icon: '⚡' },
    { title: 'Zero Waste Week', progress: 40, reward: '100 EcoPoints', icon: '🗑️' },
    { title: 'Water Conservation', progress: 90, reward: '30 EcoPoints', icon: '💧' }
  ];

  const events = [
    { date: 'Sep 15', title: 'Earth Day Community Cleanup', type: 'community' },
    { date: 'Sep 20', title: 'Renewable Energy Workshop', type: 'workshop' },
    { date: 'Sep 25', title: 'Sustainability Challenge Ends', type: 'challenge' }
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'electrical', label: 'Electrical Energy', icon: Zap },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'challenges', label: 'Active Challenges', icon: Target },
    { id: 'ai-chat', label: 'Talk to AI', icon: MessageSquare },
    { id: 'data-dashboard', label: 'Data Dashboard', icon: Database },
    { id: 'events', label: 'Event Announcements', icon: Calendar },
    { id: 'progress', label: 'Progress Visualization', icon: TrendingUp }
  ];

  interface StatCardProps {
    title: string;
    value: number;
    unit: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    trend: number;
  }

  const StatCard = ({ title, value, unit, icon: Icon, color, trend }: StatCardProps) => (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-8 h-8 ${color}`} />
        <span className={`text-sm font-medium ${trend > 0 ? 'text-red-400' : 'text-green-400'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      </div>
      <h3 className="text-gray-300 text-sm mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-gray-400 text-sm">{unit}</p>
    </div>
  );

  interface ProgressBarProps {
    progress: number;
    color?: string;
  }

  const ProgressBar = ({ progress, color = 'green' }: ProgressBarProps) => (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className={`h-2 rounded-full bg-gradient-to-r from-${color}-400 to-${color}-600 transition-all duration-1000 ease-out`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-white">EcoTracker Dashboard</h1>
              <div className="flex items-center space-x-3 bg-gray-800/70 px-4 py-2 rounded-full">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">2,480 EcoPoints</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Energy Usage" 
                value={electricalUsage} 
                unit="kWh/month" 
                icon={Zap} 
                color="text-yellow-400"
                trend={-12}
              />
              <StatCard 
                title="Water Conservation" 
                value={waterUsage} 
                unit="gallons saved" 
                icon={Droplets} 
                color="text-blue-400"
                trend={8}
              />
              <StatCard 
                title="Waste Reduction" 
                value={wasteReduction} 
                unit="% reduction" 
                icon={Recycle} 
                color="text-green-400"
                trend={-15}
              />
              <StatCard 
                title="Carbon Footprint" 
                value={carbonFootprint} 
                unit="tons CO2/month" 
                icon={Sun} 
                color="text-orange-400"
                trend={-20}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Weekly Energy Usage</h3>
                <div className="space-y-3">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <span className="text-gray-300 w-12">{day.day}</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000"
                          style={{ width: `${(day.usage / 70) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white w-12 text-sm">{day.usage}kWh</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Active Challenges</h3>
                <div className="space-y-4">
                  {challenges.slice(0, 3).map((challenge, index) => (
                    <div key={index} className="p-4 bg-gray-700/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{challenge.icon}</span>
                        <span className="text-green-400 text-sm font-medium">{challenge.reward}</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">{challenge.title}</h4>
                      <ProgressBar progress={challenge.progress} />
                      <p className="text-gray-400 text-sm mt-1">{challenge.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'electrical':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">Electrical Energy Management</h1>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Current Usage: {electricalUsage} kWh</h2>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setElectricalUsage(prev => Math.max(0, prev - 50))}
                    className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </button>
                  <button 
                    onClick={() => setElectricalUsage(prev => prev + 50)}
                    className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="text-white font-semibold">Lighting</h3>
                  <p className="text-gray-400">{Math.floor(electricalUsage * 0.15)} kWh</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">❄️</div>
                  <h3 className="text-white font-semibold">Cooling</h3>
                  <p className="text-gray-400">{Math.floor(electricalUsage * 0.45)} kWh</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="text-white font-semibold">Electronics</h3>
                  <p className="text-gray-400">{Math.floor(electricalUsage * 0.25)} kWh</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'leaderboard':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">EcoLeaders Board</h1>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      user.name === 'You' ? 'bg-green-600/20 border border-green-500/50' : 'bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
                        <span className="text-lg">{index + 1}</span>
                      </div>
                      <span className="text-2xl">{user.avatar}</span>
                      <div>
                        <h3 className="text-white font-semibold">{user.name}</h3>
                        <p className="text-gray-400 text-sm">Eco Warrior</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-400">{user.score}</p>
                      <p className="text-gray-400 text-sm">EcoPoints</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">Active Challenges</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{challenge.icon}</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {challenge.reward}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{challenge.title}</h3>
                  <ProgressBar progress={challenge.progress} />
                  <p className="text-gray-400 mt-2">{challenge.progress}% complete</p>
                  <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition-colors">
                    Continue Challenge
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ai-chat':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">EcoAI Assistant</h1>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-96">
              <div className="h-full flex flex-col">
                <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                  <div className="bg-green-600/20 p-4 rounded-xl">
                    <p className="text-white">🤖 Hello! I'm your EcoAI assistant. How can I help you conserve energy and reduce your environmental impact today?</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-xl">
                    <p className="text-white">💬 Ask me about energy-saving tips, sustainable practices, or track your progress!</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <input 
                    type="text" 
                    placeholder="Ask about conservation tips..."
                    className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-xl border border-gray-600 focus:border-green-500 focus:outline-none"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">Event Announcements</h1>
            
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                        <p className="text-gray-400 text-sm capitalize">{event.type} Event</p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-xl">Select a section from the navigation</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-['Inter',sans-serif]">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/10 to-blue-900/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500/5 rounded-full animate-bounce [animation-delay:2s]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full animate-pulse [animation-delay:4s]"></div>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34,197,94,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex">
        {/* Sidebar Navigation */}
        <div className="w-80 bg-gray-800/80 backdrop-blur-sm border-r border-gray-700/50 min-h-screen p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">EcoTracker</h1>
              <p className="text-gray-400 text-sm">Green Living Assistant</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl border border-green-500/20">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-white font-semibold">Eco Warrior</p>
                <p className="text-gray-300 text-sm">Level 7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EcoTracker;