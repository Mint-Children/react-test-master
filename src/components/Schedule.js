import React, { useState } from "react";
import "../styles/Schedule.css";

const scheduleData = [
  { date: "2024-11-12", title: "IT소프트웨어 학과 겨울학기 수강신청" },
  { date: "2024-11-15", title: "특강" },
  { date: "2024-11-20", title: "중간고사 대비 세미나" },
  { date: "2024-11-25", title: "종강 행사" },
];

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 설정

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i <= 14; i++) { // 오늘부터 14일치 생성
      const newDate = new Date();
      newDate.setDate(today.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  };

  const handleDateClick = (date) => {
    setCurrentDate(date); // 클릭된 날짜를 선택
  };

  const formatDate = (date) => `${date.getDate()}`;

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const dates = generateDates(); // 날짜 생성

  // 선택된 날짜 이후의 일정만 필터링
  const filteredData = scheduleData.filter((item) => {
    const eventDate = new Date(item.date);
    return eventDate >= currentDate; // 현재 날짜와 같거나 이후의 일정만 표시
  });

  return (
    <div className="schedule">
      <div className="schedule-header">
        <h2>학사일정</h2>
        <div className="date-bar">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`date-item ${
                isToday(date) ? "active-date" : ""
              }`}
              onClick={() => handleDateClick(date)}
            >
              <span className="day">{formatDate(date)}</span>
              <span className="label">{isToday(date) ? "오늘" : ""}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="schedule-cards">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="schedule-card">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          ))
        ) : (
          <p className="no-events">현재 예정된 일정이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;