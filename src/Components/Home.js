import React, { useState } from "react";
import '../App.css';
import MotivLandingImage from '../Motiv Landing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faFilePdf} from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    const [menuActive, setMenuActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
        setModalOpen(false); // Close modal when toggling menu
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
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
                            <li><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.3 rem', marginRight: '10px' }} /> <a href="#">Home</a></li>
                            <li><FontAwesomeIcon icon={faUser} style={{ fontSize: '1.3 rem', marginRight: '19px' }} /> <a href="#">About Me</a></li>
                            <li><FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '1.3 rem', marginRight: '17px' }} /> <a href="#">Resume</a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.3 rem', marginRight: '17px' }} /> <a href="#">Contact Me</a></li>
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
                        <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Motiv Assist <span className="text-md font-medium"> | 2024</span></h2>
                        <div style={{ marginBottom: '16px' }}></div>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>AI Scripts | Infrastructure | Deployment</p>
                        <div style={{ marginBottom: '16px' }}></div>
                        <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Creating a Work Assistant Chatbot <br />with Notion that prioritizes data <br />security.</p>
                        <div style={{ marginBottom: '32px' }}></div>
                        <button className="read-more-btn">
                            Read More
                            <span className="arrow"></span> {/* Adding arrow span */}
                        </button>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            loading="lazy"
                            src={MotivLandingImage}
                            alt="Motiv Landing"
                            style={{ width: '400px', height: '217px', borderRadius: '20px' }}
                        />
                    </div>
                </div>
                <div style={{ marginBottom: '81px' }}></div>
                <div className="self-start mt-10 ml-6 text-2xl font-bold text-black recent-projects-header">
                    Currently
                </div>
                <div style={{ marginBottom: '32px' }}></div>
                <div className="container" style={{ width: '900px', margin: '0 auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Projects</h2>
                    <div style={{ flex: 1, display: 'flex' }}>
                        <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '10px', padding: '20px' }}>
                            <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                                <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Project 1</h2>
                                <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Description of Project 1</p>
                            </div>
                        </div>
                        <div style={{ flex: 1, marginRight: '10px', border: '2px solid #CCCCFF', borderRadius: '10px', padding: '20px' }}>
                            <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                                <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Project 2</h2>
                                <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Description of Project 2</p>
                            </div>
                        </div>
                        <div style={{ flex: 1, border: '2px solid #CCCCFF', borderRadius: '10px', padding: '20px' }}>
                            <div style={{ marginBottom: '16px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                                <h2 className="font-bold text-2xl" style={{ fontSize: '1.25rem' }}>Project 3</h2>
                                <p className="text-md font-medium" style={{ fontSize: '1.25rem' }}>Description of Project 3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '100px' }}></div>
                <div style={{ borderTop: '2px solid #e6d7ff', padding: '20px 0', textAlign: 'center' }}>
                    <p style={{ marginBottom: '10px',fontSize:'1.2rem' }}>Contact me here</p>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: 'black' }} />
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;

