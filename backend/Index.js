import express from 'express';
import cors from 'cors';
import MoviesRoute from './api/MoviesRoute.js';

class Index {
    static app = express();

    static router = express.Router();

    static main() {
        Index.setUpServer();
    }

    static setUpServer() {
        Index.app.use(cors());
        Index.app.use(express.json());
        Index.app.use('/api/v0/tgates', MoviesRoute.configRoutes(Index.router));  // Movies === gate objects
        Index.app.use('*', (req, res) => {
            res.status(404).json({ error: 'not found' });
        });
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