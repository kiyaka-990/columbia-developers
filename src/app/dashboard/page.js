"use client";

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Clock, CheckCircle, AlertCircle, TrendingUp, Download, 
  ShieldCheck, Users, BarChart3, Search, Building2, Hammer, Briefcase, 
  Activity, Globe, Zap, FilePlus, DollarSign, Eye, Server, Lock, 
  ShieldAlert, Bell, Plus, X, Video, Camera, HardHat, Construction, 
  Thermometer, Wind, ChevronRight, ArrowUpRight, UserCheck, HardDrive, 
  CloudLightning, Droplets, Sun, LogOut, Smartphone, Laptop, ExternalLink, 
  Shield, FileText, Box, BarChart, Layers, Map, Calendar, Cloud, Info, FileDown, Image as ImageIcon
} from 'lucide-react';

export default function ColumbiaFinalOS() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [vaultView, setVaultView] = useState('list');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const handleLogout = () => setIsLoggedIn(false);
  const handleLogin = () => setIsLoggedIn(true);
  const redirectToVercelHome = () => { window.location.href = "https://columbia-developers.vercel.app/"; };

  // --- NEW COMPONENT: WEATHER ALERT BANNER (INDEPENDENT) ---
  const WeatherAlertBanner = () => (
    <div style={alertBannerStyle}>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
        <CloudLightning size={20} />
        <span style={{fontWeight: '800', fontSize: '13px'}}>CRITICAL WEATHER ALERT:</span>
        <span style={{fontWeight: '500', fontSize: '13px'}}>High winds (42km/h) detected for Wednesday. Suspend all crane operations.</span>
      </div>
      <ShieldAlert size={20} />
    </div>
  );

  // --- 1. DASHBOARD VIEW (RESTORED & PRESERVED) ---
  const DashboardView = () => (
    <div style={contentFadeIn}>
      <div style={metricsGrid}>
        <MetricCard label="Portfolio Value" value="$428.5M" sub="12 Active Sites" icon={<Globe color="#3b82f6"/>} trend="+4.2%" />
        <MetricCard label="Weather Intel" value="24°C / Sunny" sub="Wind: 12km/h" icon={<Sun color="#f59e0b"/>} trend="Safe" />
        <MetricCard label="Safety Rating" value="A+" sub="Zero Incidents" icon={<ShieldCheck color="#e31e24"/>} trend="Elite" />
      </div>
      <div style={enterpriseCard}>
        <h3 style={cardTitle}>5-Day Weather Outlook</h3>
        <div style={forecastContainer}>
          <ForecastDay day="MON" icon={<Sun color="#f59e0b"/>} temp="24°C" wind="12km/h" risk="Low" />
          <ForecastDay day="TUE" icon={<Cloud color="#94a3b8"/>} temp="21°C" wind="18km/h" risk="Low" />
          <ForecastDay day="WED" icon={<CloudLightning color="#3b82f6"/>} temp="19°C" wind="42km/h" risk="High" active />
          <ForecastDay day="THU" icon={<Droplets color="#0ea5e9"/>} temp="20°C" wind="22km/h" risk="Med" />
          <ForecastDay day="FRI" icon={<Sun color="#f59e0b"/>} temp="23°C" wind="10km/h" risk="Low" />
        </div>
      </div>
    </div>
  );

  // --- 2. SAFETY & OSHA (PRESERVED) ---
  const SafetyView = () => (
    <div style={contentFadeIn}>
      <div style={metricsGrid}>
        <MetricCard label="Days Incident Free" value="184" sub="Last: July 2025" icon={<ShieldCheck color="#22c55e"/>} trend="Safe" />
        <MetricCard label="Open Permits" value="14" sub="All Verified" icon={<FileText color="#3b82f6"/>} trend="Active" />
        <MetricCard label="Compliance" value="100%" sub="OSHA Standards" icon={<HardHat color="#e31e24"/>} trend="Elite" />
      </div>
      <div style={enterpriseCard}>
        <h3 style={cardTitle}>Safety Inspection Log</h3>
        <table style={enterpriseTable}>
          <thead><tr><th>ZONE</th><th>INSPECTOR</th><th>STATUS</th><th>RESULT</th></tr></thead>
          <tbody>
            <tr><td style={boldTd}>Sector 7-G</td><td>Miller, D.</td><td><span style={badgeStyle('#dcfce7', '#166534')}>PASSED</span></td><td>No Hazards</td></tr>
            <tr><td style={boldTd}>Tower Crane 1</td><td>Jensen, S.</td><td><span style={badgeStyle('#dcfce7', '#166534')}>PASSED</span></td><td>Hydraulics OK</td></tr>
            <tr><td style={boldTd}>Sub-Level 2</td><td>Hart, K.</td><td><span style={badgeStyle('#fef9c3', '#854d0e')}>PENDING</span></td><td>Ventilation Check</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // --- 3. LABOR FORCE (PRESERVED) ---
  const LaborView = () => (
    <div style={contentFadeIn}>
      <div style={metricsGrid}>
        <MetricCard label="Active Count" value="342" sub="Current Shift" icon={<Users color="#3b82f6"/>} trend="+12" />
        <MetricCard label="Efficiency" value="96.2%" sub="Work-to-Hour" icon={<Zap color="#f59e0b"/>} trend="High" />
        <MetricCard label="Daily Spend" value="$44.2K" sub="Labor Budget" icon={<DollarSign color="#22c55e"/>} trend="Stable" />
      </div>
      <div style={enterpriseCard}>
        <h3 style={cardTitle}>Subcontractor Performance</h3>
        <table style={enterpriseTable}>
          <thead><tr><th>COMPANY</th><th>TRADE</th><th>HEADCOUNT</th><th>RATING</th></tr></thead>
          <tbody>
            <tr><td style={boldTd}>Apex Structural</td><td>Steel</td><td>42</td><td><span style={badgeStyle('#dcfce7', '#166534')}>9.8</span></td></tr>
            <tr><td style={boldTd}>Build-Right Inc.</td><td>Concrete</td><td>86</td><td><span style={badgeStyle('#dcfce7', '#166534')}>9.5</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // --- 4. ASSET VAULT & GALLERY (PRESERVED) ---
  const AssetView = () => (
    <div style={contentFadeIn}>
      <div style={sectionHeader}>
        <h2 style={viewTitle}>Asset Vault</h2>
        <div style={{display: 'flex', gap: '10px'}}>
          <button style={vaultView === 'list' ? primaryButtonStyle : secondaryTabBtn} onClick={() => setVaultView('list')}><FileText size={16}/> List</button>
          <button style={vaultView === 'gallery' ? primaryButtonStyle : secondaryTabBtn} onClick={() => setVaultView('gallery')}><ImageIcon size={16}/> Gallery</button>
        </div>
      </div>
      {vaultView === 'list' ? (
        <div style={enterpriseCard}>
          <table style={enterpriseTable}>
            <thead><tr><th>FILE NAME</th><th>TYPE</th><th>VERSION</th><th>DATE</th></tr></thead>
            <tbody>
              <tr><td style={boldTd}>Site_A_Master.dwg</td><td>CAD</td><td>v8.4</td><td>Jan 05</td></tr>
              <tr><td style={boldTd}>Steel_Specs.pdf</td><td>Specs</td><td>v2.1</td><td>Jan 04</td></tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div style={photoGrid}>
          {[1, 2].map((i) => (
            <div key={i} style={photoCard}>
              <div style={photoPlaceholder}><Construction size={32} color="#cbd5e1"/></div>
              <div style={{padding: '12px'}}><p style={photoLabel}>Site Photo_00{i}.jpg</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // --- 5. ANALYTICS (PRESERVED) ---
  const AnalyticsView = () => (
    <div style={contentFadeIn}>
       <div style={sectionHeader}><h2 style={viewTitle}>Analytics</h2><button style={primaryButtonStyle} onClick={() => alert('Exporting PDF...')}><FileDown size={18}/> Export PDF</button></div>
       <div style={metricsGrid}>
        <MetricCard label="ROI Projected" value="22.4%" sub="Est. $12.4M Gain" icon={<BarChart3 color="#22c55e"/>} trend="+1.2%" />
        <MetricCard label="Material Risk" value="Low" sub="95% Supply" icon={<Box color="#3b82f6"/>} trend="Stable" />
      </div>
      <div style={enterpriseCard}>
        <h3 style={cardTitle}>Procurement Health</h3>
        <div style={progressBar}><div style={{width: '95%', height: '100%', backgroundColor: '#e31e24'}}></div></div>
      </div>
    </div>
  );

  // --- 6. SECURITY (PRESERVED) ---
  const SecurityView = () => (
    <div style={contentFadeIn}>
      <div style={enterpriseCard}>
        <h3 style={cardTitle}>Security Audit Log</h3>
        <table style={enterpriseTable}>
          <thead><tr><th>USER ROLE</th><th>LOCATION</th><th>IP ADDRESS</th><th>TIMESTAMP</th></tr></thead>
          <tbody>
            <tr><td style={boldTd}>Root Admin</td><td>New York, US</td><td>192.168.1.1</td><td>Jan 06, 15:44</td></tr>
            <tr><td style={boldTd}>Lead Dev</td><td>Vercel Deployment</td><td>45.22.10.84</td><td>Jan 06, 15:10</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // --- ALERTS SIDEBAR (PRESERVED) ---
  const AlertsSidebar = () => (
    <div style={alertsSidebarStyle}>
      <h4 style={{...cardTitle, color: '#e31e24', display: 'flex', alignItems: 'center', gap: '8px'}}><ShieldAlert size={18}/> CRITICAL ALERTS</h4>
      <div style={alertNotificationCard}>
        <div style={{display: 'flex', gap: '10px'}}><HardHat size={20} color="#e31e24"/>
          <div><p style={alertTextBold}>Safety Pending: Sub-Level 2</p><p style={alertTextSub}>Awaiting ventilation clearance.</p></div>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return (
      <div style={homepageLayout}>
        <div style={loginContainer}>
          <div style={logoArea}><div style={logoSquare}><Building2 size={32} color="#fff" /></div><h1 style={{...brandName, fontSize: '32px'}}>COLUMBIA</h1></div>
          <div style={enterpriseCard}>
            <button onClick={handleLogin} style={{...primaryButtonStyle, width: '100%', padding: '18px', justifyContent: 'center', marginBottom: '15px'}}>LOG IN</button>
            <button onClick={redirectToVercelHome} style={secondaryLinkBtn}><ExternalLink size={16}/> RETURN TO COLUMBIA-DEVELOPERS.VERCEL.APP</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={appLayout}>
      <aside style={sidebarStyle}>
        <div style={logoArea}><div style={logoSquare}><Building2 size={24} color="#fff" /></div><div><h2 style={brandName}>COLUMBIA</h2><p style={brandTag}>ELITE OS</p></div></div>
        <nav style={navContainer}>
          <SidebarBtn active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<LayoutDashboard size={18}/>} label="Command Center" />
          <SidebarBtn active={activeTab === 'safety'} onClick={() => setActiveTab('safety')} icon={<HardHat size={18}/>} label="Safety & OSHA" />
          <SidebarBtn active={activeTab === 'labor'} onClick={() => setActiveTab('labor')} icon={<Users size={18}/>} label="Labor Force" />
          <SidebarBtn active={activeTab === 'files'} onClick={() => setActiveTab('files')} icon={<Briefcase size={18}/>} label="Asset Vault" />
          <SidebarBtn active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} icon={<Activity size={18}/>} label="Analytics" />
          <SidebarBtn active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={<ShieldCheck size={18}/>} label="Security" />
        </nav>
        <div onClick={handleLogout} style={logoutButtonCard}><LogOut size={18}/><span>LOGOUT</span></div>
      </aside>

      <main style={mainContent}>
        <WeatherAlertBanner />
        <header style={topHeader}>
          <div style={searchWrapper}><Search size={18} color="#94a3b8" /><input placeholder="Secure Search..." style={searchField} /></div>
          <div style={userProfile}><div style={avatar}>AD</div><div><span style={uName}>Admin</span><br/><button onClick={handleLogout} style={logoutLink}>Logout</button></div></div>
        </header>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 300px', gap: '30px'}}>
          <div style={{minWidth: 0}}>
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'safety' && <SafetyView />}
            {activeTab === 'labor' && <LaborView />}
            {activeTab === 'files' && <AssetView />}
            {activeTab === 'reports' && <AnalyticsView />}
            {activeTab === 'settings' && <SecurityView />}
          </div>
          <AlertsSidebar />
        </div>
      </main>
    </div>
  );
}

// --- SHARED UI COMPONENTS & CSS ---
const ForecastDay = ({day, icon, temp, wind, risk, active}) => (
  <div style={{...forecastItem, backgroundColor: active ? '#fef2f2' : 'transparent', border: active ? '1px solid #fee2e2' : 'none'}}>
    <span style={{fontSize: '11px', fontWeight: '800'}}>{day}</span>{icon}<span style={{fontSize: '14px', fontWeight: '900'}}>{temp}</span>
    <span style={{fontSize: '10px', color: '#94a3b8'}}>{wind}</span>
    <span style={{...badgeStyle(risk === 'High' ? '#fee2e2' : '#f1f5f9', risk === 'High' ? '#b91c1c' : '#475569'), marginTop: '8px'}}>{risk}</span>
  </div>
);
const SidebarBtn = ({active, icon, label, onClick}) => (
  <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '12px', border: 'none', cursor: 'pointer', textAlign: 'left', backgroundColor: active ? '#e31e24' : 'transparent', color: active ? '#fff' : '#64748b', fontWeight: '700' }}>{icon} {label}</button>
);
const MetricCard = ({label, value, sub, icon, trend}) => (
  <div style={enterpriseCard}>
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>{icon} <span style={{fontSize: '11px', fontWeight: '900', color: '#22c55e'}}>{trend}</span></div>
    <p style={{margin: 0, fontSize: '12px', fontWeight: '700', color: '#94a3b8'}}>{label}</p>
    <h2 style={{margin: '4px 0', fontSize: '26px', fontWeight: '900'}}>{value}</h2>
    <p style={{margin: 0, fontSize: '11px', fontWeight: '600', color: '#64748b'}}>{sub}</p>
  </div>
);

// --- CSS CONFIG ---
const alertBannerStyle = { backgroundColor: '#e31e24', color: '#fff', padding: '12px 24px', borderRadius: '14px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'pulse 2s infinite' };
const photoGrid = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' };
const photoCard = { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' };
const photoPlaceholder = { height: '140px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const photoLabel = { margin: 0, fontSize: '12px', fontWeight: '800', textAlign: 'center' };
const secondaryTabBtn = { backgroundColor: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer', padding: '10px 20px' };
const alertsSidebarStyle = { backgroundColor: '#fff', borderRadius: '24px', padding: '24px', border: '1px solid #e2e8f0', alignSelf: 'start' };
const alertNotificationCard = { backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px', marginBottom: '15px', borderLeft: '4px solid #e31e24' };
const alertTextBold = { margin: 0, fontSize: '13px', fontWeight: '800' };
const alertTextSub = { margin: '4px 0 0', fontSize: '11px', color: '#64748b' };
const appLayout = { display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Inter, sans-serif' };
const sidebarStyle = { width: '280px', background: '#0f172a', padding: '40px 24px', display: 'flex', flexDirection: 'column' };
const logoArea = { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' };
const logoSquare = { width: '40px', height: '40px', backgroundColor: '#e31e24', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const brandName = { fontSize: '20px', fontWeight: '900', color: '#fff', margin: 0 };
const brandTag = { fontSize: '9px', color: '#e31e24', fontWeight: '800', margin: 0, letterSpacing: '1.5px' };
const navContainer = { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 };
const mainContent = { flex: 1, padding: '40px', overflowY: 'auto' };
const enterpriseCard = { backgroundColor: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '25px' };
const metricsGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '30px' };
const cardTitle = { fontSize: '14px', fontWeight: '800', color: '#475569', marginBottom: '20px', textTransform: 'uppercase' };
const enterpriseTable = { width: '100%', borderCollapse: 'collapse', fontSize: '14px' };
const badgeStyle = (bg, color) => ({ backgroundColor: bg, color, padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '800' });
const boldTd = { padding: '16px 0', fontWeight: '700' };
const progressBar = { height: '8px', backgroundColor: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' };
const logoutButtonCard = { marginTop: 'auto', backgroundColor: '#e31e24', color: '#fff', padding: '15px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: '700' };
const logoutLink = { background: 'none', border: 'none', color: '#e31e24', fontWeight: '800', fontSize: '12px', cursor: 'pointer' };
const topHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' };
const searchWrapper = { display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '12px 20px', borderRadius: '14px', border: '1px solid #e2e8f0', width: '300px' };
const searchField = { border: 'none', outline: 'none', background: 'transparent', width: '100%', fontSize: '14px' };
const userProfile = { display: 'flex', alignItems: 'center', gap: '12px' };
const avatar = { width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#e31e24', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' };
const uName = { fontSize: '14px', fontWeight: '800' };
const contentFadeIn = { animation: 'fadeIn 0.5s ease' };
const viewTitle = { fontSize: '24px', fontWeight: '900', margin: 0 };
const sectionHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' };
const primaryButtonStyle = { backgroundColor: '#e31e24', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' };
const secondaryLinkBtn = { background: 'none', border: 'none', color: '#94a3b8', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center' };
const homepageLayout = { height: '100vh', backgroundColor: '#0f172a', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const loginContainer = { width: '400px', textAlign: 'center' };
const forecastContainer = { display: 'flex', justifyContent: 'space-between', gap: '10px' };
const forecastItem = { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', borderRadius: '12px' };