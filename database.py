import sqlite3

conn = sqlite3.connect('stopthebleed.db')
c = conn.cursor()

# Create table in the database
def users():
    c.execute('CREATE TABLE IF NOT EXISTS users(userid TEXT, name TEXT, password TEXT, country TEXT, phone INTEGER, location TEXT, certified TEXT, PRIMARY KEY (userid))')

# creates a sample records this is just for testing purpose we will remove it as we create a signup page
# and create users from it
def insert_record():
    c.execute("insert INTO users VALUES ('admin','admin','admin', 'USA', 12345678, '123abcd123', 'False')")
    c.execute("insert INTO users VALUES ('admin1','admin1','admin1', 'INDIA', 90215678, '456abcd456', 'True')")
    conn.commit()

users()
insert_record()

c.close()
conn.close()
