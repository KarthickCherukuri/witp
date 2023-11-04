import "./index.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Summary = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { moduleNo, Title } = props;
  const Arrow = expanded ? IoMdArrowDropright : IoMdArrowDropdown;
  return (
    <li
      onClick={() => {
        setExpanded((prev) => !prev);
      }}
      className="shadow-lg text-white"
      style={{
        overflow: "hidden",
        transition: "height 0.3s ease",
        marginBottom: "20px",
        borderRadius: "10px",
        padding: "10px",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          padding: "10px",
          justifyContent: "space-between",
          cursor: "pointer",
        }}>
        <div className="d-flex flex-row" style={{ alignItems: "center" }}>
          <p className="mr-4">Module {moduleNo} | </p>
          <h2>Title</h2>
        </div>
        <Arrow
          style={{ cursor: "pointer", transition: "2s" }}
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        />
      </div>
      <div
        style={{
          height: expanded ? "auto" : 0,
          transition: "height 0.3s ease",
          overflow: "hidden",
        }}>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>4</li>
        </ul>
      </div>
    </li>
  );
};
const CourseInfo = () => {
  return (
    <div
      className="bg-primary"
      style={{ minHeight: "100vh", maxHeight: "auto" }}>
      <h1 className="text-center">Title</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="buttons">Register</button>
        <button className="buttons">Download</button>
      </div>
      <ul>
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
      </ul>
    </div>
  );
};

export default CourseInfo;
