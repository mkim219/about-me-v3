import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import classNames from "classnames";
import { TypeAnimation } from 'react-type-animation';
import Modal from "react-modal";

import ContactEmail from "./ContactEmail.jsx";
import ProjectModalTab from "./ProjectModalTab.jsx";
import CleantopiaExcelConverter from "../assets/project/Cleantopia-excel-converter.jsx";
import EngineXCarRentalShop from "../assets/project/EngineX-car-rental-shop.jsx";


function App() {
    const [scrolled, setScrolled] = useState(false);
    const [modalOAPIsOpen, setModalOAPIsOpen] = useState(false);
    const [modalCleantopiaIsOpen, setModalCleantopiaIsOpen] = useState(false);
    const [modalEngineXIsOpen, setModalEngineXIsOpen] = useState(false);

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

    return (
        <div className="bg-dark text-light" id="home">
            {/*header*/}
            <div
                className={classNames("bg-secondary bg-gradient sticky-top",
                    { "d-block": scrolled },
                    { 'd-none': !scrolled },
                )}>
                <nav className="navbar navbar-expand-lg navbar-dark container">
                    <a className="navbar-brand" href="#home">
                        <span className="h1 mx-4"><i className="fa-solid fa-m"/></span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    <span className="h5"> Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-me">
                                    <span className="h5">About me</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">
                                    <span className="h5">Projects</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <span className="h5"> Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/*main image*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top-banner">
                        <div className="position-absolute top-50 start-50 translate-middle-y p-2">
                            <h1 className="display-3 title-h1">Minsu Kim</h1>
                            <h3 className="title-h3">An adventerous programmer involved in the startup scene</h3>
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link" href="./assets/static/Minsu-kim-resume.pdf" target="_blank"><i
                                    className="fa fa-file-pdf-o"></i></a></li>
                                <li className="nav-item"><a className="nav-link" href="tel:82-10-9731-9106"><i
                                    className="fa fa-phone"></i></a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="https://www.linkedin.com/in/minsu-kim-37a553156"
                                                            target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://github.com/mkim219" target="_blank"><i
                                    className="fa fa-github"></i></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://youtu.be/9NA4DgGGYWg"
                                                            target="_blank"><i
                                    className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*about me*/}
            <div className="container bg-dark mt-5" id="about-me">
                <div className="intro text-center">
                    <div className="row mb-5">
                        <div className="col-lg-3 col-sm-1"></div>
                        <div className="col-lg-6 col-sm-10">
                            <h1 className="mb-4 title-h1">About Me</h1>
                            <TypeAnimation
                                className="lato-thin"
                                sequence={[
                                    'I am a developer', // Types 'One'
                                    1000, // Waits 1s
                                    'I am a creative developer', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    'I am a collaborative developer', // Types 'Three' without deleting 'Two'
                                    2000, // Waits 2s
                                    'I am a full stack developer', // Types 'Three' without deleting 'Two'
                                    () => {
                                        console.log('Sequence completed');
                                    },
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                            />
                            <blockquote className="blockquote text-center">
                                <i className="fas fa-quote-left me-2"></i>
                                <p>Crafting Code with Creativity and Precision.</p>
                                <p>
                                    I specialize in developing innovative solutions. With a deep love for coding
                                    and problem-solving,
                                    my goal is to leverage technology to create value and improve the user experience. Based in
                                    Mountain View, I enjoy working on challenging projects and collaborating with talented
                                    professionals.
                                </p>
                                <i className="fas fa-quote-right ms-2"></i>
                            </blockquote>
                        </div>
                        <div className="col-lg-3 col-sm-1"></div>
                    </div>
                </div>
            </div>

            {/*Project*/}
            <h1 className="d-flex justify-content-center mb-5 title-h1" id="projects">Projects</h1>
            <div className="container">
                <div className="row">

                    {/*card 1*/}
                    <div className="col-lg-4 mb-4">
                        <div className="card w-100">
                            <img className="card-img-top" src="./assets/static/OAP/oap-box-logo.jpeg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Ontario Abandoned Place</h5>
                                <p className="card-text">Discover abandoned building, ghost towns, industrials, farm houses, mansions, creepy places, and more</p>
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
                                        <button className="bg-white border-0" onClick={closeModal}><i className="fa-solid fa-x"></i></button>
                                    </div>
                                    <ProjectModalTab/>
                                </Modal>

                            </div>
                        </div>
                    </div>

                    {/*card 2*/}
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <div className="d-block align-content-center bg-black" style={{ height: "414px" }}>
                                <img className="card-img-top img-fluid " src="./assets/static/Cleantopia/cleantopia-main-photo.gif" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Cleantopia Execl converter</h5>
                                <p className="card-text">Desktop application developed to streamline label generation by converting CSV file data into labels with user friendly graphical user interface</p>
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
                                        <button className="bg-white border-0" onClick={closeModal}><i className="fa-solid fa-x"></i></button>
                                    </div>
                                    <CleantopiaExcelConverter/>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    {/*card 3*/}
                    <div className="col-lg-4 mb-4">
                        <div className="card">
                            <div className="d-block align-content-center bg-black" style={{ height: "414px" }}>
                                <img className="card-img-top" src="./assets/static/EngineX/Picture1.png" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">EngineX Car Rental Shop</h5>
                                <p className="card-text">web application platform connects car owners with individuals looking to rent vehicles. It provides a seamless rental service </p>
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
                                        <button className="bg-white border-0" onClick={closeModal}><i className="fa-solid fa-x"></i></button>
                                    </div>
                                    <EngineXCarRentalShop/>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*contact me*/}
            <ContactEmail/>

            {/*footer*/}
            <footer className="footer bg-secondary bg-gradient text-muted py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h3 className="mb-3 title-h1">Explore</h3>
                            <ul className="navbar-nav flex-column text-muted">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#home">
                                        <span className="h5"><i className="fa-solid fa-house mx-1"/>Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#about-me">
                                        <span className="h5"><i className="fa-solid fa-address-card mx-1"/>About me</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#projects">
                                        <span className="h5"><i className="fa-solid fa-diagram-project mx-1"/>Projects</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#contact">
                                        <span className="h5"><i className="fa-solid fa-phone mx-1"/> Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 mt-5 copyright-container">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Minsu Kim. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('react-app'));
root.render(<App />);