import React, { useState } from 'react';
import './popupStyles.css'; // Ensure you import your CSS file

const ExcludedHoursPopup = ({ isOpen, onClose }) => {
    const [profileName, setProfileName] = useState('New Profile');
    const [excludedHours, setExcludedHours] = useState(Array(7).fill(Array(24).fill(false)));

    const handleHourToggle = (dayIndex, hourIndex) => {
        const newExcludedHours = excludedHours.map((day, index) =>
            index === dayIndex ? day.map((hour, hIndex) => (hIndex === hourIndex ? !hour : hour)) : day
        );
        setExcludedHours(newExcludedHours);
    };

    return (
        isOpen && (
            <div className="popup-container-Hours">
                <div className="popup-content">
                    <h1>Create Excluded Hours Profile</h1>
                    <label>
                        Name
                        <input 
                            type="text" 
                            value={profileName} 
                            onChange={(e) => setProfileName(e.target.value)} 
                        />
                    </label>
                    <div className="legend">
                        <div className="excluded" /> Excluded
                        <div className="not-excluded" /> Not Excluded
                    </div>
                    <div className="hour-grid">
                        <div className="grid-container">
                            {/* Create hour labels */}
                            <div className="hour-labels">
                                {Array.from({ length: 25 }, (_, hourIndex) => (
                                    <div key={hourIndex} className="hour-label">{String(hourIndex).padStart(2, '0')}</div>
                                ))}
                            </div>
                            {/* Display days (as rows) */}
                            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, dayIndex) => (
                                <div key={day} className="day-row">
                                    <div className="day-label">{day}</div>
                                    {excludedHours[dayIndex].map((isExcluded, hourIndex) => (
                                        <div
                                            key={hourIndex}
                                            className={`hour-box ${isExcluded ? 'excluded' : 'not-excluded'}`}
                                            onClick={() => handleHourToggle(dayIndex, hourIndex)}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="create-btn" onClick={onClose}>Create Profile</button>
                        <button className="close-btn" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default ExcludedHoursPopup;
