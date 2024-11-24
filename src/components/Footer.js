import React from "react";
import "../styles/Footer.css";
import footerlogo from '../assets/footer_logo.png'

function Footer() {
    return (
        <div className="footer">
            <img src={footerlogo} alt="Footer Logo" className="footer-logo" />
            <div className="footer-text">
                <span className="info-policy">
                    <span className="address">강원특별자치도 원주시 한라대길 28 한라대학교 IT소프트웨어학과 [우] 26404</span><br />
                    <a href="https://www.halla.ac.kr/mbs/kr/subview.jsp?id=kr_090200000000">
                        <span className="personal-info">개인정보처리방침</span>
                    </a>
                    <span className="footer-text-divider-1"></span>
                    <a href="http://www.halla.ac.kr/mbs/kr/subview.jsp?id=kr_090202000000">
                        <span className="vidio-manage">영상정보처리기기 운영 · 관리 방침</span>
                    </a>
                    <span className="footer-text-divider-2"></span>
                    <a href="https://www.halla.ac.kr/mbs/kr/subview.jsp?id=kr_090300000000">
                        <span className="email-refuse">이메일무단수집거부</span>
                    </a>
                </span>
                <span className="CopyRight">COPYRIGHT (c) Halla University. All rights Reserved.</span>
                <span className="contact-info">
                    <span className="tel-number">TEL : (033) 760-1282</span><br />
                    <span className="fax-number">FAX : (033) 760-1281 </span>
                </span>
            </div>
        </div>
    );
}

export default Footer;
