# Firebase Hosting Deployment Guide

## ✅ Your app is now live at:
https://netflixderrel--derrel-win.europe-west4.hosted.app/

## 🚀 Quick Deployment Commands

### Option 1: Using npm script (Recommended)
```bash
npm run deploy
```

### Option 2: Using PowerShell script
```powershell
.\deploy.ps1
```

### Option 3: Manual deployment
```bash
# Build the app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## 📁 Important Files

- **firebase.json** - Firebase Hosting configuration
- **.firebaserc** - Firebase project settings
- **deploy.ps1** - Automated deployment script

## 🔧 Configuration Details

### Firebase Project
- Project ID: `netflixderrel`
- Hosting URL: https://netflixderrel--derrel-win.europe-west4.hosted.app/

### Build Settings
- Build folder: `build/`
- React Router: Configured (all routes redirect to index.html)
- Caching: Enabled for static assets

## 📝 Common Tasks

### Update your site
1. Make your changes
2. Run `npm run deploy`
3. Wait for deployment to complete
4. Visit your URL to see changes

### View deployment history
```bash
firebase hosting:channel:list
```

### Rollback to previous version
```bash
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
```

## 🐛 Troubleshooting

### Build fails
- Check for TypeScript errors
- Run `npm install` to ensure dependencies are installed
- Check console for specific error messages

### Deployment fails
- Ensure you're logged in: `firebase login`
- Check project ID in `.firebaserc`
- Verify you have permissions for the project

### Site shows old version
- Clear browser cache (Ctrl + Shift + R)
- Wait 1-2 minutes for CDN to update
- Check deployment status: `firebase hosting:channel:list`

## 📚 Resources

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [React Router with Firebase](https://firebase.google.com/docs/hosting/full-config#rewrites)
- [Custom Domain Setup](https://firebase.google.com/docs/hosting/custom-domain)
