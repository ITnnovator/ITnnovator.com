// DNS fix that runs via Node's -r flag before anything else loads
const dns = require('dns');

if (dns.getServers().some((server) => server === '127.0.0.1')) {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
  console.log('[DNS FIX] Replaced 127.0.0.1 with Google DNS');
}
