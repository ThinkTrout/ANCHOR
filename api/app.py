from flask import Flask, render_template
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.wrappers import Response

# Set static and templates folders relative to this file
app = Flask(__name__, static_folder="../static", template_folder="../templates")

@app.route("/")
def home():
    return render_template("menu.html")

# Expose this as the Vercel entry point
# This wraps the Flask app with DispatcherMiddleware for routing
def handler(environ, start_response):
    return app.wsgi_app(environ, start_response)
