import Top from "./top/top.jsx";
import WhoWeAre from "./main/whoWeAre.jsx";
import Logo from "./main/logo.jsx";

import "./App.css";

const App = () => {
  return (
    <>
      <Top></Top>
      <div className="mainContent">
        <Logo></Logo>
        <WhoWeAre></WhoWeAre>
      </div>
    </>
  );
};

export default App;
