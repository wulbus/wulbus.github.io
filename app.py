from flask import Flask, render_template
from cs50 import SQL

app = Flask(__name__, static_url_path='/static', static_folder='static')       #__name__ is a special var in python that refers to current filename

db = SQL("sqlite:///static/colors.db")

@app.route("/")
def index():
    return render_template("index.html")    #r_t renders template specified
