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

@app.route('/register', methods = ['GET', 'POST'])
def register():
    register = None
    if request.method == "POST":
        userid = request.form['login']
        name = request.form['name']
        password = request.form['password']
        country = request.form['country']
        phone = request.form['phone']
        location = "location"
        register = register_user(userid, name, password, country, phone, location)
    return render_template('register.html', register = register)


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
    c.close()
    conn.close()
    return login

def register_user(userid, name, password, country, phone, location):
    register = True
    conn = sqlite3.connect('stopthebleed.db')
    c = conn.cursor()
    try:
        c.execute("INSERT INTO users (userid, name, password, country, phone, location) VALUES (?, ?, ?, ?, ?, ?)",
                  (userid, name, password, country, phone, location))
        conn.commit()
        print("record inswertion succesful")
    except:
        register = False
    finally:
        c.close()
        conn.close()
        return register

if __name__== "__main__":
    app.run()
    # to enable debug
    # app.run(debug=True)
