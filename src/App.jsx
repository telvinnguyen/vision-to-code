import React from "react";
import ToggleSettingItem from "./components/ToggleSettingItem";
import "./App.css";

function App() {
  const handleToggle = (isActive) => {
    console.log("Toggle state changed:", isActive);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Settings</h1>
        <div className="settings-list">
          <ToggleSettingItem
            number="1"
            title="Enable Notifications"
            description="Receive notifications when important events occur"
            isActive={false}
            onToggle={handleToggle}
          />
          <ToggleSettingItem
            number="2"
            title="Auto-generate Livelist"
            description="Auto-generate Livelist when new job is created"
            isActive={true}
            onToggle={handleToggle}
          />
          <ToggleSettingItem
            number="3"
            title="Auto-save Changes"
            description="Automatically save changes as you work"
            isActive={true}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
