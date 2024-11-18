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
import useLanguageToggle from "./useLangToggle";

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
    const { language, toggleLanguage } = useLanguageToggle();
    const { t } = useTranslation();

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
                <nav className="navbar navbar-dark container d-flex justify-content-between">
                    <a className="navbar-brand" href="#home">
                        <span className="h1 mx-4"><i className="fa-solid fa-m"></i></span>
                    </a>
                    {/* Center Content (if any) */}
                    <div className="d-flex flex-grow-1 justify-content-center"></div>
                    {/* Right Aligned Buttons */}
                    <div className="d-flex align-items-center">
                        <button onClick={toggleLanguage} className="btn btn-outline-primary text-left me-3">
                            {language === 'en' ? '한국어' : 'ENG'}
                        </button>
                        <button className="btn btn-lg text-white" onClick={toggleSideNav}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
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
                                <h1
                                    ref={ref}
                                    className={`mb-2 ${!isMobile && (isVisible ? 'fly-in-left' : '')}`}
                                >
                                    <strong>{t('about-me.trust_professionalism')}</strong>
                                </h1>
                                <div className="d-inline-block justify-content-center col-lg-5 col-sm-10 mb-3">
                                    <p
                                        ref={ref}
                                        className={`explain-quote ${!isMobile && (isVisible ? 'fly-in-right' : '')}`}
                                    >
                                        {t('about-me.trust_professionalism_content')}
                                    </p>
                                </div>
                            </div>

                            <div className="row d-inline-flex justify-content-center">
                                <div
                                    ref={ref}
                                    className={`col-11 col-lg-4 ${!isMobile && (isVisible ? 'fly-in-left' : '')}`}
                                >
                                    <div className="mb-3">
                                        <img
                                            src="./assets/static/icon/tool-svgrepo-com.png"
                                            style={{ width: '3rem', height: '3rem' }}
                                        />
                                    </div>
                                    <h2>{t('about-me.ongoing_support')}</h2>
                                    <p className="explain-quote mb-2">
                                        {t('about-me.ongoing_support_content')}
                                    </p>
                                </div>

                                <div
                                    ref={ref}
                                    className={`col-11 col-lg-4 ${!isMobile && (isVisible ? 'fade-in' : '')}`}
                                >
                                    <div className="mb-3">
                                        <img
                                            src="./assets/static/icon/database-svgrepo-com.png"
                                            style={{ width: '3rem', height: '3rem' }}
                                        />
                                    </div>
                                    <h2>{t('about-me.backend_dev')}</h2>
                                    <p className="explain-quote mb-2">
                                        {t('about-me.backend_dev_content')}
                                    </p>
                                </div>

                                <div
                                    ref={ref}
                                    className={`col-11 col-lg-4 ${!isMobile && (isVisible ? 'fly-in-right' : '')}`}
                                >
                                    <div className="mb-3">
                                        <img
                                            src="./assets/static/icon/monitor-svgrepo-com.png"
                                            style={{ width: '3rem', height: '3rem' }}
                                        />
                                    </div>
                                    <h2>{t('about-me.frontend_design_dev')}</h2>
                                    <p className="explain-quote mb-2">
                                        {t('about-me.frontend_design_dev_content')}
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
                    <h1>{t('technologies.header')}</h1>
                </div>

                <p className="d-flex justify-content-center icon-title mb-5">{t('technologies.backend_technologies')}</p>

                {/* Backend Technologies */}
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/laravel-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Laravel</div>
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
                            <img src="./assets/static/icon/Postgresql.png" style={{ width: "3rem", height: "3rem" }}/>
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

                {/* Frontend Technologies */}
                <p className="d-flex justify-content-center icon-title mb-5">{t('technologies.frontend_technologies')}</p>
                <div className="row d-flex justify-content-center mb-5">
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
                        <div className="d-flex justify-content-center icon-title">TypeScript</div>
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

                {/* Version Control & Management */}
                <p className="d-flex justify-content-center icon-title mb-5">{t('technologies.version_control_management')}</p>
                <div className="row d-flex justify-content-center">
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
                        <div className="d-flex justify-content-center icon-title">GitHub</div>
                    </div>

                    <div className="col-3 col-lg-2 mr-1">
                        <div className="d-flex justify-content-center">
                            <img src="./assets/static/icon/bitbucket-svgrepo-com.png"
                                 style={{ width: "3rem", height: "3rem" }}/>
                        </div>
                        <div className="d-flex justify-content-center icon-title">Bitbucket</div>
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
            <div>
                <h1 className="d-flex justify-content-center mb-3 h1" id="projects">
                    {t('projects.projects_proud_of')}
                </h1>
                <p className="d-flex justify-content-center explain-quote mb-3">
                    {t('projects.professional_milestones')}
                </p>

                {/* Mobile and Tablet View */}
                <div className="container bg-dark d-block d-lg-none card">
                    <div className="row">
                        {/* Card 1 - Ontario Abandoned Place */}
                        <div className="col-lg-4 mb-4">
                            <div className="card w-100">
                                <img className="card-img-top" src="./assets/static/OAP/oap-box-logo.jpeg"
                                     alt="OAP logo"/>
                                <div className="card-body">
                                    <h5 className="card-title">{t('projects.ontario_abandoned_place.title')}</h5>
                                    <p className="card-text">{t('projects.ontario_abandoned_place.description')}</p>
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
                                            <button className="bg-white border-0" onClick={closeModal}>
                                                <i className="fa-solid fa-x"></i>
                                            </button>
                                        </div>
                                        <ProjectModalTab/>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Cleantopia Excel Converter */}
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img
                                    className="card-img-top img-fluid"
                                    src="./assets/static/Cleantopia/cleantopia-main-photo.gif"
                                    alt="Cleantopia demo"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{t('projects.cleantopia_excel_converter.title')}</h5>
                                    <p className="card-text">{t('projects.cleantopia_excel_converter.description')}</p>
                                    <div className="d-flex justify-content-end">
                                        <button onClick={openModalCleantopia} className="btn btn-secondary">Detail
                                        </button>
                                    </div>
                                    <Modal
                                        isOpen={modalCleantopiaIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Cleantopia Modal"
                                    >
                                        <div className="d-flex justify-content-end">
                                            <button className="bg-white border-0" onClick={closeModal}>
                                                <i className="fa-solid fa-x"></i>
                                            </button>
                                        </div>
                                        <CleantopiaExcelConverter/>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - EngineX Car Rental Shop */}
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="./assets/static/EngineX/Picture1.png" alt="EngineX"/>
                                <div className="card-body">
                                    <h5 className="card-title">{t('projects.enginex_car_rental.title')}</h5>
                                    <p className="card-text">{t('projects.enginex_car_rental.description')}</p>
                                    <div className="d-flex justify-content-end">
                                        <button onClick={openModalEngineX} className="btn btn-secondary">Detail</button>
                                    </div>
                                    <Modal
                                        isOpen={modalEngineXIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="EngineX Modal"
                                    >
                                        <div className="d-flex justify-content-end">
                                            <button className="bg-white border-0" onClick={closeModal}>
                                                <i className="fa-solid fa-x"></i>
                                            </button>
                                        </div>
                                        <EngineXCarRentalShop/>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="d-none d-md-none d-lg-block projcard-container">
                    {/* Desktop Card 1 - OAP */}
                    <div className="projcard projcard-blue">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="./assets/static/OAP/oap-box-logo.jpeg" alt="OAP logo"/>
                            <div className="projcard-textbox">
                                <h1 className="projcard-title text-black">
                                    {t('projects.ontario_abandoned_place.title')}
                                    <span>
                  <i onClick={openModalOAP} className="fa-solid fa-link text-secondary ml-2 cursor-pointer"></i>
                </span>
                                </h1>
                                <div className="projcard-description">
                                    {t('projects.ontario_abandoned_place.description')}
                                </div>
                                <div className="projcard-tagbox">
                                    <span className="projcard-tag">Laravel</span>
                                    <span className="projcard-tag">React.js</span>
                                    <span className="projcard-tag">PostgreSQL</span>
                                </div>
                                <Modal
                                    isOpen={modalOAPIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="OAP Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}>
                                            <i className="fa-solid fa-x"></i>
                                        </button>
                                    </div>
                                    <ProjectModalTab/>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Card 2 - Cleantopia */}
                    <div className="projcard projcard-red">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="./assets/static/Cleantopia/cleantopia-main-photo.gif"
                                 alt="Cleantopia"/>
                            <div className="projcard-textbox">
                                <h1 className="projcard-title text-black">
                                    {t('projects.cleantopia_excel_converter.title')}
                                    <span>
                  <i onClick={openModalCleantopia} className="fa-solid fa-link text-secondary ml-2 cursor-pointer"></i>
                </span>
                                </h1>
                                <div className="projcard-description">
                                    {t('projects.cleantopia_excel_converter.description')}
                                </div>
                                <div className="projcard-tagbox">
                                    <span className="projcard-tag">C#</span>
                                    <span className="projcard-tag">.NET</span>
                                    <span className="projcard-tag">Winform</span>
                                </div>
                                <Modal
                                    isOpen={modalCleantopiaIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Cleantopia Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}>
                                            <i className="fa-solid fa-x"></i>
                                        </button>
                                    </div>
                                    <CleantopiaExcelConverter/>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Card 3 - EngineX */}
                    <div className="projcard projcard-green">
                        <div className="projcard-innerbox">
                            <img className="projcard-img" src="./assets/static/EngineX/Picture1.png" alt="EngineX"/>
                            <div className="projcard-textbox">
                                <h1 className="projcard-title text-black">
                                    {t('projects.enginex_car_rental.title')}
                                    <span>
                                      <i onClick={openModalEngineX} className="fa-solid fa-link text-secondary ml-2 cursor-pointer"></i>
                                    </span>
                                </h1>
                                <div className="projcard-description">
                                    {t('projects.enginex_car_rental.description')}
                                </div>
                                <div className="projcard-tagbox">
                                    <span className="projcard-tag">C#</span>
                                    <span className="projcard-tag">.NET</span>
                                    <span className="projcard-tag">React</span>
                                </div>
                                <Modal
                                    isOpen={modalEngineXIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="EngineX Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                        <button className="bg-white border-0" onClick={closeModal}>
                                            <i className="fa-solid fa-x"></i>
                                        </button>
                                    </div>
                                    <EngineXCarRentalShop/>
                                </Modal>
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
                    <button className="btn btn-outline-light border border-white btn-lg"
                            onClick={toggleContactForm}>Contact
                    </button>
                </div>
            </div>
            <div className={classNames("", { "d-none": !isContactClick })}>
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
                                I am a passionate Full-Stack Developer with 2 years of experience in creating robust,
                                user-friendly web applications.
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