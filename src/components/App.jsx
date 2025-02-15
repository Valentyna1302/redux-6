import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header/Header";
// import Home from "../pages/Home";
// import About from "../pages/About";
import NotFound from "../pages/NotFound";
// import Aim from "./NestedRoutes/Aim";
import Team from "./NestedRoutes/Team";
import Company from "./NestedRoutes/Company";
// import Users from "../pages/Users";
// import UserDetails from "../pages/UserDetails";
import UserPosts from "./NestedRoutes/UserPosts";

const Aim = lazy(() => import("./NestedRoutes/Aim"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const UserDetails = lazy(() => import("../pages/UserDetails"));
const Users = lazy(() => import("../pages/Users"));

const App = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* localhost/about/aim */}
          {/* localhost/about/company */}
          {/* localhost/about/team */}
          <Route path="/about" element={<About />}>
            <Route path="aim" element={<Aim />} />
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>

          <Route path="/users" element={<Users />} />

          <Route path="/users/:userId" element={<UserDetails />}>
            <Route path="info" element={<h2>Info about user</h2>} />
            <Route path="posts" element={<UserPosts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};
export default App;
