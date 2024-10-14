import React, { useState } from 'react';
import "./Settings.css";
import ExcludedHoursPopup from './ExcludedHoursPopup';

const Settings = () => {
    const [selectedTab, setSelectedTab] = useState('Product Updates');
    const [reportType, setReportType] = useState('manual');
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

    //Scan Type
    const [isScanTypePopupOpen, setisScanTypePopupOpen] = useState(false);
    const [selectedScanType, setselectedScanType] = useState([]); // Track selected users
    //end Scan Type



    // Except working hours
    const [selectedExcludedHourChecked, setSelectedExcludedHourChecked] = useState(null); // Will store the ID of the selected excluded hour
    const [IsAddExcludedHours, setIsAddExcludedHours] = useState(false);
    // Example of selected excluded hours (can be an array of IDs or data objects)
    const [selectedExcludedHours, setSelectedExcludedHours] = useState([]);
    console.log(selectedExcludedHours);
    


    const [isDeleteUserPopupOpen, setIsDeleteUserPopupOpen] = useState(false);
    const [isDeleteExcluserPopOpen,setisDeleteExcluserPopOpen] = useState(false);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleNotificationToggle = () => {
        setIsNotificationEnabled(!isNotificationEnabled);
    }

    const handleScanTypeSelect = (id) => {
        setselectedScanType((prevSelectedTarget) => {
            if (prevSelectedTarget.includes(id)) {
                return prevSelectedTarget.filter(userId => userId !== id);  // Deselect user
            } else {
                return [...prevSelectedTarget, id];  // Select user
            }
        });
    };

  // Handle selection of excluded hours
const handleExcludedHourSelect = (id) => {
    setSelectedExcludedHours((prevSelected) => {
        if (prevSelected.includes(id)) {
            return prevSelected.filter((hourId) => hourId !== id);  // Deselect
        } else {
            return [...prevSelected, id];  // Select
        }
    });
};

const handleSingleExcludedHourChecked = (id) => {
    setSelectedExcludedHourChecked(id);  // Set the selected ID (only one can be checked)
};

    //Exclued Hours 
    const handleSaveExcludedHours = () => {
        // Add your logic to save the excluded hours
        console.log("Excluded hours saved");
    };

    // Function to create a new excluded hours profile
    const handleCreateExcludedProfile = () => {
        // Add your logic to create a new excluded hours profile
        console.log("Creating a new excluded hours profile");
        setIsAddExcludedHours(true);
    };


  


    // Check if the selected tab is one of the specific tabs to show Save button
    const showSaveButton = ['Product Updates', 'Notification Settings', 'Scan Types'].includes(selectedTab);
    
    const showScanTypesButton = selectedTab === 'Scan Types';

    const showExcluedHoursButton = selectedTab === 'Excluded Hours';


    const ScanType = [
        {
            id: 1,
            name: "Full Scan",
            checked: true,
        },
        {
            id: 2,
            name: "High Rish Vulnerabilities",
            checked: true
        },
        {
            id: 3,
            name: "cross site scripting vulnerability",
            checked: true
        },
        {
            id: 4,
            name: "sql injection vulnerability",
            checked: true
        },
        {
            id: 5,
            name: "weak Password",
            checked: true
        },
        {
            id: 6,
            name: "Crawl Only",
            checked: true
        }
    ]

    const Excluded_Hours = [
        {
            id: 1,
            name: "No excluded hours in use1",
        },
        {
            id: 2,
            name: "Allows scans from 9am to 5pm"
        },
        {
            id: 3,
            name: "Except working hours"
        },
        {
            id: 4,
            name: "No weekends"
        }
    ]


        // Function to delete selected excluded hours
        const handleDeleteExcludedHours = () => {
            setisDeleteExcluserPopOpen(true);
            console.log("successfully deleted");
            
        };

    const handleDeleteOpenPopup = () => setIsDeleteUserPopupOpen(true);
    const handleCloseDeletePopup = () => {
        setIsDeleteUserPopupOpen(false);  // Close the popup
        console.log("Sucessfully deleted");
    };

const handleCancelPopup = () =>{

}

    //Scan Type
    const handleAddScanType = () => {
        setisScanTypePopupOpen(true);
    };

    // Define the save function
const handleSave = () => {
    alert("Saved completed");
};

    const isScanTypeSelected = selectedScanType.length > 0;
    const isSelectedExcludedHours = selectedExcludedHours.length>0;
    console.log(isSelectedExcludedHours);
    

    return (
        <div className='settings'>
            <div className="settings-container">
                {/* Conditionally render the Save button or a custom message */}
                <div className="settings-header">
                    {showSaveButton &&<button className="save-btn" onClick={handleSave}>Save</button>}
            
                    {showScanTypesButton && (
                        <div className="user-actions">
                            <button className="user-btn" style={{ marginLeft: '5px' }} onClick={handleAddScanType}>New</button>
                            <button className="user-btn" disabled={!isScanTypeSelected} onClick={handleDeleteOpenPopup}> Delete Selected</button>
                        </div>
                    )}

                    {showExcluedHoursButton && (
                        <div className="user-actions">
                            <button className="user-btn" style={{ marginLeft: '5px' }} onClick={handleCreateExcludedProfile}>Create Excluded Hours Profile</button>
                            <button className="user-btn" disabled={!isSelectedExcludedHours} onClick={handleSaveExcludedHours}>Save Excluded Hours</button>
                            
                            <button className="user-btn" disabled={selectedExcludedHours.length === 0} onClick={handleDeleteExcludedHours}>
                                Delete Selected
                            </button>
                        </div>
                    )}

                    
                    {!showSaveButton && !showScanTypesButton && !showExcluedHoursButton &&(
                        <p className="header-message">{`You are on the ${selectedTab} tab`}</p>  // Custom message for other tabs
                    )}
                </div>

                <div className="tabs">
                    {['Product Updates', 'Notification Settings', 'Scan Types', 'Excluded Hours'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-link ${selectedTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    {selectedTab === 'Product Updates' && (
                        <div className="update-options">
                            <label htmlFor="update-selection">Check for updates:</label>
                            <select
                                id="update-selection"
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                            >
                                <option value="auto-download">Download and install updates automatically</option>
                                <option value="auto-notify">Notify me of new product updates</option>
                                <option value="manual">Do not automatically check for updates (Not Recommended)</option>
                            </select>
                            <div className="version-info">
                                <span>Version: 12.0.180911134</span>
                                <span>(11 September 2018)</span>
                                <p>You are using the Latest Version</p>
                            </div>
                            <button className="update-btn">Check for Updates</button>
                        </div>
                    )}

                    {selectedTab === 'Notification Settings' && (
                        <div className='notification-com'>
                            <div className="notification-settings">
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        id="notification-toggle"
                                        checked={isNotificationEnabled}
                                        onChange={handleNotificationToggle}
                                    />
                                    <span className="slider"></span>
                                </label>
                                <span className="notification-label">Notification Settings</span>
                            </div>

                            <div className={`settings-container ${isNotificationEnabled ? 'enabled' : 'disabled'}`}>
                                <p><i className="info-icon"></i> Configure SMTP server for notifications.</p>

                                <div className="form-group">
                                    <label htmlFor="smtp-server">SMTP Server</label>
                                    <input
                                        type="text"
                                        id="smtp-server"
                                        placeholder="Enter SMTP Server"
                                        disabled={!isNotificationEnabled}  // Disabled when toggle is off
                                />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="port">Port</label>
                                    <input
                                        type="number"
                                       id="port"
                                        placeholder="Enter Port"
                                        disabled={!isNotificationEnabled}  // Disabled when toggle is off
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="from-address">From Address</label>
                                    <input
                                        type="email"
                                        id="from-address"
                                        placeholder="Enter From Address"
                                        disabled={!isNotificationEnabled}  // Disabled when toggle is off
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="security">Security</label>
                                    <select id="security" disabled={!isNotificationEnabled}>
                                        <option value="none">None</option>
                                        <option value="auto">Auto</option>
                                        <option value="ssl">SSL</option>
                                        <option value="tls">TLS</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}


                    {selectedTab === 'Scan Types' && (
                        <table className="scan-types-table">
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Name</th>
                                    <th>Build-in</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ScanType.map((scan, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleScanTypeSelect(scan.id)}
                                            />
                                        </td>
                                        <td>{scan.name}</td>
                                        <td>
                                            <input type="checkbox"
                                                checked={scan.checked} // Check based on the `checked` state
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    )}

                  {selectedTab === 'Excluded Hours' && (
    <table className="scan-types-table">
        <thead>
            <tr>
                <th>Select</th>
                <th>Name</th>
                <th>Build-in</th>
            </tr>
        </thead>
        <tbody>
            {Excluded_Hours.map((scan, index) => (
                <tr key={index}>
                    <td>
                        <input
                            type="checkbox"
                            checked={selectedExcludedHours.includes(scan.id)} // Check if this ID is selected
                            onChange={() => handleExcludedHourSelect(scan.id)} // Handle selection
                        />
                    </td>
                    <td>{scan.name}</td>
                    <td>
                        <input
                            className="radiobutton"
                            type="checkbox"
                            checked={selectedExcludedHourChecked === scan.id}  // Only one can be checked at a time
                            onChange={() => handleSingleExcludedHourChecked(scan.id)}  // Handle single selection
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)}

                </div>

                {/* Delete User Popup */}
                {isDeleteUserPopupOpen && (
                    <div className='delete-notification'>
                        <div className='popup'>
                            <div className='popup-content'>
                                <p>Are you sure you want to delete this {selectedTab}?</p> {/* Clear wording */}
                                <div className="form-actions">
                                    <button className="user-btn" onClick={handleCloseDeletePopup}>Delete User</button>
                                    <button className="user-btn cancel-btn" onClick={handleCancelPopup}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                 {/* Delete User Popup */}
                 {isDeleteExcluserPopOpen && (
                    <div className='delete-notification'>
                        <div className='popup'>
                            <div className='popup-content'>
                                <p>Are you sure you want to delete this {selectedTab}?</p> {/* Clear wording */}
                                <div className="form-actions">
                                    <button className="user-btn" onClick={handleCloseDeletePopup}>Delete User</button>
                                    <button className="user-btn cancel-btn" onClick={handleCloseDeletePopup}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}



                {/* Scan Type popup */}
                {isScanTypePopupOpen && (
                    <div className="scan-type-popup">
                        <div className="scan-type-popup-content">
                            <h2>Add New Scan Type</h2>

                            <div className="scan-type-container">
                                {/* Left side - Checks List */}
                                <div className="scan-list">
                                    <label htmlFor="scanName">Name</label>
                                    <input type="text" id="scanName" className="scan-input" />

                                    <ul className="checks-tree">
                                        <li>
                                            <input type="checkbox" id="allChecks" />
                                            <label htmlFor="allChecks">All checks</label>
                                            <ul>
                                                <li>
                                                    <input type="checkbox" id="csrf" />
                                                    <label htmlFor="csrf">CSRF (Cross-site Request Forgery)</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="crawlerTests" />
                                                    <label htmlFor="crawlerTests">Crawler tests</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="domXss" />
                                                    <label htmlFor="domXss">DOM-based XSS tests</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="httpData" />
                                                    <label htmlFor="httpData">HTTP Data tests</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="locationTests" />
                                                    <label htmlFor="locationTests">Location tests</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="runtime" />
                                                    <label htmlFor="runtime">Runtime passive analysis</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="scanning" />
                                                    <label htmlFor="scanning">Scanning tests</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="slowHttpDos" />
                                                    <label htmlFor="slowHttpDos">Slow HTTP Denial of Service (DoS)</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="tlsVulnerability" />
                                                    <label htmlFor="tlsVulnerability">TLS1-SSLv3 renegotiation vulnerability</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="targetTests" />
                                                    <label htmlFor="targetTests">Target tests</label>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right side - Check Description */}
                                <div className="check-description">
                                    <h3>Check Description</h3>
                                    <p>No description available for the selected check</p>
                                </div>
                            </div>

                            <div className="button-group">
                                <button className="close-btn" onClick={() => setisScanTypePopupOpen(false)}>Save</button>
                                <button className="close-btn close-btn-alt" onClick={() => setisScanTypePopupOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                )}

                {IsAddExcludedHours && (
                    <div className="popup-container">
                        <div className="popup-content">
                            <h1>Add Excluded Hours</h1>
                            <ExcludedHoursPopup
                                isOpen={IsAddExcludedHours}
                                onClose={() => setIsAddExcludedHours(false)}
                            />
                            {/* Add your form or other content here */}
                            <button className="close-btn" onClick={() => setIsAddExcludedHours(false)}>Close</button>
                        </div>
                    </div>
                )}


                <footer className="footer">
                    <p>© 2024 Infoziant</p>
                </footer>
            </div>
        </div>
    );
};

export default Settings;
