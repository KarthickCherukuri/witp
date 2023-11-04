import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseInfo from "./components/CourseInfo";
export default function App() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CourseInfo} path="/:courseId" exact />
    </Switch>
  );
}
