// Bootstrap file to fix DNS resolution before Next.js loads
import dns from 'dns';

// Fix Windows/local DNS stubs that return 127.0.0.1 and refuse SRV lookups
if (dns.getServers().some((server) => server === '127.0.0.1')) {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
  console.log('[DNS FIX] Replaced 127.0.0.1 with Google DNS (8.8.8.8, 1.1.1.1)');
}

// Now start Next.js
import('./node_modules/next/dist/bin/next.js').then(() => {
  // This runs after next starts
}).catch((err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});
