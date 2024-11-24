import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewsSection from "./components/NewsSection";
import NoticeBoard from "./components/NoticeBoard";
import Schedule from "./components/Schedule";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <NewsSection />
        <NoticeBoard />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}

export default App;