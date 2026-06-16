import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from './Home';
import { ContactMe } from './ContactMe';
import { Calculation } from './Calculation';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/contact-me">
            Contact Me
          </Link>
        </div>
      </nav>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        ></Route>
        <Route
          element={<ContactMe />}
          path="/contact-me"
        ></Route>

        <Route
          element={<Calculation />}
          path="/calculation"
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
