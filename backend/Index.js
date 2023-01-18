import express from 'express';
import cors from 'cors';
import MoviesRoute from './api/MoviesRoute.js';
//import UsersRoute from './api/UsersRoute.js'; // seamoss
import dotenv from 'dotenv';
import mongodb from 'mongodb';

class Index {
    static app = express();

    static router = express.Router();

    static main() {
        dotenv.config();
        Index.setUpServer();
        Index.setUpDatabase();
    }

    static setUpServer() {
        Index.app.use(cors());
        Index.app.use(express.json());
        Index.app.use('/api/v0/tgates', MoviesRoute.configRoutes(Index.router));  // Movies === gate objects
        // seamoss edit:
       // Index.app.use('/api/v0/users', UsersRoute.configRoutes(Index.router));  // error: route not producing the HTML in UsersRoute.js
        Index.app.use('*', (req, res) => {
            res.status(404).json({ error: 'not found' });
        });
    }

    static async setUpDatabase() {
        const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        const port = process.env.PORT || 8000;
        try {
            await client.connect();
            Index.app.listen(port, () => {
                console.log(`server is running on port ${port}`);
            });
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
}

Index.main();

// Public Gate Browsing
/* Potential primary taxonomy set is gate objects, to be followed along the guide as synonymous with movie data.
Filter aspects:
- executable (calling from web app domain or its configured domain, active, and matching proven ownership)
- created (mapped to the account of the current user as the creator of the gate)
- by user profile attributes, as AND logic (Twitter handle)
-- a public user profile can load the gates created by him
-- ideally filtering is performed through URL parameters so that direct URLs can be shared
*/