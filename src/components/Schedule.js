import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "../styles/Schedule.css";
import LeftButton from "../assets/leftbutton.png";
import RightButton from "../assets/rightbutton.png";
import MonthDisplay from './MonthDisplay'; 
import LeftVector from '../assets/LeftVector.png';
import RightVector from '../assets/RightVector.png';

const scheduleData = [
  { date: "2024-11-12", title: "IT소프트웨어 학과 겨울학기 수강신청" },
  { date: "2024-11-15", title: "특강" },
  { date: "2024-11-20", title: "중간고사 대비 세미나" },
  { date: "2024-11-25", title: "종강 행사" },
];
const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  //const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const currentMonth = currentDate.getMonth() + 1; // 0부터 시작하므로 +1을 해줌

  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1; // 다음 달 계산

  const handlePrev = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1); // 하루 전으로 이동
      return newDate;
    });
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1); // 하루 후로 이동
      return newDate;
    });
  };

  const getDayLabel = (dayIndex) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[dayIndex];
  };

  const filteredData = scheduleData.filter((item) => {
    const eventDate = new Date(item.date);
    return eventDate >= currentDate; // 현재 날짜와 같거나 이후의 일정만 표시
  });

  const handleDateClick = (date) => {
    setCurrentDate(date);
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  };

  const getDayClass = (date) => {
    if (isToday(date)) return "active-date"; // 오늘 날짜 강조
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return "sunday";
    if (dayOfWeek === 6) return "saturday";
    return "";
  };

  const dates = generateDates(); // 날짜 생성

  return (
    <div className="schedule">{/* 상단 헤더 */}
    <div className="AcademicSchedule">
      <h2>학사일정
        <div className="nextMonth">
        <MonthDisplay month={nextMonth} className="nextMonth"/> {/* 다음 달 표시 */}
        </div>
      </h2>
      </div>
      <div className="schedule-header">{/* 날짜 나오는 부분 */}
        <div className="date-bar">
        <button onClick={handlePrev} className="left-nav-button">
          <img src={LeftButton} alt="Previous" />
        </button>
          {dates.map((date, index) => (
            <div
            key={index}
            className={`date-item ${getDayClass(date)}`}
            onClick={() => handleDateClick(date)} // 클릭 시 handleDateClick 호출
          >
            <span className="day">{date.getDate()}</span>
                  <span className="label">{getDayLabel(date.getDay())}</span> {/* 요일 표시 */}

          </div>
          ))}
          <button onClick={handleNext} className="right-nav-button">
          <img src={RightButton} alt="Next" />
        </button>
      </div>
        </div>
      <div className="Bottom-Container">
      <div className="Middle">
        <div className="currentMonth-container">
        <div className="currentMonth">
        <MonthDisplay month={currentMonth} className="currentMonth"/> {/* 이번 달 표시 */}
        </div>
        <button
          /*onClick={() => navigate("/full-schedule")}*/
          className="toggle-button"
        >
          전체 보기
        </button>
        <div className="pagination-container">
      <div className="page-controls">
      <span class="page-indicator">1 / 2</span>
        <button className="left-pagination-button">
           <img src={LeftVector} alt="이전" />
        </button>
          <button className="right-pagination-button">
          <img src={RightVector} alt="다음" />
           </button>
         </div>
      </div>
        </div>
      <div className="schedule-cards">{/* 일정 카드 */}
      {[
        ...filteredData,
        ...Array(5 - filteredData.length).fill({ title: "현재 예정된 일정이 없습니다.", date: "" }),
      ]
        .slice(0, 5) // 최대 5개까지만 출력
        .map((item, index) => (
      <div
        key={index}
        className={`schedule-card ${item.date === "" ? "no-events-card" : ""}`}
      >
        <h3>{item.title}</h3>
        {item.date && <p>{item.date}</p>} {/* 날짜가 있을 경우만 표시 */}
      </div>
    ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Schedule;