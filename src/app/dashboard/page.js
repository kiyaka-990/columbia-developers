"use client";

import React, { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  ChevronRight,
  Download
} from 'lucide-react';

export default function ColumbiaDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState("Client");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      // In a real Next.js app, use useRouter()
      // window.location.href = "/"; 
      setUser("Developer Admin"); // Mock user for demo
    } else {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (!mounted) return null;

  // --- Sub-Components for Different Views ---

  const DashboardHome = () => (
    <>
      <div style={gridStyle}>
        <div style={cardStyle()}><Clock color="#e31e24" size={24} /> <h3>24</h3> <p>Days to Deadline</p></div>
        <div style={cardStyle()}><CheckCircle color="#22c55e" size={24} /> <h3>85%</h3> <p>Project Completion</p></div>
        <div style={cardStyle()}><AlertCircle color="#f59e0b" size={24} /> <h3>2</h3> <p>Pending Approvals</p></div>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Recent Milestone Updates</h3>
        <table style={tableStyle}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th>TASK</th>
              <th>STATUS</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={tdStyle}>Foundation Concrete Pour</td>
              <td><span style={badgeStyle('#dcfce7', '#166534')}>Completed</span></td>
              <td>Jan 04, 2026</td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={tdStyle}>Structural Steel Framing</td>
              <td><span style={badgeStyle('#fef3c7', '#92400e')}>In Progress</span></td>
              <td>Estimated Jan 15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  const FilesView = () => (
    <div style={sectionStyle}>
      <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Blueprint & Project Documentation</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['Site_Plan_Final.pdf', 'Electrical_Schematics_V2.dwg', 'Structural_Permit.pdf'].map((file, i) => (
          <div key={i} style={fileItemStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <FileText size={20} color="#666" />
              <span style={{ fontWeight: '500' }}>{file}</span>
            </div>
            <button style={downloadButtonStyle}><Download size={16} /> Download</button>
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsView = () => (
    <div style={sectionStyle}>
      <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Account Settings</h3>
      <div style={{ maxWidth: '400px' }}>
        <label style={labelStyle}>Notification Email</label>
        <input style={inputStyle} defaultValue="admin@columbiadev.com" />
        <button style={primaryButtonStyle}>Update Profile</button>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f4f7', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '35px', height: '35px', backgroundColor: '#e31e24', borderRadius: '4px' }}></div>
            <h2 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px', margin: 0 }}>COLUMBIA</h2>
          </div>
          <p style={{ fontSize: '11px', opacity: 0.5, marginTop: '5px', fontWeight: 'bold' }}>DEVELOPER PORTAL</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setActiveTab('dashboard')} style={navItemStyle(activeTab === 'dashboard')}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('files')} style={navItemStyle(activeTab === 'files')}>
            <FileText size={18} /> Project Files
          </button>
          <button onClick={() => setActiveTab('reports')} style={navItemStyle(activeTab === 'reports')}>
            <TrendingUp size={18} /> Progress Reports
          </button>
          <button onClick={() => setActiveTab('settings')} style={navItemStyle(activeTab === 'settings')}>
            <Settings size={18} /> Settings
          </button>
          
          <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
             <button onClick={handleLogout} style={logoutButtonStyle}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
        <header style={headerStyle}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', margin: 0, letterSpacing: '-1px' }}>
              Welcome, {user}
            </h1>
            <p style={{ color: '#666', marginTop: '5px' }}>Project: <span style={{ fontWeight: '600', color: '#1a1a1a' }}>Northview Residential Complex</span></p>
          </div>
          <div style={dateBoxStyle}>
            <Clock size={14} />
            <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </header>

        {/* Dynamic Content Rendering */}
        {activeTab === 'dashboard' && <DashboardHome />}
        {activeTab === 'files' && <FilesView />}
        {activeTab === 'settings' && <SettingsView />}
        {activeTab === 'reports' && <div style={sectionStyle}><h3>Charts & Visual Data Loading...</h3></div>}
      </main>
    </div>
  );
}

// --- Enhanced Styles ---

const sidebarStyle = {
  width: '260px', 
  backgroundColor: '#0f0f10', 
  color: '#fff', 
  padding: '40px 24px',
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  top: 0,
  height: '100vh'
};

const navItemStyle = (active) => ({
  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', width: '100%',
  background: active ? '#e31e24' : 'transparent', 
  color: active ? '#fff' : '#a0a0a0', 
  border: 'none', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', 
  fontWeight: '600', transition: 'all 0.3s ease'
});

const logoutButtonStyle = {
  ...navItemStyle(false),
  color: '#ff6b6b',
  border: '1px solid #333'
};

const headerStyle = {
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'flex-start', 
  marginBottom: '50px' 
};

const dateBoxStyle = {
  display: 'flex', alignItems: 'center', gap: '8px',
  backgroundColor: '#fff', padding: '8px 16px', borderRadius: '100px', 
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '14px', fontWeight: '600'
};

const gridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px'
};

const cardStyle = () => ({
  backgroundColor: '#fff', padding: '30px', borderRadius: '20px', 
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)', textAlign: 'left',
  border: '1px solid #edf2f7'
});

const sectionStyle = {
  backgroundColor: '#fff', borderRadius: '24px', padding: '32px', 
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)', border: '1px solid #edf2f7'
};

const fileItemStyle = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '16px', borderRadius: '12px', backgroundColor: '#f8f9fa', border: '1px solid #eee'
};

const downloadButtonStyle = {
  display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px',
  backgroundColor: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '8px',
  fontSize: '12px', fontWeight: '600', cursor: 'pointer'
};

const inputStyle = {
  width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '20px'
};

const labelStyle = { display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' };

const primaryButtonStyle = {
  backgroundColor: '#e31e24', color: '#fff', padding: '12px 24px', border: 'none',
  borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'
};

const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const tableHeaderStyle = { textAlign: 'left', borderBottom: '2px solid #f0f0f0', color: '#a0aec0', fontSize: '12px', letterSpacing: '0.05em' };
const tableRowStyle = { borderBottom: '1px solid #f7fafc' };
const tdStyle = { fontWeight: '600', padding: '20px 0', fontSize: '15px' };
const badgeStyle = (bg, color) => ({
  backgroundColor: bg, color: color, padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: '700'
});