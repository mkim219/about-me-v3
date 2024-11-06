import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom/client';
import classNames from "classnames";
import Modal from "react-modal";
import { mobileCheck } from "./mobileDetection";
import './i18n';
import { useTranslation } from "react-i18next";

import ContactEmail from "./ContactEmail.jsx";
import ProjectModalTab from "./ProjectModalTab.jsx";
import CleantopiaExcelConverter from "../assets/project/Cleantopia-excel-converter.jsx";
import EngineXCarRentalShop from "../assets/project/EngineX-car-rental-shop.jsx";

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [modalOAPIsOpen, setModalOAPIsOpen] = useState(false);
    const [modalCleantopiaIsOpen, setModalCleantopiaIsOpen] = useState(false);
    const [modalEngineXIsOpen, setModalEngineXIsOpen] = useState(false);
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(mobileCheck());
    const [isContactClick, setContactClick] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const {t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ko' : 'en';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const top = ref.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Adjust this value to trigger the animation at the desired scroll position
                if (top < windowHeight * 1.2) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function openModalOAP()    {
        setModalOAPIsOpen(true);
    }

    function openModalCleantopia() {
        setModalCleantopiaIsOpen(true);
    }
    function openModalEngineX() {
        setModalEngineXIsOpen(true);
    }

    function closeModal() {
        setModalOAPIsOpen(false);
        setModalCleantopiaIsOpen(false);
        setModalEngineXIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            zIndex: "1000",
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
    };

    const toggleSideNav = () => {
        setSideNavOpen(prevState => !prevState);
    }

    const toggleContactForm = () => {
        setContactClick(prevState => !prevState);
    }

    return (
        <div className="bg-dark text-light" id="home">
            {/*header*/}
            <div
                className={classNames("bg-dark border-bottom sticky-top",
                    { "d-block": scrolled },
                    { 'd-none': !scrolled }
                )}
                style={{ zIndex: 1 }}
            >
                <nav className="navbar navbar-dark container">
                    <a className="navbar-brand" href="#home">
                        <span className="h1 mx-4"><i className="fa-solid fa-m"/></span>
                    </a>
                    {/*temp button*/}
                    <button onClick={toggleLanguage} className="btn btn-outline-primary text-left">
                        {i18n.language === 'en' ? '한국어' : 'ENG'}
                    </button>
                    <button className="btn btn-lg text-white" onClick={toggleSideNav}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>
            </div>
            {/*side nav*/}
            <div
                className={classNames("position-fixed bg-dark top-50 end-0 translate-middle-y bg-light p-3 shadow h-100",
                    { "d-none": !isSideNavOpen },
                    { "w-25": !isMobile },
                    { "w-50": isMobile }
                )}
                style={{ zIndex: 999 }}
            >
                {/*close button for side nav*/}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="h2 mx-4">
                        <i className="fa-solid fa-m"></i>
                    </div>
                    <div className="ms-auto">
                        <button className="btn btn-link text-muted" onClick={toggleSideNav}>
                            <i className="fa-solid fa-xmark text-white"></i>
                        </button>
                    </div>
                </div>

                <hr className="text-white"/>
                <ul className="navbar-nav flex-column text-muted">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#home" onClick={toggleSideNav}>
                            <span className="h5"><i className="fa-solid fa-house mx-1"/>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#about-me" onClick={toggleSideNav}>
                                        <span className="h5"><i
                                            className="fa-solid fa-address-card mx-1"/>About me</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#projects" onClick={toggleSideNav}>
                                        <span className="h5"><i
                                            className="fa-solid fa-diagram-project mx-1"/>Projects</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#contact" onClick={toggleSideNav}>
                            <span className="h5"><i className="fa-solid fa-phone mx-1"/> Contact</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/*overlay*/}
            <div className={classNames("position-fixed bg-secondary p-2 bg-opacity-50 vh-100 w-100",
                { "d-none": !isSideNavOpen },)}
                 style={{ height: "100%", zIndex: "900" }}
            ></div>

            {/*main image*/}
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
                                <a className="nav-link" href="./assets/static/Minsu-kim-resume.pdf" target="_blank">
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

            {/*what I can do*/}
            <div className="container bg-dark mt-5 mb-5" id="about-me">
                <div className="text-center">
                    <div className="row mb-5">
                        <div className="col-lg-12 mb-4">
                            <div className="mb-3">
                                <h1 ref={ref} className={`mb-2 ${!isMobile &&(isVisible ? 'fly-in-left' : '')}`}><strong>Trust and Professionalism Guaranteed</strong></h1>
                                <div className="d-inline-block justify-content-center col-lg-5 col-sm-10 mb-3">
                                    <p ref={ref} className={`explain-quote ${!isMobile && (isVisible ? 'fly-in-right' : '')}`}>
                                        Customer satisfaction is my top priority. To ensure high-quality
                                        service, I have honed my skills and principles to deliver exceptional results.
                                    </p>
                                </div>
                            </div>

                            <div className="row d-inline-flex justify-content-center">
                                <div ref={ref} className={`col-11 col-lg-4 ${!isMobile && (isVisible ? 'fly-in-left' : '')}`}>
                                    <div className="mb-3">
                                        <img src="./assets/static/icon/tool-svgrepo-com.png"
                                             style={{ width: "3rem", height: "3rem" }}/>
                                    </div>
                                    <h2>
                                        Ongoing Support
                                    </h2>
                                    <p className="explain-quote mb-2">
                                        I will enhance your web-based software to maintain its efficiency and
                                        competitiveness.
                                        Leveraging well-established DevOps processes, I can deploy urgent updates and
                                        release new functional modules.
                                    </p>
                                </div>

                                <div ref={ref} className={`col-11 col-lg-4 ${!isMobile && (isVisible ? 'fade-in' : '')}`}>
                                    <div className="mb-3">
                                        <img src="./assets/static/icon/database-svgrepo-com.png"
                                             style={{ width: "3rem", height: "3rem" }}/>
                                    </div>
                                    <h2>
                                        Backend Dev
                                    </h2>
                                    <p className="explain-quote mb-2">
                                        I implement the business logic of your web application with precision on the
                                        back end,
                                        utilizing trusted frameworks for fast and high-quality coding.
                                        I also develop well-structured APIs to integrate your web app with corporate or
                                        third-party systems and services.
                                    </p>
                                </div>

                                <div ref={ref} className={`col-11 col-lg-4 ${!isMobile && (isVisible ? 'fly-in-right' : '')}`}>
                                    <div className="mb-3">
                                        <img src="./assets/static/icon/monitor-svgrepo-com.png"
                                             style={{ width: "3rem", height: "3rem" }}/>
                                    </div>
                                    <h2>
                                        Frontend Design & Dev
                                    </h2>
                                    <p className="explain-quote mb-2">
                                        I carefully analyze the target audience to understand their needs and reflect
                                        these insights in the UI design.
                                        After finalizing the look and feel of the web app with project stakeholders, I
                                        bring it to life using advanced front-end technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Tools that I'm using*/}
            <div ref={ref} className={`container bg-dark mb-5 ${!isMobile && (isVisible ? 'fly-in-left' : '')}`}>
                <div className="d-flex justify-content-center mb-3">
                    <h1>Tools for Today and Beyond</h1>
                </div>

                <p className="d-flex justify-content-center icon-title mb-5">Backend Technologies</p>

                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/laravel-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title ">Laravel</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/csharp-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">C#</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/Postgresql.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">PostgreSQL</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/dotnet-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">.NET</div>
                    </div>
                </div>

                {/*backend icons*/}
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/docker-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Docker</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/php-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">PHP</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/redis-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Redis</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/node-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Node.js</div>
                    </div>
                </div>

                {/*frontend icons*/}
                <div className="row d-flex justify-content-center mb-5">
                    <p className="d-flex justify-content-center icon-title mb-5">Frontend Technologies</p>
                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/react-javascript-js-framework-facebook-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">React.js</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/typescript-icon-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Typescript</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/js-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">JavaScript</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/figma-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Figma</div>
                    </div>
                </div>

                {/*version controls*/}
                <div className="row d-flex justify-content-center">
                    <p className="d-flex justify-content-center icon-title mb-5">Version Control & Management</p>
                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/git-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Git</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/github-color-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Github</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/bitbucket-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Bitbukcet</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/jira-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Jira</div>
                    </div>
                </div>
            </div>

            {/*Project for mobile*/}
            <h1 className="d-flex justify-content-center mb-3 h1" id="projects">The Projects I'm Proud Of</h1>
            <p className="d-flex justify-content-center explain-quote mb-3">Milestones in My Professional Journey</p>
            <div className="container bg-dark d-block d-lg-none card">
                <div className="row">

                    {/*card 1*/}
                    <div className="col-lg-4 mb-4">
                        <div className="card w-100">
                            <img className="card-img-top" src="./assets/static/OAP/oap-box-logo.jpeg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Ontario Abandoned Place</h5>
                                <p className="card-text">Discover abandoned building, ghost towns, industrials, farm
                                    houses, mansions, creepy places, and more</p>
                                <div className="d-flex justify-content-end">
                                    <button onClick={openModalOAP} className="btn btn-secondary">Detail</button>
                                </div>
                                <Modal
                                    isOpen={modalOAPIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="OAP Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}><i
                                            className="fa-solid fa-x"></i></button>
                                    </div>
                                    <ProjectModalTab/>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/*card 2*/}
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <div className="d-block align-content-center bg-dark" style={{ height: "414px" }}>
                                <img className="card-img-top img-fluid "
                                     src="./assets/static/Cleantopia/cleantopia-main-photo.gif" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Cleantopia Execl converter</h5>
                                <p className="card-text">Desktop application developed to streamline label generation by
                                    converting CSV file data into labels with user friendly graphical user interface</p>
                                <div className="d-flex justify-content-end">
                                    <button onClick={openModalCleantopia} className="btn btn-secondary">Detail</button>
                                </div>
                                <Modal
                                    isOpen={modalCleantopiaIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}><i
                                            className="fa-solid fa-x"></i></button>
                                    </div>
                                    <CleantopiaExcelConverter/>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/*card 3*/}
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <div className="d-block align-content-center bg-dark" style={{ height: "414px" }}>
                                <img className="card-img-top" src="./assets/static/EngineX/Picture1.png"
                                     alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">EngineX Car Rental Shop</h5>
                                <p className="card-text">web application platform connects car owners with individuals
                                    looking to rent vehicles. It provides a seamless rental service </p>
                                <div className="d-flex justify-content-end">
                                    <button onClick={openModalEngineX} className="btn btn-secondary">Detail</button>
                                </div>
                                <Modal
                                    isOpen={modalEngineXIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}><i
                                            className="fa-solid fa-x"></i></button>
                                    </div>
                                    <EngineXCarRentalShop/>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*for browser*/}

            <div  className="d-none d-md-none d-lg-block projcard-container">
                {/*card 1*/}
                <div className="projcard projcard-blue">
                    <div className="projcard-innerbox">
                        <img className="projcard-img" src="./assets/static/OAP/oap-box-logo.jpeg" alt="OAP logo"/>
                        <div className="projcard-textbox">
                            <div className="projcard-title text-black h1">
                                <span className="mx-1">Ontario Abandoned Place(OAP)</span>
                                <span>
                                    <i onClick={openModalOAP} className="fa-solid fa-link text-secondary"></i>
                                    <Modal
                                        isOpen={modalOAPIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="OAP Modal"
                                    >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}><i
                                            className="fa-solid fa-x"></i></button>
                                    </div>
                                    <ProjectModalTab/>
                                </Modal>
                                </span>
                            </div>
                            <div className="projcard-bar bg"></div>
                            <div className="projcard-description">
                                OAP is a sophisticated web application platform meticulously crafted to cater to the
                                niche interest of discovering abandoned places.
                                By harnessing modern web technologies, OAP offers a seamless and engaging user
                                experience, allowing users to explore a diverse
                                range of abandoned buildings.
                            </div>
                            <div className="projcard-tagbox">
                                <span className="projcard-tag">Laravel</span>
                                <span className="projcard-tag">React.js</span>
                                <span className="projcard-tag">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*card 2*/}
                <div className="projcard projcard-red">
                    <div className="projcard-innerbox">
                        <img className="projcard-img" src="./assets/static/Cleantopia/cleantopia-main-photo.gif"
                             alt="Cleantopia demo"/>
                        <div className="projcard-textbox">
                            <div className="projcard-title text-black h1">
                                <span className="mx-1">Cleantopia Excel GUI Converter</span>
                                <i onClick={openModalCleantopia} className="fa-solid fa-link text-secondary"></i>
                                <Modal
                                    isOpen={modalCleantopiaIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}><i
                                            className="fa-solid fa-x"></i></button>
                                    </div>
                                    <CleantopiaExcelConverter/>
                                </Modal>
                            </div>
                            <div className="projcard-bar"></div>
                            <div className="projcard-description">
                                Cleantopia Excel GUI Converter is a user-friendly Windows Forms application designed to
                                streamline the process of transforming Excel files.
                                Through meticulous planning and client consultations, a robust application was developed
                                to simplify the conversion of Excel files,
                                making it accessible to users with varying levels of technical expertise.
                            </div>
                            <div className="projcard-tagbox">
                                <span className="projcard-tag">C#</span>
                                <span className="projcard-tag">.NET</span>
                                <span className="projcard-tag">Winform</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*card 3*/}
                <div className="projcard projcard-green">
                    <div className="projcard-innerbox">
                        <img className="projcard-img" src="./assets/static/EngineX/Picture1.png" alt="EngineX"/>
                        <div className="projcard-textbox">
                            <div className="projcard-title text-black h1">
                                <span className="mx-1">EngineX Car Rental Shop</span>
                                <span>
                                    <i onClick={openModalEngineX} className="fa-solid fa-link text-secondary"></i>
                                    <Modal
                                        isOpen={modalEngineXIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >
                                        <div className="d-flex justify-content-end">
                                            <button className="bg-white border-0" onClick={closeModal}><i
                                                className="fa-solid fa-x"></i></button>
                                        </div>
                                        <EngineXCarRentalShop/>
                                    </Modal>
                                </span>

                            </div>
                            <div className="projcard-bar"></div>
                            <div className="projcard-description">
                                Our Car Rental Web Application is designed to meet the dynamic needs of users, offering
                                a seamless and intuitive experience for managing car rentals.
                                The application stands out for its robust features and user-friendly interface, making
                                it easy for users to book, manage,
                                and track their car rentals efficiently
                            </div>
                            <div className="projcard-tagbox">
                                <span className="projcard-tag">C#</span>
                                <span className="projcard-tag">.NET</span>
                                <span className="projcard-tag">React</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*contact me*/}
            <div className="d-inline-flex justify-content-center align-items-center w-100 bg-secondary mb-4"
                 style={{ height: "13rem" }}
                 id="contact"
            >
                <div className="text-center">
                    <p className="h1 mb-3 px-5"><strong>Feel free to reach out!</strong></p>
                    <button className="btn btn-outline-light border border-white btn-lg" onClick={toggleContactForm}>Contact</button>
                </div>
            </div>
            <div className={classNames("", {"d-none" : !isContactClick})}>
                <ContactEmail/>
            </div>
            <hr className="text-white"/>
            {/*footer*/}
            <footer className="footer bg-dark text-muted py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h1 className="mb-3 title-h3">Link</h1>
                            <ul className="navbar-nav flex-column text-muted">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#home">
                                        <span className="h5"><i className="fa-solid fa-house mx-1"/>Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#about-me">
                                        <span className="h5"><i
                                            className="fa-solid fa-address-card mx-1"/>About me</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#projects">
                                        <span className="h5"><i
                                            className="fa-solid fa-diagram-project mx-1"/>Projects</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#contact">
                                        <span className="h5"><i className="fa-solid fa-phone mx-1"/> Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-white">
                            <h1 className="title-h1">About me</h1>
                            <p className="h5 text-white-50">
                                I am a passionate Full-Stack Developer with 2 years of experience in creating robust, user-friendly web applications.
                                With a strong foundation in technologies like Laravel, PHP, JavaScript, and C#,
                                I am eager to tackle new challenges and deliver exceptional user experiences
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-white"/>
                <div className="col-md-6 mt-5 d-flex justify-content-center text-white w-100">
                    <p className="mb-0 h5">&copy; {new Date().getFullYear()} Minsu Kim. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('react-app'));
root.render(<App/>);