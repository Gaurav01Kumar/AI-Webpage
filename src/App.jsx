

import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="relative z-10 flex 
      justify-center items-center
       flex-col max-w-7xl mx-auto
        sm:px-16 px-6">
        <Navbar/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default App;
