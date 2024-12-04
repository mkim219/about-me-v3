import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";


const Main = props => {
    const {
        isMobile,
        scrolled,
        language,
    } = props;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 top-banner">
                    <div
                        className="position-absolute top-50 start-50 translate-middle-y p-2"
                    >
                        <h1 className={`display-3 title-h1 ${isMobile ? 'fade-in' : 'fly-in-left'}`}>Minsu
                            Kim</h1>
                        <h3 className={`title-h3 ${isMobile ? 'fade-in' : 'fly-in-right'}`}>An adventurous
                            programmer involved in the startup scene</h3>
                        <ul className="nav">
                            <li className="nav-item fade-in">
                                <a className="nav-link" href={language === 'en' ? "./assets/static/Minsu-kim-resume.pdf" : "./assets/static/Minsu-kim-resume-ko.pdf"} target="_blank">
                                    <i className="fa-solid fa-file-pdf"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tel:82-10-9731-9106">
                                    <i className="fa fa-phone"></i>
                                </a>
                            </li>
                            <li className="nav-item fade-in">
                                <a className="nav-link" href="https://www.linkedin.com/in/minsu-kim-37a553156"
                                   target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item fade-in">
                                <a className="nav-link" href="https://github.com/mkim219" target="_blank">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li className="nav-item fade-in">
                                <a className="nav-link" href="https://youtu.be/9NA4DgGGYWg" target="_blank">
                                    <i className="fa-brands fa-youtube"><
                                    /i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={classNames("position-absolute bottom-0 start-50 translate-middle-x mb-4", { "d-none": scrolled })}>
                <a href="#about-me"><i className={classNames("fa-solid fa-arrow-down fa-2x fa-beat")}></i></a>
            </div>
        </div>
    );
};

Main.propTypes = {};

export default Main;