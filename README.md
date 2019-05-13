# stop-the-bleeding

add things which you think we need to add to our application. once all 4 us
agree we will build it

the first thing is sign up page - It will have basic things like first name, last name,
email, phone, address, state, zip, country.. etc


# To setup db

run the ``python database.py``

It will create a ``users`` table with 7 fields username, name, password, country, phone, location, certified.

for testing purposes I have created another function which will insert 2 records in the table.
once you run it you will have ``stopthebleed.db`` file. To open it and see records use a DB browser for sqllite


# To run Flask application locally

* create a virtual environment with python 3.7.2
* activate the virtual environment
* do ``pip install -r requirements.txt``
* setup the db
* run ``python stop-the-bleed.py`` then go to ``localhost:5000``. you should see the website    
* currently there are 2 login ``admin`` and ``admin1``. The userid and password are same for both