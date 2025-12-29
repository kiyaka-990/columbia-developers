'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Plus, Mic, Activity, Cpu, Send, RefreshCw, 
  FileUp, BarChart3, Terminal, Pickaxe, Droplets, 
  ShieldCheck, Home, Image as ImageIcon, Ruler, Briefcase, Sparkles
} from 'lucide-react';

const ColumbiaIntelligencePro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStep, setThinkingStep] = useState('');
  const chatEndRef = useRef(null);

  const industryTraining = {
    roads: "Columbia specializes in **Heavy Infrastructure**. Our current road works focus on Bitumen Surface Dressing and **Stormwater Drainage Systems** for urban durability.",
    water: "Our Water Division handles **Industrial Borehole Drilling** and high-pressure pipeline reticulation for regional access.",
    building: "We provide structural construction for **Commercial Office Blocks**, ensuring full statutory and NEMA compliance.",
    architecture: "Columbia's Architectural Suite covers **3D Modeling** and blueprint audits for high-capacity civil works.",
    management: "Project Management active. Monitoring **BoQ accuracy** and site timeline optimization to ensure zero-overrun delivery.",
    photo: "AI Vision active. Analyzing uploaded site photos for **Progress Verification**.",
    file: "Secure File Layer active. Analyzing **BoQ / Structural Drawings** for automated site audit.",
    default: "I am Gitobu the boss Assistance to Columbia Company,project manage alongside Okulluz Kiyaka for infrastructure development."
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  const resetToMain = () => {
    setMessages([]);
    setIsThinking(false);
    setIsMenuOpen(false);
    setInput('');
  };

  // The Core Logic that creates the "Thinking" experience
  const runIntelligenceSequence = async (userInput) => {
    setIsThinking(true);
    
    // Professional thinking steps for an engineering firm
    const steps = ["Initializing Neural Bridge...", "Scanning Columbia Knowledge Base...", "Syncing Site Logs...", "Optimizing Response..."];
    
    for (const step of steps) {
      setThinkingStep(step);
      await new Promise(r => setTimeout(r, 650)); // Controlled delay for professional feel
    }

    const q = userInput.toLowerCase();
    let responseText = industryTraining.default;
    if (q.includes('road')) responseText = industryTraining.roads;
    else if (q.includes('water')) responseText = industryTraining.water;
    else if (q.includes('build') || q.includes('construction')) responseText = industryTraining.building;
    else if (q.includes('arch')) responseText = industryTraining.architecture;
    else if (q.includes('manage')) responseText = industryTraining.management;
    else if (q.includes('photo')) responseText = industryTraining.photo;
    else if (q.includes('file')) responseText = industryTraining.file;

    setMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text: responseText }]);
    setIsThinking(false);
  };

  // This function ensures the category click mimics a real message send
  const handleCategorySelect = (categoryLabel, internalQuery) => {
    const userMsg = { id: Date.now(), text: categoryLabel, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    runIntelligenceSequence(internalQuery);
  };

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'user' }]);
    const currentInput = input;
    setInput('');
    runIntelligenceSequence(currentInput);
  };

  const THEME = { bg: '#0b0d14', card: '#161923', accent: '#D32F2F', border: 'rgba(255,255,255,0.08)' };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* TRIGGER */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '56px', height: '56px', borderRadius: '14px',
          backgroundColor: THEME.accent, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 8px 24px rgba(211, 47, 47, 0.4)`
        }}
      >
        {isOpen ? <X color="white" size={24} /> : <Cpu color="white" size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            style={{
              position: 'fixed', bottom: '90px', right: '24px', zIndex: 9998,
              width: '400px', height: '520px', maxHeight: '80vh', 
              backgroundColor: THEME.bg, borderRadius: '24px', 
              display: 'flex', flexDirection: 'column', border: `1px solid ${THEME.border}`,
              boxShadow: '0 24px 64px rgba(0,0,0,0.8)', overflow: 'hidden'
            }}
          >
            {/* HEADER */}
            <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0e1117', borderBottom: `1px solid ${THEME.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={14} color={THEME.accent} />
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', color: 'white' }}>COLUMBIA AI ASSISTANT</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', color: '#94a3b8' }}>
                <RefreshCw size={16} onClick={resetToMain} style={{ cursor: 'pointer' }} />
                <X size={18} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
              </div>
            </div>

            {/* CHAT AREA */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }} className="custom-scroll">
              {messages.length === 0 ? (
                <div style={{ marginTop: '20px' }}>
                  <h1 style={{ fontSize: '24px', color: 'white', fontWeight: '700', margin: '0 0 20px 0' }}>Site Command.</h1>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button onClick={() => handleCategorySelect("Road Analysis", "roads")} style={catStyle}><Pickaxe size={16} color={THEME.accent} /> Road Infrastructure</button>
                    <button onClick={() => handleCategorySelect("Water Works Audit", "water")} style={catStyle}><Droplets size={16} color={THEME.accent} /> Water Engineering</button>
                    <button onClick={() => handleCategorySelect("Architectural Check", "architecture")} style={catStyle}><Ruler size={16} color={THEME.accent} /> Architecture</button>
                    <button onClick={() => handleCategorySelect("Project Management", "management")} style={catStyle}><Briefcase size={16} color={THEME.accent} /> Project Management</button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px 0' }}>
                  <button onClick={resetToMain} style={homeBtnStyle}><Home size={12} /> Dashboard</button>
                  {messages.map((m) => (
                    <div key={m.id} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                      <div style={{ padding: '12px 16px', borderRadius: '16px', fontSize: '14px', color: 'white', backgroundColor: m.sender === 'user' ? THEME.card : 'transparent', border: m.sender === 'user' ? `1px solid ${THEME.border}` : 'none', lineHeight: '1.6' }}>
                        {m.text.split('**').map((part, i) => i % 2 === 1 ? <b key={i} style={{color: THEME.accent}}>{part}</b> : part)}
                      </div>
                    </div>
                  ))}
                  {isThinking && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: THEME.accent, fontSize: '12px', paddingLeft: '4px' }}>
                      <Terminal size={14} className="animate-pulse" /> 
                      <span style={{ letterSpacing: '0.5px' }}>{thinkingStep}</span>
                    </div>
                  )}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* INPUT SECTION */}
            <form onSubmit={handleSendMessage} style={{ padding: '20px', position: 'relative' }}>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} style={menuStyle}>
                    <button type="button" style={mItem} onClick={() => {setIsMenuOpen(false); handleCategorySelect("File Upload", "file");}}><FileUp size={14} color={THEME.accent}/> Upload BoQ / Drawing</button>
                    <button type="button" style={mItem} onClick={() => {setIsMenuOpen(false); handleCategorySelect("Photo Upload", "photo");}}><ImageIcon size={14} color={THEME.accent}/> Upload Site Photo</button>
                    <button type="button" style={mItem} onClick={() => {setIsMenuOpen(false); handleCategorySelect("Report Generation", "management");}}><BarChart3 size={14} color={THEME.accent}/> Generate Report</button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div style={{ backgroundColor: THEME.card, borderRadius: '32px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '10px', border: `1px solid ${THEME.border}` }}>
                <Plus size={20} color={isMenuOpen ? THEME.accent : "#94a3b8"} style={{ cursor: 'pointer' }} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <div style={smartPillStyle}><Sparkles size={14} color={THEME.accent} /> <span style={{ color: 'white', fontSize: '10px', fontWeight: '800' }}>CORE</span></div>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." style={{ flex: 1, background: 'none', border: 'none', color: 'white', outline: 'none', fontSize: '14px' }} />
                <Mic size={20} color="#94a3b8" />
                {input.trim() && <Send size={20} color={THEME.accent} style={{ cursor: 'pointer' }} onClick={handleSendMessage} />}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// CSS-IN-JS STYLES
const catStyle = { display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', backgroundColor: '#1c1f2a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '14px', textAlign: 'left', transition: '0.2s' };
const smartPillStyle = { display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', backgroundColor: 'rgba(211, 47, 47, 0.1)', borderRadius: '20px', border: '1px solid rgba(211, 47, 47, 0.2)' };
const menuStyle = { position: 'absolute', bottom: '70px', left: '20px', backgroundColor: '#1b1d26', border: '1px solid #333', borderRadius: '16px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 100, width: '210px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' };
const mItem = { background: 'none', border: 'none', color: '#94a3b8', fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', cursor: 'pointer', borderRadius: '8px' };
const homeBtnStyle = { alignSelf: 'center', background: 'rgba(211, 47, 47, 0.1)', border: '1px solid rgba(211, 47, 47, 0.2)', color: '#D32F2F', padding: '6px 14px', borderRadius: '12px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', marginBottom: '10px' };

export default ColumbiaIntelligencePro;