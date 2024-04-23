import HomePage from './router/home/homePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './router/listPage/listPage';
import Layout from './router/layout/layout';
import Signup from './router/Signup/Signup';
import LoginPage from './router/login/LoginPage';
import SinglePage from './router/SinglePage/SinglePage';
import Profile from './router/ProfilePage/Profile';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <HomePage />,
				},
				{
					path: '/list',
					element: <ListPage />,
				},
				{
					path: '/sign-up',
					element: <Signup />,
				},
				{
					path: '/sign-in',
					element: <LoginPage />,
				},
				{
					path: '/:id',
					element: <SinglePage />,
				},
				{
					path: '/profile',
					element: <Profile />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
