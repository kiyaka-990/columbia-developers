import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Zap, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook,
  Quote,
  ArrowUp,
  Lock,
  User,
  Eye,
  EyeOff,
  Settings
} from 'lucide-react';

// --- SUB-COMPONENTS ---

const HeaderOne = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-[0_0_15px_rgba(220,38,38,0.5)]">S</div>
          <span className="text-white font-bold text-2xl tracking-tighter uppercase">Secure<span className="text-red-600">Pro</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-red-600 transition-colors uppercase tracking-widest text-[11px] font-bold">Home</a>
          <a href="#about" className="hover:text-red-600 transition-colors uppercase tracking-widest text-[11px] font-bold">About</a>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onLoginClick();
              }}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full transition-all active:scale-95 font-bold uppercase text-[10px] tracking-widest border-none cursor-pointer shadow-[0_4px_15px_rgba(220,38,38,0.3)]"
            >
              <Settings size={14} /> Client Portal Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- LOGIN VIEW ---

const LoginPage = ({ onBack }) => {
  const [showPass, setShowPass] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md bg-black/40 border border-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] relative z-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgba(220,38,38,0.4)]">
            <Lock className="text-white" size={36} />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Client Portal</h2>
          <p className="text-gray-500 text-sm font-medium">Access your secure dashboard</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Username / Email</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-red-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Enter your ID" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.06] transition-all text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Secure Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-red-500 transition-colors" size={18} />
              <input 
                type={showPass ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-gray-700 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.06] transition-all text-sm"
              />
              <button 
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors border-none bg-transparent cursor-pointer"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4.5 rounded-2xl transition-all active:scale-95 shadow-[0_10px_20px_rgba(220,38,38,0.3)] uppercase tracking-[0.15em] text-xs border-none cursor-pointer mt-2">
            Authorize Access
          </button>
        </form>

        <button 
          onClick={onBack}
          className="w-full mt-10 text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 border-none bg-transparent cursor-pointer"
        >
          <ArrowRight className="rotate-180" size={14} /> Back to Public Site
        </button>
      </div>
    </div>
  );
};

// --- HOME VIEW ---

const HomePage = ({ onLoginClick }) => (
  <div className="animate-in fade-in duration-700">
    <HeaderOne onLoginClick={onLoginClick} />
    <section id="home" className="relative min-h-screen flex items-center bg-black pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <h6 className="text-red-600 font-black tracking-[0.4em] uppercase mb-6 text-sm animate-in slide-in-from-left duration-700">Cybersecurity Intelligence</h6>
          <h1 className="text-5xl md:text-[7rem] font-black text-white leading-[0.9] mb-10 uppercase tracking-tighter animate-in slide-in-from-left duration-1000 delay-100">
            Defending Your <br />
            <span className="text-red-600 text-stroke-white">Digital</span> Legacy.
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl font-medium animate-in slide-in-from-left duration-1000 delay-200">
            Pioneering enterprise-grade digital defense and infrastructure security for global leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-in slide-in-from-bottom duration-1000 delay-300">
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all active:scale-95 uppercase tracking-widest border-none cursor-pointer shadow-[0_15px_30px_rgba(220,38,38,0.4)]">
              Get Started
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all uppercase tracking-widest border border-white/10 cursor-pointer">
              Our Process
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10 opacity-50 grayscale flex justify-center items-center gap-2">
           <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-black text-xs">S</div>
           <span className="text-white font-bold text-lg tracking-tighter uppercase">Secure<span className="">Pro</span></span>
        </div>
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em]">© 2024 SecurePro Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
);

// --- MAIN APP (The Routing Controller) ---

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'login'

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      {currentView === 'home' ? (
        <HomePage onLoginClick={() => setCurrentView('login')} />
      ) : (
        <LoginPage onBack={() => setCurrentView('home')} />
      )}
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-red-600/10 border border-red-600/30 hover:bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all z-50 backdrop-blur-xl group cursor-pointer active:scale-90"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          background: #000;
        }

        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
        }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slide-in-from-left { from { transform: translateX(-30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slide-in-from-bottom { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .animate-in { animation-fill-mode: both; }
        .fade-in { animation-name: fade-in; }
        .zoom-in { animation-name: zoom-in; }
        .slide-in-from-left { animation-name: slide-in-from-left; }
        .slide-in-from-bottom { animation-name: slide-in-from-bottom; }
        .duration-300 { animation-duration: 300ms; }
        .duration-500 { animation-duration: 500ms; }
        .duration-700 { animation-duration: 700ms; }
        .duration-1000 { animation-duration: 1000ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}