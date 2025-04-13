from flask import Flask, render_template
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.wrappers import Response

app = Flask(__name__, static_folder="../static", template_folder="../templates")

@app.route("/")
def home():
    return render_template("menu.html")

# Required for Vercel
def handler(environ, start_response):
    return DispatcherMiddleware(Response("Not Found", status=404), {
        "/": app
    })(environ, start_response)
