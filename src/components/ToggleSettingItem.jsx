import React, { useState } from "react";
import "./ToggleSettingItem.css";

const ToggleSettingItem = ({
  number = "2",
  title = "Auto-generate Livelist",
  description = "Auto-generate Livelist when new job is created",
  isActive = true,
  onToggle,
}) => {
  const [active, setActive] = useState(isActive);

  const handleToggle = () => {
    const newState = !active;
    setActive(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="livelist-setting-block">
      <div className="content">
        <div className="number">{number}.</div>
        <div className="text">
          <div className="setting-name">{title}</div>
          <div className="setting-description">{description}</div>
        </div>
      </div>
      <div className="toggle-container" onClick={handleToggle}>
        <svg
          className={`toggle ${active ? "toggle-active" : "toggle-inactive"}`}
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="29" height="17" rx="8.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="29"
            height="17"
            rx="8.5"
            stroke={active ? "#0F70B8" : "#dcdcdc"}
          />
          <circle
            cx={active ? "21" : "9"}
            cy="9"
            r="6"
            fill={active ? "#0F70B8" : "#dcdcdc"}
            style={{
              transition: "cx 0.2s ease, fill 0.2s ease",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default ToggleSettingItem;
