"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Set a cookie that lasts 24 hours
    document.cookie = `admin_token=${password}; path=/; max-age=86400; SameSite=Strict`;
    
    // Attempt to go to the manage page
    router.push('/admin/manage');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleLogin} className="card p-4 shadow" style={{maxWidth: '400px', width: '100%'}}>
        <h3 className="mb-3 text-center">Admin Login</h3>
        <input 
          type="password" 
          className="form-control mb-3"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100" style={{backgroundColor: '#EA5501', border: 'none'}}>
          Access Dashboard
        </button>
      </form>
    </div>
  );
}