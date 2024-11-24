import React from "react";
import "./NewsSection.css";
import mandoImage from "../assets/mando.png";

const newsData = [
  {
    id: 1,
    title: "만도 SW전공 설명회",
    description: "어쩌구 저쩌구한 내용들 만도 SW전공 설명회",
    date: "2024-11-01",
    image: mandoImage, // 이미지 파일 변수로 변경
  },
  {
    id: 2,
    title: "만도 SW전공 설명회",
    description: "어쩌구 저쩌구한 내용들 만도 SW전공 설명회",
    date: "2024-11-01",
    image: mandoImage,
  },
  {
    id: 3,
    title: "만도 SW전공 설명회",
    description: "어쩌구 저쩌구한 내용들 만도 SW전공 설명회",
    date: "2024-11-01",
    image: mandoImage,
  },
  {
    id: 4,
    title: "만도 SW전공 설명회",
    description: "어쩌구 저쩌구한 내용들 만도 SW전공 설명회",
    date: "2024-11-01",
    image: mandoImage,
  },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2>학과 소식</h2>
      <div className="news-cards">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img
              src={news.image} // image 변수 연결
              alt={news.title}
              className="news-image"
            />
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <span className="news-date">{news.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
