import React, { useState } from 'react';
import './Header.css';
import { FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai'; // Import user icon from react-icons
import logo from '../../images/Infoziant Logo Final.png'

function Header({ username }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log("User logged out");
    };

    return (
        <header className='header'>
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                <div className="user-info">
                <div className="user-info" onClick={toggleDropdown}>
                    <AiOutlineUser className="user-icon" />
                    {username && <span className="username">{"MURALI"}</span>}
                </div>
                <FaQuestionCircle className="help-icon" />
                </div>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li onClick={() => console.log('Profile clicked')}>Profile</li>
                            <li onClick={() => console.log('Notifications clicked')}>Notifications</li>
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
