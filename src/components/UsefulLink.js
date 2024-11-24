import React from "react";
import "../styles/UsefulLink.css";
import halla_site from "../assets/Halla_site.png";
import ipp_logo from "../assets/IPP_logo.png";
import ac_info_serv from "../assets/ac-info-serv.png";
import stud_life from "../assets/stud_life.png";

function UsefulLink() {
    return (
        <div>
            <ul className="out_link">
            <a href="http://www.halla.ac.kr/mbs/kr/intro/intro.html">
                <li><img src={halla_site} alt="Halla-Site"/></li>
            </a>
            <a href="https://job.halla.ac.kr/">
                <li><img src={ipp_logo} alt="IPP-Site"/></li>
            </a>
            <a href="http://lib.halla.ac.kr/">
                <li><img src={ac_info_serv} alt="Academic-Information-Site"/></li>
            </a>
            <a href="http://dorm.halla.ac.kr/">
                <li><img src={stud_life} alt="Student_lite_Site"/></li>
            </a>
            </ul>
        </div>
    );
};

export default UsefulLink;