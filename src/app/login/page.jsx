"use client";
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function LoginForm() {
  const [password, setPassword] = useState('');
  const searchParams = useSearchParams();
  const error = searchParams.get('error'); // Checks for ?error=1 in URL

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Set the cookie
    document.cookie = `admin_token=${password}; path=/; max-age=86400; SameSite=Lax`;
    
    // 2. Redirect to admin (Middleware will kick us back if the password was wrong)
    window.location.href = '/admin/manage';
  };

  return (
    <form onSubmit={handleLogin} className="card p-4 shadow" style={{maxWidth: '400px', width: '100%'}}>
      <h3 className="mb-3 text-center font-weight-bold">Admin Access</h3>
      
      {/* ERROR MESSAGE ALERT */}
      {error && (
        <div className="alert alert-danger py-2 text-center" role="alert" style={{fontSize: '14px'}}>
          Incorrect password. Please try again.
        </div>
      )}

      <input 
        type="password" 
        className="form-control mb-3"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary w-100" style={{backgroundColor: '#EA5501', border: 'none'}}>
        Login to Dashboard
      </button>
    </form>
  );
}

// Next.js requires Suspense when using useSearchParams in the App Router
export default function LoginPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}