from flask import Flask, url_for, render_template

app = Flask(__name__, static_url_path='/static', static_folder='static')       #__name__ is a special var in python that refers to current filename

@app.route("/")
def index():
    return render_template("index.html")    #r_t renders template specified

@app.route("/shop")   
def shop():
    return render_template("shop.html")