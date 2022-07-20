import Login from './Component/Authentication/Login/Login';
const Router = () => {
    let initialRoute = '/login';
    const routes = [
        {
            path: '/login',
            element: Login,
        },
        {
            path: '*',
            redirectTo: initialRoute,
        },
    ];
    return routes;
}

export default Router;
