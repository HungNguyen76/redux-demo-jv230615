import { Routes, Route } from "react-router-dom";
// import HomePage from './views/pages/HomePage';
// import Men from "./views/components/Men";
import Women from "./views/components/Women";
// import Login from "./views/components/Login";
import About from "./views/components/about/About";
import AboutRikkeiSoft from "./views/components/about/AboutRS";
import AboutRikkeiAcademy from "./views/components/about/AboutRA";
import Checkout from "./views/components/Checkout";
import Course from "./views/components/course/Course";
import CourseDetail from "./views/components/course/CourseDetail";
import CourseDetailByType from "./views/components/course/CourseDetailByType";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "./components/LazyLoad";

const men = import("./views/components/Men");
const login = import("./views/components/Login")
const LazyLogin = LazyLoad(login)
const LazyMen = LazyLoad(men)

export default function Router() {
  return (
    <Routes>
      <Route path="/about" element={<About />}>
        <Route path="rs" element={<AboutRikkeiSoft />} />
        <Route path="ra" element={<AboutRikkeiAcademy />} />
      </Route>
      <Route path="/men" element={<LazyMen />} />
      <Route path="/women" element={<Women />} />
      <Route path="/login" element={<LazyLogin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/course" element={<Course />} />
      <Route path="/course/:courseId" element={<CourseDetail />} />
      <Route
        path="/course/:courseType/:courseId"
        element={<CourseDetailByType />}
      />
    </Routes>
  );
}
