import React, { useState } from 'react';
import "./Settings.css";

const Settings = () => {
    const [selectedTab, setSelectedTab] = useState('Product Updates');
    const [reportType, setReportType] = useState('manual');
    const [isProxyEnabled, setIsProxyEnabled] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const handleProxyToggle = () => {
        setIsProxyEnabled((prevState) => !prevState);
    };

    const handleNotificationToggle = () => {
        setIsNotificationEnabled(!isNotificationEnabled);
    };

    // Check if the selected tab is one of the specific tabs to show Save button
    const showSaveButton = ['Product Updates', 'Proxy Settings', 'Notification Settings'].includes(selectedTab);

    const showUserButtons = selectedTab === 'Users';

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
                
        // You can add more user data objects here
    ];

    return (
        <div className='settings'>
            <div className="settings-container">
                {/* Conditionally render the Save button or a custom message */}
                <div className="settings-header">
                    {showSaveButton && <button className="save-btn">Save</button>}

                    {showUserButtons && (
                        <div className="user-actions">
                            <button className="user-btn">Add User</button>
                            <button className="user-btn">Delete</button>
                            <button className="user-btn">Enable</button>
                            <button className="user-btn">Disable</button>
                        </div>
                    )}

                    {!showSaveButton && !showUserButtons && (
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
                                                />
                                            </td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{user.accessAllTargets ? '✔' : '✖'}</td>
                                            <td>{user.enabled ? '✔' : '✖'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>

                <footer className="footer">
                    <p>© 2024 Infoziant</p>
                </footer>
            </div>
        </div>
    );
};

export default Settings;
