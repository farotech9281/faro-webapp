import { useState } from "react";
// import Nav from './navbar/nav.jsx';
import "./top.css";

const Top = () => {
  const [ListTop] = useState([
    "Who we are",
    "timeline",
    "our supporters",
    "videos",
    "contact",
  ]);

  return (
    <div className="content">
      <div className="navBar">
        <div className="unbounded title">
            <p>FaroTech</p>
        </div>
        <ul>
          {ListTop.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Top;
