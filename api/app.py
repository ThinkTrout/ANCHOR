import os
from flask import Flask, render_template, send_from_directory

# Correct paths from inside /api/
app = Flask(__name__, static_folder="../static", template_folder="../templates")

@app.route("/")
def menu():
    return render_template("menu.html")

@app.route('/onboarding')
def onboarding():
    return render_template('onboarding.html')

@app.route('/game')
def game():
    return render_template('game.html')

@app.route('/music/<filename>')
def music(filename):
    music_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'music'))
    return send_from_directory(music_dir, filename)

# This is the magic line — tells Vercel to use Flask as WSGI handler
# Do NOT wrap it in another function
# Just expose the app directly
app = app  # Vercel needs a top-level `app` or `handler`
