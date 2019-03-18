Hi!

ive basically did all this work in a week from sun mar 10 at 9am to around sun mar 17th 730pm.

ive really newb and this iss the first real touch of reactjs ive done. very little nodejs work ever.

i wish i knew if there was a better way to pack all this up for you, should i have built it somehow?

i want to take a look at the grpc mail seems like it should do most of the work for that.

this stack consists of
backend on port 3001 main playground directory:

express
sequelize
pg
google geocode
openweathermap

front end on port 3000 playground/client:

react
google- react map
x3dom


i looked around for a good crudl scaffold but i couldnt find anything easier than just doing it myself


i didnt finish the forecast or the delete and update buttons

the x3dom frame i was going to make a thermometer with changing color based on how hot it was.


install

create postgres database testdb and user testname with password 1234.
make sure they are granted acces on testdb

you will need to run npm install in both playground and playground/client

in playground you can set up table u need with
sequelize db:migrate

then run npm start in both directories and you should be all good


