# mevn-stack-book--movie-reviews
Learning MEVN stack on paperback to create a movie reviews app with user logins

*** References ***
1. Paperback, Beginning MEVN Stack
2. MongoDB Atlas: https://cloud.mongodb.com/v2/639916d66fafc15faa39dbda#clusters
3. Mastered bidirectional Git CLI activity.

*** Excluded Files ***
.env

*** .env Environment Variables ***
You'll need to make your own .env file in the /backend folder and provide these attributes:

* MOVIEREVIEWS_DB_URI=mongodb+srv://<"USERNAME">:<"PASSWORD">@book-mevn-stack.sd7ijzg.mongodb.net/<"DATA TABLE NAME">?retryWrites=true&w=majority
Usse your own MongoDB Atlas account credentials and data tables. I used sample data.
* MOVIEREVIEWS_NS=sample_mflix
The data table for this code example.
* PORT=5000
Port in use


*** API Routes
* /api/v0/tgates (movies, in this sample)
* /api/v0/users

*** Versioning Notes
* Uses nodemon 2.0.20, do NOT add to package.json
* Uses node 16.18.1, do NOT add to package.json