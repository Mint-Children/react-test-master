import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewsSection from "./components/NewsSection";
import NoticeBoard from "./components/NoticeBoard";
import Schedule from "./components/Schedule";
import "./App.css";
import Footer from "./components/Footer";
import UsefulLink from "./components/UsefulLink";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <NewsSection />
        <NoticeBoard />
        <Schedule />
        <UsefulLink />
      </main>
      <Footer />
    </div>
  );
}

export default App;