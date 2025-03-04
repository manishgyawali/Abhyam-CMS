import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Common/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import Footer from './components/Common/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className="flex w-full h-screen">
          {/* Sidebar */}
          <aside className="lg:w-[280px] fixed   h-full shadow-sm scroll  overflow-y-scroll">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:flex-1 lg:ml-[280px] flex relative flex-col w-full h-full">
            {/* Navigation */}
            <Navigation className="relative" />

            {/* Main Content */}
            <div className="lg:flex-1 absolute  w-full  top-36 px-8 scroll overflow-scroll">
              <Routes>
               
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
