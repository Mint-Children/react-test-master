import React, { useState } from "react";
import "../styles/Header.css";
import instarLogo from '../assets/instar.png';
import outsideLink from '../assets/OutsideLink.png';
import halla_logo from '../assets/Halla_logo.png'
import it_logo from '../assets/IT_logo.png';
import reading_glasses from '../assets/Reading_Glasses.png';
import search_glass from '../assets/search_glass.png';

<div>
  <img src={instarLogo} alt="Instagram" />
  <img src={outsideLink} alt="OutSideLing" />
  <img src={halla_logo} alt="Halla_Logo"/>
  <img src={it_logo} alt="IT_Logo"/>
  <img src={reading_glasses} alt="Reading_Glasses"/>
  <img src={search_glass} alt="Search_glass"/>
</div>
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo-container">
      <a href="https://www.halla.ac.kr/mbs/kr/index.jsp" target="_blank" rel="noopener noreferrer">
        <img src={halla_logo} alt="한라대학교 로고" className="logo" />
      </a>
      <a href="https://itsoft.halla.ac.kr/main/main.php" target="_blank" rel="noopener noreferrer">
        <img src={it_logo} alt="IT소프트웨어학과 로고" className="department" />
      </a>

      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li
            onMouseEnter={() => toggleNav("학과소개")}
            onMouseLeave={() => toggleNav(null)}
          >
            학과소개
          </li>
          <li
            onMouseEnter={() => toggleNav("교수소개")}
            onMouseLeave={() => toggleNav(null)}
          >
            교수소개
          </li>
          <li
            onMouseEnter={() => toggleNav("학사안내")}
            onMouseLeave={() => toggleNav(null)}
          >
            학사안내
          </li>
          <li
            onMouseEnter={() => toggleNav("공지사항")}
            onMouseLeave={() => toggleNav(null)}
          >
            공지사항
          </li>
          <li
            onMouseEnter={() => toggleNav("커뮤니티")}
            onMouseLeave={() => toggleNav(null)}
          >
            커뮤니티
          </li>
        </ul>
        <div className="reading-glass">
          <img src={reading_glasses} onClick={toggleSearch} />
            {isSearchOpen && (
              <div className="search-overlay">
                <input
                  type="text"
                  className="search-input"
                  placeholder="검색어를 입력하세요."
                />
                <span className="search-divider"></span>
                <img src={search_glass} className="search-glass"/>
                <p className="popular-search">
                  <span className="popular-text">많이 찾는 검색어</span>
                  <ul class="popular-list">
                    <li><div class="number">1</div>김선옥 강의평가</li>
                    <li><div class="number">2</div>HAI 학과 동아리</li>
                    <li><div class="number">3</div>고재욱</li>
                    <li><div class="number">4</div>김호연</li>
                    <li><div class="number">5</div>일해라</li>
                </ul>
                </p>
              </div>
             )}
        </div>
        <div className="hamburger-button" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isNavOpen && (
        <div className="expanded-menu">
          <span className="NavDivider_1"></span>
          <div className="Introduction-column">
            <ul className>
              <li className="dropdown-item">IT 소프트웨어학과 안내</li>
              <li className="dropdown-item">오시는 길</li>
            </ul>
          </div>
          <span className="NavDivider_2"></span>
          <div className="Professor-column">
            <ul>
              <li className="dropdown-item">교수진 소개</li>
            </ul>
          </div>
          <span className="NavDivider_3"></span>
          <div className="Academicguide">
            <ul>
              <li className="dropdown-item">교육목표</li>
              <li className="dropdown-item">교과안내</li>
              <li className="dropdown-item">졸업 후 진로</li>
              <li className="dropdown-item">학사일정</li>
              <li className="dropdown-item">E행정실</li>
            </ul>
          </div>
          <span className="NavDivider_4"></span>
          <div className="Notice-column">
            <ul>
              <li className="dropdown-item">학과공지</li>
              <li className="dropdown-item">동문소식</li>
            </ul>
          </div>
          <span className="NavDivider_5"></span>
          <div className="Community-column">
            <ul>
              <li className="dropdown-item">학과소식</li>
              <li className="dropdown-item">학과 QNA</li>
              <li className="dropdown-item">자유게시판</li>
              <li>
                <span>
                  <a href="https://www.instagram.com/halla_it_software/" target="_blank" rel="noreferrer">
                    <span className="sns_text">학과 SNS</span>
                    <img className="outsideLink" src={outsideLink} alt="외부 링크" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <span className="NavDivider_6"></span>
        </div>
      )}
        <div className="nav-actions">
          <div className="social-icon">
            <a
              className="sns_text"
              href="https://www.instagram.com/halla_it_software/"
              target="_blank"
              rel="noreferrer"
            >
              학과 SNS
            </a>
            <a
              href="https://www.instagram.com/halla_it_software/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instarLogo} alt="Instagram" />
            </a>
          </div>
          <span className="translation">Eng/Kor</span>
          <span className="Login">Login</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;