export default class MoviesRoute {
    static configRoutes(router) {
        router.route('/').get((req, res) => res.send('<h1>Movies Route</h1>'));
        return router;
    }
}
