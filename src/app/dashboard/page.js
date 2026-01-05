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
  TrendingUp
} from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState("Client");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Set mounted to true to handle the Date hydration error
    setMounted(true);

    // 2. Check for logged in user
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      window.location.href = "/"; 
    } else {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  // Prevent rendering date/specific client content until mounted
  if (!mounted) return null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', backgroundColor: '#1a1a1a', color: '#fff', padding: '30px 20px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#e31e24', fontSize: '22px', fontWeight: '800', margin: 0 }}>COLUMBIA</h2>
          <p style={{ fontSize: '12px', opacity: 0.6 }}>PROJECT PORTAL</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={navItemStyle(true)}><LayoutDashboard size={18} /> Dashboard</button>
          <button style={navItemStyle(false)}><FileText size={18} /> Project Files</button>
          <button style={navItemStyle(false)}><TrendingUp size={18} /> Progress Reports</button>
          <button style={navItemStyle(false)}><Settings size={18} /> Settings</button>
          <button onClick={handleLogout} style={{ ...navItemStyle(false), marginTop: '50px', color: '#ff4d4d' }}>
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1a1a1a', margin: 0 }}>
              Welcome back, {user}!
            </h1>
            <p style={{ color: '#666' }}>Here is the latest update on your construction projects.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '10px 20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <span style={{ fontWeight: 'bold' }}>
               {/* This now matches perfectly between server and client */}
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '40px' }}>
          <div style={cardStyle()}><Clock color="#e31e24" size={30} /> <h3>24</h3> <p>Days to Deadline</p></div>
          <div style={cardStyle()}><CheckCircle color="#22c55e" size={30} /> <h3>85%</h3> <p>Project Completion</p></div>
          <div style={cardStyle()}><AlertCircle color="#f59e0b" size={30} /> <h3>2</h3> <p>Pending Approvals</p></div>
        </div>

        {/* Project Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Recent Milestone Updates</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #f0f0f0', color: '#999', fontSize: '13px' }}>
                <th style={{ padding: '15px 0' }}>TASK</th>
                <th>STATUS</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableRowStyle}>
                <td style={{ fontWeight: '600', padding: '15px 0' }}>Foundation Concrete Pour</td>
                <td><span style={badgeStyle('#dcfce7', '#166534')}>Completed</span></td>
                <td>Jan 04, 2026</td>
              </tr>
              <tr style={tableRowStyle}>
                <td style={{ fontWeight: '600', padding: '15px 0' }}>Structural Steel Framing</td>
                <td><span style={badgeStyle('#fef3c7', '#92400e')}>In Progress</span></td>
                <td>Estimated Jan 15</td>
              </tr>
              <tr style={tableRowStyle}>
                <td style={{ fontWeight: '600', padding: '15px 0' }}>Electrical Rough-in</td>
                <td><span style={badgeStyle('#f1f1f1', '#666')}>Upcoming</span></td>
                <td>Feb 01, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Styling Helpers
const navItemStyle = (active) => ({
  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', width: '100%',
  background: active ? '#e31e24' : 'transparent', color: '#fff', border: 'none',
  borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontWeight: '600', transition: '0.2s'
});

const cardStyle = () => ({
  backgroundColor: '#fff', padding: '25px', borderRadius: '15px', 
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center'
});

const tableRowStyle = { borderBottom: '1px solid #f9f9f9' };
const badgeStyle = (bg, color) => ({
  backgroundColor: bg, color: color, padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'
});