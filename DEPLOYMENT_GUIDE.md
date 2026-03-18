# Softcorp Deployment Guide (Low Memory OCI Server)

Because your Oracle Cloud Free Tier server has only 1GB of RAM, it cannot compile the Next.js application itself. Instead, you will build the application on your computer, push the built files to GitHub, and simply download them on the server.

Follow these 4 simple steps every time you want to update the live website:

---

## Step 1: Make your changes and test locally

Run your local development server as usual to make sure everything looks good:
```bash
npm run dev
```

Once you are satisfied with your code changes, you must completely stop the development server (press `Ctrl + C` in your terminal) before moving to Step 2.

---

## Step 2: Build the Production Code Locally

Now that your code is ready, you need to compile it for production on your Windows computer.

Run this simple command in your project folder:
```bash
npm run build
```

*Note: This will create a fresh `/.next` folder containing the live website. Your `.gitignore` file has already been configured to secretly exclude the massive caches so it will upload smoothly.*

---

## Step 3: Push to GitHub

Once the build is complete, use Git to upload both your new code AND the new `/.next` production files to GitHub.

```bash
git add .
git commit -m "Describe your update here (e.g., changed hero text)"
git push origin main
```

---

## Step 4: Turn it on in the OCI Server

Log into your Ubuntu OCI server via SSH. Since the server no longer has to build the code, you just need to download it and restart PM2!

Run these three commands on your server:
```bash
cd ~/softcorp
git pull origin main
./deploy.sh
```

**That's it!** `deploy.sh` will automatically restart PM2 and your website (`wesoftcorp.com`) will instantly update with your new changes.
