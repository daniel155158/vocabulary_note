#  Vocabulary Note
It was built by Express.js and MySQL. 

You can easily record vocabularies and listen their pronunciations. It's helpful for learning foreing languages.

[![Demo video](https://i.imgur.com/sCW7iKZ.png)](https://youtu.be/Ac-p4fqLuwk)

## Features
* Register and login with email.
* Record, edit, and delete vocabularies.
* Listen pronunciations of vocabularies.
* Search by vocabulary or it's meaning.

## Installation
1. Enter `https://github.com/daniel155158/vocabulary_note.git` in the terminal to download the project.
2. Enter `npm install` in the terminal to install packages.
3. Create the database `vocabulary_note`.
4. Enter `npx sequelize db:migrate` and `npx sequelize db:seed:all` in the terminal to run migration and seed files.
5. Follow `.env.example` to create `.env` file to set up environmental variables.
6. Enter `npm run dev` in the terminal to run app.js with Nodemon to start local server.
7. Enter http://localhost:3000 in the browser to use the application.
