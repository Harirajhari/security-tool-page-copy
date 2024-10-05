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

    return (
        <div className='settings'>
            <div className="settings-container">
                <div className="settings-header">
                    <button className="save-btn">Save</button>
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
                            {/* Enable/Disable Notification Settings Toggle */}
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

                            {/* Form Fields for Notification Settings */}
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


                </div>

                <footer className="footer">
                    <p>© 2024 Infoziant</p>
                </footer>
            </div>
        </div>
    );
};

export default Settings;
