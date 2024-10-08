import React, { useState } from 'react';
import "./Settings.css";

const Settings = () => {
    const [selectedTab, setSelectedTab] = useState('Product Updates');
    const [reportType, setReportType] = useState('manual');
    const [isProxyEnabled, setIsProxyEnabled] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]); // Track selected users
    const [selectedTargetGroups, setselectedTargetGroups] = useState([]);// Track selected Target Group
    //Issue Tracker
    const [isIssueTrackerPopupOpen, setIsIssueTrackerPopupOpen] = useState(false);
    const [trackerName, setTrackerName] = useState('');
    const [trackerURL, setTrackerURL] = useState('');
    const [trackerUser, setTrackerUser] = useState('');
    const [trackerPassword, setTrackerPassword] = useState('');
    const [selectedTracker, setSelectedTracker] = useState('GitHub');
    //end Issue Tracker
    const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false); // State to manage popup visibility
    const [isAddTargetGroupPopupOpen, setIsAddTargetGroupPopupOpen] = useState(false);
    const [isDeleteUserPopupOpen, serIsDeleteUserPopupOpen] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [groupDesc, setGroupDesc] = useState('');
    



    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleProxyToggle = () => {
        setIsProxyEnabled((prevState) => !prevState);
    };

    const handleNotificationToggle = () => {
        setIsNotificationEnabled(!isNotificationEnabled);
    };

    const handleAddIssueTracker = () => {
        setIsIssueTrackerPopupOpen(true);
    };

    const handleIssueTrackerChange = (e) => {
        setSelectedTracker(e.target.value);
    };

    const handleTrackerNameChange = (e) => {
        setTrackerName(e.target.value);
    };

    const handleTrackerURLChange = (e) => {
        setTrackerURL(e.target.value);
    };

    const handleTrackerUserChange = (e) => {
        setTrackerUser(e.target.value);
    };

    const handleTrackerPasswordChange = (e) => {
        setTrackerPassword(e.target.value);
    };

    const handleSubmitIssueTracker = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log('Selected Issue Tracker:', selectedTracker);
        console.log('Tracker Name:', trackerName);
        console.log('Tracker URL:', trackerURL);
        console.log('Tracker User:', trackerUser);
        console.log('Tracker Password:', trackerPassword);
        setIsIssueTrackerPopupOpen(false);
    };


    // Toggle user selection
    const handleUserSelect = (id) => {
        setSelectedUsers((prevSelectedUsers) => {
            if (prevSelectedUsers.includes(id)) {
                return prevSelectedUsers.filter(userId => userId !== id);  // Deselect user
            } else {
                return [...prevSelectedUsers, id];  // Select user
            }
        });
    };

    // Toggle Target selection
    const handleTargetSelect = (id) => {
        setselectedTargetGroups((prevSelectedTarget) => {
            if (prevSelectedTarget.includes(id)) {
                return prevSelectedTarget.filter(userId => userId !== id);  // Deselect user
            } else {
                return [...prevSelectedTarget, id];  // Select user
            }
        });
    };

    // Check if the selected tab is one of the specific tabs to show Save button
    const showSaveButton = ['Product Updates', 'Proxy Settings', 'Notification Settings'].includes(selectedTab);

    const showUserButtons = selectedTab === 'Users';

    const showTargetButton = selectedTab === 'Target Groups';

    const showIssueTrackersButton = selectedTab === 'Issue Trackers';

    // Sample user data
    const userData = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'Tester',
            accessAllTargets: false,
            enabled: true
        },
        {
            id: 2,
            name: 'Alice Smith',
            email: 'alice.smith@company.com',
            role: 'Quality Assurance Engineer',
            accessAllTargets: false,
            enabled: true
        },
        {
            id: 3,
            name: 'David Brown',
            email: 'david.brown@company.com',
            role: 'Developer',
            accessAllTargets: true,
            enabled: true
        },
        {
            id: 4,
            name: 'Emily Clark',
            email: 'emily.clark@company.com',
            role: 'Project Manager',
            accessAllTargets: true,
            enabled: true
        },
        {
            id: 5,
            name: 'Michael Johnson',
            email: 'michael.johnson@company.com',
            role: 'DevOps Engineer',
            accessAllTargets: false,
            enabled: false
        },
        {
            id: 6,
            name: 'Sophia Williams',
            email: 'sophia.williams@company.com',
            role: 'UI/UX Designer',
            accessAllTargets: false,
            enabled: true
        },
        {
            id: 7,
            name: 'James Lee',
            email: 'james.lee@company.com',
            role: 'Security Analyst',
            accessAllTargets: true,
            enabled: true
        }
    ];


    const TargetData = [
        {
            id: 1,
            group_name: "HR Groups",
            desc: "This is HR website which is security built"
        },
        {
            id: 2,
            group_name: "Finance Groups",
            desc: "Finance management platform with strict data access policies"
        },
        {
            id: 3,
            group_name: "Marketing Groups",
            desc: "Website for marketing campaigns and analytics tracking"
        },
        {
            id: 4,
            group_name: "Development Groups",
            desc: "Development portal for internal and external projects"
        },
        {
            id: 5,
            group_name: "Customer Support Groups",
            desc: "Support site for managing customer queries and feedback"
        },
        {
            id: 6,
            group_name: "Sales Groups",
            desc: "Platform for managing sales, leads, and client interactions"
        }
    ];


    // Open/close the Add User popup
    const handleUserAddClosePopup = () => setIsAddUserPopupOpen(true);
    const handleAddClosePopup = () => setIsAddUserPopupOpen(false);

    const handleTargetAddClosePopup = () => setIsAddTargetGroupPopupOpen(true);
    const handleTargetAddClosePopupClose = () => setIsAddTargetGroupPopupOpen(false);

    const handleDeleteOpenPopup = () => serIsDeleteUserPopupOpen(true);
    const handleCloseDeletePopup = () => { serIsDeleteUserPopupOpen(false); };

    const handleAddTarget = () => { handleTargetAddClosePopupClose(); };

    //Issue Tracker
    const handleCancelIssueTracker = () => {
        setIsIssueTrackerPopupOpen(false);
    };


    const isUserSelected = selectedUsers.length > 0;
    const isTargetSelected = selectedTargetGroups.length > 0;

    return (
        <div className='settings'>
            <div className="settings-container">
                {/* Conditionally render the Save button or a custom message */}
                <div className="settings-header">
                    {showSaveButton && <button className="save-btn">Save</button>}

                    {showUserButtons && (
                        <div className="user-actions">
                            <button className="user-btn" onClick={handleUserAddClosePopup}>Add User</button>
                            <button className="user-btn" disabled={!isUserSelected} onClick={handleDeleteOpenPopup}>Delete</button>
                            <button className="user-btn" disabled={!isUserSelected}>Enable</button>
                            <button className="user-btn" disabled={!isUserSelected}>Disable</button>
                        </div>
                    )}

                    {showTargetButton && (
                        <div className="user-actions">
                            <button className="user-btn" onClick={handleTargetAddClosePopup}>Add Group</button>
                            <button className="user-btn" disabled={!isTargetSelected} onClick={handleDeleteOpenPopup}>Delete</button>
                        </div>
                    )}

                    {showIssueTrackersButton && (
                        <div className="user-actions">
                            <button className="user-btn" onClick={handleAddIssueTracker}>Add Issue Trackers</button>
                            <button className="user-btn" disabled onClick={handleDeleteOpenPopup}>Delete</button>
                        </div>
                    )}


                    {!showSaveButton && !showUserButtons && !showTargetButton && !showIssueTrackersButton && (
                        <p className="header-message">{`You are on the ${selectedTab} tab`}</p>  // Custom message for other tabs
                    )}
                </div>

                <div className="tabs">
                    {['Product Updates', 'Proxy Settings', 'Notification Settings', 'Users', 'Target Groups', 'Issue Trackers', 'Scan Types', 'Excluded Hours', 'Engines'].map((tab) => (
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

                    {selectedTab === 'Proxy Settings' && (
                        <div className='proxy-com'>
                            <div className="proxy-settings">
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        id="proxy-toggle"
                                        checked={isProxyEnabled}
                                        onChange={handleProxyToggle}
                                    />
                                    <span className="slider"></span>
                                </label>
                                <span className="proxy-label">Proxy Settings</span>
                            </div>

                            <div className={`settings-container ${isProxyEnabled ? 'enabled' : 'disabled'}`}>
                                <p><i className="info-icon"></i> Used for Product Updates, License Activations, and AcuMonitor Requests.</p>
                                <label htmlFor="protocol">Protocol  </label>
                                <select id="protocol-select" disabled={!isProxyEnabled}>
                                    <option value="none">None</option>
                                    <option value="http">HTTP</option>
                                    <option value="https">HTTPS</option>
                                </select>
                            </div>
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


                    {selectedTab === 'Users' && (
                        <div className="users-tab-content">
                            <h2>User Management</h2>
                            <table className="user-table">
                                <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Access All Targets</th>
                                        <th>Enabled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((user, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    onChange={() => handleUserSelect(user.id)}

                                                />
                                            </td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td style={{ color: user.accessAllTargets ? 'green' : 'red' }}>
                                                {user.accessAllTargets ? '✔' : '✖'}
                                            </td>
                                            <td style={{ color: user.enabled ? 'green' : 'red' }}>
                                                {user.enabled ? '✔' : '✖'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}


                    {selectedTab === 'Target Groups' && (
                        <div className="target-tab-content">
                            <h2>Target Group Management</h2>
                            <table className="target-table">
                                <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Group Name</th>
                                        <th>Description</th>
                                        <th>Enabled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TargetData.map((group, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    onChange={() => handleTargetSelect(group.id)}
                                                />
                                            </td>
                                            <td>{group.group_name}</td>
                                            <td>{group.desc}</td>
                                            <td style={{ color: group.enabled ? 'green' : 'red' }}>
                                                {group.enabled ? '✔' : '✖'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}


                    {selectedTab === 'Issue Trackers' && (
                        <div className="users-tab-content">
                            <p>No issue trackers configured yet</p>
                        </div>
                    )}


                </div>

                {/* Add User Popup */}
                {isAddUserPopupOpen && (
                    <div className='user-slide-page'>
                        <div className="popup">
                            <div className="popup-content">
                                <h3>Add New User</h3>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter first name" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Enter last name" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter password" />
                                    <ul className="password-requirements">
                                        <li>At least 8 characters</li>
                                        <li>Includes both upper and lower case letters</li>
                                        <li>Contains at least one number</li>
                                        <li>Contains at least one special character (e.g., @, #, $, etc.)</li>
                                    </ul>
                                </div>
                                <div className="form-group">
                                    <label>Retype Password</label>
                                    <input type="password" placeholder="Retype password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="role-random">Random Field</label>
                                    <select id="role-random">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>

                                <div className="form-actions">
                                    <button className="user-btn" onClick={handleAddClosePopup}>Add User</button>
                                    <button className="user-btn cancel-btn" onClick={handleAddClosePopup}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete User Popup */}
                {isDeleteUserPopupOpen && (
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

                {/* Target Group Popup */}
                {isAddTargetGroupPopupOpen && (
                    <div className='user-slide-page'>
                        <div className="popup">
                            <div className="popup-content">
                                <h3>Add New Target</h3>

                                {/* Input Fields */}
                                <div className="form-group">
                                    <label htmlFor="groupName">Group Name</label>
                                    <input
                                        type="text"
                                        id="groupName"
                                        value={groupName}
                                        onChange={(e) => setGroupName(e.target.value)}
                                        placeholder="Enter Group Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="groupDesc">Description</label>
                                    <textarea
                                        id="groupDesc"
                                        value={groupDesc}
                                        onChange={(e) => setGroupDesc(e.target.value)}
                                        placeholder="Enter Description"
                                    />
                                </div>

                                {/* Form Actions */}
                                <div className="form-actions">
                                    <button className="user-btn" onClick={handleAddTarget}>Add Target</button>
                                    <button className="user-btn cancel-btn" onClick={handleTargetAddClosePopupClose}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Issue Tracker */}
            {isIssueTrackerPopupOpen && (
            <div className="issue-tracker-popup">
                <div className="popup-content">
                    <h3>Add Issue Tracker</h3>
                    <form className="issue-tracker-form">
                        {/* Dropdown for selecting Issue Tracker */}
                        <div className="form-group">
                            <label htmlFor="issueTrackerType">Issue Tracker</label>
                            <select id="issueTrackerType" onChange={handleIssueTrackerChange}>
                                <option value="GitHub">GitHub</option>
                                <option value="JIRA">JIRA</option>
                                <option value="TFS">TFS</option>
                            </select>
                        </div>

                        {/* Name Input */}
                        <div className="form-group">
                            <label htmlFor="trackerName">Name</label>
                            <input type="text" id="trackerName" placeholder="Enter name" value={trackerName} onChange={handleTrackerNameChange} />
                        </div>

                        {/* URL Input */}
                        <div className="form-group">
                            <label htmlFor="trackerURL">URL</label>
                            <input type="url" id="trackerURL" placeholder="https://api.github.com" value={trackerURL} onChange={handleTrackerURLChange} />
                        </div>

                        {/* User Input */}
                        <div className="form-group">
                            <label htmlFor="trackerUser">User</label>
                            <input type="text" id="trackerUser" placeholder="Enter user" value={trackerUser} onChange={handleTrackerUserChange} />
                        </div>

                        {/* Password Input */}
                        <div className="form-group">
                            <label htmlFor="trackerPassword">Password</label>
                            <input type="password" id="trackerPassword" placeholder="Enter password" value={trackerPassword} onChange={handleTrackerPasswordChange} />
                        </div>

                        {/* Submit Button */}
                        <div className="form-actions">
                            <button type="submit" className="user-btn" onClick={handleSubmitIssueTracker}>Add Tracker</button>
                            <button type="button" className="user-btn cancel-btn" onClick={handleCancelIssueTracker}>Cancel</button>
                        </div>
                    </form>
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
