# 🚀 QUICK START - PRODUCTION DEPLOYMENT GUIDE

## ⚠️ DO THIS FIRST - CRITICAL SECURITY FIXES

Before deploying to production, you MUST fix these critical security issues:

### 1. **Rotate All Credentials IMMEDIATELY** (URGENT!)
Your `.env` file with production passwords was committed to git. Anyone can see them now.

**Steps:**
1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Create new database user with strong password (20+ chars)
3. Update connection string in `.env` with new credentials
4. Generate new Gmail app password: https://myaccount.google.com/apppasswords
5. Generate new Vercel Blob token (if using): https://vercel.com/account/tokens

### 2. **Install JWT Verification Library**
```bash
npm install jose
```

### 3. **Verify API Authentication is Working**
```bash
# Start the dev server
npm run dev

# In another terminal, test that API is protected:
curl -X POST http://localhost:3000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{"title":"test"}'

# Should get: {"error":"Unauthorized: No token provided"}
```

### 4. **Update Admin Credentials**
If you've already created the admin account with default "admin" password, change it immediately:
- Go to your database (MongoDB Atlas)
- Find the User document with email `admin@itnnovator.com`
- Update password to a strong one (20+ chars)

---

## 📋 RECOMMENDED FIXES BEFORE DEPLOYMENT

### 1. **Secure Admin Script**
Update `scripts/create-admin.js` to not have hardcoded password:
- Use CLI prompts to ask for admin email and password
- Validate password strength (minimum 12 chars)

### 2. **Add Rate Limiting**
Prevent brute force attacks on login and APIs:
```bash
npm install express-rate-limit
```

### 3. **Add HTTPS Headers**
Add security headers to all responses:
```javascript
// In next.config.js
async headers() {
    return [{
        source: '/:path*',
        headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-XSS-Protection', value: '1; mode=block' }
        ]
    }]
}
```

---

## 🚀 DEPLOYMENT STEPS

### On Vercel:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add these variables:
   ```
   MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_NEW_PASSWORD@...
   JWT_SECRET=generate_strong_random_string
   NEXTAUTH_SECRET=another_strong_random_string
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your_new_app_password
   itnnovator_READ_WRITE_TOKEN=your_new_vercel_token
   ```
5. Go to Deployments
6. Select latest deployment
7. Click "Redeploy" to deploy with new environment variables

### On Railway/Other:
1. Set environment variables in their dashboard
2. Redeploy the application

---

## ✅ TEST AFTER DEPLOYMENT

1. **Visit your website**: https://itnnovator.com
2. **Test admin login**: https://itnnovator.com/admin
3. **Verify pages load**: Services, Blog, Cases, Contact
4. **Test contact form**: Send test message
5. **Check admin functions**: Can you create a blog post?

---

## 📊 SECURITY STATUS

| Check | Status | Action |
|-------|--------|--------|
| Credentials rotated | ⏳ PENDING | Do this first! |
| `.env` removed from git | ⏳ PENDING | Run git rm --cached .env |
| API auth enabled | ✅ DONE | All endpoints protected |
| JWT validation | ✅ DONE | Signature verified |
| Admin page protected | ✅ DONE | Middleware validates tokens |
| Environment variables | ⏳ PENDING | Set on production platform |

---

## 🆘 TROUBLESHOOTING

### API returns 401 after deploying
- [ ] Check `JWT_SECRET` is set on production
- [ ] Verify token format in Authorization header (Bearer ...)
- [ ] Check token expiration in admin login

### Admin login not working
- [ ] Verify `MONGODB_URI` is correct and new password is set
- [ ] Check `JWT_SECRET` environment variable
- [ ] Look at server logs for connection errors

### Emails not sending
- [ ] Verify `SMTP_USER` and `SMTP_PASS` are correct
- [ ] Check Gmail app password (not regular password)
- [ ] Verify Gmail "Less secure apps" is enabled

---

## 📞 SUPPORT

Check these files for more details:
- [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) - Complete pre-launch checklist
- [SECURITY_AUDIT.md](SECURITY_AUDIT.md) - Detailed security fixes
- [.env.example](.env.example) - Environment variable template

Good luck with your launch! 🚀
