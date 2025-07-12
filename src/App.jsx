import { useState } from "react";
import "./App.css";

function App() {
  const [settings, setSettings] = useState({
    livelistPassword: true,
    autoGenerateLivelist: true,
    showCandidatePhoto: true,
    showCandidateJobTitle: false,
    showJobLocation: true,
    showCurrentCompany: true,
    showExecutiveBrief: true,
    showReceivedDateTime: true,
    showCandidateStage: true,
    showWorkHistory: false,
    showEducation: false,
    showCandidateRating: true,
    autoRejectCandidates: false,
    sendThankYouLetter: false,
    showLivelistFooter: false,
    sendWithAttachments: true,
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
    // Here you would typically send the settings to your backend
  };

  const handleCancel = () => {
    console.log("Settings cancelled");
    // Here you would typically reset settings or close the modal
  };

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <div className="settings-header">
          <h2 className="settings-title">Livelist™ Settings</h2>
          <button className="close-button" onClick={handleCancel}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="settings-tabs">
          <button className="tab-button active">GENERAL SETTINGS</button>
          <button className="tab-button">THEME CONFIGURATION</button>
          <button className="tab-button">SECURITY</button>
        </div>

        <div className="settings-content">
          <div className="info-section">
            <div className="info-icon">ⓘ</div>
            <div className="info-text">
              <h3>How this works</h3>
              <ul>
                <li>
                  Set company defaults for logo and columns in the Job
                  Livelist™
                </li>
                <li>
                  Users may overwrite these settings per individual LiveList™
                </li>
              </ul>
            </div>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">1.</span>
                <div>
                  <div className="setting-label">Livelist™ Password</div>
                  <div className="setting-description">
                    Setup a password to access LiveList™
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.livelistPassword ? "active" : ""}`}
                onClick={() => handleToggle("livelistPassword")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">2.</span>
                <div>
                  <div className="setting-label">Auto-generate Livelist</div>
                  <div className="setting-description">
                    Auto-generate Livelist when new job is created
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.autoGenerateLivelist ? "active" : ""}`}
                onClick={() => handleToggle("autoGenerateLivelist")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">3.</span>
                <div>
                  <div className="setting-label">Show Candidate's photo</div>
                  <div className="setting-description">
                    LiveList™ shows Candidate's photo
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showCandidatePhoto ? "active" : ""}`}
                onClick={() => handleToggle("showCandidatePhoto")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">4.</span>
                <div>
                  <div className="setting-label">Show Candidate job title</div>
                  <div className="setting-description">
                    LiveList™ shows Candidate's latest job title
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showCandidateJobTitle ? "active" : ""}`}
                onClick={() => handleToggle("showCandidateJobTitle")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">5.</span>
                <div>
                  <div className="setting-label">Show Job location</div>
                  <div className="setting-description">
                    LiveList™ shows location of the Job
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showJobLocation ? "active" : ""}`}
                onClick={() => handleToggle("showJobLocation")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">6.</span>
                <div>
                  <div className="setting-label">
                    Show Candidate's current company
                  </div>
                  <div className="setting-description">
                    LiveList™ shows the current company of the Candidate
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showCurrentCompany ? "active" : ""}`}
                onClick={() => handleToggle("showCurrentCompany")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">7.</span>
                <div>
                  <div className="setting-label">Show Executive Brief</div>
                  <div className="setting-description">
                    LiveList™ shows Executive Brief of the Candidate
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showExecutiveBrief ? "active" : ""}`}
                onClick={() => handleToggle("showExecutiveBrief")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">8.</span>
                <div>
                  <div className="setting-label">Show received date & time</div>
                  <div className="setting-description">
                    LiveList™ shows received date & time of the candidate's
                    application
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showReceivedDateTime ? "active" : ""}`}
                onClick={() => handleToggle("showReceivedDateTime")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">9.</span>
                <div>
                  <div className="setting-label">
                    Show Candidate Stage | Status
                  </div>
                  <div className="setting-description">
                    LiveList™ shows Candidate's Stage | Status
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showCandidateStage ? "active" : ""}`}
                onClick={() => handleToggle("showCandidateStage")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">10.</span>
                <div>
                  <div className="setting-label">
                    Show Candidate's Work History
                  </div>
                  <div className="setting-description">
                    LiveList™ shows Candidate's work history details
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showWorkHistory ? "active" : ""}`}
                onClick={() => handleToggle("showWorkHistory")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">11.</span>
                <div>
                  <div className="setting-label">
                    Show Candidate's Education
                  </div>
                  <div className="setting-description">
                    LiveList™ shows Candidate's education details
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showEducation ? "active" : ""}`}
                onClick={() => handleToggle("showEducation")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">12.</span>
                <div>
                  <div className="setting-label">
                    Allow & show Candidate rating
                  </div>
                  <div className="setting-description">
                    LiveList™ allows clients to rate Candidate & shows current
                    Candidate rating
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showCandidateRating ? "active" : ""}`}
                onClick={() => handleToggle("showCandidateRating")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">13.</span>
                <div>
                  <div className="setting-label">
                    Automatically reject Candidate(s) rejected by clients
                  </div>
                  <div className="setting-description">
                    Automatically reject Candidate(s) rejected by clients
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.autoRejectCandidates ? "active" : ""}`}
                onClick={() => handleToggle("autoRejectCandidates")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item sub-setting">
              <div className="setting-info">
                <div>
                  <div className="setting-label">
                    Send thank you letter to rejected Candidate(s) by clients
                  </div>
                  <div className="setting-description">
                    LiveList™ will send automaticaly an email to rejected
                    Candidate by clients
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.sendThankYouLetter ? "active" : ""}`}
                onClick={() => handleToggle("sendThankYouLetter")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">14.</span>
                <div>
                  <div className="setting-label">Show LiveList™ footer</div>
                  <div className="setting-description">
                    LiveList™ hows "Powered by Vincere" footer
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.showLivelistFooter ? "active" : ""}`}
                onClick={() => handleToggle("showLivelistFooter")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <span className="setting-number">15.</span>
                <div>
                  <div className="setting-label">Send with Attachments</div>
                  <div className="setting-description">
                    Set up the default option to send with attachments
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${settings.sendWithAttachments ? "active" : ""}`}
                onClick={() => handleToggle("sendWithAttachments")}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
