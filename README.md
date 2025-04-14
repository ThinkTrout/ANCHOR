# ANCHOR
**The Reef awaits, *Diver*. How will *you* navigate its waters?**

## How to Run on Local Port

1. Fork the repository.
2. Click **Code**
3. Click **Codespaces**
3. Click **Create codespace on main**
5. Wait forever for it to load.

Open a new terminal (CTRL+SHIFT+C)\
Run this code in the terminal:
```
python local.py
```
Click **Open in browser** when the prompt comes up.\
Alternatively, go to **Ports** and click the Globe icon to run the game in your browser.

You can make uncommitted edits and refresh this local port to see your live edits. When you are satisfied, you can commit later.

## How to deploy to Vercel

**NOTE: I AM NOT 100% SURE THIS WILL WORK.**

Make sure you have a Vercel account.\
Run these commands in the terminal:
```
npm install -g vercel
vercel login
```
Type in the verification code that Vercel gives you in your browser.
```
cd api
vercel
```
Follow the prompts to complete setup. Then open the link to see your Vercel app.\
You can change or add custom domains in the Vercel website.

In the future, all edits to game logic should be made in **app.py**.
