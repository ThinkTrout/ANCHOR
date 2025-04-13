from flask import Flask, render_template

# Correct paths from inside /api/
app = Flask(__name__, static_folder="../static", template_folder="../templates")

@app.route("/")
def home():
    return render_template("menu.html")

# This is the magic line — tells Vercel to use Flask as WSGI handler
# Do NOT wrap it in another function
# Just expose the app directly
app = app  # Vercel needs a top-level `app` or `handler`
