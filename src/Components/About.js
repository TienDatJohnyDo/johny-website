import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import JohnyLinked from "../Photo/Johny-Linked.JPG"; 
import Volleyball from "../Photo/Volleyball.jpg"; 

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 relative">
            <Link to="/" className="absolute top-0 left-0 m-4">
                <FontAwesomeIcon icon={faArrowLeft} className="text-black text-2xl" />
            </Link>
            <h1 className="text-3xl font-bold mt-16">About Me</h1>
            <div className="grid grid-cols-2 gap-4 mt-8 justify-center items-center">
                <img src={JohnyLinked} alt="Johny Linked" className="object-cover rounded-lg shadow-md" style={{ width: '200px', height: '300px' }} />
                <img src={Volleyball} alt="Volleyball" className="object-cover rounded-lg shadow-md" style={{ width: '600px', height: '450px' }} />
            </div>
        </div>
    );
};

export default AboutMe;