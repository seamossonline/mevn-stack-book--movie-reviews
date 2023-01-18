export default class UsersRoute {
    static configRoutes(router) {
        router.route('/users').get((req, res) => res.send('<h1>Users Route</h1>'));
        return router;
    }
}
