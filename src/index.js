import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from "./reportWebVitals.js";
import Library from "./chapter_03/Library.jsx";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import Notification from "./chapter_06/Notification";
import NotificationList from "./chapter_06/NotificationList";
import Accomodate from "./chapter_07/Accomodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SignUp";
import Calculator from "./chapter_12/Calculator";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
//매초 새 엘리먼트 생성
ReactDOM.render(
    <React.StrictMode>
      <DarkOrLight/>
    </React.StrictMode>,
    document.getElementById(
        'root'
    ));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();