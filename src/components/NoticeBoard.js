import React, { useState } from "react";
import "../styles/NoticeBoard.css";

const tabData = {
  학사공지: [
    {
      id: 1,
      title: "공지사항의 제목을 깔쌈하고 쌈@빵하게 지어주세요!!!",
      content: "공지사항의 내용을 듬뿍 와다다다 매우 많이 백세게 실컷 마구마구 적어주세요!!!",
      date: "2024-11-11",
      tag: "NEW",
    },
    {
      id: 2,
      title: "공지사항의 제목을 깔쌈하고 쌈@빵하게 지어주세요!!!",
      content: "공지사항의 내용을 듬뿍 와다다다 매우 많이 백세게 실컷 마구마구 적어주세요!!!",
      date: "2024-11-11",
      tag: "NEW",
    },
    {
        id: 3,
        title: "공지사항의 제목을 깔쌈하고 쌈@빵하게 지어주세요!!!",
        content: "공지사항의 내용을 듬뿍 와다다다 매우 많이 백세게 실컷 마구마구 적어주세요!!!",
        date: "2024-11-11",
        tag: "NEW",
      },
      {
        id: 4,
        title: "공지사항의 제목을 깔쌈하고 쌈@빵하게 지어주세요!!!",
        content: "공지사항의 내용을 듬뿍 와다다다 매우 많이 백세게 실컷 마구마구 적어주세요!!!",
        date: "2024-11-11",
        tag: "NEW",
      },
  ],
  "학과 Q&A": [
    {
      id: 1,
      title: "Q&A 제목 예시",
      content: "Q&A 내용은 여기에 작성됩니다.",
      date: "2024-11-11",
      tag: "",
    },
    {
        id: 2,
        title: "Q&A 제목 예시",
        content: "Q&A 내용은 여기에 작성됩니다.",
        date: "2024-11-11",
        tag: "",
      },
      {
        id: 3,
        title: "Q&A 제목 예시",
        content: "Q&A 내용은 여기에 작성됩니다.",
        date: "2024-11-11",
        tag: "",
      },
      {
        id: 4,
        title: "Q&A 제목 예시",
        content: "Q&A 내용은 여기에 작성됩니다.",
        date: "2024-11-11",
        tag: "",
      },
  ],
  자유게시판: [
    {
      id: 1,
      title: "자유게시판 제목 예시",
      content: "자유게시판 내용은 여기에 작성됩니다.",
      date: "2024-11-11",
      tag: "",
    },
    {
        id: 2,
        title: "자유게시판 제목 예시",
        content: "자유게시판 내용은 여기에 작성됩니다.",
        date: "2024-11-11",
        tag: "",
      },
      {
        id: 3,
        title: "자유게시판 제목 예시",
        content: "자유게시판 내용은 여기에 작성됩니다.",
        date: "2024-11-11",
        tag: "",
      },
      {
        id: 4,
        title: "자유게시판 제목 예시",
        content: "자유게시판 내용은 여기에 작성됩니다.",
        date: "2024-11-11",
        tag: "",
      },
  ],
};

const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState("학사공지");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="notice-board">
      <h2>학사공지</h2>
      <div className="notice-tabs">
        {Object.keys(tabData).map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="notice-cards">
        {tabData[activeTab].map((notice) => (
          <div key={notice.id} className="notice-card">
            {notice.tag && <div className="notice-tag">{notice.tag}</div>}
            <h3>{notice.title}</h3>
            <p>{notice.content}</p>
            <span className="notice-date">{notice.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;