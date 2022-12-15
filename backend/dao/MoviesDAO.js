export default class MoviesDAO {
    static movies;

    static async injectDB(conn) {
        if (MoviesDAO.movies) {
            return;
        }
        try {
            MoviesDAO.movies = await conn.db(process.env.MOVIEREVIEWS.NS).collection('movies');
        } catch (e) {
            console.error(`unable to connect in MoviesDAO: ${e}`);
        }
    }
}