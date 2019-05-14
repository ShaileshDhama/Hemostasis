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
            return redirect(url_for('train'))
        else:
            error = 'Invalid credentials'
    return render_template('login.html', error=error)


@app.route('/train')
def train():
    return render_template('train.html')

@app.route('/overview')
def overview():
    return render_template('overview.html')

@app.route('/Applications')
def Applications():
    return render_template('Applications.html')

@app.route('/methods')
def methods():
    return render_template('methods.html')

@app.route('/nearby')
def nearby():
    return render_template('nearby.html')

@app.route('/discussions')
def discussions():
    return render_template('discussions.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

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
        location = request.form['location']
        certified = "False"
        register = register_user(userid, name, password, country, phone, location, certified)
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

def register_user(userid, name, password, country, phone, location, certified):
    register = True
    conn = sqlite3.connect('stopthebleed.db')
    c = conn.cursor()
    try:
        c.execute("INSERT INTO users (userid, name, password, country, phone, location, certified) VALUES (?, ?, ?, ?, ?, ?, ?)",
                  (userid, name, password, country, phone, location, certified))
        conn.commit()
        print("record insertion succesful")
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
