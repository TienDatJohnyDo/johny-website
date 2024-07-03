import React, { useEffect, useState, useRef } from "react";
import '../App.css';
import MotivLandingImage from '../Photo/Motiv Landing.png';
import HRBLandingImage from '../Photo/HRBLanding.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Pdf from '../pdf/JohnyResume.pdf'; 

function HomePage() {
    const [menuActive, setMenuActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [displayProjects, setDisplayProjects] = useState(true);
    const [displayLearning, setDisplayLearning] = useState(false);
    const [displayListening, setDisplayListening] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

            // Show progress when user scrolls more than 20%
            setShowProgress(scrollPercentage > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
        setModalOpen(false); // Close modal when toggling menu
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const showProjects = () => {
        setDisplayProjects(true);
        setDisplayLearning(false);
        setDisplayListening(false);
    };

    const showLearning = () => {
        setDisplayProjects(false);
        setDisplayLearning(true);
        setDisplayListening(false);
    };

    const showListening = () => {
        setDisplayProjects(false);
        setDisplayLearning(false);
        setDisplayListening(true);
    };

    const projects = [
        {
            title: "Motiv Assist",
            year: "Capstone Project 2024",
            description: "AI Scripts | Infrastructure | Deployment",
            details: "Creating a Work Assistant Chatbot with Notion that prioritizes data security.",
            image: MotivLandingImage,
            link : "/Projects/MotivProject"
        },
        {
            title: "H&R Block AI Chatbot",
            year: "Summer Internship 2023",
            description: "Product Management Intern",
            details: "Designing and implemented an AI chatbot's conversation flow, and incorporated user input analysis.",
            image: HRBLandingImage,
            link : "/Projects/HRBlockProject"
        },
        
    ];

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <div className="font-poppins font-bold" style={{ marginTop: '60px' }}>
                {/* Hamburger Menu */}
                <div className={`hamburger-menu ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                    {menuActive ? (
                        <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                            <path d="M6 18L18 6M6 6L18 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>

                {/* Modal */}
                {menuActive && (
                    
                    <div className="modal" onClick={toggleMenu}>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faHome} className="small-icon" style={{ marginRight: '14px' }} />
                                <Link to="/">Home</Link> {/* Wrap with Link and provide the path */}
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUser} className="small-icon" style={{ marginRight: '19px' }} />
                                <Link to="/About">About Me</Link> {/* Wrap with Link and provide the path */}
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFilePdf} className="small-icon" style={{ marginRight: '17px' }} />
                                <a href={Pdf} without rel="noopener noreferrer" target="_blank">Resume</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="small-icon" style={{ marginRight: '17px' }} />
                                 <Link to="#" onClick={scrollToFooter}>Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Content */}
                
                Hi, I'm Johny Do
                <div style={{ marginBottom: '45px' }}></div>
                <div className="mt-2 image-container">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b5ee86c7cdd2e407637ce753cabb9f162b39d21b06cda027b308b9a90be00a?"
                        className="shrink-0 aspect-square mr-1"
                        alt="Table Icon"
                    />
                    <span className="ml-1 text-md font-medium">Calgary, AB</span>
                </div>
                <div style={{ marginBottom: '48px' }}></div>
                <div className="text-md font-medium text-center text-black">
                    I am a new graduate Software Engineer<br /> passionate about Data Science.
                </div>
                <div style={{ marginBottom: '81px' }}></div>
                <div className="self-start mt-10 ml-6 text-2xl font-bold text-black recent-projects-header">
                    Recent Projects
                </div>
                <div style={{ marginBottom: '32px' }}></div>
                <div className="container" style={{ width: '900px', margin: '0 auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '20px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>{projects[currentProjectIndex].title} <span className="text-md font-medium"> | {projects[currentProjectIndex].year}</span></h2>
                        <div style={{ marginBottom: '16px' }}></div>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>{projects[currentProjectIndex].description}</p>
                        <div style={{ marginBottom: '16px' }}></div>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>{projects[currentProjectIndex].details}</p>
                        <div style={{ marginBottom: '32px' }}></div>
                        <a class = "read-more-btn" href = {projects[currentProjectIndex].link}> Read More</a>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            loading="lazy"
                            src={projects[currentProjectIndex].image}
                            alt="Recent Project"
                            style={{ width: '400px', height: '217px', borderRadius: '20px',border: '2px solid #FAE6FA' }}
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button onClick={handlePrevProject} style={{ marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={handleNextProject} style={{ marginLeft: '10px' }}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div style={{ marginBottom: '100px' }}></div>
                <div className="self-start mt-10 ml-6 text-2xl font-bold text-black recent-projects-header">
                    Currently
                </div>
                <div style={{ marginBottom: '32px' }}></div>
                <div className="container" style={{ width: '900px', margin: '0 auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', gap : '20px' }}>
                <span onClick={showProjects} style={{ cursor: 'pointer', color: 'black', padding: '10px', borderRadius: '20px', backgroundColor: displayProjects ? '#CCCCFF' : 'white', border: `1px solid ${displayProjects ? '#CCCCFF' : 'black'}` }}>
                    Projects
                </span>
                <span onClick={showLearning} style={{ cursor: 'pointer', color: 'black', padding: '10px', borderRadius: '20px', backgroundColor: displayLearning ? '#CCCCFF' : 'white', border: `1px solid ${displayLearning ? '#CCCCFF' : 'black'}` }}>
                    Learning
                </span>
                <span onClick={showListening} style={{ cursor: 'pointer', color: 'black', padding: '10px', borderRadius: '20px', backgroundColor: displayListening ? '#CCCCFF' : 'white', border: `1px solid ${displayListening ? '#CCCCFF' : 'black'}` }}>
                    Listening
                </span>
            </h2>
            <div style={{ flex: 1, display: displayProjects ? 'flex' : 'none' }}>
                <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Spotify Stock Analysis</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Using Machine Learning and The Spotify data to predict stock prices</p>
                    </div>
                </div>
                <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Housing Price Prediciton in Python</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Prediciting the Housing Prices - Data Science and Machine Learning</p>
                    </div>
                </div>
                <div style={{ flex: 1, border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Music Recommender</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Making a Project in order to Recommend New Music</p>
                    </div>
                </div>
            </div>
            <div style={{ flex: 1, display: displayLearning ? 'flex' : 'none' }}>
                <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Udemy Course: </h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Python for Data Science and Machine Learning Bootcamp</p>
                    </div>
                </div>
                <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Udemy Course:</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Complete A.I & Machine Learning, Data Science Bootcamp</p>
                    </div>
                </div>
                <div style={{ flex: 1, border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Udemy Course:</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>The Data Science Course : Complete Data Science Bootcamp 2024</p>
                    </div>
                </div>
            </div>
            <div style={{ flex: 1, display: displayListening ? 'flex' : 'none' }}>
                <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Songs of the week</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Smart - Le Sserafim</p>
                    </div>
                </div>
                <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Songs of the week</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Midas Touch - Kiss of Life</p>
                    </div>
                </div>
                <div style={{ flex: 1, border: '2px solid #CCCCFF', borderRadius: '20px', padding: '20px' }}>
                    <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Songs of the week</h2>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Magnetic - Illit</p>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ marginBottom: '100px' }}></div>
        <footer ref = {footerRef}>
                <div style={{ borderTop: '2px solid #e6d7ff', padding: '20px 0', textAlign: 'center' }}>
                    <p style={{ marginBottom: '10px', fontSize:'1.2rem' }}>Contact me here</p>
                    <div>
                        <a href="mailto:johnydo448@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: 'black' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/johnydo/">
                            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px', color: 'black' }} />
                        </a>
                        <a href="https://github.com/TienDatJohnyDo">
                            <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                        </a>
                    </div>
                </div>

        </footer>

                
            </div>
        </>
    );
}

export default HomePage;