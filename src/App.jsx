import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Common/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import Footer from "./components/Common/Footer/Footer";
import Banner from "./components/Pages/Banner/Banner";
import Milestonesection from "./components/Pages/Milestonesection/Milestonesection";
import Whychooseus from "./components/Pages/Whychooseus/Whychooseus";
import Aboutus from "./components/Pages/AboutUs/AboutUs";
import Weareproudtop from "./components/Pages/Weareproudtop/Weareproudtop";
import Blogandupdatestop from "./components/Pages/Blogandupdatestop/Blogandupdatestop";
import Eventsandupdatestop from "./components/Pages/Eventsandupdatestop/Eventsandupdatestop";
import TopHeroSection from "./components/Pages/PageLayout/TopHeroSection/TopHeroSection";
import WeAreProud from "./components/Pages/PageLayout/WeAreProud";
import StudentTestimonial from "./components/Pages/StudentTestimonial/StudentTestimonial";
import Ourpartners from "./components/Pages/Ourpartners/Ourpartners";
import Testinomials from "./components/Pages/Testinomials/Testinomials";
import Herotestinomialssection from "./components/Pages/Herotestinomialssection/Herotestinomialssection";
import TakeActionNow from "./components/Pages/TakeActionNow/TakeActionNow";

function App() {
  ``;
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
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/banner" element={<Banner />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/weareproudtop" element={<Weareproudtop />} />
                <Route
                  path="/milestonesection"
                  element={<Milestonesection />}
                />
                <Route path="/whychooseus" element={<Whychooseus />} />
                <Route path="/blogandupdates" element={<Blogandupdatestop />} />
                <Route
                  path="/eventsandupdatestop"
                  element={<Eventsandupdatestop />}
                />
                <Route path="/topherosection" element={<TopHeroSection />} />
                <Route path="/takeactionnow" element={<TakeActionNow />} />
                <Route path="/weareproud" element={<WeAreProud />} />
                <Route
                  path="/studenttestimonial"
                  element={<StudentTestimonial />}
                />
                <Route path="/ourpartners" element={<Ourpartners />} />
                <Route path="/testimonials" element={<Testinomials />} />
                <Route
                  path="/herotestinomialssection"
                  element={<Herotestinomialssection />}
                />
                {/* <Route path="/takeactionnow" element={<TakeActionNow />} /> */}
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
