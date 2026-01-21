'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      toast.success('Access Granted');
      router.push('/admin');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0c] relative overflow-hidden isolate selection:bg-blue-500/30">

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,60,255,0.1),rgba(0,0,0,0)_50%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md p-6 relative z-10"
      >
        <div className="bg-[#111116]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden group">

          {/* Top colored line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          {/* Icon Header */}
          <div className="mb-10 text-center relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-white/5 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Sign in to your administrative dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-gray-100 placeholder-gray-600 outline-none transition-all duration-200"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-gray-100 placeholder-gray-600 outline-none transition-all duration-200"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 mt-4 group-invalid:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Enter Dashboard <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer Decoration */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-600">
              Secured by ITnnovator Admin System
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
