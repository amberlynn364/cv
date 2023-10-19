import { createBrowserRouter } from 'react-router-dom';
import RouterPaths from './router-types';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import AboutMe from '../pages/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: RouterPaths.Home,
    element: <Home />,
  },
  {
    path: RouterPaths.NotFound,
    element: <NotFound />,
  },
  {
    path: RouterPaths.AboutMe,
    element: <AboutMe />,
  },
]);

export default router;
