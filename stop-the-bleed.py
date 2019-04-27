from flask import Flask, render_template, redirect, url_for, request, flash
import sqlite3
app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def user_login():
    error = None
    if request.method == 'POST':
        login = request.form['login']
        password = request.form['password']
        allow_login = validate_login(login, password)
        if allow_login:
            return redirect(url_for('welcome'))
        else:
            error = 'Invalid credentials'
    return render_template('login.html', error=error)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')


#validates if the login and password entered is valid
def validate_login(id, pwd):
    conn = sqlite3.connect('stopthebleed.db')
    c = conn.cursor()
    c.execute("select * from users")
    rows = c.fetchall()
    login = False
    for row in rows:
        userid = row[0]
        password = row[2]
        if(id == userid and pwd == password):
            login = True
    return login

if __name__== "__main__":
    app.run()
    # to enable debug
    # app.run(debug=True)